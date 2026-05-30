import React from 'react';
import { ShieldCheck, Layers, Award, Landmark, CircleDollarSign, GraduationCap, Cross, Map } from 'lucide-react';

const About = () => {
  const capabilities = [
    { label: 'Term Plans', icon: ShieldCheck, desc: 'Pure life risk coverage providing high sum assured protection for your dependents at lowest rates.' },
    { label: 'FD & RD', icon: Layers, desc: 'Fixed and Recurring deposits offering secured guaranteed capital returns with verified bank safety.' },
    { label: 'LIC Policies', icon: Award, desc: 'Participating and non-participating LIC plans for endowment, money back, and pension needs.' },
    { label: 'All Bank Loans', icon: Landmark, desc: 'Comprehensive direct tie-up loan options for Home, Business, Personal, and Mortgage needs.' },
    { label: 'Gold Loans', icon: CircleDollarSign, desc: 'Instant gold liquidity solutions with lowest interest charges and flexible repayment rates.' },
    { label: 'Education Loans', icon: GraduationCap, desc: 'Academic financial support for premium domestic and international university courses.' },
    { label: 'Cashless Mediclaim', icon: Cross, desc: 'Instant hospital admission mediclaims with thousands of premium cashless network systems.' },
    { label: 'Real Estate Investment', icon: Map, desc: 'Strategic capital investments in premium corporate real estate and agricultural land projects.' },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Portfolio Scope
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            We Offer You Best Services In 🎯
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gold glow top hover border */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-gold-dark group-hover:to-brand-gold-light rounded-t-2xl transition-all duration-300"></div>

                <div className="mb-4 text-brand-blue dark:text-brand-gold group-hover:text-brand-gold transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-extrabold text-brand-blue dark:text-white group-hover:text-brand-gold mb-2 font-display transition-colors duration-200">
                  {item.label}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
