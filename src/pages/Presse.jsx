import React from 'react';
import { useLang } from '../i18n.jsx';
import { SITE_EMAIL } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';

export default function Presse() {
  const { t } = useLang();
  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="12" label={t('press_label')} a={t('press_title_a')} em={t('press_title_em')} b={t('press_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('press_intro')}</p>

          <div className="press-grid">
            <article className="press-card rev d1">
              <span className="press-num">01</span>
              <h3>{t('press_section1')}</h3>
              <p>{t('press_section1_txt')}</p>
            </article>

            <article className="press-card rev d2">
              <span className="press-num">02</span>
              <h3>{t('press_section2')}</h3>
              <p>{t('press_section2_txt')}</p>
              <p className="press-note">{t('press_section2_note')}</p>
              <a className="cta gold sm" href={'mailto:' + SITE_EMAIL + '?subject=Demande kit média ONE DAY 2027'}>
                {t('press_contact_btn')}
              </a>
            </article>

            <article className="press-card rev d3">
              <span className="press-num">03</span>
              <h3>{t('press_section3')}</h3>
              <p>{t('press_section3_txt')}</p>
              <a className="cta sm" href={'mailto:' + SITE_EMAIL + '?subject=Demande presse ONE DAY'}>
                {t('press_contact_press_btn')}
              </a>
            </article>
          </div>

          <div className="press-facts rev d3">
            <div className="slabel" style={{ marginBottom: '30px' }}><b>13</b> {t('press_facts')} <i></i></div>
            <div className="facts-grid">
              <div className="fact"><b>54</b><span>{t('press_fact1')}</span></div>
              <div className="fact"><b>108</b><span>{t('press_fact2')}</span></div>
              <div className="fact"><b>24h</b><span>{t('press_fact3')}</span></div>
              <div className="fact"><b>UNESCO</b><span>{t('press_fact4')}</span></div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}