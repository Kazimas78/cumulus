import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.location.hash = '#hero';
    window.scrollTo(0, 0);
  };

  return (
   <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={handleLogoClick}
        >
          <Droplets size={32} className="text-amber-500" />
          <div className="font-bold text-xl md:text-2xl">
            <span className="text-amber-500">ALLO</span>
            <span className={isScrolled ? 'text-blue-900' : 'text-white'}>cumulus</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
          <a href="#contact" className="flex items-center text-blue-900 hover:text-white transition">
            <Phone size={16} className="text-amber-500 mr-2" />
            <span className="text-amber-500 font-semibold">06.79.41.09.67</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-900 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden p-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile setIsOpen={setIsOpen} />
            <a 
              href="#contact" 
              className="flex items-center justify-center py-2 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} className="mr-2" />
              <span>Nous contacter</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, setIsOpen = () => {}, isScrolled = false }) => {
  const links = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`${
        mobile 
          ? 'block py-2 text-center hover:bg-gray-50 rounded-md text-gray-800' 
          : `${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-700`
      } font-medium transition`}
      onClick={() => mobile && setIsOpen(false)}
    >
      {link.name}
    </a>
  ));
};