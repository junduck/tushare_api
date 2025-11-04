import json
from dataclasses import dataclass
from typing import List


@dataclass
class TableField:
    name: str
    type: str
    required: str
    description: str


@dataclass
class ApiDoc:
    api_name: str
    title: str
    description: str
    input_params: List[TableField]
    output_params: List[TableField]


def load_api_doc(json_file_path: str) -> ApiDoc:
    """Load API documentation from JSON file"""
    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Some JSON files have descriptions in the "required" field instead of "description"

    # Convert input parameters
    input_params = []
    for param in data.get('input_params', []):
        description = param.get('description', '')
        if not description and param.get('required') and param.get('required') not in ['Y', 'N']:
            print("Misaligned INPUT: ", data['api_name'])
            description = param.get('required', '')

        input_params.append(TableField(
            name=param['name'],
            type=param['type'],
            required=param.get('required', 'N'),
            description=description
        ))

    # Convert output parameters
    output_params = []
    for param in data.get('output_params', []):
        description = param.get('description', '')
        if not description and param.get('required') and param.get('required') not in ['Y', 'N']:
            print("Misaligned OUTPUT: ", data['api_name'])
            description = param.get('required', '')

        output_params.append(TableField(
            name=param['name'],
            type=param['type'],
            required=param.get('required', 'N'),
            description=description
        ))

    return ApiDoc(
        api_name=data['api_name'],
        title=data['title'],
        description=data.get('description', ''),
        input_params=input_params,
        output_params=output_params
    )
