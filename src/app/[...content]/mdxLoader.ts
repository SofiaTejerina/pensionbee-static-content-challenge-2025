// this function is separated to make it easier to mock for testing purposes
export function loadMDX(path: string) {
  return import(`../../../content${path}/index.md`);
}
