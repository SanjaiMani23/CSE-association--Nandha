import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle,
  Mail,
  User,
  ExternalLink,
  MessageSquare,
  LogOut,
  Calendar,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { feedbackStore, StudentFeedback, FeedbackStatus } from '@/data/feedbackStore';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export const CoordinatorDashboard: React.FC = () => {
  // Coordinator authentication barrier (Passcode protected)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Messages state
  const [feedbacks, setFeedbacks] = useState<StudentFeedback[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | FeedbackStatus>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [selectedFeedback, setSelectedFeedback] = useState<StudentFeedback | null>(null);
  const [coordinatorNote, setCoordinatorNote] = useState('');

  useEffect(() => {
    // Check session
    const coordinatorSession = sessionStorage.getItem('cse_coordinator_auth');
    if (coordinatorSession === 'true') {
      setIsAuthenticated(true);
      loadFeedbacks();
    }
  }, []);

  const loadFeedbacks = () => {
    setFeedbacks(feedbackStore.getFeedbacks());
  };

  const handleCoordinatorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default coordinator access code: cse2026 or coordinator
    if (passcode.trim().toLowerCase() === 'cse2026' || passcode.trim().toLowerCase() === 'admin' || passcode.trim().toLowerCase() === 'coordinator') {
      sessionStorage.setItem('cse_coordinator_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
      loadFeedbacks();
      toast.success('Welcome to the Coordinator Message Management Portal!');
    } else {
      setAuthError('Invalid coordinator passcode. (Default: cse2026)');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('cse_coordinator_auth');
    setIsAuthenticated(false);
    toast.info('Logged out of coordinator management.');
  };

  const handleStatusChange = (id: string, newStatus: FeedbackStatus) => {
    const success = feedbackStore.updateFeedbackStatus(id, newStatus, coordinatorNote || undefined);
    if (success) {
      loadFeedbacks();
      if (selectedFeedback && selectedFeedback.id === id) {
        setSelectedFeedback(prev => prev ? { ...prev, status: newStatus, coordinatorNote: coordinatorNote || prev.coordinatorNote } : null);
      }
      toast.success(`Message marked as ${newStatus}`);
    }
  };

  // Filtering
  const filteredFeedbacks = feedbacks.filter((fb) => {
    const matchesSearch =
      fb.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fb.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fb.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fb.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || fb.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || fb.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-[85vh]">
        {!isAuthenticated ? (
          /* Authentication Gate */
          <div className="max-w-md mx-auto my-16 bg-slate-900 border border-indigo-500/40 rounded-2xl p-8 shadow-2xl">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-center text-white mb-2">
              Coordinator Portal
            </h2>
            <p className="text-slate-400 text-sm text-center mb-6">
              Restricted management console for CSE Association student coordinators and faculty in-charges.
            </p>

            {authError && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center">
                {authError}
              </div>
            )}

            <form onSubmit={handleCoordinatorLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Coordinator Passcode
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="password"
                    required
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter passcode (e.g. cse2026)"
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Demo Passcode: <code className="text-indigo-400">cse2026</code>
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium py-2.5 rounded-xl shadow-lg"
              >
                Enter Management Console
              </Button>
            </form>
          </div>
        ) : (
          /* Coordinator Dashboard */
          <div>
            {/* Header bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider">
                    Coordinator Console
                  </span>
                  <span className="text-xs text-slate-400">CSE Association 2026–27</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white mt-1">
                  Student Feedback & Issue Management
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-slate-400 block">Total Messages</span>
                  <span className="text-lg font-bold text-indigo-400">{feedbacks.length}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              </div>
            </div>

            {/* Filter and search bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative col-span-1 sm:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by student name, ID, subject, or keywords..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="All">All Categories</option>
                  <option value="Academic / Curriculum">Academic / Curriculum</option>
                  <option value="Lab & Computing Infrastructure">Lab & Computing Infrastructure</option>
                  <option value="Association Event Idea">Association Event Idea</option>
                  <option value="Vertical Project Support">Vertical Project Support</option>
                  <option value="General Grievance">General Grievance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Messages list */}
            {filteredFeedbacks.length === 0 ? (
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
                <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">No Messages Found</h3>
                <p className="text-slate-400 text-sm">
                  There are no student submissions matching your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFeedbacks.map((fb) => (
                  <motion.div
                    key={fb.id}
                    layout
                    onClick={() => {
                      setSelectedFeedback(fb);
                      setCoordinatorNote(fb.coordinatorNote || '');
                    }}
                    className={cn(
                      'cursor-pointer bg-slate-800/60 hover:bg-slate-800 border rounded-xl p-5 transition-all shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4',
                      selectedFeedback?.id === fb.id
                        ? 'border-indigo-500 ring-1 ring-indigo-500'
                        : 'border-slate-700 hover:border-slate-600'
                    )}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={cn(
                            'text-xs px-2.5 py-0.5 rounded-full font-semibold',
                            fb.status === 'New' && 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
                            fb.status === 'In Progress' && 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
                            fb.status === 'Resolved' && 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          )}
                        >
                          {fb.status}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
                          {fb.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(fb.submittedAt).toLocaleDateString()} {new Date(fb.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-1">
                        {fb.subject}
                      </h3>
                      <p className="text-sm text-slate-300 line-clamp-1 mb-2">
                        {fb.message}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1 text-indigo-300 font-medium">
                          <User className="w-3.5 h-3.5" />
                          {fb.studentName} ({fb.studentId})
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          {fb.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFeedback(fb);
                          setCoordinatorNote(fb.coordinatorNote || '');
                        }}
                        className="border-slate-700 text-slate-300 hover:text-white"
                      >
                        Inspect & Update
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Message Details Modal */}
            <AnimatePresence>
              {selectedFeedback && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] flex flex-col"
                  >
                    <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">
                            {selectedFeedback.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            Ticket #{selectedFeedback.id}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-white">
                          {selectedFeedback.subject}
                        </h2>
                      </div>
                      <button
                        onClick={() => setSelectedFeedback(null)}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 space-y-6">
                      {/* Student info card */}
                      <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-slate-400 block">Student Name:</span>
                          <strong className="text-white text-sm">{selectedFeedback.studentName}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Roll No / ID:</span>
                          <strong className="text-indigo-300 text-sm">{selectedFeedback.studentId}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Email Address:</span>
                          <a href={`mailto:${selectedFeedback.email}`} className="text-indigo-400 underline block truncate">
                            {selectedFeedback.email}
                          </a>
                        </div>
                      </div>

                      {/* Message Body */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          Message Content
                        </h4>
                        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                          {selectedFeedback.message}
                        </div>
                      </div>

                      {selectedFeedback.attachmentName && (
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                            Attachment / Reference Link
                          </h4>
                          <a
                            href={selectedFeedback.attachmentName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {selectedFeedback.attachmentName}
                          </a>
                        </div>
                      )}

                      {/* Status Management */}
                      <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/40">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                          Update Ticket Status
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(['New', 'In Progress', 'Resolved'] as FeedbackStatus[]).map((status) => (
                            <button
                              key={status}
                              onClick={() => handleStatusChange(selectedFeedback.id, status)}
                              className={cn(
                                'px-4 py-2 rounded-lg text-xs font-bold transition-all',
                                selectedFeedback.status === status
                                  ? 'bg-indigo-600 text-white shadow-lg'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                              )}
                            >
                              Mark {status}
                            </button>
                          ))}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">
                            Coordinator Internal Note (Optional):
                          </label>
                          <input
                            type="text"
                            value={coordinatorNote}
                            onChange={(e) => setCoordinatorNote(e.target.value)}
                            placeholder="Add action taken or assignment note..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex justify-end">
                      <Button
                        onClick={() => setSelectedFeedback(null)}
                        className="bg-slate-800 hover:bg-slate-700 text-white"
                      >
                        Done
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CoordinatorDashboard;
