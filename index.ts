import Sandbox from '../E2B-sdk/packages/js-sdk/dist'

const sandbox = await Sandbox.create('e2b-mcp-demo', {
    mcp: {
        dockerhub: {
            hubPatToken: "",
            username: "code42cate"
        },
        duckduckgo: {},
    },
    timeoutMs: 600000,
})

const mcpUrl = sandbox.getMcpUrl()
console.log(mcpUrl)
// https://8080-iu7ttgsh1broa0wkh797n.e2b.app/mcp
