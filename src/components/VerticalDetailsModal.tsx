import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  User,
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
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalItem } from '@/data/verticals';

interface VerticalDetailsModalProps {
  vertical: VerticalItem | null;
  onClose: () => void;
}

export const VerticalDetailsModal: React.FC<VerticalDetailsModalProps> = ({
  vertical,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision-mission' | 'outcomes' | 'focus' | 'achievement'>('overview');

  if (!vertical) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Banner Image with Gradient */}
          <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-950">
            <img
              src={vertical.image}
              alt={vertical.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/department-activity-calendar.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-700/60 backdrop-blur-sm shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Header Text */}
            <div className="absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 bg-indigo-600/90 text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Department Vertical
                </span>
                {vertical.verifiedAchievement && (
                  <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold text-xs rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-400" />
                    Verified MoU
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-md">
                {vertical.name}
              </h2>
              <p className="text-indigo-200 font-medium text-xs sm:text-sm drop-shadow-md mt-0.5">
                {vertical.fullName}
              </p>
            </div>
          </div>

          {/* Navigation Bar / Quick Info */}
          <div className="px-5 sm:px-6 py-3 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            {/* Staff In-charge Pill with Circle Photo */}
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-400/80 bg-slate-900 shrink-0 shadow-md ring-2 ring-amber-400/20">
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
                  Staff In-Charge
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-300">
                  {vertical.staffInCharge}
                </span>
              </div>
            </div>

            {/* Subdivisions Navigation Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Summary
              </button>
              <button
                onClick={() => setActiveTab('vision-mission')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  activeTab === 'vision-mission'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Vision & Mission
              </button>
              {vertical.overallOutcome && (
                <button
                  onClick={() => setActiveTab('outcomes')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    activeTab === 'outcomes'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  Overall Outcome
                </button>
              )}
              {vertical.keyAreas && vertical.keyAreas.length > 0 && (
                <button
                  onClick={() => setActiveTab('focus')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    activeTab === 'focus'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Key Areas
                </button>
              )}
              {vertical.verifiedAchievement && (
                <button
                  onClick={() => setActiveTab('achievement')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    activeTab === 'achievement'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/30'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  MoU & Achievements
                </button>
              )}
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-6 md:p-8 space-y-6 max-h-[58vh] overflow-y-auto">
            {/* Tab: Overview / Summary */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Vertical Overview & Scope
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                    {vertical.summary}
                  </p>
                </div>

                {/* Overall Outcome Highlight Box */}
                {vertical.overallOutcome && (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-800/80 to-slate-900 border border-indigo-500/40 shadow-lg">
                    <div className="flex items-center gap-2.5 mb-2.5 text-indigo-300 font-bold text-sm">
                      <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400 border border-indigo-500/30">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm sm:text-base font-extrabold text-white">
                        Overall Expected Outcome
                      </h5>
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed text-justify pl-1">
                      {vertical.overallOutcome}
                    </p>
                  </div>
                )}

                {/* Quick Highlights for Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-amber-500/30 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                      <Eye className="w-4 h-4" />
                      <h5>Vision</h5>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {vertical.vision}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-indigo-500/30 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
                      <Target className="w-4 h-4" />
                      <h5>Mission</h5>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {vertical.mission}
                    </p>
                  </div>
                </div>

                {/* Verified Achievement Preview if exists */}
                {vertical.verifiedAchievement && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3.5">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
                          Verified Achievement
                        </span>
                        <span className="text-[11px] text-emerald-300/80">
                          {vertical.verifiedAchievement.date}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white">
                        {vertical.verifiedAchievement.title}
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {vertical.verifiedAchievement.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab: Vision & Mission Detailed */}
            {activeTab === 'vision-mission' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Vision Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-800/60 to-slate-900 border border-amber-500/40 shadow-lg">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
                        Our Guiding Direction
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Vertical Vision
                      </h4>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-1 border-l-2 border-amber-400/60 ml-2 py-0.5 pl-3.5">
                    {vertical.vision}
                  </p>
                </div>

                {/* Mission Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/20 via-slate-800/60 to-slate-900 border border-indigo-500/40 shadow-lg">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/30">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 block">
                        Our Core Purpose & Commitments
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Vertical Mission
                      </h4>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-1 border-l-2 border-indigo-400/60 ml-2 py-0.5 pl-3.5">
                    {vertical.mission}
                  </p>
                </div>

                {/* Overall Outcome in Vision-Mission tab as well */}
                {vertical.overallOutcome && (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-slate-800/60 to-slate-900 border border-cyan-500/40 shadow-lg">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/30">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 block">
                          Impact & Student Capability
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          Overall Expected Outcome
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed pl-1 border-l-2 border-cyan-400/60 ml-2 py-0.5 pl-3.5">
                      {vertical.overallOutcome}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab: Overall Outcome Dedicated */}
            {activeTab === 'outcomes' && vertical.overallOutcome && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-800/80 to-slate-900 border border-indigo-500/50 shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-300 border border-indigo-500/40">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="px-3 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-full uppercase tracking-wider border border-indigo-500/30 inline-block mb-1">
                        Learning & Research Impact
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                        Overall Expected Outcome
                      </h4>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                    {vertical.overallOutcome}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab: Focus Areas & Facilities */}
            {activeTab === 'focus' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {vertical.keyAreas && vertical.keyAreas.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Key Technology & Research Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {vertical.keyAreas.map((area, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 bg-slate-800/50 rounded-xl border border-slate-700/60 text-xs sm:text-sm text-slate-200 hover:border-indigo-500/40 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="font-medium">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {vertical.equipmentOrFocus && vertical.equipmentOrFocus.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      Lab Resources & Infrastructure Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {vertical.equipmentOrFocus.map((eq, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 bg-slate-800/30 rounded-xl border border-slate-700/40 text-xs sm:text-sm text-slate-300"
                        >
                          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab: Achievement (e.g. CIC MoU) */}
            {activeTab === 'achievement' && vertical.verifiedAchievement && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-800/70 to-slate-900 border border-emerald-500/50 shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/40">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-full uppercase tracking-wider border border-emerald-500/30">
                        Official Department MoU
                      </span>
                      <h4 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                        {vertical.verifiedAchievement.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {vertical.verifiedAchievement.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {vertical.verifiedAchievement.date && (
                      <div className="flex items-center gap-2.5 p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                        <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Date & Time</span>
                          <span className="font-bold text-white">{vertical.verifiedAchievement.date}</span>
                        </div>
                      </div>
                    )}
                    {vertical.verifiedAchievement.venue && (
                      <div className="flex items-center gap-2.5 p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Venue</span>
                          <span className="font-bold text-white">{vertical.verifiedAchievement.venue}</span>
                        </div>
                      </div>
                    )}
                    {vertical.verifiedAchievement.partner && (
                      <div className="sm:col-span-2 flex items-center gap-2.5 p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                        <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Partner Organization</span>
                          <span className="font-bold text-emerald-300">{vertical.verifiedAchievement.partner}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer with Controls */}
          <div className="px-5 sm:px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Department of Computer Science and Engineering &bull; NEC
            </span>
            <Button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 rounded-xl ml-auto"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
