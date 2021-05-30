import { useState, useEffect, useCallback } from 'react';

function useInView(options?: IntersectionObserverInit) {
  const [node, setNode] = useState<HTMLElement | null>(null);

  const [inView, setInView] = useState(false);

  const ref = useCallback((node) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => observer.unobserve(node);
  }, [node, options]);

  return { ref, inView };
}

export default useInView;
