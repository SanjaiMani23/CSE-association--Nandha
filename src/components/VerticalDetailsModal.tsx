import React from 'react';
import { X, CheckCircle2, User, Layers, Target, Compass, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalItem } from '@/data/verticals';
import { cn } from '@/lib/utils';

interface VerticalDetailsModalProps {
  vertical: VerticalItem | null;
  onClose: () => void;
}

export const VerticalDetailsModal: React.FC<VerticalDetailsModalProps> = ({
  vertical,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision-mission' | 'outcomes' | 'focus' | 'achievement'>('overview');

  // Reset to overview when a new vertical is opened
  useEffect(() => {
    if (vertical) {
      setActiveTab('overview');
    }
  }, [vertical]);

  // Handle ESC key to close and lock body scroll
  useEffect(() => {
    if (!vertical) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vertical, onClose]);

  if (!vertical) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Top Banner Image */}
          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
            <img
              src={vertical.image}
              alt={vertical.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/department-activity-calendar.jpg';
              }}
            />
            {/* Multi-layered Gradients for Deep Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

            {/* Close Button Floating */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 bg-indigo-500/80 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                Department Vertical
              </span>
              <h2 className="text-3xl font-black text-white mt-1">
                {vertical.name}
              </h2>
              <p className="text-indigo-300 font-semibold text-sm">
                {vertical.fullName}
              </p>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 md:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <div className="flex items-center gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400 bg-amber-500/15 flex items-center justify-center text-amber-300 shrink-0 shadow-xs">
                {vertical.staffImage ? (
                  <img
                    src={vertical.staffImage}
                    alt={vertical.staffInCharge}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">
                  Staff In-charge
                </span>
                <span className="text-base font-extrabold text-amber-300">
                  {vertical.staffInCharge}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Dept. of Computer Science & Engineering
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                Summary
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {vertical.summary}
              </p>
            </div>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Vision
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{vertical.vision}"
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
                  <Target className="w-4 h-4" /> Mission
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {vertical.mission}
                </p>
              </div>
            </div>

            {/* Verified Achievement if any */}
            {vertical.verifiedAchievement && (
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Verified Achievement
                </h5>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {vertical.verifiedAchievement}
                </p>
              </div>
            )}

            {/* Key Focus Areas */}
            {vertical.focusAreas && vertical.focusAreas.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" /> Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {vertical.focusAreas.map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              )}
              {vertical.equipmentOrFocus && (
                <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{vertical.equipmentOrFocus.length} Lab Testbeds</span>
                </div>
              )}
            </div>
          </div>

          {/* =========================================================
              3. NAVIGATION TABS
              ========================================================= */}
          <div className="px-5 sm:px-8 py-2.5 bg-slate-900/95 border-b border-slate-800/80 overflow-x-auto shrink-0 flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={cn(
                "px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap",
                activeTab === 'overview'
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/70"
              )}
            >
              <BookOpen className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('vision-mission')}
              className={cn(
                "px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap",
                activeTab === 'vision-mission'
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/70"
              )}
            >
              <Target className="w-4 h-4" />
              <span>Vision & Mission</span>
            </button>

            {vertical.overallOutcome && (
              <button
                onClick={() => setActiveTab('outcomes')}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap",
                  activeTab === 'outcomes'
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/70"
                )}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Expected Outcomes</span>
              </button>
            )}

            {((vertical.keyAreas && vertical.keyAreas.length > 0) || (vertical.equipmentOrFocus && vertical.equipmentOrFocus.length > 0)) && (
              <button
                onClick={() => setActiveTab('focus')}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap",
                  activeTab === 'focus'
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/70"
                )}
              >
                <Layers className="w-4 h-4" />
                <span>Domains & Labs</span>
              </button>
            )}

            {vertical.verifiedAchievement && (
              <button
                onClick={() => setActiveTab('achievement')}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ml-auto",
                  activeTab === 'achievement'
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-bold"
                    : "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/30"
                )}
              >
                <Award className="w-4 h-4" />
                <span>MoU & Recognition</span>
              </button>
            )}

            {/* Overall Outcome */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1.5">
                Overall Outcome
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {vertical.outcome}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
            <Button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-xl text-xs font-bold"
            >
              Done / Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VerticalDetailsModal;
