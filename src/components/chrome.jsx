import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../i18n.jsx';
import { NAV_ITEMS, LOGO_URL, A } from '../data.js';
import { pad2 } from '../hooks.js';
import { SmartImg, Socials, LangToggle } from './ui.jsx';

export function Loader() {
  const [pct, setPct] = useState(0);
  const [off, setOff] = useState(false);
  useEffect(() => {
    let prog = 0;
    const id = setInterval(() => {
      prog = Math.min(100, prog + Math.random() * 16 + 7);
      setPct(Math.floor(prog));
      if (prog >= 100) {
        clearInterval(id);
        setTimeout(() => { setOff(true); document.body.classList.add('ready'); }, 380);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);
  return (
    <div id="ldr" className={off ? 'off' : ''}>
      <SmartImg src={A.logo} fallback={LOGO_URL} alt="ONE DAY" lazy={false} />
      <div className="ld-word">one <b>day</b></div>
      <div id="ldrBar"><i style={{ width: pct + '%' }}></i></div>
      <div id="ldrPct">{pad2(pct)}%</div>
    </div>
  );
}

export function ProgressBar() {
  const barRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = ratio + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="prog" ref={barRef}></div>;
}

export function Header(props) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [props.route]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <React.Fragment>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="hwrap">
          <a className="brand" href="#/">
            <SmartImg src={A.logo} fallback={LOGO_URL} alt="ONE DAY logo" lazy={false} />
            <span className="wm">one <b>day</b></span>
          </a>
          <nav className="main">
            {NAV_ITEMS.slice(1, 8).map((item) => (
              <a key={item.p} href={'#' + item.p} className={props.route === item.p ? 'active' : ''}>{t(item.k)}</a>
            ))}
          </nav>
          <div className="hright">
            <LangToggle />
            <a className="cta gold sm" href="#/billetterie">{t('cta_book')}</a>
            <button id="burger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div id="mnav">
        {NAV_ITEMS.map((item, idx) => (
          <a key={item.p} href={'#' + item.p} onClick={() => setOpen(false)}>
            <em>{pad2(idx + 1)}</em>{t(item.k)}
          </a>
        ))}
        <Socials className="socs msocs" />
      </div>
    </React.Fragment>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="fwrap">
        <div>
          <div className="fbig">ONE DAY<span className="dot">.</span></div>
          <p className="ftag">{t('foot_tag')}</p>
          <Socials />
        </div>
        <div className="fcol">
          <h4>{t('foot_nav')}</h4>
          {NAV_ITEMS.map((item) => (<a key={item.p} href={'#' + item.p}>{t(item.k)}</a>))}
        </div>
        <div className="fcol">
          <h4>{t('foot_contact')}</h4>
          <a href="mailto:hello@oneday.africa">hello@oneday.africa</a>
          <a href="https://www.instagram.com/africa_spirit54" target="_blank" rel="noopener noreferrer">@africa_spirit54</a>
          <a href="#/billetterie">{t('cta_book')}</a>
          <a href="#/partenaires">{t('cta_partner')}</a>
        </div>
      </div>
      <div className="fbot">
        <span>{t('foot_rights')}</span>
        <span>{t('foot_credit')}</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ {t('cta_top')}</button>
      </div>
    </footer>
  );
}