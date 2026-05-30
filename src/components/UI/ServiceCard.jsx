import React, { useState } from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, BadgePercent, CheckCircle, FileText } from 'lucide-react';
import Modal from './Modal';

const ServiceCard = ({ title, category, description, details, icon: Icon, onQuoteClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuoteClick = () => {
    setModalOpen(false);
    if (onQuoteClick) {
      onQuoteClick(title);
    }
  };

  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className="group relative cursor-pointer rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Border Gold Gradient Hover Effect */}
        <div className="absolute inset-0 p-[2px] rounded-2xl bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-gold-dark group-hover:to-brand-gold-light -z-10 transition-all duration-300">
          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px]"></div>
        </div>

        {/* Decorative background blur */}
        <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-gold/5 dark:bg-brand-gold/2 blur-2xl group-hover:bg-brand-gold/15 transition-all duration-300"></div>

        {/* Card Header (Icon & Arrow) */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-brand-blue dark:text-brand-gold group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-gold dark:group-hover:text-slate-950 transition-all duration-300">
            {Icon ? <Icon className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-brand-gold group-hover:translate-x-1.5 transition-all duration-300" />
        </div>

        {/* Card Titles */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-1 block">
          {category}
        </span>
        <h3 className="text-lg font-bold font-display text-brand-blue dark:text-white group-hover:text-brand-blue-light dark:group-hover:text-brand-gold mb-2 transition-colors duration-200">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Learn More Footer trigger */}
        <div className="mt-5 flex items-center text-xs font-bold text-brand-blue dark:text-brand-gold">
          <span className="mr-1.5">View Details & Policy Scope</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Expandable Detail Modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={`${title} Details`}
      >
        <div className="space-y-5 text-slate-700 dark:text-slate-300">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-brand-blue dark:text-brand-gold mb-1">
                Overview & Target Goal
              </h4>
              <p className="text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-blue dark:text-white flex items-center font-display">
              <FileText className="h-4.5 w-4.5 text-brand-gold mr-1.5" />
              <span>Key Features & Benefits</span>
            </h4>
            <ul className="space-y-2">
              {details && details.features && details.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start space-x-2 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5"></span>
                  <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {details && details.taxBenefit && (
            <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-brand-gold/2 border border-brand-gold/20 flex items-start space-x-3">
              <BadgePercent className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-brand-gold-dark dark:text-brand-gold mb-0.5">
                  Tax Exemptions & Benefits
                </h4>
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {details.taxBenefit}
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex space-x-3">
            <button
              onClick={handleQuoteClick}
              className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-blue-dark to-brand-blue hover:brightness-110 shadow-lg rounded-xl transition-all duration-200"
            >
              Get Free Quote Call
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="px-5 py-3 text-center text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ServiceCard;
