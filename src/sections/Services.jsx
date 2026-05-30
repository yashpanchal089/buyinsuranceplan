import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  ShieldAlert, 
  Award, 
  Activity, 
  ShieldCheck, 
  Landmark, 
  ChevronRight, 
  ArrowRight, 
  BadgePercent, 
  CheckCircle, 
  FileText 
} from 'lucide-react';
import Modal from '../components/UI/Modal';

const Services = ({ onQuoteClick }) => {
  const [selectedService, setSelectedService] = useState(null); // Selected service object for Modal
  const [highlightedCat, setHighlightedCat] = useState(null); // Temporarily highlights category from header dropdown

  // Categories list
  const categories = [
    { name: 'Investment', icon: DollarSign, tag: 'Wealth Growth & compounding portfolio suites' },
    { name: 'Protection', icon: ShieldAlert, tag: 'Family security & liability protection term plans' },
    { name: 'Life Insurance', icon: Award, tag: 'Guaranteed endowment savings & annuity plans' },
    { name: 'Mediclaim', icon: Activity, tag: 'Cashless hospital protections & family health shields' },
    { name: 'General Insurance', icon: ShieldCheck, tag: 'Vehicle, business liability & asset protections' },
    { name: 'Loans', icon: Landmark, tag: 'Low-interest home, business, and education capital' },
  ];

  // Listen to selectServiceCategory events from dropdown header
  useEffect(() => {
    const handleSelectCategory = (e) => {
      if (e.detail) {
        // Scroll to services
        const element = document.querySelector('#services');
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
        
        // Highlight category card
        setHighlightedCat(e.detail);
        const timer = setTimeout(() => {
          setHighlightedCat(null);
        }, 2000);
        return () => clearTimeout(timer);
      }
    };
    window.addEventListener('selectServiceCategory', handleSelectCategory);
    return () => window.removeEventListener('selectServiceCategory', handleSelectCategory);
  }, []);

  const servicesData = {
    Investment: [
      {
        title: 'SIP (Systematic Investment Plan)',
        description: 'Automate your wealth creation journey. Invest small monthly sums in high-growth equity mutual funds with compounding benefits.',
        icon: DollarSign,
        details: {
          features: ['Compounding returns over time', 'Rupee cost averaging', 'Small initial steps (from ₹500/month)', 'Highly flexible duration terms'],
          taxBenefit: 'ELSS Mutual Funds enjoy tax deductions up to ₹1.5 Lakhs per year under Section 80C.'
        }
      },
      {
        title: 'Mutual Funds',
        description: 'Access professionally managed diversified investment funds tailored to your specific risk appetite and asset goals.',
        icon: DollarSign,
        details: {
          features: ['Diversification across multiple stocks & bonds', 'Professional active management', 'High liquidity (withdraw anytime)', 'Tailored for Short/Mid/Long term goals'],
          taxBenefit: 'Tax-friendly returns compared to traditional fixed deposits.'
        }
      },
      {
        title: 'SWP (Systematic Withdrawal Plan)',
        description: 'Create a regular monthly income stream from your existing mutual fund corpus. Ideal for senior citizens and retirement cashflows.',
        icon: DollarSign,
        details: {
          features: ['Guaranteed regular monthly payouts', 'Capital stays invested and growing', 'Tax-efficient monthly cash withdrawal rules'],
          taxBenefit: 'Withdrawals are treated as capital gains, yielding much lower tax rates compared to regular pension schemes.'
        }
      },
      {
        title: 'Bonds & NCDs',
        description: 'Secure fixed interest yields with corporate and government bonds offering high security and regular interest payouts.',
        icon: DollarSign,
        details: {
          features: ['Guaranteed periodic interest payouts', 'High capital safety ratings (AAA)', 'Superior returns compared to bank FDs'],
          taxBenefit: 'Tax-free bond options available for higher tax brackets.'
        }
      },
      {
        title: 'Fixed Return Plans',
        description: 'Guaranteed non-market-linked savings savings schemes securing capital safety and guaranteed payouts at maturity.',
        icon: DollarSign,
        details: {
          features: ['Zero market risks', 'Fixed guaranteed interest rates', 'Lumpsum or regular income payouts at maturity'],
          taxBenefit: 'Deductions under Section 80C and tax-free maturity benefits.'
        }
      }
    ],
    Protection: [
      {
        title: 'Term Plans',
        description: 'High-value pure life risk coverage securing your family\'s financial requirements at the lowest available premium costs.',
        icon: ShieldAlert,
        details: {
          features: ['High life cover at minimal costs', 'Critical illness riders', 'Accidental death multipliers', 'Maturity premium back options'],
          taxBenefit: 'Premium deductions under Section 80C and fully tax-free death claim payouts under Section 10(10D).'
        }
      },
      {
        title: 'Loan EMI Protector',
        description: 'Secure your outstanding liabilities. Ensures your family is never burdened with Home or Business Loan EMIs in your absence.',
        icon: ShieldAlert,
        details: {
          features: ['Covers all outstanding loan EMIs', 'Direct payout to clear loan accounts', 'Peace of mind for massive liabilities'],
          taxBenefit: 'Premium deductions under Section 80C.'
        }
      }
    ],
    'Life Insurance': [
      {
        title: 'Savings Plans',
        description: 'Endowment and money-back insurance policies combining traditional risk coverage and steady capital growth benefits.',
        icon: Award,
        details: {
          features: ['Endowment guaranteed savings', 'Periodic money-back survival benefits', 'Bonus addition inclusions', 'In-built life risk protection'],
          taxBenefit: '100% tax-free maturity proceeds under Section 10(10D) and premium deductions under 80C.'
        }
      },
      {
        title: 'Recurring Deposits (RD)',
        description: 'Build your saving discipline month-on-month with guaranteed returns and high liquidity options.',
        icon: Award,
        details: {
          features: ['Fixed monthly savings savings discipline', 'Guaranteed interest rates', 'Flexible tenures (1 to 5 years)'],
          taxBenefit: 'Exemptions based on standard banking guidelines.'
        }
      },
      {
        title: 'Fixed Deposits (FD)',
        description: 'Lumpsum investment plans securing fixed annual interest payouts with absolute safety guidelines.',
        icon: Award,
        details: {
          features: ['Fixed guaranteed returns', 'Absolute capital safety', 'Senior citizen interest rate multipliers'],
          taxBenefit: '5-year tax-saving FDs are eligible for deductions under Section 80C.'
        }
      }
    ],
    Mediclaim: [
      {
        title: 'Comprehensive Mediclaim',
        description: 'Ensure cashless hospitalization shields for your entire family covering surgeries, hospital rooms, and pre/post-hospital care.',
        icon: Activity,
        details: {
          features: ['Cashless treatment at 10,000+ hospitals', 'No room rent capping limits', 'In-built organ donor & AYUSH coverages', 'Restoration benefits (auto refills)'],
          taxBenefit: 'Deductions up to ₹25,000 (self/family) and additional ₹50,000 (parents) under Section 80D.'
        }
      },
      {
        title: 'Maternity Plans',
        description: 'Shield newborn baby and maternal care expenses. Covers normal and caesarean deliveries along with vaccination charges.',
        icon: Activity,
        details: {
          features: ['Covers delivery & hospitalization costs', 'Newborn baby coverage from Day 1', 'Vaccination charges covered'],
          taxBenefit: 'Deductions on premiums under Section 80D.'
        }
      },
      {
        title: 'Critical Illness Plans',
        description: 'Direct lumpsum payout upon diagnosis of major life-threatening conditions (e.g. Cancer, Heart Attack, stroke) to support income loss.',
        icon: Activity,
        details: {
          features: ['Lumpsum cash payout upon diagnosis', 'Supports daily therapy & home expenses', 'Active income replacement shield'],
          taxBenefit: 'Premiums are exempt under Section 80D.'
        }
      },
      {
        title: 'Accidental Insurance',
        description: 'Complete risk cover for accidental death, permanent total disability, and temporary loss of income.',
        icon: Activity,
        details: {
          features: ['Accidental death payout coverage', 'Permanent/partial disability compensation', 'Weekly cash allowance for income loss'],
          taxBenefit: 'Deductions under Section 80D.'
        }
      },
      {
        title: 'Income Replacement Plans',
        description: 'Guaranteed regular monthly payouts to secure your home expenses during recovery phases from prolonged illnesses.',
        icon: Activity,
        details: {
          features: ['Ensures steady monthly home allowances', 'Active recovery phase support', 'Peace of mind during zero-working days'],
          taxBenefit: 'Flexible tax treatment options based on scheme selected.'
        }
      }
    ],
    'General Insurance': [
      {
        title: '2 / 3 / 4 Wheeler Insurance',
        description: 'Shield your vehicles against accidents, theft, third-party liability, and natural disasters with swift cashless garages.',
        icon: ShieldCheck,
        details: {
          features: ['Zero depreciation add-on options', 'Cashless garage repairs', '24x7 roadside towing assistance', 'Fast claim settlements'],
          taxBenefit: 'Commercial vehicle premiums can be written off as business expenses.'
        }
      },
      {
        title: 'Building Insurance',
        description: 'Secure your residential or corporate buildings against structural losses caused by fire, earthquakes, or flooding.',
        icon: ShieldCheck,
        details: {
          features: ['Covers reconstruction costs', 'Natural & man-made disaster cover', 'Flexible valuation models'],
          taxBenefit: 'Protects critical capital assets.'
        }
      },
      {
        title: 'Machinery Insurance',
        description: 'Commercial shields protecting critical industrial machines against accidental breakdowns, electrical failures, or internal damage.',
        icon: ShieldCheck,
        details: {
          features: ['Electrical breakdown covers', 'Business interruption allowances', 'Replacement parts expenses'],
          taxBenefit: 'Premiums are treated as standard corporate business expenses.'
        }
      },
      {
        title: 'Burglary Insurance',
        description: 'Cover your precious office inventory, home valuables, and structural items against break-ins or burglaries.',
        icon: ShieldCheck,
        details: {
          features: ['Full inventory theft coverages', 'Cash-in-safe protection add-ons', 'Locks & damages repair expenses'],
          taxBenefit: 'Standard risk management cost.'
        }
      },
      {
        title: 'Fire Insurance',
        description: 'Shield corporate stocks, materials, assets, and structural properties against fires, explosions, or implosions.',
        icon: ShieldCheck,
        details: {
          features: ['Covers stock & materials in progress', 'Explosion & lightning coverages', 'Clean-up and debris removal allowances'],
          taxBenefit: 'Essential standard business expense write-off.'
        }
      }
    ],
    Loans: [
      {
        title: 'Home Loan',
        description: 'Unlock your dream home with low floating interest rates, balance transfers, and direct quick document processing.',
        icon: Landmark,
        details: {
          features: ['Tie-ups with premium banks', 'Fast legal and valuation clearances', 'Lowest floating rate options', 'No prepayment penalty charges'],
          taxBenefit: 'Principal deductions under 80C and interest deductions up to ₹2 Lakhs under Section 24(b).'
        }
      },
      {
        title: 'Business Loan',
        description: 'Scale your operations. Access collateral-free working capital or structured machinery loans with flexible tenures.',
        icon: Landmark,
        details: {
          features: ['Collateral-free funding loans', 'Flexible cash-credit options', 'Fast disbursals for working capital'],
          taxBenefit: 'Interest paid is 100% tax-deductible as a business expense.'
        }
      },
      {
        title: 'Personal Loan',
        description: 'Unsecured personal credits with minimal documents for domestic/international emergencies, medical needs, or weddings.',
        icon: Landmark,
        details: {
          features: ['No collateral requirements', 'Fast approval in 24-48 hours', 'Flexible repayment tenures (1-5 years)'],
          taxBenefit: 'Tax-free lumpsum disbursals.'
        }
      },
      {
        title: 'Balance Transfer',
        description: 'Reduce your interest payout. Instantly transfer your existing high-rate Home or LAP loan to premium banks at lower rates.',
        icon: Landmark,
        details: {
          features: ['Substantial interest savings', 'Nil or low processing charges', 'Top-up loan features included'],
          taxBenefit: 'Retains standard tax exemption eligibility.'
        }
      },
      {
        title: 'OD & CC (Overdraft & Cash Credit)',
        description: 'Secure credit facilities. Draw money only as needed and pay interest only on the utilized amount.',
        icon: Landmark,
        details: {
          features: ['Highly flexible capital withdrawal', 'Interest charged only on drawn cash', 'Perfect for business cashflow gaps'],
          taxBenefit: 'Interest costs are standard tax-deductible business expenses.'
        }
      },
      {
        title: 'Education Loan',
        description: 'Provide your children with the finest education abroad or locally with structured loans covering fees, stay, and laptops.',
        icon: Landmark,
        details: {
          features: ['Covers 100% academic expenses', 'Moratorium period benefit (pay post job)', 'Flexible loan terms'],
          taxBenefit: '100% of interest paid is deductible under Section 80E for up to 8 years.'
        }
      }
    ]
  };

  const handleQuoteClick = () => {
    setSelectedService(null);
    if (onQuoteClick && selectedService) {
      onQuoteClick(selectedService.title);
    }
  };

  return (
    <section id="services" className="relative py-14 sm:py-18 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Comprehensive Wealth & Risk Solutions 💼
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            All our premium services cataloged in a highly scannable Fintech Dashboard. Scan all 27 wealth building, protection, and loan solutions in a single view instantly.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Categories Mega Directory Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isHighlighted = highlightedCat === cat.name;
            const servicesList = servicesData[cat.name] || [];

            return (
              <div 
                key={idx}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-500 text-left relative overflow-hidden group ${
                  isHighlighted 
                    ? 'border-brand-gold shadow-2xl shadow-brand-gold/10 scale-[1.02] ring-2 ring-brand-gold/20' 
                    : 'border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Visual Glow overlay */}
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-gold/5 dark:bg-brand-gold/2 blur-2xl group-hover:bg-brand-gold/10 transition-all duration-300"></div>

                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 border-b border-slate-100 dark:border-slate-800 pb-3 shrink-0">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-brand-blue dark:text-brand-gold group-hover:bg-brand-gold/15 dark:group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors duration-300 shrink-0">
                      <CatIcon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black font-display text-brand-blue dark:text-white leading-tight">
                        {cat.name}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mt-0.5 leading-tight">
                        {cat.name === 'Investment' && 'Wealth Compounding'}
                        {cat.name === 'Protection' && 'Pure Life Coverages'}
                        {cat.name === 'Life Insurance' && 'Endowment & Savings'}
                        {cat.name === 'Mediclaim' && 'Health shields'}
                        {cat.name === 'General Insurance' && 'Vehicle & Asset covers'}
                        {cat.name === 'Loans' && 'Credit Capital Solutions'}
                      </span>
                    </div>
                  </div>

                  {/* List of Services (Highly Interactive clickable rows) */}
                  <div className="space-y-1.5">
                     {servicesList.map((service, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedService({ ...service, category: cat.name })}
                        className="w-full text-left px-3.5 py-2.5 rounded-xl border border-slate-100/50 dark:border-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-brand-gold/50 dark:hover:border-brand-gold/40 flex items-center justify-between transition-all duration-200 group/row cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center space-x-2.5 overflow-hidden">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold group-hover/row:scale-125 transition-transform shrink-0"></span>
                          <span className="text-xs font-bold text-slate-700 dark:text-white group-hover/row:text-brand-blue dark:group-hover/row:text-brand-gold transition-colors truncate">
                            {service.title}
                          </span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover/row:text-brand-gold group-hover/row:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Directory Tagline Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-semibold text-slate-400 dark:text-slate-500 leading-normal italic shrink-0">
                  {cat.tag}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* --- DETAILED DIALOG MODAL --- */}
      {selectedService !== null && (
        <Modal 
          isOpen={selectedService !== null} 
          onClose={() => setSelectedService(null)} 
          title={`${selectedService.title} Details`}
        >
          <div className="space-y-5 text-slate-700 dark:text-slate-350 text-left">
            
            {/* Overview / Target */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
              <CheckCircle className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue dark:text-brand-gold mb-1">
                  Overview & Product Coverage
                </h4>
                <p className="text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3.5">
              <h4 className="text-sm font-extrabold text-brand-blue dark:text-white flex items-center font-display">
                <FileText className="h-4.5 w-4.5 text-brand-gold mr-2" />
                <span>Key Features & Guaranteed Benefits</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.details?.features?.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-2 text-xs font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5"></span>
                    <span className="text-slate-600 dark:text-slate-300 leading-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Benefits */}
            {selectedService.details?.taxBenefit && (
              <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-brand-gold/2 border border-brand-gold/20 flex items-start space-x-3">
                <BadgePercent className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider mb-0.5">
                    Tax Exemptions & Regulatory Benefits
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                    {selectedService.details.taxBenefit}
                  </p>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex space-x-3 shrink-0">
              <button
                onClick={handleQuoteClick}
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:brightness-110 shadow-lg rounded-xl transition-all duration-200"
              >
                Get Free Quote Callback
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 text-center text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;
