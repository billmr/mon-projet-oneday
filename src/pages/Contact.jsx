import React, { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { SITE_EMAIL } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const submit = (ev) => { ev.preventDefault(); setSent(true); };

  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="13" label={t('contact_label')} a={t('contact_title_a')} em={t('contact_title_em')} b={t('contact_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('contact_intro')}</p>

          <div className="contact-grid">
            <form className="pform rev d1" onSubmit={submit}>
              {sent ? (
                <div className="success">✓ {t('contact_success')}</div>
              ) : (
                <React.Fragment>
                  <div className="frow">
                    <label htmlFor="ct-type">{t('contact_form_type')}</label>
                    <select id="ct-type" required>
                      <option>{t('contact_opt1')}</option>
                      <option>{t('contact_opt2')}</option>
                      <option>{t('contact_opt3')}</option>
                      <option>{t('contact_opt4')}</option>
                      <option>{t('contact_opt5')}</option>
                      <option>{t('contact_opt6')}</option>
                    </select>
                  </div>
                  <div className="fgrid">
                    <div className="frow">
                      <label htmlFor="ct-name">{t('form_name')}</label>
                      <input id="ct-name" required placeholder="Aya Kouassi" />
                    </div>
                    <div className="frow">
                      <label htmlFor="ct-mail">{t('form_email')}</label>
                      <input id="ct-mail" type="email" required placeholder="aya@example.com" />
                    </div>
                  </div>
                  <div className="fgrid">
                    <div className="frow">
                      <label htmlFor="ct-country">{t('contact_country')}</label>
                      <input id="ct-country" required placeholder="Côte d'Ivoire" />
                    </div>
                    <div className="frow">
                      <label htmlFor="ct-subject">{t('contact_subject')}</label>
                      <input id="ct-subject" required placeholder="Sujet de votre message" />
                    </div>
                  </div>
                  <div className="frow">
                    <label htmlFor="ct-msg">{t('contact_message')}</label>
                    <textarea id="ct-msg" rows="5" required placeholder="Votre message…"></textarea>
                  </div>
                  <button className="cta gold" type="submit" style={{ width: '100%' }}>{t('contact_submit')}</button>
                </React.Fragment>
              )}
            </form>

            <aside className="contact-info rev d2">
              <h3>{t('contact_info')}</h3>
              <div className="info-item">
                <span className="info-label">{t('contact_email_label')}</span>
                <a href={'mailto:' + SITE_EMAIL}>{SITE_EMAIL}</a>
              </div>
              <div className="info-item">
                <span className="info-label">{t('contact_phone_label')}</span>
                <span>{t('contact_phone')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('contact_address_label')}</span>
                <span>{t('contact_address')}</span>
              </div>
              <div className="contact-map" style={{ marginTop: '28px', border: '2px solid var(--noir)', boxShadow: '10px 10px 0 var(--terra)', padding: '26px', background: 'var(--papier)', fontFamily: 'var(--ital)', fontStyle: 'italic' }}>
                <b style={{ fontFamily: 'var(--disp)', fontStyle: 'normal', textTransform: 'uppercase', fontSize: '.78rem', letterSpacing: '.14em', display: 'block', marginBottom: '8px' }}>Grand-Bassam</b>
                Ville historique · UNESCO · entre l'océan Atlantique et la lagune d'Ouladine · 40 min d'Abidjan
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CtaBand />
    </React.Fragment>
  );
}