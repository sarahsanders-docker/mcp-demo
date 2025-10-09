import Sandbox from 'e2b'

console.log('Creating E2B sandbox with arXiv and DuckDuckGo MCP servers...');
const sandbox = await Sandbox.betaCreate({
    mcp: {
        duckduckgo: {},
        arxiv: {
            storagePath: '/'
        },
    },
});

const mcpUrl = sandbox.betaGetMcpUrl();
console.log(`Sandbox created with MCP URL: ${mcpUrl}`);