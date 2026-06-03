import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataObj = new FormData();

      formDataObj.append("access_key", "c83a2048-6cd5-433a-ac89-0a9cd6f531c7");
      formDataObj.append("subject", "New Contact Form Lead - Loansurecare");

      formDataObj.append("name", formData.name);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("email", formData.email);
      formDataObj.append("service", formData.service);
      formDataObj.append("message", formData.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "General Inquiry",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  // WhatsApp quick trigger
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Mr. Manish, I visited Loansurecare and would like to schedule a free financial/insurance consultation. Please assist.");
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
                    <span className="text-slate-500 dark:text-slate-400 font-extrabold">
                      Thane & Mumbai / Navi Mumbai
                    </span>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5 border-t border-slate-200/50 dark:border-slate-800/80 pt-3.5">
                  <MapPin className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Service Scope Area</span>
                    <span className="text-brand-blue dark:text-brand-gold font-extrabold text-xs">
                      📍 Available on visits as per prior appointment and calls
                    </span>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5 border-t border-slate-200/50 dark:border-slate-800/80 pt-3.5">
                  <Phone className="h-5.5 w-5.5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-700 dark:text-slate-200 block mb-0.5">Contact Details</span>
                    <div className="flex flex-col space-y-1 text-sm font-semibold">
                      <a href="tel:9152131255" className="text-brand-blue dark:text-white hover:text-brand-gold transition-colors duration-150 flex items-center">
                        <span>📞 Call: +91 9152131255</span>
                      </a>
                      <a href="https://wa.me/918108801290" target="_blank" rel="noopener noreferrer" className="text-brand-blue dark:text-white hover:text-brand-gold transition-colors duration-150 flex items-center">
                        <span>💬 WhatsApp: +91 8108801290</span>
                      </a>
                    </div>
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
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.597-1.002-5.04-2.83-6.872-1.828-1.827-4.265-2.83-6.862-2.831-5.409 0-9.809 4.397-9.812 9.802-.001 1.953.51 3.535 1.503 4.908l-.986 3.606 3.696-.97zm11.205-5.46c-.287-.144-1.696-.838-1.958-.934-.262-.096-.453-.144-.644.144-.191.288-.739.934-.906 1.125-.167.191-.334.215-.62.072-.287-.144-1.213-.447-2.311-1.427-.854-.762-1.43-1.703-1.597-1.99-.168-.287-.018-.443.126-.585.129-.127.287-.335.43-.502.143-.167.191-.287.287-.478.096-.191.048-.36-.024-.502-.072-.143-.644-1.554-.882-2.129-.232-.559-.487-.482-.667-.492-.172-.01-.368-.012-.565-.012-.197 0-.517.074-.787.373-.27.299-1.031 1.009-1.031 2.46s1.054 2.846 1.201 3.038c.146.191 2.075 3.169 5.027 4.444.702.303 1.251.485 1.678.621.705.224 1.346.193 1.854.117.566-.084 1.696-.693 1.935-1.362.239-.669.239-1.243.167-1.362-.072-.12-.262-.191-.548-.335z" />
                  </svg>
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
        href="tel:9152131255"
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
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.597-1.002-5.04-2.83-6.872-1.828-1.827-4.265-2.83-6.862-2.831-5.409 0-9.809 4.397-9.812 9.802-.001 1.953.51 3.535 1.503 4.908l-.986 3.606 3.696-.97zm11.205-5.46c-.287-.144-1.696-.838-1.958-.934-.262-.096-.453-.144-.644.144-.191.288-.739.934-.906 1.125-.167.191-.334.215-.62.072-.287-.144-1.213-.447-2.311-1.427-.854-.762-1.43-1.703-1.597-1.99-.168-.287-.018-.443.126-.585.129-.127.287-.335.43-.502.143-.167.191-.287.287-.478.096-.191.048-.36-.024-.502-.072-.143-.644-1.554-.882-2.129-.232-.559-.487-.482-.667-.492-.172-.01-.368-.012-.565-.012-.197 0-.517.074-.787.373-.27.299-1.031 1.009-1.031 2.46s1.054 2.846 1.201 3.038c.146.191 2.075 3.169 5.027 4.444.702.303 1.251.485 1.678.621.705.224 1.346.193 1.854.117.566-.084 1.696-.693 1.935-1.362.239-.669.239-1.243.167-1.362-.072-.12-.262-.191-.548-.335z" />
        </svg>
      </button>
    </section>
  );
};

export default Contact;
