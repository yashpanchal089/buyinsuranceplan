import React from 'react';
import { Shield, Sparkles, TrendingUp, Award, Clock } from 'lucide-react';
import Counter from '../components/UI/Counter';

const Hero = ({ onGetQuoteClick }) => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { label: 'Happy Families', target: '800+', suffix: '+', icon: Shield },
    { label: 'Claims Settled', target: '100', suffix: '%', icon: Sparkles },
    { label: 'Investments Managed', target: '50', suffix: 'Cr+', icon: TrendingUp },
    { label: 'Years of Experience', target: '13', suffix: '+', icon: Clock },
  ];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-gold/5 dark:bg-brand-gold/2 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-blue/5 dark:bg-brand-blue/2 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                AMFI Registered & LIC Certified Wealth Advisor
              </span>
            </div>

            {/* Bold Premium Headline */}
            <h1 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-black font-display text-brand-blue dark:text-white leading-[1.12] tracking-tight">
              Securing Your Family & <br/>
              <span className="text-gold-gradient bg-clip-text text-transparent">
                Financial Future Today
              </span>
            </h1>

            {/* Premium Paragraph Subtext */}
            <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Specialized custom insurance protection, high-yield mutual fund growth portfolios, SWP planning, and direct loan assistance. Empowering your aspirations with structured legacy creation.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                onClick={onGetQuoteClick}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold hover:brightness-110 shadow-lg hover:shadow-brand-gold/15 rounded-full transition-all duration-300"
              >
                Get Free Consultation
              </button>
              
              <button 
                onClick={() => handleScrollTo('#calculators')}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-gold border-2 border-brand-blue dark:border-brand-gold hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-slate-950 rounded-full transition-all duration-300"
              >
                Calculate Your Plan
              </button>
              
              <button 
                onClick={() => handleScrollTo('#contact')}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-brand-gold dark:hover:text-brand-gold transition-colors duration-200"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10">
            {/* Elegant Portrait Frame with Gold Accents */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl gold-glow border-4 border-white dark:border-slate-900 group">
              <img 
                src="/images/profile_manish.jpg" 
                alt="Manish R. Panchal Portrait" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gold Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-md border border-slate-100/40 dark:border-slate-800/40 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-brand-blue dark:text-white">Manish R. Panchal</span>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-400">Mulund, Mumbai</span>
                </div>
                <div className="px-2.5 py-1 text-[8px] font-extrabold uppercase bg-brand-gold text-slate-950 rounded-full">
                  Founder
                </div>
              </div>
            </div>

            {/* Geometric Gold Backdrop Ring */}
            <div className="absolute -z-10 -bottom-6 -right-6 h-40 w-40 rounded-full border border-brand-gold/30 animate-spin-slow"></div>
          </div>
        </div>

        {/* Bottom Counters Section */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-100 dark:border-slate-900/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/40 dark:border-slate-900/20 shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 text-brand-gold shadow-sm shrink-0 border border-slate-100 dark:border-slate-700/40">
                    <StatIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black font-display text-brand-blue dark:text-white tracking-tight">
                      <Counter target={stat.target} suffix={stat.suffix} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
