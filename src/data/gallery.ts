export type GalleryCategory =
  | 'Events'
  | 'Activities'
  | 'Workshops'
  | 'Department'
  | 'Other Association activities';

export type GalleryYear = '2026–27' | '2025–26' | 'Previous Years';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  year: GalleryYear;
  date?: string;
  image: string;
  caption: string;
  isProductDay?: boolean;
  isSynthetics?: boolean;
}

export const galleryData: GalleryItem[] = [
  // Product Day 2026–27 Highlights
  {
    id: 'gal-prod-01',
    title: "VENBA's 10-Star Product Launch Ceremony",
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/product-day/product-day-1.jpg',
    caption: 'Official launch and presentation of VENBA’s software product to the Principal, Chief Guest, HOD, and CSE faculty during Product Day 2026–27.',
    isProductDay: true,
  },
  {
    id: 'gal-prod-02',
    title: 'Student Innovation Memento & Dignitary Release',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/product-day/product-day-2.jpg',
    caption: 'Dignitaries and department leaders honoring student innovators and celebrating product inauguration.',
    isProductDay: true,
  },
  {
    id: 'gal-prod-03',
    title: 'Product Certification & Project Handover Ceremony',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/product-day/product-day-3.jpg',
    caption: 'Presentation of official product documentation and milestone certificates by the Principal and HOD.',
    isProductDay: true,
  },
  {
    id: 'gal-prod-04',
    title: 'Faculty Mentorship & Project Team Felicitation',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/product-day/product-day-4.jpg',
    caption: 'Project developers and faculty advisors assembled on dais celebrating successful product release.',
    isProductDay: true,
  },
  {
    id: 'gal-prod-05',
    title: 'MOU & Technical Collaboration Handover',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/product-day/product-day-5.jpg',
    caption: 'Formal exchange of project certificates and appreciation documents with faculty advisors.',
    isProductDay: true,
  },

  // Synthetics'26 (2026–27) Highlights
  {
    id: 'gal-syn-01',
    title: 'Technical Project Presentation & Prototype Review',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/synectics-26/synectics-1.png',
    caption: 'Student teams demonstrating project prototypes and algorithmic pipelines before faculty juries during Synthetics\'26.',
    isSynthetics: true,
  },
  {
    id: 'gal-syn-02',
    title: 'Symposium Student Organizing Committee',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/synectics-26/synectics-2.png',
    caption: 'The student coordinators, leads, and organizing committee behind the seamless execution of Synthetics\'26.',
    isSynthetics: true,
  },
  {
    id: 'gal-syn-03',
    title: 'Coding Hackathon & Competitive Programming Track',
    category: 'Events',
    year: '2026–27',
    date: 'Academic Year 2026–27',
    image: '/images/synectics-26/synectics-3.jpg',
    caption: 'Intensive code-a-thon and competitive programming tracks conducted at full capacity in the department computing facility.',
    isSynthetics: true,
  },

  // Academic Year 2025–26 & Other Highlights
  {
    id: 'gal-01',
    title: 'Department of Computer Science & Engineering Campus Front',
    category: 'Department',
    year: '2025–26',
    date: '2025–26',
    image: '/lovable-uploads/fornt.jpg',
    caption: 'The state-of-the-art academic block and advanced laboratories of Department of CSE.',
  },
  {
    id: 'gal-02',
    title: "SyNECtics'25 Inaugural Ceremony",
    category: 'Events',
    year: '2025–26',
    date: 'February 2025',
    image: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    caption: 'Grand inauguration of national technical symposium featuring keynote talks and tech dignitaries.',
  },
  {
    id: 'gal-03',
    title: "Aura'24 Tech Exposition",
    category: 'Events',
    year: 'Previous Years',
    date: 'October 2024',
    image: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    caption: 'Inter-department technical challenge and student project exhibition.',
  },
  {
    id: 'gal-04',
    title: 'Investiture & Leadership Oath Ceremony',
    category: 'Activities',
    year: '2025–26',
    date: 'March 2025',
    image: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
    caption: 'Badges and honors handed over to the incoming student coordinators and office bearers.',
  },
  {
    id: 'gal-05',
    title: 'Department Computing Infrastructure & Cloud Lab',
    category: 'Department',
    year: '2025–26',
    date: '2025',
    image: '/lovable-uploads/front3.jpg',
    caption: 'High-speed computing laboratory equipped for AI research and intensive programming tracks.',
  },
  {
    id: 'gal-06',
    title: 'Robotics & Hardware Prototyping Workshop',
    category: 'Workshops',
    year: '2025–26',
    date: '2025',
    image: '/lovable-uploads/fornt4.jpg',
    caption: 'Students assembling autonomous microcontroller platforms and embedded vision units.',
  },
  {
    id: 'gal-07',
    title: 'Generative AI & Model Training Hands-on',
    category: 'Workshops',
    year: '2025–26',
    date: '2025',
    image: '/images/verticals/genai.webp',
    caption: 'Practical lab session on fine-tuning open-source LLMs and developing neural architectures.',
  },
  {
    id: 'gal-08',
    title: 'Department Innovation & Research Wing',
    category: 'Department',
    year: '2025–26',
    date: '2025',
    image: '/lovable-uploads/fornt2.jpg',
    caption: 'Dedicated research wing housing the Crevation Lab and Center for Intelligent Computing.',
  },
  {
    id: 'gal-09',
    title: 'Pongal Cultural & Traditional Harvest Celebrations',
    category: 'Other Association activities',
    year: '2025–26',
    date: 'January 2025',
    image: '/lovable-uploads/fornt5.jpg',
    caption: 'Traditional campus festival celebrated enthusiastically by students and faculty members.',
  },
];
