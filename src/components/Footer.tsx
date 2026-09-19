"use client";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/department-of-computer-science-and-engineering-725130321',
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cse__nec',
      icon: <Instagram className="h-4 w-4" />
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1DYTxaQJ9v/',
      icon: <Facebook className="h-4 w-4" />
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Labs', path: '/labs' },
    { name: 'Grievances', path: '/grievances' }
  ];

  const contactInfo = {
    phone: '+91 82483 70733',
    email: 'cse.association.members@gmail.com',
    address: 'Erode - Perundurai, Main Road, Vaikkaalmedu, Erode, Tamil Nadu 638052'
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#7A73D1] to-[#211C84] text-white pt-12 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#B5A8D5]"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
          {/* Brand Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B5A8D5]">
                Tech Matrix
              </h3>
            </div>
            <motion.p
              className="text-white/90 text-xs leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The CSE Department at NEC strives for excellence in education, research, and innovation.
            </motion.p>
            <motion.div
              className="flex space-x-3 pt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-all duration-300 p-1.5 rounded-full text-white"
                  aria-label={link.name}
                  whileHover={{ y: -2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B5A8D5]">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white transition-colors duration-300 text-xs font-medium flex items-center group"
                  >
                    <span className="w-1 h-1 bg-white rounded-full mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B5A8D5]">
              Contact
            </h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-1 rounded-full mt-0.5">
                  <MapPin size={14} className="text-white flex-shrink-0" />
                </div>
                <p className="text-white/90 text-xs leading-relaxed">{contactInfo.address}</p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <Phone size={14} className="text-white flex-shrink-0" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-white/90 hover:text-white transition-colors duration-300 text-xs">
                  {contactInfo.phone}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <Mail size={14} className="text-white flex-shrink-0" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-white/90 hover:text-white transition-colors duration-300 text-xs">
                  {contactInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 pt-6 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-center text-white/90 text-xs"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} <span className="text-white font-medium">NEC CSE</span>. All rights reserved.
          </motion.p>
          <motion.p
  className="text-center text-white/70 text-xxs mt-1 select-text"
  initial={{ opacity: 0, y: 5 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  Crafted by the CSE community
  
</motion.p>

        </motion.div>
      </div>
      <span className="text-transparent select-text"> Chanthuru</span>

    </footer>
  );
};

export default Footer;