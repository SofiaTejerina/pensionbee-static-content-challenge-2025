import ClientMDX from "./ClientMDX";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ content: string[] }>
}) {
    // ‘content’ is an array like ['blog', 'june']
    const slug =  (await params).content.join('/')
    console.log(slug+"hola!")

    return (
        // render our client wrapper, feeding it the MDX component
        <ClientMDX slug={slug} />
    )
}