
import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center text-slate-900 shadow-lg shadow-accent/20 overflow-hidden group-hover:rotate-6 transition-transform">
          <span className="font-black text-xl z-10">L</span>
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <Sparkles className="absolute -top-1 -right-1 text-accent animate-pulse" size={16} />
      </div>
      <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
        Landing<span className="text-accent italic">Magic</span>
      </span>
    </div>
  );
};

export default Logo;
