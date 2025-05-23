import React from 'react';
import { Phone, Clock, ThumbsUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6794816/pexels-photo-6794816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Installation et Remplacement de Ballon d'Eau Chaude à <span className="text-amber-400">Ajaccio</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Expert en chauffe-eau depuis plus de 15 ans en Corse. Intervention rapide, devis gratuit et service professionnel garanti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              Devis gratuit et sans engagement
            </a>
            <a 
              href="tel:0679410967" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300"
            >
              <Phone size={18} />
              06.79.41.09.67
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FeatureBadge icon={<Clock size={20} />} text="Intervention sous 24h*" />
            <FeatureBadge icon={<ThumbsUp size={20} />} text="Garantie 2 ans pièces et main d'œuvre" />
            <FeatureBadge icon={<Phone size={20} />} text="Devis rapide et gratuit" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
    <div className="text-amber-400">
      {icon}
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);