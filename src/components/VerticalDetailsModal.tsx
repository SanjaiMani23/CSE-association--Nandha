import React from 'react';
import { X, CheckCircle2, User, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalItem } from '@/data/verticals';

interface VerticalDetailsModalProps {
  vertical: VerticalItem | null;
  onClose: () => void;
}

export const VerticalDetailsModal: React.FC<VerticalDetailsModalProps> = ({
  vertical,
  onClose,
}) => {
  if (!vertical) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Top Banner Image */}
          <div className="relative h-48 w-full overflow-hidden bg-slate-950">
            <img
              src={vertical.image}
              alt={vertical.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 bg-indigo-500/80 text-white font-bold text-xs rounded-full uppercase tracking-wider">
                Department Vertical
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                {vertical.name}
              </h2>
              <p className="text-indigo-300 font-medium text-sm">
                {vertical.fullName}
              </p>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center gap-3 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                  Staff In-charge
                </span>
                <span className="text-base font-bold text-amber-300">
                  {vertical.staffInCharge}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Mission & Scope
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {vertical.summary}
              </p>
            </div>

            {vertical.keyAreas && vertical.keyAreas.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" /> Key Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {vertical.keyAreas.map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/40 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-end">
            <Button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
