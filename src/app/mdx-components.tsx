import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[32px] font-extrabold sm:text-[48px] md:text-[72px] lg:text-[100px]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[24px] font-extrabold sm:text-[36px] md:text-[50px] lg:text-[70px]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[20px] font-extrabold sm:text-[28px] md:text-[40px] lg:text-[50px]">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[18px] font-extrabold sm:text-[24px] md:text-[32px] lg:text-[40px]">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-[16px] font-extrabold sm:text-[20px] md:text-[28px] lg:text-[30px]">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-[14px] font-extrabold sm:text-[16px] md:text-[18px] lg:text-[20px]">{children}</h6>
    ),
    em: ({ children }) => <em className="text-[13px] font-normal sm:text-[14px] md:text-[15px]">{children}</em>,
    strong: ({ children }) => <strong className="text-[13px] sm:text-[14px] md:text-[15px]">{children}</strong>,
    ul: ({ children }) => (
      <ul className="custom-bullet-list pl-5 text-[13px] sm:text-[14px] md:text-[15px]">{children}</ul>
    ),
    ol: ({ children }) => <ol className="list-decimal pl-5 text-[13px] sm:text-[14px] md:text-[15px]">{children}</ol>,
    a: ({ href, children }) => (
      <a href={href} className="text-[13px] text-[#24b6b6] sm:text-[14px] md:text-[15px]">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-gray-300 bg-gray-50 p-4 text-[13px] sm:text-[14px] md:text-[15px]">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="inline-flex items-center space-x-4 rounded-lg bg-gray-50 p-1 text-left text-[12px] sm:text-[13px] md:text-[14px]">
        <span className="flex gap-4">
          <span className="flex-1">{children}</span>
        </span>
      </code>
    ),
    p: ({ children }) => <p className="my-2">{children}</p>,
    ...components,
  };
}
