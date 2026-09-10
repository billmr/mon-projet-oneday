import React from 'react';
import { useLang } from '../i18n.jsx';
import { SectionTitle, CtaBand } from '../components/ui.jsx';
import { CoiffuresRail, GalleryGrid } from '../components/sections.jsx';

export default function Coiffures() {
  const { t } = useLang();
  return (
    <React.Fragment>
      <section id="coiffures" style={{ paddingTop: '120px', borderTop: 'none' }}>
        <div className="wrap" style={{ paddingBottom: '20px' }}>
          <SectionTitle num="02" label={t('coif_label')} a={t('coif_title_a')} em={t('coif_title_em')} b={t('coif_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('coif_intro')}</p>
        </div>
        <CoiffuresRail more />
        <div className="wrap" style={{ paddingTop: '40px' }}>
          <GalleryGrid limit={4} />
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}