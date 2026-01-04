
import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppFAB: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-5 z-50">
      {/* Scroll to Top - Enhanced Fade In/Out */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-white dark:bg-slate-800 text-accent rounded-2xl flex items-center justify-center shadow-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-500 ease-out transform ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={28} strokeWidth={2.5} />
      </button>
      
      {/* WhatsApp Button - Subtle Animation Updates */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 hover:-rotate-6 active:scale-95 transition-all duration-300 group relative animate-pulse-slow"
      >
        <div className="absolute -top-12 left-0 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none translate-y-2 group-hover:translate-y-0">
          WhatsApp চ্যাট
        </div>
        <MessageCircle size={32} fill="white" />
      </a>
    </div>
  );
};

export default WhatsAppFAB;
