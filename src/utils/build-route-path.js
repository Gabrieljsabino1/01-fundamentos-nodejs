export function buildRoutePath(path) {
  const routParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routParametersRegex,
    "(?<id>[a-z0-9-_])"
  );

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
