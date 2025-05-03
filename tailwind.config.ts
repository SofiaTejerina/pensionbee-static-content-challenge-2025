import type { Config } from 'tailwindcss'
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        ".flowbite-react/class-list.json"
    ],
    theme: { extend: {
            fontFamily: {
                "mplus": ['"M PLUS 1p"', 'sans-serif']
            }
        } },
    plugins: [flowbiteReact],
}
export default config