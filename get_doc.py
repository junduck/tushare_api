import csv
import json
import re
import time
import argparse

from dataclasses import asdict
from pathlib import Path
from typing import Dict, List, Optional

import requests
from bs4 import BeautifulSoup

from api_doc import ApiDoc, TableField


class TushareDocParser:
    """Parser for Tushare API documentation HTML"""

    def __init__(self, html_content: str):
        self.soup = BeautifulSoup(html_content, 'html.parser')

    def parse(self, title: str = "") -> Optional[ApiDoc]:
        """Parse the HTML document and extract API information"""
        # Find the document section
        doc_section = self.soup.find('section', id='document')
        if not doc_section:
            return None

        content = doc_section.find('div', class_='content')
        if not content:
            return None

        # Extract API name
        api_name = self._extract_api_name(content)
        if not api_name:
            return None

        # Extract description
        description = self._extract_description(content)

        # Extract tables
        tables = content.find_all('table')
        input_params = []
        output_params = []

        # Find input and output parameter tables
        for i, table in enumerate(tables):
            # Check the heading before the table
            prev_text = ""
            prev_elem = table.find_previous(['p', 'h2', 'h3', 'h4'])
            if prev_elem:
                prev_text = prev_elem.get_text().strip()

            if '输入参数' in prev_text or (i == 0 and '输出参数' not in prev_text):
                input_params = self._parse_input_table(table)
            elif '输出参数' in prev_text or (i == 1 and input_params):
                output_params = self._parse_output_table(table)

        return ApiDoc(
            api_name=api_name,
            title=title,
            description=description,
            input_params=input_params,
            output_params=output_params
        )

    def _extract_api_name(self, content) -> Optional[str]:
        """Extract API name from '接口：xxx' pattern"""
        text = content.get_text()
        # Match only ASCII alphanumeric and underscore for API names
        # This prevents Chinese characters from being included
        match = re.search(r'接口[：:]\s*([a-zA-Z0-9_]+)', text)
        if match:
            return match.group(1)
        return None

    def _extract_description(self, content) -> str:
        """Extract description text"""
        text = content.get_text()
        match = re.search(r'描述[：:]\s*([^\n]+)', text)
        if match:
            return match.group(1).strip()
        return ""

    def _parse_input_table(self, table) -> List[TableField]:
        """Parse input parameters table"""
        return self._parse_table(table, has_required=True)

    def _parse_output_table(self, table) -> List[TableField]:
        """Parse output parameters table"""
        return self._parse_table(table, has_required=False)

    def _parse_table(self, table, has_required: bool) -> List[TableField]:
        """Parse a table and extract fields"""
        fields = []
        rows = table.find_all('tr')[1:]  # Skip header row

        for row in rows:
            cols = row.find_all('td')
            if len(cols) < 3:
                continue

            name = cols[0].get_text().strip()
            type_str = cols[1].get_text().strip()

            if has_required:
                required = cols[2].get_text().strip() if len(cols) > 2 else 'N'
                description = cols[3].get_text(
                ).strip() if len(cols) > 3 else ''
            else:
                required = cols[2].get_text().strip() if len(cols) > 2 else 'N'
                description = cols[3].get_text(
                ).strip() if len(cols) > 3 else ''

            fields.append(TableField(
                name=name,
                type=type_str,
                required=required,
                description=description
            ))

        return fields


class TushareDocFetcher:
    """Fetch and process Tushare documentation"""

    BASE_URL = "https://tushare.pro"

    def __init__(self, output_dir: str = "output", delay: float = 1.0):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def load_doc_ids(self, json_file: str) -> List[Dict]:
        """Load document IDs from JSON file"""
        with open(json_file, 'r', encoding='utf-8') as f:
            return json.load(f)

    def fetch_document(self, doc_id: str) -> Optional[str]:
        """Fetch a single document by ID"""
        url = f"{self.BASE_URL}/document/2?doc_id={doc_id}"
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"Error fetching doc_id={doc_id}: {e}")
            return None

    def process_document(self, doc_info: Dict) -> Optional[str]:
        """Process a single document and generate JSON"""
        doc_id = doc_info['doc_id']
        title = doc_info['title']

        # Fetch document
        html_content = self.fetch_document(doc_id)
        if not html_content:
            return None

        # Parse document
        parser = TushareDocParser(html_content)
        api_doc = parser.parse(title)

        if not api_doc:
            return None

        # Save to file
        filename = f"{api_doc.api_name}.json"
        filepath = self.output_dir / filename

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(asdict(api_doc), f, ensure_ascii=False, indent=2)

        return filename

    def process_all(self, json_file: str):
        """Process all documents from JSON file"""
        docs = self.load_doc_ids(json_file)

        print(f"Found {len(docs)} documents to process")
        print(f"Output directory: {self.output_dir.absolute()}")

        results = {
            'success': [],
            'failed': [],
            'skipped': []
        }

        for i, doc_info in enumerate(docs, 1):
            try:
                filename = self.process_document(doc_info)
                if filename:
                    results['success'].append({
                        'doc_id': doc_info['doc_id'],
                        'title': doc_info['title'],
                        'file': filename
                    })
                else:
                    results['skipped'].append(doc_info)
            except Exception as e:
                print(f"  ✗ Error: {e}")
                results['failed'].append({
                    'doc_id': doc_info['doc_id'],
                    'title': doc_info['title'],
                    'error': str(e)
                })

            # Rate limiting
            if i < len(docs):
                time.sleep(self.delay)

        # Print summary
        print(f"✓ Success: {len(results['success'])}")
        print(f"⚠ Skipped: {len(results['skipped'])}")
        print(f"✗ Failed: {len(results['failed'])}")

        # Save results as CSV
        results_file = self.output_dir / 'processing_results.csv'
        with open(results_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)

            # Write header
            writer.writerow(['Status', 'Doc ID', 'Title', 'File', 'Error'])

            # Write successful results
            for item in results['success']:
                writer.writerow(['Success', item['doc_id'],
                                item['title'], item['file'], ''])

            # Write skipped results
            for item in results['skipped']:
                writer.writerow(
                    ['Skipped', item['doc_id'], item['title'], '', ''])

            # Write failed results
            for item in results['failed']:
                writer.writerow(['Failed', item['doc_id'],
                                item['title'], '', item['error']])

        print(f"\nResults saved to: {results_file}")
        print("=" * 70)

        return results


def main():
    """Main entry point"""

    parser = argparse.ArgumentParser(
        description='Parse Tushare documentation and generate TypeScript definitions')
    parser.add_argument('--input', '-i', default='doc_ids.json',
                        help='Input JSON file with doc IDs')
    parser.add_argument('--output', '-o', default='api',
                        help='Output directory for JSON files')
    parser.add_argument('--delay', '-d', type=float,
                        default=1.0, help='Delay between requests (seconds)')

    args = parser.parse_args()

    fetcher = TushareDocFetcher(output_dir=args.output, delay=args.delay)
    fetcher.process_all(args.input)


if __name__ == '__main__':
    main()
