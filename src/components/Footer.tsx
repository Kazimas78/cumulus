import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-amber-500">ALLO</span>
              <span className="text-white">cumulus</span>
            </div>
            <p className="text-blue-200 mb-4">
              Votre spécialiste Corse du remplacement et de l'installation de chauffe-eau à Ajaccio
              et sa région depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <FooterLink text="Remplacement de cumulus" href="#services" />
              <FooterLink text="Installation de chauffe eau" href="#services" />
              <FooterLink text="Dépannage d'urgence chauffe eau" href="#services" />
              <FooterLink text="Entretien et contrat de maintenance chauffe eau" href="#services" />
              <FooterLink text="Conseil et devis gratuit" href="#contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Zones d'Intervention</h3>
            <ul className="space-y-2">
              <FooterLocation text="Ajaccio" />
              <FooterLocation text="Baleone" />
              <FooterLocation text="Porticcio" />
              <FooterLocation text="Bastelicaccia" />
              <FooterLocation text="Alata" />
              <FooterLocation text="Afa" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <FooterLink text="Accueil" href="#hero" />
              <FooterLink text="À propos de nous" href="#" />
              <FooterLink text="Témoignages clients" href="#testimonials" />
              <FooterLink text="Foire aux questions" href="#faq" />
              <FooterLink text="Nous contacter" href="#contact" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cumulus Service - Tous droits réservés
            </p>
            <div className="flex space-x-4 text-blue-300 text-sm">
              <a href="#" className="hover:text-white transition">Mentions légales</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => (
  <a 
    href={href} 
    className="bg-blue-900 hover:bg-amber-500 p-2 rounded-full transition-colors duration-300"
    aria-label="Suivez-nous sur les réseaux sociaux"
  >
    {icon}
  </a>
);

const FooterLink = ({ text, href }) => (
  <li>
    <a 
      href={href} 
      className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
    >
      {text}
    </a>
  </li>
);

const FooterLocation = ({ text }) => (
  <li className="flex items-center text-blue-200">
    <MapPin size={14} className="mr-2 text-amber-400" />
    {text}
  </li>
);
