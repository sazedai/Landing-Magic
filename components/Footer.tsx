
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Globe } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socials = [
    { icon: <Facebook size={20} />, color: '#1877F2', name: 'Facebook' },
    { icon: <Youtube size={20} />, color: '#FF0000', name: 'Youtube' },
    { icon: <Instagram size={20} />, color: '#E4405F', name: 'Instagram' },
    { icon: <Twitter size={20} />, color: '#1DA1F2', name: 'Twitter' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
               <Logo className="brightness-125" />
            </div>
            <p className="text-slate-400 mb-8 max-w-sm text-lg leading-relaxed font-medium">
              বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসায়ীদের জন্য প্রফেশনাল ল্যান্ডিং পেজ তৈরি এবং মার্কেটিং এর বিশেষ প্রশিক্ষণ। আমরা আপনার বিজনেসকে করি সম্পূর্ণ ডিজিটাল।
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-accent hover:text-slate-900 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] group relative overflow-hidden"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-accent uppercase tracking-widest text-sm">কুইক লিংক</h3>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-accent transition-all hover:translate-x-1 inline-block">হোম</a></li>
              <li><a href="#support" onClick={(e) => handleSmoothScroll(e, '#support')} className="hover:text-accent transition-all hover:translate-x-1 inline-block">সাপোর্ট চ্যানেল</a></li>
              <li><a href="#modules" onClick={(e) => handleSmoothScroll(e, '#modules')} className="hover:text-accent transition-all hover:translate-x-1 inline-block">কোর্স মডিউল</a></li>
              <li><a href="https://elgrowth.com/agencyservice" target="_blank" className="hover:text-accent transition-all hover:translate-x-1 inline-block flex items-center gap-2">এজেন্সি সার্ভিস <Globe size={14} /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-accent uppercase tracking-widest text-sm">কন্টাক্ট সাপোর্ট</h3>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-accent"><Mail size={16} /></div>
                support@landingmagic.com
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-accent">📞</div>
                +880 9647 122285
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
             <span className="bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">Privacy Policy</span>
             <p className="text-slate-400">Powered by <span className="text-accent italic">Silent Automation</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
