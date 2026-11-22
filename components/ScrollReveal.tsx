'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Observes elements marked with `data-reveal` or `data-reveal-group`
 * and adds `is-visible` once they enter the viewport. Re-runs after
 * client-side navigation so every page gets its animations.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]')
    );

    if (elements.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Reveal anything already in (or above) the viewport immediately,
      // which also covers scroll restoration on back/forward navigation.
      if (rect.top < window.innerHeight) {
        element.classList.add('is-visible');
      } else {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
