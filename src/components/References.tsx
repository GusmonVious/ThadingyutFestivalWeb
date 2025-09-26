import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

export const References: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const references = [
    {
      type: "Book",
      citation: "Htin Aung, M. (1962). Folk Elements in Burmese Buddhism. Oxford University Press."
    },
    {
      type: "Journal",
      citation: "Spiro, M. E. (1982). Buddhism and Society: A Great Tradition and Its Burmese Vicissitudes. University of California Press."
    },
    {
      type: "Web",
      citation: "Myanmar Tourism Board. (2023). Thadingyut Festival: Festival of Lights. Retrieved from https://www.myanmartourism.org"
    },
    {
      type: "Academic",
      citation: "Keyes, C. F. (1977). The Golden Peninsula: Culture and Adaptation in Mainland Southeast Asia. University of Hawaii Press."
    },
    {
      type: "Cultural",
      citation: "Brac de la Perrière, B. (2009). The Religion of Burma. In Encyclopedia of Religion and Nature (pp. 245-248). Continuum International Publishing Group."
    },
    {
      type: "Historical",
      citation: "Harvey, G. E. (1925). History of Burma: From the Earliest Times to 10 March 1824. Frank Cass & Co."
    }
  ];

  return (
    <div className="border-t border-amber-500/20 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl hover:border-amber-500/40 transition-all duration-300 focus-visible:focus"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
              <BookOpen className="text-white" size={14} />
            </div>
            <span className="text-base sm:text-lg font-semibold text-white font-playfair">References & Sources</span>
          </div>
          <ChevronDown 
            className={`text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            size={18} 
          />
        </button>

        {isOpen && (
          <div className="mt-3 sm:mt-4 p-4 sm:p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-amber-500/10 rounded-2xl animate-slide-up">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 italic">
                Academic sources and references used in the creation of this educational content about Thadingyut Festival.
              </p>
              
              <div className="grid gap-3 sm:gap-4">
                {references.map((ref, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-800/30 rounded-xl">
                    <div className="flex-shrink-0 w-12 sm:w-16 h-5 sm:h-6 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1">
                      <span className="text-xs font-medium text-amber-400">{ref.type}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">{ref.citation}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-amber-500/10">
                <p className="text-xs text-gray-500 text-center px-2">
                  All sources follow APA citation format. Additional cultural insights gathered from community elders and traditional practitioners.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};