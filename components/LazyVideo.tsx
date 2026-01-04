
import React, { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface LazyVideoProps {
  videoId: string;
  title: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl bg-black relative border-4 border-slate-900/10">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
            <Loader2 size={40} className="text-accent animate-spin" />
          </div>
        )}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          onLoad={() => setIsLoaded(true)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative aspect-video w-full rounded-[2rem] overflow-hidden cursor-pointer group shadow-xl border-4 border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-accent/50"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        }}
      />
      <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center group-hover:bg-slate-900/40 transition-colors">
        <div className="w-20 h-20 bg-accent text-slate-900 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-90">
          <Play size={36} fill="currentColor" strokeWidth={1} />
        </div>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-black text-lg">{title}</p>
      </div>
    </div>
  );
};

export default LazyVideo;
