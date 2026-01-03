
import React from 'react';
import { MessageCircle, Rocket, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, AGENCY_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 mesh-gradient">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/5 dark:bg-slate-800/50 backdrop-blur-md text-slate-700 dark:text-slate-300 font-bold text-sm mb-10 shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            SME ল্যান্ডিং পেজ মাস্টারক্লাস ২০২৪
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.95] md:leading-[1]">
            আপনার ব্যবসাকে <br />
            <span className="bg-gradient-to-r from-accent via-secondary to-yellow-500 bg-clip-text text-transparent">অটোমেশনে</span> নিয়ে যান
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed">
            ৮টি ধাপে প্রফেশনাল ল্যান্ডিং পেজ বিল্ডিং কোর্স। আপনার ব্যবসার সেলস ট্র্যাকিং এবং ডেলিভারি সিস্টেমকে করুন সম্পূর্ণ ডিজিটাল।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-accent via-secondary to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 px-12 py-6 rounded-3xl text-xl font-black transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.3)] active:scale-95"
            >
              <MessageCircle size={24} strokeWidth={2.5} />
              কোর্সে জয়েন করুন
            </a>
            <a
              href={AGENCY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-accent px-12 py-6 rounded-3xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl active:scale-95"
            >
              <Rocket size={24} />
              এজেন্সি সেটআপ
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-slate-500 dark:text-slate-400 font-bold">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-accent" />
              <span>লাইভ মেন্টরশিপ</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-accent" />
              <span>লাইফটাইম অ্যাক্সেস</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-accent" />
              <span>স্পেশাল AI টুলস</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Mockup Element */}
      <div className="mt-28 flex justify-center px-4 md:px-0">
        <div className="w-full max-w-6xl aspect-[16/8] bg-slate-900 rounded-t-[4rem] shadow-[0_-40px_100px_rgba(0,0,0,0.3)] border-t border-x border-slate-800 p-3 md:p-6 overflow-hidden relative">
           <div className="w-full h-full rounded-[2.5rem] bg-slate-900/80 flex items-center justify-center border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
              <div className="text-center relative z-10">
                 <div className="text-slate-500 font-bold mb-4 tracking-widest text-xs uppercase">Platform Interface Preview</div>
                 <div className="flex gap-3 justify-center">
                    <div className="w-32 h-3 rounded-full bg-accent/20"></div>
                    <div className="w-20 h-3 rounded-full bg-secondary/20"></div>
                    <div className="w-24 h-3 rounded-full bg-slate-700"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
