import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(30000);
  const [inflationRate, setInflationRate] = useState(6);
  const [results, setResults] = useState({
    futureExpenses: 0,
    requiredCorpus: 0,
    monthlySavingsNeeded: 0
  });

  useEffect(() => {
    const n = Math.max(1, retirementAge - currentAge);
    
    // Future Monthly Expense = Expense * (1 + inflation/100)^n
    const futureExpenses = monthlyExpense * Math.pow(1 + inflationRate / 100, n);
    
    // Total required corpus at retirement. Assuming:
    // Life expectancy after retirement: 25 years (until age 85)
    // Post-retirement return rate on corpus: 8% p.a.
    // Post-retirement inflation: 6% p.a.
    // Real rate of return post-retirement = (1.08 / 1.06) - 1 = 1.886%
    const r_post = 0.08;
    const f_post = inflationRate / 100;
    const realRate = (1 + r_post) / (1 + f_post) - 1;
    
    const retirementYears = 25;
    
    // Annuity present value formula for retirement corpus
    let requiredCorpus = 0;
    if (realRate === 0) {
      requiredCorpus = futureExpenses * 12 * retirementYears;
    } else {
      requiredCorpus = (futureExpenses * 12) * ((1 - Math.pow(1 + realRate, -retirementYears)) / realRate) * (1 + realRate);
    }

    // Monthly savings needed today to build this corpus in 'n' years (assuming 12% return on equity mutual fund investments)
    const r_accum = 0.12 / 12;
    const months = n * 12;
    let monthlySavingsNeeded = 0;
    if (r_accum === 0) {
      monthlySavingsNeeded = requiredCorpus / months;
    } else {
      monthlySavingsNeeded = requiredCorpus / (((Math.pow(1 + r_accum, months) - 1) / r_accum) * (1 + r_accum));
    }

    setResults({
      futureExpenses: Math.round(futureExpenses),
      requiredCorpus: Math.round(requiredCorpus),
      monthlySavingsNeeded: Math.round(monthlySavingsNeeded)
    });
  }, [currentAge, retirementAge, monthlyExpense, inflationRate]);

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
        {/* Ages Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Current Age</span>
              <span className="text-sm font-extrabold text-brand-blue dark:text-brand-gold">{currentAge} Yrs</span>
            </div>
            <input 
              type="range" 
              min="18" 
              max="59" 
              step="1" 
              value={currentAge}
              onChange={(e) => setCurrentAge(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Retirement Age</span>
              <span className="text-sm font-extrabold text-brand-blue dark:text-brand-gold">{retirementAge} Yrs</span>
            </div>
            <input 
              type="range" 
              min="60" 
              max="75" 
              step="1" 
              value={retirementAge}
              onChange={(e) => setRetirementAge(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
            />
          </div>
        </div>

        {/* Current Monthly Expense */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Current Monthly Expense</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {monthlyExpense.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="5000" 
            max="300000" 
            step="5000" 
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹5,000</span>
            <span>₹3L</span>
          </div>
        </div>

        {/* Inflation Rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Expected Annual Inflation</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold">{inflationRate}%</span>
          </div>
          <input 
            type="range" 
            min="4" 
            max="12" 
            step="0.5" 
            value={inflationRate}
            onChange={(e) => setInflationRate(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>4%</span>
            <span>12%</span>
          </div>
        </div>
      </div>

      {/* Visual Chart & Results */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-center gap-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Required Retirement Corpus</span>
          <span className="text-2xl font-black text-brand-blue dark:text-brand-gold">
            {formatCurrency(results.requiredCorpus)}
          </span>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-slate-400">Monthly Expenses At Retirement</span>
            <span className="text-slate-700 dark:text-slate-200">{formatCurrency(results.futureExpenses)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-slate-400">Monthly Mutual Fund SIP Needed Today</span>
            <span className="text-brand-blue dark:text-brand-gold font-black">{formatCurrency(results.monthlySavingsNeeded)}</span>
          </div>
        </div>

        <div className="text-[9px] font-semibold text-slate-400 leading-relaxed bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900 leading-relaxed">
          *Assumptions: Post-retirement corpus yields 8% returns, post-retirement inflation matches {inflationRate}%, retirement life spans 25 years (until age 85), accumulation phase SIP interest yields 12% p.a. in diversified equity mutual funds.
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
