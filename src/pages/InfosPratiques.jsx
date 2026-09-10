import React from 'react';
import { useLang } from '../i18n.jsx';
import { SITE_EMAIL } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';

export default function InfosPratiques() {
  const { t } = useLang();
  const sections = [
    { num: '01', title: t('info_section1'), txt: t('info_section1_txt') },
    { num: '02', title: t('info_section2'), txt: t('info_section2_txt') },
    { num: '03', title: t('info_section3'), txt: t('info_section3_txt') },
    { num: '04', title: t('info_section4'), txt: t('info_section4_txt') },
    { num: '05', title: t('info_section5'), txt: t('info_section5_txt') },
    { num: '06', title: t('info_section6'), txt: t('info_section6_txt') },
  ];
  const steps = [
    { n: t('info_arrival'), t: t('info_arrival_txt') },
    { n: t('info_transfer'), t: t('info_transfer_txt') },
    { n: t('info_accommodation'), t: t('info_accommodation_txt') },
    { n: t('info_festival'), t: t('info_festival_txt') },
  ];
  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="14" label={t('info_label')} a={t('info_title_a')} em={t('info_title_em')} b={t('info_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('info_intro')}</p>

          <div className="info-parcours rev d1">
            <div className="slabel" style={{ marginBottom: '30px' }}><b>15</b> Votre parcours <i></i></div>
            <div className="steps">
              {steps.map((s, i) => (
                <div className="step" key={i}>
                  <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  <b>{s.n}</b>
                  <span>{s.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-sections">
            {sections.map((sec, i) => (
              <article className={'info-card rev d' + ((i % 4) + 1)} key={sec.num}>
                <span className="info-num">{sec.num}</span>
                <h3>{sec.title}</h3>
                <p>{sec.txt}</p>
              </article>
            ))}
          </div>

          <div className="info-help rev d2">
            <h3>{t('info_need_help')}</h3>
            <p>{t('info_need_help_txt')}</p>
            <a className="cta gold" href={'mailto:' + SITE_EMAIL}>✉ {SITE_EMAIL}</a>
          </div>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}