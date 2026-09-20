export type FeedbackCategory =
  | 'Academic / Curriculum'
  | 'Lab & Computing Infrastructure'
  | 'Association Event Idea'
  | 'Vertical Project Support'
  | 'General Grievance'
  | 'Other';

export type FeedbackStatus = 'New' | 'In Progress' | 'Resolved';

export interface StudentFeedback {
  id: string;
  studentName: string;
  studentId: string; // Roll number or registration number
  email: string;
  category: FeedbackCategory;
  subject: string;
  message: string;
  attachmentName?: string;
  status: FeedbackStatus;
  submittedAt: string; // ISO string
  coordinatorNote?: string;
}

const STORAGE_KEY = 'cse_association_student_feedback_v1';
const AUTH_KEY = 'cse_association_student_session';

const INITIAL_FEEDBACK: StudentFeedback[] = [
  {
    id: 'fb-101',
    studentName: 'Aravind K',
    studentId: '22CS014',
    email: 'aravind.22cs@nandhaengg.org',
    category: 'Vertical Project Support',
    subject: 'Request for GPU time allocation for GenAI Vertical RAG Project',
    message: 'Our project group is developing a multilingual campus chatbot in the GenAI vertical. We request dedicated GPU slots on the CIC server for model inference and evaluation.',
    status: 'In Progress',
    submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    coordinatorNote: 'Assigned to Thiruvenkatasuresh sir for lab slot allocation.',
  },
  {
    id: 'fb-102',
    studentName: 'Kavitha S',
    studentId: '23CS058',
    email: 'kavitha.23cs@nandhaengg.org',
    category: 'Association Event Idea',
    subject: 'Proposal to host an intra-department UI/UX Designathon',
    message: 'Many 2nd and 3rd year students are keen on product design and web interfaces. Hosting a fast-paced 6-hour Figma designathon before SyNECtics will boost student participation.',
    status: 'New',
    submittedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: 'fb-103',
    studentName: 'Praveen M',
    studentId: '21CS092',
    email: 'praveen.21cs@nandhaengg.org',
    category: 'Lab & Computing Infrastructure',
    subject: 'Crevation Lab 3D Printer filament replenishment',
    message: 'PLA filament spool in the Crevation Lab rapid prototyping unit is running low. Please arrange replenishment for ongoing student hardware project casings.',
    status: 'Resolved',
    submittedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    coordinatorNote: 'New spools stocked and available in lab cabinet 2.',
  },
];

export const feedbackStore = {
  getFeedbacks: (): StudentFeedback[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_FEEDBACK));
        return INITIAL_FEEDBACK;
      }
      return JSON.parse(stored);
    } catch {
      return INITIAL_FEEDBACK;
    }
  },

  submitFeedback: (feedback: Omit<StudentFeedback, 'id' | 'status' | 'submittedAt'>): StudentFeedback => {
    const feedbacks = feedbackStore.getFeedbacks();
    const newFeedback: StudentFeedback = {
      ...feedback,
      id: `fb-${Date.now().toString().slice(-6)}`,
      status: 'New',
      submittedAt: new Date().toISOString(),
    };
    const updated = [newFeedback, ...feedbacks];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return newFeedback;
  },

  updateFeedbackStatus: (id: string, status: FeedbackStatus, note?: string): boolean => {
    const feedbacks = feedbackStore.getFeedbacks();
    const index = feedbacks.findIndex(item => item.id === id);
    if (index === -1) return false;
    feedbacks[index].status = status;
    if (note !== undefined) {
      feedbacks[index].coordinatorNote = note;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
      return true;
    } catch {
      return false;
    }
  },

  // Student authentication state for feedback submission only
  getStudentSession: (): { studentName: string; studentId: string; email: string } | null => {
    try {
      const session = sessionStorage.getItem(AUTH_KEY);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  },

  setStudentSession: (student: { studentName: string; studentId: string; email: string }) => {
    try {
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(student));
    } catch (e) {
      console.warn(e);
    }
  },

  clearStudentSession: () => {
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch (e) {
      console.warn(e);
    }
  },
};
