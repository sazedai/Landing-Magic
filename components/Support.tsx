
import React from 'react';
import { Headphones, ExternalLink } from 'lucide-react';
import { SUPPORT_DATA, BRAND_NAME } from '../constants';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent mb-6 shadow-inner">
            <Headphones size={32} />
          </div>
          <h2 className="text-4xl font-black mb-4 dark:text-white">{BRAND_NAME} সাপোর্ট চ্যানেল</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">আমরা সবসময় আপনার পাশে আছি। যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-8 py-6 font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest text-xs">চ্যানেল</th>
                <th className="px-8 py-6 font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest text-xs">সময়</th>
                <th className="px-8 py-6 font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest text-xs">লিংক / কন্টাক্ট</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {SUPPORT_DATA.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-6 font-bold text-slate-900 dark:text-slate-100">{item.channel}</td>
                  <td className="px-8 py-6 text-slate-600 dark:text-slate-400 font-medium">{item.time}</td>
                  <td className="px-8 py-6">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent group-hover:text-secondary font-black transition-colors"
                    >
                      {item.linkText} <ExternalLink size={16} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {SUPPORT_DATA.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-5 shadow-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">{item.channel}</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.time}</p>
                </div>
              </div>
              <a
                href={item.link}
                className="w-full text-center py-4 bg-accent text-slate-900 rounded-2xl font-black shadow-lg shadow-accent/20 active:scale-95 transition-all"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
