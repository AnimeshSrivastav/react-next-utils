import { useEffect, useRef } from "react";
import { debounce, DebounceOptions } from "../utils/debounce";

export function useDebounce<T>(
  watch: T | T[],
  callback: () => void,
  wait = 300,
  options?: DebounceOptions
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = debounce(() => callbackRef.current(), wait, options);
    handler();
    return () => handler.cancel();
  }, Array.isArray(watch) ? watch : [watch]);
}
