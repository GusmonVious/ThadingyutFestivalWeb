import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Calendar, Users, MapPin, ChevronDown, Star, Heart, Sparkles } from 'lucide-react';
import { AudioPlayer } from './components/AudioPlayer';
import { Gallery } from './components/Gallery';
import { TraditionModal } from './components/TraditionModal';
import { References } from './components/References';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTimelineNode, setActiveTimelineNode] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { title: "Day 1", description: "This day is all about preparation and anticipation. Homes, streets, and public buildings throughout Myanmar are decorated with an array of lights, including colorful electric bulbs, candles, and traditional lanterns. ", icon: "🏮" },
    { title: "Day 2", description: "This is the most significant and spiritually important day of the festival, as it is the exact day the Buddha is believed to have descended from heaven. Additionally more so, because the most cherished tradition is the act of honoring elders.", icon: "🙏" },
    { title: "Day 3", description: "The festive spirit continues onto the final day, though often with a slightly more relaxed pace. The bright lights and bustling street fairs remain active, creating more opportunities for people to come together and celebrate.", icon: "🎉" },
    { title: "Final Day", description:"While not an official part of the religious calendar, the large-scale public entertainment, the free shows, music concerts, plays, and especially the street fairs and markets are open on this extended day.", icon: "✨" }
  ];

  const traditions = [
    {
      title: "Lighting Ceremonies",
      description: "Homes, temples, and pagodas glow with countless oil lamps and candles, symbolizing the dispelling of darkness and ignorance from the human heart.",
      icon: "🕯️",
      gradient: "from-amber-500 to-yellow-600",
      image: "/photos/lightningCeremonies.jpg",
      detailedContent: "The lighting ceremony is the most iconic aspect of Thadingyut, where millions of oil lamps, candles, and LED lights illuminate Myanmar from dusk till dawn. This tradition dates back over 2,500 years and represents the Buddha's divine light piercing through the darkness of ignorance and suffering.",
      culturalSignificance: "Each flame represents a prayer, a wish for wisdom, and a commitment to following the Buddhist path. Families gather to light lamps together, creating bonds across generations while honoring their ancestors and seeking blessings for the future.",
      modernPractice: "Today, traditional oil lamps are often supplemented with colorful LED lights, creating spectacular displays that can be seen from space. Communities organize lighting competitions, and social media has become a platform for sharing the beauty of these illuminated celebrations."
    },
    {
      title: "Weaving Competitions",
      description: "Communities gather to weave beautiful Kathina robes for monks, celebrating craftsmanship, devotion, and the spirit of giving.",
      icon: "🧵",
      gradient: "from-yellow-500 to-amber-600",
      image: "/photos/weavingCompetitions.jpg",
      detailedContent: "The Kathina robe weaving ceremony is a sacred tradition where communities come together to create robes for Buddhist monks. This practice requires incredible skill, patience, and devotion, as the entire process from cotton to finished robe must be completed within a single day.",
      culturalSignificance: "Offering robes to monks is considered one of the highest forms of merit-making in Buddhism. The act of weaving together symbolizes community unity and shared spiritual purpose, while the finished robes provide essential clothing for monks during their spiritual practice.",
      modernPractice: "While traditional hand-weaving continues, modern communities often organize large-scale weaving events with hundreds of participants. These gatherings have become cultural festivals in themselves, featuring traditional music, food, and storytelling alongside the sacred weaving."
    },
    {
      title: "Merit Making",
      description: "Devotees offer alms, donate to temples, and perform acts of kindness to accumulate merit and honor Buddha's eternal teachings.",
      icon: "🙏",
      gradient: "from-amber-600 to-orange-600",
      image: "/photos/meritMaking.jpg",
      detailedContent: "Merit making during Thadingyut involves various acts of generosity and kindness, from offering food to monks and donations to temples, to helping the elderly and caring for animals. These actions are believed to generate positive karma and spiritual merit.",
      culturalSignificance: "The concept of merit (Punya) is central to Buddhist philosophy, representing the positive energy created through good deeds. During Thadingyut, the merit gained is believed to be multiplied, making it an especially auspicious time for charitable acts and spiritual practice.",
      modernPractice: "Contemporary merit making includes organized charity drives, blood donations, environmental cleanup projects, and digital fundraising for community causes. Social media platforms help coordinate large-scale merit making activities across the country."
    },
    {
      title: "Cultural Performances",
      description: "Traditional dances, music, and theatrical performances bring ancient stories and legends to life with vibrant artistry.",
      icon: "🎭",
      gradient: "from-yellow-600 to-amber-500",
      image: "/photos/culturalPerformances.jpg",
      detailedContent: "Thadingyut celebrations feature elaborate cultural performances including traditional Burmese dance, music, and theatrical presentations. These performances often depict stories from Buddhist Jataka tales and Myanmar's rich cultural heritage.",
      culturalSignificance: "Cultural performances serve as living libraries, preserving ancient stories, moral teachings, and artistic traditions. They educate younger generations about their heritage while providing entertainment that strengthens community bonds and cultural identity.",
      modernPractice: "Modern Thadingyut performances blend traditional elements with contemporary staging, lighting, and sound systems. Many performances are now broadcast live on television and social media, reaching global Myanmar communities and preserving these traditions digitally."
    },
    {
      title: "Pagoda Visits",
      description: "Pilgrims journey to sacred sites, offering flowers, incense, and prayers while circumambulating stupas in reverent meditation.",
      icon: "🏛️",
      gradient: "from-amber-500 to-yellow-500",
      image: "/photos/pagodaVisits.jpg",
      detailedContent: "Pagoda visits during Thadingyut are spiritual pilgrimages where devotees travel to sacred Buddhist sites to pay respects, make offerings, and engage in meditation. The most popular destinations include Shwedagon Pagoda, Sule Pagoda, and other historically significant temples.",
      culturalSignificance: "Pagodas are considered the most sacred spaces in Buddhism, housing relics of the Buddha and serving as focal points for spiritual practice. Visiting pagodas during Thadingyut is believed to bring special blessings and spiritual purification.",
      modernPractice: "Modern pagoda visits often involve organized group pilgrimages, with transportation arranged by communities. Many pagodas now offer digital donation systems and live-streamed ceremonies for those unable to visit in person, especially during the COVID-19 pandemic."
    },
    {
      title: "Family Gatherings",
      description: "Relatives unite to share traditional foods, exchange blessings, and strengthen bonds across generations in joyful celebration.",
      icon: "👨‍👩‍👧‍👦",
      gradient: "from-orange-500 to-amber-600",
      image: "/photos/familyGathering.jpg",
      detailedContent: "Family gatherings during Thadingyut are heartwarming reunions where extended families come together to celebrate, share traditional foods, and pass down cultural knowledge. These gatherings often span multiple days and include elaborate feasts featuring traditional Myanmar cuisine.",
      culturalSignificance: "Family unity is a cornerstone of Myanmar culture, and Thadingyut provides an opportunity to strengthen these bonds. Elders share stories and wisdom with younger generations, ensuring cultural continuity and family traditions are preserved.",
      modernPractice: "Modern family gatherings often incorporate video calls for overseas relatives, social media sharing of family moments, and fusion of traditional foods with contemporary cooking methods. Despite modernization, the core values of respect, gratitude, and family unity remain unchanged."
    }
  ];

  const openTraditionModal = (tradition: any) => {
    setSelectedTradition(tradition);
    setIsModalOpen(true);
  };

  const closeTraditionModal = () => {
    setIsModalOpen(false);
    setSelectedTradition(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-amber-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className='w-auto h-6'/>
              |
              <div className="text-2xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Thadingyut
              </div>
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
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster="/heroBG-Picward.mp4"
          >
            <source src="/heroBG-Picwand.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="https://images.pexels.com/photos/8092966/pexels-photo-8092966.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Buddhist temple with golden lanterns during Thadingyut festival"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/90"></div>
        </div>

        <div className="hero-particles absolute inset-0 z-10"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent leading-tight">
              Thadingyut
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 mb-4 font-great-vibes">
              Festival of Lights
            </p>
            <p className="text-lg text-amber-100 mb-12 font-medium tracking-wide">
              မီးထွန်းပွဲတော် • The Sacred Illumination
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
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              The Sacred Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Thadingyut marks the end of Buddhist Lent and celebrates the Buddha's return from the celestial realm after teaching the Abhidhamma to his mother, Queen Maya, illuminating the path to enlightenment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 card-hover golden-glow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-playfair">Festival of Lights</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  For three scared days, Myanmar turns into a constellation of light. Millions of candles, oil lamps, and colorful lanterns light up a breathtaking celestial display to honor Buddha's divine wisdom and eternal teachings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 card-hover golden-glow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-playfair">Sacred Timing</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Celebrated on the full moon day of Thadingyut (usually October), this auspicious time marks the end of the three-month Buddhist retreat season and the beginning of the cool season, also symbolizing spiritual renewal.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="gallery-image overflow-hidden">
                <img 
                  src="/photos/aboutImg.jpg" 
                  alt="Traditional Myanmar pagoda illuminated during Thadingyut festival"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-20 animate-pulse-gold"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full opacity-30 animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Festival Timeline
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                      <div className="text-3xl mb-3">{event.icon}</div>
                      <h3 className="text-xl font-semibold text-white font-playfair mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
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
      <section id="traditions" className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Sacred Traditions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ancient customs that connect generations in reverence, joy, and spiritual awakening, preserving the essence of Buddhist wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl overflow-hidden card-hover golden-glow group cursor-pointer"
                onClick={() => openTraditionModal(tradition)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <img 
                    src={tradition.image}
                    alt={tradition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/60"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tradition.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-xl">{tradition.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-playfair group-hover:text-amber-300 transition-colors duration-300">{tradition.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">{tradition.description}</p>
                  
                  {/* Click indicator */}
                  <div className="mt-4 text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    Click to learn more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradition Modal */}
      <TraditionModal 
        tradition={selectedTradition}
        isOpen={isModalOpen}
        onClose={closeTraditionModal}
      />

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Luminous Moments
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Witness the enchanting beauty of Thadingyut celebrations, including our upcoming school festivities.
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              School & Community Events
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our school and community celebrations of this sacred festival of light, wisdom, and spiritual awakening.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 card-hover golden-glow">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white font-playfair">School Events</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: "School Lighting Ceremony", date: "Coming Soon • ---- PM", location: "School Auditorium", icon: "🏮" },
                  { title: "Student Cultural Show", date: "Coming Soon • ---- PM", location: "Main Hall", icon: "🎭" },
                  { title: "Lantern Making Workshop", date: "Coming Soon • ---- PM", location: "Art Room", icon: "🎨" },
                  { title: "Merit Making Activity", date: "Coming Soon • ---- AM", location: "School Grounds", icon: "🙏" }
                ].map((event, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="text-2xl mr-3">{event.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                      <p className="text-amber-400 text-sm font-medium">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 card-hover golden-glow">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white font-playfair">Sacred Locations</h3>
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
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="text-xl mr-3 mt-1">{location.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{location.title}</h4>
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

      {/* Audio Player */}
      <AudioPlayer src="/audio/audioTrack.mp3" autoPlay={true} />

      {/* References Section */}
      <References />

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-amber-500/20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-6">
              Thadingyut
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              May the divine light of wisdom illuminate your path and bring peace, joy, and prosperity to you and your loved ones. 
              Let the sacred flames of Thadingyut guide us all toward enlightenment and eternal happiness.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <Star className="text-amber-500 animate-pulse" size={24} />
            <Lightbulb className="text-yellow-500 animate-pulse" size={24} />
            <Heart className="text-amber-400 animate-pulse" size={24} />
          </div>
          
          {/* Creator Info */}
          <div className="border-t border-amber-500/20 pt-8 space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-amber-400 mb-3 font-playfair">Created With Dedication</h4>
              <p className="text-gray-300 mb-4">
                This website was crafted by <span className="text-amber-400 font-semibold">Year 9 students from EDUSN</span> to honor and celebrate the sacred traditions of Thadingyut Festival.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Contact: kaunghtutsan@edusnschool.co.uk</span>
                  <span>/ sittlwinhtoo@edusnschool.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🏫</span>
                  <span>EDUSN - Excellence in Education</span>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4 border-t border-amber-500/10">
              <p className="text-gray-500 text-sm">
                © 2025 School Thadingyut Celebration • Honoring Myanmar's Sacred Festival of Lights
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;