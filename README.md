# Tushare API Generator

1. Load Tushare Pro API list from official document:

```
uv run python get_doc_id.py
```

2. Load Tushare Pro API definition from official document:

```
uv run python get_doc.py
```

3. Generate TypeScript interface for Tushare Pro API:

```
uv run python gen_ts.py
```

Notice that some API docs are not parsed properly and may need manual interference.

4. Generate MCP compatible tool definitions for Tushare Pro API:

```
uv run python gen_tools.py
```

## Or just use the already generated files in this repo :)

## Converting to Antrophic/OAI tool calling standard

```python
    def convert_tools(tools: List[Dict], provider: Literal["openai", "claude"]) -> List[Dict]:
        """Convert MCP tool format to provider-specific format"""
        if provider == "Antrophic":
            return [
                {
                    "name": tool["name"],
                    "description": tool["description"],
                    "input_schema": tool["inputSchema"]
                }
                for tool in tools
            ]
        elif provider == "openai":
            return [
                {
                    "type": "function",
                    "function": {
                        "name": tool["name"],
                        "description": tool["description"],
                        "parameters": tool["inputSchema"]
                    }
                }
                for tool in tools
            ]
        else:
            raise ValueError(f"Unsupported provider: {provider}")

    with open('tools/daily.json', 'r', encoding='utf-8') as f:
        eod_tool = json.load(f)

    claude = anthropic.Anthropic(api_key="your-api-key")
    message = client.messages.create(
      model="claude-3-5-sonnet",
      max_tokens=1024,
      tools=convert_tools(eod_tool, "claude")
      messages=[
        {"role": "user", "content": "昨天平安银行行情如何？"}
      ]
    )

    while message.stop_reason == "tool_use":
        tool = next(block for block in message.content if block.type == "tool_use")
        call_tushare_api(tool.name, tool.input)
```
