'use client'

import React, {lazy, Suspense, useMemo} from 'react'
import {notFound} from "next/navigation";

export default function ClientMDX({path}: { path: string }) {
    const Post = useMemo(
        () =>
            lazy(() => import(`../../content/${path}/index.md`)
                .catch(
                    _ => notFound()
                )),
        [path]
    )
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <Post/>
        </Suspense>
    )

}