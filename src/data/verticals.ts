export interface VerticalAchievement {
  title: string;
  description: string;
  date?: string;
  venue?: string;
  partner?: string;
}

export interface VerticalItem {
  id: string;
  name: string;
  fullName: string;
  staffInCharge: string;
  staffImage?: string;
  staffPrefix?: string;
  hasMouBadge?: boolean;
  summary: string;
  vision: string;
  mission: string;
  outcome: string;
  verifiedAchievement?: string;
  image: string;
  focusAreas: string[];
}

export const verticalsData: VerticalItem[] = [
  {
    id: 'ric',
    name: 'RIC',
    fullName: 'Robotics Intelligence Center',
    staffInCharge: 'Mr. Praveenkumar',
    staffImage: '/images/verticals/staff/praveenkumar.png',
    summary:
      'The Robotics Intelligence Center (RIC) is a specialized vertical of the Department of Computer Science and Engineering at Nandha Engineering College (Autonomous). The centre focuses on robotics, artificial intelligence, machine learning, computer vision, automation and autonomous systems.',
    vision:
      'To establish a centre of excellence in robotics and intelligent automation that develops innovative, reliable and socially responsible autonomous systems for the benefit of society.',
    mission:
      'The mission of the Robotics Intelligence Center is to provide students with strong theoretical and practical knowledge in robotics, artificial intelligence and autonomous systems; promote research and innovation in intelligent robotic technologies; support the design and development of application-oriented robotic prototypes; encourage interdisciplinary collaboration; and develop technically skilled, creative and ethically responsible professionals.',
    outcome:
      'Develops a strong culture of practical learning, research and innovation in robotics and intelligent automation with functional prototypes in healthcare, agriculture, and industrial automation.',
    image: '/images/verticals/ric.jpg',
    focusAreas: [
      'Robotics & Automation',
      'Artificial Intelligence & Machine Learning',
      'Computer Vision & Sensing',
    ],
  },
  {
    id: 'cic',
    name: 'CIC',
    fullName: 'Center for Intelligent Computing',
    staffInCharge: 'Ms. Geetha',
    staffImage: '/images/verticals/staff/geetha.png',
    hasMouBadge: true,
    summary:
      'The Center for Intelligent Computing (CIC) is a specialized vertical of the Department of Computer Science and Engineering that focuses on the development and application of intelligent computing systems, bringing together artificial intelligence, machine learning, data science, predictive analytics and intelligent automation to address complex real-world problems.',
    vision:
      'To become a centre of excellence in intelligent computing by developing innovative, reliable and data-driven solutions that contribute to technological advancement and societal well-being.',
    mission:
      'To promote education, research and innovation in AI, ML, data science and intelligent systems; encourage collaboration with healthcare and industrial organizations; and transform innovative ideas into research outcomes and practical applications.',
    verifiedAchievement:
      'MoU signed with Erode Cancer Centre on 2 May 2026 to promote technology-enabled healthcare initiatives and socially relevant innovation.',
    outcome:
      'Strengthens data-driven predictive modeling, intelligent healthcare solutions, research publications, patents, and collegiate technical partnerships.',
    image: '/images/verticals/cic.jpg',
    focusAreas: [
      'Data Science & Predictive Analytics',
      'Machine Learning & Deep Learning',
      'Intelligent Healthcare & Clinical AI',
    ],
  },
  {
    id: 'genai',
    name: 'GenAI',
    fullName: 'Generative Artificial Intelligence',
    staffInCharge: 'Mr. Thiruvenkatasuresh',
    staffImage: '/images/verticals/staff/thiruvenkatasuresh.png',
    summary:
      'The Generative Artificial Intelligence (GenAI) Vertical is dedicated to the study, development and responsible application of artificial intelligence systems that can generate new content, including text, images, audio, video, software code and multimodal digital outputs.',
    vision:
      'To develop a responsible and innovative community that advances generative artificial intelligence for meaningful applications in education, research, industry and society.',
    mission:
      'To provide students with knowledge and practical experience in generative AI; promote research in language models, multimodal AI and intelligent applications; encourage reliable AI solutions; provide training in prompt engineering and model evaluation; and create awareness of privacy, fairness, security and ethics.',
    outcome:
      'Prepares AI-literate professionals who can critically and ethically design, evaluate and deploy generative models, LLM pipelines, and AI agent architectures.',
    image: '/images/verticals/genai.jpg',
    focusAreas: [
      'Large Language Models (LLMs)',
      'Natural Language Processing (NLP)',
      'Multimodal Generative Models (Text, Image, Audio, Code)',
    ],
  },
  {
    id: 'avr',
    name: 'AV/VR',
    fullName: 'Augmented and Virtual Reality',
    staffInCharge: 'Ms. Easwari',
    staffImage: '/images/verticals/staff/easwari.png',
    summary:
      'The AV/VR Vertical focuses on Augmented Reality, Virtual Reality, Mixed Reality and Extended Reality technologies, providing students with opportunities to design and develop immersive, interactive and visually engaging digital experiences.',
    vision:
      'To become a creative and technology-driven centre for developing immersive, interactive and human-centred applications using augmented, virtual and extended reality technologies.',
    mission:
      'To provide students with practical knowledge of AR, VR, MR and XR; develop expertise in 3D modelling, computer graphics, animation and spatial computing; and support the development of educational and healthcare simulations.',
    outcome:
      'Delivers a portfolio of creative prototypes, virtual laboratories, interactive training simulations, and immersive spatial computing experiences.',
    image: '/images/verticals/ar-vr.jpg',
    focusAreas: [
      'Augmented Reality (AR) & Virtual Reality (VR)',
      'Mixed Reality (MR) & Spatial Computing',
      '3D Modeling, Graphics & Animation',
    ],
  },
  {
    id: 'crevation-lab',
    name: 'Crevation Lab',
    fullName: 'Crevation Lab',
    staffInCharge: 'Dr. T. Rajasekaran',
    staffImage: '/images/verticals/staff/rajasekaran.png',
    summary:
      'The Crevation Lab is a creativity and innovation laboratory established to encourage students to transform ideas into practical solutions, prototypes and technology-based products using design thinking, programming, engineering knowledge and collaborative problem-solving.',
    vision:
      'To create a dynamic innovation ecosystem that transforms creative ideas into practical, sustainable and socially valuable solutions.',
    mission:
      'To encourage creativity, curiosity and entrepreneurial thinking; promote design thinking and user-centred problem-solving; provide resources for prototype and product development; and support hackathons and startup ventures.',
    outcome:
      'Cultivates a vibrant innovation ecosystem with proof-of-concepts, patent filings, hackathon-winning hardware/software prototypes, and startup initiatives.',
    image: '/images/verticals/crevation.jpg',
    focusAreas: [
      'Design Thinking & Ideation',
      'Rapid Prototyping & Hardware-Software Integration',
      'Product Engineering & Evaluation',
    ],
  },
];

