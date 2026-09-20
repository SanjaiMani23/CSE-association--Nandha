export type AchievementCategory =
  | 'Hackathons'
  | 'Competitions'
  | 'Certifications'
  | 'Publications'
  | 'Other Achievements';

export interface FullEventDetails {
  overview?: string;
  organizer?: string;
  venue?: string;
  timing?: string;
  grantOrPrize?: string;
  investigatorsOrTeam?: string[];
  keyHighlights?: string[];
  departmentOrCenter?: string;
}

export interface AchievementItem {
  id: string;
  image: string;
  imageOrCertificate?: string; // Backward compatibility alias
  achievementTitle: string;
  category: AchievementCategory;
  eventName: string;
  eventOrOrganization?: string; // Backward compatibility alias
  dateOrYear: string;
  awardOrPosition: string;
  shortDescription: string;
  description?: string; // Backward compatibility alias
  studentName?: string;
  rollNoOrBatch?: string;
  fullDetails?: FullEventDetails;
}

/**
 * Achievements Data Store
 * Easily add or modify records here. Clean schema ensures UI renders updates automatically.
 * To add a new achievement:
 * 1. Place the image file in `public/images/achievements/`
 * 2. Add a new object entry below with the required fields:
 *    - id, image, achievementTitle, category, eventName, dateOrYear, awardOrPosition, shortDescription
 * 3. Fill in optional `fullDetails` for the preview popup modal.
 */
export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-ignitrron26-first-prize',
    image: '/images/achievements/ignitrron26-first-prize.png',
    imageOrCertificate: '/images/achievements/ignitrron26-first-prize.png',
    achievementTitle: "IGNITRRON'26 Technical Symposium — First Prize",
    category: 'Competitions',
    eventName: "IGNITRRON'26 — Technical Symposium",
    eventOrOrganization: 'KPR Institute of Engineering and Technology',
    dateOrYear: '18 Sep 2026',
    awardOrPosition: '1st Prize — Cash Award ₹3,000',
    shortDescription: "Kavin C J (II-CSE) proudly secured the First Prize with a Cash Award of ₹3,000 at the IGNITRRON'26 Technical Symposium hosted by KPR Institute of Engineering and Technology on 18 September 2026.",
    description: "Kavin C J (II-CSE) proudly secured the First Prize with a Cash Award of ₹3,000 at the IGNITRRON'26 Technical Symposium hosted by KPR Institute of Engineering and Technology on 18 September 2026.",
    studentName: 'Kavin C J',
    rollNoOrBatch: 'II Year — CSE',
    fullDetails: {
      overview: "Kavin C J, a second-year CSE student, represented Nandha Engineering College (Autonomous) at IGNITRRON'26 and outperformed competitors from multiple colleges to claim the prestigious First Prize. The event celebrated technical innovation under the theme 'Innovate • Build • Lead'.",
      organizer: 'KPR Institute of Engineering and Technology, Coimbatore',
      venue: 'KPR Institute of Engineering and Technology, Tamil Nadu',
      grantOrPrize: '1st Prize — Cash Award of ₹3,000',
      investigatorsOrTeam: [
        'Kavin C J — II Year, CSE, Nandha Engineering College'
      ],
      keyHighlights: [
        "Secured First Prize at IGNITRRON'26 Technical Symposium",
        'Cash Award of ₹3,000 presented by the organizing college',
        "Theme: 'Innovate • Build • Lead' — inter-college technical competition",
        'Proudly represented the Department of CSE, Nandha Engineering College'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-abimanyuai-demo-2026',
    image: '/images/achievements/abimanyuai-live-demo.jpg',
    imageOrCertificate: '/images/achievements/abimanyuai-live-demo.jpg',
    achievementTitle: 'Live Project Demonstration — AbimanyuAI Digital Mental Health System',
    category: 'Other Achievements',
    eventName: 'Live Project Demonstration on AbimanyuAI',
    eventOrOrganization: 'Department of CSE, Nandha Engineering College',
    dateOrYear: '18 Jul 2026',
    awardOrPosition: 'Live Project Showcase (One Day Program)',
    shortDescription: 'S P Kamaleswaran and R. Gokul (3rd Year CSE) presented a live demonstration of AbimanyuAI — an AI-powered digital mental health support platform offering emotional support, stress detection, and holistic well-being guidance.',
    description: 'S P Kamaleswaran and R. Gokul (3rd Year CSE) presented a live demonstration of AbimanyuAI — an AI-powered digital mental health support platform offering emotional support, stress detection, and holistic well-being guidance.',
    studentName: 'S P Kamaleswaran & R. Gokul',
    rollNoOrBatch: '3rd Year — CSE',
    fullDetails: {
      overview: 'AbimanyuAI is an innovative AI-powered digital mental health support system built by 3rd-year CSE students. The live demonstration showcased its emotional support features, real-time stress detection capabilities, and holistic well-being guidance modules to an audience of faculty, students, and guests.',
      organizer: 'Department of Computer Science and Engineering, Nandha Engineering College (Autonomous)',
      venue: 'Indian Medicine Auditorium, NEC Campus',
      timing: '10:30 AM onwards — One Day Program',
      grantOrPrize: 'Live Project Showcase Recognition',
      investigatorsOrTeam: [
        'S P Kamaleswaran — 3rd Year, CSE (Presenter)',
        'R. Gokul — 3rd Year, CSE (Presenter)',
        'Event Coordinator: Mr. D Kavin Kumar, AP/CSE',
        'Event Coordinator: Ms. M Sowmiya, AP/CSE',
        'Convenor: Dr. T. Rajasekaran, HoD / CSE',
        'Principal: Dr. U. S. Ragupathy'
      ],
      keyHighlights: [
        'AI-powered emotional support and real-time stress detection platform',
        'Holistic well-being guidance using intelligent conversation AI',
        'Live demonstration in front of faculty and student audience',
        'Supported by Department R&D and Compassion • Intelligence • Well-being ethos'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-saveetha-hackathon-2026',
    image: '/images/achievements/saveetha-tech-sangamam-hackathon-2nd-prize.jpg',
    imageOrCertificate: '/images/achievements/saveetha-tech-sangamam-hackathon-2nd-prize.jpg',
    achievementTitle: 'Tech Sangamam Hackathon 2026 - 2nd Prize Winner',
    category: 'Hackathons',
    eventName: 'Tech Sangamam Hackathon 2026',
    eventOrOrganization: 'Saveetha Engineering College / SIMATS Engineering with IEEE EMBS & IEEE CIS',
    dateOrYear: '2026',
    awardOrPosition: '2nd Prize Winner (Cash Prize: ₹15,000)',
    shortDescription: 'Clinched the coveted 2nd Prize and a cash award of ₹15,000 at the Tech Sangamam Hackathon 2026 hosted by Saveetha Engineering College in technical collaboration with IEEE EMBS and IEEE CIS.',
    description: 'Clinched the coveted 2nd Prize and a cash award of ₹15,000 at the Tech Sangamam Hackathon 2026 hosted by Saveetha Engineering College in technical collaboration with IEEE EMBS and IEEE CIS.',
    studentName: 'CSE Hackathon Innovator',
    rollNoOrBatch: 'Department of CSE',
    fullDetails: {
      overview: 'Demonstrated exceptional technical acumen, algorithmic speed, and innovative problem-solving under strict 24-hour hackathon constraints. Outperformed premier engineering teams across the state to win 2nd Prize.',
      organizer: 'Saveetha Engineering College (Autonomous) / SIMATS Engineering in collaboration with IEEE EMBS (Engineering in Medicine and Biology Society) & IEEE Computational Intelligence Society',
      venue: 'Saveetha Engineering College Campus, Chennai',
      grantOrPrize: '₹15,000 Cash Prize + Certificate of Merit & Trophy',
      investigatorsOrTeam: [
        'Student Winner - Department of Computer Science & Engineering',
        'Mentored by CSE Association & Innovation Cell'
      ],
      keyHighlights: [
        'Organized in collaboration with global IEEE Societies (EMBS & CIS)',
        'Awarded Cash Prize of ₹15,000 Fifteen Thousand Rupees Only',
        'Built innovative prototype adhering to the themes of Innovate, Collaboration, and Elevate'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-aicte-rps-virtual-lab-2026',
    image: '/images/achievements/aicte-rps-virtual-science-lab.png',
    imageOrCertificate: '/images/achievements/aicte-rps-virtual-science-lab.png',
    achievementTitle: 'AICTE-RPS Project Grant 2026: Virtual Science Lab for Mobility Impaired Students',
    category: 'Publications',
    eventName: 'AICTE Research Promotion Scheme (RPS) Project Grant 2026',
    eventOrOrganization: 'All India Council for Technical Education (AICTE) - R&D Cell',
    dateOrYear: '2026',
    awardOrPosition: '₹34.78 Lakhs Research Grant Awarded',
    shortDescription: 'Conferred a major AICTE-RPS research funding grant of ₹34.78 Lakhs for the cutting-edge project: "Virtual Science Lab for Mobility Impaired Students Using Virtual Reality and Artificial Intelligence".',
    description: 'Conferred a major AICTE-RPS research funding grant of ₹34.78 Lakhs for the cutting-edge project: "Virtual Science Lab for Mobility Impaired Students Using Virtual Reality and Artificial Intelligence".',
    studentName: 'Dr. T. Rajasekaran & Dr. S. Karuppusamy',
    rollNoOrBatch: 'Faculty R&D Initiative - CSE',
    fullDetails: {
      overview: 'A milestone research grant awarded by AICTE under the Research Promotion Scheme (RPS) to pioneer inclusive education technology combining immersive Virtual Reality simulations with adaptive Artificial Intelligence for differently-abled learners.',
      organizer: 'All India Council for Technical Education (AICTE), New Delhi & Research and Development (R&D) Cell, Nandha Engineering College',
      venue: 'Research and Development Cell / Department of CSE',
      grantOrPrize: '₹ 34,78,000 (34.78 Lakhs AICTE RPS Grant)',
      investigatorsOrTeam: [
        'Principal Investigator: Dr. T. Rajasekaran, Professor & Head, Department of CSE',
        'Co-Principal Investigator: Dr. S. Karuppusamy, Associate Professor / CSE'
      ],
      keyHighlights: [
        'Project Title: Virtual Science Lab for Mobility Impaired Students Using Virtual Reality and Artificial Intelligence',
        'Empowers mobility-impaired students with interactive, hands-free VR laboratory experiments',
        'Funded by AICTE under the prestigious Research Promotion Scheme (RPS) 2026',
        'Paves the way for patented accessible learning architectures and top-tier indexed publications'
      ],
      departmentOrCenter: 'Research & Development (R&D) Cell & Department of CSE'
    }
  },
  {
    id: 'ach-aicte-rps-agni-shield-2026',
    image: '/images/achievements/aicte-rps-agni-shield.png',
    imageOrCertificate: '/images/achievements/aicte-rps-agni-shield.png',
    achievementTitle: 'AICTE-RPS Project Grant 2026: AGNI SHIELD',
    category: 'Publications',
    eventName: 'AICTE Research Promotion Scheme (RPS) Project Grant 2026',
    eventOrOrganization: 'All India Council for Technical Education (AICTE) - R&D Cell',
    dateOrYear: '2026',
    awardOrPosition: '₹25 Lakh Research Grant Awarded',
    shortDescription: 'Awarded prestigious AICTE-RPS project grant of ₹25 Lakh for the high-impact initiative "AGNI SHIELD – AI Enabled Wildfire and Forest Fire Early Detection using Heat Drone Swarms".',
    description: 'Awarded prestigious AICTE-RPS project grant of ₹25 Lakh for the high-impact initiative "AGNI SHIELD – AI Enabled Wildfire and Forest Fire Early Detection using Heat Drone Swarms".',
    studentName: 'Dr. C. N. Marimuthu & Ms. B. Deepa',
    rollNoOrBatch: 'Interdisciplinary R&D (ECE & CSE)',
    fullDetails: {
      overview: 'High-impact AI and autonomous drone swarm research project funded by AICTE RPS to detect wildfires and forest fires in early stages using advanced thermal heat imaging sensors and computer vision edge AI algorithms.',
      organizer: 'All India Council for Technical Education (AICTE), New Delhi & Research and Development (R&D) Cell',
      venue: 'Research and Development (R&D) Cell, Nandha Engineering College',
      grantOrPrize: '₹ 25,00,000 (25 Lakh AICTE RPS Grant)',
      investigatorsOrTeam: [
        'Principal Investigator: Dr. C. N. Marimuthu, Professor (ECE) and Dean (R&D)',
        'Co-Principal Investigator: Ms. B. Deepa, Assistant Professor / CSE'
      ],
      keyHighlights: [
        'Project Title: AGNI SHIELD – AI Enabled Wildfire and Forest Fire Early Detection using Heat Drone Swarms',
        'Autonomous drone swarm networking with thermal and optical edge AI vision models',
        'Promotes environmental protection and wildlife preservation through early alert mechanisms',
        'Direct interdisciplinary collaboration bridging ECE and Computer Science & Engineering'
      ],
      departmentOrCenter: 'Research and Development (R&D) Cell & Department of CSE'
    }
  },
  {
    id: 'ach-mou-erode-cancer-centre-2026',
    image: '/images/achievements/mou-erode-cancer-centre.jpg',
    imageOrCertificate: '/images/achievements/mou-erode-cancer-centre.jpg',
    achievementTitle: 'MOU Signing Ceremony with Erode Cancer Centre',
    category: 'Other Achievements',
    eventName: 'Center for Intelligent Computing - MOU Signing Ceremony',
    eventOrOrganization: 'Nandha Engineering College (Autonomous) & Erode Cancer Centre',
    dateOrYear: '02 May 2026',
    awardOrPosition: 'Strategic Healthcare MoU & Research Collaboration',
    shortDescription: 'Official Memorandum of Understanding (MOU) signed between the Center for Intelligent Computing (Department of CSE) and Erode Cancer Centre for AI-driven clinical healthcare research and patient-centric computing.',
    description: 'Official Memorandum of Understanding (MOU) signed between the Center for Intelligent Computing (Department of CSE) and Erode Cancer Centre for AI-driven clinical healthcare research and patient-centric computing.',
    studentName: 'Center for Intelligent Computing (CIC)',
    rollNoOrBatch: 'Department of CSE & NEC Autonomous',
    fullDetails: {
      overview: 'A historic collaboration uniting advanced computing and clinical oncology. The Department of CSE and Center for Intelligent Computing entered into an MOU with Erode Cancer Centre, opening avenues for real-world healthcare datasets, medical image analysis, and student internships.',
      organizer: 'Department of Computer Science and Engineering & Center for Intelligent Computing, Nandha Engineering College',
      venue: 'Placement Auditorium, Nandha Engineering College (Autonomous), Erode',
      timing: '9:30 AM',
      grantOrPrize: 'Institutional Healthcare Partnership & Clinical Research Access',
      investigatorsOrTeam: [
        'Center for Intelligent Computing (CIC), Department of CSE',
        'Leadership & Clinical Oncology Specialists, Erode Cancer Centre, Tamil Nadu'
      ],
      keyHighlights: [
        'Theme: "Together for a Better Tomorrow" – Learn, Serve, Succeed, Care',
        'Facilitates joint development of AI algorithms for early cancer screening and prognosis',
        'Offers CSE students and faculty direct access to clinical project mentorship',
        'Recognized under NEC Silver Jubilee (25 NEC) and Institution\'s Innovation Council (IIC)'
      ],
      departmentOrCenter: 'Center for Intelligent Computing (CIC) - Department of CSE'
    }
  },
  {
    id: 'ach-association-inauguration-startup-2026',
    image: '/images/achievements/association-inauguration-startup-launch.png',
    imageOrCertificate: '/images/achievements/association-inauguration-startup-launch.png',
    achievementTitle: 'CSE Association Inauguration & Tech Startup Launch',
    category: 'Other Achievements',
    eventName: 'Association Inauguration & Startup Launch Ceremony',
    eventOrOrganization: 'Department of Computer Science and Engineering, Nandha Engineering College',
    dateOrYear: '22 September 2026',
    awardOrPosition: 'Department Milestone & Student Startup Incubation',
    shortDescription: 'Grand inauguration of the CSE Association activities alongside the launch of innovative student tech startups, with chief guests Mr. K. Gavaskar (CEO, Rapid24) and Mr. Anandan Shanmugam (CEO, Xenovex Technologies).',
    description: 'Grand inauguration of the CSE Association activities alongside the launch of innovative student tech startups, with chief guests Mr. K. Gavaskar (CEO, Rapid24) and Mr. Anandan Shanmugam (CEO, Xenovex Technologies).',
    studentName: 'CSE Association Office Bearers & Student Founders',
    rollNoOrBatch: 'Department of CSE',
    fullDetails: {
      overview: 'The annual flagship induction of the Computer Science and Engineering Association, accompanied by the grand launching of student-led startup ventures and tech vertical exhibitions.',
      organizer: 'Department of Computer Science and Engineering, Nandha Engineering College (Autonomous)',
      venue: 'Nandha Auditorium, NEC Campus',
      timing: '10:30 AM',
      grantOrPrize: 'Startup Incubation Support & Industry Mentorship',
      investigatorsOrTeam: [
        'Mr. K. Gavaskar, CEO, Rapid24 (Chief Guest)',
        'Mr. Anandan Shanmugam, CEO, Xenovex Technologies (Chief Guest)',
        'Department of CSE Faculty & Student Office Bearers'
      ],
      keyHighlights: [
        'Unveiling of student-founded enterprise startups and product incubations',
        'Keynote addresses on AI, Cloud, and scalable software ecosystems by top CEOs',
        'Announcement of the departmental annual tech symposium and vertical roadmaps',
        'Organized in coordination with TechMatrix and NEC 25th Silver Jubilee Celebrations'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-sih-national-finalist',
    image: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    imageOrCertificate: '/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png',
    achievementTitle: 'Smart India Hackathon Finalist & Top Innovator',
    category: 'Hackathons',
    eventName: 'Smart India Hackathon (SIH) National Grand Finale',
    eventOrOrganization: 'Ministry of Education\'s Innovation Cell & AICTE',
    dateOrYear: '2025',
    awardOrPosition: 'National Grand Finalist',
    shortDescription: 'Developed an automated AI-driven smart traffic and emergency transit clearance system, securing a top position in the prestigious national Grand Finale.',
    description: 'Developed an automated AI-driven smart traffic and emergency transit clearance system, securing a top position in the prestigious national Grand Finale.',
    studentName: 'CSE Innovation Team',
    rollNoOrBatch: 'Batch 2022–2026',
    fullDetails: {
      overview: 'Engineered an intelligent transit prioritization platform that integrates real-time CCTV feeds and GPS beaconing to clear green corridors for emergency ambulances.',
      organizer: 'Ministry of Education (MoE), Government of India & AICTE',
      venue: 'SIH Nodal Centre, India',
      grantOrPrize: 'National Finalist Citation & Innovation Trophy',
      investigatorsOrTeam: ['Student Innovation Core, Final Year CSE'],
      keyHighlights: [
        'Selected among top 5% out of 50,000+ pan-India submissions',
        'Real-time IoT & edge computing hardware demonstration'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-state-coding-championship',
    image: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    imageOrCertificate: '/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png',
    achievementTitle: 'State-Level Coding Championship - 1st Prize',
    category: 'Competitions',
    eventName: 'Regional Inter-Collegiate Tech Conclave 2025',
    eventOrOrganization: 'Regional Inter-Collegiate Tech Conclave',
    dateOrYear: '2025',
    awardOrPosition: '1st Prize & State Championship Trophy',
    shortDescription: 'Outperformed 80+ engineering teams across 4 rigorous algorithmic and speed debugging rounds to clinch the First Prize trophy and title.',
    description: 'Outperformed 80+ engineering teams across 4 rigorous algorithmic and speed debugging rounds to clinch the First Prize trophy and title.',
    studentName: 'Competitive Programming Squad',
    rollNoOrBatch: 'Third & Final Year CSE',
    fullDetails: {
      overview: 'Competed in algorithmic programming, dynamic problem solving, reverse coding, and live debugging under extreme pressure.',
      organizer: 'State Inter-Collegiate Technical Consortium',
      venue: 'State Technical Campus',
      grantOrPrize: '1st Prize Trophy & Cash Award',
      investigatorsOrTeam: ['CSE Competitive Programming Wing'],
      keyHighlights: [
        'Cleared all 4 competition rounds with zero penalty points',
        'Fastest algorithm execution benchmark in the Grand Finale'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-ieee-research-paper',
    image: '/lovable-uploads/fornt.jpg',
    imageOrCertificate: '/lovable-uploads/fornt.jpg',
    achievementTitle: 'IEEE International Conference Research Publication',
    category: 'Publications',
    eventName: 'IEEE Advancements in Intelligent Computing (IEEE AIC)',
    eventOrOrganization: 'IEEE Advancements in Intelligent Computing',
    dateOrYear: '2025',
    awardOrPosition: 'Scopus Indexed Publication',
    shortDescription: 'Published peer-reviewed research on "Lightweight Deep Neural Network for Real-Time Weed Detection in Precision Agriculture" in IEEE Xplore.',
    description: 'Published peer-reviewed research on "Lightweight Deep Neural Network for Real-Time Weed Detection in Precision Agriculture" in IEEE Xplore.',
    studentName: 'Student & Faculty Research Group',
    rollNoOrBatch: 'Department of CSE',
    fullDetails: {
      overview: 'Conducted field trials and developed an ultra-lightweight neural network deployed on microcontrollers for real-time agricultural robotics and automated weed eradication.',
      organizer: 'IEEE Computer Society & International Conference on Intelligent Computing',
      venue: 'IEEE International Conference',
      grantOrPrize: 'IEEE Xplore Digital Library Indexed Publication',
      investigatorsOrTeam: ['Student Researchers & Faculty Guides, CSE'],
      keyHighlights: [
        'Published in Scopus-indexed IEEE Conference Proceedings',
        'Novel model architecture with 4x faster inference speed'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-aws-cloud-certifications',
    image: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
    imageOrCertificate: '/lovable-uploads/ed62fbf1-01f2-4cad-ba95-9ffaf5ac295c.png',
    achievementTitle: 'AWS Certified Solutions Architect & Cloud Credentials',
    category: 'Certifications',
    eventName: 'Global AWS Industry Certification Drive',
    eventOrOrganization: 'Amazon Web Services (AWS)',
    dateOrYear: '2025–26',
    awardOrPosition: 'Global Professional Certification Badges',
    shortDescription: 'Over 25 department students completed global industry certifications in cloud infrastructure, containerization, microservices, and serverless deployment.',
    description: 'Over 25 department students completed global industry certifications in cloud infrastructure, containerization, microservices, and serverless deployment.',
    studentName: 'Cloud & DevOps Learners Circle',
    rollNoOrBatch: 'Batch 2023–2027',
    fullDetails: {
      overview: 'Comprehensive training and successful credentialing of CSE students in world-standard enterprise cloud computing architectures.',
      organizer: 'Amazon Web Services (AWS) Training & Certification',
      grantOrPrize: 'Official AWS Certified Digital Badges & Verification Keys',
      investigatorsOrTeam: ['Cloud & DevOps Vertical, CSE Association'],
      keyHighlights: [
        '25+ students validated as AWS Certified Solutions Architects / Cloud Practitioners',
        'Practical labs in AWS Lambda, ECS, S3, IAM, and VPC networking'
      ],
      departmentOrCenter: 'Department of Computer Science and Engineering'
    }
  },
  {
    id: 'ach-edii-startup-grant',
    image: '/lovable-uploads/front3.jpg',
    imageOrCertificate: '/lovable-uploads/front3.jpg',
    achievementTitle: 'Tamil Nadu Student Startup Grant & Innovation Recognition',
    category: 'Other Achievements',
    eventName: 'EDII-TN State Innovation Challenge & Seed Grant',
    eventOrOrganization: 'EDII-TN & State Innovation Council',
    dateOrYear: '2025',
    awardOrPosition: 'State Government Startup Seed Grant',
    shortDescription: 'Secured student seed funding for developing an IoT-enabled smart assistive walking navigation kit with tactile guidance for visually impaired individuals.',
    description: 'Secured student seed funding for developing an IoT-enabled smart assistive walking navigation kit with tactile guidance for visually impaired individuals.',
    studentName: 'Crevation Lab Project Incubatees',
    rollNoOrBatch: 'II & III Year CSE',
    fullDetails: {
      overview: 'Designed a cost-effective, haptic-feedback navigation device assisting visually challenged individuals to traverse indoor and outdoor obstacles safely.',
      organizer: 'Entrepreneurship Development and Innovation Institute (EDII-TN)',
      grantOrPrize: 'State Government Seed Grant & Incubation',
      investigatorsOrTeam: ['Crevation Lab Student Entrepreneurs, CSE'],
      keyHighlights: [
        'Awarded government grant for prototype mass manufacture',
        'Field-tested with disability support organizations in Tamil Nadu'
      ],
      departmentOrCenter: 'Crevation Lab & Department of CSE'
    }
  }
];
