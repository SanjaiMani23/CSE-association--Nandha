import React, { useState, useEffect, useCallback } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { galleryData, GalleryCategory, GalleryItem, GalleryYear } from '@/data/gallery';
import { cn } from '@/lib/utils';

const CATEGORIES: ('All' | GalleryCategory)[] = [
  'All',
  'Events',
  'Activities',
  'Workshops',
  'Department',
  'Other Association activities',
];

const YEARS: ('All' | GalleryYear)[] = [
  'All',
  '2026–27',
  '2025–26',
  'Previous Years',
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryCategory>('All');
  const [activeYear, setActiveYear] = useState<'All' | GalleryYear>('2026–27');
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);

  // Split items into Product Day (2026-27), Synthetics'26 (2026-27), and Other items
  const productDayItems = galleryData.filter((item) => {
    if (!item.isProductDay) return false;
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchYear = activeYear === 'All' || activeYear === '2026–27';
    return matchCategory && matchYear;
  });

  const syntheticsItems = galleryData.filter((item) => {
    if (!item.isSynthetics) return false;
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchYear = activeYear === 'All' || activeYear === '2026–27';
    return matchCategory && matchYear;
  });

  const generalItems = galleryData.filter((item) => {
    if (item.isProductDay || item.isSynthetics) return false;
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchYear = activeYear === 'All' || item.year === activeYear;
    return matchCategory && matchYear;
  });

  const openLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setPreviewIndex(index);
  };

  const closeLightbox = () => {
    setPreviewIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (previewIndex === null || lightboxItems.length === 0) return;
    setPreviewIndex((prev) => (prev !== null ? (prev - 1 + lightboxItems.length) % lightboxItems.length : 0));
  }, [previewIndex, lightboxItems.length]);

  const handleNext = useCallback(() => {
    if (previewIndex === null || lightboxItems.length === 0) return;
    setPreviewIndex((prev) => (prev !== null ? (prev + 1) % lightboxItems.length : 0));
  }, [previewIndex, lightboxItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewIndex, handlePrev, handleNext]);

  const currentPreviewItem = previewIndex !== null && lightboxItems[previewIndex] ? lightboxItems[previewIndex] : null;

  const totalVisibleItems = productDayItems.length + syntheticsItems.length + generalItems.length;

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
              Visual Archives
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Department <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Memories, symposium highlights, hands-on lab sessions, and campus milestones of the CSE Association.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        {/* Year Filter */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">Academic Year</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                  activeYear === year
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dedicated Product Day Section (when Academic Year is 2026–27 or All, and category matches) */}
        {productDayItems.length > 0 && (
          <div className="mb-14">
            {/* College Style Section Divider & Banner */}
            <div className="relative border-t border-b border-slate-700/70 py-8 px-6 my-8 text-center bg-gradient-to-r from-slate-900/60 via-indigo-950/30 to-slate-900/60 rounded-2xl shadow-lg">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Special Event • Academic Year 2026–27
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wider uppercase mb-1.5">
                PRODUCT DAY
              </h2>
              <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                Product Day 2026–27
              </p>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed italic">
                "Highlights and memorable moments from Product Day organized by the CSE Association."
              </p>
            </div>

            {/* Product Day Photo Grid (Desktop: 3-4, Tablet: 2-3, Mobile: 1-2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {productDayItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(productDayItems, idx)}
                  className="group cursor-pointer bg-slate-800/70 backdrop-blur-sm border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Hover overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 bg-indigo-600/90 rounded-full text-white backdrop-blur-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-indigo-300 border border-slate-700">
                        Product Day
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-amber-300 border border-slate-700">
                        2026–27
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    {item.date && (
                      <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-xs text-slate-400 gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Synthetics'26 Section (when Academic Year is 2026–27 or All, and category matches) */}
        {syntheticsItems.length > 0 && (
          <div className="mb-14">
            {/* Section Divider & Banner */}
            <div className="relative border-t border-b border-slate-700/70 py-8 px-6 my-8 text-center bg-gradient-to-r from-slate-900/60 via-violet-950/30 to-slate-900/60 rounded-2xl shadow-lg">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                National Technical Symposium • Academic Year 2026–27
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wider uppercase mb-1.5">
                SYNTHETICS'26
              </h2>
              <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Synthetics'26 (SyNECtics'26)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed italic">
                "Highlights, technical project presentations, organizing committee, and hackathon challenges from Synthetics'26 organized by the CSE Association."
              </p>
            </div>

            {/* Synthetics'26 Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {syntheticsItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(syntheticsItems, idx)}
                  className="group cursor-pointer bg-slate-800/70 backdrop-blur-sm border border-slate-700/80 hover:border-violet-500/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Hover overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 bg-violet-600/90 rounded-full text-white backdrop-blur-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-violet-300 border border-slate-700">
                        Synthetics'26
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-amber-300 border border-slate-700">
                        2026–27
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    {item.date && (
                      <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-xs text-slate-400 gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-violet-400" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* General Gallery Grid (or Additional Events) */}
        {generalItems.length > 0 && (
          <div>
            {(productDayItems.length > 0 || syntheticsItems.length > 0) && (
              <div className="mb-6 pt-4 border-t border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Other Highlights & Events
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generalItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(generalItems, idx)}
                  className="group cursor-pointer bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Hover overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 bg-indigo-600/80 rounded-full text-white backdrop-blur-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-slate-700/80">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-slate-700/80">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    {item.date && (
                      <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-xs text-slate-400 gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {totalVisibleItems === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">No images found</h3>
            <p className="text-slate-400 text-sm">
              Try adjusting the year or category filter, or check back later for new uploads.
            </p>
          </div>
        )}
      </section>

      {/* Lightbox Modal with Full Navigation (Prev, Next, Close, Keyboard shortcuts) */}
      <AnimatePresence>
        {currentPreviewItem && previewIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/92 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-indigo-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-800 bg-slate-900/95">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold inline-block">
                    {currentPreviewItem.isProductDay ? 'Product Day' : currentPreviewItem.isSynthetics ? "Synthetics'26" : currentPreviewItem.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Photo {previewIndex + 1} of {lightboxItems.length}
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body with Previous / Next Buttons */}
              <div className="relative flex-1 overflow-hidden p-2 sm:p-4 md:p-6 flex items-center justify-center bg-slate-950 min-h-[300px] sm:min-h-[420px] max-h-[68vh]">
                <img
                  key={currentPreviewItem.id}
                  src={currentPreviewItem.image}
                  alt={currentPreviewItem.title}
                  className="max-h-[62vh] max-w-full w-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                  }}
                />

                {/* Left (Prev) Button */}
                {lightboxItems.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white backdrop-blur-md border border-slate-700/80 transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

                {/* Right (Next) Button */}
                {lightboxItems.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white backdrop-blur-md border border-slate-700/80 transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-5 border-t border-slate-800 bg-slate-900/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex-1 pr-4">
                  <h4 className="text-sm font-bold text-white mb-1">{currentPreviewItem.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300">{currentPreviewItem.caption}</p>
                </div>
                {currentPreviewItem.date && (
                  <span className="text-slate-400 whitespace-nowrap bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                    {currentPreviewItem.date}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;

