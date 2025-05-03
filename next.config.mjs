import createMDX from '@next/mdx'
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

export default withFlowbiteReact(withMDX(nextConfig))