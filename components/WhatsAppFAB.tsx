
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
      {/* Scroll to Top - Moves with visibility */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-white dark:bg-slate-800 text-accent rounded-2xl flex items-center justify-center shadow-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-50 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={28} strokeWidth={2.5} />
      </button>
      
      {/* WhatsApp Button - Left Aligned */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-18 h-18 bg-[#25D366] text-white rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative animate-pulse-slow"
      >
        <div className="absolute -top-14 left-0 bg-[#25D366] text-white px-5 py-2 rounded-2xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none translate-y-2 group-hover:translate-y-0 backdrop-blur-md">
          WhatsApp চ্যাট
        </div>
        <MessageCircle size={36} fill="white" />
      </a>
    </div>
  );
};

export default WhatsAppFAB;
