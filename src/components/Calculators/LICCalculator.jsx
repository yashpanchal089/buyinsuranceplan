import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const LICCalculator = () => {
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [age, setAge] = useState(30);
  const [premium, setPremium] = useState({
    yearly: 0,
    halfYearly: 0,
    quarterly: 0
  });

  useEffect(() => {
    // Basic premium risk calculation model
    // Base premium rate per Rs. 1000 sum assured based on age
    let baseRate = 18; // Rs. 18 per 1000 sum assured for age <= 25
    if (age > 25 && age <= 35) {
      baseRate = 22;
    } else if (age > 35 && age <= 45) {
      baseRate = 32;
    } else if (age > 45) {
      baseRate = 48;
    }

    // Term adjustor: longer term slightly reduces annual rate
    const termDiscount = Math.max(0, (term - 10) * 0.15);
    const finalRate = Math.max(8, baseRate - termDiscount);

    const yearlyPremium = (sumAssured / 1000) * finalRate;
    const gstRate = 0.045; // 4.5% GST on premium in India
    const yearlyWithTax = yearlyPremium * (1 + gstRate);

    setPremium({
      yearly: Math.round(yearlyWithTax),
      halfYearly: Math.round(yearlyWithTax * 0.51), // slightly higher due to frequency charge
      quarterly: Math.round(yearlyWithTax * 0.26)
    });
  }, [sumAssured, term, age]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Sliders Control */}
      <div className="space-y-6">
        {/* Sum Assured */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Sum Assured (Life Coverage)</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {sumAssured.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="100000" 
            max="10000000" 
            step="100000" 
            value={sumAssured}
            onChange={(e) => setSumAssured(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹1L</span>
            <span>₹1Cr</span>
          </div>
        </div>

        {/* Proposer Age */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Proposer's Age</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {age} Years Old
            </span>
          </div>
          <input 
            type="range" 
            min="18" 
            max="65" 
            step="1" 
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>18 Yrs</span>
            <span>65 Yrs</span>
          </div>
        </div>

        {/* Policy Term */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Policy Term</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {term} Years
            </span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="35" 
            step="1" 
            value={term}
            onChange={(e) => setTerm(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>10 Yrs</span>
            <span>35 Yrs</span>
          </div>
        </div>
      </div>

      {/* Visual Chart & Results */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-center gap-6">
        <h4 className="text-sm font-bold text-brand-blue dark:text-brand-gold uppercase tracking-wider mb-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          Estimated Premium Details (Including 4.5% GST)
        </h4>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Yearly</span>
            <span className="text-sm font-extrabold text-brand-blue dark:text-white block">
              {formatCurrency(premium.yearly)}
            </span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Half-Yearly</span>
            <span className="text-sm font-extrabold text-brand-blue dark:text-white block">
              {formatCurrency(premium.halfYearly)}
            </span>
          </div>
          <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Quarterly</span>
            <span className="text-sm font-extrabold text-brand-blue dark:text-white block">
              {formatCurrency(premium.quarterly)}
            </span>
          </div>
        </div>

        <div className="text-[10px] font-semibold text-slate-400 leading-relaxed italic bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900">
          *Notice: These rates are estimated values under standard conditions. Premiums vary heavily based on tobacco usage, gender, riders selected, and actual medical disclosures.
        </div>
      </div>
    </div>
  );
};

export default LICCalculator;
