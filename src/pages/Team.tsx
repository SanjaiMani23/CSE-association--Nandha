"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

// Color scheme matching the home page
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

const MemberCard = ({
  name,
  role,
  year,
  image,
}: {
  name: string;
  role?: string;
  year: string;
  image: string;
}) => {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all duration-300 w-full h-full relative overflow-hidden group"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-28 h-28 rounded-full overflow-hidden relative mb-3 group border-2 border-indigo-500/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h4 className="text-sm font-semibold text-slate-100 line-clamp-2 mb-1">
        {name}
      </h4>
      
      {role && (
        <p className="text-xs text-violet-400 font-medium line-clamp-1 mb-1">
          {role}
        </p>
      )}
      
      <p className="text-xs text-indigo-400 font-medium">
        {year}
      </p>
    </motion.div>
  );
};

const SectionTitle = ({ title }: { title: string }) => (
  <div className="relative mb-16">
    <motion.h3 
      className="text-4xl sm:text-5xl font-bold text-center relative z-10 inline-block px-6 py-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </span>
    </motion.h3>
    <motion.div 
      className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-40 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    />
  </div>
);

const Team = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Removed background pattern and gradient overlay */}
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 relative">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                MEET OUR TEAM
              </span>
            </motion.h1>
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm inline-block px-6 py-3 rounded-xl border border-indigo-500/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                The brilliant minds behind our success and innovation
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/50 rounded-2xl p-8 sm:p-10 text-center shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8">
                Head of The Department
              </h3>
              <div className="flex flex-col items-center gap-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg relative group">
                  <img
                    src="/lovable-uploads/50885d3b-8143-43cd-9747-546663c22c17.png"
                    alt="Dr. Rajasekaran T"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-100">
                  Dr. T. Rajasekaran, M.E, Ph.D.
                </h4>
                <p className="text-violet-400 font-medium text-lg">Prof. & Head / CSE</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/50 rounded-2xl p-8 sm:p-10 text-center shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-violet-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8">
                Association Incharge
              </h3>
              <div className="flex flex-col items-center gap-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg relative group">
                  <img
                    src="/lovable-uploads/71f5b66a-b7fb-4a7c-a25a-cf47bdd6b834.png"
                    alt="Dr. Karuppusamy S"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-100">
                  Dr. S. Karuppusamy, M.E, Ph.D.
                </h4>
                <p className="text-violet-400 font-medium text-lg">AsP / CSE</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Office Bearers" />
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                { name: "Mr. G. Mohana Prasath", role: "Secretary", year: "IV Year", image: "Office bearers/Mohana prasath.jpg  " },
                { name: "Mr. C. Udhay Karthik", role: "Treasurer", year: "IV Year", image: "Office bearers/Udhay Karthik.jpg" },
                { name: "Mr. M. Kavikumar", role: "Joint Secretary", year: "III Year", image: "Office bearers/kavikumar.jpg" },
                { name: "Mr. S. Balahariharan", role: "Joint Treasurer", year: "III Year", image: "Office bearers/Balahariharan.jpg" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    year={member.year}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Executive Members" />
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.05 }}
              viewport={{ once: true }}
            >
              {[
                { name: "Mr. M. Dhilip", year: "IV Year", image: "/office/Dhilip.jpg" },
                { name: "Ms. M. Hanushree", year: "IV Year", image: "/office/Hanushree.jpg" },
                { name: "Mr. K. Rumesh Kumaran", year: "IV Year", image: "/office/Rumesh.jpg" },
                { name: "Ms. T. Saarumathi", year: "IV Year", image: "/office/Saarumathi.jpg" },
                { name: "Ms. R. Abinaya", year: "III Year", image: "office/1745938528340.jpg" },
                { name: "Mr. S. S. Arunesh", year: "III Year", image: "/office/Arunesh.jpg" },
                { name: "Mr. M. S. Phurnes", year: "III Year", image: "/office/Phurnes.jpg" },
                { name: "Ms. A. K. Nandhana", year: "III Year", image: "/office/Nandhana.jpg" },
                { name: "Ms. S. Subaranjani", year: "III Year", image: "/office/Subaranjani.jpg" },
                { name: "Mr. Santhosh Dinakaran", year: "III Year", image: "/office/Santhosh.jpg" },
                { name: "Mr. P. Y. Ashwin Uvraj", year: "II Year", image: "/office/Ashwin.jpg" },
                { name: "Ms. A. J. Deshika", year: "II Year", image: "/office/Deshika.jpg" },
                { name: "Mr. B. Harish Kumar", year: "II Year", image: "/office/Harish.jpg" },
                { name: "Ms. T. L. Jana Sri", year: "II Year", image: "/office/Jana%20Sri.jpg" },
                { name: "Mr. M. Pradeesh", year: "II Year", image: "/office/Pradeesh.jpg" },
                { name: "Mr. R. Rupanarayanan", year: "II Year", image: "/office/Rupan.jpg" },
                { name: "Ms. R. Shamiksha", year: "II Year", image: "/office/Shamiksha.jpg" },
                { name: "Mr. R. Sree Nandhu", year: "II Year", image: "/office/Sree%20Nandhu.jpg" },
                // New members added here
                { name: "Ms. Rithika S", year: "I Year", image: "/office/ritika.jpg" },
                { name: "Mr. Manish K", year: "I Year", image: "/office/Manish.jpg" },
                { name: "Ms. Sruthi S", year: "I Year", image: "/office/Sruthi.jpg" },
                { name: "Ms. H. Lithika Shree", year: "I Year", image: "/office/litika.jpg" },
                { name: "Ms. R. Dhanu Shree", year: "I Year", image: "/office/dhanu.jpg" },
                { name: "Ms. S. Oviya", year: "I Year", image: "/office/Oviya.jpg" },
                // Additional new members
                { name: "Mr. Harish A", year: "I Year", image: "/office/image.png" },
                { name: "Mr. Someshkumar M", year: "I Year", image: "/office/WhatsApp Image 2025-09-28 at 07.40.30_c47c1417.jpg" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <MemberCard
                    name={member.name}
                    year={member.year}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Core Members" />
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.05 }}
              viewport={{ once: true }}
            >
              {[
                { name: "Ms. B. Sharmila", year: "IV Year", image: "/core/Sharmila.jpg" },
                { name: "Mr. S. R. Chanthuru", year: "IV Year", image: "/core/Chanthuru.jpg" },
                { name: "Mr. R. Dharun Raj", year: "IV Year", image: "/core/Dharun Raj.jpg" },
                { name: "Ms. V. Shalini", year: "IV Year", image: "/core/Shalini V.jpg" },
                { name: "Mr. A. Mohamed Abu Bakkar Siddiq", year: "III Year", image: "/core/Abu Bakkar.jpg" },
                { name: "Mr. C. Vishal", year: "III Year", image: "/core/Vishal.jpg" },
                // Nakshatra removed from here
                { name: "Mr. A. Manibharaathi", year: "III Year", image: "/core/Manibharaathi.jpg" },
                { name: "Ms. S. Dhivya", year: "III Year", image: "/core/dhivya.jpg" },
                { name: "Ms. S. Aashiqa Fathima", year: "II Year", image: "/core/Aashiqa.jpg" },
                { name: "Mr. U. Mahendran", year: "II Year", image: "/core/Mahendran.jpg" },
                { name: "Mr. Prithiv Krishna", year: "II Year", image: "/core/Prithiv.jpg" },
                { name: "Ms. E. Subitcha", year: "II Year", image: "/core/Subitcha.jpg" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <MemberCard
                    name={member.name}
                    year={member.year}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 2024-2025 Group Photo Section */}
          <motion.div 
            className="flex justify-center my-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/50 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/allmem/image.png"
                alt="Core Team Group 2024-2025"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div 
                className="absolute inset-0 flex items-end justify-center p-6 sm:p-10 bg-gradient-to-t from-slate-900/90 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-indigo-500/50 shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 text-center">
                    CSE Association Team 2024-25
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 2023-2024 Group Photo Section */}
          <motion.div 
            className="flex justify-center my-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-violet-500/50 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/allmem/oldimage.png" // 
                alt="Core Team Group 2023-2024"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div 
                className="absolute inset-0 flex items-end justify-center p-6 sm:p-10 bg-gradient-to-t from-slate-900/90 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-violet-500/50 shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 text-center">
                    CSE Association Team 2023-24
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;