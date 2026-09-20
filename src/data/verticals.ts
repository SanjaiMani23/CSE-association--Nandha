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
  staffImage: string;
  summary: string;
  vision: string;
  mission: string;
  overallOutcome: string;
  image: string;
  verifiedAchievement?: VerticalAchievement;
  keyAreas?: string[];
  equipmentOrFocus?: string[];
}

export const verticalsData: VerticalItem[] = [
  {
    id: 'ric',
    name: 'RIC',
    fullName: 'Robotics Intelligence Center',
    staffInCharge: 'Mr. Praveenkumar',
    staffImage: '/images/faculty/praveenkumar.png',
    image: '/images/verticals/ric.jpg',
    summary:
      'The Robotics Intelligence Center (RIC) is a specialized vertical of the Department of Computer Science and Engineering at Nandha Engineering College (Autonomous). The centre focuses on robotics, artificial intelligence, machine learning, computer vision, automation and autonomous systems. It provides students with opportunities to understand, design and develop intelligent robotic systems that can sense their surroundings, process information, make decisions and perform tasks effectively. Through practical training, project development, research activities, workshops and technical competitions, RIC encourages students to transform theoretical knowledge into functional robotic solutions. The centre also promotes interdisciplinary collaboration and supports the development of robotics applications for healthcare, agriculture, education, industrial automation, safety and other socially relevant areas. Research and teaching centres in this field commonly combine intelligent perception, autonomous navigation, control and human–robot interaction.',
    vision:
      'To establish a centre of excellence in robotics and intelligent automation that develops innovative, reliable and socially responsible autonomous systems for the benefit of society.',
    mission:
      'The mission of the Robotics Intelligence Center is to provide students with strong theoretical and practical knowledge in robotics, artificial intelligence and autonomous systems; promote research and innovation in intelligent robotic technologies; support the design and development of application-oriented robotic prototypes; encourage interdisciplinary collaboration among students, faculty members and industry professionals; and develop technically skilled, creative and ethically responsible professionals who can contribute to the future of robotics and intelligent automation.',
    overallOutcome:
      'The Robotics Intelligence Center is expected to develop a strong culture of practical learning, research and innovation in robotics and intelligent automation. Through project-based activities, students will gain the ability to design, develop, program and test robotic systems that can interact with their surroundings and perform meaningful tasks. The centre will support the creation of functional prototypes, autonomous systems and application-oriented solutions in areas such as healthcare, agriculture, education, industrial automation and safety. It will also strengthen students’ technical, analytical, teamwork and problem-solving skills while preparing them for higher education, research careers and employment opportunities in robotics, artificial intelligence and automation.',
    keyAreas: [
      'Robotics & Automation',
      'Artificial Intelligence & Machine Learning',
      'Computer Vision & Sensing',
      'Autonomous Navigation & Systems',
      'Human–Robot Interaction',
      'Interdisciplinary Applications (Healthcare, Agriculture, Industry)',
    ],
    equipmentOrFocus: [
      'Intelligent perception testbeds',
      'Microcontroller & robotic kits',
      'Autonomous mobile robot platforms',
      'Sensor integration labs',
    ],
  },
  {
    id: 'cic',
    name: 'CIC',
    fullName: 'Center for Intelligent Computing',
    staffInCharge: 'Ms. Geetha',
    staffImage: '/images/faculty/geetha.png',
    image: '/images/verticals/cic.jpg',
    summary:
      'The Center for Intelligent Computing (CIC) is a specialized vertical of the Department of Computer Science and Engineering that focuses on the development and application of intelligent computing systems. The centre brings together artificial intelligence, machine learning, data science, computer vision, predictive analytics and intelligent automation to address complex real-world problems. CIC provides a platform for students, faculty members and collaborators to conduct research, develop prototypes and create data-driven solutions for healthcare, education, cybersecurity, agriculture, industry and community development. The centre encourages project-based learning, technical training, research publications and interdisciplinary collaboration. Its Memorandum of Understanding with Erode Cancer Centre represents an important step towards exploring technology-enabled healthcare initiatives and applying intelligent computing to socially relevant challenges.',
    vision:
      'To become a centre of excellence in intelligent computing by developing innovative, reliable and data-driven solutions that contribute to technological advancement and societal well-being.',
    mission:
      'The mission of the Center for Intelligent Computing is to promote education, research and innovation in artificial intelligence, machine learning, data science and intelligent systems; provide students with practical experience in designing and implementing data-driven solutions; encourage collaboration among academic, healthcare, industrial and research organizations; support interdisciplinary projects that address real-world problems; promote ethical, explainable and human-centred intelligent technologies; and transform innovative ideas into research outcomes, prototypes and practical applications.',
    overallOutcome:
      'The Center for Intelligent Computing is expected to strengthen research, innovation and practical problem-solving in artificial intelligence, machine learning, data science and intelligent systems. Students and faculty members will be encouraged to develop data-driven models, predictive systems, intelligent applications and research prototypes that address challenges in healthcare, education, cybersecurity, agriculture, industry and community development. The centre will promote interdisciplinary collaboration, technical skill development, research publications, patents, project-based learning and partnerships with external organizations. Through these activities, CIC will contribute to the development of reliable and socially beneficial intelligent computing solutions while improving students’ analytical, programming, research and decision-making abilities.',
    verifiedAchievement: {
      title: 'MoU with Erode Cancer Centre',
      date: '2 May 2026 at 9:30 AM',
      venue: 'Placement Auditorium, Nandha Engineering College',
      partner: 'Erode Cancer Centre, Erode, Tamil Nadu',
      description:
        'The Department of Computer Science and Engineering, Nandha Engineering College (Autonomous), signed a Memorandum of Understanding with Erode Cancer Centre, Erode, Tamil Nadu, to promote academic interaction, technology-enabled healthcare initiatives, research and socially relevant innovation. The MoU signing ceremony was conducted on 2 May 2026 at 9:30 AM at the Placement Auditorium, Nandha Engineering College.',
    },
    keyAreas: [
      'Data Science & Predictive Analytics',
      'Machine Learning & Deep Learning',
      'Intelligent Healthcare & Clinical AI',
      'Cybersecurity & Intelligent Automation',
      'Computer Vision & Edge Computing',
      'Interdisciplinary Research & Publications',
    ],
    equipmentOrFocus: [
      'Data science analytics workstations',
      'Clinical dataset processing rigs',
      'High-throughput computing clusters',
      'AI prototype testing frameworks',
    ],
  },
  {
    id: 'genai',
    name: 'GenAI',
    fullName: 'Generative Artificial Intelligence',
    staffInCharge: 'Mr. Thiruvenkatasuresh',
    staffImage: '/images/faculty/thiruvenkatasuresh.png',
    image: '/images/verticals/genai.jpg',
    summary:
      'The Generative Artificial Intelligence (GenAI) Vertical is dedicated to the study, development and responsible application of artificial intelligence systems that can generate new content, including text, images, audio, video, software code and other digital outputs. The vertical provides students with opportunities to explore large language models, natural language processing, computer vision, prompt engineering, multimodal systems and AI-assisted application development. It encourages the creation of innovative tools and solutions for education, research, software engineering, healthcare, business and other professional domains. Along with technical development, the vertical emphasizes the importance of privacy, fairness, transparency, security, academic integrity and ethical use of AI. Its objective is to prepare students to become capable and responsible professionals who can apply generative AI creatively, critically and effectively. Leading academic GenAI initiatives similarly combine technical research with safety, societal impact and responsible application.',
    vision:
      'To develop a responsible and innovative community that advances generative artificial intelligence for meaningful applications in education, research, industry and society.',
    mission:
      'The mission of the GenAI Vertical is to provide students with knowledge and practical experience in generative artificial intelligence; promote research in language models, multimodal AI and intelligent applications; encourage the development of reliable and user-centred AI solutions; provide training in prompt engineering, model evaluation and AI-assisted development; promote interdisciplinary collaboration and innovation; and create awareness of privacy, fairness, copyright, security, transparency and other ethical considerations associated with generative AI.',
    overallOutcome:
      'The GenAI Vertical is expected to develop a skilled and responsible student community capable of understanding, evaluating and applying generative artificial intelligence technologies. Students will gain practical experience in large language models, prompt engineering, natural language processing, multimodal systems and AI-based application development. The vertical will encourage the creation of innovative tools and prototypes that support education, research, software development, communication and industry requirements. Along with technical capability, students will develop awareness of verification, privacy, copyright, bias, academic integrity and responsible AI use. The overall outcome will be a generation of AI-literate professionals who can use generative technologies creatively, critically and ethically. Responsible AI education should include verification, transparency, accountability and critical engagement rather than relying only on tool usage.',
    keyAreas: [
      'Large Language Models (LLMs)',
      'Natural Language Processing (NLP)',
      'Multimodal Generative Models (Text, Image, Audio, Code)',
      'Prompt Engineering & Fine-Tuning',
      'AI Ethics, Privacy & Security',
      'Agentic Workflows & AI Applications',
    ],
    equipmentOrFocus: [
      'High-performance GPU compute stations',
      'Open-source inference & fine-tuning pipelines',
      'Multimodal generative testbeds',
      'AI-assisted development environments',
    ],
  },
  {
    id: 'avr',
    name: 'AV/VR',
    fullName: 'Augmented and Virtual Reality',
    staffInCharge: 'Ms. Easwari',
    staffImage: '/images/faculty/easwari.png',
    image: '/images/verticals/avr.jpg',
    summary:
      'The AV/VR Vertical focuses on Augmented Reality, Virtual Reality, Mixed Reality and Extended Reality technologies. It provides students with opportunities to design and develop immersive, interactive and visually engaging digital experiences that connect physical environments with virtual content. The vertical promotes learning in 3D modelling, computer graphics, animation, simulation, spatial computing, user experience design and human–computer interaction. Students are encouraged to create virtual laboratories, educational applications, training environments, interactive visualizations and industry-oriented immersive solutions. AV/VR also supports interdisciplinary innovation by connecting computing with engineering, healthcare, design, architecture and other fields. Through practical projects and research activities, the vertical aims to prepare students for emerging opportunities in immersive technology and interactive application development. Research centres in this area commonly integrate technology, design and science to create meaningful applications with educational, industrial and social impact.',
    vision:
      'To become a creative and technology-driven centre for developing immersive, interactive and human-centred applications using augmented, virtual and extended reality technologies.',
    mission:
      'The mission of the AV/VR Vertical is to provide students with practical knowledge of augmented, virtual, mixed and extended reality; develop expertise in 3D modelling, computer graphics, animation and immersive design; promote research in spatial computing and human–computer interaction; support the development of educational, industrial, healthcare and engineering applications; encourage interdisciplinary collaboration and creative problem-solving; and foster the responsible development of accessible, engaging and user-centred immersive experiences.',
    overallOutcome:
      'The AV/VR Vertical is expected to develop students’ capabilities in immersive technology, 3D design, computer graphics, simulation and interactive application development. Students will be able to create virtual environments, augmented-reality applications, educational experiences, training simulations, interactive visualizations and domain-specific immersive solutions. The vertical will encourage the use of AR, VR, MR and XR technologies in education, engineering, healthcare, architecture, industry and entertainment. Its overall outcome will be a portfolio of creative prototypes and immersive applications, together with improved student skills in design, programming, user experience, visual communication and interdisciplinary collaboration. Immersive-technology research increasingly combines technical development with design and social impact across multiple application domains.',
    keyAreas: [
      'Augmented Reality (AR) & Virtual Reality (VR)',
      'Mixed Reality (MR) & Spatial Computing',
      '3D Modeling, Graphics & Animation',
      'Virtual Laboratories & Training Simulations',
      'Human–Computer Interaction (HCI)',
      'Interactive & Immersive UX/UI',
    ],
    equipmentOrFocus: [
      'Immersive VR headsets & spatial controllers',
      'Real-time 3D rendering workstations',
      'Spatial tracking & sensory gear',
      'Unity & Unreal Engine development suites',
    ],
  },
  {
    id: 'crevation-lab',
    name: 'Crevation Lab',
    fullName: 'Crevation Lab',
    staffInCharge: 'Dr. T. Rajasekaran',
    staffImage: '/images/faculty/rajasekaran.png',
    image: '/images/verticals/crevation-lab.jpg',
    summary:
      'The Crevation Lab is a creativity and innovation laboratory established to encourage students to transform ideas into practical solutions, prototypes and technology-based products. The lab combines creativity, design thinking, programming, engineering knowledge and collaborative problem-solving to address real-world challenges. It provides students with an environment to identify user needs, analyse problems, generate ideas, design solutions, develop prototypes and evaluate their effectiveness. Crevation Lab promotes project-based learning, interdisciplinary collaboration, hackathons, exhibitions, technical competitions and entrepreneurship-oriented activities. By supporting the complete innovation process from ideation to implementation, the lab aims to develop confident student innovators who can contribute to research, industry, entrepreneurship and community development.',
    vision:
      'To create a dynamic innovation ecosystem that transforms creative ideas into practical, sustainable and socially valuable solutions.',
    mission:
      'The mission of Crevation Lab is to encourage creativity, curiosity and entrepreneurial thinking among students; promote design thinking and user-centred problem-solving; provide guidance and resources for prototype and product development; support interdisciplinary collaboration among students and faculty members; connect innovative ideas with industry and community needs; encourage participation in hackathons, exhibitions and competitions; and develop technically capable innovators who can transform ideas into meaningful academic, industrial and societal outcomes.',
    overallOutcome:
      'The Crevation Lab is expected to cultivate creativity, innovation, design thinking and entrepreneurial ability among students. It will guide students through the complete innovation process, beginning with problem identification and idea generation and continuing through design, prototyping, testing, refinement and presentation. The lab will support the development of practical products, software applications, hardware prototypes and socially relevant solutions. It will also encourage participation in hackathons, exhibitions, competitions, research activities, patent development and startup-oriented initiatives. The overall outcome will be a stronger innovation ecosystem in which students become confident problem-solvers capable of converting ideas into useful, sustainable and user-centred solutions. Student innovation laboratories commonly measure outcomes through prototypes, proof-of-concepts, startup ideas, research outputs and improved employability skills.',
    keyAreas: [
      'Design Thinking & Ideation',
      'Rapid Prototyping & Hardware-Software Integration',
      'Product Engineering & Evaluation',
      'Hackathons & Technical Competitions',
      'Entrepreneurship & Startup Incubation',
      'Interdisciplinary Problem Solving',
    ],
    equipmentOrFocus: [
      'High-precision 3D printers & fabrication tools',
      'IoT microcontroller & sensor toolkits',
      'Rapid electronics prototyping benches',
      'Product design & CAD software suites',
    ],
  },
];
