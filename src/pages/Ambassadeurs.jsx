import React from 'react';
import { useLang } from '../i18n.jsx';
import { SectionTitle, CtaBand } from '../components/ui.jsx';
import { AmbCards, ArtistsRail } from '../components/sections.jsx';

export default function Ambassadeurs() {
  const { t } = useLang();
  return (
    <React.Fragment>
      <section id="amb" className="dark" style={{ paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="03" label={t('amb_label')} a={t('amb_title_a')} em={t('amb_title_em')} b={t('amb_title_b')} />
          <AmbCards />
        </div>
      </section>
      <section id="artistes" className="dark" style={{ borderTop: '2px solid rgba(244,235,220,.2)' }}>
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <SectionTitle num="05" label={t('nav_amb')} a={t('art_title_a')} em={t('art_title_em')} b={t('art_title_b')} />
        </div>
        <ArtistsRail />
      </section>
      <CtaBand />
    </React.Fragment>
  );
}