"use client"

import PageLayout from '@/components/PageLayout';
import { FileWarning, ExternalLink, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 border border-dashed border-indigo-500/30 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-dashed border-violet-500/30 rounded-full pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 5 }}
      />
    </>
  )
}

const Grievances = () => {
  const formUrl = "https://forms.gle/qjgFheJSK5JZN6aM6";

  return (
    <PageLayout>
      

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Grievance Form Card */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-indigo-500/20 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl shadow-lg">
                    <FileWarning className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Submit Your Grievance</h2>
                </div>
                <p className="text-slate-300 mb-6">
                  Please use the form linked below to submit your grievances or feedback. 
                  All submissions are treated with confidentiality and will be addressed promptly.
                </p>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-500/90 hover:to-violet-600/90 text-white shadow-lg"
                >
                  <a 
                    href={formUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2"
                  >
                    Open Grievance Form <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
              <motion.div 
                className="hidden md:block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <FileWarning size={120} className="text-indigo-500 drop-shadow-lg" />
              </motion.div>
            </div>
          </motion.div>

      {/* Student Coordinators */}
<motion.div
  className="mb-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
    <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
      Student Coordinators
    </span>
  </h3>
  <p className="text-slate-300 mb-6">
    Feel free to contact our student coordinators regarding any redressal:
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Swapped Ms. R. Abinaya to Left */}
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-violet-500/50 transition-all shadow-lg"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-lg font-semibold text-white mb-1">Ms. R. Abinaya</h4>
      <p className="text-sm text-indigo-400 mb-3">CSE III</p>
      <p className="text-slate-300 mb-4 flex items-center gap-2">
        <Phone className="w-4 h-4" /> +91 80154 89671
      </p>
      <Button 
        asChild 
        variant="outline" 
        className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300"
      >
        <a href="tel:+918015489671" className="flex items-center gap-2">
          <Phone size={16} />
          Call Now
        </a>
      </Button>
    </motion.div>
    
    {/* Swapped Mr. Siddiq to Right */}
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-violet-500/50 transition-all shadow-lg"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h4 className="text-lg font-semibold text-white mb-1">Mr. A. Mohamed Abu Bakkar Siddiq</h4>
      <p className="text-sm text-indigo-400 mb-3">CSE III</p>
      <p className="text-slate-300 mb-4 flex items-center gap-2">
        <Phone className="w-4 h-4" /> +91 93422 82902
      </p>
      <Button 
        asChild 
        variant="outline" 
        className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300"
      >
        <a href="tel:+919342282902" className="flex items-center gap-2">
          <Phone size={16} />
          Call Now
        </a>
      </Button>
    </motion.div>
  </div>
</motion.div>


          {/* Grievance Policy */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Grievance Policy
              </span>
            </h3>
            <p className="text-slate-300">
              The Department of Computer Science and Engineering is committed to providing 
              a supportive and inclusive environment for all students. Our grievance 
              resolution system ensures that all concerns are addressed fairly and promptly.
              We maintain strict confidentiality throughout the process and aim to resolve
              all matters within 7-10 working days.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-slate-300 text-sm flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              For technical issues with the form, please email {' '}
              <a 
                href="mailto:cse.association.members@gmail.com" 
                className="text-indigo-400 hover:text-violet-400 hover:underline"
              >
                cse.association.members@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Grievances;