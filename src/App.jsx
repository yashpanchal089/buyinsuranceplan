import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyChooseMe from './sections/WhyChooseMe';
import Services from './sections/Services';
import Awards from './sections/Awards';
import Testimonials from './sections/Testimonials';
import CalculatorSection from './sections/CalculatorSection';
import Contact from './sections/Contact';
import Modal from './components/UI/Modal';
import { Send, CheckCircle2 } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCalc, setSelectedCalc] = useState(0);
  const [prefilledService, setPrefilledService] = useState('General Inquiry');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  // Initialize Dark Mode based on system preferences or defaults
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll section tracker to highlight active navbar links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-choose-me', 'services', 'awards', 'calculators', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalculatorSelect = (index) => {
    setSelectedCalc(index);
    let url = 'https://knowyouremi.in/';
    if (index === 0 || index === 1) {
      url = 'https://sipcalculator.in/';
    } else if (index === 3) {
      url = 'https://ebiz.licindia.in/D2CPM/?&_ga=2.157973370.1391002638.1780480341-1783706934.1779374049#qni/basicinfo';
    } else if (index === 5) {
      url = 'https://ebiz.licindia.in/D2CPM/?&_ga=2.157973370.1391002638.1780480341-1783706934.1779374049#qni/ba';
    }
    window.open(url, '_blank');
  };

  const handleServiceQuoteClick = (serviceTitle) => {
    setPrefilledService(serviceTitle);
    // Scroll to contact form
    const element = document.querySelector('#contact');
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

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setModalLoading(true);

    try {
      const formDataObj = new FormData();

      formDataObj.append("access_key", "c83a2048-6cd5-433a-ac89-0a9cd6f531c7");
      formDataObj.append("subject", "New Financial Review Request - Loansurecare");

      formDataObj.append("name", modalFormData.name);
      formDataObj.append("phone", modalFormData.phone);
      formDataObj.append("email", modalFormData.email);
      formDataObj.append("message", modalFormData.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const result = await response.json();

      if (result.success) {
        setModalSubmitted(true);
        setModalFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setModalLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onCalculatorSelect={handleCalculatorSelect}
        onGetQuoteClick={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Home Sections */}
      <main>
        {/* 1. Hero Banner with dynamic stats counters */}
        <Hero onGetQuoteClick={() => setIsQuoteModalOpen(true)} />

        {/* 2. About capabilities scope section */}
        <About />

        {/* 3. Why Choose Me points of trust cards */}
        <WhyChooseMe />

        {/* 4. Categorized services tabs and expanders */}
        <Services onQuoteClick={handleServiceQuoteClick} />

        {/* 5. Showcase carousel and lightbox overlay */}
        <Awards />

        {/* 6. Continuous auto-scrolling testimonials marquee train */}
        <Testimonials />

        {/* 7. Calculator Section wrappers */}
        <CalculatorSection 
          selectedCalculator={selectedCalc}
          onCalculatorChange={setSelectedCalc}
        />

        {/* 8. Lead Capture Appointment Consultation Section */}
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Footer quick link disclaimers */}
      <Footer onCalculatorSelect={handleCalculatorSelect} />

      {/* Quick Consultation Modal */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setModalSubmitted(false);
        }}
        title="Schedule Free Financial Review"
      >
        {modalSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
            <CheckCircle2 className="h-14 w-14 text-[#25D366]" />
            <h4 className="text-lg font-bold text-brand-blue dark:text-brand-gold font-display">
              Review Scheduled!
            </h4>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Your details are safely locked. Mr. Manish R. Panchal will prepare your custom protection plans and call you back in under 24 hours.
            </p>
            <button
              onClick={() => {
                setIsQuoteModalOpen(false);
                setModalSubmitted(false);
              }}
              className="mt-2 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-blue dark:bg-brand-gold dark:text-slate-950 rounded-full"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Your Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Priyesh Mehta"
                value={modalFormData.name}
                onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Contact Number</label>
              <input 
                type="tel" 
                required
                placeholder="e.g. +91 98765 43210"
                value={modalFormData.phone}
                onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="e.g. priyesh@gmail.com"
                value={modalFormData.email}
                onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Brief Inquiry Description</label>
              <textarea 
                rows="3"
                placeholder="Brief details about your term plan coverages or mutual fund planning..."
                value={modalFormData.message}
                onChange={(e) => setModalFormData({ ...modalFormData, message: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-white focus:outline-none focus:border-brand-gold"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={modalLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all duration-300 disabled:opacity-50"
              >
                {modalLoading ? (
                  <span className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>FOR YOUR PERSONALIZE PRESENTATION</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default App;
