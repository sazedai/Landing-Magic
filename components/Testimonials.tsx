
import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight">ছাত্রদের <span className="text-accent">সফলতা</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            আমাদের কোর্সের মাধ্যমে ইতিমধ্যে অনেক উদ্যোক্তা তাদের ব্যবসার ডিজিটাল পরিবর্তন এনেছেন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 relative group transition-all hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-3"
            >
              <div className="absolute top-10 right-10 text-accent/5 group-hover:text-accent/10 transition-colors">
                <Quote size={80} fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-1.5 text-accent mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-bold text-lg italic">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-5">
                <div className="relative">
                    <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent/20 p-1 group-hover:border-accent transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-lg border-2 border-white dark:border-slate-900 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-slate-900" />
                    </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg">{item.name}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.role}</p>
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
