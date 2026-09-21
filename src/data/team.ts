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
    image: '/lovable-uploads/50885d3b-8143-43cd-9747-546663c22c17.png',
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
    image: '/images/verticals/staff/praveenkumar.png',
  },
  {
    name: 'Ms. Geetha',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - CIC (Center for Intelligent Computing)',
    image: '/images/verticals/staff/geetha.png',
  },
  {
    name: 'Mr. Thiruvenkatasuresh',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - GenAI (Generative Artificial Intelligence)',
    image: '/images/verticals/staff/thiruvenkatasuresh.png',
  },
  {
    name: 'Ms. Easwari',
    designation: 'Assistant Professor / CSE',
    role: 'Staff In-charge - AV/VR (Augmented and Virtual Reality)',
    image: '/images/verticals/staff/easwari.png',
  },
  {
    name: 'Dr. T. Rajasekaran',
    designation: 'Professor & Head / CSE',
    role: 'Staff In-charge - Crevation Lab',
    image: '/images/verticals/staff/rajasekaran.png',
  },
];

// 1. Office Bearers
export const officeBearersData: StudentLeader[] = [
  { name: 'Mr. M. Kavinkumar', role: 'Secretary', year: '4th Year', image: '/Office bearers/kavikumar.jpg' },
  { name: 'Mr. S. Balahariharan', role: 'Treasurer', year: '4th Year', image: '/Office bearers/Balahariharan.jpg' },
  { name: 'Mr. R. Rupanarayanan', role: 'Joint Secretary', year: '3rd Year', image: '/office/Rupan.jpg' },
  { name: 'Mr. M. Pradeesh', role: 'Joint Treasurer', year: '3rd Year', image: '/office/Pradeesh.jpg' },
];

// 2. Executive Members
export const executiveMembersData: StudentLeader[] = [
  // 4th Year
  { name: 'Ms. R. Abinaya', role: 'Executive Member', year: '4th Year', image: '/office/1745938528340.jpg' },
  { name: 'Mr. S. S. Arunesh', role: 'Executive Member', year: '4th Year', image: '/office/Arunesh.jpg' },
  { name: 'Mr. M. S. Phurnes', role: 'Executive Member', year: '4th Year', image: '/office/Phurnes.jpg' },
  { name: 'Ms. A. K. Nandhana', role: 'Executive Member', year: '4th Year', image: '/office/Nandhana.jpg' },
  { name: 'Ms. S. Subaranjani', role: 'Executive Member', year: '4th Year', image: '/office/Subaranjani.jpg' },
  { name: 'Mr. Santhosh Dinakaran', role: 'Executive Member', year: '4th Year', image: '/office/Santhosh.jpg' },

  // 3rd Year
  { name: 'Mr. P. Y. Ashwin Uvraj', role: 'Executive Member', year: '3rd Year', image: '/office/Ashwin.jpg' },
  { name: 'Ms. A. J. Deshika', role: 'Executive Member', year: '3rd Year', image: '/office/Deshika.jpg' },
  { name: 'Mr. B. Harish Kumar', role: 'Executive Member', year: '3rd Year', image: '/office/Harish.jpg' },
  { name: 'Ms. T. L. Jana Sri', role: 'Executive Member', year: '3rd Year', image: '/office/Jana%20Sri.jpg' },
  { name: 'Ms. R. Shamiksha', role: 'Executive Member', year: '3rd Year', image: '/office/Shamiksha.jpg' },
  { name: 'Mr. R. Sree Nandhu', role: 'Executive Member', year: '3rd Year', image: '/office/Sree%20Nandhu.jpg' },

  // 1st Year
  { name: 'Ms. Rithika S', role: 'Executive Member', year: '1st Year', image: '/office/ritika.jpg' },
  { name: 'Mr. Manish K', role: 'Executive Member', year: '1st Year', image: '/office/Manish.jpg' },
  { name: 'Ms. Sruthi S', role: 'Executive Member', year: '1st Year', image: '/office/Sruthi.jpg' },
  { name: 'Ms. H. Lithika Shree', role: 'Executive Member', year: '1st Year', image: '/office/litika.jpg' },
  { name: 'Ms. R. Dhanu Shree', role: 'Executive Member', year: '1st Year', image: '/office/dhanu.jpg' },
  { name: 'Ms. S. Oviya', role: 'Executive Member', year: '1st Year', image: '/office/Oviya.jpg' },
  { name: 'Mr. Harish A', role: 'Executive Member', year: '1st Year', image: '/office/image.png' },
  { name: 'Mr. Someshkumar M', role: 'Executive Member', year: '1st Year', image: '/office/WhatsApp Image 2025-09-28 at 07.40.30_c47c1417.jpg' },
];

// 3. Core Members
export const coreMembersData: StudentLeader[] = [
  // 4th Year
  { name: 'Mr. A. Mohamed Abu Bakkar Siddiq', role: 'Core Member', year: '4th Year', image: '/core/Abu Bakkar.jpg' },
  { name: 'Mr. C. Vishal', role: 'Core Member', year: '4th Year', image: '/core/Vishal.jpg' },
  { name: 'Mr. A. Manibharaathi', role: 'Core Member', year: '4th Year', image: '/core/Manibharaathi.jpg' },
  { name: 'Ms. S. Dhivya', role: 'Core Member', year: '4th Year', image: '/core/dhivya.jpg' },

  // 3rd Year
  { name: 'Ms. S. Aashiqa Fathima', role: 'Core Member', year: '3rd Year', image: '/core/Aashiqa.jpg' },
  { name: 'Mr. U. Mahendran', role: 'Core Member', year: '3rd Year', image: '/core/Mahendran.jpg' },
  { name: 'Mr. Prithiv Krishna', role: 'Core Member', year: '3rd Year', image: '/core/Prithiv.jpg' },
  { name: 'Ms. E. Subitcha', role: 'Core Member', year: '3rd Year', image: '/core/Subitcha.jpg' },
];

// 4. All of Frame (All members belonging to the 4th-year group, displayed as Super Senior)
export const allOfFrameData: StudentLeader[] = [
  { name: 'Mr. G. Mohana Prasath', role: 'Secretary', year: 'Super Senior', image: '/Office bearers/Mohana prasath.jpg' },
  { name: 'Mr. C. Udhay Karthik', role: 'Treasurer', year: 'Super Senior', image: '/Office bearers/Udhay Karthik.jpg' },
  { name: 'Mr. M. Dhilip', role: 'Executive Member', year: 'Super Senior', image: '/office/Dhilip.jpg' },
  { name: 'Ms. M. Hanushree', role: 'Executive Member', year: 'Super Senior', image: '/office/Hanushree.jpg' },
  { name: 'Mr. K. Rumesh Kumaran', role: 'Executive Member', year: 'Super Senior', image: '/office/Rumesh.jpg' },
  { name: 'Ms. T. Saarumathi', role: 'Executive Member', year: 'Super Senior', image: '/office/Saarumathi.jpg' },
  { name: 'Ms. B. Sharmila', role: 'Core Member', year: 'Super Senior', image: '/core/Sharmila.jpg' },
  { name: 'Mr. S. R. Chanthuru', role: 'Core Member', year: 'Super Senior', image: '/core/Chanthuru.jpg' },
  { name: 'Mr. R. Dharun Raj', role: 'Core Member', year: 'Super Senior', image: '/core/Dharun Raj.jpg' },
  { name: 'Ms. V. Shalini', role: 'Core Member', year: 'Super Senior', image: '/core/Shalini V.jpg' },
];

