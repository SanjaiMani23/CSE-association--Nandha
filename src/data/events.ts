export interface EventItem {
  id: string;
  title: string;
  category: 'upcoming' | 'ongoing' | 'completed';
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  brochure: string; // URL or path to brochure (PDF or image)
  registrationLink?: string;
  driveLink?: string;
}

export const eventsData: EventItem[] = [
  {
    id: 'synectics-26',
    title: "SyNECtics'26 - National Technical Symposium",
    category: 'upcoming',
    date: 'March 18-19, 2026',
    time: '09:00 AM - 04:30 PM',
    venue: 'Convention Center & CSE Labs',
    description: 'Premier national level technical symposium featuring 24-hr hackathon, algorithmic coding battle, tech paper presentations, AI project expo, and workshops with industry pioneers.',
    image: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    brochure: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    registrationLink: 'https://forms.gle/qjgFheJSK5JZN6aM6',
    driveLink: 'https://drive.google.com/drive/folders/1pQ2ZnrXSy7x-dIOayaeSVrpfRF0aosop?usp=drive_link',
  },
  {
    id: 'genai-bootcamp-2026',
    title: 'Hands-on Generative AI & LLM Deployment Workshop',
    category: 'upcoming',
    date: 'April 04, 2026',
    time: '10:00 AM - 03:30 PM',
    venue: 'Center for Intelligent Computing Lab',
    description: 'Intensive hands-on workshop guiding students through prompt engineering, open-source LLM fine-tuning, and production deployment with modern cloud frameworks.',
    image: '/images/verticals/genai.webp',
    brochure: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    registrationLink: 'https://forms.gle/qjgFheJSK5JZN6aM6',
  },
  {
    id: 'code-relay-2026',
    title: 'CodeSprint 2026: Speed Coding Challenge',
    category: 'ongoing',
    date: 'September 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Computing Lab 3',
    description: 'Competitive coding contest testing speed, algorithmic intuition, and debugging skills across multiple rounds with instantaneous leaderboard updates.',
    image: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    brochure: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    registrationLink: 'https://forms.gle/qjgFheJSK5JZN6aM6',
  },
  {
    id: 'teachers-day-2025',
    title: 'Teachers Day Celebration 2025',
    category: 'completed',
    date: 'September 05, 2025',
    time: '01:30 PM - 04:30 PM',
    venue: 'Department Seminar Hall',
    description: 'Grand celebration honoring CSE faculty members with cultural presentations, student acknowledgments, and commemorative activities to show heartfelt gratitude.',
    image: '/lovable-uploads/fornt.jpg',
    brochure: '/lovable-uploads/fornt.jpg',
    driveLink: 'https://drive.google.com/drive/folders/1Z7-cK7oONpIpfL1h6oOB9f2MLx3-ASBE?usp=drive_link',
  },
  {
    id: 'synectics-25',
    title: "SYNECTICS'25 - Annual Symposium",
    category: 'completed',
    date: 'February 27-28, 2025',
    time: '09:30 AM - 04:00 PM',
    venue: 'Auditorium & Department Seminar Hall',
    description: 'Flagship national symposium with coding challenges, paper presentations, and specialized workshops featuring industry tech leads.',
    image: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    brochure: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    driveLink: 'https://drive.google.com/drive/folders/1pQ2ZnrXSy7x-dIOayaeSVrpfRF0aosop?usp=drive_link',
  },
  {
    id: 'investiture-2025',
    title: 'Investiture Ceremony 2025–26',
    category: 'completed',
    date: 'March 15, 2025',
    time: '10:00 AM - 01:00 PM',
    venue: 'Main Auditorium',
    description: 'Official induction of new student leaders, badge presentation, and oath-taking ceremony for the CSE Association office bearers.',
    image: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
    brochure: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
    driveLink: 'https://drive.google.com/drive/folders/1IyG7ZfHogAMbvOgIz33kAMqLCA5blmt7?usp=drive_link',
  },
  {
    id: 'aura-24',
    title: "AURA'24 Inter-Department Tech Fest",
    category: 'completed',
    date: 'October 19, 2024',
    time: '09:00 AM - 04:30 PM',
    venue: 'Campus Grounds & CSE Block',
    description: 'Premier inter-department technical festival with multifaceted challenges, creative prototypes, and awards for outstanding student innovators.',
    image: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    brochure: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    driveLink: 'https://drive.google.com/drive/folders/1lPYTw-e2U0lG_yHxKz2luROgSzdlKcIf?usp=drive_link',
  },
];
