"use client"

import Markdown from "markdown-to-jsx";
import Welcome from "../content/valves/index.md"

export default function Page() {
    return <>
        <h1>Hello, Next.js!</h1>
        <Welcome/>
    </>
}