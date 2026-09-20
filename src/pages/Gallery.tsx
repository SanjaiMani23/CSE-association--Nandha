import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Calendar } from 'lucide-react';
import { galleryData, GalleryCategory, GalleryItem, GalleryYear } from '@/data/gallery';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
  const [activeYear, setActiveYear] = useState<'All' | GalleryYear>('All');
  const [previewImage, setPreviewImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryData.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchYear = activeYear === 'All' || item.year === activeYear;
    return matchCategory && matchYear;
  });

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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">No images found</h3>
            <p className="text-slate-400 text-sm">
              Try adjusting the year or category filter, or check back later for new uploads.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setPreviewImage(item)}
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
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-indigo-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-800 bg-slate-900/90">
                <div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold mb-1 inline-block">
                    {previewImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {previewImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-slate-950">
                <img
                  src={previewImage.image}
                  alt={previewImage.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                  }}
                />
              </div>

              <div className="p-4 md:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
                <p className="flex-1 text-sm">{previewImage.caption}</p>
                {previewImage.date && (
                  <span className="text-slate-400 whitespace-nowrap">
                    Recorded: {previewImage.date}
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
