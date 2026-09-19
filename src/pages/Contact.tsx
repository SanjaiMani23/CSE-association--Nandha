"use client"

import PageLayout from '@/components/PageLayout';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Using the same color scheme as the about page
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

const Contact = () => {
  const contactInfo = {
    address: "Erode - Perundurai, Main Road, Vaikkaalmedu, Erode, Tamil Nadu 638052",
    phone: "+91 82483 70733",
    email: "cse.association.members@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/department-of-computer-science-and-engineering-725130321",
      instagram: "https://www.instagram.com/cse__nec",
      facebook: "https://www.facebook.com/share/1DYTxaQJ9v/"
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
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
              Contact Us
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Reach out to the Computer Science and Engineering Department
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Contact Information */}
              <div className="p-8 md:p-10 bg-slate-800/50 backdrop-blur-sm">
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                </motion.div>

                <div className="space-y-6">
                  <ContactItem 
                    icon={<MapPin className="h-5 w-5 text-violet-400" />}
                    title="Address"
                    content={contactInfo.address}
                  />
                  
                  <ContactItem 
                    icon={<Phone className="h-5 w-5 text-violet-400" />}
                    title="Phone"
                    content={contactInfo.phone}
                  />
                  
                  <ContactItem 
                    icon={<Mail className="h-5 w-5 text-violet-400" />}
                    title="Email"
                    content={contactInfo.email}
                  />
                </div>

                <motion.div 
                  className="mt-10 pt-6 border-t border-slate-700/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
                  <div className="flex gap-4">
                    <SocialLink 
                      icon={<Linkedin className="h-5 w-5" />} 
                      href={contactInfo.socials.linkedin} 
                      bgColor="bg-[#0077B5]"
                    />
                    <SocialLink 
                      icon={<Instagram className="h-5 w-5" />} 
                      href={contactInfo.socials.instagram} 
                      bgColor="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]"
                    />
                    <SocialLink 
                      icon={<Facebook className="h-5 w-5" />} 
                      href={contactInfo.socials.facebook} 
                      bgColor="bg-[#1877F2]"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-10 bg-slate-900/50 backdrop-blur-sm">
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-amber-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                </motion.div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      label="Full Name"
                      type="text"
                      placeholder="Your name"
                    />
                    <FormField
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <FormField
                    id="subject"
                    label="Subject"
                    type="text"
                    placeholder="Subject of your message"
                  />

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium py-3 rounded-lg shadow-lg transition-all"
                    >
                      Send Message <Send size={18} className="ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Our Location</h2>
            <p className="text-slate-300 mt-2">
              Visit us at our campus in Erode
            </p>
          </motion.div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-96 md:h-[500px] border border-slate-700/50"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Nandha+Engineering+College,+Erode+-+Perundurai,+Main+Road,+Vaikkaalmedu,+Erode,+Tamil+Nadu+638052&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nandha Engineering College Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <motion.div
      className="flex items-start p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-1 mr-4 p-2 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full">{icon}</div>
      <div>
        <h3 className="text-white font-medium text-lg mb-1">{title}</h3>
        <p className="text-slate-300 text-sm md:text-base">{content}</p>
      </div>
    </motion.div>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  bgColor?: string;
}

const SocialLink = ({ icon, href, bgColor = "bg-violet-600" }: SocialLinkProps) => {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center text-white hover:opacity-90 transition-all shadow-md`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const FormField = ({ id, label, type, placeholder }: FormFieldProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-500"
        placeholder={placeholder}
      />
    </motion.div>
  );
};

export default Contact;