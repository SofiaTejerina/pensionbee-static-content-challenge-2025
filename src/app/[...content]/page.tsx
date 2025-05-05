import ClientMDX from "./ClientMDX";
import { getAllSlugs } from "../../lib/getContentSlug";

export default async function Page({ params }: { params: Promise<{ content: string[] }> }) {
  const path = (await params).content.join("/");

  return (
    <div className="mx-auto max-w-full px-4 py-8 text-left font-mplus text-[#343a40] sm:max-w-xl sm:px-6 sm:py-10 md:max-w-2xl md:px-8 md:py-14 lg:max-w-3xl lg:px-10">
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
