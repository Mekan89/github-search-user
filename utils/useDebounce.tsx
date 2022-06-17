import { useEffect, useState } from "react";

export function useDebounce(value: any, wait: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(handler);
  }, [value, wait]);

  return debouncedValue;
}
