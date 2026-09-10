import React from 'react';
import { useLang } from '../i18n.jsx';
import { A, BASSAM_POINTS } from '../data.js';
import { SmartImg, SectionTitle, CtaBand } from '../components/ui.jsx';

export default function Bassam() {
  const { t, lang } = useLang();
  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="08" label={t('bassam_label')} a={t('bassam_title_a')} em={t('bassam_title_em')} b={t('bassam_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px', fontFamily: 'var(--ital)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--oxblood)' }}>{t('bassam_intro')}</p>
          <div className="bas-grid">
            <ul className="bas-list rev d1">
              {BASSAM_POINTS.map((point, idx) => (
                <li key={idx}>
                  <div>
                    <b>{point[lang][0]}</b>
                    <span>{point[lang][1]}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bas-imgs">
              <figure className="rev d1"><SmartImg src={A.galVillage} alt="Grand-Bassam — Village des Nations" /></figure>
              <figure className="rev d2"><SmartImg src={A.galCases} alt="Grand-Bassam — patrimoine" /></figure>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}