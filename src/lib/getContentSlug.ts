import { promises as fs } from 'fs'
import { join, relative } from 'path'

const CONTENT_ROOT = join(process.cwd(), 'content')

/**
 * Recursively walks the `content/` folder, finding all
 * nested `index.md` files and returning their slugs.
 */
export async function getAllSlugs(): Promise<string[]> {
    async function walk(dir: string): Promise<string[]> {
        const entries = await fs.readdir(dir, { withFileTypes: true })
        const slugs: string[] = []

        for (const entry of entries) {
            const fullPath = join(dir, entry.name)

            if (entry.isDirectory()) {
                // recurse into subdirectory
                slugs.push(...await walk(fullPath))
            } else if (entry.isFile() && entry.name === 'index.md') {
                // compute slug relative to `content/`, without trailing `/index.md`
                const rel = relative(CONTENT_ROOT, dir)
                slugs.push(rel)
            }
        }

        return slugs
    }

    return walk(CONTENT_ROOT)
}
