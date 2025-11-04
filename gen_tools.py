import json
from pathlib import Path
from api_doc import load_api_doc, ApiDoc


class TushareMCPToolBuilder:
    """Build MCP-compatible tool definitions from API documentation"""

    TYPE_MAPPING = {
        'str': 'string',
        'int': 'number',
        'float': 'number',
        'bool': 'boolean',
    }

    def __init__(self, doc: ApiDoc, tool_prefix: str = "tushare"):
        self.doc = doc
        self.tool_prefix = tool_prefix

    def _map_type(self, py_type: str) -> str:
        """Map Python type to JSON Schema type"""
        return self.TYPE_MAPPING.get(py_type, 'string')

    def _should_add_date_pattern(self, param_name: str) -> bool:
        """Check if this parameter should have a date pattern"""
        return 'date' in param_name

    def build(self) -> dict:
        """Generate MCP tool definition from API documentation"""
        tool_def = {
            "name": f"{self.tool_prefix}_{self.doc.api_name}",
            "description": self._build_description(),
            "inputSchema": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }

        # Build input schema properties
        for field in self.doc.input_params:
            json_type = self._map_type(field.type)
            prop = {
                "type": json_type,
                "description": field.description
            }

            # Add pattern for date fields
            if self._should_add_date_pattern(field.name):
                prop['pattern'] = r'^\d{8}$'

            tool_def["inputSchema"]["properties"][field.name] = prop

            # Add to required list if marked as required
            if field.required == 'Y':
                tool_def["inputSchema"]["required"].append(field.name)

        return tool_def

    def _build_description(self) -> str:
        """Build comprehensive description from API documentation"""
        parts = []

        # Add title and description
        if self.doc.title:
            parts.append(self.doc.title)
        if self.doc.description:
            parts.append(self.doc.description)

        # Add information about output fields to help understand what data is returned
        if self.doc.output_params:
            output_fields = []
            for field in self.doc.output_params[:10]:  # Limit to first 10 fields to keep description manageable
                field_desc = field.required or field.description
                if field_desc:
                    output_fields.append(f"{field.name}({field_desc})")
                else:
                    output_fields.append(field.name)

            if output_fields:
                parts.append(f"返回字段包括：{', '.join(output_fields)}")

        return '。'.join(parts) + '。'


def main():
    """Process all API JSON files and generate MCP tool definitions"""
    api_dir = Path("api")
    tools_dir = Path("tools")

    # Create tools directory if it doesn't exist
    tools_dir.mkdir(exist_ok=True)

    # Process all JSON files in api directory
    json_files = list(api_dir.glob("*.json"))

    print(f"Found {len(json_files)} JSON files to process")

    success_count = 0
    error_count = 0

    for json_file in json_files:
        try:
            # Skip disabled files
            if json_file.name.endswith("-disable"):
                print(f"Skipping disabled file: {json_file.name}")
                continue

            # Load API documentation
            api_doc = load_api_doc(str(json_file))

            # Generate MCP tool definition
            builder = TushareMCPToolBuilder(api_doc)
            tool_def = builder.build()

            # Write tool definition file
            tool_file_path = tools_dir / f"{json_file.stem}.json"
            with open(tool_file_path, 'w', encoding='utf-8') as f:
                json.dump(tool_def, f, ensure_ascii=False, indent=2)

            success_count += 1
            print(f"✓ Generated tool for {api_doc.api_name}")

        except Exception as e:
            error_count += 1
            print(f"✗ Error processing {json_file.name}: {str(e)}")

    print(f"\nCompleted: {success_count} successful, {error_count} errors")
    print(f"MCP tool definitions written to {tools_dir}/")


if __name__ == "__main__":
    main()
