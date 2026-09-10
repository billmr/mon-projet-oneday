import React from 'react';

export const LangCtx = React.createContext(null);
export const useLang = () => React.useContext(LangCtx);

export function LangProvider({ children }) {
  const getInitial = () => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage && window.localStorage.getItem('od-lang');
    if (saved === 'fr' || saved === 'en') return saved;
    return (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
  };
  const [lang, setLangState] = React.useState(getInitial);
  const setLang = React.useCallback((next) => {
    setLangState(next);
    try { window.localStorage.setItem('od-lang', next); } catch (e) { /* ignore */ }
  }, []);
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);
  const t = React.useCallback((key) => {
    const dict = DICT[lang] || DICT.fr;
    return (dict && dict[key] !== undefined) ? dict[key] : key;
  }, [lang]);
  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const DICT = {
  fr: {
    nav_home: 'Accueil', nav_manifeste: 'Manifeste', nav_programme: 'Programme', nav_coiffures: 'Coiffures',
    nav_amb: 'Ambassadeurs', nav_galerie: 'Galerie', nav_bassam: 'Grand-Bassam', nav_tickets: 'Billetterie', nav_partners: 'Partenaires',
    cta_book: 'Réserver mon pass', cta_films: 'Voir les films', cta_partner: 'Devenir partenaire', cta_dossier: "Dossier d'investissement",
    cta_all: 'Tout voir', cta_join: 'Rejoindre le jour unique', cta_top: 'Haut de page', cta_send: 'Envoyer', cta_pay: 'Confirmer la réservation',
    chip1: 'Édition pilote 2027', chip2: 'Festival des civilisations africaines', chip3: '54 pays · 1 journée',
    hero_tag: 'Une Afrique, mille cultures, une seule journée.',
    hero_date: 'Samedi 7 août 2027', hero_place: "Grand-Bassam, Côte d'Ivoire", hero_hours: '06h00 → 06h00', scroll: 'défiler',
    cd_title: 'Compte à rebours officiel', cd_days: 'Jours', cd_hours: 'Heures', cd_min: 'Minutes', cd_sec: 'Secondes',
    cd_note: 'Dans exactement une journée… tout un continent se retrouve au même endroit, le même jour.',
    man_label: 'Le manifeste', man_title_a: 'Un continent,', man_title_em: 'une seule', man_title_b: 'journée.',
    man_lead: "ONE DAY est né d'une conviction simple : <strong>l'Afrique n'a pas besoin d'une saison</strong> pour raconter ses civilisations — il lui faut un jour parfait, dense, total.",
    man_p1: "Le 7 août 2027, à Grand-Bassam, ville historique classée au patrimoine mondial de l'UNESCO, les 54 pays du continent et leurs diasporas convergent pour vingt-quatre heures de rythmes, de rites, de mémoires et de création.",
    man_p2: "Chaque pays désigne deux ambassadeurs : un percussionniste, porteur de la tradition rythmique, et un Komian, maître des masques ou gardien de rite initiatique. Cent huit voix, dix relais de diaspora, un seul battement.",
    man_p3: "ONE DAY n'est pas un festival que l'on regarde. C'est un festival que l'on traverse : du pèlerinage du Chemin du Retour à l'aube jusqu'au salut final face à l'Atlantique, chaque heure est une porte ouverte sur une culture vivante.",
    stat_pays: 'Pays représentés', stat_amb: 'Ambassadeurs culturels', stat_scenes: 'Scènes & villages', stat_jour: 'Journée unique',
    coif_label: "Temps fort de l'édition pilote", coif_title_a: 'Défilé des coiffures', coif_title_em: 'ancestrales', coif_title_b: 'africaines',
    coif_intro: "54 pays, des coiffures royales, rituelles, de mariage, guerrières et identitaires : une mémoire vivante présentée avec son histoire et sa signification symbolique, portée à même la scène Kingdom.",
    amb_label: 'Les deux rôles', amb_title_a: '108 ambassadeurs,', amb_title_em: '54 pays', amb_title_b: 'deux voix.',
    amb_role1: 'Rôle rythmique', amb_role1_t: 'Le percussionniste national',
    amb_role1_d: "Porteur de la tradition rythmique de son pays, il pratique un instrument de percussion traditionnel représentatif de sa culture. Sa présence nourrit les rencontres, les échanges et la transmission des savoir-faire entre délégations du continent et de la diaspora.",
    amb_role2: 'Rôle spirituel', amb_role2_t: 'Komian / dépositaire spirituel',
    amb_role2_d: "Reconnu par sa communauté ou sa lignée comme maître des masques, gardien de rite initiatique ou détenteur d'un savoir spirituel. Sa participation s'inscrit dans un cadre de respect, de transmission et de confidentialité des rites non destinés au public.",
    art_title_a: 'Les voix', art_title_em: 'du jour', art_title_b: 'unique.',
    art_more: 'délégations nationales, 108 ambassadeurs et 10 voix de la diaspora complètent le plateau.',
    prog_label: 'Programme — 24 heures non-stop', prog_title_a: 'Une journée,', prog_title_em: 'quatre', prog_title_b: 'soleils.',
    gal_label: 'Galerie — les civilisations en images', gal_title_a: 'Mémoires', gal_title_em: 'vivantes', gal_title_b: '.',
    film_label: 'Le festival en mouvement', film_title_a: 'Deux films,', film_title_em: 'un souffle', film_title_b: '.',
    bassam_label: 'Ville hôte & mémoire', bassam_title_a: 'Pourquoi', bassam_title_em: 'Grand-Bassam', bassam_title_b: '?',
    bassam_intro: "Première capitale de la Côte d'Ivoire, ville historique inscrite au patrimoine mondial de l'UNESCO, entre océan Atlantique et lagune d'Ouladine.",
    tick_label: 'Billetterie officielle', tick_title_a: 'Choisis ton', tick_title_em: 'pass', tick_title_b: 'du jour unique.',
    part_label: 'Partenariats 2027 — opportunités ouvertes', part_title_a: 'Ils font déjà', part_title_em: 'le pari', part_title_b: 'du jour unique.',
    part_intro: "Hôtellerie, transport, restauration, tourisme, médias, services et institutions : devenez partenaire de ONE DAY 2027 et participez à l'accueil de 54 pays à Grand-Bassam.",
    faq_label: 'Questions fréquentes', faq_title_a: 'Tout savoir', faq_title_em: 'avant', faq_title_b: 'le jour J.',
    band_title: 'Rejoins le jour unique.', band_sub: 'Une Afrique, mille cultures, une seule journée — et toi, tu seras où le 7 août 2027 ?',
    foot_tag: 'Une Afrique, mille cultures, une seule journée.', foot_nav: 'Navigation', foot_contact: 'Contact & réseaux',
    foot_rights: '© 2027 ONE DAY — Festival des civilisations africaines · Grand-Bassam.', foot_credit: 'Édition pilote · Africa Spirit',
    modal_title: 'Réserver ton pass', modal_qty: 'Quantité', modal_total: 'Total', modal_name: 'Nom complet', modal_email: 'Email',
    modal_note: 'Paiement en ligne disponible prochainement — réservation enregistrée, notre équipe te recontacte sous 24h.',
    modal_success: 'Réservation enregistrée !', modal_success_sub: 'Merci ! Un email de confirmation arrive dans ta boîte. À bientôt à Grand-Bassam.',
    modal_close: 'Fermer', book: 'Réserver', most_chosen: 'Le plus choisi',
    form_name: 'Nom & prénom', form_org: 'Organisation / marque', form_email: 'Email professionnel', form_type: 'Secteur', form_msg: 'Message',
    form_success: 'Candidature partenaire envoyée avec succès ! Notre équipe partenariats te répond sous 48h.',
    form_dossier_ok: 'Dossier envoyé ! Vérifie ta boîte mail (démonstration — backend à connecter).',
    ph_aube: 'Aube · 06h–12h', ph_zenith: 'Zénith · 12h–18h', ph_dusk: 'Crépuscule · 18h–00h', ph_night: 'Nuit · 00h–06h',
    home_man_link: 'Lire le manifeste', home_coif_link: 'Voir les 6 catégories', home_prog_link: 'Programme complet',
    home_gal_link: 'Toute la galerie', home_amb_link: 'Découvrir les rôles',
  },
  en: {
    nav_home: 'Home', nav_manifeste: 'Manifesto', nav_programme: 'Programme', nav_coiffures: 'Hairstyles',
    nav_amb: 'Ambassadors', nav_galerie: 'Gallery', nav_bassam: 'Grand-Bassam', nav_tickets: 'Tickets', nav_partners: 'Partners',
    cta_book: 'Book my pass', cta_films: 'Watch the films', cta_partner: 'Become a partner', cta_dossier: 'Investment file',
    cta_all: 'See all', cta_join: 'Join the single day', cta_top: 'Back to top', cta_send: 'Send', cta_pay: 'Confirm booking',
    chip1: 'Pilot edition 2027', chip2: 'Festival of African civilisations', chip3: '54 countries · 1 day',
    hero_tag: 'One Africa, a thousand cultures, a single day.',
    hero_date: 'Saturday, August 7 2027', hero_place: "Grand-Bassam, Côte d'Ivoire", hero_hours: '06:00 → 06:00', scroll: 'scroll',
    cd_title: 'Official countdown', cd_days: 'Days', cd_hours: 'Hours', cd_min: 'Minutes', cd_sec: 'Seconds',
    cd_note: 'In exactly one day… an entire continent meets in the same place, on the same day.',
    man_label: 'The manifesto', man_title_a: 'One continent,', man_title_em: 'a single', man_title_b: 'day.',
    man_lead: "ONE DAY was born from a simple conviction: <strong>Africa does not need a season</strong> to tell its civilisations — it needs one perfect, dense, total day.",
    man_p1: "On August 7 2027, in Grand-Bassam, a historic UNESCO World Heritage city, the 54 countries of the continent and their diasporas converge for twenty-four hours of rhythms, rites, memories and creation.",
    man_p2: "Each country appoints two ambassadors: a percussionist, bearer of rhythmic tradition, and a Komian, master of masks or guardian of initiatory rites. One hundred and eight voices, ten diaspora relays, one single beat.",
    man_p3: "ONE DAY is not a festival you watch. It is a festival you cross: from the Return Road pilgrimage at dawn to the final salute facing the Atlantic, every hour is an open door onto a living culture.",
    stat_pays: 'Countries represented', stat_amb: 'Cultural ambassadors', stat_scenes: 'Stages & villages', stat_jour: 'Single day',
    coif_label: 'Highlight of the pilot edition', coif_title_a: 'Parade of ancestral', coif_title_em: 'African', coif_title_b: 'hairstyles',
    coif_intro: "54 countries, royal, ritual, wedding, warrior and identity hairstyles: a living memory presented with its history and symbolic meaning, carried on the Kingdom stage itself.",
    amb_label: 'The two roles', amb_title_a: '108 ambassadors,', amb_title_em: '54 countries', amb_title_b: 'two voices.',
    amb_role1: 'Rhythmic role', amb_role1_t: 'The national percussionist',
    amb_role1_d: "Bearer of his country's rhythmic tradition, he plays a traditional percussion instrument representative of his culture. His presence fuels encounters, exchanges and the transmission of know-how between delegations from the continent and the diaspora.",
    amb_role2: 'Spiritual role', amb_role2_t: 'Komian / spiritual custodian',
    amb_role2_d: "Recognised by his community or lineage as a master of masks, guardian of initiatory rites or holder of spiritual knowledge. His participation follows a framework of respect, transmission and confidentiality for rites not intended for the public.",
    art_title_a: 'The voices', art_title_em: 'of the single', art_title_b: 'day.',
    art_more: 'national delegations, 108 ambassadors and 10 diaspora voices complete the lineup.',
    prog_label: 'Programme — 24 hours non-stop', prog_title_a: 'One day,', prog_title_em: 'four', prog_title_b: 'suns.',
    gal_label: 'Gallery — civilisations in images', gal_title_a: 'Living', gal_title_em: 'memories', gal_title_b: '.',
    film_label: 'The festival in motion', film_title_a: 'Two films,', film_title_em: 'one breath', film_title_b: '.',
    bassam_label: 'Host city & memory', bassam_title_a: 'Why', bassam_title_em: 'Grand-Bassam', bassam_title_b: '?',
    bassam_intro: "First capital of Côte d'Ivoire, a historic city listed as UNESCO World Heritage, between the Atlantic Ocean and the Ouladine lagoon.",
    tick_label: 'Official ticketing', tick_title_a: 'Choose your', tick_title_em: 'pass', tick_title_b: 'for the single day.',
    part_label: '2027 partnerships — open opportunities', part_title_a: 'They already take', part_title_em: 'the bet', part_title_b: 'of the single day.',
    part_intro: "Hotels, transport, catering, tourism, media, services and institutions: become a partner of ONE DAY 2027 and help welcome 54 countries to Grand-Bassam.",
    faq_label: 'FAQ', faq_title_a: 'Everything to know', faq_title_em: 'before', faq_title_b: 'D-day.',
    band_title: 'Join the single day.', band_sub: 'One Africa, a thousand cultures, a single day — where will you be on August 7 2027?',
    foot_tag: 'One Africa, a thousand cultures, a single day.', foot_nav: 'Navigation', foot_contact: 'Contact & socials',
    foot_rights: '© 2027 ONE DAY — Festival of African civilisations · Grand-Bassam.', foot_credit: 'Pilot edition · Africa Spirit',
    modal_title: 'Book your pass', modal_qty: 'Quantity', modal_total: 'Total', modal_name: 'Full name', modal_email: 'Email',
    modal_note: 'Online payment coming soon — booking recorded, our team will contact you within 24h.',
    modal_success: 'Booking recorded!', modal_success_sub: 'Thank you! A confirmation email is on its way. See you in Grand-Bassam.',
    modal_close: 'Close', book: 'Book', most_chosen: 'Most chosen',
    form_name: 'First & last name', form_org: 'Organisation / brand', form_email: 'Professional email', form_type: 'Sector', form_msg: 'Message',
    form_success: 'Partner application sent successfully! Our partnerships team replies within 48h.',
    form_dossier_ok: 'File sent! Check your inbox (demo — backend to connect).',
    ph_aube: 'Dawn · 06h–12h', ph_zenith: 'Zenith · 12h–18h', ph_dusk: 'Dusk · 18h–00h', ph_night: 'Night · 00h–06h',
    home_man_link: 'Read the manifesto', home_coif_link: 'See the 6 categories', home_prog_link: 'Full programme',
    home_gal_link: 'Full gallery', home_amb_link: 'Discover the roles',
  },
};