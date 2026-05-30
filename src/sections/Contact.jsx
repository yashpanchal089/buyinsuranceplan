import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefilledService || 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync prefilled service when it changes (e.g. from service card learn more trigger)
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API lead processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  // WhatsApp quick trigger
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Mr. Manish, I visited buyinsuranceplan and would like to schedule a free financial/insurance consultation. Please assist.");
    window.open(`https://wa.me/918108801290?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full dark:text-brand-gold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black font-display text-brand-blue dark:text-white mt-3 mb-4 leading-tight">
            Schedule A Free Consultation Today 🤝
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Column 1: Info & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-left">
              <h3 className="text-lg font-bold font-display text-brand-blue dark:text-brand-gold border-b border-slate-200 dark:border-slate-800 pb-2">
                Advisor Contact Info
              </h3>
              
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start space-x-3.5">
                  <MapPin className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Office Address</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Shop No. 5, Panchal Chambers, Mulund West Station Road, Mulund, Mumbai, Maharashtra - 400080
                    </span>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5 border-t border-slate-200/50 dark:border-slate-800/80 pt-3.5">
                  <MapPin className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Service Scope Area</span>
                    <span className="text-brand-blue dark:text-brand-gold font-extrabold text-xs">
                      📍 Delivering Doorstep Advisory All Over Mumbai, Thane, and Navi Mumbai!
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px] mt-1 font-semibold leading-normal">
                      (Personal home/office visits & secure virtual planning sessions are fully available)
                    </span>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5 border-t border-slate-200/50 dark:border-slate-800/80 pt-3.5">
                  <Phone className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Contact Number</span>
                    <a href="tel:8108801290" className="text-brand-blue dark:text-white font-extrabold hover:text-brand-gold transition-colors duration-150">
                      +91 8108801290
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5">
                  <Mail className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Email Address</span>
                    <a href="mailto: securelife128@gmail.com" className="text-brand-blue dark:text-white font-semibold hover:text-brand-gold transition-colors duration-150">
                       securelife128@gmail.com
                    </a>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Quick Contact */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={handleWhatsAppChat}
                  className="w-full py-3 px-4 rounded-full bg-[#25D366] text-white hover:brightness-105 font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-300"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Custom Google Map Styled Iframe Frame */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-md relative min-h-[220px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160982348!2d72.74109772590214!3d19.08219783958525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717056000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Scope Map All Over Mumbai Region"
                className="absolute inset-0 dark:brightness-90 dark:contrast-105"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Stylized Lead Capture Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-left">
            <h3 className="text-lg font-bold font-display text-brand-blue dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-5 flex items-center">
              <span>Secure Your Capital Evaluation</span>
            </h3>

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                <CheckCircle2 className="h-16 w-16 text-[#25D366] animate-bounce" />
                <h4 className="text-xl font-bold font-display text-brand-blue dark:text-brand-gold">
                  Lead Received Successfully!
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm">
                  Thank you for securing your details. Mr. Manish R. Panchal will personally review your goals and call you back in under 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Submit Another Goal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Contact Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email ID</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Goal / Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3.5 text-sm font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                    >
                      <option value="General Inquiry">General Wealth Inquiry</option>
                      <option value="Term Plans">Term Insurance Protection</option>
                      <option value="SIP / Mutual Funds">SIP & Mutual Funds Growth</option>
                      <option value="Cashless Mediclaim">Family Mediclaim Shield</option>
                      <option value="Endowment / LIC Policies">LIC Policies & Endowment</option>
                      <option value="All Bank Loans">Home & Corporate Loans</option>
                      <option value="Retirement SWP">Retirement SWP Cashflow</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message / Goal Description</label>
                  <textarea 
                    name="message" 
                    rows="4.5"
                    required
                    placeholder="Tell Mr. Manish about your financial milestones or required protections..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:brightness-110 shadow-lg text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Book Financial Review Call</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Action Banner (Secure Your Family & Financial Future Today) */}
        <div className="relative rounded-3xl overflow-hidden bg-brand-blue-dark dark:bg-slate-900 p-8 sm:p-10 border border-brand-gold/25 shadow-2xl text-center flex flex-col items-center justify-center gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_55%)] pointer-events-none"></div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Legacy Protection
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-display text-white max-w-2xl leading-snug">
            "Secure Your Family & Financial Future Today"
          </h3>
          <p className="text-xs font-semibold text-slate-400 max-w-xl leading-relaxed">
            Take a small step today. Partner with Mr. Manish R. Panchal to construct solid inflation-shielded corpuses, absolute health coverages, and direct loan access.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold hover:brightness-110 shadow-lg rounded-full transition-all duration-300"
            >
              Get Free Initial Wealth Review
            </button>
          </div>
        </div>
      </div>

      {/* Floating Actions on Bottom Corners */}
      {/* Left Bottom: Floating Call Widget */}
      <a 
        href="tel:8108801290"
        aria-label="Direct Telephone Call मनीष पंचाल"
        className="fixed bottom-6 left-6 h-13 w-13 rounded-full bg-brand-blue text-white dark:bg-brand-blue dark:text-white flex items-center justify-center shadow-2xl border border-white/20 hover:scale-108 transition-all duration-300 z-40 animate-pulse-subtle"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Right Bottom: Floating WhatsApp Widget */}
      <button 
        onClick={handleWhatsAppChat}
        aria-label="Direct WhatsApp Message"
        className="fixed bottom-6 right-6 h-13 w-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl border border-white/20 hover:scale-108 transition-all duration-300 z-40 animate-pulse-subtle"
      >
        <MessageSquare className="h-6 w-6 fill-white" />
      </button>
    </section>
  );
};

export default Contact;
