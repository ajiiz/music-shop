import { MutableRefObject, useCallback, useEffect, useRef } from "react";

// eslint-disable-next-line no-unused-vars
export const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, handler: (e: MouseEvent) => any, when: boolean = true): void => {
  const savedHandler = useRef(handler);

  const memoizedCallback = useCallback((e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      savedHandler.current(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    if (when) {
      document.addEventListener("click", memoizedCallback, true);

      return () => {
        document.removeEventListener("click", memoizedCallback, true);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler, when]);
};
