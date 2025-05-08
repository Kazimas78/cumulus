import React from 'react';
import { CircleDot, Check } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "Forfait Éco 100L",
      subtitle: "Studio & petit logement",
      price: "690",
      buttonColor: "blue",
      features: [
        "Ballon 100L garanti 5 ans",
        "Installation complète",
        "Reprise et recyclage de l'ancien",
        "Déplacement inclus (dans 30 km)",
        "Idéal pour : studio, T1"
      ]
    },
    {
      name: "Forfait Confort 200L",
      subtitle: "Foyer standard",
      price: "890",
      popular: true,
      buttonColor: "amber",
      features: [
        "Ballon 200L blindé ou stéatite",
        "Pose complète avec raccordements",
        "Reprise ancien ballon",
        "Garantie 5 ans",
        "Conseils d'usage inclus",
        "Idéal pour : 2 à 4 personnes"
      ]
    },
    {
      name: "Forfait Premium Thermodynamique",
      subtitle: "Économie d'énergie",
      price: "1990",
      buttonColor: "red",
      features: [
        "Ballon thermodynamique (200–300L)",
        "Pose, raccordement électrique et air",
        "Reprise ancien ballon",
        "Dossier d'aides géré",
        "Idéal pour : famille, économie long terme",
        "Éligible crédit d'impôt"
      ]
    }
  ];

  const getButtonClasses = (color) => {
    const baseClasses = "block w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-200 text-center";
    switch (color) {
      case "blue":
        return `${baseClasses} bg-blue-600 hover:bg-blue-700`;
      case "amber":
        return `${baseClasses} bg-amber-500 hover:bg-amber-600`;
      case "red":
        return `${baseClasses} bg-red-600 hover:bg-red-700`;
      default:
        return `${baseClasses} bg-blue-600 hover:bg-blue-700`;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Forfaits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à tous les besoins et budgets, avec une qualité de service garantie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                plan.popular ? 'border-4 border-blue-600' : ''
              }`}
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <p className="text-3xl font-bold text-blue-700 mb-6">{plan.price} €</p>
                <ul className="space-y-2 text-gray-700 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-blue-600 mt-1 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto">
                  <a
                    href="#contact"
                    className={getButtonClasses(plan.buttonColor)}
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Populaire
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};