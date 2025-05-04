import type {MDXComponents} from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({children}) => (
            <h1 className="font-extrabold text-[100px]">{children}</h1>
        ),
        h2: ({children}) => (
            <h2 className="font-extrabold text-[70px]">{children}</h2>
        ),
        h3: ({children}) => (
            <h3 className="font-extrabold text-[50px]">{children}</h3>
        ),
        h4: ({children}) => (
            <h4 className="font-extrabold text-[40px]">{children}</h4>
        ),
        h5: ({children}) => (
            <h5 className="font-extrabold text-[30px]">{children}</h5>
        ),
        h6: ({children}) => (
            <h6 className=" font-extrabold text-[20px]">{children}</h6>
        ),
        em: ({children}) => (
            <em className="font-normal text-[15px]">{children}</em>
        ),
        strong: ({children}) => (
            <strong className="text-[15px]">{children}</strong>
        ),
        ul: ({children}) => (
            <ul className="custom-bullet-list pl-5 text-[15px]">{children}</ul>
        ),
        ol: ({children}) => (
            <ol className="list-decimal pl-5 text-[15px]">{children}</ol>
        ),
        a: ({href, children}) => (
            <a href={href} className="text-[#24b6b6] text-[15px]">{children}</a>
        ),
        blockquote: ({children}) => (
            <blockquote className="p-4 my-4 border-gray-300 bg-gray-50 text-[15px]">
                {children}
            </blockquote>
        ),
        code: ({children}) => (
            <code
                className="text-[14px] inline-flex text-left items-center space-x-4 bg-gray-50 rounded-lg p-1">
                <span className="flex gap-4">
                    <span className="flex-1">
                        {children}
                    </span>
                </span>
            </code>
        ),
        p: ({children}) => (
            <p className="my-2">{children}</p>
        ),
        ...components,
    }
}