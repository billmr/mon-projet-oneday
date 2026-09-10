import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { SOCIALS } from '../data.js';

/* ---------- SmartImg : image avec repli propre si le fichier est absent ---------- */
export function SmartImg({ src, fallback, alt = '', className = '', lazy = true, style, ...rest }) {
  const [broken, setBroken] = useState(false);
  const current = broken ? fallback : src;
  if (!current || (broken && !fallback)) {
    return (
      <div className={'ph-img ' + className} style={style} role="img" aria-label={alt}>
        <span>{alt || 'ONE DAY'}</span>
      </div>
    );
  }
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      style={style}
      loading={lazy ? 'lazy' : 'eager'}
      onError={() => { if (!broken) setBroken(true); }}
      {...rest}
    />
  );
}

/* ---------- SmartVideo : vidéo avec image de secours si le fichier est absent ---------- */
export function SmartVideo({ src, poster, alt = '', className = '', controls = false, ...rest }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return <SmartImg src={poster} alt={alt} className={(className + ' hero-fallback').trim()} />;
  }
  return (
    <video
      className={className}
      poster={poster}
      autoPlay={!controls}
      muted={!controls}
      loop={!controls}
      playsInline
      controls={controls}
      onError={() => setBroken(true)}
      {...rest}
    >
      {src ? <source src={src} /> : null}
    </video>
  );
}

/* ---------- CountUp : compteur animé au défilement ---------- */
export function CountUp({ to = 0, duration = 1400 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            setVal(Math.floor(progress * to));
            if (progress < 1) requestAnimationFrame(step);
            else setVal(to);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <b className="countup" ref={ref}>{val}</b>;
}

/* ---------- SectionTitle : bandeau numéroté "01 — Titre em Titre" ---------- */
export function SectionTitle({ num, label, a, em, b }) {
  return (
    <div className="stitle rev">
      <div className="slabel"><b>{num}</b> {label} <i></i></div>
      <h2 className="big">
        {a}{em ? <em> {em}</em> : null} {b}
      </h2>
    </div>
  );
}

/* ---------- Marquee : bandeau défilant ---------- */
export function Marquee({ items = [], dark = false }) {
  const loop = items.length ? [...items, ...items] : [];
  return (
    <div className={'marquee' + (dark ? ' dark' : '')}>
      <div className="track">
        {loop.map((item, idx) => (<span key={idx}>{item}</span>))}
      </div>
    </div>
  );
}

/* ---------- CtaBand : bandeau d'appel à l'action en bas de chaque page ---------- */
export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="band">
      <div className="wrap">
        <div>
          <h2>{t('band_title')}</h2>
          <p>{t('band_sub')}</p>
        </div>
        <a className="cta" href="#/billetterie">{t('cta_book')}</a>
      </div>
    </section>
  );
}

/* ---------- Socials : icônes réseaux sociaux ---------- */
const ICONS = {
  ig: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" /></svg>
  ),
  fb: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.5 21v-7.6h2.6l.4-3H14.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.28C17.3 4.2 16.3 4.1 15.2 4.1c-2.34 0-3.94 1.43-3.94 4.05v2.25H8.6v3h2.66V21h3.24Z" /></svg>
  ),
  tt: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.7 3h2.4c.16 1.5 1 3.02 2.9 3.7v2.5c-1.13-.02-2.1-.35-2.9-.86v6.9c0 3.1-2.16 5.36-5.16 5.36-2.98 0-5.24-2.26-5.24-5.36 0-3.02 2.4-5.36 5.24-5.36.32 0 .64.03.94.1v2.55a2.55 2.55 0 0 0-.94-.18 2.84 2.84 0 0 0-2.8 2.9c0 1.66 1.24 2.9 2.8 2.9 1.66 0 2.86-1.24 2.86-2.98V3Z" /></svg>
  ),
};

export function Socials({ className = 'socs' }) {
  return (
    <div className={className}>
      {SOCIALS.map((soc) => (
        <a key={soc.label} href={soc.href} target="_blank" rel="noopener noreferrer" aria-label={soc.label}>
          {ICONS[soc.icon] || <span>{soc.label[0]}</span>}
        </a>
      ))}
    </div>
  );
}

/* ---------- LangToggle : bascule FR / EN ---------- */
export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button className="lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label="Switch language">
      <span className={lang === 'fr' ? 'on' : ''}>FR</span>
      <i></i>
      <span className={lang === 'en' ? 'on' : ''}>EN</span>
    </button>
  );
}
