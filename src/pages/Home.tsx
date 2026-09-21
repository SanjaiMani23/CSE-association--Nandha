"use client"

import React, { useState, useEffect } from "react"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
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
  GraduationCap,
  BookOpen,
  Award,
  Target,
  CheckCircle2,
  Building2,
  Cpu,
  Layers,
  Lightbulb,
} from "lucide-react"
import { Link } from "react-router-dom"
import { eventsData, EventItem } from "@/data/events"
import { achievementsData } from "@/data/achievements"
import { ActivityCalendar } from "@/components/ActivityCalendar"
import { BrochureModal } from "@/components/BrochureModal"
import { StudentFeedbackModal } from "@/components/StudentFeedbackModal"

const heroSlides = [
  "/slider/slide1.jpg",
  "/slider/slide2.jpg",
]

export const Home: React.FC = () => {
  const { scrollY } = useScroll()
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [brochureEvent, setBrochureEvent] = useState<EventItem | null>(null)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  useEffect(() => {
    // Preload slides for smooth instant transitions
    heroSlides.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPastHero(latest > 100)
  })

  // Upcoming events
  const upcomingEvents = eventsData.filter((e) => e.category === "upcoming")
  const latestAchievements = achievementsData.slice(0, 3)

  return (
    <PageLayout>
      {/* ==================================================
          1. HERO / LANDING SECTION
          ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-slate-950">
        {/* Continuous Horizontal Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 1.0,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              <img
                src={heroSlides[currentSlide]}
                alt="CSE Department Association"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Dark Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-10" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none z-10" />

        <div className="container mx-auto text-center relative z-20 max-w-5xl px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Maximalist Dual-Color Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight space-y-1 sm:space-y-2">
              <span className="block text-white">
                Nandha
              </span>
              <span className="block text-[#0080FF] text-shadow-sm">
                CSE Association
              </span>
            </h1>

            {/* Professional Introduction */}
            <p className="text-slate-200 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed text-shadow">
              Empowering students through cutting-edge technical verticals, national symposiums, hands-on research incubation, and interdisciplinary engineering excellence.
            </p>

            {/* College Name */}
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
          2. UPCOMING EVENT
          ================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Highlights & Announcements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Upcoming Event
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all hover:shadow-indigo-500/15"
              >
                {/* Left Side: Event Details */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                  <div className="space-y-4">
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                        Upcoming Event
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200">
                        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                        Inauguration & Launch
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-indigo-600">
                        Department of Computer Science and Engineering
                      </p>
                    </div>

                    {/* Dignitaries / Chief Guests Info */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                        <span>Honorable Chief Guests</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 pl-6">
                        <div className="font-semibold text-slate-900">
                          • Mr. K. Gavaskar <span className="font-normal text-slate-500">— CEO, Rapid24</span>
                        </div>
                        <div className="font-semibold text-slate-900">
                          • Mr. Anandan Shanmugam <span className="font-normal text-slate-500">— CEO, Xenovex Technologies</span>
                        </div>
                      </div>
                    </div>

                    {/* Event Meta Badges */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs text-slate-700">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <Calendar className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Date</div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm truncate">{event.date}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <Clock className="w-4 h-4 text-pink-600 mx-auto mb-1" />
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Time</div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm truncate">{event.time}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <MapPin className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Venue</div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm truncate">{event.venue}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Poster Visual */}
                <div className="lg:col-span-5 relative bg-slate-950 flex items-center justify-center p-6 sm:p-8 order-1 lg:order-2">
                  <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. ABOUT THE DEPARTMENT
          ================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Department Building Image (Desktop: Left, Mobile: Top) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl group bg-slate-900">
                <img
                  src="/images/department-building.jpg"
                  alt="Department of Computer Science & Engineering Building"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <Building2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">Department of CSE</h4>
                      <p className="text-slate-300 text-xs">Established in 2001 • NEC Autonomous</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Exact Official Content (Desktop: Right, Mobile: Bottom) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                ABOUT THE DEPARTMENT
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />

              {/* Exact Official Content - Clean Open Paragraphs */}
              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
                <p className="leading-relaxed">
                  The Department of Computer was established in the year 2001. It offers a 4 year B.E (Computer Science and Engineering) programme and 2 year M.E. (Computer Science and Engineering) programme.
                </p>

                <p className="leading-relaxed">
                  The department has been recognized as a centre for carrying out Ph.D. Programme under Anna University, Chennai. It has dedicated faculty members specialized in different areas of Computer Science and Engineering.
                </p>
              </div>

              {/* Academic Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center">
                  <div className="text-indigo-400 font-extrabold text-lg">4-Year</div>
                  <div className="text-slate-300 text-xs font-medium">B.E. CSE</div>
                </div>
                <div className="p-3.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-center">
                  <div className="text-violet-400 font-extrabold text-lg">2-Year</div>
                  <div className="text-slate-300 text-xs font-medium">M.E. CSE</div>
                </div>
                <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-center col-span-2 sm:col-span-1">
                  <div className="text-pink-400 font-extrabold text-lg">Ph.D.</div>
                  <div className="text-slate-300 text-xs font-medium">Research Centre</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================================================
          4. VISION
          ================================================== */}
      <section 
        className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden" 
        style={{ backgroundColor: "#F5F9FF" }}
      >
        {/* Subtle low-opacity background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#8796E8]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#8796E8]/15 blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 sm:p-12 md:p-16 border shadow-xl backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.70)",
              borderColor: "rgba(135, 150, 232, 0.35)",
            }}
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ color: "#29364D" }}
            >
              VISION
            </h2>

            <div 
              className="w-16 h-1 mx-auto mb-8 rounded-full"
              style={{ backgroundColor: "#8796E8" }}
            />

            {/* Exact Vision Statement */}
            <blockquote 
              className="text-lg sm:text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto italic"
              style={{ color: "#405166" }}
            >
              “To emerge as an eminent department in providing quality professionals, researchers, entrepreneurs with software skills and ethical values to cater to the changing needs of the industry and society.”
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          5. MISSION
          ================================================== */}
      <section 
        className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden border-t" 
        style={{ 
          backgroundColor: "#F5F9FF",
          borderColor: "rgba(135, 150, 232, 0.2)"
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3"
              style={{ color: "#29364D" }}
            >
              MISSION
            </h2>

            <div 
              className="w-16 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: "#8796E8" }}
            />

            <p 
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: "#405166" }}
            >
              Three core pillars driving our student enablement, technical innovation, and pedagogical excellence.
            </p>
          </div>

          {/* 3 Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission 01 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl border shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderColor: "rgba(135, 150, 232, 0.3)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-2xl sm:text-3xl font-black px-4 py-1.5 rounded-2xl border"
                    style={{
                      backgroundColor: "rgba(135, 150, 232, 0.15)",
                      color: "#29364D",
                      borderColor: "rgba(135, 150, 232, 0.4)",
                    }}
                  >
                    01
                  </span>
                  <div 
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: "rgba(135, 150, 232, 0.15)" }}
                  >
                    <GraduationCap className="w-6 h-6" style={{ color: "#8796E8" }} />
                  </div>
                </div>

                <h3 
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ color: "#29364D" }}
                >
                  Quality Education
                </h3>

                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#405166" }}
                >
                  To provide quality education to produce ethically strong Computer Science professionals with social responsibility.
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                style={{ 
                  borderColor: "rgba(135, 150, 232, 0.2)",
                  color: "#8796E8"
                }}
              >
                <CheckCircle2 className="w-4 h-4" /> Pillar 01 • Academic Rigor
              </div>
            </motion.div>

            {/* Mission 02 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl border shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderColor: "rgba(135, 150, 232, 0.3)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-2xl sm:text-3xl font-black px-4 py-1.5 rounded-2xl border"
                    style={{
                      backgroundColor: "rgba(135, 150, 232, 0.15)",
                      color: "#29364D",
                      borderColor: "rgba(135, 150, 232, 0.4)",
                    }}
                  >
                    02
                  </span>
                  <div 
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: "rgba(135, 150, 232, 0.15)" }}
                  >
                    <Cpu className="w-6 h-6" style={{ color: "#8796E8" }} />
                  </div>
                </div>

                <h3 
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ color: "#29364D" }}
                >
                  Domain Skills
                </h3>

                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#405166" }}
                >
                  To impart the necessary domain skills to excel in solving real world problems.
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                style={{ 
                  borderColor: "rgba(135, 150, 232, 0.2)",
                  color: "#8796E8"
                }}
              >
                <CheckCircle2 className="w-4 h-4" /> Pillar 02 • Problem Solving
              </div>
            </motion.div>

            {/* Mission 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl border shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderColor: "rgba(135, 150, 232, 0.3)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-2xl sm:text-3xl font-black px-4 py-1.5 rounded-2xl border"
                    style={{
                      backgroundColor: "rgba(135, 150, 232, 0.15)",
                      color: "#29364D",
                      borderColor: "rgba(135, 150, 232, 0.4)",
                    }}
                  >
                    03
                  </span>
                  <div 
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: "rgba(135, 150, 232, 0.15)" }}
                  >
                    <Lightbulb className="w-6 h-6" style={{ color: "#8796E8" }} />
                  </div>
                </div>

                <h3 
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ color: "#29364D" }}
                >
                  Learner-Centric Platform
                </h3>

                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#405166" }}
                >
                  To create a learner centric platform with ongoing development to fulfill the global computing demands.
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                style={{ 
                  borderColor: "rgba(135, 150, 232, 0.2)",
                  color: "#8796E8"
                }}
              >
                <CheckCircle2 className="w-4 h-4" /> Pillar 03 • Global Demands
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. DEPARTMENT ROADMAP
          ================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                QUARTERLY ROADMAP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-1">
                Department Activity Roadmap
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="bg-[#EEF2F6] hover:bg-slate-200 text-slate-700 border-none rounded-xl px-5 py-2.5 font-semibold text-xs sm:text-sm self-start md:self-auto shadow-none transition-colors"
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

      {/* ==================================================
          7. ACHIEVEMENTS
          ================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4" /> Excellence Recognized
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
                Achievements
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Student Achievements • Hackathons • Competitions • Certifications • Publications
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-amber-500/50 text-amber-300 hover:text-white hover:bg-amber-500/20 self-start md:self-auto rounded-xl"
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
                className="bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
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

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                  <span>{item.eventOrOrganization}</span>
                </div>
              </motion.div>
            ))}
          </div>
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