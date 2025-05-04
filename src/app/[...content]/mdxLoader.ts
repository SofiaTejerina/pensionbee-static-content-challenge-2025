export function loadMDX(path: string) {
    if(path.length > 0) {
        return import(`../../content/${path}/index.md`);
    }
    return import(`../../content/index.md`)
}