import React, { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { SLOTS } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';

export default function Programme() {
  const { t, lang } = useLang();
  const [phase, setPhase] = useState('aube');
  const phases = [
    { id: 'aube', label: t('ph_aube') }, { id: 'zenith', label: t('ph_zenith') },
    { id: 'dusk', label: t('ph_dusk') }, { id: 'night', label: t('ph_night') },
  ];
  const slots = SLOTS.filter((slotItem) => slotItem.phase === phase);
  return (
    <React.Fragment>
      <section id="programme" style={{ paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="04" label={t('prog_label')} a={t('prog_title_a')} em={t('prog_title_em')} b={t('prog_title_b')} />
          <div className="tabs">
            {phases.map((ph) => (
              <button key={ph.id} className={'tab' + (phase === ph.id ? ' on' : '')} onClick={() => setPhase(ph.id)}>{ph.label}</button>
            ))}
          </div>
          <div className="tpanel on" key={phase}>
            {slots.map((slotItem) => (
              <div className="slot" key={slotItem.time}>
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
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}