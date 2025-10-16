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

// TODO: There is a race condition, will be fixed before release
await new Promise(resolve => setTimeout(resolve, 1000));

const mcpUrl = sandbox.betaGetMcpUrl();
console.log(`Sandbox created with MCP URL: ${mcpUrl} and Auth token ${await sandbox.betaGetMcpToken()}`);