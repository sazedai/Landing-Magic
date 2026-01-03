
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  videoId: string;
  title: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative aspect-video w-full rounded-xl overflow-hidden cursor-pointer group shadow-lg"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play size={32} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default LazyVideo;
