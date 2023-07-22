import { useCallback, useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay = 500) {
  const timerRef = useRef<NodeJS.Timeout>();
  const [debounced, setDebouncedValue] = useState<T>(value);

  const reset = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timerRef.current !== undefined) {
        reset();
      }
    };
  }, [value, delay, reset]);

  return [debounced, reset];
}
