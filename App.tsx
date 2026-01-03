
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import Modules from './components/Modules';
import Testimonials from './components/Testimonials';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [view, setView] = useState('home'); // home, support, modules, feedback

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderView = () => {
    switch (view) {
      case 'support':
        return (
          <div className="pt-24 min-h-[70vh] animate-fade-in">
            <Support />
          </div>
        );
      case 'modules':
        return (
          <div className="pt-24 min-h-[70vh] animate-fade-in">
            <Modules />
          </div>
        );
      case 'feedback':
        return (
          <div className="pt-24 min-h-[70vh] animate-fade-in">
            <FeedbackForm />
          </div>
        );
      default:
        return (
          <div className="animate-fade-in">
            <Hero />
            <Support />
            <div className="bg-white dark:bg-dark">
               <Modules />
            </div>
            <Testimonials />
            <div className="py-24 bg-accent text-slate-900 overflow-hidden relative group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 blur-[100px] rounded-full -mr-48 -mt-48 transition-transform group-hover:scale-150 duration-700"></div>
               <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">এখনই ক্যারিয়ার শুরু করার <br /> সঠিক সময়!</h2>
                  <p className="text-xl text-slate-800/80 mb-10 leading-relaxed font-bold">
                     হাজারো সফল ছাত্র ইতিমধ্যে আমাদের সাথে তাদের ডিজিটাল যাত্রা শুরু করেছে। আপনি কি নিজেকে এবং নিজের ব্যবসাকে পরবর্তী ধাপে নিয়ে যেতে তৈরি?
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <a 
                       href="https://chat.whatsapp.com/JBXuMy5PmcjHMiAawJStDw" 
                       className="bg-slate-900 text-accent px-12 py-5 rounded-[2rem] font-black text-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                     >
                        WhatsApp গ্রুপে জয়েন করুন
                     </a>
                  </div>
               </div>
            </div>
            <FeedbackForm />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-slate-900 bg-white dark:bg-dark">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        currentView={view}
        setView={setView}
      />
      
      <main>
        {renderView()}
      </main>

      <Footer />
      <WhatsAppFAB />
      <ChatBot />
    </div>
  );
};

export default App;
