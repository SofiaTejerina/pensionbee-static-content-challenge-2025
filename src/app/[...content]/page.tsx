import ClientMDX from "./ClientMDX";
import { getAllSlugs } from "../../lib/getContentSlug";

export default async function Page({ params }: { params: Promise<{ content: string[] }> }) {
  const path = (await params).content.join("/");

  return (
    <div className="mx-auto max-w-2xl py-14 text-left font-mplus text-[#343a40]">
      <ClientMDX path={`/${path}`} />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    content: slug.split("/"),
  }));
}
