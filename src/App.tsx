import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Emergency } from './components/Emergency';
import { Pricing } from './components/Pricing';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import { useLocation } from './hooks/useLocation';

function App() {
  const { hash } = useLocation();
  const showLegal = hash === '#mentions-legales';
  const showPrivacy = hash === '#politique-confidentialite';

  if (showLegal) {
    return (
      <div className="bg-white text-gray-800 font-sans">
        <Header />
        <Legal />
        <Footer />
      </div>
    );
  }

  if (showPrivacy) {
    return (
      <div className="bg-white text-gray-800 font-sans">
        <Header />
        <Privacy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Emergency />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;