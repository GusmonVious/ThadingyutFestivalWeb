import React, { useState } from 'react';
import { ChevronRight, Camera, Calendar } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'traditional' | 'school';
  year?: string;
}

export const Gallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'traditional' | 'school'>('all');

  const images: GalleryImage[] = [
    { src: "/photos/lightningCeremonies.jpg", alt: "Golden pagoda illuminated with thousands of candles", category: 'traditional' },
    { src: "/photos/weavingCompetitions.jpg", alt: "Buddhist temple with traditional lanterns", category: 'traditional' },
    { src: "/photos/nightView.jpg", alt: "Night view of illuminated Myanmar pagoda", category: 'traditional' },
    { src: "/photos/traditionalOilLamps.jpg", alt: "Traditional oil lamps during festival", category: 'traditional' },
    { src: "/photos/meritMaking.jpg", alt: "Devotees lighting candles at temple", category: 'traditional' },
    { src: "/photos/pagodaVisits.jpg", alt: "Colorful lanterns hanging in temple", category: 'traditional' },
    { src: "/photos/lightningCeremonies.jpg", alt: "Buddhist monks in candlelight ceremony", category: 'traditional' },
    { src: "/photos/traditionalDecorations.jpg", alt: "Festival celebration with traditional decorations", category: 'traditional' },
    { src: "/photos/comingSoon.jpg", alt: "Students preparing for Thadingyut celebration", category: 'school', year: '2025' },
    { src: "/photos/comingSoon.jpg", alt: "School lantern making workshop", category: 'school', year: '2025' },
  ];

  const filteredImages = images.filter(img => 
    activeCategory === 'all' || img.category === activeCategory
  );

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex justify-center space-x-4">
        {[
          { key: 'all', label: 'All Photos', icon: Camera },
          { key: 'traditional', label: 'Traditional', icon: Calendar },
          { key: 'school', label: 'School Events', icon: Calendar }
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as any)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 focus-visible:focus ${
              activeCategory === key
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-500/30'
                : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 hover:text-amber-400'
            }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div key={index} className="gallery-image group cursor-pointer relative overflow-hidden">
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {image.category === 'school' && (
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {image.year}
              </div>
            )}
            
            <div className="absolute bottom-3 left-3 right-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-medium truncate">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredImages.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/30 font-medium flex items-center space-x-2 mx-auto focus-visible:focus"
          >
            <span>{showAll ? 'Show Less' : `See All ${filteredImages.length} Photos`}</span>
            <ChevronRight size={16} className={`transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
          </button>
        </div>
      )}

      {/* School Celebration Notice */}
      {activeCategory === 'school' && (
        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl p-6 text-center">
          <div className="text-2xl mb-3">🏫</div>
          <h3 className="text-xl font-semibold text-amber-400 mb-2 font-playfair">School Celebration Coming Soon!</h3>
          <p className="text-gray-300">
            Our school's Thadingyut celebration is happening soon. Photos from the event will be added here to showcase our students' participation in this sacred festival.
          </p>
        </div>
      )}
    </div>
  );
};