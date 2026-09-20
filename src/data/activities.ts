export interface ActivityItem {
  id: string;
  title: string;
  date: string;       // e.g. "2026-03-22"
  displayDate: string;// e.g. "March 22, 2026"
  month: string;      // e.g. "March 2026"
  time: string;       // e.g. "10:00 AM - 12:30 PM"
  venue: string;      // e.g. "CSE Seminar Hall"
  category: 'Workshop' | 'Seminar' | 'Competition' | 'Meeting' | 'Review' | 'General';
  speakerOrIncharge?: string;
  description: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
}

/**
 * Activity Calendar Data
 * Note: Real activity calendar data will be updated from the official calendar document.
 * This structure enables instant updates without altering UI code.
 */
export const activitiesData: ActivityItem[] = [
  {
    id: 'act-01',
    title: 'Association Inauguration & Orientation 2026–27',
    date: '2026-02-10',
    displayDate: 'February 10, 2026',
    month: 'February 2026',
    time: '10:00 AM - 12:30 PM',
    venue: 'Department Auditorium',
    category: 'General',
    speakerOrIncharge: 'HoD & Association Incharges',
    description: 'Official launch of CSE Association activities for the academic year 2026–27, introducing new vertical leads, office bearers, and annual roadmap.',
    status: 'Completed',
  },
  {
    id: 'act-02',
    title: 'RIC Project Pitch & Ideation Session',
    date: '2026-02-24',
    displayDate: 'February 24, 2026',
    month: 'February 2026',
    time: '02:00 PM - 04:30 PM',
    venue: 'Crevation Lab',
    category: 'Workshop',
    speakerOrIncharge: 'Praveenkumar (Staff In-charge, RIC)',
    description: 'Initial brainstorming and project formulation session for student researchers focusing on robotics, automation, and applied AI problem statements.',
    status: 'Completed',
  },
  {
    id: 'act-03',
    title: 'GenAI Practical Bootcamp - Session 1',
    date: '2026-03-12',
    displayDate: 'March 12, 2026',
    month: 'March 2026',
    time: '09:30 AM - 01:00 PM',
    venue: 'Center for Intelligent Computing Lab',
    category: 'Workshop',
    speakerOrIncharge: 'Thiruvenkatasuresh (Staff In-charge, GenAI)',
    description: 'Hands-on experimentation with open weights models, transformer architecture deep-dive, and building retrieval-augmented generation (RAG) pipelines.',
    status: 'Scheduled',
  },
  {
    id: 'act-04',
    title: "SyNECtics'26 Preparation & Technical Scrutiny",
    date: '2026-03-16',
    displayDate: 'March 16, 2026',
    month: 'March 2026',
    time: '03:00 PM - 05:00 PM',
    venue: 'CSE Conference Hall',
    category: 'Meeting',
    speakerOrIncharge: 'Student Coordinators & Committee',
    description: 'Comprehensive review of symposium event tracks, rulebooks, jury assignments, and logistical arrangements.',
    status: 'Scheduled',
  },
  {
    id: 'act-05',
    title: 'AR/VR Immersive Experience Expo',
    date: '2026-04-10',
    displayDate: 'April 10, 2026',
    month: 'April 2026',
    time: '10:00 AM - 04:00 PM',
    venue: 'Virtual Reality Station / CSE Block',
    category: 'Workshop',
    speakerOrIncharge: 'Easwari (Staff In-charge, AV/VR)',
    description: 'Interactive exhibition demonstrating student-developed virtual tours, spatial simulations, and augmented reality educational tools.',
    status: 'Scheduled',
  },
  {
    id: 'act-06',
    title: 'Crevation Lab Prototype Showcase & Peer Review',
    date: '2026-04-25',
    displayDate: 'April 25, 2026',
    month: 'April 2026',
    time: '01:30 PM - 04:30 PM',
    venue: 'Crevation Lab',
    category: 'Review',
    speakerOrIncharge: 'HoD (Staff In-charge, Crevation Lab)',
    description: 'Mid-term prototype demonstrations and technical evaluation of student inventions, hardware-software embedded systems, and startup ideas.',
    status: 'Scheduled',
  },
];
