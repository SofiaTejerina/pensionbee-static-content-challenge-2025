'use client'

import React, {lazy, Suspense, useMemo} from 'react'
import {notFound} from "next/navigation";
import {loadMDX} from "./mdxLoader";

export default function ClientMDX({path}: { path: string }) {
    console.log("Entro el ClientMDX con path:"+ `../../content/${path}/index.md`)
    const Post = useMemo(
        () =>
            lazy(() =>
                loadMDX(path).catch(() => notFound())
            ),
        [path]
    )
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <Post/>
        </Suspense>
    )

}