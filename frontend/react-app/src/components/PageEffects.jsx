import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
export default function PageEffects({ children }) {
  const { pathname } = useLocation();
  const root = useRef(null);
  useLayoutEffect(() => {
    const element = root.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const setup = () => {
      observer?.disconnect();
      const targets = element.querySelectorAll('.page-stack > section:not(.feature-stories), .page-stack > .two-columns, .persona-list > article, .feature-story, .reading-strip');
      targets.forEach(target => {
        target.removeAttribute('data-reveal');
        target.classList.remove('is-visible');
      });
      if (preference.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
      targets.forEach(target => {
        // Anything already in the viewport stays readable while the page enters.
        if (target.getBoundingClientRect().top < window.innerHeight - 30) return;
        target.setAttribute('data-reveal', '');
        observer.observe(target);
      });
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { observer?.disconnect(); preference.removeEventListener('change', setup); };
  }, [pathname]);
  return <div ref={root} key={pathname} className="page-transition">{children}</div>;
}
export function ReadingProgress() {
  const bar = useRef(null);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const range = document.documentElement.scrollHeight - window.innerHeight;
        const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
        if (bar.current) bar.current.style.transform = 'scaleX(' + progress + ')';
      });
    };
    const resize = 'ResizeObserver' in window ? new ResizeObserver(update) : null;
    resize?.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { cancelAnimationFrame(frame); resize?.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true"><span ref={bar} /></div>;
}
