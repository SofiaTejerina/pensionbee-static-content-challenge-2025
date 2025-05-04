import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('@mdx-js/react', () => ({
    MDXProvider: ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
    ),
}))

jest.mock(
    '../src/app/mdx-components',
    () => ({
        useMDXComponents: () => ({}), // return an empty components map
    })
)

jest.mock('next/navigation', () => ({
    notFound: () =>
        Promise.resolve({
            __esModule: true,
            default: () => <div data-testid="not-found">404 Not Found</div>,
        }),
}))

jest.mock(
    '../src/app/[...content]/mdxLoader',
    () => ({
        loadMDX: (path: string) =>
            path === '/about-page'
                ? Promise.resolve({
                    __esModule: true,
                    default: () => <div data-testid="content">Acme Co.</div>,
                })
                : Promise.reject(new Error('MDX_NOT_FOUND')),
    })
)

import Page from '../src/app/[...content]/page'

describe('Dynamic MDX Page', () => {
    it('renders “Acme Co.” when the MDX exists', async () => {
        const params = Promise.resolve({content: ['about-page']})

        const element = await Page({params})
        render(element)
        expect(await screen.findByTestId('content')).toHaveTextContent(
            'Acme Co.'
        )
    })

    it('renders a 404 when the MDX is missing', async () => {
        const params = Promise.resolve({content: ['missing-page']})

        const element = await Page({params})
        render(element)
        expect(await screen.findByTestId('not-found')).toHaveTextContent(
            '404 Not Found'
        )
    })
})
