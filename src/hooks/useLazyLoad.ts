import { useEffect } from "react";

interface LazyLoadOptions extends IntersectionObserverInit {
  rootMargin?: string;
}

export function useLazyLoad(
  ref: React.RefObject<Element>,
  onVisible: () => void,
  options: LazyLoadOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onVisible();
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, onVisible, options]);
}
