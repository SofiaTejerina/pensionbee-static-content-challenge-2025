'use client'

import React from 'react'


export default async function ClientMDX({slug} : {slug: String}) {
    const { default: Post } = await import(
        `../../content/${slug}/index.md`
        )
    return <Post />
}