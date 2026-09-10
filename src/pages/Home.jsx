import React from 'react';
import { useLang } from '../i18n.jsx';
import { A, SLOTS, MARQUEE_ITEMS } from '../data.js';
import { SmartImg, SmartVideo, SectionTitle, Marquee, CtaBand, CountUp } from '../components/ui.jsx';
import { Countdown, CoiffuresRail, ArtistsRail, GalleryGrid, FilmsGrid, AmbCards } from '../components/sections.jsx';

export default function Home() {
  const { t, lang } = useLang();
  return (
    <React.Fragment>
      <section id="hero">
        <SmartVideo src={A.heroVideo} poster={A.heroFallback} alt="ONE DAY hero" />
        <div className="veil"></div>
        <div className="kente-side"></div>
        <div className="hero-in">
          <div className="hero-over">
            <span className="chip solid">{t('chip1')}</span>
            <span className="chip">{t('chip2')}</span>
            <span className="chip">{t('chip3')}</span>
          </div>
          <h1 className="hero-title">
            <span className="ln"><i>ONE</i></span>
            <span className="ln"><i><span className="hollow">DAY</span><span className="dot">.</span></i></span>
          </h1>
          <p className="hero-tag">{t('hero_tag')}</p>
          <div className="hero-meta">
            <span>{t('hero_date')}</span>
            <span>{t('hero_place')}</span>
            <span>{t('hero_hours')}</span>
          </div>
          <div className="hero-cta">
            <a className="cta gold" href="#/billetterie">{t('cta_book')}</a>
            <a className="cta ghost" href="#/galerie">{t('cta_films')}</a>
          </div>
        </div>
        <div className="hero-scroll"><i></i>{t('scroll')}</div>
        <div className="hero-date-v">07 . 08 . 2027 — grand-bassam</div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />
      <Countdown />

      <section id="manifeste">
        <div className="wrap man-grid">
          <div className="man-sticky">
            <SectionTitle num="01" label={t('man_label')} a={t('man_title_a')} em={t('man_title_em')} b={t('man_title_b')} />
            <SmartImg className="emblem" src={A.logo} fallback="https://image.qwenlm.ai/public_source/ffe7315a-9e28-4697-905f-30d7700efd02/198cf4402-b247-4305-b067-ce603079aec8.png" alt="Emblem ONE DAY" />
          </div>
          <div className="man-text">
            <p className="lead rev" dangerouslySetInnerHTML={{ __html: t('man_lead') }}></p>
            <p className="rev d1">{t('man_p1')}</p>
            <p className="rev d2">{t('man_p2')}</p>
            <p className="rev d3">{t('man_p3')}</p>
            <a className="linkline rev d3" href="#/manifeste">{t('home_man_link')} →</a>
            <div className="stats rev d4">
              <div className="stat"><CountUp to={54} /><span>{t('stat_pays')}</span></div>
              <div className="stat"><CountUp to={108} /><span>{t('stat_amb')}</span></div>
              <div className="stat"><CountUp to={12} /><span>{t('stat_scenes')}</span></div>
              <div className="stat"><CountUp to={1} /><span>{t('stat_jour')}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="coiffures">
        <div className="wrap" style={{ paddingBottom: '20px' }}>
          <SectionTitle num="02" label={t('coif_label')} a={t('coif_title_a')} em={t('coif_title_em')} b={t('coif_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('coif_intro')}</p>
          <a className="linkline rev d2" href="#/coiffures">{t('home_coif_link')} →</a>
        </div>
        <CoiffuresRail />
      </section>

      <section id="amb" className="dark">
        <div className="wrap">
          <SectionTitle num="03" label={t('amb_label')} a={t('amb_title_a')} em={t('amb_title_em')} b={t('amb_title_b')} />
          <AmbCards />
          <a className="linkline rev d2" href="#/ambassadeurs" style={{ marginTop: '40px', display: 'inline-flex' }}>{t('home_amb_link')} →</a>
        </div>
      </section>

      <Marquee dark items={MARQUEE_ITEMS} />

      <section id="artistes" className="dark">
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <SectionTitle num="05" label={t('nav_amb')} a={t('art_title_a')} em={t('art_title_em')} b={t('art_title_b')} />
        </div>
        <ArtistsRail />
      </section>

      <section id="programme">
        <div className="wrap">
          <SectionTitle num="04" label={t('prog_label')} a={t('prog_title_a')} em={t('prog_title_em')} b={t('prog_title_b')} />
          <div style={{ marginTop: '40px' }}>
            {SLOTS.slice(0, 4).map((slotItem) => (
              <div className="slot rev" key={slotItem.time}>
                <div className="time">{slotItem.time}</div>
                <div>
                  <h4>{slotItem[lang].t}</h4>
                  <p>{slotItem[lang].d}</p>
                  <span className="kt">{slotItem.tag[lang]}</span>
                </div>
                <div className="place">{slotItem.place[lang]}</div>
              </div>
            ))}
          </div>
          <a className="linkline rev d2" href="#/programme">{t('home_prog_link')} →</a>
        </div>
      </section>

      <section style={{ background: 'var(--sable)', borderTop: '2px solid var(--noir)' }}>
        <div className="wrap">
          <SectionTitle num="06" label={t('gal_label')} a={t('gal_title_a')} em={t('gal_title_em')} b={t('gal_title_b')} />
          <GalleryGrid limit={8} />
          <a className="linkline rev d2" href="#/galerie">{t('home_gal_link')} →</a>
        </div>
      </section>

      <section className="dark" style={{ background: 'var(--noir)', color: 'var(--ivoire)' }}>
        <div className="wrap">
          <SectionTitle num="07" label={t('film_label')} a={t('film_title_a')} em={t('film_title_em')} b={t('film_title_b')} />
          <FilmsGrid />
        </div>
      </section>

      <CtaBand />
    </React.Fragment>
  );
}