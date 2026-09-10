import React, { useState, useEffect, useMemo } from 'react';
import { useLang } from '../i18n.jsx';
import { A, COIFFURES, ARTISTS, GALLERY, FILMS, MARQUEE_ITEMS } from '../data.js';
import { pad2, useCountdown, useDragRail } from '../hooks.js';
import { SmartImg, SmartVideo, CountUp, SectionTitle, Marquee } from './ui.jsx';

export function Countdown() {
  const { t } = useLang();
  const target = useMemo(() => new Date('2027-08-07T06:00:00').getTime(), []);
  const left = useCountdown(target);
  const cells = [
    { v: left.d, l: t('cd_days') }, { v: left.h, l: t('cd_hours') },
    { v: left.m, l: t('cd_min') }, { v: left.s, l: t('cd_sec') },
  ];
  return (
    <section id="cd" className="dark">
      <div className="wrap">
        <div className="slabel rev"><b>00</b> {t('cd_title')} <i></i></div>
        <div className="cd-grid rev d1">
          {cells.map((cell) => (
            <div className="cd-cell" key={cell.l}>
              <b>{pad2(cell.v)}</b>
              <span>{cell.l}</span>
            </div>
          ))}
        </div>
        <p className="cd-note rev d2">{t('cd_note')}</p>
      </div>
    </section>
  );
}

export function CoiffuresRail(props) {
  const { lang, t } = useLang();
  const railRef = useDragRail();
  return (
    <div className="rail" ref={railRef}>
      {COIFFURES.map((coif, idx) => (
        <article className="coif" key={idx}>
          <figure><SmartImg src={coif.img} alt={coif[lang].t} /></figure>
          <div className="cb">
            <span className="num">N°{pad2(idx + 1)}</span>
            <b>{coif[lang].t}</b>
            <span>{coif[lang].d}</span>
          </div>
        </article>
      ))}
      {props.more && (
        <article className="coif" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '34px' }}>
          <div className="cb">
            <span className="num">+54</span>
            <b>{t('cta_all')}</b>
            <a className="linkline" href="#/coiffures" style={{ marginTop: '14px' }}>→</a>
          </div>
        </article>
      )}
    </div>
  );
}

export function ArtistsRail() {
  const { lang, t } = useLang();
  const railRef = useDragRail();
  return (
    <div className="art-rail" ref={railRef}>
      {ARTISTS.map((artist, idx) => (
        <article className="art" key={idx}>
          <span className="pays">{artist.pays}</span>
          <figure><SmartImg src={artist.img} alt={artist[lang].n} /></figure>
          <div className="ab">
            <b>{artist[lang].n}</b>
            <span>{artist[lang].r}</span>
          </div>
        </article>
      ))}
      <div className="art-more">
        <b>+54</b>
        <p>{t('art_more')}</p>
        <a className="cta gold sm" href="#/billetterie">{t('cta_join')}</a>
      </div>
    </div>
  );
}

export function GalleryGrid(props) {
  const { lang } = useLang();
  const items = props.limit ? GALLERY.slice(0, props.limit) : GALLERY;
  return (
    <div className="gal-grid">
      {items.map((galItem, idx) => (
        <figure className="gal-item rev" key={idx}>
          <SmartImg src={galItem.img} alt={galItem[lang]} />
          <figcaption>{galItem[lang]}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FilmsGrid() {
  const { lang } = useLang();
  return (
    <div className="films-grid">
      {FILMS.map((film, idx) => (
        <div className="film rev" key={idx}>
          <SmartVideo src={film.src} poster={film.poster} controls alt={film[lang].t} />
          <div className="fb">
            <b>{film[lang].t}</b>
            <span>{film[lang].d}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AmbCards() {
  const { t } = useLang();
  return (
    <div className="amb-grid">
      <article className="amb rev">
        <SmartImg src={A.ambPercu} alt={t('amb_role1_t')} />
        <span className="tag">{t('amb_role1')}</span>
        <span className="count">×54</span>
        <div className="ab">
          <h3>{t('amb_role1_t')}</h3>
          <p>{t('amb_role1_d')}</p>
        </div>
      </article>
      <article className="amb rev d1">
        <SmartImg src={A.ambKomian} alt={t('amb_role2_t')} />
        <span className="tag">{t('amb_role2')}</span>
        <span className="count">×54</span>
        <div className="ab">
          <h3>{t('amb_role2_t')}</h3>
          <p>{t('amb_role2_d')}</p>
        </div>
      </article>
    </div>
  );
}

export function BookingModal(props) {
  const { t, lang } = useLang();
  const pass = props.pass;
  const [qty, setQty] = useState(1);
  const [step, setStep] = useState('form');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const closeRef = useRefSafe(props.onClose);
  useEffect(() => {
    const onKey = (ev) => { if (ev.key === 'Escape') closeRef.current(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);
  if (!pass) return null;
  const total = pass.price * qty;
  const submit = (ev) => { ev.preventDefault(); if (fullName.trim() && email.trim()) setStep('done'); };
  return (
    <div className="mback" onClick={(ev) => { if (ev.target === ev.currentTarget) props.onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="mclose" onClick={props.onClose} aria-label={t('modal_close')}>✕</button>
        {step === 'done' ? (
          <div>
            <div className="success">
              ✓ {t('modal_success')}
              <span>{t('modal_success_sub')}</span>
            </div>
            <div className="qty" style={{ justifyContent: 'center', marginTop: '20px' }}>
              <button className="cta sm" onClick={props.onClose}>{t('modal_close')}</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3>{t('modal_title')}</h3>
            <p className="msub">{pass[lang].n} — {pass.price.toLocaleString('fr-FR')} FCFA</p>
            <div className="frow">
              <label>{t('modal_qty')}</label>
              <div className="qty">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <b>{qty}</b>
                <button type="button" onClick={() => setQty(Math.min(10, qty + 1))}>+</button>
              </div>
            </div>
            <div className="frow">
              <label htmlFor="bk-name">{t('modal_name')}</label>
              <input id="bk-name" value={fullName} onChange={(ev) => setFullName(ev.target.value)} required placeholder="Aya Kouassi" />
            </div>
            <div className="frow">
              <label htmlFor="bk-mail">{t('modal_email')}</label>
              <input id="bk-mail" type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} required placeholder="aya@oneday.africa" />
            </div>
            <div className="mtotal">
              <span>{t('modal_total')}</span>
              <b>{total.toLocaleString('fr-FR')} FCFA</b>
            </div>
            <button className="cta gold" type="submit" style={{ width: '100%' }}>{t('cta_pay')}</button>
            <p className="msub" style={{ marginTop: '14px', marginBottom: 0, fontSize: '.82rem' }}>{t('modal_note')}</p>
          </form>
        )}
      </div>
    </div>
  );
}

function useRefSafe(fn) {
  const ref = React.useRef(fn);
  React.useEffect(() => { ref.current = fn; });
  return ref;
}