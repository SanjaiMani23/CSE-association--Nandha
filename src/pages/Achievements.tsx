import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  BookOpen,
  CheckCircle,
  Sparkles,
  Eye,
  X,
  Calendar,
  MapPin,
  Users,
  CheckSquare,
  Star,
  Building2,
} from 'lucide-react';
import { achievementsData, AchievementCategory, AchievementItem } from '@/data/achievements';
import { cn } from '@/lib/utils';

const CATEGORIES: ('All' | AchievementCategory)[] = [
  'All',
  'Hackathons',
  'Competitions',
  'Certifications',
  'Publications',
  'Other Achievements',
];

/* ──────────────────────────────────────────────────────────
   Category helpers — colours are soft/muted for light UI
────────────────────────────────────────────────────────── */
const CATEGORY_CONFIG: Record<
  AchievementCategory,
  { icon: React.ElementType; pill: string; accent: string; dot: string }
> = {
  Hackathons: {
    icon: Trophy,
    pill: 'bg-amber-50 text-amber-700 border border-amber-200',
    accent: 'text-amber-600',
    dot: 'bg-amber-400',
  },
  Competitions: {
    icon: Award,
    pill: 'bg-rose-50 text-rose-700 border border-rose-200',
    accent: 'text-rose-600',
    dot: 'bg-rose-400',
  },
  Certifications: {
    icon: CheckCircle,
    pill: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    accent: 'text-emerald-600',
    dot: 'bg-emerald-400',
  },
  Publications: {
    icon: BookOpen,
    pill: 'bg-blue-50 text-blue-700 border border-blue-200',
    accent: 'text-blue-600',
    dot: 'bg-blue-400',
  },
  'Other Achievements': {
    icon: Sparkles,
    pill: 'bg-violet-50 text-violet-700 border border-violet-200',
    accent: 'text-violet-600',
    dot: 'bg-violet-400',
  },
};

function CategoryPill({
  category,
  size = 'sm',
}: {
  category: AchievementCategory;
  size?: 'sm' | 'md';
}) {
  const cfg = CATEGORY_CONFIG[category];
  const Icon = cfg.icon;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        cfg.pill,
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      <Icon className={cn(cfg.accent, size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4')} />
      {category}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────
   Main Page Component
────────────────────────────────────────────────────────── */
export const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | AchievementCategory>('All');
  const [selected, setSelected] = useState<AchievementItem | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const filtered =
    activeCategory === 'All'
      ? achievementsData
      : achievementsData.filter((i) => i.category === activeCategory);

  return (
    <PageLayout>
      {/* ── Page wrapper with soft light background ── */}
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(160deg, #f0f4ff 0%, #fafbff 45%, #f5f3ff 100%)',
          fontFamily: "'DM Sans', 'Inter', sans-serif",
        }}
      >
        {/* Subtle decorative dots pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.25,
          }}
        />

        {/* ── Hero Section ── */}
        <section className="relative pt-24 md:pt-28 pb-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <span
              className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{
                background: '#ede9fe',
                color: '#6d28d9',
                border: '1px solid #c4b5fd',
              }}
            >
              Hall of Excellence
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3"
              style={{
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                fontWeight: 700,
                color: '#1e1b4b',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Student &amp; Faculty{' '}
              <span style={{ color: '#4f46e5' }}>Achievements</span>
            </h1>

            <p
              className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: '#6b7280', fontWeight: 400 }}
            >
              Celebrating outstanding achievements, research publications, hackathon triumphs, and
              professional credentials earned by the innovators of the Department of CSE.
            </p>
          </motion.div>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="relative z-10 px-4 mb-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? achievementsData.length
                  : achievementsData.filter((i) => i.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'shadow-md'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50'
                  )}
                  style={
                    isActive
                      ? {
                          background: '#4f46e5',
                          color: '#fff',
                          border: '1px solid #4f46e5',
                        }
                      : {}
                  }
                >
                  {cat !== 'All' &&
                    React.createElement(CATEGORY_CONFIG[cat as AchievementCategory].icon, {
                      className: cn('w-3.5 h-3.5', isActive ? 'text-white' : CATEGORY_CONFIG[cat as AchievementCategory].accent),
                    })}
                  <span>{cat}</span>
                  <span
                    className={cn(
                      'text-xs px-1.5 py-0.5 rounded-full font-semibold',
                      isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Achievement Cards Grid ── */}
        <section className="relative z-10 px-4 pb-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => {
                const img = item.image || item.imageOrCertificate || '/lovable-uploads/fornt.jpg';
                const cfg = CATEGORY_CONFIG[item.category];

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.38, delay: idx * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                    style={{
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      transition: 'box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.boxShadow = '0 8px 28px rgba(79,70,229,0.12)';
                      el.style.transform = 'translateY(-4px)';
                      el.style.borderColor = '#c7d2fe';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
                      el.style.transform = 'translateY(0)';
                      el.style.borderColor = '#e5e7eb';
                    }}
                    onClick={() => setSelected(item)}
                  >
                    {/* ── Card Image ── */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={img}
                        alt={item.achievementTitle}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                        }}
                      />
                      {/* Light gradient overlay at bottom only */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-20"
                        style={{
                          background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)',
                        }}
                      />
                      {/* Date chip */}
                      <span
                        className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.92)',
                          color: '#374151',
                          border: '1px solid #e5e7eb',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        <Calendar className="w-3 h-3 text-indigo-500" />
                        {item.dateOrYear}
                      </span>
                      {/* Category dot */}
                      <span
                        className={cn('absolute top-3 left-3 w-2.5 h-2.5 rounded-full', cfg.dot)}
                        style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.7)' }}
                      />
                    </div>

                    {/* ── Card Body ── */}
                    <div
                      className="flex-1 flex flex-col p-5"
                      style={{ borderTop: '1px solid #f3f4f6' }}
                    >
                      {/* Category + Award badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <CategoryPill category={item.category} />
                        {item.awardOrPosition && (
                          <span
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              background: '#fffbeb',
                              color: '#92400e',
                              border: '1px solid #fde68a',
                            }}
                          >
                            <Star className="w-3 h-3 text-amber-500" />
                            {item.awardOrPosition.length > 28
                              ? item.awardOrPosition.slice(0, 26) + '…'
                              : item.awardOrPosition}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className="mb-1.5 leading-snug"
                        style={{
                          fontFamily: "'DM Sans', 'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: '#1e1b4b',
                          lineHeight: 1.35,
                        }}
                      >
                        {item.achievementTitle}
                      </h3>

                      {/* Event name */}
                      <p
                        className="text-xs mb-2 line-clamp-1"
                        style={{ color: '#4f46e5', fontWeight: 500 }}
                      >
                        {item.eventName || item.eventOrOrganization}
                      </p>

                      {/* Student / Team */}
                      {item.studentName && (
                        <p
                          className="text-xs mb-3 flex items-center gap-1.5 line-clamp-1"
                          style={{ color: '#6b7280' }}
                        >
                          <Users className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                          <span>{item.studentName}</span>
                          {item.rollNoOrBatch && (
                            <span style={{ color: '#9ca3af' }}>· {item.rollNoOrBatch}</span>
                          )}
                        </p>
                      )}

                      {/* Short description */}
                      <p
                        className="text-sm leading-relaxed line-clamp-3 flex-1 mb-4"
                        style={{ color: '#6b7280', fontWeight: 400 }}
                      >
                        {item.shortDescription || item.description}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-3"
                        style={{ borderTop: '1px solid #f3f4f6' }}
                      >
                        <span
                          className="text-xs flex items-center gap-1"
                          style={{ color: '#9ca3af' }}
                        >
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                          Dept. of CSE
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(item);
                          }}
                          className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 transition-all"
                          style={{
                            background: '#eef2ff',
                            color: '#4f46e5',
                            border: '1px solid #c7d2fe',
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = '#4f46e5';
                            el.style.color = '#fff';
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = '#eef2ff';
                            el.style.color = '#4f46e5';
                          }}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Preview
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
                No achievements found in this category yet.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ──────────────────────────────────────────────────────
          Preview Modal
      ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(17,24,39,0.65)', backdropFilter: 'blur(6px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: '#ffffff',
                boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
                maxHeight: '90vh',
                fontFamily: "'DM Sans', 'Inter', sans-serif",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Modal Header ── */}
              <div
                className="flex items-start justify-between px-5 py-4"
                style={{ borderBottom: '1px solid #f3f4f6' }}
              >
                <div className="pr-4 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <CategoryPill category={selected.category} size="md" />
                    {selected.awardOrPosition && (
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: '#fffbeb',
                          color: '#92400e',
                          border: '1px solid #fde68a',
                        }}
                      >
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        {selected.awardOrPosition}
                      </span>
                    )}
                  </div>
                  <h2
                    style={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#1e1b4b',
                      lineHeight: 1.3,
                    }}
                  >
                    {selected.achievementTitle}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="shrink-0 p-2 rounded-xl transition-colors"
                  style={{ color: '#9ca3af', background: '#f9fafb', border: '1px solid #e5e7eb' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#f9fafb'; }}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* ── Modal Scrollable Body ── */}
              <div className="overflow-y-auto flex-1 p-5 space-y-5">
                {/* Two columns: image | details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  {/* Image */}
                  <div
                    className="rounded-xl overflow-hidden flex items-center justify-center"
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e5e7eb',
                      minHeight: '200px',
                    }}
                  >
                    <img
                      src={selected.image || selected.imageOrCertificate || '/lovable-uploads/fornt.jpg'}
                      alt={selected.achievementTitle}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '340px' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                      }}
                    />
                  </div>

                  {/* Details panel */}
                  <div className="space-y-3">
                    {/* Event Name */}
                    <DetailRow
                      icon={<BookOpen className="w-4 h-4 text-indigo-500" />}
                      label="Event Name"
                      value={selected.eventName || selected.eventOrOrganization || '—'}
                    />
                    {/* Date */}
                    <DetailRow
                      icon={<Calendar className="w-4 h-4 text-indigo-500" />}
                      label="Date / Year"
                      value={selected.dateOrYear}
                    />
                    {/* Organizer */}
                    {selected.fullDetails?.organizer && (
                      <DetailRow
                        icon={<Building2 className="w-4 h-4 text-indigo-500" />}
                        label="Organization"
                        value={selected.fullDetails.organizer}
                      />
                    )}
                    {/* Venue */}
                    {selected.fullDetails?.venue && (
                      <DetailRow
                        icon={<MapPin className="w-4 h-4 text-indigo-500" />}
                        label="Venue"
                        value={selected.fullDetails.venue}
                      />
                    )}
                    {/* Award */}
                    <DetailRow
                      icon={<Trophy className="w-4 h-4 text-amber-500" />}
                      label="Award / Position"
                      value={selected.awardOrPosition}
                      highlight
                    />
                  </div>
                </div>

                {/* Team / Investigators */}
                {(selected.studentName || selected.fullDetails?.investigatorsOrTeam) && (
                  <div
                    className="rounded-xl p-4"
                    style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}
                  >
                    <h4
                      className="text-xs uppercase tracking-wider mb-2.5 flex items-center gap-2"
                      style={{ color: '#6b7280', fontWeight: 600 }}
                    >
                      <Users className="w-4 h-4 text-violet-500" />
                      Students / Team / Investigators
                    </h4>
                    {selected.fullDetails?.investigatorsOrTeam ? (
                      <ul className="space-y-1.5">
                        {selected.fullDetails.investigatorsOrTeam.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm" style={{ color: '#374151' }}>
                        {selected.studentName}
                        {selected.rollNoOrBatch && ` (${selected.rollNoOrBatch})`}
                      </p>
                    )}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4
                    className="text-xs uppercase tracking-wider mb-2 flex items-center gap-2"
                    style={{ color: '#6b7280', fontWeight: 600 }}
                  >
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    Description
                  </h4>
                  <p
                    className="text-sm leading-relaxed rounded-xl p-4"
                    style={{ background: '#f8fafc', border: '1px solid #e5e7eb', color: '#374151' }}
                  >
                    {selected.fullDetails?.overview ||
                      selected.shortDescription ||
                      selected.description}
                  </p>
                </div>

                {/* Key Highlights */}
                {selected.fullDetails?.keyHighlights &&
                  selected.fullDetails.keyHighlights.length > 0 && (
                    <div>
                      <h4
                        className="text-xs uppercase tracking-wider mb-2 flex items-center gap-2"
                        style={{ color: '#6b7280', fontWeight: 600 }}
                      >
                        <Star className="w-4 h-4 text-amber-500" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selected.fullDetails.keyHighlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm rounded-lg p-3"
                            style={{
                              background: '#f0fdf4',
                              border: '1px solid #bbf7d0',
                              color: '#166534',
                            }}
                          >
                            <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* ── Modal Footer ── */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderTop: '1px solid #f3f4f6' }}
              >
                <span className="text-xs" style={{ color: '#9ca3af' }}>
                  Nandha Engineering College (Autonomous) · CSE Association
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ background: '#4f46e5', color: '#fff' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#4338ca'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#4f46e5'; }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

/* ──────────────────────────────────────────────────────────
   Helper: Single detail row in modal
────────────────────────────────────────────────────────── */
function DetailRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl px-3.5 py-3"
      style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}
    >
      <span
        className="text-[10px] uppercase tracking-wider flex items-center gap-1.5 mb-1"
        style={{ color: '#9ca3af', fontWeight: 600 }}
      >
        {icon}
        {label}
      </span>
      <p
        className="text-sm font-medium"
        style={{ color: highlight ? '#b45309' : '#1e1b4b' }}
      >
        {value}
      </p>
    </div>
  );
}

export default Achievements;
