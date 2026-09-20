export type AchievementCategory =
  | 'Hackathons'
  | 'Competitions'
  | 'Certifications'
  | 'Publications'
  | 'Other Achievements';

export interface AchievementItem {
  id: string;
  studentName: string;
  rollNoOrBatch?: string;
  achievementTitle: string;
  category: AchievementCategory;
  eventOrOrganization: string;
  dateOrYear: string;
  description: string;
  imageOrCertificate?: string;
  awardOrPosition?: string;
}

/**
 * Achievements Data Store
 * Easily add or modify records here. Clean schema ensures UI renders updates automatically.
 */
export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-01',
    studentName: 'CSE Innovation Team (Final Year)',
    rollNoOrBatch: 'Batch 2022–2026',
    achievementTitle: 'Smart India Hackathon Finalist & Top Innovator',
    category: 'Hackathons',
    eventOrOrganization: 'Ministry of Education & AICTE',
    dateOrYear: '2025',
    description: 'Developed an automated AI-driven smart traffic and emergency transit clearance system, securing position in the national Grand Finale.',
    awardOrPosition: 'National Finalist',
    imageOrCertificate: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
  },
  {
    id: 'ach-02',
    studentName: 'Competitive Programming Squad',
    rollNoOrBatch: 'Third & Final Year CSE',
    achievementTitle: 'State-Level Coding Championship - 1st Prize',
    category: 'Competitions',
    eventOrOrganization: 'Regional Inter-Collegiate Tech Conclave',
    dateOrYear: '2025',
    description: 'Outperformed 80+ engineering teams across 4 algorithmic and speed debugging rounds to clinch the First Prize trophy.',
    awardOrPosition: '1st Prize & Trophy',
    imageOrCertificate: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
  },
  {
    id: 'ach-03',
    studentName: 'Student Research Group',
    rollNoOrBatch: 'Department of CSE',
    achievementTitle: 'IEEE International Conference Research Paper',
    category: 'Publications',
    eventOrOrganization: 'IEEE Advancements in Intelligent Computing',
    dateOrYear: '2025',
    description: 'Published peer-reviewed research on "Lightweight Deep Neural Network for Real-Time Weed Detection in Precision Agriculture".',
    awardOrPosition: 'Scopus Indexed Publication',
    imageOrCertificate: '/lovable-uploads/fornt.jpg',
  },
  {
    id: 'ach-04',
    studentName: 'Cloud & DevOps Learners Circle',
    rollNoOrBatch: 'Batch 2023–2027',
    achievementTitle: 'AWS Certified Solutions Architect & Cloud Practitioner',
    category: 'Certifications',
    eventOrOrganization: 'Amazon Web Services (AWS)',
    dateOrYear: '2025–26',
    description: 'Over 25 department students completed global industry certifications in cloud infrastructure, containerization, and serverless deployment.',
    awardOrPosition: 'Global Professional Certification',
    imageOrCertificate: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
  },
  {
    id: 'ach-05',
    studentName: 'Crevation Lab Project Incubatees',
    rollNoOrBatch: 'II & III Year CSE',
    achievementTitle: 'Tamil Nadu Student Startup Grant Recognition',
    category: 'Other Achievements',
    eventOrOrganization: 'EDII-TN & State Innovation Council',
    dateOrYear: '2025',
    description: 'Secured student seed funding for developing an IoT-enabled smart assistive walking navigation kit for visually impaired individuals.',
    awardOrPosition: 'Startup Seed Grant',
    imageOrCertificate: '/lovable-uploads/front3.jpg',
  },
];
