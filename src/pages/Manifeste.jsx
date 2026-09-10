import React from 'react';
import { useLang } from '../i18n.jsx';
import { A, LOGO_URL } from '../data.js';
import { SmartImg, SectionTitle, CtaBand, CountUp } from '../components/ui.jsx';

export default function Manifeste() {
  const { t } = useLang();
  return (
    <React.Fragment>
      <section id="manifeste" style={{ paddingTop: '120px' }}>
        <div className="wrap man-grid">
          <div className="man-sticky">
            <SectionTitle num="01" label={t('man_label')} a={t('man_title_a')} em={t('man_title_em')} b={t('man_title_b')} />
            <SmartImg className="emblem" src={A.logo} fallback={LOGO_URL} alt="Emblem ONE DAY" />
            <SmartImg src={A.galCarte} alt="54 pays" style={{ marginTop: '30px', border: '2px solid var(--noir)', boxShadow: '10px 10px 0 var(--terra)' }} />
          </div>
          <div className="man-text">
            <p className="lead rev" dangerouslySetInnerHTML={{ __html: t('man_lead') }}></p>
            <p className="rev d1">{t('man_p1')}</p>
            <p className="rev d2">{t('man_p2')}</p>
            <p className="rev d3">{t('man_p3')}</p>
            <div className="stats rev d4">
              <div className="stat"><CountUp to={54} /><span>{t('stat_pays')}</span></div>
              <div className="stat"><CountUp to={108} /><span>{t('stat_amb')}</span></div>
              <div className="stat"><CountUp to={12} /><span>{t('stat_scenes')}</span></div>
              <div className="stat"><CountUp to={1} /><span>{t('stat_jour')}</span></div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}