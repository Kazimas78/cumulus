import React from 'react';
import { 
  Droplet, 
  WrenchIcon, 
  TimerIcon, 
  ThermometerIcon, 
  HomeIcon, 
  ShieldCheckIcon
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <WrenchIcon className="h-10 w-10" />,
      title: "Remplacement",
      description: "Remplacement professionnel à Ajaccio de votre ballon d'eau chaude défectueux avec installation complète et mise aux normes."
    },
    {
      icon: <HomeIcon className="h-10 w-10" />,
      title: "Installation",
      description: "Installation à Ajaccio de nouveaux ballons d'eau chaude de qualité supérieure avec garantie constructeur."
    },
    {
      icon: <TimerIcon className="h-10 w-10" />,
      title: "Urgence",
      description: "Service d'urgence disponible 7j/7 à Ajaccio pour les pannes soudaines nécessitant une intervention rapide."
    },
    {
      icon: <ThermometerIcon className="h-10 w-10" />,
      title: "Maintenance",
      description: "Entretien régulier et vérification à Ajaccio de votre système pour prévenir les pannes et optimiser sa durée de vie."
    },
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Réparation",
      description: "Diagnostic et réparation de fuites à Ajaccio , problèmes de température ou dysfonctionnements électriques."
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Conseil",
      description: "Conseil personnalisé pour choisir le ballon adapté à vos besoins en fonction de votre consommation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en matière de chauffage d'eau, 
            avec une équipe qualifiée et réactive sur Ajaccio et ses environs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Tous nos services sont réalisés par des techniciens certifiés, 
            respectant les normes en vigueur pour votre sécurité.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Demander un service
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="text-amber-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
