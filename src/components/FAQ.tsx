import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Quels sont les signes qu'un ballon d'eau chaude doit être remplacé ?",
      answer: "Les signes indiquant qu'un remplacement peut être nécessaire comprennent : l'eau qui n'est plus assez chaude ou pas chaude du tout, des bruits inhabituels (claquements, grondements), des fuites visibles autour du ballon, de l'eau rouillée ou décolorée, et un ballon âgé de plus de 10 ans."
    },
    {
      question: "Combien de temps prend le remplacement d'un ballon d'eau chaude ?",
      answer: "Le temps d'installation dépend de plusieurs facteurs, mais généralement, le remplacement d'un ballon d'eau chaude standard prend entre 2 et 4 heures. Cela inclut le retrait de l'ancien appareil, l'installation du nouveau et les tests de fonctionnement."
    },
    {
      question: "Quels sont les coûts moyens d'un remplacement de ballon d'eau chaude ?",
      answer: "Le coût varie en fonction du type et de la capacité du ballon choisi. Pour un ballon électrique standard, comptez entre 500€ et 1000€ tout compris (matériel et main d'œuvre). Pour un ballon thermodynamique, les prix commencent autour de 1500€. Nous fournissons toujours un devis détaillé avant toute intervention."
    },
    {
      question: "Proposez-vous un service d'urgence en cas de panne ?",
      answer: "Oui, nous offrons un service d'urgence 7j/7 pour les situations critiques comme les fuites importantes ou les pannes complètes de chauffage d'eau. Contactez notre numéro d'urgence et un technicien vous répondra dans les plus brefs délais."
    },
    {
      question: "Quelle est la durée de vie moyenne d'un ballon d'eau chaude ?",
      answer: "La durée de vie moyenne d'un ballon d'eau chaude se situe entre 8 et 12 ans, selon le modèle, la qualité de l'eau dans votre région et l'entretien régulier. Un entretien annuel peut prolonger significativement la durée de vie de votre équipement."
    },
    {
      question: "Quelles marques de ballons d'eau chaude installez-vous ?",
      answer: "Nous travaillons avec les marques leaders du marché reconnues pour leur fiabilité et leur performance : Atlantic, Thermor, De Dietrich, Ariston, et Chaffoteaux. Nous pouvons vous conseiller sur le modèle le plus adapté à vos besoins spécifiques."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Questions Fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes concernant nos services
            de remplacement et d'installation de ballons d'eau chaude.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">Vous avez d'autres questions ?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-blue-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-blue-900 ml-2 flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-blue-900 ml-2 flex-shrink-0" size={20} />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
};