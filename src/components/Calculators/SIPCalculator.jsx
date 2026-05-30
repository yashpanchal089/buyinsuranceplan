import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const SIPCalculator = () => {
  const [monthlyInvest, setMonthlyInvest] = useState(5000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(10);
  const [results, setResults] = useState({
    investedAmount: 0,
    estReturns: 0,
    totalValue: 0
  });

  useEffect(() => {
    const P = monthlyInvest;
    const i = expectedRate / 12 / 100;
    const n = years * 12;

    const investedAmount = P * n;
    
    // FV = P * [((1 + i)^n - 1) / i] * (1 + i)
    let totalValue = 0;
    if (i === 0) {
      totalValue = investedAmount;
    } else {
      totalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const estReturns = Math.max(0, totalValue - investedAmount);

    setResults({
      investedAmount: Math.round(investedAmount),
      estReturns: Math.round(estReturns),
      totalValue: Math.round(totalValue)
    });
  }, [monthlyInvest, expectedRate, years]);

  // Format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Circular Chart Calculation
  const total = results.totalValue || 1;
  const investedRatio = results.investedAmount / total;
  const returnsRatio = results.estReturns / total;
  const circumference = 2 * Math.PI * 50; // r = 50, C = 314
  const strokeDashoffsetInvested = circumference * (1 - investedRatio);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Sliders Control */}
      <div className="space-y-6">
        {/* Monthly Investment */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Monthly Investment</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {monthlyInvest.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="150000" 
            step="500" 
            value={monthlyInvest}
            onChange={(e) => setMonthlyInvest(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹500</span>
            <span>₹1.5L</span>
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
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Time Period</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {years} Years
            </span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="40" 
            step="1" 
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>1 Yr</span>
            <span>40 Yrs</span>
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
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Est. Wealth Gained</span>
            <span className="text-lg font-extrabold text-brand-gold">
              {formatCurrency(results.estReturns)}
            </span>
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Future Value</span>
            <span className="text-xl font-black text-brand-blue dark:text-white">
              {formatCurrency(results.totalValue)}
            </span>
          </div>
        </div>

        {/* Custom SVG Circular Progress Ring */}
        <div className="relative h-36 w-36 flex items-center justify-center shrink-0">
          <svg className="h-full w-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle (representing returns ratio) */}
            <circle
              cx="60"
              cy="60"
              r="50"
              className="stroke-brand-gold fill-none"
              strokeWidth="10"
            />
            {/* Foreground circle (representing invested ratio) */}
            <circle
              cx="60"
              cy="60"
              r="50"
              className="stroke-brand-blue dark:stroke-slate-700 fill-none transition-all duration-300"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffsetInvested}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold uppercase text-slate-400">Wealth Ratio</span>
            <span className="text-xs font-extrabold text-brand-gold">
              +{Math.round(returnsRatio * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
