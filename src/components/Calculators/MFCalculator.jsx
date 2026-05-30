import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const MFCalculator = () => {
  const [lumpsum, setLumpsum] = useState(25000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(10);
  const [results, setResults] = useState({
    investedAmount: 0,
    estReturns: 0,
    totalValue: 0
  });

  useEffect(() => {
    const P = lumpsum;
    const r = expectedRate;
    const t = years;

    const investedAmount = P;
    
    // FV = P * (1 + r/100)^t
    const totalValue = P * Math.pow(1 + r / 100, t);
    const estReturns = Math.max(0, totalValue - investedAmount);

    setResults({
      investedAmount: Math.round(investedAmount),
      estReturns: Math.round(estReturns),
      totalValue: Math.round(totalValue)
    });
  }, [lumpsum, expectedRate, years]);

  // Format currency
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
        {/* Lumpsum Investment */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Total Lumpsum Investment</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {lumpsum.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="2000" 
            max="1000000" 
            step="2000" 
            value={lumpsum}
            onChange={(e) => setLumpsum(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹2,000</span>
            <span>₹10L</span>
          </div>
        </div>

        {/* Expected Return Rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Expected Return Rate (p.a)</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {expectedRate}%
            </span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="0.5" 
            value={expectedRate}
            onChange={(e) => setExpectedRate(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Time Period */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Investment Tenure</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {years} Years
            </span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1" 
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>1 Yr</span>
            <span>30 Yrs</span>
          </div>
        </div>
      </div>

      {/* Visual Chart & Results */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Results Details */}
        <div className="space-y-4 w-full sm:w-auto">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Invested</span>
            <span className="text-lg font-extrabold text-slate-700 dark:text-slate-200">
              {formatCurrency(results.investedAmount)}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Est. Mutual Fund Return</span>
            <span className="text-lg font-extrabold text-brand-gold">
              {formatCurrency(results.estReturns)}
            </span>
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Maturity Value</span>
            <span className="text-xl font-black text-brand-blue dark:text-white">
              {formatCurrency(results.totalValue)}
            </span>
          </div>
        </div>

        {/* Custom SVG Lumpsum Split Bar */}
        <div className="h-36 w-32 flex flex-col items-center justify-end bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl gap-2 border border-slate-200/40 dark:border-slate-900/60 shrink-0">
          <div className="w-full flex items-end h-24 gap-2.5">
            {/* Invested Column */}
            <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-6 rounded-md bg-brand-blue dark:bg-slate-800 transition-all duration-300 h-[30%]"></div>
              <span className="text-[9px] font-bold text-slate-400">Principal</span>
            </div>
            {/* Returns Column */}
            <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-6 rounded-md bg-brand-gold transition-all duration-300 h-[100%]"></div>
              <span className="text-[9px] font-bold text-slate-400">Growth</span>
            </div>
          </div>
          <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest mt-1">Growth Ratio</span>
        </div>
      </div>
    </div>
  );
};

export default MFCalculator;
