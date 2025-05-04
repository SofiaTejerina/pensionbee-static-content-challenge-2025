'use client'

import React, {lazy, Suspense, useMemo} from 'react'
import {notFound} from "next/navigation";
import {loadMDX} from "./mdxLoader";
import {useMDXComponents} from "../mdx-components";
import {MDXProvider} from "@mdx-js/react";

export default function ClientMDX({path}: { path: string }) {
    const components = useMDXComponents({})
    const Post = useMemo(
        () =>
            lazy(() =>
                loadMDX(path).catch(() => notFound())
            ),
        [path]
    )
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <MDXProvider components={components}>
                <Post/>
            </MDXProvider>
        </Suspense>
    )

}