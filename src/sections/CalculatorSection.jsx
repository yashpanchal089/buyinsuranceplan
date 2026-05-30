import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import SIPCalculator from '../components/Calculators/SIPCalculator';
import MFCalculator from '../components/Calculators/MFCalculator';
import EMICalculator from '../components/Calculators/EMICalculator';
import LICCalculator from '../components/Calculators/LICCalculator';
import EligibilityCalculator from '../components/Calculators/EligibilityCalculator';
import RetirementCalculator from '../components/Calculators/RetirementCalculator';
import GrowthCalculator from '../components/Calculators/GrowthCalculator';

const CalculatorSection = ({ selectedCalculator, onCalculatorChange }) => {
  const calculators = [
    { label: 'SIP Calculator', component: SIPCalculator },
    { label: 'Mutual Fund Calculator', component: MFCalculator },
    { label: 'EMI Calculator', component: EMICalculator },
    { label: 'LIC Premium Calculator', component: LICCalculator },
    { label: 'Loan Eligibility Calculator', component: EligibilityCalculator },
    { label: 'Retirement Calculator', component: RetirementCalculator },
    { label: 'Investment Growth Calculator', component: GrowthCalculator }
  ];

  const ActiveCalc = calculators[selectedCalculator]?.component || SIPCalculator;

  return (
    <section id="calculators" className="relative py-12 sm:py-16 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Financial Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Interactive Financial Planners & Calculators 📊
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Tab Controls (Responsive Grid/Flex for calculators) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mb-8">
          {calculators.map((calc, idx) => {
            const isActive = selectedCalculator === idx;
            return (
              <button
                key={idx}
                onClick={() => onCalculatorChange(idx)}
                className={`py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border text-center flex items-center justify-center min-h-[50px] focus:outline-none ${
                  isActive
                    ? 'bg-brand-blue border-brand-blue text-white dark:bg-brand-gold dark:border-brand-gold dark:text-slate-950 shadow-md font-extrabold'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-brand-gold dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-gold'
                }`}
              >
                {calc.label}
              </button>
            );
          })}
        </div>

        {/* Active Calculator Box */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-2xl relative">
          <ActiveCalc />
        </div>

        {/* Extra external resources buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-semibold text-slate-400">
          <span>Need official valuations?</span>
          <div className="flex gap-3">
            <a 
              href="https://ebiz.licindia.in/D2CPM/?_ga=2.33444222.1770429299.1779606202-1080922726.1776166013#DirectPay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-blue dark:text-brand-gold hover:underline flex items-center"
            >
              <span>LIC Pay Direct</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </a>
            <span className="text-slate-200 dark:text-slate-800">|</span>
            <a 
              href="https://www.hdfcbank.com/personal/tools-and-calculators/emi-calculator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-blue dark:text-brand-gold hover:underline flex items-center"
            >
              <span>Know Your EMI (HDFC Portal)</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
