import ClientMDX from "./ClientMDX";
import {getAllSlugs} from "../../lib/getContentSlug";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ content: string[] }>
}) {
    const path = (await params).content.join('/')

    return (
        <div className="font-mplus text-[#343a40] max-w-2xl mx-auto text-left py-14">
            <ClientMDX path={`/${path}`} />
        </div>
    )
}

export async function generateStaticParams() {
    const slugs = await getAllSlugs()
    return slugs.map(slug => ({
        content: slug.split('/'),
    }))
}