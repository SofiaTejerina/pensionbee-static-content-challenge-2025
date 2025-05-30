import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: { extend: {
            fontFamily: {
                "mplus": ['"M PLUS 1p"', 'sans-serif']
            }
        } },
    plugins: [],
}
export default config