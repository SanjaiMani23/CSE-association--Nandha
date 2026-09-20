import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronRight,
  Filter,
  X,
  Cpu,
  Users,
  Briefcase,
  Sparkles,
  Download,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  CalendarDays,
  Map,
  ImageIcon,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  calendarMilestones,
  calendarCategories,
  allCalendarEvents,
  CalendarEvent,
  CalendarMilestone,
  ActivityCategory,
} from '@/data/activities';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActivityCalendarProps {
  previewOnly?: boolean;
}

export const ActivityCalendar: React.FC<ActivityCalendarProps> = ({ previewOnly = false }) => {
  // Navigation / View modes
  const [activeView, setActiveView] = useState<'roadmap' | 'grid' | 'poster'>('roadmap');
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'All'>('All');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [posterZoom, setPosterZoom] = useState(1);

  // Filter events based on active category
  const filterEvents = (events: CalendarEvent[]) => {
    if (selectedCategory === 'All') return events;
    return events.filter(e => e.category === selectedCategory);
  };

  // Helper for category icon
  const getCategoryIcon = (category: ActivityCategory, className: string = 'w-4 h-4') => {
    switch (category) {
      case 'Technical':
        return <Cpu className={className} />;
      case 'Student Engagement':
        return <Users className={className} />;
      case 'Career & Industry':
        return <Briefcase className={className} />;
      case 'Social & Culture':
        return <Sparkles className={className} />;
      default:
        return <CalendarIcon className={className} />;
    }
  };

  // Helper for category badge styling
  const getCategoryBadgeClass = (category: ActivityCategory) => {
    switch (category) {
      case 'Technical':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Student Engagement':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Career & Industry':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Social & Culture':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
    }
  };

  // Helper to generate Google Calendar URL
  const getGoogleCalendarUrl = (event: CalendarEvent) => {
    const text = encodeURIComponent(`NEC CSE: ${event.title}`);
    const details = encodeURIComponent(`${event.description}\n\nCategory: ${event.category}\nTarget: ${event.targetAudience || 'CSE Department'}\nVenue: ${event.venue || 'CSE Dept'}`);
    const location = encodeURIComponent(event.venue || 'Nandha Engineering College, Erode');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
  };

  // If previewOnly is true (used on Home Page)
  if (previewOnly) {
    const previewMilestones = calendarMilestones.slice(0, 2);
    return (
      <div className="w-full space-y-8">
        {/* Banner with Official Image Preview teaser */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/30 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Academic Year 2026–2027 Official Calendar
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Department Activity Roadmap
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              From Association Launch and SIH Hackathons to National Symposium Synetics and Annual Days. Explore the complete 8-month serpentine schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setIsPosterModalOpen(true)}
              variant="outline"
              className="bg-slate-900/80 hover:bg-slate-800 text-indigo-300 border-indigo-500/50 hover:border-indigo-400 gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Official Poster</span>
            </Button>
            <a
              href="/images/department-activity-calendar.jpg"
              download="Nandha-CSE-Activity-Calendar-2026-27.jpg"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Poster</span>
            </a>
          </div>
        </div>

        {/* 2-Milestone Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewMilestones.map((m) => (
            <div
              key={m.number}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 hover:border-indigo-500/50 rounded-2xl p-6 transition-all shadow-lg"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center font-bold text-white text-base">
                    {m.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-wide">
                      {m.rawMonth}
                    </h4>
                    <p className="text-xs text-indigo-300 font-medium">
                      {m.theme}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {m.events.length} Events
                </span>
              </div>

              <div className="space-y-3">
                {m.events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="p-3 rounded-xl bg-slate-950/60 hover:bg-indigo-950/40 border border-slate-800/80 hover:border-indigo-500/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-16 px-2 py-1 rounded-md text-xs font-bold text-center bg-slate-800 text-indigo-300 border border-slate-700 shrink-0">
                        {event.date}
                      </span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white truncate">
                        {event.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transform group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Legend Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {calendarCategories.map((cat) => (
            <div
              key={cat.name}
              className={cn(
                'p-3.5 rounded-xl border flex items-center gap-3 bg-slate-900/60 backdrop-blur-sm',
                cat.borderClass
              )}
            >
              <div className={cn('p-2 rounded-lg shrink-0', cat.bgClass, cat.textClass)}>
                {getCategoryIcon(cat.name, 'w-4 h-4')}
              </div>
              <div className="min-w-0">
                <div className={cn('text-xs font-bold leading-tight truncate', cat.textClass)}>
                  {cat.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {allCalendarEvents.filter(e => e.category === cat.name).length} Activities
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {renderDetailModal()}

        {/* Poster Lightbox Modal */}
        {renderPosterLightbox()}
      </div>
    );
  }

  // Full Activity Calendar Section
  return (
    <div className="w-full space-y-8" id="calendar">
      {/* College Institutional Banner Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/80 p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 p-2 flex items-center justify-center shrink-0 shadow-inner">
              <img
                src="/logo/logocse.png"
                alt="CSE Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 mb-1">
                Autonomous • Erode - 52
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                NANDHA ENGINEERING COLLEGE
              </h3>
              <p className="text-sm font-semibold text-cyan-400">
                Department of Computer Science and Engineering
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => setIsPosterModalOpen(true)}
              className="bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Official Poster</span>
            </Button>
            <a
              href="/images/department-activity-calendar.jpg"
              download="Nandha-CSE-Activity-Calendar-2026-27.jpg"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Calendar</span>
            </a>
          </div>
        </div>

        {/* View Switcher Tabs & Category Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* View Modes */}
          <div className="flex items-center bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveView('roadmap')}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                activeView === 'roadmap'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              <Map className="w-4 h-4" />
              <span>Roadmap Path View</span>
            </button>
            <button
              onClick={() => setActiveView('grid')}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                activeView === 'grid'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Monthly Grid View</span>
            </button>
            <button
              onClick={() => setActiveView('poster')}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                activeView === 'poster'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Official Poster</span>
            </button>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all',
                selectedCategory === 'All'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              )}
            >
              All Events ({allCalendarEvents.length})
            </button>
            {calendarCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? 'All' : cat.name)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border',
                  selectedCategory === cat.name
                    ? `${cat.bgClass} ${cat.textClass} ${cat.borderClass} ring-2 ring-indigo-500/50`
                    : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                )}
              >
                {getCategoryIcon(cat.name, 'w-3.5 h-3.5')}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIEW 1: SERPENTINE ROADMAP PATH (Matching the image layout) */}
      {activeView === 'roadmap' && (
        <div className="relative w-full py-6">
          {/* Legend Banner at top of roadmap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {calendarCategories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? 'All' : cat.name)}
                className={cn(
                  'p-4 rounded-2xl border transition-all cursor-pointer bg-slate-900/70 backdrop-blur-md hover:scale-[1.02]',
                  cat.borderClass,
                  selectedCategory === cat.name ? 'ring-2 ring-indigo-400 bg-slate-900' : ''
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn('p-2.5 rounded-xl', cat.bgClass, cat.textClass)}>
                    {getCategoryIcon(cat.name, 'w-5 h-5')}
                  </div>
                  <div>
                    <h5 className={cn('font-bold text-sm leading-snug', cat.textClass)}>
                      {cat.name}
                    </h5>
                    <span className="text-[11px] text-slate-400">
                      {allCalendarEvents.filter(e => e.category === cat.name).length} Activities
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Serpentine Road Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Winding Road Background SVG (for lg screens) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-48 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 192 3400"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="roadGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Road bed shadow & glow */}
                <path
                  d="M 96 30 
                     C 30 180, 30 280, 96 440 
                     C 162 600, 162 700, 96 860 
                     C 30 1020, 30 1120, 96 1280 
                     C 162 1440, 162 1540, 96 1700 
                     C 30 1860, 30 1960, 96 2120 
                     C 162 2280, 162 2380, 96 2540 
                     C 30 2700, 30 2800, 96 2960 
                     C 162 3120, 162 3200, 96 3320
                     L 96 3370"
                  stroke="#1e293b"
                  strokeWidth="56"
                  strokeLinecap="round"
                />

                {/* Road surface gradient */}
                <path
                  d="M 96 30 
                     C 30 180, 30 280, 96 440 
                     C 162 600, 162 700, 96 860 
                     C 30 1020, 30 1120, 96 1280 
                     C 162 1440, 162 1540, 96 1700 
                     C 30 1860, 30 1960, 96 2120 
                     C 162 2280, 162 2380, 96 2540 
                     C 30 2700, 30 2800, 96 2960 
                     C 162 3120, 162 3200, 96 3320
                     L 96 3370"
                  stroke="#0f172a"
                  strokeWidth="44"
                  strokeLinecap="round"
                />

                {/* Glowing borders */}
                <path
                  d="M 96 30 
                     C 30 180, 30 280, 96 440 
                     C 162 600, 162 700, 96 860 
                     C 30 1020, 30 1120, 96 1280 
                     C 162 1440, 162 1540, 96 1700 
                     C 30 1860, 30 1960, 96 2120 
                     C 162 2280, 162 2380, 96 2540 
                     C 30 2700, 30 2800, 96 2960 
                     C 162 3120, 162 3200, 96 3320
                     L 96 3370"
                  stroke="url(#roadGlow)"
                  strokeWidth="46"
                  strokeLinecap="round"
                  opacity="0.25"
                />

                {/* Dashed white center line */}
                <path
                  d="M 96 30 
                     C 30 180, 30 280, 96 440 
                     C 162 600, 162 700, 96 860 
                     C 30 1020, 30 1120, 96 1280 
                     C 162 1440, 162 1540, 96 1700 
                     C 30 1860, 30 1960, 96 2120 
                     C 162 2280, 162 2380, 96 2540 
                     C 30 2700, 30 2800, 96 2960 
                     C 162 3120, 162 3200, 96 3320
                     L 96 3370"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeDasharray="12 12"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Arrowhead at the bottom */}
                <polygon
                  points="96,3395 76,3350 116,3350"
                  fill="#06b6d4"
                />
              </svg>
            </div>

            {/* Mobile/Tablet Vertical Guide Line */}
            <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-cyan-400 opacity-40 z-0" />

            {/* Milestones 1 to 8 */}
            <div className="space-y-12 sm:space-y-16 relative z-10">
              {calendarMilestones.map((milestone) => {
                const isLeft = milestone.number % 2 !== 0; // 1, 3, 5, 7 on Left; 2, 4, 6, 8 on Right
                const matchingEvents = filterEvents(milestone.events);

                return (
                  <div
                    key={milestone.number}
                    className="relative flex flex-col lg:flex-row items-center justify-between gap-6"
                  >
                    {/* LEFT COLUMN (For odd milestones on desktop) */}
                    <div className={cn(
                      'w-full lg:w-[45%]',
                      isLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-3 lg:invisible'
                    )}>
                      {isLeft && renderMilestoneCard(milestone, matchingEvents, isLeft)}
                    </div>

                    {/* CENTER NUMBER BADGE (1 to 8) */}
                    <div className="order-1 lg:order-2 shrink-0 self-start sm:self-center pl-2 sm:pl-0">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={cn(
                          'w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-xl sm:text-2xl shadow-xl transition-all relative border-4',
                          milestone.badgeTone === 'blue'
                            ? 'bg-slate-950 text-white border-cyan-400 shadow-cyan-500/40'
                            : 'bg-slate-950 text-white border-amber-400 shadow-amber-500/40'
                        )}
                      >
                        <span className="font-mono">{milestone.number}</span>
                        {/* Ping radar effect on milestone 1 (current) */}
                        {milestone.number === 1 && (
                          <span className="absolute -inset-1 rounded-full border border-cyan-400 animate-ping opacity-50 pointer-events-none" />
                        )}
                      </motion.div>
                    </div>

                    {/* RIGHT COLUMN (For even milestones on desktop) */}
                    <div className={cn(
                      'w-full lg:w-[45%]',
                      !isLeft ? 'order-3 lg:order-3' : 'order-3 lg:order-1 lg:invisible'
                    )}>
                      {!isLeft && renderMilestoneCard(milestone, matchingEvents, isLeft)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: MONTHLY GRID VIEW (Tabbed Cards) */}
      {activeView === 'grid' && (
        <div className="space-y-8">
          {/* Month Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedMonth('All')}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
                selectedMonth === 'All'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              )}
            >
              All 8 Months
            </button>
            {calendarMilestones.map((m) => (
              <button
                key={m.number}
                onClick={() => setSelectedMonth(m.month)}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
                  selectedMonth === m.month
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                )}
              >
                {m.month.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedMonth === 'All'
              ? allCalendarEvents
              : allCalendarEvents.filter((e) => e.month === selectedMonth)
            )
              .filter((e) => selectedCategory === 'All' || e.category === selectedCategory)
              .map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-indigo-500/60 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-bold border', getCategoryBadgeClass(event.category))}>
                        {event.category}
                      </span>
                      <span className={cn(
                        'text-xs px-2 py-0.5 rounded-full font-medium border',
                        event.status === 'Completed'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      )}>
                        {event.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 mb-2">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{event.displayDate}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {event.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                    {event.targetAudience && (
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{event.targetAudience}</span>
                      </div>
                    )}
                    {event.venue && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2 text-indigo-400 font-semibold group-hover:text-indigo-300">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}

      {/* VIEW 3: OFFICIAL POSTER VIEW */}
      {activeView === 'poster' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-2xl">
          <div className="text-center max-w-2xl mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 inline-block mb-3">
              Official Document
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Official Activity Calendar Poster
            </h3>
            <p className="text-sm text-slate-300">
              Department of Computer Science and Engineering • Nandha Engineering College (Autonomous)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Button
              onClick={() => setIsPosterModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Open in Fullscreen Zoom</span>
            </Button>
            <a
              href="/images/department-activity-calendar.jpg"
              download="Nandha-CSE-Activity-Calendar-2026-27.jpg"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Original File (JPG)</span>
            </a>
          </div>

          <div
            onClick={() => setIsPosterModalOpen(true)}
            className="group relative max-w-2xl w-full rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-cyan-400 cursor-pointer shadow-2xl transition-all"
          >
            <img
              src="/images/department-activity-calendar.jpg"
              alt="Department Activity Calendar"
              className="w-full h-auto object-contain bg-slate-950 transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-xs">
              <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-white font-semibold text-sm border border-cyan-400 flex items-center gap-2 shadow-xl">
                <ZoomIn className="w-4 h-4 text-cyan-400" />
                Click to Expand & Zoom
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Render Modals */}
      {renderDetailModal()}
      {renderPosterLightbox()}
    </div>
  );

  // Helper renderer for each Milestone Card in Roadmap View
  function renderMilestoneCard(
    milestone: CalendarMilestone,
    events: CalendarEvent[],
    isLeft: boolean
  ) {
    const isAmber = milestone.badgeTone === 'amber';

    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cn(
          'w-full bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border shadow-2xl transition-all duration-300 relative overflow-hidden group',
          isAmber
            ? 'border-amber-500/30 hover:border-amber-400/70 hover:shadow-amber-500/10'
            : 'border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-500/10'
        )}
      >
        {/* Glow ambient background */}
        <div
          className={cn(
            'absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20',
            isAmber ? 'bg-amber-500' : 'bg-cyan-500'
          )}
        />

        {/* Header matching image banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-wider font-mono">
              {milestone.rawMonth}
            </h4>
            <p className={cn(
              'text-xs font-bold tracking-wide uppercase mt-0.5',
              isAmber ? 'text-amber-400' : 'text-cyan-400'
            )}>
              {milestone.theme}
            </p>
          </div>

          <div className="shrink-0">
            <span
              className={cn(
                'px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5 border shadow-sm',
                isAmber
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
              )}
            >
              <CalendarIcon className="w-3 h-3" />
              DATES & EVENTS
            </span>
          </div>
        </div>

        {/* Events List */}
        {events.length === 0 ? (
          <div className="py-6 text-center text-xs text-slate-500 italic">
            No events matching current filter in {milestone.month}.
          </div>
        ) : (
          <div className="space-y-3">
            {events.map((event) => {
              const isPast = event.status === 'Completed';

              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={cn(
                    'p-3.5 rounded-2xl bg-slate-950/70 hover:bg-slate-950 border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 group/item',
                    isPast
                      ? 'border-slate-800/80 hover:border-emerald-500/50'
                      : isAmber
                      ? 'border-slate-800 hover:border-amber-500/50'
                      : 'border-slate-800 hover:border-cyan-500/50'
                  )}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Date Badge */}
                    <div
                      className={cn(
                        'w-16 px-2 py-1.5 rounded-xl text-center shrink-0 font-bold text-xs border flex flex-col items-center justify-center leading-tight shadow-inner',
                        isPast
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : isAmber
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      )}
                    >
                      <span className="font-mono text-sm">{event.date.split(' ')[0]}</span>
                      <span className="text-[10px] uppercase opacity-80">
                        {event.date.split(' ')[1] || 'DAY'}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div className="min-w-0 space-y-1">
                      <h5 className="text-sm font-bold text-slate-100 group-hover/item:text-white transition-colors leading-snug">
                        {event.title}
                      </h5>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={cn(
                            'text-[10px] px-2 py-0.5 rounded-full font-semibold border inline-flex items-center gap-1',
                            getCategoryBadgeClass(event.category)
                          )}
                        >
                          {getCategoryIcon(event.category, 'w-2.5 h-2.5')}
                          {event.category}
                        </span>

                        {event.targetAudience && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-slate-800 text-slate-300 border border-slate-700">
                            {event.targetAudience}
                          </span>
                        )}

                        {isPast && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1">
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover/item:text-indigo-400 transform group-hover/item:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    );
  }

  // Detail Modal popup when clicking any event
  function renderDetailModal() {
    return (
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-xl bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
                      Milestone {selectedEvent.milestoneNumber} • {selectedEvent.month}
                    </span>
                    <span className={cn('text-xs font-bold px-2.5 py-0.5 rounded-full border', getCategoryBadgeClass(selectedEvent.category))}>
                      {selectedEvent.category}
                    </span>
                    <span className={cn(
                      'text-xs px-2.5 py-0.5 rounded-full font-semibold border',
                      selectedEvent.status === 'Completed'
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                        : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                    )}>
                      {selectedEvent.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium mt-1">
                    Theme: {selectedEvent.theme}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Event Metadata card */}
              <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <CalendarIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Date:</strong> {selectedEvent.displayDate} ({selectedEvent.date})</span>
                </div>
                {selectedEvent.time && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span><strong>Time:</strong> {selectedEvent.time}</span>
                  </div>
                )}
                {selectedEvent.venue && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                    <span><strong>Venue:</strong> {selectedEvent.venue}</span>
                  </div>
                )}
                {selectedEvent.targetAudience && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Target Audience:</strong> {selectedEvent.targetAudience}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Event Scope & Objective
                </h5>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <a
                  href={getGoogleCalendarUrl(selectedEvent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Add to Google Calendar</span>
                </a>

                <Button
                  onClick={() => setSelectedEvent(null)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  // Lightbox Modal for zooming into the official poster image
  function renderPosterLightbox() {
    return (
      <AnimatePresence>
        {isPosterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Top toolbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Official Department Activity Calendar
                  </h4>
                  <p className="text-xs text-cyan-400">
                    Nandha Engineering College (Autonomous), Erode - 52
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPosterZoom((z) => Math.min(z + 0.25, 2.5))}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPosterZoom((z) => Math.max(z - 0.25, 0.75))}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPosterZoom(1)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <a
                    href="/images/department-activity-calendar.jpg"
                    download="Nandha-CSE-Activity-Calendar-2026-27.jpg"
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
                    title="Download Poster"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      setIsPosterModalOpen(false);
                      setPosterZoom(1);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable image container */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/90">
                <div
                  style={{ transform: `scale(${posterZoom})`, transformOrigin: 'top center' }}
                  className="transition-transform duration-200 max-w-full"
                >
                  <img
                    src="/images/department-activity-calendar.jpg"
                    alt="Department Activity Calendar Official Document"
                    className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
};
