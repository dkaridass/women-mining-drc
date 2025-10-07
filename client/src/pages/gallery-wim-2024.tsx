import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/navigation';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryWIM2024Page() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images for the WIM 2024 Conference Gallery
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/attached_assets/galerie/wim-2024/jourI1.jpg',
      alt: 'Cérémonie d\'ouverture de la conférence nationale',
      caption: 'Cérémonie d\'ouverture de la conférence nationale'
    },
    {
      id: 2,
      src: '/attached_assets/galerie/wim-2024/jourI2.jpg',
      alt: 'Allocutions des officiels et partenaires',
      caption: 'Allocutions des officiels et partenaires'
    },
    {
      id: 3,
      src: '/attached_assets/galerie/wim-2024/jourI3.jpg',
      alt: 'Discours de la Présidente Nationale',
      caption: 'Discours de la Présidente Nationale'
    },
    {
      id: 4,
      src: '/attached_assets/galerie/wim-2024/jourI4.jpg',
      alt: 'Présentation de la feuille de route 2024',
      caption: 'Présentation de la feuille de route 2024'
    },
    {
      id: 5,
      src: '/attached_assets/galerie/wim-2024/jourI5.jpg',
      alt: 'Sessions d\'ouverture et accueil des déléguées',
      caption: 'Sessions d\'ouverture et accueil des déléguées'
    },
    {
      id: 6,
      src: '/attached_assets/galerie/wim-2024/jourDeux1.jpg',
      alt: 'Sessions de travail en profondeur sur les thèmes miniers',
      caption: 'Sessions de travail en profondeur sur les thèmes miniers'
    },
    {
      id: 7,
      src: '/attached_assets/galerie/wim-2024/jourDeux2.jpg',
      alt: 'Ateliers de renforcement des capacités et de formation technique',
      caption: 'Ateliers de renforcement des capacités et de formation technique'
    },
    {
      id: 8,
      src: '/attached_assets/galerie/wim-2024/jourDeux3.jpg',
      alt: 'Échanges et réseautage professionnel entre les déléguées',
      caption: 'Échanges et réseautage professionnel entre les déléguées'
    },
    {
      id: 9,
      src: '/attached_assets/galerie/wim-2024/jourDeux4.jpg',
      alt: 'Travaux de groupe et réflexions collectives',
      caption: 'Travaux de groupe et réflexions collectives'
    },
    {
      id: 10,
      src: '/attached_assets/galerie/wim-2024/jourDeux5.jpg',
      alt: 'Présentations et partages d\'expériences',
      caption: 'Présentations et partages d\'expériences'
    },
    {
      id: 11,
      src: '/attached_assets/galerie/wim-2024/jourTrois1.jpg',
      alt: 'Séance plénière de restitution des travaux de groupe',
      caption: 'Séance plénière de restitution des travaux de groupe'
    },
    {
      id: 12,
      src: '/attached_assets/galerie/wim-2024/jourTrois2.jpg',
      alt: 'Clôture officielle de la conférence et perspectives d\'avenir',
      caption: 'Clôture officielle de la conférence et perspectives d\'avenir'
    },
    {
      id: 13,
      src: '/attached_assets/galerie/wim-2024/jourTrois3.jpg',
      alt: 'Remise des attestations et reconnaissance des participantes',
      caption: 'Remise des attestations et reconnaissance des participantes'
    },
    {
      id: 14,
      src: '/attached_assets/galerie/wim-2024/jourTrois4.jpg',
      alt: 'Cérémonie de clôture et remerciements',
      caption: 'Cérémonie de clôture et remerciements'
    },
    {
      id: 15,
      src: '/attached_assets/galerie/wim-2024/jourTrois5.jpg',
      alt: 'Photo de groupe finale de la conférence',
      caption: 'Photo de groupe finale de la conférence'
    },
    {
      id: 16,
      src: '/attached_assets/galerie/wim-2024/event1.jpg',
      alt: 'Moments de réseautage et d\'échanges informels',
      caption: 'Moments de réseautage et d\'échanges informels'
    },
    {
      id: 17,
      src: '/attached_assets/galerie/wim-2024/event2.jpg',
      alt: 'Photos de groupe des comités provinciaux',
      caption: 'Photos de groupe des comités provinciaux'
    },
    {
      id: 18,
      src: '/attached_assets/galerie/wim-2024/event3.jpg',
      alt: 'Équipe de direction et organisateurs',
      caption: 'Équipe de direction et organisateurs'
    },
    {
      id: 19,
      src: '/attached_assets/galerie/wim-2024/event4.jpg',
      alt: 'Moments de convivialité et de partage',
      caption: 'Moments de convivialité et de partage'
    },
    {
      id: 20,
      src: '/attached_assets/galerie/wim-2024/event5.jpg',
      alt: 'Célébration et reconnaissance des accomplissements',
      caption: 'Célébration et reconnaissance des accomplissements'
    }
  ];

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <>
      <Helmet>
        <title>Galerie - Conférence nationale de la WIM 2024 | WIM DRC</title>
        <meta name="description" content="Découvrez les moments forts de la Conférence nationale de la WIM 2024 à travers cette galerie photo exclusive." />
        <meta property="og:title" content="Galerie - Conférence nationale de la WIM 2024" />
        <meta property="og:description" content="Moments forts de la Conférence nationale de la WIM 2024" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/attached_assets/galerie/wim-2024/jourI1.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Galerie Photos
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-2">
              Conférence nationale de la WIM 2024
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Mars 2024 - Découvrez les moments forts de cette conférence historique qui a rassemblé les femmes leaders du secteur minier congolais
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(image, index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 text-center line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>

            {/* Gallery Info */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  À propos de cette conférence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  La Conférence nationale de la WIM 2024 a marqué un tournant historique dans l'autonomisation des femmes du secteur minier congolais. 
                  Cette édition a rassemblé plus de 200 participantes venues de toutes les provinces de la RDC pour échanger, apprendre et définir 
                  les stratégies d'avenir pour l'égalité des genres dans l'industrie minière.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">200+</div>
                    <div className="text-gray-600">Participantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <div className="text-gray-600">Jours d'activités</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-gray-600">Ateliers et sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Fermer la galerie"
              >
                <X size={32} />
              </button>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Image suivante"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg">
                <p className="text-center">{selectedImage.caption}</p>
                <p className="text-center text-sm text-gray-300 mt-1">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
