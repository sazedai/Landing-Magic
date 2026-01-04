
import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight dark:text-white">ছাত্রদের <span className="text-accent italic">সফলতা</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            আমাদের কোর্সের মাধ্যমে ইতিমধ্যে অনেক উদ্যোক্তা তাদের ব্যবসার ডিজিটাল পরিবর্তন এনেছেন এবং সেলস বাড়িয়েছেন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 relative group transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="absolute top-10 right-10 text-accent/5 group-hover:text-accent/15 transition-all duration-500 transform group-hover:scale-110">
                <Quote size={80} fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-1.5 text-accent mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-bold text-lg italic relative z-10">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-5 relative z-10 border-t border-slate-200/50 dark:border-slate-700/50 pt-8">
                <div className="relative">
                    <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent/20 p-1 group-hover:border-accent transition-all duration-500"
                    loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-lg border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-sm">
                        <CheckCircle2 size={12} className="text-slate-900" />
                    </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg transition-colors group-hover:text-accent">{item.name}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest text-[10px]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
