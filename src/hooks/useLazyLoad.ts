import { useEffect } from "react";

interface LazyLoadOptions extends IntersectionObserverInit {
  rootMargin?: string;
}
export function useLazyLoad(
  ref: React.RefObject<Element>,
  onVisible: () => void,
  shouldLoad: boolean = true,
  options: LazyLoadOptions = {}
) {
  useEffect(() => {
    if (!ref.current || !shouldLoad) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && shouldLoad) {
        onVisible();
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, onVisible, shouldLoad, options]);
}
