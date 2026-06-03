import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  Award, 
  Shield, 
  DollarSign, 
  Activity, 
  FileText, 
  Heart, 
  TrendingUp, 
  Briefcase, 
  Clock 
} from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode, activeSection, onCalculatorSelect, onGetQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'calculators' | null

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-choose-me' },
    { label: 'Services', type: 'dropdown', key: 'services' },
    { label: 'Awards', href: '#awards' },
    { label: 'Calculators', type: 'dropdown', key: 'calculators' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceDropdownItems = [
    { label: 'Investment', href: '#services', category: 'Investment', icon: TrendingUp, desc: 'Grow wealth with high-yield mutual funds & custom portfolios' },
    { label: 'Protection', href: '#services', category: 'Protection', icon: Shield, desc: 'Secure family financial risk with comprehensive term insurance' },
    { label: 'Life Insurance', href: '#services', category: 'Life Insurance', icon: Heart, desc: 'Long-term endowment savings & guaranteed maturity returns' },
    { label: 'Mediclaim', href: '#services', category: 'Mediclaim', icon: Activity, desc: 'Cashless medical protection & emergency hospital benefits' },
    { label: 'General Insurance', href: '#services', category: 'General Insurance', icon: FileText, desc: 'Vehicle, fire, & commercial business liability covers' },
    { label: 'Loans', href: '#services', category: 'Loans', icon: Briefcase, desc: 'Personal, gold, mortgage, and commercial loan assistance' },
  ];

  const calculatorDropdownItems = [
    { label: 'SIP Calculator', index: 0, icon: Activity, desc: 'Calculate systematic monthly investment compounding' },
    { label: 'Mutual Fund Calculator', index: 1, icon: TrendingUp, desc: 'Estimate lump-sum mutual fund wealth accumulation' },
    { label: 'EMI Calculator', index: 2, icon: DollarSign, desc: 'Compute monthly loan installment repayment plans' },
    { label: 'LIC Premium Calculator', index: 3, icon: Shield, desc: 'Estimate custom LIC protection policy premium rates' },
    { label: 'Loan Eligibility Calculator', index: 4, icon: Award, desc: 'Check home/personal loan capacity from monthly earnings' },
    { label: 'Retirement Calculator', index: 5, icon: Clock, desc: 'Plan inflation-adjusted nest eggs for golden years' },
    { label: 'Investment Growth Calculator', index: 6, icon: TrendingUp, desc: 'Project multi-year compound interest wealth yields' },
  ];

  const handleScrollTo = (id) => {
    setIsOpen(false);
    setActiveDropdown(null);
    const element = document.querySelector(id);
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
  };

  const handleDropdownItemClick = (item) => {
    setActiveDropdown(null);
    setIsOpen(false);
    if (item.category) {
      handleScrollTo('#services');
      const selectCategoryEvent = new CustomEvent('selectServiceCategory', { detail: item.category });
      window.dispatchEvent(selectCategoryEvent);
    } else if (item.index !== undefined) {
      handleScrollTo('#calculators');
      if (onCalculatorSelect) {
        onCalculatorSelect(item.index);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      scrolled 
        ? 'py-0 lg:py-2 bg-white dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent shadow-md lg:shadow-none' 
        : 'py-0 lg:py-4 bg-white/95 dark:bg-slate-950/95 lg:bg-transparent dark:lg:bg-transparent'
    }`}>
      <div className={`max-w-[1360px] mx-auto transition-all duration-300 ${
        scrolled
          ? 'w-full lg:w-[96%] px-4 sm:px-6 lg:px-6 xl:px-8 py-2.5 bg-white lg:bg-white/95 dark:bg-slate-950 dark:lg:bg-slate-950/95 lg:rounded-full lg:border lg:border-slate-200/80 dark:lg:border-slate-800/60 shadow-none lg:shadow-xl backdrop-blur-md'
          : 'w-full lg:w-full px-4 sm:px-6 lg:px-6 xl:px-8 py-3.5 bg-white lg:bg-white/80 dark:bg-slate-950 dark:lg:bg-slate-950/80 lg:rounded-2xl lg:border lg:border-slate-100/50 dark:lg:border-slate-900/40 shadow-none lg:shadow-md backdrop-blur-md'
      }`}>
        <div className="flex justify-between items-center gap-x-1.5 xl:gap-x-3">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2.5 cursor-pointer shrink-0" onClick={() => handleScrollTo('#home')}>
            <img 
              src="/images/logo_secure_life.jpg" 
              alt="Secure Life Logo" 
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-brand-gold shadow-md object-contain bg-white shrink-0"
            />
            <div className="flex flex-col shrink-0">
              <span className="text-base lg:text-[14.5px] xl:text-[19px] font-black tracking-tight font-display text-brand-blue dark:text-white flex items-center">
                Loansure<span className="text-brand-gold">care</span>
              </span>
              <span className="text-[7.5px] lg:text-[7px] xl:text-[8px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold">
                Insurance | Protection | Loans | Security
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-0.5 xl:gap-x-1 shrink-0">
            {navItems.map((item, idx) => {
              if (item.type === 'dropdown') {
                const isServices = item.key === 'services';
                const isCalculators = item.key === 'calculators';
                const items = isServices ? serviceDropdownItems : calculatorDropdownItems;
                const isDropdownActive = activeDropdown === item.key;

                return (
                  <div 
                    key={idx} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`flex items-center lg:px-1.5 lg:py-1 xl:px-2.5 xl:py-1.5 text-[10px] lg:text-[10px] xl:text-[11px] font-extrabold uppercase tracking-wide rounded-full transition-all duration-300 focus:outline-none whitespace-nowrap ${
                      isDropdownActive 
                        ? 'text-brand-gold bg-brand-gold/5 dark:bg-brand-gold/10' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-brand-gold hover:bg-slate-50 dark:hover:bg-slate-900/60'
                    }`}>
                      {item.label}
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-300 ${isDropdownActive ? 'transform rotate-180 text-brand-gold' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute mt-2 w-80 rounded-2xl border border-slate-100 dark:border-slate-900/80 bg-white dark:bg-slate-950 p-2 shadow-2xl transition-all duration-300 transform border-t-4 border-t-brand-gold ${
                      isCalculators ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
                    } ${
                      isDropdownActive 
                        ? 'opacity-100 scale-100 pointer-events-auto visible translate-y-0' 
                        : 'opacity-0 scale-95 pointer-events-none invisible -translate-y-2'
                    }`}>
                      <div className="space-y-0.5">
                        {items.map((subItem, sIdx) => {
                          const IconComponent = subItem.icon;
                          return (
                            <button
                              key={sIdx}
                              onClick={() => handleDropdownItemClick(subItem)}
                              className="w-full text-left p-2.5 flex items-start space-x-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all duration-200 group/item"
                            >
                              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 group-hover/item:bg-brand-gold/10 group-hover/item:text-brand-gold dark:group-hover/item:bg-brand-gold/15 transition-all duration-200 shrink-0">
                                <IconComponent className="h-4.5 w-4.5 transition-transform duration-350 group-hover/item:scale-110 group-hover/item:rotate-3" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-brand-blue dark:group-hover/item:text-brand-gold transition-colors duration-200 leading-tight">
                                  {subItem.label}
                                </span>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5 leading-normal group-hover/item:text-slate-500 dark:group-hover/item:text-slate-400 transition-colors duration-200">
                                  {subItem.desc}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(item.href)}
                  className={`lg:px-1.5 lg:py-1 xl:px-2.5 xl:py-1.5 text-[10px] lg:text-[10px] xl:text-[11px] font-extrabold uppercase tracking-wide rounded-full transition-all duration-300 relative group whitespace-nowrap ${
                    activeSection === item.href.substring(1) 
                      ? 'text-brand-gold bg-brand-gold/5 dark:bg-brand-gold/10' 
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-gold hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons & Dark Mode */}
          <div className="hidden lg:flex items-center gap-x-1.5 xl:gap-x-2.5 shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95 shrink-0"
            >
              {darkMode ? (
                <Sun className="h-4.5 w-4.5 text-brand-gold animate-spin-slow rotate-12" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-brand-blue" />
              )}
            </button>

            {/* Direct Pay Link */}
            <a
              href="https://ebiz.licindia.in/D2CPM/?_ga=2.33444222.1770429299.1779606202-1080922726.1776166013#DirectPay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 lg:px-2.5 lg:py-1.5 xl:px-3.5 xl:py-1.5 text-[9px] lg:text-[9px] xl:text-[10.5px] font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:brightness-110 shadow-md hover:shadow-lg hover:shadow-brand-gold/10 rounded-full transition-all duration-300 flex items-center space-x-1.5 shrink-0 whitespace-nowrap"
            >
              <span>LIC Direct Pay</span>
            </a>

            {/* Get Free Consultation - Always visible on desktop, aligned symmetrically with LIC Direct Pay */}
            <button 
              onClick={onGetQuoteClick}
              className="flex px-2 py-1 lg:px-2.5 lg:py-1.5 xl:px-3.5 xl:py-1.5 text-[9px] lg:text-[9px] xl:text-[10.5px] font-black uppercase tracking-wider border-2 border-brand-blue dark:border-brand-gold text-brand-blue dark:text-brand-gold hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-slate-950 rounded-full transition-all duration-300 shrink-0 whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button / Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition-all duration-300"
            >
              {darkMode ? <Sun className="h-5 w-5 text-brand-gold" /> : <Moon className="h-5 w-5 text-brand-blue" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-205 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-brand-gold" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (High Contrast dark layout bg-slate-900 text-white) */}
      <div className={`fixed top-[72px] sm:top-[80px] left-0 w-full bg-slate-900 dark:bg-slate-950 border-t border-slate-800 shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.type === 'dropdown') {
              const isServices = item.key === 'services';
              const items = isServices ? serviceDropdownItems : calculatorDropdownItems;
              const isDropdownActive = activeDropdown === item.key;

              return (
                <div key={idx} className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(isDropdownActive ? null : item.key)}
                    className={`w-full flex justify-between items-center px-4 py-2.5 text-base font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                      isDropdownActive ? 'text-brand-gold bg-slate-800/40' : 'text-slate-200 hover:text-brand-gold'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isDropdownActive ? 'rotate-180 text-brand-gold' : 'text-slate-400'}`} />
                  </button>
                  <div className={`pl-2 space-y-1 transition-all duration-200 overflow-hidden ${
                    isDropdownActive ? 'max-h-[360px] opacity-100 mt-1' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    {items.map((subItem, sIdx) => {
                      const IconComponent = subItem.icon;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => handleDropdownItemClick(subItem)}
                          className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-semibold rounded-lg text-slate-300 hover:text-brand-gold hover:bg-slate-800/25 transition-all duration-150"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-800 text-brand-gold shrink-0">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-bold text-slate-200">{subItem.label}</span>
                            <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{subItem.desc}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => handleScrollTo(item.href)}
                className={`w-full text-left px-4 py-2.5 text-base font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-slate-800 text-brand-gold' 
                    : 'text-slate-300 hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3 px-2">
            <a
              href="https://ebiz.licindia.in/D2CPM/?_ga=2.33444222.1770429299.1779606202-1080922726.1776166013#DirectPay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-center text-xs font-black uppercase tracking-widest text-slate-950 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light rounded-full shadow-lg"
            >
              LIC Direct Payment
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                if (onGetQuoteClick) onGetQuoteClick();
              }}
              className="w-full py-3 text-center text-xs font-black uppercase tracking-widest border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-slate-950 rounded-full transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
