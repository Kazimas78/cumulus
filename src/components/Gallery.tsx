import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      thumbnail: "https://debouchage-debouchetout.fr/storage/2023/08/travailleur-reparant-chauffe-eau-scaled.jpg?auto=compress&cs=tinysrgb&w=600",
      full: "https://debouchage-debouchetout.fr/storage/2023/08/travailleur-reparant-chauffe-eau-scaled.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Installation d'un ballon d'eau chaude",
      category: "Installation"
    },
    {
      id: 2,
      thumbnail: "https://www.thermor.fr/var/site/storage/images/_aliases/optimized/4/0/6/5/1765604-5-fre-FR/73b743aa045a-Blog_782x480_aeromax-split3-270.jpg?auto=compress&cs=tinysrgb&w=600",
      full: "https://www.thermor.fr/var/site/storage/images/_aliases/optimized/4/0/6/5/1765604-5-fre-FR/73b743aa045a-Blog_782x480_aeromax-split3-270.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Remplacement d'un système ancien",
      category: "Remplacement"
    },
    {
      id: 3,
      thumbnail: "https://bo.quelleenergie.fr/sites/default/files/2024-09/fiche-conseils-entretien-chauffe-eau-thermodynamique-01.jpg?auto=compress&cs=tinysrgb&w=600",
      full: "https://bo.quelleenergie.fr/sites/default/files/2024-09/fiche-conseils-entretien-chauffe-eau-thermodynamique-01.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Réparation d'un système défectueux",
      category: "Réparation"
    },
    {
      id: 4,
      thumbnail: "https://www.atlantic.fr/var/atlantic/storage/images/4/5/3/3/1693354-1-fre-FR/7daf96a9a391-chauffe-eau-thermodynamique-atlantic-calypso-vs-ambiance-garage.jpg?auto=compress&cs=tinysrgb&w=600",
      full: "https://www.atlantic.fr/var/atlantic/storage/images/4/5/3/3/1693354-1-fre-FR/7daf96a9a391-chauffe-eau-thermodynamique-atlantic-calypso-vs-ambiance-garage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Installation dans un appartement moderne",
      category: "Installation"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques exemples de nos interventions récentes à Ajaccio et ses environs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.thumbnail} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
                <span className="text-amber-300 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-amber-400 transition"
            >
              <ChevronLeft size={40} />
            </button>
            
            <img 
              src={selectedImage.full} 
              alt={selectedImage.alt} 
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-amber-400 transition"
            >
              <ChevronRight size={40} />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium">{selectedImage.alt}</p>
              <p className="text-amber-300">{selectedImage.category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
