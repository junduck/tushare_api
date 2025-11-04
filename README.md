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
