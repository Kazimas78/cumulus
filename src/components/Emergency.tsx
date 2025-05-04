import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const Emergency = () => {
  return (
    <section className="bg-amber-500 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AlertTriangle size={40} className="text-white" />
            <div>
              <h3 className="text-2xl font-bold">Urgence cumulus ?</h3>
              <p className="text-amber-100">Intervention rapide sur Ajaccio et alentours</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:0625654638" 
              className="bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300"
            >
              <Phone size={20} />
              06.79.41.09.67
            </a>
            <a 
              href="#contact" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Contacter en ligne
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
