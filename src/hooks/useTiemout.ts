import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    timerRef.current = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(timerRef.current);
  }, [delay]);
};
