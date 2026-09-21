"use client"

import React, { useState } from "react"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { verticalsData, VerticalItem } from "@/data/verticals"
import { VerticalDetailsModal } from "@/components/VerticalDetailsModal"
import {
  User,
  ArrowRight,
  CheckCircle2,
  Compass,
  Award,
  X,
  Layers
} from "lucide-react"

export const Verticals: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedVertical, setSelectedVertical] = useState<VerticalItem | null>(null)

  // Split into 3 + 2 layout matching the reference image
  const row1 = verticalsData.slice(0, 3) // RIC, CIC, GenAI
  const row2 = verticalsData.slice(3, 5) // AV/VR, Crevation Lab

  const renderVerticalCard = (vertical: VerticalItem) => {
    const isHovered = hoveredId === vertical.id
    const hasActiveCard = hoveredId !== null
    const isDimmed = hasActiveCard && !isHovered

    return (
      <div
        key={vertical.id}
        className="relative w-full max-w-[370px] min-h-[560px] group"
        onMouseEnter={() => setHoveredId(vertical.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={() => setHoveredId(isHovered ? null : vertical.id)}
      >
        {/* ============================================================
            1. DEFAULT CARD (Exact architecture from reference image)
            ============================================================ */}
        <div
          className={`w-full h-full rounded-3xl overflow-hidden bg-white border border-slate-200 p-5 flex flex-col justify-between transition-all duration-400 ease-in-out cursor-pointer select-none shadow-[0_4px_25px_rgba(0,0,0,0.06)] ${
            isDimmed
              ? "opacity-40 scale-[0.97] blur-[0.3px]"
              : "opacity-100 scale-100 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10"
          }`}
        >
          <div className="space-y-4">
            {/* Top Image Banner with Badges & Title */}
            <div className="w-full h-48 rounded-2xl overflow-hidden relative bg-slate-900 border border-slate-100">
              <img
                src={vertical.image}
                alt={vertical.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                }}
              />
              {/* Deep dark gradient ensuring text is 100% visible on any background */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Badges on top of image */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#7C3AED] text-white shadow-md">
                  VERTICAL
                </span>
                {vertical.hasMouBadge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                    VERIFIED MOU
                  </span>
                )}
              </div>

              {/* Title & Subtitle at bottom of image */}
              <div className="absolute bottom-3.5 left-4 right-4 z-10">
                <h3 className="text-2xl font-black text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {vertical.name}
                </h3>
                <p className="text-xs font-semibold text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] truncate mt-0.5">
                  {vertical.fullName}
                </p>
              </div>
            </div>

            {/* Staff In-Charge Row with Circular Avatar Photo */}
            <div className="flex items-center gap-3 py-1">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 shadow-xs">
                {vertical.staffImage ? (
                  <img
                    src={vertical.staffImage}
                    alt={vertical.staffInCharge}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-tight">
                  STAFF IN-CHARGE
                </span>
                <span className="text-sm font-bold text-slate-900 truncate block">
                  {vertical.staffInCharge}
                </span>
              </div>
            </div>

            {/* Short Preview / Summary */}
            <p className="text-slate-700 text-xs leading-relaxed line-clamp-3 font-normal">
              {vertical.summary}
            </p>

            {/* 3 Key Focus Areas (Stacked pills from reference image) */}
            <div className="space-y-1.5 pt-1">
              {vertical.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-medium w-fit max-w-full truncate shadow-2xs"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Explore Lab Details Button */}
          <div className="pt-4">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedVertical(vertical)
              }}
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold py-2.5 flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Explore Lab Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors" />
            </Button>
          </div>
        </div>

        {/* ============================================================
            2. EXPANDED SQUARE OVERLAY (Centered Expansion in All 4 Directions)
            ============================================================ */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key={`expanded-${vertical.id}`}
              initial={{
                opacity: 0,
                scale: 0.7,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Smooth premium cubic-bezier
              }}
              style={{
                transformOrigin: "center center",
              }}
              className="fixed sm:absolute top-1/2 left-1/2 z-50 w-[94vw] sm:w-[500px] md:w-[540px] max-w-[calc(100vw-2rem)] aspect-square max-h-[92vh] sm:max-h-none rounded-3xl p-5 sm:p-6 bg-slate-950 border-2 border-indigo-500 shadow-[0_25px_70px_rgba(0,0,0,0.65)] text-white flex flex-col justify-between pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Close Button */}
              <button
                onClick={() => setHoveredId(null)}
                className="sm:hidden absolute top-3 right-3 p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top Row: Mini Header Visual, Badges & Title */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-indigo-500/60 shadow-md bg-slate-900">
                  <img
                    src={vertical.image}
                    alt={vertical.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        {vertical.name}
                      </h3>
                      {vertical.hasMouBadge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-500 text-slate-950 shadow-xs">
                          MOU
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 shrink-0">
                      {vertical.staffImage ? (
                        <img
                          src={vertical.staffImage}
                          alt={vertical.staffInCharge}
                          className="w-4 h-4 rounded-full object-cover object-top border border-amber-400"
                        />
                      ) : (
                        <User className="w-3 h-3" />
                      )}
                      {vertical.staffInCharge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-indigo-400 truncate mt-0.5">
                    {vertical.fullName}
                  </p>
                </div>
              </div>

              {/* Middle Content: Purpose, Vision & Focus Areas (Arranged cleanly in 1 View) */}
              <div className="space-y-2.5 py-2 flex-1 flex flex-col justify-around">
                {/* Complete Purpose / Summary */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block mb-1">
                    Purpose & Scope
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-100 leading-relaxed line-clamp-3 font-normal">
                    {vertical.summary}
                  </p>
                </div>

                {/* Vision Highlight */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1 mb-0.5">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" /> Vision
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-200 italic leading-snug line-clamp-2">
                    "{vertical.vision}"
                  </p>
                </div>

                {/* Focus Areas 3 Columns */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1 mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" /> Focus Areas
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                    {vertical.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Achievement if exists (CIC) */}
                {vertical.verifiedAchievement && (
                  <div className="p-2 sm:p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/50">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" /> Verified Achievement
                    </span>
                    <p className="text-[11px] text-amber-100 font-medium line-clamp-2 mt-0.5">
                      {vertical.verifiedAchievement}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom CTA Action Button */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-300 font-medium hidden sm:inline truncate max-w-[250px]">
                  {vertical.outcome}
                </span>
                <Button
                  onClick={() => {
                    setSelectedVertical(vertical)
                    setHoveredId(null)
                  }}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold px-4 py-2 flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/40 shrink-0"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <PageLayout>
      {/* Hero Header */}
      <section className="pt-32 pb-12 px-4 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Department Verticals
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the five specialized verticals driving robotics, intelligent computing, generative AI, extended reality, and rapid product prototyping within the Department of Computer Science and Engineering.
          </p>
        </div>
      </section>

      {/* Verticals 3 + 2 Architecture Grid Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[800px] relative overflow-x-clip max-w-full">
        <div className="container mx-auto max-w-7xl space-y-8">
          
          {/* Row 1: 3 Cards (RIC, CIC, GenAI) */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {row1.map((vertical) => renderVerticalCard(vertical))}
          </div>

          {/* Row 2: 2 Cards (AV/VR, Crevation Lab) */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {row2.map((vertical) => renderVerticalCard(vertical))}
          </div>

        </div>
      </section>

      {/* Full Details Modal for in-depth specs */}
      <VerticalDetailsModal
        vertical={selectedVertical}
        onClose={() => setSelectedVertical(null)}
      />
    </PageLayout>
  )
}

export default Verticals

