import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { eventsData, EventItem } from '@/data/events';
import { Button } from '@/components/ui/button';
import { BrochureModal } from '@/components/BrochureModal';
import { ActivityCalendar } from '@/components/ActivityCalendar';
import { cn } from '@/lib/utils';

export const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('upcoming');
  const [brochureEvent, setBrochureEvent] = useState<EventItem | null>(null);

  const filteredEvents =
    activeTab === 'all'
      ? eventsData
      : eventsData.filter((e) => e.category === activeTab);

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
              Academic Year 2026–27
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Department <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Events & Symposiums</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore upcoming symposiums, technical workshops, coding tournaments, and past milestones organized by the CSE Association.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section with Tabs */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'upcoming', label: 'Upcoming Events' },
            { key: 'ongoing', label: 'Ongoing Events' },
            { key: 'completed', label: 'Completed Events' },
            { key: 'all', label: 'All Events' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Cards */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Events Currently In This Category</h3>
            <p className="text-slate-400 text-sm">
              Please check back soon or explore our upcoming schedule below.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Event Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
                          event.category === 'upcoming' && 'bg-indigo-500/90 text-white',
                          event.category === 'ongoing' && 'bg-amber-500/90 text-slate-950',
                          event.category === 'completed' && 'bg-slate-800/90 text-slate-300'
                        )}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                      {event.title}
                    </h3>

                    {/* Metadata */}
                    <div className="space-y-2 mb-4 text-xs text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="line-clamp-1">{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Actions (Brochure & Register) */}
                <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
                  {event.brochure && (
                    <Button
                      variant="outline"
                      onClick={() => setBrochureEvent(event)}
                      className="flex-1 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700/60"
                    >
                      <FileText className="w-4 h-4 mr-2 text-indigo-400" />
                      View Brochure
                    </Button>
                  )}

                  {event.registrationLink && event.category !== 'completed' ? (
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium shadow-md"
                    >
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    </Button>
                  ) : event.driveLink ? (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-700/60"
                    >
                      <a
                        href={event.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Photo Archive <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Activity Calendar Section */}
      <section id="calendar" className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-t border-slate-800 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/30 inline-block mb-3">
            Official Roadmap • 2026–2027
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            Department Activity Calendar
          </h2>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            Official academic roadmap for the Department of Computer Science and Engineering at Nandha Engineering College. Covering association launches, SIH hackathons, innovation exhibitions, national symposiums, and career milestones.
          </p>
        </div>

        <ActivityCalendar />
      </section>

      {/* Brochure Modal Popup */}
      <BrochureModal
        isOpen={!!brochureEvent}
        onClose={() => setBrochureEvent(null)}
        title={brochureEvent?.title || 'Event'}
        brochureUrl={brochureEvent?.brochure || ''}
      />
    </PageLayout>
  );
};

export default Events;