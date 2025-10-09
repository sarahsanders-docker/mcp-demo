import Sandbox from '../E2B-sdk/packages/js-sdk/dist'
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

console.log('Creating E2B sandbox with arXiv and DuckDuckGo MCP servers...');
const sandbox = await Sandbox.betaCreate({
    mcp: {
        duckduckgo: {},
        arxiv: {
            storagePath: '/'
        },
    },
});


const client = new Client({
    name: 'streamable-http-client',
    version: '1.0.0'
});

const transport = new StreamableHTTPClientTransport(new URL(sandbox.betaGetMcpUrl()));
await client.connect(transport);
console.log('Connected to MCP server at time ' + new Date().toISOString());
const tools = await client.listTools();
console.log(tools.tools);
console.log('Disconnecting from MCP server at time ' + new Date().toISOString());
await client.close();