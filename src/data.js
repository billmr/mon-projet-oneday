export const LOGO_URL = 'https://image.qwenlm.ai/public_source/ffe7315a-9e28-4697-905f-30d7700efd02/198cf4402-b247-4305-b067-ce603079aec8.png';

export const SITE_EMAIL = 'onedaysevent03@gmail.com';

export const A = {
  logo: '/assets/logo.png',
  heroVideo: '/assets/hero-video.mp4',
  heroFallback: '/assets/hero-fallback.jpg',
  coifRoyale: '/assets/coiffure-royale.jpg',
  coifRituelle: '/assets/coiffure-rituelle.jpg',
  coifMariage: '/assets/coiffure-mariage.jpg',
  coifGuerriere: '/assets/coiffure-guerriere.jpg',
  coifIdentitaire: '/assets/coiffure-identitaire.jpg',
  coifMemoire: '/assets/portraits-memoire.jpg',
  ambPercu: '/assets/amb-percussionniste.jpg',
  ambKomian: '/assets/amb-komian.jpg',
  artKora: '/assets/artiste-kora.jpg',
  artVoix: '/assets/artiste-voix.jpg',
  artDjembe: '/assets/artiste-djembe.jpg',
  artDanse: '/assets/artiste-danse.jpg',
  artKoraF: '/assets/artiste-kora-femme.jpg',
  galRaphia: '/assets/galerie-danse-raphia.jpg',
  galPlumes: '/assets/galerie-masque-plumes.jpg',
  galTambours: '/assets/galerie-tambours.jpg',
  galMarche: '/assets/galerie-marche.jpg',
  galSculpt: '/assets/galerie-sculpture.jpg',
  galVillage: '/assets/galerie-village.jpg',
  galRite: '/assets/galerie-rite.jpg',
  galCarte: '/assets/galerie-carte54.jpg',
  galArtis: '/assets/galerie-artisanat.jpg',
  galSande: '/assets/galerie-masque-sande.jpg',
  galCases: '/assets/galerie-cases.jpg',
  galPerles: '/assets/galerie-masque-perles.jpg',
  filmVodun: '/assets/film-vodun.mp4',
  filmElegance: '/assets/film-elegance.mp4',
};

export const NAV_ITEMS = [
  { p: '/', k: 'nav_home' },
  { p: '/galerie', k: 'nav_galerie' },
  { p: '/bassam', k: 'nav_bassam' },
  { p: '/billetterie', k: 'nav_tickets' },
  { p: '/presse', k: 'nav_press' },
  { p: '/contact', k: 'nav_contact' },
  { p: '/infos-pratiques', k: 'nav_info' },
];

export const SOCIALS = [
  { href: 'https://www.instagram.com/africa_spirit54', label: 'Instagram', icon: 'ig' },
  { href: 'https://www.facebook.com/profile.php?id=61593748711414', label: 'Facebook', icon: 'fb' },
  { href: 'https://www.tiktok.com/@africa.spirit54', label: 'TikTok', icon: 'tt' },
];

export const MARQUEE_ITEMS = ['Une Afrique / One Africa', 'Mille cultures / A thousand cultures', 'Une seule journée / A single day', '54 pays / 54 countries', '108 ambassadeurs / 108 ambassadors', 'Grand-Bassam 2027'];

export const COIFFURES = [
  { img: A.coifRoyale, fr: { t: 'Coiffures royales', d: 'Couronnes tressées des cours royales' }, en: { t: 'Royal hairstyles', d: 'Braided crowns of royal courts' } },
  { img: A.coifRituelle, fr: { t: 'Coiffures rituelles', d: 'Raphia, cauris et signes du sacré' }, en: { t: 'Ritual hairstyles', d: 'Raphia, cowries and signs of the sacred' } },
  { img: A.coifMariage, fr: { t: 'Coiffures de mariage', d: "Tresses d'alliance et fils d'or" }, en: { t: 'Wedding hairstyles', d: 'Union braids and golden threads' } },
  { img: A.coifGuerriere, fr: { t: 'Coiffures guerrières', d: 'Cimiers, crêtes et bravoure' }, en: { t: 'Warrior hairstyles', d: 'Crests, combs and bravery' } },
  { img: A.coifIdentitaire, fr: { t: 'Coiffures identitaires', d: "Affirmer qui l'on est, fil à fil" }, en: { t: 'Identity hairstyles', d: 'Affirming who you are, thread by thread' } },
  { img: A.coifMemoire, fr: { t: 'Portraits de mémoire', d: 'Visages et lignées du continent' }, en: { t: 'Portraits of memory', d: 'Faces and lineages of the continent' } },
];

export const SLOTS = [
  { phase: 'aube', time: '06:30', tag: { fr: 'Mémoire', en: 'Memory' }, place: { fr: 'Plage de Grand-Bassam', en: 'Grand-Bassam Beach' }, fr: { t: 'Pèlerinage du Chemin du Retour', d: "Marche mémorielle des diasporas sur le littoral, reconnexion aux origines et cérémonie d'ouverture." }, en: { t: 'Return Road Pilgrimage', d: 'Memorial walk of the diasporas along the coast.' } },
  { phase: 'aube', time: '09:00', tag: { fr: 'Cérémonie', en: 'Ceremony' }, place: { fr: 'Place Kingdom', en: 'Kingdom Square' }, fr: { t: 'Levée des 54 drapeaux', d: 'Chaque délégation hisse son étendard pendant que les tambours nationaux saluent le continent.' }, en: { t: 'Raising of the 54 flags', d: 'Each delegation raises its banner while national drums salute the continent.' } },
  { phase: 'aube', time: '10:30', tag: { fr: 'Temps fort', en: 'Highlight' }, place: { fr: 'Scène Kingdom', en: 'Kingdom Stage' }, fr: { t: 'Défilé des Coiffures Ancestrales', d: 'Le temps fort : coiffures royales, rituelles, de mariage, guerrières et identitaires.' }, en: { t: 'Ancestral Hairstyles Parade', d: 'The highlight: royal, ritual, wedding, warrior and identity hairstyles.' } },
  { phase: 'zenith', time: '12:30', tag: { fr: 'Savoir-faire', en: 'Craftsmanship' }, place: { fr: 'Village des Nations', en: 'Village of Nations' }, fr: { t: 'Village des Nations & marchés', d: 'Artisanat, textiles, sculptures et saveurs des 54 pays.' }, en: { t: 'Village of Nations & markets', d: 'Crafts, textiles, sculptures and flavours of 54 countries.' } },
  { phase: 'zenith', time: '14:00', tag: { fr: 'Transmission', en: 'Transmission' }, place: { fr: 'Cases du savoir', en: 'Houses of knowledge' }, fr: { t: 'Ateliers percussions & tissage', d: 'Les ambassadeurs transmettent leurs gestes : djembé, kora, métier à tisser.' }, en: { t: 'Drum & weaving workshops', d: 'Ambassadors pass on their gestures: djembe, kora, loom.' } },
  { phase: 'zenith', time: '16:00', tag: { fr: 'Idées', en: 'Ideas' }, place: { fr: 'Musée du Costume', en: 'Costume Museum' }, fr: { t: 'Table ronde : mémoires & diasporas', d: 'Penseurs, historiens et créateurs dialoguent sur le retour, la réparation.' }, en: { t: 'Round table: memories & diasporas', d: 'Thinkers, historians and creators discuss return, repair.' } },
  { phase: 'dusk', time: '18:30', tag: { fr: 'Musique', en: 'Music' }, place: { fr: 'Scène Atlantique', en: 'Atlantic Stage' }, fr: { t: 'Grande scène : tambours des 54 pays', d: 'Cent huit percussionnistes en cercle, un seul souffle rythmique.' }, en: { t: 'Main stage: drums of 54 countries', d: 'One hundred and eight percussionists in a circle.' } },
  { phase: 'dusk', time: '20:00', tag: { fr: 'Rite', en: 'Rite' }, place: { fr: 'Scène Forêt', en: 'Forest Stage' }, fr: { t: 'Komian : cérémonie visuelle', d: 'Présentation scénique respectueuse des masques et parures.' }, en: { t: 'Komian: visual ceremony', d: 'A respectful stage presentation of masks and regalia.' } },
  { phase: 'dusk', time: '21:30', tag: { fr: 'Concert', en: 'Concert' }, place: { fr: 'Scène Atlantique', en: 'Atlantic Stage' }, fr: { t: 'Concert symphonique afro', d: "Tête d'affiche : kora, cuivres, chœurs et orchestre." }, en: { t: 'Afro symphonic concert', d: 'Headliner: kora, brass, choirs and orchestra.' } },
  { phase: 'night', time: '00:00', tag: { fr: 'Club', en: 'Club' }, place: { fr: 'Plage, feu central', en: 'Beach, central fire' }, fr: { t: 'Afro-nuit & DJs du continent', d: "Amapiano, afrobeats, coupé-décalé, gqom." }, en: { t: 'Afro-night & continental DJs', d: 'Amapiano, afrobeats, coupé-décalé, gqom.' } },
  { phase: 'night', time: '02:00', tag: { fr: 'Contes', en: 'Tales' }, place: { fr: "Lagune d'Ouladine", en: 'Ouladine Lagoon' }, fr: { t: 'Contes autour du feu', d: 'Griots et conteuses se relayent en douze langues.' }, en: { t: 'Fireside tales', d: 'Griots and storytellers alternate in twelve languages.' } },
  { phase: 'night', time: '04:30', tag: { fr: 'Clôture', en: 'Closing' }, place: { fr: 'Littoral', en: 'Coastline' }, fr: { t: "Salut à l'aube : hymne panafricain", d: "Face à l'Atlantique, les 108 ambassadeurs ferment la journée." }, en: { t: 'Dawn salute: pan-African hymn', d: 'Facing the Atlantic, the 108 ambassadors close the single day.' } },
];

export const ARTISTS = [
  { img: A.artKora, pays: 'Mali', fr: { n: 'Sékou Kouyaté', r: 'Kora & récit griotique' }, en: { n: 'Sékou Kouyaté', r: 'Kora & griot storytelling' } },
  { img: A.artVoix, pays: 'Nigeria', fr: { n: 'Amaka Eze', r: 'Voix afro-soul' }, en: { n: 'Amaka Eze', r: 'Afro-soul voice' } },
  { img: A.artDjembe, pays: "Côte d'Ivoire", fr: { n: 'Moussa Diarra', r: 'Djembé & tambours parlants' }, en: { n: 'Moussa Diarra', r: 'Djembe & talking drums' } },
  { img: A.artDanse, pays: 'Burkina Faso', fr: { n: 'Aïcha Koné', r: 'Danse contemporaine' }, en: { n: 'Aïcha Koné', r: 'Contemporary dance' } },
  { img: A.artKoraF, pays: 'Diaspora', fr: { n: 'Voix de la diaspora', r: 'Kora & création' }, en: { n: 'Diaspora voice', r: 'Kora & creation' } },
  { img: A.ambPercu, pays: 'Diaspora', fr: { n: 'Relais diaspora', r: 'Percussions & transmission' }, en: { n: 'Diaspora relay', r: 'Percussions & transmission' } },
];

export const GALLERY = [
  { img: A.galRaphia, fr: 'Danse rituelle en raphia', en: 'Ritual raphia dance' },
  { img: A.galPlumes, fr: 'Masques du continent', en: 'Masks of the continent' },
  { img: A.galTambours, fr: 'Tambours, langue commune', en: 'Drums, common language' },
  { img: A.galMarche, fr: 'Marchés & couleurs', en: 'Markets & colours' },
  { img: A.heroFallback, fr: 'Acrobaties de fête', en: 'Festive acrobatics' },
  { img: A.galSculpt, fr: 'Sculpture, maternité', en: 'Sculpture, motherhood' },
  { img: A.galVillage, fr: 'Village des Nations', en: 'Village of Nations' },
  { img: A.galRite, fr: 'Paille, cauris, secret', en: 'Straw, cowries, secret' },
  { img: A.galCarte, fr: '54 pays souverains', en: '54 sovereign countries' },
  { img: A.galArtis, fr: 'Artisanat du Mozambique', en: 'Mozambique craftsmanship' },
  { img: A.galSande, fr: 'Masque Sandé', en: 'Sande mask' },
  { img: A.galCases, fr: 'Musée des civilisations', en: 'Museum of civilisations' },
];

export const FILMS = [
  { src: A.filmVodun, poster: A.galPerles, fr: { t: 'Héritage Vodun', d: 'rituels & processions' }, en: { t: 'Vodun Heritage', d: 'rituals & processions' } },
  { src: A.filmElegance, poster: A.coifIdentitaire, fr: { t: 'Élégance africaine', d: 'style & création' }, en: { t: 'African Elegance', d: 'style & creation' } },
];

export const PASSES = [
  { id: 'village', price: 10000, hot: false, fr: { n: 'Pass Village', f: ['Accès au Village des Nations', 'Marchés & artisanat des 54 pays', 'Ateliers de transmission', 'Contes autour du feu'] }, en: { n: 'Village Pass', f: ['Access to the Village of Nations', 'Markets & crafts of 54 countries', 'Transmission workshops', 'Fireside tales'] } },
  { id: 'journee', price: 25000, hot: true, fr: { n: 'Pass Journée', f: ['Tout le Pass Village', 'Défilé des Coiffures Ancestrales', 'Grande scène : tambours des 54 pays', 'Concert symphonique afro', 'Afro-nuit & DJs du continent'] }, en: { n: 'Day Pass', f: ['Everything in Village Pass', 'Ancestral Hairstyles Parade', 'Main stage: drums of 54 countries', 'Afro symphonic concert', 'Afro-night & continental DJs'] } },
  { id: 'diaspora', price: 75000, hot: false, fr: { n: 'Pass Diaspora', f: ['Tout le Pass Journée', 'Pèlerinage du Chemin du Retour', 'Table ronde mémoires & diasporas', 'Cérémonie du Retour & catalogue officiel', 'Navettes aéroport ↔ Grand-Bassam'] }, en: { n: 'Diaspora Pass', f: ['Everything in Day Pass', 'Return Road Pilgrimage', 'Memories & diasporas round table', 'Return Ceremony & official catalogue', 'Airport ↔ Grand-Bassam shuttles'] } },
];

export const FAQ = [
  { q: { fr: 'Où et quand a lieu ONE DAY ?', en: 'Where and when is ONE DAY?' }, a: { fr: "Le samedi 7 août 2027, de 06h00 à 06h00 le lendemain, à Grand-Bassam, ville historique UNESCO.", en: "On Saturday August 7 2027, from 06:00 to 06:00, in Grand-Bassam, UNESCO World Heritage city." } },
  { q: { fr: 'Comment rejoindre Grand-Bassam ?', en: 'How to reach Grand-Bassam?' }, a: { fr: "Aéroport Félix Houphouët-Boigny d'Abidjan, à 40 min. Navettes officielles incluses dans le Pass Diaspora.", en: "Félix Houphouët-Boigny international airport, 40 min away. Official shuttles included in Diaspora Pass." } },
  { q: { fr: 'Les rites des Komian sont-ils publics ?', en: 'Are Komian rites public?' }, a: { fr: 'Non. Les rites non destinés au public restent privés. Seule une présentation scénique visuelle est proposée au crépuscule.', en: 'No. Rites not intended for the public remain private. Only a visual stage presentation is offered at dusk.' } },
  { q: { fr: 'Le festival est-il accessible aux enfants ?', en: 'Is the festival child-friendly?' }, a: { fr: "Oui. Les moins de 12 ans entrent gratuitement accompagnés d'un porteur de pass.", en: 'Yes. Under-12s enter free with a pass holder.' } },
  { q: { fr: 'Comment devenir partenaire ou volontaire ?', en: 'How to become a partner or volunteer?' }, a: { fr: "Partenariats ouverts aux institutions et marques. Programme volontaires début 2027.", en: '2027 partnerships open to institutions and brands. Volunteer programme opens early 2027.' } },
];

export const BASSAM_POINTS = [
  { fr: ['Patrimoine mondial', "classé à l'UNESCO depuis 2012"], en: ['World Heritage', 'UNESCO-listed since 2012'] },
  { fr: ['Première capitale', "de la Côte d'Ivoire"], en: ['First capital', "of Côte d'Ivoire"] },
  { fr: ['Quartier France', "& village N'zima, deux mémoires juxtaposées"], en: ['France District', "& N'zima village, two juxtaposed memories"] },
  { fr: ['Océan & lagune', 'le littoral comme scène naturelle'], en: ['Ocean & lagoon', 'the coastline as a natural stage'] },
  { fr: ['Chemin du Retour', 'parcours mémoriel des diasporas'], en: ['Return Road', 'memorial path of the diasporas'] },
  { fr: ["À 40 min d'Abidjan", 'aéroport international Félix Houphouët-Boigny'], en: ['40 min from Abidjan', 'Félix Houphouët-Boigny international airport'] },
];

export const PARTNERS = ['Ministère de la Culture', 'UNESCO', 'Ville de Grand-Bassam', "Air Côte d'Ivoire", 'Orange CI', 'Ecobank', 'SOLIBRARTI', 'Fondation Culturelle Africaine', 'UEMOA'];