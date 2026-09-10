import React, { useState, useEffect } from 'react';
import { useLang } from '../i18n.jsx';
import { NAV_ITEMS, LOGO_URL, A, SOCIALS } from '../data.js';
import { SmartImg } from './ui.jsx';

function SocialIcon(props) {
  if (props.icon === 'ig') return (<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.8-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0z" /></svg>);
  if (props.icon === 'fb') return (<svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.26H7.5V13h2.7v8h3.3z" /></svg>);
  return (<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.59-2.39V9.86a5.73 5.73 0 1 0 4.68 5.62V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.34 4.34 0 0 1-3.24-1.48z" /></svg>);
}

function Socials(props) {
  return (
    <div className={props.className || 'socs'}>
      {SOCIALS.map((soc) => (
        <a key={soc.icon} href={soc.href} target="_blank" rel="noopener noreferrer" aria-label={soc.label}>
          <SocialIcon icon={soc.icon} />
        </a>
      ))}
    </div>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button className="lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
      <span className={lang === 'fr' ? 'on' : ''}>FR</span><i></i><span className={lang === 'en' ? 'on' : ''}>EN</span>
    </button>
  );
}

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
      <div id="ldrPct">{String(pct).padStart(2, '0')}%</div>
    </div>
  );
}

export function ProgressBar() {
  const barRef = React.useRef(null);
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
          <a className="brand" href="#/" aria-label="ONE DAY — retour à l'accueil">
            <span className="brand-badge">
              <SmartImg src={A.logo} fallback={LOGO_URL} alt="" lazy={false} />
            </span>
            <span className="brand-lockup">
              <span className="brand-name">ONE DAY<span className="brand-dot">.</span></span>
              <span className="brand-tag">Festival des civilisations africaines</span>
            </span>
          </a>
          <nav className="main">
            {NAV_ITEMS.map((item) => (
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
            <em>{String(idx + 1).padStart(2, '0')}</em>{t(item.k)}
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
          <a href="mailto:onedaysevent03@gmail.com">onedaysevent03@gmail.com</a>
          <a href="https://www.instagram.com/africa_spirit54" target="_blank" rel="noopener noreferrer">@africa_spirit54</a>
          <a href="#/billetterie">{t('cta_book')}</a>
          <a href="#/contact">{t('nav_contact')}</a>
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