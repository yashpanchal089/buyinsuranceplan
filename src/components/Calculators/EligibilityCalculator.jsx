import React, { useState, useEffect } from 'react';
import { IndianRupee, HelpCircle } from 'lucide-react';

const EligibilityCalculator = () => {
  const [salary, setSalary] = useState(65000);
  const [existingEMI, setExistingEMI] = useState(5000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const [results, setResults] = useState({
    maxLoan: 0,
    allowedEMI: 0
  });

  useEffect(() => {
    // Standard FOIR (Fixed Obligation to Income Ratio) is ~50%
    const foir = 0.5;
    const maxCapacityEMI = salary * foir;
    const allowedEMI = Math.max(0, maxCapacityEMI - existingEMI);

    const r = interestRate / 12 / 100;
    const n = years * 12;

    if (allowedEMI === 0 || r === 0) {
      setResults({ maxLoan: 0, allowedEMI: 0 });
      return;
    }

    // P = EMI * ((1 + r)^n - 1) / (r * (1 + r)^n)
    const maxLoan = allowedEMI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));

    setResults({
      maxLoan: Math.round(maxLoan),
      allowedEMI: Math.round(allowedEMI)
    });
  }, [salary, existingEMI, interestRate, years]);

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
        {/* Net Salary */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Net Monthly Take-home Salary</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {salary.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="10000" 
            max="500000" 
            step="5000" 
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹10,000</span>
            <span>₹5L</span>
          </div>
        </div>

        {/* Existing EMI */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Existing Monthly EMIs</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {existingEMI.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="150000" 
            step="1000" 
            value={existingEMI}
            onChange={(e) => setExistingEMI(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹0</span>
            <span>₹1.5L</span>
          </div>
        </div>

        {/* Interest Rate & Tenure Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Interest Rate (p.a)</label>
            <input 
              type="number" 
              min="5" 
              max="20" 
              step="0.1" 
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 8.5)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5 text-sm font-bold text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Loan Tenure</label>
            <select
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5 text-sm font-bold text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold"
            >
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="25">25 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Visual Chart & Results */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-center gap-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Maximum Approved Loan Limit</span>
          <span className="text-2xl font-black text-brand-blue dark:text-brand-gold animate-pulse-subtle">
            {formatCurrency(results.maxLoan)}
          </span>
        </div>
        
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-slate-400">FOIR Salary Capacity (50%)</span>
            <span className="text-slate-700 dark:text-slate-200">{formatCurrency(salary * 0.5)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-slate-400">Allowed Monthly EMI Capacity</span>
            <span className="text-brand-blue dark:text-brand-gold font-bold">{formatCurrency(results.allowedEMI)}</span>
          </div>
        </div>

        <div className="text-[10px] font-semibold text-slate-400 leading-relaxed bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900 flex items-start space-x-1.5">
          <HelpCircle className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
          <span>
            *Approved Limit is an approximation based on the standard FOIR model. Banks evaluate CIBIL score, property documents, co-applicants, and age limits for final eligibility.
          </span>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCalculator;
