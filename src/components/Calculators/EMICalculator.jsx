import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(15);
  const [results, setResults] = useState({
    monthlyEMI: 0,
    totalInterest: 0,
    totalPayment: 0
  });

  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (r === 0) {
      setResults({
        monthlyEMI: Math.round(P / n),
        totalInterest: 0,
        totalPayment: P
      });
      return;
    }

    // EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = Math.max(0, totalPayment - P);

    setResults({
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    });
  }, [loanAmount, interestRate, tenureYears]);

  // Format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const principalRatio = loanAmount / (results.totalPayment || 1);
  const interestRatio = results.totalInterest / (results.totalPayment || 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Sliders Control */}
      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Loan Amount</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {loanAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="50000" 
            max="15000000" 
            step="50000" 
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹50,000</span>
            <span>₹1.5Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Interest Rate (p.a)</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {interestRate}%
            </span>
          </div>
          <input 
            type="range" 
            min="4" 
            max="20" 
            step="0.1" 
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>4%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Loan Tenure</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">
              {tenureYears} Years
            </span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1" 
            value={tenureYears}
            onChange={(e) => setTenureYears(parseInt(e.target.value))}
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
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Monthly Loan EMI</span>
            <span className="text-xl font-black text-brand-blue dark:text-brand-gold">
              {formatCurrency(results.monthlyEMI)}
            </span>
          </div>
          <div className="pt-2.5 border-t border-slate-200/50 dark:border-slate-850">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Principal Amount</span>
            <span className="text-base font-extrabold text-slate-700 dark:text-slate-200">
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Interest Payable</span>
            <span className="text-base font-extrabold text-brand-gold">
              {formatCurrency(results.totalInterest)}
            </span>
          </div>
          <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Payment</span>
            <span className="text-lg font-black text-slate-800 dark:text-white">
              {formatCurrency(results.totalPayment)}
            </span>
          </div>
        </div>

        {/* Custom SVG EMI Ratio Ring */}
        <div className="relative h-36 w-36 flex items-center justify-center shrink-0">
          <svg className="h-full w-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle (representing Interest Ratio) */}
            <circle
              cx="60"
              cy="60"
              r="50"
              className="stroke-brand-gold fill-none"
              strokeWidth="10"
            />
            {/* Foreground circle (representing Principal Ratio) */}
            <circle
              cx="60"
              cy="60"
              r="50"
              className="stroke-brand-blue dark:stroke-slate-800 fill-none transition-all duration-300"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * (1 - principalRatio)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-bold uppercase text-slate-400">Principal Ratio</span>
            <span className="text-xs font-black text-brand-blue dark:text-brand-gold">
              {Math.round(principalRatio * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
