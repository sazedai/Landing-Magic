
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Globe } from 'lucide-react';
import { BRAND_NAME, LOGO_TEXT } from '../constants';

const Footer: React.FC = () => {
  const socials = [
    { icon: <Facebook size={20} />, color: '#1877F2', name: 'Facebook' },
    { icon: <Youtube size={20} />, color: '#FF0000', name: 'Youtube' },
    { icon: <Instagram size={20} />, color: '#E4405F', name: 'Instagram' },
    { icon: <Twitter size={20} />, color: '#1DA1F2', name: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-slate-900 font-black text-lg shadow-lg shadow-accent/30">{LOGO_TEXT[0]}</div>
               <span className="text-3xl font-black tracking-tight">{BRAND_NAME}</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm text-lg leading-relaxed font-medium">
              বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসায়ীদের জন্য প্রফেশনাল ল্যান্ডিং পেজ তৈরি এবং মার্কেটিং এর বিশেষ প্রশিক্ষণ। আমরা আপনার বিজনেসকে করি সম্পূর্ণ ডিজিটাল।
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:bg-accent hover:text-slate-900 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] group"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-accent uppercase tracking-widest text-sm">কুইক লিংক</h3>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2">হোম</a></li>
              <li><a href="#support" className="hover:text-accent transition-colors flex items-center gap-2">সাপোর্ট চ্যানেল</a></li>
              <li><a href="#modules" className="hover:text-accent transition-colors flex items-center gap-2">কোর্স মডিউল</a></li>
              <li><a href="https://elgrowth.com/agencyservice" className="hover:text-accent transition-colors flex items-center gap-2">এজেন্সি সার্ভিস <Globe size={14} /></a></li>
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
