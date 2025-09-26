import React from 'react';
import { X } from 'lucide-react';

interface TraditionModalProps {
  tradition: {
    title: string;
    description: string;
    icon: string;
    gradient: string;
    detailedContent: string;
    image: string;
    culturalSignificance: string;
    modernPractice: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TraditionModal: React.FC<TraditionModalProps> = ({ tradition, isOpen, onClose }) => {
  if (!isOpen || !tradition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-amber-500/30 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="relative p-4 sm:p-6 border-b border-amber-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${tradition.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <span className="text-lg sm:text-xl">{tradition.icon}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white font-playfair truncate">{tradition.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300 focus-visible:focus flex-shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(90vh-120px)] p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Hero Image */}
          <div className="gallery-image overflow-hidden">
            <img 
              src={tradition.image}
              alt={`${tradition.title} tradition`}
              className="w-full h-40 sm:h-48 object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-2 sm:mb-3 font-playfair">About This Tradition</h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{tradition.detailedContent}</p>
          </div>

          {/* Cultural Significance */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-2 sm:mb-3 font-playfair">Cultural Significance</h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{tradition.culturalSignificance}</p>
          </div>

          {/* Modern Practice */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-2 sm:mb-3 font-playfair">Modern Practice</h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{tradition.modernPractice}</p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-3 sm:space-x-4 pt-3 sm:pt-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};