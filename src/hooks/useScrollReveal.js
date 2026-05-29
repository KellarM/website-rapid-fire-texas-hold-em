import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Small timeout to ensure DOM is painted
    const timer = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const reveals = el.querySelectorAll('.reveal');
      reveals.forEach(r => observer.observe(r));
      if (el.classList && el.classList.contains('reveal')) {
        observer.observe(el);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return ref;
}