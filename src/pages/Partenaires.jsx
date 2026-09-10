import React, { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { PARTNERS } from '../data.js';
import { SectionTitle, Marquee, CtaBand } from '../components/ui.jsx';

export default function Partenaires() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [dossierSent, setDossierSent] = useState(false);
  const submitForm = (ev) => { ev.preventDefault(); setSent(true); };
  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="10" label={t('part_label')} a={t('part_title_a')} em={t('part_title_em')} b={t('part_title_b')} />
          <p className="rev d2" style={{ maxWidth: '66ch', marginTop: '20px' }}>{t('part_intro')}</p>
          <div className="hero-cta rev d2" style={{ marginTop: '28px' }}>
            <button className="cta gold" onClick={() => setDossierSent(true)}>{t('cta_dossier')}</button>
          </div>
          {dossierSent && <div className="success" style={{ marginTop: '20px', maxWidth: '560px' }}>✓ {t('form_dossier_ok')}</div>}
        </div>
      </section>
      <Marquee dark items={PARTNERS} />
      <section style={{ background: 'var(--sable)', borderTop: '2px solid var(--noir)' }}>
        <div className="wrap">
          <h2 className="big rev">{t('cta_partner')}</h2>
          <form className="pform rev d1" onSubmit={submitForm}>
            {sent ? (
              <div className="success">✓ {t('form_success')}</div>
            ) : (
              <React.Fragment>
                <div className="fgrid">
                  <div className="frow">
                    <label htmlFor="pt-name">{t('form_name')}</label>
                    <input id="pt-name" required placeholder="Aya Kouassi" />
                  </div>
                  <div className="frow">
                    <label htmlFor="pt-org">{t('form_org')}</label>
                    <input id="pt-org" required placeholder="Hôtel Bassam Palm" />
                  </div>
                </div>
                <div className="fgrid">
                  <div className="frow">
                    <label htmlFor="pt-mail">{t('form_email')}</label>
                    <input id="pt-mail" type="email" required placeholder="contact@marque.com" />
                  </div>
                  <div className="frow">
                    <label htmlFor="pt-type">{t('form_type')}</label>
                    <select id="pt-type">
                      <option>Hôtellerie</option><option>Transport</option><option>Restauration</option>
                      <option>Tourisme</option><option>Médias</option><option>Services</option><option>Institutions</option>
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <label htmlFor="pt-msg">{t('form_msg')}</label>
                  <textarea id="pt-msg" rows="4" placeholder="…"></textarea>
                </div>
                <button className="cta" type="submit">{t('cta_send')}</button>
              </React.Fragment>
            )}
          </form>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}