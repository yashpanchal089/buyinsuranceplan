import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Vijay Patel',
      role: 'Business Owner, Mulund West',
      text: 'Manish Panchal set up my business loans and comprehensive health coverages. When I had an emergency cashless admission last year, his claims assistance desk resolved hospital billing in under 2 hours! Absolute lifecycle partner.',
      rating: 5
    },
    {
      name: 'Manish Makwana',
      role: 'Senior Software Engineer, Powai',
      text: 'I started a monthly mutual fund SIP via Loansurecare 8 years ago. His customized advice on portfolio rebalancing has yielded over 16.5% CAGR compounding, helping me easily secure my new apartment downpayment!',
      rating: 5
    },
    {
      name: 'Shrikant Rakhe',
      role: 'Consulting Cardiologist, Thane',
      text: 'Creating inflation-adjusted retirement plans was my core focus. Manish customized a highly structured SWP portfolio combined with term protections. His transparency, compliant licensing, and guidance are outstanding.',
      rating: 5
    },
    {
      name: 'Gaurav Panchal',
      role: 'Manufacturing Director, Bhandup',
      text: 'We insured our industrial plant machinery and stocks through Manish. His risk estimation models are highly detailed and saved us premium costs. He is secure, transparent, and prompt.',
      rating: 5
    },
    {
      name: 'Sanjay Rathod',
      role: 'Retired School Principal, Vashi',
      text: 'Manish Panchal handles all our family LIC endowment payouts, RD allocations, and mediclaims. He treats us like family, handles annual renewals, and is available 24x7. Highest trust and respect!',
      rating: 5
    }
  ];

  // We repeat the array twice to ensure seamless continuous loop scroll marquee
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="relative py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Valued Endorsements From Clients 💬
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Infinite Train Marquee Slider Container */}
      <div className="marquee-container w-full overflow-hidden">
        <div className="marquee-content flex gap-6 py-4 px-2">
          {extendedReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="w-[280px] sm:w-[350px] shrink-0 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-gold dark:hover:border-brand-gold hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Review Header quote & star rating */}
              <div className="flex justify-between items-center mb-4">
                <Quote className="h-7 w-7 text-brand-gold/20 dark:text-brand-gold/10 fill-brand-gold/5" />
                <div className="flex space-x-0.5">
                  {[...Array(rev.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed italic mb-6">
                "{rev.text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center pt-3 border-t border-slate-100 dark:border-slate-800/60">
                <div className="text-left flex flex-col">
                  <span className="text-sm font-extrabold text-brand-blue dark:text-white font-display leading-tight">{rev.name}</span>
                  <span className="text-[10px] font-bold text-slate-450 dark:text-slate-400 mt-0.5">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
