import Markdown from "markdown-to-jsx";

export default function Page() {
    return <>
        <h1>Hello, Next.js!</h1>
        <Markdown children={"#holaaa"}></Markdown>
    </>
}