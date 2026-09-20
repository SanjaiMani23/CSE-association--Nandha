"use client"

import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Facebook, MessageSquarePlus, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { StudentFeedbackModal } from '@/components/StudentFeedbackModal';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isInquirySent, setIsInquirySent] = useState(false);

  const contactInfo = {
    address: "Department of Computer Science & Engineering, Nandha Engineering College, Erode - Perundurai Main Road, Vaikkaalmedu, Erode, Tamil Nadu 638052",
    phone: "+91 82483 70733",
    email: "cse.association.members@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/department-of-computer-science-and-engineering-725130321",
      instagram: "https://www.instagram.com/cse__nec",
      facebook: "https://www.facebook.com/share/1DYTxaQJ9v/"
    }
  };

  const handleGeneralInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) {
      toast.error('Please fill all required fields');
      return;
    }
    setIsInquirySent(true);
    toast.success('Your message has been sent to the association office.');
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Contact & <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Student Feedback</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions, ideas, or grievances? Connect with the CSE Association faculty in-charges or submit confidential student feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Public Contact Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Department Office
              </h3>

              <div className="space-y-6 text-sm text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/15 text-indigo-400 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Campus Location</h4>
                    <p className="leading-relaxed text-slate-300">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/15 text-pink-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone Inquiry</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-indigo-300 hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/15 text-amber-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Official Association Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-indigo-300 hover:underline break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-700/60">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Follow Our Social Channels
                </h4>
                <div className="flex gap-3">
                  <a
                    href={contactInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#0077B5]/20 border border-[#0077B5]/40 text-[#0077B5] hover:bg-[#0077B5] hover:text-white rounded-xl transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-pink-500/20 border border-pink-500/40 text-pink-400 hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D] hover:text-white rounded-xl transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2] hover:text-white rounded-xl transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coordinator portal quick link */}
            <div className="p-6 bg-slate-900/80 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> Coordinator Access
                </h4>
                <p className="text-xs text-slate-400">View and resolve student tickets</p>
              </div>
              <Button asChild size="sm" variant="outline" className="border-slate-700 text-xs text-indigo-300">
                <a href="/coordinator">Coordinator Portal</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Student Feedback Feature Card + General Message Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Dedicated Student Feedback / Issue Reporting Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/40 via-slate-900 to-violet-900/40 border-2 border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-xl border border-indigo-500/30">
                  <MessageSquarePlus className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <Lock className="w-3 h-3" /> Secure & Confidential
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Student Feedback & Issue Reporting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Are you a CSE student with an innovative event idea, curriculum feedback, vertical equipment request, or grievance? 
                Verify your student identity and submit directly to the Student Coordinators.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setIsFeedbackModalOpen(true)}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-6 py-5 rounded-xl shadow-lg flex items-center gap-2"
                >
                  <MessageSquarePlus className="w-5 h-5" />
                  <span>Submit Student Feedback / Issue</span>
                </Button>
                <span className="text-xs text-slate-400">
                  Directly dispatched to Student Coordinators
                </span>
              </div>
            </motion.div>

            {/* General Public Contact Form */}
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                General Public Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                For alumni, guest lecturers, prospective partners, and general inquiries.
              </p>

              {isInquirySent ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-emerald-300">
                  <h4 className="font-bold text-base mb-1">Inquiry Dispatched!</h4>
                  <p className="text-xs">We will get back to you at {inquiryEmail} shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleGeneralInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={inquirySubject}
                      onChange={(e) => setInquirySubject(e.target.value)}
                      placeholder="e.g. Industry Partnership / Technical Workshop Proposal"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium py-2.5 rounded-xl shadow transition-all"
                  >
                    Send General Inquiry <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Student Feedback Modal */}
      <StudentFeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </PageLayout>
  );
};

export default Contact;