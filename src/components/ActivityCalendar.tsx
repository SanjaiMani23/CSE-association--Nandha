import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, User, ChevronRight, Filter, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { activitiesData, ActivityItem } from '@/data/activities';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActivityCalendarProps {
  previewOnly?: boolean;
}

export const ActivityCalendar: React.FC<ActivityCalendarProps> = ({ previewOnly = false }) => {
  // Extract unique months from data
  const months = Array.from(new Set(activitiesData.map(a => a.month)));
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0] || 'All');
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const filteredActivities = previewOnly
    ? activitiesData.slice(0, 4)
    : selectedMonth === 'All'
    ? activitiesData
    : activitiesData.filter(a => a.month === selectedMonth);

  return (
    <div className="w-full">
      {/* Month Filter Tabs (when not preview only) */}
      {!previewOnly && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedMonth('All')}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
              selectedMonth === 'All'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
            )}
          >
            All Months
          </button>
          {months.map(m => (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                selectedMonth === m
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              )}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((act, idx) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedActivity(act)}
            className="group cursor-pointer bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-indigo-500/50 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {act.displayDate}
                </span>

                <span
                  className={cn(
                    'text-xs px-2.5 py-0.5 rounded-full font-medium',
                    act.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  )}
                >
                  {act.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 line-clamp-2">
                {act.title}
              </h4>

              <p className="text-sm text-slate-300 line-clamp-2 mb-4">
                {act.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/60 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="line-clamp-1">{act.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span className="line-clamp-1">{act.venue}</span>
              </div>
              <div className="flex items-center justify-between pt-2 text-indigo-400 font-medium group-hover:text-indigo-300">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-slate-900 border border-indigo-500/40 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {selectedActivity.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {selectedActivity.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-300 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Date:</strong> {selectedActivity.displayDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Time:</strong> {selectedActivity.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <span><strong>Venue:</strong> {selectedActivity.venue}</span>
                </div>
                {selectedActivity.speakerOrIncharge && (
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>In-charge / Resource:</strong> {selectedActivity.speakerOrIncharge}</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Activity Overview
                </h5>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedActivity.description}
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  onClick={() => setSelectedActivity(null)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
