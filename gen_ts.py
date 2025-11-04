from pathlib import Path

from api_doc import load_api_doc, ApiDoc


class TushareTypescriptBuilder:

    TYPE_MAPPING = {
        'str': 'string',
        'int': 'number',
        'float': 'number',
        'bool': 'boolean',
    }

    def __init__(self, doc: ApiDoc):
        self.doc = doc

    def _to_camel_case(self, snake_str: str, upper_first: bool = False) -> str:
        """Convert snake_case to camelCase or PascalCase"""
        components = snake_str.split('_')
        if upper_first:
            return ''.join(x.title() for x in components)
        return components[0] + ''.join(x.title() for x in components[1:])

    def _map_type(self, py_type: str) -> str:
        """Map Python type to TypeScript type"""
        return self.TYPE_MAPPING.get(py_type, 'string')

    def build(self) -> str:
        """Generate TypeScript definitions from API documentation"""
        lines = []

        # Add header comment with documentation link
        lines.append('/**')
        lines.append(f' * {self.doc.title}')
        if self.doc.description:
            lines.append(f' * {self.doc.description}')
        lines.append(' */')

        # API name constant
        lines.append(
            f'export const {self._to_camel_case(self.doc.api_name, upper_first=True)}Api = "{self.doc.api_name}"')
        lines.append('')

        # Generate output interface (Item)
        if self.doc.output_params:
            lines.append(
                f'export interface {self._to_camel_case(self.doc.api_name, upper_first=True)}Item {{')

            for field in self.doc.output_params:
                ts_type = self._map_type(field.type)
                optional = '?' if field.required == 'N' else ''
                if field.description:
                    lines.append(f'  /** {field.description} */')
                lines.append(f'  {field.name}{optional}: {ts_type};')

            lines.append('}')
            lines.append('')

        # Generate input interface (Params)
        if self.doc.input_params:
            lines.append(
                f'export interface {self._to_camel_case(self.doc.api_name, upper_first=True)}Params {{')

            for field in self.doc.input_params:
                ts_type = self._map_type(field.type)
                if field.description:
                    lines.append(f'  /** {field.description} */')
                lines.append(f'  {field.name}?: {ts_type};')

            lines.append('}')
            lines.append('')

        return '\n'.join(lines)


def main():
    """Process all API JSON files and generate TypeScript definitions"""
    api_dir = Path("api")
    ts_dir = Path("ts")

    # Create ts directory if it doesn't exist
    ts_dir.mkdir(exist_ok=True)

    # Process all JSON files in api directory
    json_files = list(api_dir.glob("*.json"))

    print(f"Found {len(json_files)} JSON files to process")

    for json_file in json_files:
        try:
            # Skip disabled files
            if json_file.name.endswith("-disable"):
                print(f"Skipping disabled file: {json_file.name}")
                continue

            # Load API documentation
            api_doc = load_api_doc(str(json_file))

            # Generate TypeScript
            builder = TushareTypescriptBuilder(api_doc)
            ts_content = builder.build()

            # Write TypeScript file
            ts_file_path = ts_dir / f"{json_file.stem}.ts"
            with open(ts_file_path, 'w', encoding='utf-8') as f:
                f.write(ts_content)

        except Exception as e:
            print(f"Error processing {json_file.name}: {str(e)}")

    print("TypeScript generation completed!")


if __name__ == "__main__":
    main()
