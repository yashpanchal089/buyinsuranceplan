import React from 'react';
import { UserCheck, Sliders, Zap, CheckCircle2, Headphones, ShieldAlert } from 'lucide-react';

const WhyChooseMe = () => {
  const points = [
    {
      title: 'Trusted Financial Advisor',
      desc: 'Over 15+ years of verified industry expertise crafting custom asset creation strategies with full regulatory approvals.',
      icon: UserCheck,
    },
    {
      title: 'Personalized Wealth Planning',
      desc: 'No generic formulas. Every investment, SIP, endowment, and pension is uniquely tailored to match your specific tax bracket and goals.',
      icon: Sliders,
    },
    {
      title: 'Fast Loan Assistance',
      desc: 'Direct banking channels and tie-ups that secure fastest processing, documentation reviews, and lowest loan interest yields.',
      icon: Zap,
    },
    {
      title: 'Hassle-free Claim Support',
      desc: 'Our dedicated claims assistance desk ensures 100% support during emergency hospital admissions or LIC policy maturities.',
      icon: CheckCircle2,
    },
    {
      title: '24×7 Customer Guidance',
      desc: 'Round-the-clock telephone and WhatsApp support. We stand by you during financial queries, claims, or emergency allocations.',
      icon: Headphones,
    },
    {
      title: 'Secure & Transparent Process',
      desc: 'Zero hidden commission payouts, fully compliant documentation, secure transactions, and verified official platform linkages.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="why-choose-me" className="relative py-12 sm:py-16 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-gold/2 dark:bg-brand-gold/1 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            The Advisor Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Why Partner With Me? 🤝
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Why Choose Us grid of responsive glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx} 
                className="group relative rounded-2xl bg-white dark:bg-slate-900/50 p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gold glowing border */}
                <div className="absolute inset-0 p-[1.5px] rounded-2xl bg-transparent group-hover:bg-gradient-to-br group-hover:from-brand-gold-dark group-hover:to-transparent -z-10 transition-all duration-300">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px]"></div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-blue dark:text-brand-gold group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-gold dark:group-hover:text-slate-950 transition-colors duration-300 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-brand-blue dark:text-white group-hover:text-brand-gold mb-1.5 font-display transition-colors duration-200">
                      {point.title}
                    </h3>
                    <p className="text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
