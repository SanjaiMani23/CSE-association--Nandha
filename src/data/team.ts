export interface FacultyMember {
  name: string;
  designation: string;
  role: string;
  image: string;
  qualification?: string;
  email?: string;
}

export interface StudentLeader {
  name: string;
  role?: string;
  year: string;
  image: string;
}

export const leadershipData: FacultyMember[] = [
  {
    name: 'Dr. T. Rajasekaran',
    qualification: 'M.E., Ph.D.',
    designation: 'Professor & Head of Department',
    role: 'Head of The Department & Crevation Lab Lead',
    image: '/images/faculty/rajasekaran.png',
  },
  {
    name: 'Dr. S. Karuppusamy',
    qualification: 'M.E., Ph.D.',
    designation: 'Associate Professor / CSE',
    role: 'Association Staff In-charge',
    image: '/lovable-uploads/71f5b66a-b7fb-4a7c-a25a-cf47bdd6b834.png',
  },
];

export const verticalFacultyIncharges: FacultyMember[] = [
  {
    name: 'Mr. Praveenkumar',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - RIC (Robotics Intelligence Center)',
    image: '/images/faculty/praveenkumar.png',
  },
  {
    name: 'Ms. Geetha',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - CIC (Center for Intelligent Computing)',
    image: '/images/faculty/geetha.png',
  },
  {
    name: 'Mr. Thiruvenkatasuresh',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - GenAI (Generative Artificial Intelligence)',
    image: '/images/faculty/thiruvenkatasuresh.png',
  },
  {
    name: 'Ms. Easwari',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - AV/VR (Augmented & Virtual Reality)',
    image: '/images/faculty/easwari.png',
  },
  {
    name: 'Dr. T. Rajasekaran',
    designation: 'Professor & Head / CSE',
    role: 'Staff In-charge - Crevation Lab',
    image: '/images/faculty/rajasekaran.png',
  },
];

export const officeBearersData: StudentLeader[] = [
  {
    name: 'Mr. G. Mohana Prasath',
    role: 'Secretary',
    year: 'IV Year CSE',
    image: '/Office bearers/Mohana prasath.jpg',
  },
  {
    name: 'Mr. C. Udhay Karthik',
    role: 'Treasurer',
    year: 'IV Year CSE',
    image: '/Office bearers/Udhay Karthik.jpg',
  },
  {
    name: 'Mr. M. Kavikumar',
    role: 'Joint Secretary',
    year: 'III Year CSE',
    image: '/Office bearers/kavikumar.jpg',
  },
  {
    name: 'Mr. S. Balahariharan',
    role: 'Joint Treasurer',
    year: 'III Year CSE',
    image: '/Office bearers/Balahariharan.jpg',
  },
];

export const executiveMembersData: StudentLeader[] = [
  { name: 'Mr. M. Dhilip', year: 'IV Year CSE', image: '/office/Dhilip.jpg' },
  { name: 'Ms. M. Hanushree', year: 'IV Year CSE', image: '/office/Hanushree.jpg' },
  { name: 'Mr. K. Rumesh Kumaran', year: 'IV Year CSE', image: '/office/Rumesh.jpg' },
  { name: 'Ms. T. Saarumathi', year: 'IV Year CSE', image: '/office/Saarumathi.jpg' },
  { name: 'Ms. R. Abinaya', year: 'III Year CSE', image: '/office/1745938528340.jpg' },
  { name: 'Mr. S. S. Arunesh', year: 'III Year CSE', image: '/office/Arunesh.jpg' },
  { name: 'Mr. M. S. Phurnes', year: 'III Year CSE', image: '/office/Phurnes.jpg' },
  { name: 'Ms. A. K. Nandhana', year: 'III Year CSE', image: '/office/Nandhana.jpg' },
  { name: 'Ms. S. Subaranjani', year: 'III Year CSE', image: '/office/Subaranjani.jpg' },
  { name: 'Mr. Santhosh Dinakaran', year: 'III Year CSE', image: '/office/Santhosh.jpg' },
  { name: 'Mr. P. Y. Ashwin Uvraj', year: 'II Year CSE', image: '/office/Ashwin.jpg' },
  { name: 'Ms. A. J. Deshika', year: 'II Year CSE', image: '/office/Deshika.jpg' },
  { name: 'Mr. B. Harish Kumar', year: 'II Year CSE', image: '/office/Harish.jpg' },
  { name: 'Ms. T. L. Jana Sri', year: 'II Year CSE', image: '/office/Jana%20Sri.jpg' },
  { name: 'Mr. M. Pradeesh', year: 'II Year CSE', image: '/office/Pradeesh.jpg' },
  { name: 'Mr. R. Rupanarayanan', year: 'II Year CSE', image: '/office/Rupan.jpg' },
  { name: 'Ms. R. Shamiksha', year: 'II Year CSE', image: '/office/Shamiksha.jpg' },
  { name: 'Mr. R. Sree Nandhu', year: 'II Year CSE', image: '/office/Sree%20Nandhu.jpg' },
  { name: 'Ms. Rithika S', year: 'I Year CSE', image: '/office/ritika.jpg' },
  { name: 'Mr. Manish K', year: 'I Year CSE', image: '/office/Manish.jpg' },
  { name: 'Ms. Sruthi S', year: 'I Year CSE', image: '/office/Sruthi.jpg' },
];
