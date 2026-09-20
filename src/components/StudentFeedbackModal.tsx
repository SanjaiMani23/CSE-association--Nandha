import React, { useState, useEffect } from 'react';
import { X, Send, Lock, UserCheck, AlertCircle, CheckCircle2, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { feedbackStore, FeedbackCategory } from '@/data/feedbackStore';
import { toast } from 'sonner';

interface StudentFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: FeedbackCategory[] = [
  'Academic / Curriculum',
  'Lab & Computing Infrastructure',
  'Association Event Idea',
  'Vertical Project Support',
  'General Grievance',
  'Other',
];

export const StudentFeedbackModal: React.FC<StudentFeedbackModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [session, setSession] = useState<{ studentName: string; studentId: string; email: string } | null>(null);

  // Auth form state
  const [authName, setAuthName] = useState('');
  const [authId, setAuthId] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authError, setAuthError] = useState('');

  // Feedback form state
  const [category, setCategory] = useState<FeedbackCategory>('Association Event Idea');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const activeSession = feedbackStore.getStudentSession();
      setSession(activeSession);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStudentAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!authName.trim() || !authId.trim() || !authEmail.trim()) {
      setAuthError('Please fill in your name, student ID, and college email address.');
      return;
    }

    const newSession = {
      studentName: authName.trim(),
      studentId: authId.trim().toUpperCase(),
      email: authEmail.trim(),
    };
    feedbackStore.setStudentSession(newSession);
    setSession(newSession);
    toast.success('Student verified successfully! You can now submit your feedback.');
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;
    if (!subject.trim() || !message.trim()) {
      toast.error('Please enter a subject and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      feedbackStore.submitFeedback({
        studentName: session.studentName,
        studentId: session.studentId,
        email: session.email,
        category,
        subject: subject.trim(),
        message: message.trim(),
        attachmentName: attachmentName.trim() || undefined,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Your message has been securely submitted to the Student Coordinators.');
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubject('');
    setMessage('');
    setAttachmentName('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl text-white">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Student Feedback & Issue Reporting
                </h3>
                <p className="text-xs text-slate-400">
                  Confidential communication with Student Coordinators
                </p>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  Submission Received!
                </h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong>{session?.studentName}</strong>. Your feedback has been registered securely. The CSE Association Student Coordinators will review it promptly.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={handleResetAndClose}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-8"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : !session ? (
              /* Step 1: Student Verification */
              <div>
                <div className="mb-5 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-slate-300">
                  <strong className="text-indigo-300 block mb-1">Student Verification Required</strong>
                  Normal website browsing is public. To prevent spam and ensure coordinator follow-up, please authenticate with your student details before submitting feedback.
                </div>

                {authError && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={handleStudentAuth} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      placeholder="e.g. S. Dharanidharan"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Student ID / Roll No *
                      </label>
                      <input
                        type="text"
                        required
                        value={authId}
                        onChange={(e) => setAuthId(e.target.value)}
                        placeholder="e.g. 23CS042"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        College Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        placeholder="student@nandhaengg.org"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={onClose}
                      className="text-slate-400 hover:text-white"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-6"
                    >
                      <UserCheck className="w-4 h-4 mr-2" /> Verify & Continue
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              /* Step 2: Submission Form */
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Logged in as: <strong>{session.studentName}</strong> ({session.studentId})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      feedbackStore.clearStudentSession();
                      setSession(null);
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Switch User
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as FeedbackCategory)}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Concise summary of your query or suggestion"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide detailed description of the feedback, proposal, or issue..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Optional Attachment / Link Reference
                  </label>
                  <div className="relative">
                    <Paperclip className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={attachmentName}
                      onChange={(e) => setAttachmentName(e.target.value)}
                      placeholder="Google Drive link, document name, or screenshot URL"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleResetAndClose}
                    className="text-slate-400 hover:text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Submit Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
