// Gallery data structure - Organized by event and category
export interface GalleryImage {
  src: string
  fallback?: string | null
  alt: string
  label: string
}

export interface Gallery {
  id: string
  title: string
  description: string
  date: string
  category: 'conference' | 'atelier' | 'festival' | 'march8' | 'evenement' | 'recent' | 'whatsapp'
  coverImage: GalleryImage
  images: GalleryImage[]
  location?: string
}

// Helper function to create gallery image
const img = (src: string, alt: string, label?: string, fallback?: string): GalleryImage => ({
  src,
  fallback: fallback || null,
  alt,
  label: label || alt,
})

// All gallery images organized by event
export const galleries: Gallery[] = [
  // MINING INDABA 2026
  {
    id: 'mining-indaba-2026',
    title: 'Mining Indaba 2026',
    description: 'Participation de Women in Mining DRC au prestigieux Mining Indaba de Cape Town, célébrant le leadership et l\'innovation des femmes.',
    date: 'Février 2026',
    category: 'evenement',
    location: 'Cape Town, Afrique du Sud',
    coverImage: img('/images/indaba/IMG_0850.jpg', 'Mining Indaba 2026', 'Mining Indaba 2026'),
    images: [
      img('/images/indaba/IMG_0619.jpg', 'Panel de discussion', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0777.jpg', 'Réseautage', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0781.jpg', 'Session interactive', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0791.jpg', 'Audience attentive', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0796.jpg', 'Présentation', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0797.jpg', 'Inspiration', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0803.jpg', 'Célébration', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0805.jpg', 'Femmes leaders', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0815.jpg', 'Délégation', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0817.jpg', 'Scène principale', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0838.jpg', 'Connexions', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0850.jpg', 'Photo marquante', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0852.jpg', 'Moment fort', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0870.jpg', 'Alliés de la transition', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0873.jpg', 'Leadership', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0878.jpg', 'Afrique du Sud', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0888.jpg', 'Innovation', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0893.jpg', 'Visibilité', 'Mining Indaba 2026'),
      img('/images/indaba/IMG_0899.jpg', 'Clôture', 'Mining Indaba 2026'),
    ],
  },

  // CONFÉRENCE WIM 2024 - Jour 1
  {
    id: 'wim2024-jour1',
    title: 'Conférence WIM 2024 – Jour 1',
    description: 'Ouverture de la Conférence WIM 2024 à Lubumbashi. Cérémonie d\'ouverture, présentations inaugurales et premières sessions.',
    date: '2024',
    category: 'conference',
    location: 'Lubumbashi, RDC',
    coverImage: img('/images/gallery/jourI1.jpg', 'Jour 1 - Photo 1', 'Conférence WIM 2024 - Jour 1'),
    images: [
      img('/images/gallery/jourI1.jpg', 'Jour 1 - Photo 1', 'Jour 1 - Photo 1'),
      img('/images/gallery/jourI1_2.jpg', 'Jour 1 - Photo 1', 'Jour 1 - Photo 1'),
      img('/images/gallery/jourI2.jpg', 'Jour 1 - Photo 2', 'Jour 1 - Photo 2'),
      img('/images/gallery/jourI2_2.jpg', 'Jour 1 - Photo 2', 'Jour 1 - Photo 2'),
      img('/images/gallery/jourI3.jpg', 'Jour 1 - Photo 3', 'Jour 1 - Photo 3'),
      img('/images/gallery/jourI3_2.jpg', 'Jour 1 - Photo 3', 'Jour 1 - Photo 3'),
      img('/images/gallery/jourI4.jpg', 'Jour 1 - Photo 4', 'Jour 1 - Photo 4'),
      img('/images/gallery/jourI4_2.jpg', 'Jour 1 - Photo 4', 'Jour 1 - Photo 4'),
      img('/images/gallery/jourI5.jpg', 'Jour 1 - Photo 5', 'Jour 1 - Photo 5'),
      img('/images/gallery/jourI5_2.jpg', 'Jour 1 - Photo 5', 'Jour 1 - Photo 5'),
      img('/images/gallery/jourI7.jpg', 'Jour 1 - Photo 7', 'Jour 1 - Photo 7'),
      img('/images/gallery/jourI7_2.jpg', 'Jour 1 - Photo 7', 'Jour 1 - Photo 7'),
      img('/images/gallery/jourI8.jpg', 'Jour 1 - Photo 8', 'Jour 1 - Photo 8'),
      img('/images/gallery/jourI8_2.jpg', 'Jour 1 - Photo 8', 'Jour 1 - Photo 8'),
      img('/images/gallery/jourI9.jpg', 'Jour 1 - Photo 9', 'Jour 1 - Photo 9'),
      img('/images/gallery/jourI9_2.jpg', 'Jour 1 - Photo 9', 'Jour 1 - Photo 9'),
      img('/images/gallery/jourI10.jpg', 'Jour 1 - Photo 10', 'Jour 1 - Photo 10'),
      img('/images/gallery/jourI10_2.jpg', 'Jour 1 - Photo 10', 'Jour 1 - Photo 10'),
      img('/images/gallery/jourI11.jpg', 'Jour 1 - Photo 11', 'Jour 1 - Photo 11'),
      img('/images/gallery/jourI11_2.jpg', 'Jour 1 - Photo 11', 'Jour 1 - Photo 11'),
      img('/images/gallery/jourI12.jpg', 'Jour 1 - Photo 12', 'Jour 1 - Photo 12'),
      img('/images/gallery/jourI12_2.jpg', 'Jour 1 - Photo 12', 'Jour 1 - Photo 12'),
      img('/images/gallery/jourI13.jpg', 'Jour 1 - Photo 13', 'Jour 1 - Photo 13'),
      img('/images/gallery/jourI14.jpg', 'Jour 1 - Photo 14', 'Jour 1 - Photo 14'),
      img('/images/gallery/jourI15.jpg', 'Jour 1 - Photo 15', 'Jour 1 - Photo 15'),
      img('/images/gallery/jourI16.jpg', 'Jour 1 - Photo 16', 'Jour 1 - Photo 16'),
      img('/images/gallery/jourI17.jpg', 'Jour 1 - Photo 17', 'Jour 1 - Photo 17'),
      // WIM 2024 prefixed versions
      img('/images/gallery/wim2024_jourI1.jpg', 'JourI1', 'Jour 1 - Photo 1'),
      img('/images/gallery/wim2024_jourI1_2.jpg', 'JourI1 2', 'Jour 1 - Photo 1'),
      img('/images/gallery/wim2024_jourI2.jpg', 'JourI2', 'Jour 1 - Photo 2'),
      img('/images/gallery/wim2024_jourI2_2.jpg', 'JourI2 2', 'Jour 1 - Photo 2'),
      img('/images/gallery/wim2024_jourI3.jpg', 'JourI3', 'Jour 1 - Photo 3'),
      img('/images/gallery/wim2024_jourI3_2.jpg', 'JourI3 2', 'Jour 1 - Photo 3'),
      img('/images/gallery/wim2024_jourI4.jpg', 'JourI4', 'Jour 1 - Photo 4'),
      img('/images/gallery/wim2024_jourI4_2.jpg', 'JourI4 2', 'Jour 1 - Photo 4'),
      img('/images/gallery/wim2024_jourI5.jpg', 'JourI5', 'Jour 1 - Photo 5'),
      img('/images/gallery/wim2024_jourI5_2.jpg', 'JourI5 2', 'Jour 1 - Photo 5'),
      img('/images/gallery/wim2024_jourI7.jpg', 'JourI7', 'Jour 1 - Photo 7'),
      img('/images/gallery/wim2024_jourI7_2.jpg', 'JourI7 2', 'Jour 1 - Photo 7'),
      img('/images/gallery/wim2024_jourI8.jpg', 'JourI8', 'Jour 1 - Photo 8'),
      img('/images/gallery/wim2024_jourI8_2.jpg', 'JourI8 2', 'Jour 1 - Photo 8'),
      img('/images/gallery/wim2024_jourI9.jpg', 'JourI9', 'Jour 1 - Photo 9'),
      img('/images/gallery/wim2024_jourI9_2.jpg', 'JourI9 2', 'Jour 1 - Photo 9'),
      img('/images/gallery/wim2024_jourI10.jpg', 'JourI10', 'Jour 1 - Photo 10'),
      img('/images/gallery/wim2024_jourI10_2.jpg', 'JourI10 2', 'Jour 1 - Photo 10'),
      img('/images/gallery/wim2024_jourI11.jpg', 'JourI11', 'Jour 1 - Photo 11'),
      img('/images/gallery/wim2024_jourI11_2.jpg', 'JourI11 2', 'Jour 1 - Photo 11'),
      img('/images/gallery/wim2024_jourI12.jpg', 'JourI12', 'Jour 1 - Photo 12'),
      img('/images/gallery/wim2024_jourI12_2.jpg', 'JourI12 2', 'Jour 1 - Photo 12'),
      img('/images/gallery/wim2024_jourI13.jpg', 'JourI13', 'Jour 1 - Photo 13'),
      img('/images/gallery/wim2024_jourI14.jpg', 'JourI14', 'Jour 1 - Photo 14'),
      img('/images/gallery/wim2024_jourI15.jpg', 'JourI15', 'Jour 1 - Photo 15'),
      img('/images/gallery/wim2024_jourI16.jpg', 'JourI16', 'Jour 1 - Photo 16'),
      img('/images/gallery/wim2024_jourI17.jpg', 'JourI17', 'Jour 1 - Photo 17'),
    ],
  },

  // CONFÉRENCE WIM 2024 - Jour 2
  {
    id: 'wim2024-jour2',
    title: 'Conférence WIM 2024 – Jour 2',
    description: 'Deuxième jour de la conférence avec sessions de formation, ateliers pratiques et échanges entre participantes.',
    date: '2024',
    category: 'conference',
    location: 'Lubumbashi, RDC',
    coverImage: img('/images/gallery/jourDeux1.jpg', 'Jour 2 - Photo 1', 'Conférence WIM 2024 - Jour 2'),
    images: [
      img('/images/gallery/jourDeux1.jpg', 'Jour 2 - Photo 1', 'Jour 2 - Photo 1'),
      img('/images/gallery/jourDeux2.jpg', 'Jour 2 - Photo 2', 'Jour 2 - Photo 2'),
      img('/images/gallery/jourDeux3.jpg', 'Jour 2 - Photo 3', 'Jour 2 - Photo 3'),
      img('/images/gallery/jourDeux4.jpg', 'Jour 2 - Photo 4', 'Jour 2 - Photo 4'),
      img('/images/gallery/jourDeux5.jpg', 'Jour 2 - Photo 5', 'Jour 2 - Photo 5'),
      img('/images/gallery/jourDeux7.jpg', 'Jour 2 - Photo 7', 'Jour 2 - Photo 7'),
      img('/images/gallery/jourDeux8.jpg', 'Jour 2 - Photo 8', 'Jour 2 - Photo 8'),
      img('/images/gallery/jourDeux9.jpg', 'Jour 2 - Photo 9', 'Jour 2 - Photo 9'),
      img('/images/gallery/jourDeux11.jpg', 'Jour 2 - Photo 11', 'Jour 2 - Photo 11'),
      img('/images/gallery/jourDeux12.jpg', 'Jour 2 - Photo 12', 'Jour 2 - Photo 12'),
      img('/images/gallery/jourDeux13.jpg', 'Jour 2 - Photo 13', 'Jour 2 - Photo 13'),
      img('/images/gallery/jourDeux15.jpg', 'Jour 2 - Photo 15', 'Jour 2 - Photo 15'),
      img('/images/gallery/jourDeux16.jpg', 'Jour 2 - Photo 16', 'Jour 2 - Photo 16'),
      img('/images/gallery/jourDeux17.jpg', 'Jour 2 - Photo 17', 'Jour 2 - Photo 17'),
      // WIM 2024 prefixed versions
      img('/images/gallery/wim2024_jourDeux1.jpg', 'JourDeux1', 'Jour 2 - Photo 1'),
      img('/images/gallery/wim2024_jourDeux2.jpg', 'JourDeux2', 'Jour 2 - Photo 2'),
      img('/images/gallery/wim2024_jourDeux3.jpg', 'JourDeux3', 'Jour 2 - Photo 3'),
      img('/images/gallery/wim2024_jourDeux4.jpg', 'JourDeux4', 'Jour 2 - Photo 4'),
      img('/images/gallery/wim2024_jourDeux5.jpg', 'JourDeux5', 'Jour 2 - Photo 5'),
      img('/images/gallery/wim2024_jourDeux7.jpg', 'JourDeux7', 'Jour 2 - Photo 7'),
      img('/images/gallery/wim2024_jourDeux8.jpg', 'JourDeux8', 'Jour 2 - Photo 8'),
      img('/images/gallery/wim2024_jourDeux9.jpg', 'JourDeux9', 'Jour 2 - Photo 9'),
      img('/images/gallery/wim2024_jourDeux11.jpg', 'JourDeux11', 'Jour 2 - Photo 11'),
      img('/images/gallery/wim2024_jourDeux12.jpg', 'JourDeux12', 'Jour 2 - Photo 12'),
      img('/images/gallery/wim2024_jourDeux13.jpg', 'JourDeux13', 'Jour 2 - Photo 13'),
      img('/images/gallery/wim2024_jourDeux15.jpg', 'JourDeux15', 'Jour 2 - Photo 15'),
      img('/images/gallery/wim2024_jourDeux16.jpg', 'JourDeux16', 'Jour 2 - Photo 16'),
      img('/images/gallery/wim2024_jourDeux17.jpg', 'JourDeux17', 'Jour 2 - Photo 17'),
    ],
  },

  // CONFÉRENCE WIM 2024 - Jour 3
  {
    id: 'wim2024-jour3',
    title: 'Conférence WIM 2024 – Jour 3',
    description: 'Troisième et dernier jour de la conférence avec clôture, remise de certificats et cérémonie de clôture.',
    date: '2024',
    category: 'conference',
    location: 'Lubumbashi, RDC',
    coverImage: img('/images/gallery/jourTrois1.jpg', 'Jour 3 - Photo 1', 'Conférence WIM 2024 - Jour 3'),
    images: [
      img('/images/gallery/jourTrois1.jpg', 'Jour 3 - Photo 1', 'Jour 3 - Photo 1'),
      img('/images/gallery/jourTrois2.jpg', 'Jour 3 - Photo 2', 'Jour 3 - Photo 2'),
      img('/images/gallery/jourTrois3.jpg', 'Jour 3 - Photo 3', 'Jour 3 - Photo 3'),
      img('/images/gallery/jourTrois4.jpg', 'Jour 3 - Photo 4', 'Jour 3 - Photo 4'),
      img('/images/gallery/jourTrois5.jpg', 'Jour 3 - Photo 5', 'Jour 3 - Photo 5'),
      img('/images/gallery/jourTrois6.jpg', 'Jour 3 - Photo 6', 'Jour 3 - Photo 6'),
      img('/images/gallery/jourTrois7.jpg', 'Jour 3 - Photo 7', 'Jour 3 - Photo 7'),
      img('/images/gallery/jourTrois8.jpg', 'Jour 3 - Photo 8', 'Jour 3 - Photo 8'),
      img('/images/gallery/jourTrois9.jpg', 'Jour 3 - Photo 9', 'Jour 3 - Photo 9'),
      img('/images/gallery/jourTrois10.jpg', 'Jour 3 - Photo 10', 'Jour 3 - Photo 10'),
      img('/images/gallery/jourTrois11.jpg', 'Jour 3 - Photo 11', 'Jour 3 - Photo 11'),
      img('/images/gallery/jourTrois12.jpg', 'Jour 3 - Photo 12', 'Jour 3 - Photo 12'),
      img('/images/gallery/jourTrois13.jpg', 'Jour 3 - Photo 13', 'Jour 3 - Photo 13'),
      img('/images/gallery/jourTrois14.jpg', 'Jour 3 - Photo 14', 'Jour 3 - Photo 14'),
      img('/images/gallery/jourTrois15.jpg', 'Jour 3 - Photo 15', 'Jour 3 - Photo 15'),
      img('/images/gallery/jourTrois16.jpg', 'Jour 3 - Photo 16', 'Jour 3 - Photo 16'),
      img('/images/gallery/jourTrois17.jpg', 'Jour 3 - Photo 17', 'Jour 3 - Photo 17'),
      img('/images/gallery/jourTrois18.jpg', 'Jour 3 - Photo 18', 'Jour 3 - Photo 18'),
      // WIM 2024 prefixed versions
      img('/images/gallery/wim2024_jourTrois1.jpg', 'JourTrois1', 'Jour 3 - Photo 1'),
      img('/images/gallery/wim2024_jourTrois2.jpg', 'JourTrois2', 'Jour 3 - Photo 2'),
      img('/images/gallery/wim2024_jourTrois3.jpg', 'JourTrois3', 'Jour 3 - Photo 3'),
      img('/images/gallery/wim2024_jourTrois4.jpg', 'JourTrois4', 'Jour 3 - Photo 4'),
      img('/images/gallery/wim2024_jourTrois5.jpg', 'JourTrois5', 'Jour 3 - Photo 5'),
      img('/images/gallery/wim2024_jourTrois6.jpg', 'JourTrois6', 'Jour 3 - Photo 6'),
      img('/images/gallery/wim2024_jourTrois7.jpg', 'JourTrois7', 'Jour 3 - Photo 7'),
      img('/images/gallery/wim2024_jourTrois8.jpg', 'JourTrois8', 'Jour 3 - Photo 8'),
      img('/images/gallery/wim2024_jourTrois9.jpg', 'JourTrois9', 'Jour 3 - Photo 9'),
      img('/images/gallery/wim2024_jourTrois10.jpg', 'JourTrois10', 'Jour 3 - Photo 10'),
      img('/images/gallery/wim2024_jourTrois11.jpg', 'JourTrois11', 'Jour 3 - Photo 11'),
      img('/images/gallery/wim2024_jourTrois12.jpg', 'JourTrois12', 'Jour 3 - Photo 12'),
      img('/images/gallery/wim2024_jourTrois13.jpg', 'JourTrois13', 'Jour 3 - Photo 13'),
      img('/images/gallery/wim2024_jourTrois14.jpg', 'JourTrois14', 'Jour 3 - Photo 14'),
      img('/images/gallery/wim2024_jourTrois15.jpg', 'JourTrois15', 'Jour 3 - Photo 15'),
      img('/images/gallery/wim2024_jourTrois16.jpg', 'JourTrois16', 'Jour 3 - Photo 16'),
      img('/images/gallery/wim2024_jourTrois17.jpg', 'JourTrois17', 'Jour 3 - Photo 17'),
      img('/images/gallery/wim2024_jourTrois18.jpg', 'JourTrois18', 'Jour 3 - Photo 18'),
    ],
  },

  // ÉVÉNEMENTS WIM 2024
  {
    id: 'wim2024-evenements',
    title: 'Événements WIM 2024',
    description: 'Moments forts et événements spéciaux de la Conférence WIM 2024.',
    date: '2024',
    category: 'conference',
    location: 'Lubumbashi, RDC',
    coverImage: img('/images/gallery/event1.jpg', 'Événement 1', 'Événements WIM 2024'),
    images: [
      img('/images/gallery/event1.jpg', 'Événement 1', 'Événement 1'),
      img('/images/gallery/event2.jpg', 'Événement 2', 'Événement 2'),
      img('/images/gallery/event3.jpg', 'Événement 3', 'Événement 3'),
      img('/images/gallery/event4.jpg', 'Événement 4', 'Événement 4'),
      img('/images/gallery/wim2024_event1.jpg', 'Event1', 'Événement 1'),
      img('/images/gallery/wim2024_event2.jpg', 'Event2', 'Événement 2'),
      img('/images/gallery/wim2024_event3.jpg', 'Event3', 'Événement 3'),
      img('/images/gallery/wim2024_event4.jpg', 'Event4', 'Événement 4'),
      img('/images/gallery/wim2024_IMG_5485.jpg', 'IMG 5485', 'Événement WIM 2024'),
    ],
  },

  // ATELIERS DE FORMATION
  {
    id: 'ateliers-formation',
    title: 'Ateliers de Formation',
    description: 'Sessions de formation technique et pratique pour les femmes du secteur minier.',
    date: '2020-2024',
    category: 'atelier',
    location: 'Haut-Katanga, Lualaba, RDC',
    coverImage: img('/images/gallery/formation-technique.webp', 'Formation technique', 'Ateliers de Formation', '/images/gallery/formation-technique.jpg'),
    images: [
      img('/images/gallery/formation-technique.webp', 'Formation technique', 'Formation technique', '/images/gallery/formation-technique.jpg'),
      img('/images/gallery/atelier1.jpeg', 'Atelier 1', 'Atelier 1'),
      img('/images/gallery/atelier2.jpeg', 'Atelier 2', 'Atelier 2'),
      img('/images/gallery/atelier3.jpeg', 'Atelier 3', 'Atelier 3'),
      img('/images/gallery/atelier4.jpeg', 'Atelier 4', 'Atelier 4'),
      img('/images/gallery/atelier5.jpeg', 'Atelier 5', 'Atelier 5'),
      img('/images/gallery/atelier6.jpeg', 'Atelier 6', 'Atelier 6'),
      img('/images/gallery/atelier7.jpeg', 'Atelier 7', 'Atelier 7'),
      img('/images/gallery/atelier8.jpeg', 'Atelier 8', 'Atelier 8'),
      img('/images/gallery/atelier9.jpeg', 'Atelier 9', 'Atelier 9'),
      img('/images/gallery/atelier10.jpeg', 'Atelier 10', 'Atelier 10'),
      img('/images/gallery/atelier11.jpeg', 'Atelier 11', 'Atelier 11'),
    ],
  },

  // FESTIVAL THAMANI
  {
    id: 'festival-thamani',
    title: 'Festival Thamani',
    description: 'Festival célébrant les réalisations et l\'autonomisation des femmes dans le secteur minier.',
    date: '2020-2024',
    category: 'festival',
    location: 'RDC',
    coverImage: img('/images/gallery/festival1.jpeg', 'Festival 1', 'Festival Thamani'),
    images: [
      img('/images/gallery/festival1.jpeg', 'Festival 1', 'Festival 1'),
      img('/images/gallery/festival2.jpeg', 'Festival 2', 'Festival 2'),
      img('/images/gallery/festival3.jpeg', 'Festival 3', 'Festival 3'),
      img('/images/gallery/festival4.jpeg', 'Festival 4', 'Festival 4'),
      img('/images/gallery/festival5.jpeg', 'Festival 5', 'Festival 5'),
      img('/images/gallery/festival6.jpeg', 'Festival 6', 'Festival 6'),
      img('/images/gallery/festival7.jpeg', 'Festival 7', 'Festival 7'),
      img('/images/gallery/festival8.jpeg', 'Festival 8', 'Festival 8'),
      img('/images/gallery/festival9.jpeg', 'Festival 9', 'Festival 9'),
      img('/images/gallery/festival10.jpeg', 'Festival 10', 'Festival 10'),
      img('/images/gallery/festival11.jpeg', 'Festival 11', 'Festival 11'),
      img('/images/gallery/festival12.jpeg', 'Festival 12', 'Festival 12'),
      img('/images/gallery/festival13.jpeg', 'Festival 13', 'Festival 13'),
      img('/images/gallery/festival14.jpeg', 'Festival 14', 'Festival 14'),
      img('/images/gallery/festival15.jpeg', 'Festival 15', 'Festival 15'),
      img('/images/gallery/festival16.jpeg', 'Festival 16', 'Festival 16'),
      img('/images/gallery/festival17.jpeg', 'Festival 17', 'Festival 17'),
    ],
  },

  // 8 MARS 2024
  {
    id: '8-mars-2024',
    title: '8 Mars 2024 – Journée Internationale des Femmes',
    description: 'Manifestation pacifique et célébration de la Journée Internationale des Femmes. Les femmes de la RDC manifestent pour la paix.',
    date: '8 mars 2024',
    category: 'march8',
    location: 'RDC',
    coverImage: img('/images/gallery/march8-1.jpeg', '8 Mars 2024 - Photo 1', '8 Mars 2024'),
    images: [
      img('/images/gallery/march8-1.jpeg', '8 Mars 2024 - Photo 1', '8 Mars 2024 - Photo 1'),
      img('/images/gallery/march8-2.jpeg', '8 Mars 2024 - Photo 2', '8 Mars 2024 - Photo 2'),
      img('/images/gallery/march8-3.jpeg', '8 Mars 2024 - Photo 3', '8 Mars 2024 - Photo 3'),
      img('/images/gallery/march8-4.jpeg', '8 Mars 2024 - Photo 4', '8 Mars 2024 - Photo 4'),
      img('/images/gallery/march8-5.jpeg', '8 Mars 2024 - Photo 5', '8 Mars 2024 - Photo 5'),
    ],
  },

  // ÉVÉNEMENTS DIVERS 2025
  {
    id: 'evenements-2025',
    title: 'Événements Divers 2025',
    description: 'Photos récentes des activités et événements de WIM DRC en 2025.',
    date: '2025',
    category: 'recent',
    location: 'RDC',
    coverImage: img('/images/gallery/PHOTO-2025-06-05-15-28-04.jpg', 'Photo 2025', 'Événements 2025'),
    images: [
      img('/images/gallery/PHOTO-2025-05-12-17-47-40.jpg', 'Photo 2025', 'Photo 2025 - Mai 2025'),
      img('/images/gallery/PHOTO-2025-05-12-17-47-40_2.jpg', 'Photo 2025', 'Photo 2025 - Mai 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-04.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-04_2.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-05.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-06.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-07.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-07_2.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-08.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-09.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-09_2.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-11.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-12.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
      img('/images/gallery/PHOTO-2025-06-05-15-28-12_2.jpg', 'Photo 2025', 'Photo 2025 - Juin 2025'),
    ],
  },

  // WHATSAPP / COULISSES
  {
    id: 'whatsapp-coulisses',
    title: 'WhatsApp / Coulisses',
    description: 'Moments capturés et partagés via WhatsApp. Photos de coulisses et moments informels.',
    date: '2025',
    category: 'whatsapp',
    location: 'RDC',
    coverImage: img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.37.jpeg', 'WhatsApp', 'WhatsApp / Coulisses'),
    images: [
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.37.jpeg', 'WhatsApp', 'WhatsApp Image 1'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.38.jpeg', 'WhatsApp', 'WhatsApp Image 2'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.39.jpeg', 'WhatsApp', 'WhatsApp Image 3'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.40.jpeg', 'WhatsApp', 'WhatsApp Image 4'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.40_1.jpeg', 'WhatsApp', 'WhatsApp Image 5'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.41.jpeg', 'WhatsApp', 'WhatsApp Image 6'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.42.jpeg', 'WhatsApp', 'WhatsApp Image 7'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.42_1.jpeg', 'WhatsApp', 'WhatsApp Image 8'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.58.jpeg', 'WhatsApp', 'WhatsApp Image 9'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.59.jpeg', 'WhatsApp', 'WhatsApp Image 10'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.05.59_1.jpeg', 'WhatsApp', 'WhatsApp Image 11'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.06.00.jpeg', 'WhatsApp', 'WhatsApp Image 12'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.06.00_1.jpeg', 'WhatsApp', 'WhatsApp Image 13'),
      img('/images/gallery/WhatsApp_Image_2025-06-27_at_10.06.00_2.jpeg', 'WhatsApp', 'WhatsApp Image 14'),
    ],
  },

  // MOMENTS SPÉCIAUX
  {
    id: 'moments-speciaux',
    title: 'Moments Spéciaux',
    description: 'Cérémonies, présentations et photos de groupe des événements WIM DRC.',
    date: '2020-2025',
    category: 'evenement',
    location: 'RDC',
    coverImage: img('/images/gallery/ceremonie.webp', 'Cérémonie', 'Moments Spéciaux', '/images/gallery/ceremonie.jpg'),
    images: [
      img('/images/gallery/ceremonie.webp', 'Cérémonie', 'Cérémonie', '/images/gallery/ceremonie.jpg'),
      img('/images/gallery/presentations.webp', 'Présentations', 'Présentations', '/images/gallery/presentations.jpg'),
      img('/images/gallery/travaux-groupe.webp', 'Travaux de groupe', 'Travaux de groupe', '/images/gallery/travaux-groupe.jpg'),
      img('/images/gallery/photos-groupe.webp', 'Photos de groupe', 'Photos de groupe', '/images/gallery/photos-groupe.jpg'),
      img('/images/gallery/generaux.webp', 'Généraux', 'Généraux', '/images/gallery/generaux.jpg'),
      img('/images/gallery/Picture1.png', 'Picture1', 'Photo 1'),
      img('/images/gallery/Picture2.png', 'Picture2', 'Photo 2'),
      img('/images/gallery/Picture4.png', 'Picture4', 'Photo 4'),
      img('/images/gallery/Picture5.png', 'Picture5', 'Photo 5'),
      img('/images/gallery/IMG_5485.jpg', 'IMG 5485', 'Photo spéciale'),
    ],
  },
]

// Category labels for filters
export const categoryLabels: Record<Gallery['category'], string> = {
  conference: 'Conférences',
  atelier: 'Ateliers',
  festival: 'Festivals',
  march8: '8 Mars',
  evenement: 'Événements',
  recent: '2025',
  whatsapp: 'Coulisses',
}

// Get galleries by category
export const getGalleriesByCategory = (category: Gallery['category'] | 'all') => {
  if (category === 'all') return galleries
  return galleries.filter(g => g.category === category)
}

// Get gallery by ID
export const getGalleryById = (id: string) => {
  return galleries.find(g => g.id === id)
}

