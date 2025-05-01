import Markdown from "markdown-to-jsx";
import content from "src/content/valves/index.md"

export default function Page() {
    return <>
        <h1>Hello, Next.js!</h1>
        <Markdown>{content}</Markdown>
    </>
}