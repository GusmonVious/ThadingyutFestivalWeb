import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Calendar, Users, MapPin, ChevronDown, Star, Heart, Sparkles } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTimelineNode, setActiveTimelineNode] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create floating particles
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      document.querySelector('.hero-particles')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 8000);
    };

    const interval = setInterval(createParticle, 800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const timelineEvents = [
    { title: "Day 1", description: "Lighting of Lamps", icon: "🏮" },
    { title: "Day 2", description: "Cultural Performances", icon: "🎭" },
    { title: "Day 3", description: "Merit Making", icon: "🙏" },
    { title: "Final Day", description: "Grand Celebration", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-amber-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Thadingyut
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Timeline', 'Traditions', 'Gallery', 'Events'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-amber-400 transition-all duration-300 relative group font-medium focus-visible:focus"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-white focus-visible:focus"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-amber-500/20">
              <div className="flex flex-col space-y-4 px-6 py-6">
                {['Home', 'About', 'Timeline', 'Traditions', 'Gallery', 'Events'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:text-amber-400 transition-colors duration-300 text-left font-medium focus-visible:focus"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-particles absolute inset-0 z-10"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8092966/pexels-photo-8092966.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Buddhist temple with golden lanterns during Thadingyut festival"
            className="w-full h-full object-cover opacity-40"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/90"></div>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent leading-tight">
              Thadingyut
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-4 font-great-vibes">
              Festival of Lights
            </p>
            <p className="text-lg text-amber-100 mb-12 font-medium tracking-wide">
              မီးတိုင်းပွဲတော် • The Sacred Illumination
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Celebrating Buddha's descent from Tavatimsa Heaven, illuminating hearts and homes across Myanmar with the divine light of wisdom, compassion, and eternal peace.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 font-semibold text-lg golden-glow focus-visible:focus"
            >
              <Sparkles className="inline mr-2" size={20} />
              Discover the Festival
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="px-10 py-4 border-2 border-amber-500 text-amber-400 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-semibold text-lg focus-visible:focus"
            >
              <Heart className="inline mr-2" size={20} />
              Join Celebrations
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="text-amber-400" size={32} />
        </div>
      </section>

      {/* Lantern Divider */}
      <div className="lantern-divider">
        <span className="lantern-icon">🏮</span>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              The Sacred Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Thadingyut marks the end of Buddhist Lent and celebrates the Buddha's return from the celestial realm after teaching the Abhidhamma to his mother, Queen Maya, illuminating the path to enlightenment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-10 card-hover golden-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-playfair">Festival of Lights</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  For three sacred days, Myanmar transforms into a constellation of light. Millions of candles, oil lamps, and colorful lanterns create a breathtaking celestial display that honors Buddha's divine wisdom and eternal teachings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-10 card-hover golden-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-playfair">Sacred Timing</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Celebrated on the full moon day of Thadingyut (usually October), this auspicious time marks the end of the three-month Buddhist retreat season and the beginning of the cool season, symbolizing spiritual renewal.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="gallery-image overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Traditional Myanmar pagoda illuminated during Thadingyut festival"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-20 animate-pulse-gold"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full opacity-30 animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Festival Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the sacred progression of Thadingyut through four illuminating days of celebration.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-600 opacity-30"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 timeline-node ${activeTimelineNode === index ? 'active' : ''}`}
                       onClick={() => setActiveTimelineNode(index)}></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-16' : 'ml-auto pl-16'}`}>
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 card-hover">
                      <div className="text-4xl mb-4">{event.icon}</div>
                      <h3 className="text-2xl font-semibold text-white font-playfair mb-3">{event.title}</h3>
                      <p className="text-gray-300 text-lg">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lantern Divider */}
      <div className="lantern-divider">
        <span className="lantern-icon">🏮</span>
      </div>

      {/* Traditions Section */}
      <section id="traditions" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Sacred Traditions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ancient customs that connect generations in reverence, joy, and spiritual awakening, preserving the essence of Buddhist wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lighting Ceremonies",
                description: "Homes, temples, and pagodas glow with countless oil lamps and candles, symbolizing the dispelling of darkness and ignorance from the human heart.",
                icon: "🕯️",
                gradient: "from-amber-500 to-yellow-600"
              },
              {
                title: "Weaving Competitions",
                description: "Communities gather to weave beautiful Kathina robes for monks, celebrating craftsmanship, devotion, and the spirit of giving.",
                icon: "🧵",
                gradient: "from-yellow-500 to-amber-600"
              },
              {
                title: "Merit Making",
                description: "Devotees offer alms, donate to temples, and perform acts of kindness to accumulate merit and honor Buddha's eternal teachings.",
                icon: "🙏",
                gradient: "from-amber-600 to-orange-600"
              },
              {
                title: "Cultural Performances",
                description: "Traditional dances, music, and theatrical performances bring ancient stories and legends to life with vibrant artistry.",
                icon: "🎭",
                gradient: "from-yellow-600 to-amber-500"
              },
              {
                title: "Pagoda Visits",
                description: "Pilgrims journey to sacred sites, offering flowers, incense, and prayers while circumambulating stupas in reverent meditation.",
                icon: "🏛️",
                gradient: "from-amber-500 to-yellow-500"
              },
              {
                title: "Family Gatherings",
                description: "Relatives unite to share traditional foods, exchange blessings, and strengthen bonds across generations in joyful celebration.",
                icon: "👨‍👩‍👧‍👦",
                gradient: "from-orange-500 to-amber-600"
              }
            ].map((tradition, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 card-hover golden-glow group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tradition.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{tradition.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-playfair">{tradition.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Luminous Moments
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Witness the enchanting beauty of Thadingyut celebrations across Myanmar, where light conquers darkness and joy illuminates every heart.
            </p>
          </div>

          <div className="masonry-grid">
            {[
              { src: "https://images.pexels.com/photos/9978463/pexels-photo-9978463.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Golden pagoda illuminated with thousands of candles" },
              { src: "https://images.pexels.com/photos/8092966/pexels-photo-8092966.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Buddhist temple with traditional lanterns" },
              { src: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Night view of illuminated Myanmar pagoda" },
              { src: "https://images.pexels.com/photos/6592450/pexels-photo-6592450.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Traditional oil lamps during festival" },
              { src: "https://images.pexels.com/photos/8180204/pexels-photo-8180204.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Devotees lighting candles at temple" },
              { src: "https://images.pexels.com/photos/6592449/pexels-photo-6592449.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Colorful lanterns hanging in temple" },
              { src: "https://images.pexels.com/photos/8180181/pexels-photo-8180181.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Buddhist monks in candlelight ceremony" },
              { src: "https://images.pexels.com/photos/9978464/pexels-photo-9978464.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Festival celebration with traditional decorations" }
            ].map((image, index) => (
              <div key={index} className="masonry-item">
                <div className="gallery-image group cursor-pointer">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Join the Celebration
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connect with communities worldwide celebrating this sacred festival of light, wisdom, and spiritual awakening.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-10 card-hover golden-glow">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-semibold text-white font-playfair">Community Events</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Grand Lighting Ceremony", date: "October 28, 2024 • 7:00 PM", location: "Shwedagon Pagoda", icon: "🏮" },
                  { title: "Cultural Performance Night", date: "October 29, 2024 • 6:00 PM", location: "Cultural Center", icon: "🎭" },
                  { title: "Merit Making Ceremony", date: "October 30, 2024 • 8:00 AM", location: "Local Monastery", icon: "🙏" },
                  { title: "Lantern Release Festival", date: "October 31, 2024 • 8:00 PM", location: "Inya Lake", icon: "✨" }
                ].map((event, index) => (
                  <div key={index} className="flex items-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="text-3xl mr-4">{event.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-1">{event.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                      <p className="text-amber-400 text-sm font-medium">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-10 card-hover golden-glow">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-semibold text-white font-playfair">Sacred Locations</h3>
              </div>
              <div className="space-y-6">
                {[
                  { 
                    title: "Shwedagon Pagoda", 
                    description: "The most sacred Buddhist pagoda in Myanmar, magnificently illuminated with thousands of golden lights during Thadingyut.",
                    icon: "🏛️"
                  },
                  { 
                    title: "Sule Pagoda", 
                    description: "Historic pagoda in downtown Yangon, serving as the centerpiece of the city's grand celebrations.",
                    icon: "⭐"
                  },
                  { 
                    title: "Mandalay Hill", 
                    description: "Sacred hill offering breathtaking panoramic views of temple lights illuminating the ancient royal capital.",
                    icon: "🏔️"
                  }
                ].map((location, index) => (
                  <div key={index} className="p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">{location.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">{location.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{location.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-amber-500/20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-12">
            <h3 className="text-4xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-6">
              Thadingyut
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              May the divine light of wisdom illuminate your path and bring peace, joy, and prosperity to you and your loved ones. 
              Let the sacred flames of Thadingyut guide us all toward enlightenment and eternal happiness.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <Star className="text-amber-500 animate-pulse" size={24} />
            <Lightbulb className="text-yellow-500 animate-pulse" size={24} />
            <Heart className="text-amber-400 animate-pulse" size={24} />
          </div>
          
          <div className="border-t border-amber-500/20 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Thadingyut Festival EDUSN • Celebrating Myanmar's Sacred Festival of Lights with Love and Devotion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;