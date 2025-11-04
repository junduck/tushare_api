import csv
import json
import re
from html.parser import HTMLParser
from typing import Dict, List, Set

import requests


class TushareSidebarParser(HTMLParser):
    """Parser to extract doc_id values from Tushare sidebar"""

    def __init__(self):
        super().__init__()
        self.doc_ids = []
        self.doc_info = []
        self.current_href = None

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            attrs_dict = dict(attrs)
            href = attrs_dict.get('href', '')

            # Extract doc_id from href like "/document/2?doc_id=25"
            match = re.search(r'doc_id=(\d+)', href)  # type: ignore
            if match:
                doc_id = match.group(1)
                self.doc_ids.append(doc_id)
                self.current_href = href

    def handle_data(self, data):
        # Store the link text along with doc_id
        data = data.strip()
        if data and self.current_href and len(self.doc_info) < len(self.doc_ids):
            self.doc_info.append({
                'doc_id': self.doc_ids[len(self.doc_info)],
                'title': data,
                'url': self.current_href
            })
            self.current_href = None


def extract_tushare_doc_ids(base_url: str = "https://tushare.pro/document/2?doc_id=24") -> List[Dict[str, str]]:
    """
    Extract all doc_id values from Tushare documentation page

    Args:
        base_url: The Tushare documentation URL to scrape

    Returns:
        List of dictionaries containing doc_id, title, and url

    Example:
        >>> doc_ids = extract_tushare_doc_ids()
        >>> print(f"Found {len(doc_ids)} documents")
        >>> for doc in doc_ids[:5]:
        ...     print(f"{doc['doc_id']}: {doc['title']}")
    """
    try:
        # Send GET request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        print(f"Fetching URL: {base_url}")
        response = requests.get(base_url, headers=headers, timeout=30)
        response.raise_for_status()
        response.encoding = 'utf-8'

        html_content = response.text

        # Parse HTML
        parser = TushareSidebarParser()
        parser.feed(html_content)

        # Remove duplicates while preserving order
        seen: Set[str] = set()
        unique_docs = []
        for doc in parser.doc_info:
            if doc['doc_id'] not in seen:
                seen.add(doc['doc_id'])
                unique_docs.append(doc)

        print(f"Successfully extracted {len(unique_docs)} unique documents")
        return unique_docs

    except requests.RequestException as e:
        print(f"Error fetching URL: {e}")
        return []
    except Exception as e:
        print(f"Error parsing HTML: {e}")
        return []


def save_doc_ids(doc_ids: List[Dict[str, str]], output_format: str = 'all'):
    """
    Save extracted doc_ids to files

    Args:
        doc_ids: List of document information dictionaries
        output_format: 'csv', 'json', or 'all'
    """

    if not doc_ids:
        return

    if output_format in ['csv', 'all']:
        # Save as CSV
        with open('doc_ids.csv', 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=['doc_id', 'title', 'url'])
            writer.writeheader()
            writer.writerows(doc_ids)

    if output_format in ['json', 'all']:
        # Save as JSON
        with open('doc_ids.json', 'w', encoding='utf-8') as f:
            json.dump(doc_ids, f, ensure_ascii=False, indent=2)


def main():

    # Extract doc_ids
    doc_ids = extract_tushare_doc_ids()

    if not doc_ids:
        print("Failed to extract doc_ids")
        return

    # Display summary
    print(f"Total unique documents found: {len(doc_ids)}")
    print("Saving results to files...")
    print("=" * 70)
    save_doc_ids(doc_ids, output_format='all')


if __name__ == "__main__":
    main()
