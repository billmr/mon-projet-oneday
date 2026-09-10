import React from 'react';
import { LangProvider } from './i18n.jsx';
import { useHashRoute, useRevealOnScroll } from './hooks.js';
import { Loader, ProgressBar, Header, Footer } from './components/chrome.jsx';
import Home from './pages/Home.jsx';
import Manifeste from './pages/Manifeste.jsx';
import Programme from './pages/Programme.jsx';
import Coiffures from './pages/Coiffures.jsx';
import Ambassadeurs from './pages/Ambassadeurs.jsx';
import Galerie from './pages/Galerie.jsx';
import Bassam from './pages/Bassam.jsx';
import Billetterie from './pages/Billetterie.jsx';
import Partenaires from './pages/Partenaires.jsx';

const PAGES = {
  '/': Home,
  '/manifeste': Manifeste,
  '/programme': Programme,
  '/coiffures': Coiffures,
  '/ambassadeurs': Ambassadeurs,
  '/galerie': Galerie,
  '/bassam': Bassam,
  '/billetterie': Billetterie,
  '/partenaires': Partenaires,
};

function Router() {
  const route = useHashRoute();
  const Page = PAGES[route] || Home;
  useRevealOnScroll([route]);
  return (
    <React.Fragment>
      <Loader />
      <ProgressBar />
      <Header route={route} />
      <main>
        <Page />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Router />
    </LangProvider>
  );
}
