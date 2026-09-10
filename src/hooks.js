import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

export const pad2 = (num) => String(num).padStart(2, '0');

export function useHashRoute() {
  const get = () => (window.location.hash || '#/').replace(/^#/, '') || '/';
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onHash = () => { setRoute(get()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export function useCountdown(targetMs) {
  const calc = useCallback(() => {
    const diff = Math.max(0, targetMs - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor(diff / 3600000) % 24,
      m: Math.floor(diff / 60000) % 60,
      s: Math.floor(diff / 1000) % 60,
    };
  }, [targetMs]);
  const [left, setLeft] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return left;
}

export function useDragRail() {
  const railRef = useRef(null);
  useEffect(() => {
    const el = railRef.current;
    if (!el) return undefined;
    let down = false, startX = 0, startLeft = 0;
    const onDown = (ev) => { down = true; el.classList.add('drag'); startX = ev.pageX; startLeft = el.scrollLeft; };
    const onMove = (ev) => { if (down) { ev.preventDefault(); el.scrollLeft = startLeft - (ev.pageX - startX); } };
    const onUp = () => { down = false; el.classList.remove('drag'); };
    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { el.removeEventListener('mousedown', onDown); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, []);
  return railRef;
}

/* Ajoute .in aux éléments .rev quand ils entrent dans l'écran (ré-analyse à chaque changement de page) */
export function useRevealOnScroll(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rev:not(.in)'));
    if (!els.length) return undefined;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}