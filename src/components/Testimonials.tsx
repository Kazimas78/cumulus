import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jean-Luc",
      location: "Ajaccio",
      rating: 5,
      comment: "Intervention rapide et efficace. Le technicien était ponctuel, professionnel et a remplacé mon ballon d'eau chaude en moins de 2 heures. Service impeccable, je recommande vivement !"
    },
    {
      id: 2,
      name: "Sophie",
      location: "Porticcio",
      rating: 5,
      comment: "Excellente prestation pour l'installation de mon nouveau ballon. Le conseiller m'a aidé à choisir le modèle adapté à mes besoins et le prix était très compétitif. Merci !"
    },
    {
      id: 3,
      name: "Dumènicu",
      location: "Campo",
      rating: 4,
      comment: "Très satisfait du service d'urgence un dimanche matin. Un technicien est venu rapidement et a réparé notre ballon qui fuyait. Très professionnel et travail soigné."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de personnes
            qui nous ont fait confiance à Ajaccio et ses environs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-6">
            Rejoignez les clients satisfaits à Ajaccio et ses environs
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-blue-800 p-6 rounded-xl relative overflow-hidden group">
      <div className="absolute top-3 right-3 text-amber-400 opacity-20 group-hover:opacity-30 transition-opacity">
        <Quote size={64} />
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-400"} 
          />
        ))}
      </div>
      
      <p className="text-blue-100 mb-4 relative z-10">{testimonial.comment}</p>
      
      <div className="mt-4">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-blue-300 text-sm">{testimonial.location}</p>
      </div>
    </div>
  );
};
