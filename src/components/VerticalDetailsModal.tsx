import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Layers,
  Eye,
  Target,
  Award,
  Calendar,
  MapPin,
  Building2,
  Sparkles,
  Cpu,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Microscope,
  Binary,
} from 'lucide-react';
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
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl shadow-indigo-950/60 overflow-hidden my-auto flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* =========================================================
              1. HERO BANNER & IDENTITY
              ========================================================= */}
          <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-950 shrink-0">
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
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-all duration-200 border border-white/15 backdrop-blur-md shadow-lg group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Banner Header Info */}
            <div className="absolute bottom-4 left-5 right-5 sm:left-8 sm:right-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-indigo-600/90 text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5 backdrop-blur-sm border border-indigo-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Department Vertical
                </span>
                {vertical.verifiedAchievement && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold text-xs rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    Verified MoU
                  </span>
                )}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                {vertical.name}
              </h2>
              <p className="text-indigo-200 font-medium text-sm sm:text-base md:text-lg drop-shadow-md mt-0.5">
                {vertical.fullName}
              </p>
            </div>
          </div>

          {/* =========================================================
              2. FACULTY LEAD & DOSSIER STRIP
              ========================================================= */}
          <div className="px-5 sm:px-8 py-3 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
            {/* Faculty In-Charge Spotlight */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/90 bg-slate-900 shrink-0 shadow-md ring-2 ring-amber-400/20">
                <img
                  src={vertical.staffImage}
                  alt={vertical.staffInCharge}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                  Faculty In-Charge & Vertical Lead
                </span>
                <span className="text-sm sm:text-base font-bold text-amber-300">
                  {vertical.staffInCharge}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Dept. of Computer Science & Engineering
                </span>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              {vertical.keyAreas && (
                <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center gap-1.5">
                  <Binary className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{vertical.keyAreas.length} Focus Domains</span>
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
          </div>

          {/* =========================================================
              4. MODAL CONTENT BODY
              ========================================================= */}
          <div className="p-5 sm:p-7 md:p-8 space-y-6 overflow-y-auto flex-1 text-slate-200">
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Detailed Summary Card */}
                <div className="bg-slate-800/50 p-6 sm:p-7 rounded-2xl border border-slate-700/80 shadow-inner">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Executive Summary & Domain Purpose
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify font-normal">
                    {vertical.summary}
                  </p>
                </div>

                {/* Key Pillars Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vision Preview */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-800/70 to-slate-900 border border-amber-500/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2.5">
                        <div className="p-1.5 bg-amber-500/10 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </div>
                        <h4>Guiding Vision</h4>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {vertical.vision}
                      </p>
                    </div>
                  </div>

                  {/* Outcome Preview */}
                  {vertical.overallOutcome && (
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-slate-800/70 to-slate-900 border border-indigo-500/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2.5">
                          <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <h4>Student & Research Impact</h4>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                          {vertical.overallOutcome}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Verified Achievement Banner */}
                {vertical.verifiedAchievement && (
                  <div 
                    onClick={() => setActiveTab('achievement')}
                    className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-800/80 to-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:border-emerald-400 transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-emerald-500/15 rounded-xl text-emerald-400 border border-emerald-500/30 shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider">
                            Verified Official Partnership
                          </span>
                          <span className="text-[11px] text-emerald-300/80">
                            &bull; {vertical.verifiedAchievement.date}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {vertical.verifiedAchievement.title}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">
                          {vertical.verifiedAchievement.partner}
                        </p>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white shrink-0 self-end sm:self-auto rounded-xl"
                    >
                      <span>View MoU Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB: VISION & MISSION */}
            {activeTab === 'vision-mission' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Vision Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-800/80 to-slate-900 border border-amber-500/40 shadow-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-500/15 rounded-xl text-amber-400 border border-amber-500/30 shadow-sm">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
                        Our Guiding Direction
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Vertical Vision
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2 pl-3 border-l-2 border-amber-400/60 ml-2">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      {vertical.vision}
                    </p>
                  </div>
                </div>

                {/* Mission Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-950/20 via-slate-800/80 to-slate-900 border border-indigo-500/40 shadow-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-500/15 rounded-xl text-indigo-400 border border-indigo-500/30 shadow-sm">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 block">
                        Our Core Purpose & Commitments
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Vertical Mission
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2 pl-3 border-l-2 border-indigo-400/60 ml-2">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      {vertical.mission}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: EXPECTED OUTCOMES */}
            {activeTab === 'outcomes' && vertical.overallOutcome && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-800/80 to-slate-900 border border-indigo-500/50 shadow-2xl space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-300 border border-indigo-500/40 shadow-inner">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="px-3 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-full uppercase tracking-wider border border-indigo-500/30 inline-block mb-1">
                        Learning, Research & Industry Readiness
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Overall Expected Outcome
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify font-normal pl-1">
                    {vertical.overallOutcome}
                  </p>
                </div>

                {/* Outcome Highlights Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      Prototype Incubation
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-violet-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      Higher Education & Research
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      Career Placement Readiness
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: DOMAINS & LAB FOCUS */}
            {activeTab === 'focus' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Key Technology Areas */}
                {vertical.keyAreas && vertical.keyAreas.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3.5 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Key Technology & Research Focus Areas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vertical.keyAreas.map((area, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-200 hover:border-indigo-500/50 hover:bg-slate-800 transition-all shadow-sm group"
                        >
                          <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="font-semibold">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Equipment & Lab Testbeds */}
                {vertical.equipmentOrFocus && vertical.equipmentOrFocus.length > 0 && (
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3.5 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      Lab Resources, Testbeds & Hardware Focus
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vertical.equipmentOrFocus.map((eq, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/50 text-xs sm:text-sm text-slate-300 hover:border-cyan-500/40 transition-colors"
                        >
                          <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-400">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB: MOU & RECOGNITION */}
            {activeTab === 'achievement' && vertical.verifiedAchievement && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-800/80 to-slate-900 border border-emerald-500/50 shadow-2xl space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 border border-emerald-500/40 shadow-inner">
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="px-3 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-full uppercase tracking-wider border border-emerald-500/30 inline-block mb-1">
                        Official Academic Collaboration
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {vertical.verifiedAchievement.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                    {vertical.verifiedAchievement.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {vertical.verifiedAchievement.date && (
                      <div className="flex items-center gap-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-300">
                        <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Signing Date & Time</span>
                          <span className="font-bold text-white">{vertical.verifiedAchievement.date}</span>
                        </div>
                      </div>
                    )}
                    {vertical.verifiedAchievement.venue && (
                      <div className="flex items-center gap-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-300">
                        <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Ceremony Venue</span>
                          <span className="font-bold text-white">{vertical.verifiedAchievement.venue}</span>
                        </div>
                      </div>
                    )}
                    {vertical.verifiedAchievement.partner && (
                      <div className="sm:col-span-2 flex items-center gap-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-300">
                        <Building2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Partner Healthcare & Research Organization</span>
                          <span className="font-bold text-emerald-300 text-sm">{vertical.verifiedAchievement.partner}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* =========================================================
              5. FOOTER CONTROLS
              ========================================================= */}
          <div className="px-5 sm:px-8 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Department of Computer Science and Engineering &bull; NEC (Autonomous)
            </span>
            <Button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 ml-auto transition-all"
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
