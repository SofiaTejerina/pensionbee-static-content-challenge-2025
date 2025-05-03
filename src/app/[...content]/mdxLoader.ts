export function loadMDX(path: string) {
    return import(`../../content/${path}/index.md`);
}