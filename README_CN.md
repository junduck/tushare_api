# Tushare API 生成器

1. 从官方文档加载 Tushare Pro API 列表：

```
uv run python get_doc_id.py
```

2. 从官方文档加载 Tushare Pro API 定义：

```
uv run python get_doc.py
```

3. 为 Tushare Pro API 生成 TypeScript 接口：

```
uv run python gen_ts.py
```

注意：部分 API 文档可能无法正确解析，可能需要手动处理。

4. 为 Tushare Pro API 生成 MCP 兼容的工具定义：

```
uv run python gen_tools.py
```

## 或者直接使用本仓库中已生成的文件 :)

1. api/*.json: API 定义

2. ts/*.ts: Tushare API 的 TypeScript 接口

3. tools/*.json: MCP 兼容定义

## 转换为 Anthropic/OpenAI 工具调用标准

```python
    def convert_tools(tools: List[Dict], provider: Literal["openai", "claude"]) -> List[Dict]:
        """将 MCP 工具格式转换为特定提供商的格式"""
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
            raise ValueError(f"不支持的提供商: {provider}")

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
