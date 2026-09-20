import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import {
  Award,
  ArrowRight,
} from 'lucide-react';
import { verticalsData, VerticalItem } from '@/data/verticals';
import { Button } from '@/components/ui/button';
import { VerticalDetailsModal } from '@/components/VerticalDetailsModal';

export const Verticals: React.FC = () => {
  const [modalVertical, setModalVertical] = useState<VerticalItem | null>(null);

  return (
    <PageLayout>
      {/* Page Hero Section */}
      <section className="pt-24 md:pt-28 pb-12 px-4 relative overflow-hidden bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 inline-block mb-4">
              Specialized Innovation Centers
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Department <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Verticals</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Explore the specialized verticals driving innovation, research, and emerging technology within the Department of Computer Science and Engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main 5-Card Grid (3 + 2 Balanced Layout) */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {verticalsData.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setModalVertical(vertical)}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-slate-800/70 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Image Area */}
                <div className="w-full aspect-[16/9] relative overflow-hidden bg-slate-900">
                  <img
                    src={vertical.image}
                    alt={vertical.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/department-activity-calendar.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-indigo-600/90 text-white font-bold text-[10px] rounded-full uppercase tracking-wider">
                        Vertical
                      </span>
                      {vertical.verifiedAchievement && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-[10px] rounded-full uppercase tracking-wider">
                          Verified MoU
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                      {vertical.name}
                    </h3>
                    <p className="text-indigo-300 text-xs sm:text-sm font-medium drop-shadow-md">
                      {vertical.fullName}
                    </p>
                  </div>
                </div>

                {/* Body Info */}
                <div className="p-5 sm:p-6">
                  {/* Staff In-charge with Circle Avatar */}
                  <div className="flex items-center gap-3.5 mb-4 pb-3.5 border-b border-slate-700/60">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/80 bg-slate-900 shrink-0 shadow-md ring-2 ring-amber-400/20">
                      <img
                        src={vertical.staffImage}
                        alt={vertical.staffInCharge}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Staff In-Charge
                      </span>
                      <span className="text-sm sm:text-base font-bold text-amber-300 truncate block">
                        {vertical.staffInCharge}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 text-justify mb-4">
                    {vertical.summary}
                  </p>

                  {vertical.keyAreas && vertical.keyAreas.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {vertical.keyAreas.slice(0, 3).map((area, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-900/70 border border-slate-700/60 text-slate-300 text-[11px] rounded-md"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* View Details CTA */}
              <div className="p-5 sm:p-6 pt-0">
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalVertical(vertical);
                  }}
                  className="w-full border-indigo-500/30 text-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 rounded-xl transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <span>Explore Lab Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vertical Details Modal */}
      <VerticalDetailsModal
        vertical={modalVertical}
        onClose={() => setModalVertical(null)}
      />
    </PageLayout>
  );
};

export default Verticals;
