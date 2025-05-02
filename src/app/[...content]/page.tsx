import ClientMDX from "./ClientMDX";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ content: string[] }>
}) {
    const path =  (await params).content.join('/')

    return (
        <ClientMDX path={path} />
    )
}