import React, { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { SectionTitle, CtaBand, SmartImg } from '../components/ui.jsx';

const evGlob = import.meta.glob('../../content/evenements/*.md', { query: '?raw', import: 'default' });
const acGlob = import.meta.glob('../../content/actualites/*.md', { query: '?raw', import: 'default' });

function parseMd(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: '' };
  const data = {};
  m[1].split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { data, body: m[2].trim() };
}

function loadAll(glob) {
  return Promise.all(Object.values(glob).map((fn) => fn())).then((arr) => arr.map(parseMd));
}

const MOIS_FR = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEP', 'OCT', 'NOV', 'DÉC'];
const MOIS_EN = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function fmtDate(d, lang) {
  if (!d) return '';
  const p = d.split('-');
  if (p.length !== 3) return d;
  const mois = lang === 'fr' ? MOIS_FR : MOIS_EN;
  return p[2] + ' ' + mois[parseInt(p[1], 10) - 1] + ' ' + p[0];
}

function NewsCard(props) {
  const d = props.d;
  const lang = props.lang;
  return (
    <article className="news-card rev">
      <div className="news-media">
        <SmartImg src={d.image} alt={d['title_' + lang] || ''} />
      </div>
      <div className="news-body">
        <div className="news-meta">
          <span className="news-date">{fmtDate(d.date, lang)}</span>
          <span className="news-tag">{d['tag_' + lang] || ''}</span>
        </div>
        <h3>{d['title_' + lang] || d.title_fr}</h3>
        <p>{d['excerpt_' + lang] || d.excerpt_fr}</p>
      </div>
    </article>
  );
}

export default function Actualites() {
  const { lang } = useLang();
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    loadAll(evGlob).then(setEvents);
    loadAll(acGlob).then(setNews);
  }, []);
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => (e.data.date || '') >= today).sort((a, b) => (a.data.date < b.data.date ? -1 : 1));
  const past = events.filter((e) => (e.data.date || '') < today).sort((a, b) => (a.data.date > b.data.date ? -1 : 1));
  const articles = news.slice().sort((a, b) => (a.data.date > b.data.date ? -1 : 1));
  const L = (fr, en) => (lang === 'fr' ? fr : en);
  const empty = <div className="news-empty">{L('Aucune publication pour le moment.', 'No publication yet.')}</div>;

  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="15" label={L('Actualités & événements', 'News & events')} a={L('Le festival', 'The festival')} em={L('vit toute', 'lives all')} b={L("l'année.", 'year round.')} />

          <div className="news-block">
            <div className="slabel"><b>16</b> {L('Événements à venir', 'Upcoming events')} <i></i></div>
            <div className="news-grid">
              {upcoming.length ? upcoming.map((e, i) => (<NewsCard key={i} d={e.data} lang={lang} />)) : empty}
            </div>
          </div>

          <div className="news-block">
            <div className="slabel"><b>17</b> {L('Actualités du festival', 'Festival news')} <i></i></div>
            <div className="news-grid">
              {articles.length ? articles.map((e, i) => (<NewsCard key={i} d={e.data} lang={lang} />)) : empty}
            </div>
          </div>

          {past.length > 0 && (
            <div className="news-block">
              <div className="slabel"><b>18</b> {L('Mémoires des éditions passées', 'Memories of past editions')} <i></i></div>
              <div className="news-grid">
                {past.map((e, i) => (<NewsCard key={i} d={e.data} lang={lang} />))}
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}