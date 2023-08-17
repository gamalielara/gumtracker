/**
 * To transform object keys that is in snake_case or regular case to camelCase
 * */
export const camelCasifyObject = (object: Record<string, unknown>) => {
  const entries = Object.entries(object);

  const newEntries = entries.map(([k, v]) => {
    let val = v;
    let key = k;

    key = k
      .replace(/(_|\s)(\w)/gim, (match, p1, p2) => `${p2.toUpperCase()}`)
      .replace(/^(\w)/, (_, p1) => `${p1.toLowerCase()}`);

    // do recursive if deep nested object
    if (typeof v === "object" && !Array.isArray(v)) {
      val = camelCasifyObject(v as Record<string, unknown>);
    }

    return [key, val];
  });

  return Object.fromEntries(newEntries);
};
