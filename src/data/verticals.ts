export interface VerticalItem {
  id: string;
  name: string;
  fullName: string;
  staffInCharge: string;
  summary: string;
  image: string;
  keyAreas?: string[];
  equipmentOrFocus?: string[];
}

export const verticalsData: VerticalItem[] = [
  {
    id: 'ric',
    name: 'RIC',
    fullName: 'Research & Innovation Cell',
    staffInCharge: 'Praveenkumar',
    summary:
      'The RIC vertical focuses on encouraging research, innovation, and technical exploration among students. It provides a platform for developing innovative ideas, research-oriented projects, and solutions to real-world challenges.',
    image: '/images/verticals/ric.webp',
    keyAreas: ['Applied Research', 'Patent Drafting & IP', 'Robotics & Automation', 'Interdisciplinary Problem Solving'],
    equipmentOrFocus: ['Robotic kits', 'Microcontroller test benches', 'Research publication guidance', 'Project incubation'],
  },
  {
    id: 'genai',
    name: 'GenAI',
    fullName: 'Generative Artificial Intelligence',
    staffInCharge: 'Thiruvenkatasuresh',
    summary:
      'The GenAI vertical focuses on exploring generative artificial intelligence and its practical applications. It encourages students to learn, experiment, and develop innovative solutions using modern AI technologies.',
    image: '/images/verticals/genai.webp',
    keyAreas: ['Large Language Models', 'Multimodal Diffusion', 'RAG Architectures', 'AI Agent Systems'],
    equipmentOrFocus: ['GPU accelerated compute', 'Open-source inference pipelines', 'Fine-tuning toolkits', 'Agentic frameworks'],
  },
  {
    id: 'cic',
    name: 'CIC',
    fullName: 'Center for Intelligent Computing',
    staffInCharge: 'Geetha',
    summary:
      'The Center for Intelligent Computing focuses on exploring intelligent computing technologies and their practical applications. It encourages students to develop innovative solutions through computational thinking, emerging technologies, and hands-on technical projects.',
    image: '/images/verticals/cic.webp',
    keyAreas: ['High Performance Computing', 'Distributed Algorithms', 'Computer Vision & NLP', 'Intelligent IoT Edge'],
    equipmentOrFocus: ['Computing cluster access', 'High-throughput networking', 'Algorithmic benchmarking', 'Deep learning rigs'],
  },
  {
    id: 'avr',
    name: 'AV/VR',
    fullName: 'Augmented & Virtual Reality',
    staffInCharge: 'Easwari',
    summary:
      'The AV/VR vertical focuses on immersive technologies such as augmented reality and virtual reality. It provides opportunities for students to explore interactive experiences and develop applications using emerging immersive technologies.',
    image: '/images/verticals/avr.webp',
    keyAreas: ['Spatial Computing', 'Mixed Reality Simulation', '3D Interactive Modeling', 'Virtual Laboratories'],
    equipmentOrFocus: ['VR Headsets & controllers', 'Spatial tracking rigs', 'Unity & Unreal dev stations', 'AR mobile devkits'],
  },
  {
    id: 'crevation-lab',
    name: 'Crevation Lab',
    fullName: 'Crevation Lab',
    staffInCharge: 'HoD',
    summary:
      'The Crevation Lab serves as an innovation and creative technology space where students can experiment, build prototypes, and transform ideas into practical projects. It encourages hands-on learning, creativity, and technological problem-solving.',
    image: '/images/verticals/crevation-lab.webp',
    keyAreas: ['Rapid Prototyping', 'Hardware-Software Co-design', 'Design Thinking', 'Student Startup Ventures'],
    equipmentOrFocus: ['3D Printing facilities', 'Embedded IoT stations', 'PCB fabrication tools', 'Testing & measurement instruments'],
  },
];
