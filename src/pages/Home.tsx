"use client"

import React, { useState } from "react"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Trophy,
  ExternalLink,
  FileText,
  Clock,
  MapPin,
  MessageSquarePlus,
  Compass,
} from "lucide-react"
import { Link } from "react-router-dom"
import { eventsData, EventItem } from "@/data/events"
import { achievementsData } from "@/data/achievements"
import { ActivityCalendar } from "@/components/ActivityCalendar"
import { BrochureModal } from "@/components/BrochureModal"
import { StudentFeedbackModal } from "@/components/StudentFeedbackModal"

export const Home: React.FC = () => {
  const { scrollY } = useScroll()
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [brochureEvent, setBrochureEvent] = useState<EventItem | null>(null)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPastHero(latest > 100)
  })

  const upcomingEvents = eventsData.filter((e) => e.category === "upcoming").slice(0, 2)
  const latestAchievements = achievementsData.slice(0, 3)

  return (
    <PageLayout>
      {/* ==================================================
          1. HERO / LANDING SECTION
          ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-slate-950">
        {/* Full-width CSE Department building background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/lovable-uploads/fornt.jpg')",
          }}
        />

        {/* Subtle Dark Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/95 z-0" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none z-0" />

        <div className="container mx-auto text-center relative z-20 max-w-5xl px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 backdrop-blur-md text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Department of Computer Science & Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              CSE Association <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                2026–27
              </span>
            </h1>

            {/* Professional Introduction */}
            <p className="text-slate-200 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed text-shadow">
              Empowering students through cutting-edge technical verticals, national symposiums, hands-on research incubation, and interdisciplinary engineering excellence.
            </p>

            <div className="text-sm sm:text-base text-indigo-300 font-medium">
              Nandha Engineering College (Autonomous), Erode
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-base shadow-xl shadow-indigo-500/25 px-8 py-6 rounded-xl font-semibold transition-all group"
              >
                <Link to="/events">
                  <span>Explore Events</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="bg-slate-900/60 hover:bg-slate-800 text-white border-slate-700 text-base px-8 py-6 rounded-xl font-semibold transition-all"
              >
                <Link to="/verticals">
                  <Compass className="w-5 h-5 mr-2 text-indigo-400" />
                  <span>Department Verticals</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                onClick={() => setIsFeedbackOpen(true)}
                className="text-slate-300 hover:text-white hover:bg-white/10 px-6 py-6 rounded-xl text-base font-medium"
              >
                <MessageSquarePlus className="w-5 h-5 mr-2 text-pink-400" />
                <span>Student Feedback</span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-slate-400 text-xs flex flex-col items-center gap-1 animate-bounce opacity-70">
          <span>Scroll down</span>
          <div className="w-1.5 h-3 border border-slate-400 rounded-full" />
        </div>
      </section>

      {/* ==================================================
          2. ASSOCIATION INTRODUCTION & QUICK STATISTICS
          ================================================== */}
      <section className="py-20 px-4 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              About the Association
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              The Computer Science and Engineering Students Association is a dynamic student-governed body driving academic enrichment, technology incubation, and peer mentorship within the department. We foster an environment of continuous learning and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">5+</div>
              <div className="text-slate-400 font-medium">Department Verticals</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-2">20+</div>
              <div className="text-slate-400 font-medium">Annual Events</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-2">500+</div>
              <div className="text-slate-400 font-medium">Active Members</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">50+</div>
              <div className="text-slate-400 font-medium">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. UPCOMING EVENTS PREVIEW SECTION
          ================================================== */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-slate-900/60 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Highlights & Registrations
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
                Upcoming Events
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 self-start md:self-auto rounded-xl"
            >
              <Link to="/events" className="flex items-center gap-2">
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/70 border border-slate-700 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white uppercase tracking-wider">
                      Upcoming
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
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
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-wrap gap-3">
                  {event.brochure && (
                    <Button
                      variant="outline"
                      onClick={() => setBrochureEvent(event)}
                      className="flex-1 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700/60 rounded-xl"
                    >
                      <FileText className="w-4 h-4 mr-2 text-indigo-400" />
                      View Brochure
                    </Button>
                  )}
                  {event.registrationLink && (
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium rounded-xl"
                    >
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register Now <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. LATEST ACHIEVEMENTS PREVIEW
          ================================================== */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4" /> Excellence Recognized
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
                Latest Achievements
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10 self-start md:self-auto rounded-xl"
            >
              <Link to="/achievements" className="flex items-center gap-2">
                <span>View All Achievements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {latestAchievements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800/60 border border-slate-700 hover:border-amber-500/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.dateOrYear}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.achievementTitle}
                  </h3>

                  <p className="text-xs font-medium text-violet-400 mb-3">
                    {item.studentName}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-slate-400">
                  <span>{item.eventOrOrganization}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. ACTIVITY CALENDAR PREVIEW
          ================================================== */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Quarterly Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
                Activity Calendar
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 self-start md:self-auto rounded-xl"
            >
              <Link to="/events#calendar" className="flex items-center gap-2">
                <span>View Complete Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Render Calendar preview */}
          <ActivityCalendar previewOnly />
        </div>
      </section>

      {/* Modals */}
      <BrochureModal
        isOpen={!!brochureEvent}
        onClose={() => setBrochureEvent(null)}
        title={brochureEvent?.title || "Event"}
        brochureUrl={brochureEvent?.brochure || ""}
      />

      <StudentFeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </PageLayout>
  )
}

export default Home