import React from 'react';
import { Phone, Mail, MapPin, Shield, ExternalLink } from 'lucide-react';

const Footer = ({ onCalculatorSelect }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
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

  const handleCalcClick = (index) => {
    handleScrollTo('#calculators');
    if (onCalculatorSelect) {
      onCalculatorSelect(index);
    }
  };

  return (
    <footer className="bg-brand-blue-dark dark:bg-slate-950 text-slate-300 border-t border-brand-gold/20 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo_secure_life.jpg" 
                alt="Secure Life Logo" 
                className="h-12 w-12 rounded-full border border-brand-gold bg-white object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight font-display text-white">
                  buy<span className="text-brand-gold">insurance</span>plan
                </span>
                <span className="text-[8px] uppercase tracking-widest text-brand-gold font-bold">
                  Insurance | Protection | Loans | Security
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Your premium gateway to secured wealth creation, comprehensive health shielding, and customized loan solutions. Manish R. Panchal has been crafting secure financial legacies for over 15+ years.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors duration-200" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <button onClick={() => handleScrollTo('#home')} className="hover:text-brand-gold transition-colors duration-150">Home</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#about')} className="hover:text-brand-gold transition-colors duration-150">About Portfolio</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#why-choose-me')} className="hover:text-brand-gold transition-colors duration-150">Why Choose Me</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#services')} className="hover:text-brand-gold transition-colors duration-150">Insurance & Financial Offerings</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#awards')} className="hover:text-brand-gold transition-colors duration-150">Trophies & Certifications</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#contact')} className="hover:text-brand-gold transition-colors duration-150">Schedule Consultation</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Custom Calculators */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-3">
              Financial Calculators
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <button onClick={() => handleCalcClick(0)} className="hover:text-brand-gold transition-colors duration-150">SIP Growth Calculator</button>
              </li>
              <li>
                <button onClick={() => handleCalcClick(1)} className="hover:text-brand-gold transition-colors duration-150">Mutual Fund Calculator</button>
              </li>
              <li>
                <button onClick={() => handleCalcClick(2)} className="hover:text-brand-gold transition-colors duration-150">Loan EMI Planner</button>
              </li>
              <li>
                <button onClick={() => handleCalcClick(3)} className="hover:text-brand-gold transition-colors duration-150">LIC Premium Estimator</button>
              </li>
              <li>
                <button onClick={() => handleCalcClick(4)} className="hover:text-brand-gold transition-colors duration-150">Loan Eligibility Check</button>
              </li>
              <li>
                <button onClick={() => handleCalcClick(5)} className="hover:text-brand-gold transition-colors duration-150">Retirement Corpus Builder</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details & Direct Pay */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-3">
              Office & Direct Contact
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Shop No. 5, Panchal Chambers, Mulund West Station Road, Mulund, Mumbai, Maharashtra - 400080
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="tel:8108801290" className="text-slate-200 font-bold hover:text-brand-gold transition-colors duration-150">
                  +91 8108801290
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="mailto:panchal.manish@gmail.com" className="text-slate-200 font-semibold hover:text-brand-gold transition-colors duration-150">
                  panchal.manish@gmail.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <a 
                href="https://ebiz.licindia.in/D2CPM/?_ga=2.33444222.1770429299.1779606202-1080922726.1776166013#DirectPay" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold border border-brand-gold hover:brightness-110 shadow-lg hover:shadow-brand-gold/10 rounded-lg flex items-center justify-center space-x-1.5 transition-all duration-300"
              >
                <span>LIC Premium Direct Pay</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] font-semibold text-slate-500 text-center leading-relaxed">
          <p className="max-w-4xl mx-auto flex items-center justify-center space-x-1">
            <Shield className="h-3.5 w-3.5 text-brand-gold inline mr-1" />
            <span>
              REGULATORY DISCLAIMER: Insurance is the subject matter of solicitation. All insurance policies, financial products, and mutual fund plans are subject to market risks. Please read all policy terms, brochures, and scheme related documents carefully before investing. AMFI Registered Mutual Fund Advisor. LIC Agency Code: 02401888. IRDAI licensed.
            </span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-900/40 flex flex-col sm:flex-row justify-between items-center text-xs font-bold text-slate-500">
          <p>© {currentYear} buyinsuranceplan. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Insurance | Protection | Loans | Security</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
