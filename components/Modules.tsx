
import React, { useState } from 'react';
import { ChevronDown, Lock } from 'lucide-react';
import { COURSE_MODULES } from '../constants';
import LazyVideo from './LazyVideo';

const Modules: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="modules" className="py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 tracking-tight dark:text-white">কোর্স <span className="text-accent">মডিউল</span> সমূহ</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">আপনার ব্যবসাকে জিরো থেকে অটোমেশনে নেওয়ার সম্পূর্ণ গাইডলাইন।</p>
        </div>

        <div className="space-y-6">
          {COURSE_MODULES.map((module) => (
            <div
              key={module.id}
              className={`rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden ${
                openId === module.id
                  ? 'border-accent bg-white dark:bg-dark shadow-2xl shadow-accent/5'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-dark hover:border-slate-200 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === module.id ? null : module.id)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className={`w-14 h-14 rounded-3xl flex items-center justify-center font-black text-2xl transition-all duration-500 ${
                    openId === module.id 
                    ? 'bg-accent text-slate-900 scale-110 shadow-lg shadow-accent/20' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                  }`}>
                    {module.id}
                  </span>
                  <h3 className={`font-black text-2xl tracking-tight transition-all duration-300 group-hover:scale-[1.02] ${
                    openId === module.id 
                    ? 'text-accent' 
                    : 'text-slate-800 dark:text-slate-100 group-hover:text-accent'
                  }`}>
                    {module.title}
                  </h3>
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  openId === module.id ? 'bg-accent/10 text-accent rotate-180' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-accent/5 group-hover:text-accent'
                }`}>
                  <ChevronDown size={24} strokeWidth={3} />
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openId === module.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-8 pb-10 pt-2 md:ml-20">
                  <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg font-medium leading-relaxed max-w-3xl">
                    {module.description}
                  </p>
                  
                  {module.status === "শীঘ্রই আসছে" ? (
                    <div className="flex items-center gap-3 p-6 rounded-[2rem] bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-500 font-black text-lg border border-amber-100 dark:border-amber-900/30">
                      <Lock size={22} strokeWidth={3} />
                      {module.status}
                    </div>
                  ) : (
                    <div className="space-y-10">
                      {module.videos?.map((video, vIdx) => (
                        <div key={vIdx} className="space-y-4">
                          <h4 className="font-black text-slate-900 dark:text-white text-xl flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-accent"></div>
                             {video.title}
                          </h4>
                          {video.videoId ? (
                            <div className="max-w-4xl">
                                <LazyVideo videoId={video.videoId} title={video.title} />
                            </div>
                          ) : (
                             <a 
                               href={video.url} 
                               target="_blank" 
                               rel="noopener" 
                               className="inline-flex items-center gap-2 text-accent font-black hover:underline text-lg transition-all hover:gap-3"
                             >
                               ভিডিওটি দেখুন <ChevronDown size={20} className="-rotate-90" />
                             </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
