import React from 'react';
import { useLang } from '../i18n.jsx';
import { SectionTitle, CtaBand } from '../components/ui.jsx';
import { GalleryGrid, FilmsGrid } from '../components/sections.jsx';

export default function Galerie() {
  const { t } = useLang();
  return (
    <React.Fragment>
      <section style={{ background: 'var(--sable)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="06" label={t('gal_label')} a={t('gal_title_a')} em={t('gal_title_em')} b={t('gal_title_b')} />
          <GalleryGrid />
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