export function loadMDX(path: string) {
    // Next/Webpack will turn this into a real dynamic import at runtime
    return import(`../../content/${path}/index.md`);
}