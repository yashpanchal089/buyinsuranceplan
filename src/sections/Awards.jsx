import React, { useState } from 'react';
import { Award, Shield, Maximize2, X, Eye, FileCheck, AwardIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Awards = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null); // number | null

  const credentials = [
    // --- SECTION 1: CERTIFICATES ---
    {
      title: 'LIC Certificate of Appreciation',
      desc: 'Certificate awarded by senior administrative directors for outstanding insurance planning and premium delivery on the occasion of LIC\'s 64th Anniversary.',
      image: '/images/certificate_lic.jpg',
      type: 'Certificate',
      category: 'certificates'
    },
    {
      title: 'Livlong Certificate of Appreciation',
      desc: 'Quarterly appreciation certificate honoring Manish Panchal for high customer satisfaction and health insurance service excellence.',
      image: '/images/certificate_livlong.jpg',
      type: 'Certificate',
      category: 'certificates',
      isVertical: true
    },
    
    // --- SECTION 2: CEREMONIES ---
    {
      title: 'LIC Star Award Ceremony',
      desc: 'Honored with the prestigious Star Trophy by senior LIC divisional officers during the annual branch performance meets.',
      image: '/images/award_ceremony_lic.jpg',
      type: 'Ceremony Award',
      category: 'ceremonies'
    },
    {
      title: 'Livlong Agent Meet Ceremony',
      desc: 'Presented with the Special Appreciation Plaque by Founder/CEO Gaurav Dubey and the Director of Livlong Insurance at the Agent Meet.',
      image: '/images/award_ceremony_livlong.jpg',
      type: 'Ceremony Award',
      category: 'ceremonies'
    },

    // --- SECTION 3: TROPHIES & PLAQUES ---
    {
      title: 'LIC Mumbai Division III Trophy',
      desc: 'Awarded by the Mumbai Division III administrative council for outstanding term insurance agency milestones.',
      image: '/images/award_lic_mumbai.jpg',
      type: 'Trophy',
      category: 'trophies'
    },
    {
      title: 'LIC Half Shatakveer Plaque',
      desc: 'Prestigious plaque awarded by the Sr. Divisional Manager recognizing Manish Panchal for completing 50 successful policies in FY 2018 - 19.',
      image: '/images/award_lic_shatakveer.jpg',
      type: 'Plaque',
      category: 'trophies'
    },
    {
      title: 'LIC Star Trophy Qualifier',
      desc: 'Star Trophy qualifier award for exceptional LIC policy closures and wealth safety advisement.',
      image: '/images/award_lic_star.jpg',
      type: 'Trophy',
      category: 'trophies'
    },
    {
      title: 'Care Health Saksham Bali Plaque',
      desc: 'Grand Prize winner plaque for winning the prestigious Care Health Saksham Contest in Bali (Dec\'21 - Mar\'22).',
      image: '/images/award_care_bali.jpg',
      type: 'Plaque',
      category: 'trophies'
    },
    {
      title: 'Religare Best Servicing Plaque',
      desc: 'Awarded by Dimple Nikhil Pabari (Team Khote Sikke) in recognition of "Best in Client Policy Servicing" and dedication.',
      image: '/images/award_religare_servicing.jpg',
      type: 'Plaque',
      category: 'trophies'
    },
    {
      title: 'Religare Champion Trophy',
      desc: 'Nov 2018 Champion Trophy celebrating exceptional health insurance advisory and customer-first support.',
      image: '/images/award_religare_champion.jpg',
      type: 'Trophy',
      category: 'trophies'
    },
    {
      title: 'Religare Health Planner Plaque',
      desc: 'Presented to Manish Panchal by Team Khote Sikke saluting smart work, dedication, and service performance.',
      image: '/images/award_religare_plaque.jpg',
      type: 'Plaque',
      category: 'trophies'
    }
  ];

  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? credentials.length - 1 : prev - 1));
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % credentials.length);
  };

  // Group items by their exact category index to open the correct items in the global lightbox
  const getGlobalIndex = (item) => {
    return credentials.findIndex(c => c.image === item.image);
  };

  return (
    <section id="awards" className="relative py-14 sm:py-18 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-gold/5 dark:bg-brand-gold/2 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-blue/5 dark:bg-brand-blue/2 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Proven Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Awards, Certifications & Recognition Trophies 🏆
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            A showcase of Manish R. Panchal's certified expertise, quarterly service achievements, and prestigious corporate recognitions spanning a 15+ year advisory legacy.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* --- 1. CERTIFICATES SECTION --- */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-6 text-left">
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-brand-gold shadow-sm">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-brand-blue dark:text-white leading-tight">
                Official Business Certifications
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                Authorized Credentials & Standards of Performance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {credentials.filter(c => c.category === 'certificates').map((item, idx) => {
              const globalIdx = getGlobalIndex(item);
              return (
                <div 
                  key={idx}
                  onClick={() => setLightboxIndex(globalIdx)}
                  className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch cursor-zoom-in text-left"
                >
                  {/* Image container */}
                  <div className="w-full sm:w-40 md:w-48 aspect-[4/3] rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 relative bg-slate-200 dark:bg-slate-950 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-brand-blue/95 text-white dark:bg-brand-gold dark:text-slate-950 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-full">
                      {item.type}
                    </span>
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-full bg-white/95 dark:bg-slate-900/95 shadow-md text-brand-blue dark:text-brand-gold">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  {/* Text details */}
                  <div className="flex flex-col justify-center py-1">
                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-450 dark:text-slate-500 font-semibold leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 2. CEREMONIES SECTION --- */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-6 text-left">
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-brand-gold shadow-sm">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-brand-blue dark:text-white leading-tight">
                Corporate Award & Ceremony Honors
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                Honored by Directors and Founders for Advisory Excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {credentials.filter(c => c.category === 'ceremonies').map((item, idx) => {
              const globalIdx = getGlobalIndex(item);
              return (
                <div 
                  key={idx}
                  onClick={() => setLightboxIndex(globalIdx)}
                  className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch cursor-zoom-in text-left"
                >
                  {/* Image container */}
                  <div className="w-full sm:w-40 md:w-48 aspect-[4/3] rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 relative bg-slate-200 dark:bg-slate-950 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-brand-blue/95 text-white dark:bg-brand-gold dark:text-slate-950 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-full">
                      {item.type}
                    </span>
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-full bg-white/95 dark:bg-slate-900/95 shadow-md text-brand-blue dark:text-brand-gold">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  {/* Text details */}
                  <div className="flex flex-col justify-center py-1">
                    <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-450 dark:text-slate-500 font-semibold leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 3. TROPHIES & PLAQUES SECTION --- */}
        <div>
          <div className="flex items-center space-x-3 mb-6 text-left">
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-brand-gold shadow-sm">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-brand-blue dark:text-white leading-tight">
                Recognition Trophies & Plaque Awards
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                Saluting Dedication, Performance, and Customer Protection
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {credentials.filter(c => c.category === 'trophies').map((item, idx) => {
              const globalIdx = getGlobalIndex(item);
              return (
                <div 
                  key={idx}
                  onClick={() => setLightboxIndex(globalIdx)}
                  className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 p-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-305 cursor-zoom-in text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Image frame */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 relative bg-slate-200 dark:bg-slate-950 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-brand-blue/95 text-white dark:bg-brand-gold dark:text-slate-950 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-full">
                        {item.type}
                      </span>
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="p-2 rounded-full bg-white/95 dark:bg-slate-900/95 shadow-md text-brand-blue dark:text-brand-gold">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    {/* Title */}
                    <h4 className="text-xs.5 font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors duration-200 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  {/* Desc */}
                  <p className="text-[10.5px] text-slate-450 dark:text-slate-500 font-semibold leading-relaxed mt-2.5 border-t border-slate-150/40 dark:border-slate-850/60 pt-2.5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close controls */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105 active:scale-95"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center">
            {/* Left Button */}
            <button 
              onClick={handleLightboxPrev}
              className="absolute left-0 sm:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:scale-105 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Display Image Container */}
            <div 
              className="relative max-w-[85vw] max-h-[70vh] rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-950 flex items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={credentials[lightboxIndex].image} 
                alt="lightbox view"
                className={`max-h-[65vh] object-contain transition-all duration-300 ${
                  credentials[lightboxIndex].isVertical ? 'max-w-[45vw]' : 'max-w-[80vw]'
                }`}
              />
            </div>

            {/* Right Button */}
            <button 
              onClick={handleLightboxNext}
              className="absolute right-0 sm:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:scale-105 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Subtitles Details */}
          <div className="mt-6 text-center max-w-xl text-white px-4" onClick={(e) => e.stopPropagation()}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold mb-1 block">
              {credentials[lightboxIndex].type}
            </span>
            <h4 className="text-lg font-black font-display text-white">{credentials[lightboxIndex].title}</h4>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed mt-2">{credentials[lightboxIndex].desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
