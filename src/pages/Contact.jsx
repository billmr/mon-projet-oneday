import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../i18n.jsx';
import { SITE_EMAIL } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';

const EMAILJS_SERVICE_ID = 'service_1rmitdb';
const EMAILJS_TEMPLATE_ID = 'wb7cavr';
const EMAILJS_PUBLIC_KEY = 'mPV57TAan5KzFNmQJ-5tc';

export default function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState(null); // null | sending | ok | error

  const submit = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('ok');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="13" label={t('contact_label')} a={t('contact_title_a')} em={t('contact_title_em')} b={t('contact_title_b')} />
          <p className="rev d2" style={{ maxWidth: '62ch', marginTop: '20px' }}>{t('contact_intro')}</p>

          <div className="contact-grid">
            {status === 'ok' ? (
              <div className="confirm-card">
                <span className="confirm-badge">✓</span>
                <h3>{t('contact_success')}</h3>
                <p>
                  {lang === 'fr'
                    ? "Merci pour votre message. Notre équipe l'a bien reçu et vous répondra dans un délai maximum de 48 heures."
                    : 'Thank you for your message. Our team has received it and will reply within a maximum of 48 hours.'}
                </p>
                <button className="cta gold" onClick={() => setStatus(null)}>
                  {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form className="pform rev d1" onSubmit={submit}>
                {status === 'error' && (
                  <div className="form-error">
                    {lang === 'fr'
                      ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous écrire directement à "
                      : 'An error occurred while sending. Please try again or write us directly at '}
                    <a href={'mailto:' + SITE_EMAIL}>{SITE_EMAIL}</a>
                  </div>
                )}

                <div className="frow">
                  <label htmlFor="ct-type">{t('contact_form_type')}</label>
                  <select id="ct-type" name="type" required>
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
                    <input id="ct-name" name="name" required placeholder="Aya Kouassi" />
                  </div>
                  <div className="frow">
                    <label htmlFor="ct-mail">{t('form_email')}</label>
                    <input id="ct-mail" name="email" type="email" required placeholder="aya@example.com" />
                  </div>
                </div>
                <div className="fgrid">
                  <div className="frow">
                    <label htmlFor="ct-country">{t('contact_country')}</label>
                    <input id="ct-country" name="country" required placeholder="Côte d'Ivoire" />
                  </div>
                  <div className="frow">
                    <label htmlFor="ct-subject">{t('contact_subject')}</label>
                    <input id="ct-subject" name="subject" required placeholder="Sujet de votre message" />
                  </div>
                </div>
                <div className="frow">
                  <label htmlFor="ct-msg">{t('contact_message')}</label>
                  <textarea id="ct-msg" name="message" rows="5" required placeholder="Votre message…"></textarea>
                </div>
                <button className="cta gold" type="submit" style={{ width: '100%' }} disabled={status === 'sending'}>
                  {status === 'sending' ? (lang === 'fr' ? 'Envoi en cours…' : 'Sending…') : t('contact_submit')}
                </button>
              </form>
            )}

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
              <div className="contact-map">
                <b>Grand-Bassam</b>
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