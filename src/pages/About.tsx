"use client"

import React from "react"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { Users, Target, Eye, Sparkles, ArrowRight, ShieldCheck, Award } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { leadershipData, verticalFacultyIncharges, officeBearersData } from "@/data/team"

export const About: React.FC = () => {
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
              Our Identity & Purpose
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              About <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">CSE Association</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Computer Science & Engineering Students Association 2026–27 at Nandha Engineering College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Association Section */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          className="bg-slate-800/70 rounded-2xl p-6 sm:p-10 shadow-xl border border-indigo-500/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl shadow-lg text-white">
              <Users className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                About the Association
              </h2>
              <span className="text-xs text-indigo-300 font-medium">CSE Department • Nandha Engineering College</span>
            </div>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              The <strong className="text-white">Computer Science and Engineering Students Association</strong> is a dynamic student-governed body driving academic enrichment, technology incubation, and peer mentorship within the department.
            </p>
            <p>
              For the academic tenure <strong className="text-indigo-300">2026–27</strong>, the association coordinates 5 specialized department verticals (RIC, GenAI, CIC, AV/VR, and Crevation Lab), hosts the annual flagship national symposium <strong className="text-white">SyNECtics</strong>, conducts hands-on bootcamps, and fosters direct collaboration between aspiring student engineers and global tech industries.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 shadow-xl border border-violet-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-violet-500/20 text-violet-300 rounded-xl">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                <span>To be a premier student-driven association producing globally competent software professionals and innovative researchers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                <span>Nurture ethical, creative problem solvers who deploy emerging technologies for societal welfare.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 mt-1">•</span>
                <span>Pioneer sustainable research, open innovation, and startup incubation right from the undergraduate level.</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-500/20 text-pink-300 rounded-xl">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">•</span>
                <span>Provide continuous hands-on learning across artificial intelligence, robotics, cloud systems, and spatial computing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">•</span>
                <span>Bridge academia and industry by inviting domain pioneers, organizing hackathons, and sponsoring student technical paper publications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">•</span>
                <span>Foster inclusive leadership, teamwork, and collaborative technical growth through the department verticals.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Faculty Details */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Guiding Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Department Leadership & Faculty In-Charges
          </h2>
        </div>

        {/* HoD & Association Incharge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {leadershipData.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/70 border border-indigo-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl text-center sm:text-left"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-indigo-500/50 shrink-0 bg-slate-900">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                  {leader.role}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {leader.name} {leader.qualification && <span className="text-sm font-normal text-slate-300">({leader.qualification})</span>}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {leader.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vertical Faculty In-charges */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Vertical Faculty In-Charges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {verticalFacultyIncharges.map((fac, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-indigo-500/40 bg-slate-900">
                  <img src={fac.image} alt={fac.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white">{fac.name}</h4>
                <p className="text-xs text-indigo-300 mt-1 leading-tight">{fac.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Coordinators / Office Bearers Preview */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto border-t border-slate-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Student Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Association Office Bearers
            </h2>
          </div>
          <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:text-white">
            <Link to="/team" className="flex items-center gap-2">
              <span>View Full Executive Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {officeBearersData.map((bearer, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 text-center shadow-lg"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-indigo-500/40 bg-slate-900">
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/lovable-uploads/71f5b66a-b7fb-4a7c-a25a-cf47bdd6b834.png';
                  }}
                />
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-1">{bearer.name}</h4>
              <p className="text-xs font-semibold text-violet-400 mt-0.5">{bearer.role}</p>
              <p className="text-xs text-slate-400 mt-0.5">{bearer.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Former Team Section */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto border-t border-slate-800">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Legacy & Continuity
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Former Association Teams
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Honoring the student leaders and teams who shaped the foundation of the CSE Association in previous academic years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { year: '2025–26', status: 'Details to be updated' },
            { year: '2024–25', status: 'Details to be updated' },
            { year: 'Previous Years', status: 'Archive coming soon' },
          ].map((team) => (
            <div
              key={team.year}
              className="bg-slate-800/50 border border-slate-700/80 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-2">{team.year}</h3>
              <p className="text-xs text-slate-400">{team.status}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default About