import React from 'react';

const CalculatorSection = ({ selectedCalculator, onCalculatorChange }) => {
  const calculators = [
    'SIP Calculator',
    'Mutual Fund Calculator',
    'EMI Calculator',
    'LIC Premium Calculator',
    'Loan Eligibility Calculator',
    'Retirement Calculator',
    'Investment Growth Calculator'
  ];

  const handleButtonClick = (idx) => {
    if (onCalculatorChange) {
      onCalculatorChange(idx);
    }
    window.open('https://knowyouremi.in/', '_blank');
  };

  return (
    <section id="calculators" className="relative py-14 sm:py-18 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Financial Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Interactive Financial Planners & Calculators 📊
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Instantly evaluate your systemic investments, lumpsum growths, loan EMIs, and wealth projections. Click on any tool below to launch our premium, fully-featured interactive planners.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Controls (7 interactive redirect buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-4">
          {calculators.map((label, idx) => (
            <button
              key={idx}
              onClick={() => handleButtonClick(idx)}
              className="py-4 px-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 border text-center flex items-center justify-center min-h-[60px] cursor-pointer focus:outline-none bg-slate-50 border-slate-200 text-slate-700 hover:bg-brand-gold hover:border-brand-gold hover:text-slate-950 shadow-sm hover:shadow-lg dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-brand-gold dark:hover:border-brand-gold dark:hover:text-slate-950 hover:-translate-y-0.5"
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CalculatorSection;
