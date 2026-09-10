import React, { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { PASSES, FAQ } from '../data.js';
import { SectionTitle, CtaBand } from '../components/ui.jsx';
import { BookingModal } from '../components/sections.jsx';

export default function Billetterie() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <React.Fragment>
      <section style={{ background: 'var(--ivoire)', paddingTop: '120px' }}>
        <div className="wrap">
          <SectionTitle num="09" label={t('tick_label')} a={t('tick_title_a')} em={t('tick_title_em')} b={t('tick_title_b')} />
          <div className="pass-grid">
            {PASSES.map((pass, idx) => (
              <article className={'pass rev d' + (idx + 1) + (pass.hot ? ' hot' : '')} key={pass.id}>
                {pass.hot && <span className="badge">{t('most_chosen')}</span>}
                <h3>{pass[lang].n}</h3>
                <div className="price">{pass.price.toLocaleString('fr-FR')} FCFA</div>
                <ul>
                  {pass[lang].f.map((feat) => (<li key={feat}>{feat}</li>))}
                </ul>
                <button className={pass.hot ? 'cta gold' : 'cta'} onClick={() => setSelected(pass)}>{t('book')}</button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--sable)', borderTop: '2px solid var(--noir)' }}>
        <div className="wrap">
          <SectionTitle num="11" label={t('faq_label')} a={t('faq_title_a')} em={t('faq_title_em')} b={t('faq_title_b')} />
          <div style={{ marginTop: '40px' }}>
            {FAQ.map((faqItem, idx) => (
              <div className={'faq rev' + (openFaq === idx ? ' open' : '')} key={idx}>
                <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  {faqItem.q[lang]}
                  <i>+</i>
                </button>
                <div className="fa"><p>{faqItem.a[lang]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      {selected && <BookingModal pass={selected} onClose={() => setSelected(null)} />}
    </React.Fragment>
  );
}