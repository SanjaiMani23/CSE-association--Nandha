"use client"

import { Calendar, ExternalLink } from 'lucide-react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Events = () => {
  const events = [
    {
      year: "2025",
      events: [
        {
          title: "Teachers Day 2025",
          date: "Sep 2025",
          description: "Celebration honoring teachers with cultural programs and activities to show gratitude.",
          driveLink: "https://drive.google.com/drive/folders/1Z7-cK7oONpIpfL1h6oOB9f2MLx3-ASBE?usp=drive_link",
        },
        {
          title: "SYNECTICS'25",
          date: "Mar 2025",
          description: "National Level Technical Symposium featuring technical events, workshops, and competitions.",
          driveLink: "https://drive.google.com/drive/folders/1pQ2ZnrXSy7x-dIOayaeSVrpfRF0aosop?usp=drive_link",
        },
        {
          title: "Investiture Ceremony",
          date: "Mar 2025",
          description: "The Investiture Ceremony is when new student leaders get their badges and take an oath.",
          driveLink: "https://drive.google.com/drive/folders/1IyG7ZfHogAMbvOgIz33kAMqLCA5blmt7?usp=drive_link",
        },
        {
          title: "Pongal Celebration 2025",
          date: "Jan 2025",
          description: "Traditional harvest festival celebration with cultural activities.",
          driveLink: "https://drive.google.com/drive/folders/1AUS9MpW05no-f_HsgDGb9VlOITqfWHUk?usp=drive_link",
        },
      ],
    },
    {
      year: "2024",
      events: [
        {
          title: "Inter Department Event",
          date: "Oct 2024",
          description: "Collaborative events between different departments.",
          driveLink: "https://drive.google.com/drive/folders/1lPYTw-e2U0lG_yHxKz2luROgSzdlKcIf?usp=drive_link",
        },
        {
          title: "Teachers Day",
          date: "Sep 2024",
          description: "Celebration honoring teachers with cultural programs and activities.",
          driveLink: "https://drive.google.com/drive/folders/1Z7-cK7oONpIpfL1h6oOB9f2MLx3-ASBE?usp=drive_link",
        },
        {
          title: "Induction Program 2028 Batch",
          date: "Sep 2024",
          description: "Welcome program for the new batch of students.",
          driveLink: "https://drive.google.com/drive/folders/1cKPw4Ny8l5BY8NfL-9snsgzemzZ3TWQw?usp=drive_link",
        },
        {
          title: "SYNECTICS'24",
          date: "Mar 2024",
          description: "National Level Technical Symposium with various technical competitions.",
          driveLink: "https://drive.google.com/drive/folders/1q_ZyZsSaA-u98v29HcyC3dp-38wLvHwv?usp=drive_link",
        },
      ],
    },
  ]

  return (
    <PageLayout>
      <section className="pt-16 md:pt-20 lg:pt-24 py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Our Events
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-slate-950 py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative">
            {/* S-shaped timeline */}
            <svg 
              className="absolute left-1/2 top-0 h-full w-full max-w-md transform -translate-x-1/2 z-0 pointer-events-none"
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <path 
                d="M50,0 
                   C20,50 20,100 50,150
                   C80,200 80,250 50,300
                   C20,350 20,400 50,450
                   C80,500 80,550 50,600
                   C20,650 20,700 50,750
                   C80,800 80,850 50,900"
                stroke="url(#timelineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,3"
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Year 2025 Section - Most Recent at Top */}
            <div className="relative mb-32">
              <div className="flex justify-center my-12">
                <motion.div 
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  2025
                </motion.div>
              </div>

              {events[0].events.map((event, i) => (
                <motion.div
                  key={i}
                  className={`relative mb-16 w-full flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-1/2 w-5 h-5 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full z-10 transform -translate-x-1/2 border-4 border-slate-950 shadow-lg" />

                  {/* Event Card */}
                  <div className={`md:w-[45%] w-full px-4 z-10 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <motion.div 
                      className="backdrop-blur-xl border border-pink-500/30 rounded-xl p-6 bg-slate-900/60 hover:border-violet-500/50 hover:shadow-xl transition-all shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`flex items-center gap-2 text-pink-300 text-sm mb-2 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-slate-300 mb-4">{event.description}</p>
                      <div className={`${i % 2 === 0 ? 'justify-start' : 'justify-end'} flex`}>
                        <Button 
                          variant="outline" 
                          className="border-pink-500 text-pink-300 hover:bg-pink-500/10 hover:text-white"
                          asChild
                        >
                          <a href={event.driveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <span>View Gallery</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Year 2024 Section - Older at Bottom */}
            <div className="relative">
              <div className="flex justify-center my-12">
                <motion.div 
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  2024
                </motion.div>
              </div>

              {events[1].events.map((event, i) => (
                <motion.div
                  key={i}
                  className={`relative mb-16 w-full flex ${i % 2 !== 0 ? 'justify-start' : 'justify-end'} items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-1/2 w-5 h-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full z-10 transform -translate-x-1/2 border-4 border-slate-950 shadow-lg" />

                  {/* Event Card */}
                  <div className={`md:w-[45%] w-full px-4 z-10 ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                    <motion.div 
                      className="backdrop-blur-xl border border-indigo-500/30 rounded-xl p-6 bg-slate-900/60 hover:border-violet-500/50 hover:shadow-xl transition-all shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`flex items-center gap-2 text-indigo-300 text-sm mb-2 ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-slate-300 mb-4">{event.description}</p>
                      <div className={`${i % 2 !== 0 ? 'justify-start' : 'justify-end'} flex`}>
                        <Button 
                          variant="outline" 
                          className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 hover:text-white"
                          asChild
                        >
                          <a href={event.driveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <span>View Gallery</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Events