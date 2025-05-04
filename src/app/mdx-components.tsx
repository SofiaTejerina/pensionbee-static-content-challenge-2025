import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-[100px] font-extrabold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-[70px] font-extrabold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-[50px] font-extrabold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-[40px] font-extrabold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-[30px] font-extrabold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-[20px] font-extrabold">{children}</h6>,
    em: ({ children }) => <em className="text-[15px] font-normal">{children}</em>,
    strong: ({ children }) => <strong className="text-[15px]">{children}</strong>,
    ul: ({ children }) => <ul className="custom-bullet-list pl-5 text-[15px]">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 text-[15px]">{children}</ol>,
    a: ({ href, children }) => (
      <a href={href} className="text-[15px] text-[#24b6b6]">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-gray-300 bg-gray-50 p-4 text-[15px]">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="inline-flex items-center space-x-4 rounded-lg bg-gray-50 p-1 text-left text-[14px]">
        <span className="flex gap-4">
          <span className="flex-1">{children}</span>
        </span>
      </code>
    ),
    p: ({ children }) => <p className="my-2">{children}</p>,
    ...components,
  };
}
