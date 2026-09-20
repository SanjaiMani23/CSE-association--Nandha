import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  brochureUrl: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  title,
  brochureUrl,
}) => {
  if (!isOpen) return null;

  const isPdf = brochureUrl.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight line-clamp-1">
                  {title} - Official Brochure
                </h3>
                <p className="text-xs text-slate-400">Preview & Download</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                asChild
              >
                <a href={brochureUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </Button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Preview */}
          <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-slate-950/50">
            {isPdf ? (
              <iframe
                src={brochureUrl}
                title={`${title} Brochure`}
                className="w-full h-[65vh] rounded-xl border border-slate-800 shadow-inner"
              />
            ) : (
              <div className="relative max-w-full max-h-[70vh] flex items-center justify-center">
                <img
                  src={brochureUrl}
                  alt={`${title} Brochure`}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-slate-800"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = '/lovable-uploads/fornt.jpg';
                  }}
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
            <span>Department of Computer Science and Engineering</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
