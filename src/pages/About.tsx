"use client"

import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, Target, Eye, Lightbulb, Code2, Rocket, Sparkles, Zap, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"

// Using the same color scheme as the home page
const COLORS = {
  background: "transparent",
  cardBg: "#1E293B",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#EC4899",
  textLight: "#F1F5F9",
  textMuted: "#94A3B8",
  highlight: "#F59E0B"
}

const FloatingShapes = () => {
  return (
    <>
      {/* Floating tech shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? COLORS.primary : 
                           i % 3 === 1 ? COLORS.secondary : COLORS.accent,
            opacity: 0.6
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 60],
            x: [0, (Math.random() - 0.5) * 60],
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
        />
      ))}
      
      {/* Circuit lines */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 border border-dashed border-indigo-500/30 rounded-full pointer-events-none"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-dashed border-violet-500/30 rounded-full pointer-events-none"
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      />
    </>
  )
}

const AnimatedWave = () => {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      
    </motion.div>
  )
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ElementType
  title: string
  description: string
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, type: "spring" }}
    whileHover={{ 
      scale: 1.03,
      boxShadow: `0 20px 40px -10px ${COLORS.primary}3F`,
      y: -5
    }}
    className={cn(
      "group bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border",
      "border-slate-700 hover:border-indigo-500/40",
      "transition-all duration-300 relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-[url('/grid-pattern.svg')] before:opacity-10 before:pointer-events-none",
      className,
    )}
  >
    <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
        <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white flex items-center gap-2">
        {title}
        <Sparkles className="w-4 h-4 text-amber-500" />
      </h3>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{description}</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </motion.div>
)

const About = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <PageLayout>
      {/* Hero Section - Reduced padding */}
      <section className="pt-16 md:pt-20 lg:pt-24 py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <FloatingShapes />
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              About Tech Matrix
            </span>
          </motion.h1>
        </div>
        <AnimatedWave />
      </section>

      {/* About Association Section - Reduced padding */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <motion.div 
            className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden border border-indigo-500/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl shadow-lg">
                <Users className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">About the Association</h2>
            </div>
            <div className="space-y-3 text-slate-300">
              <p>
                The <span className="text-violet-400 font-medium">Computer Science and Engineering Students Association</span> is a dynamic platform run by passionate and innovative students of the CSE department. Our mission is to foster a vibrant tech culture where curiosity meets creativity and learning extends beyond the classroom.
              </p>
              <p>
                We actively organize technical events, hackathons, coding challenges, workshops, and guest lectures to empower students with real-world skills. By encouraging collaboration and innovation, we aim to build a community of future-ready technologists and problem-solvers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section - Reduced padding and gap */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <motion.div 
              className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden border border-violet-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl shadow-lg">
                  <Eye className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">•</span>
                  <span>To be a leading student-driven association in Computer Science and Engineering education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">•</span>
                  <span>Nurture future innovators and responsible tech leaders through continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">•</span>
                  <span>Promote technological innovation and professional development in a collaborative environment</span>
                </li>
              </ul>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden border border-amber-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-pink-500 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Enhance technical skills through industry-relevant events and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Foster innovation, critical thinking, and leadership among students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Bridge the gap between academia and industry through hands-on activities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>  
      </section>
    </PageLayout>
  )
}

export default About