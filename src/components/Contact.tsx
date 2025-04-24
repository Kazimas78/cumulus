import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://allocumulus.fr/sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Une erreur est survenue lors de l'envoi.");
  }

  setFormData({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: ''
  });
};

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contactez-Nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Besoin d'un remplacement de ballon d'eau chaude à Antibes ? Contactez-nous pour
            un devis gratuit ou une intervention rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="replacement">Remplacement de ballon</option>
                    <option value="installation">Nouvelle installation</option>
                    <option value="repair">Réparation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consultation">Consultation/Devis</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="urgency" className="block mb-2 text-sm font-medium text-gray-700">
                  Niveau d'urgence
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="">Sélectionnez le niveau d'urgence</option>
                  <option value="urgent">Urgent (aujourd'hui/demain)</option>
                  <option value="soon">Bientôt (cette semaine)</option>
                  <option value="planned">Planifié (dans les semaines à venir)</option>
                  <option value="quote">Juste un devis pour l'instant</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone size={20} />}
                  title="Téléphone"
                  content="06.25.65.46.38"
                  link="tel:04XXXXXXXX"
                />
                
                <ContactInfo 
                  icon={<Mail size={20} />}
                  title="Email"
                  content="contact@plomberie-antibes.fr"
                  link="mailto:contact@plomberie-antibes.fr"
                />
                
                <ContactInfo 
                  icon={<MapPin size={20} />}
                  title="Adresse"
                  content="123 Avenue du Cumulus, 06600 Antibes"
                  link="https://maps.google.com"
                />
                
                <ContactInfo 
                  icon={<Clock size={20} />}
                  title="Horaires"
                  content="Lun-Ven: 8h-19h | Sam: 9h-18h | Urgences 24/7"
                />
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-800">
                <h4 className="font-bold mb-2">Zone d'intervention</h4>
                <p className="text-blue-100 text-sm">
                  Antibes, Juan-les-Pins, Golfe-Juan, Vallauris, Biot, 
                  Villeneuve-Loubet, Cagnes-sur-Mer et environs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content, link }) => {
  const ContentComponent = link ? (
    <a href={link} className="text-blue-100 hover:text-white transition">
      {content}
    </a>
  ) : (
    <span className="text-blue-100">{content}</span>
  );

  return (
    <div className="flex items-start gap-3">
      <div className="text-amber-400 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        {ContentComponent}
      </div>
    </div>
  );
};
