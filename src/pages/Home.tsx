"use client"

import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { animate, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, FileCode, Lightbulb, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// InspireGrid Color Scheme
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

const EventCard = ({
  date,
  title,
  description,
  image,
  slug,
  link,
}: {
  date: string
  title: string
  description: string
  image: string
  slug: string
  link: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: `0 20px 40px -10px ${COLORS.primary}3F`
    }}
    className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group border border-slate-700 h-full flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 flex-1 flex flex-col">
      <div className="p-6 bg-gradient-to-r from-slate-800 to-violet-900/50 text-white relative overflow-hidden">
        <div className="text-xs sm:text-sm text-indigo-400 font-medium">{date}</div>
        <h3 className="text-xl sm:text-2xl font-bold my-2 leading-tight">
          {title}
        </h3>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <motion.div
          className="w-full h-48 rounded-xl mb-4 overflow-hidden relative group flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>
        <p className="text-sm sm:text-base text-slate-300 mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        <Button
          variant="outline"
          className="border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 group relative overflow-hidden px-6 py-5 rounded-lg mt-auto"
          asChild
          style={{
            borderWidth: '1.5px'
          }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center gap-2">
              <span className="group-hover:translate-x-1 transition-transform duration-200 font-medium">
                View Details
              </span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></span>
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
)

const MatrixText = ({ show }: { show: boolean }) => {
  const [letters, setLetters] = useState<string[]>([])
  const text = "TECH MATRIX"
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (!show) return;
    
    const chars: string[] = []
    for (let i = 0; i < text.length; i++) {
      chars.push("")
    }
    setLetters(chars)

    const animation = animate(count, 100, {
      duration: 3,
      ease: "easeOut"
    })

    text.split("").forEach((_, index) => {
      const randomChars = "01█▓▒░│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌"
      let iterations = 0

      const interval = setInterval(() => {
        setLetters((prevLetters) => {
          const newLetters = [...prevLetters]
          if (iterations < 10) {
            newLetters[index] = randomChars[Math.floor(Math.random() * randomChars.length)]
          } else {
            newLetters[index] = text[index]
            clearInterval(interval)
          }
          return newLetters
        })
        iterations++
      }, 50 + index * 30)

      return () => clearInterval(interval)
    })

    return () => animation.stop()
  }, [show])

  if (!show) return null;

  return (
    <div className="mb-4 relative">
      <div className="flex justify-center flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-3 overflow-hidden">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={cn(
              "inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
              "font-extrabold font-mono tracking-tighter",
              "text-transparent bg-clip-text bg-gradient-to-br",
              index % 3 === 0 ? "from-indigo-500 to-violet-500" :
              index % 3 === 1 ? "from-pink-500 to-amber-500" :
              "from-violet-600 to-indigo-500"
            )}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            whileHover={{
              scale: 1.2,
              textShadow: `0 0 20px ${COLORS.primary}7F`,
              transition: { duration: 0.3 }
            }}
            style={{
              textShadow: `0 0 15px ${COLORS.secondary}7F`,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

const Home = () => {
  const { scrollY } = useScroll()
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPastHero(latest > 100)
  })

  const events = [
    {
      title: "SyNECtics'25",
      date: "February 27-28, 2025",
      description: "National level technical symposium with coding challenges and workshops featuring top industry experts and cutting-edge technology showcases.",
      image: "lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png",
      slug: "synec-tics-25",
      link: "#",
    },
    {
      title: "Aura'24",
      date: "October 19, 2024",
      description: "Premier inter-department event with technical challenges, innovative showcases, and exciting prizes for top performers across disciplines.",
      image: "lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png",
      slug: "aura-24",
      link: "#",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section - Clean Version */}
      <section className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90 z-0"></div>
        
        {/* Floating tech shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-3 h-3 rounded-full z-10"
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
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-dashed border-indigo-500/30 rounded-full pointer-events-none z-0"
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
          className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-dashed border-violet-500/30 rounded-full pointer-events-none z-0"
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

        <div className="container mx-auto text-center relative z-30 max-w-6xl px-4">
          <div className="transform translate-y-[-10%] sm:translate-y-[-15%] md:translate-y-[-20%]">
            <MatrixText show={true} />
            
            {/* Department Info */}
            <motion.div 
              className="mt-4 sm:mt-6 md:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <p className="text-slate-300 text-lg sm:text-xl md:text-2xl font-medium mb-2">
                Department of Computer Science and Engineering
              </p>
              <p className="text-indigo-400 text-base sm:text-lg md:text-xl font-medium">
                Nandha Engineering College
              </p>
            </motion.div>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  asChild 
                  className="bg-gradient-to-b from-indigo-500 to-violet-500 hover:from-indigo-500/90 hover:to-violet-500/90 text-white text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 rounded-xl"
                >
                  <Link to="/about">
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="group-hover:translate-x-1 transition-transform duration-200 font-medium">
                        Explore More
                      </span>
                      <ArrowRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
                    </span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  asChild 
                  className="bg-transparent hover:bg-indigo-500/10 border-2 border-violet-500 text-slate-300 hover:text-white text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 rounded-xl"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="group-hover:translate-x-1 transition-transform duration-200 font-medium">
                        Contact Us
                      </span>
                      <ArrowRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
                    </span>
                    <span className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="py-16 md:py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: scrolledPastHero ? 1 : 0,
          transition: { duration: 0.5 }
        }}
      >
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Our Cutting-Edge Offerings</span>
              <motion.span 
                className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <FeatureCard
              icon={Code}
              title="Advanced Curriculum"
              description="Cutting-edge courses in AI, Quantum Computing, and Blockchain with industry-aligned certification programs."
            />
            <FeatureCard
              icon={FileCode}
              title="Tech Labs"
              description="State-of-the-art labs with high-performance computing clusters and VR development stations."
            />
            <FeatureCard
              icon={Lightbulb}
              title="Industry Connect"
              description="Exclusive partnerships with tech giants offering internships and direct recruitment pathways."
            />
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-4 sm:gap-6">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Tech Events</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </motion.h2>
            
            <motion.div 
              className="w-full md:w-auto flex justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="outline"
                className="text-base sm:text-lg text-indigo-500 hover:text-violet-500 group px-6 py-5 rounded-xl"
                asChild
                style={{
                  borderWidth: '1.5px',
                  borderColor: COLORS.primary
                }}
              >
                <Link to="/events" className="flex items-center gap-3">
                  <span className="group-hover:underline font-medium">View All Events</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home