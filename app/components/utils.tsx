export const getEnumStringValues = <T extends Record<string, string>>(
  e: T
): Array<T[keyof T]> => {
  const values: Array<T[keyof T]> = [];
  for (const key in e) {
    const value = e[key];
    if (typeof value === "string") {
      values.push(value);
    }
  }
  return values;
};
