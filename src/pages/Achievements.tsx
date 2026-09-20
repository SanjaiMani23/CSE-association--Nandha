import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, BookOpen, CheckCircle, Sparkles, Filter, ExternalLink, X } from 'lucide-react';
import { achievementsData, AchievementCategory, AchievementItem } from '@/data/achievements';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CATEGORIES: ('All' | AchievementCategory)[] = [
  'All',
  'Hackathons',
  'Competitions',
  'Certifications',
  'Publications',
  'Other Achievements',
];

export const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | AchievementCategory>('All');
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  const filteredAchievements =
    activeCategory === 'All'
      ? achievementsData
      : achievementsData.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: AchievementCategory) => {
    switch (category) {
      case 'Hackathons':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Competitions':
        return <Award className="w-4 h-4 text-pink-400" />;
      case 'Publications':
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
      case 'Certifications':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-12 px-4 relative overflow-hidden bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 inline-block mb-4">
              Hall of Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Student & Faculty <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Celebrating outstanding laurels, research publications, hackathon triumphs, and professional credentials earned by the innovators of the Department of CSE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2',
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              )}
            >
              {cat !== 'All' && getCategoryIcon(cat as AchievementCategory)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group"
            >
              {/* Optional image banner */}
              {item.imageOrCertificate && (
                <div
                  className="h-44 w-full overflow-hidden relative cursor-pointer bg-slate-900"
                  onClick={() => setSelectedAchievement(item)}
                >
                  <img
                    src={item.imageOrCertificate}
                    alt={item.achievementTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-slate-200 border border-slate-700">
                    {item.dateOrYear}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </span>
                    {item.awardOrPosition && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {item.awardOrPosition}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.achievementTitle}
                  </h3>

                  <p className="text-xs font-semibold text-violet-400 mb-2">
                    {item.studentName} {item.rollNoOrBatch && `• ${item.rollNoOrBatch}`}
                  </p>

                  <p className="text-xs text-slate-400 mb-4">
                    <strong>Organization / Forum:</strong> {item.eventOrOrganization}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Department Record
                  </span>
                  {item.imageOrCertificate && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedAchievement(item)}
                      className="text-xs text-indigo-400 hover:text-white hover:bg-indigo-500/20"
                    >
                      View Preview
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificate / Image Modal */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.imageOrCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-indigo-500/40 rounded-2xl overflow-hidden shadow-2xl p-6"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {selectedAchievement.achievementTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedAchievement.studentName} • {selectedAchievement.eventOrOrganization}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[65vh] overflow-auto flex items-center justify-center bg-slate-950 rounded-xl p-2">
                <img
                  src={selectedAchievement.imageOrCertificate}
                  alt={selectedAchievement.achievementTitle}
                  className="max-h-[60vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
                <Button
                  onClick={() => setSelectedAchievement(null)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Achievements;
