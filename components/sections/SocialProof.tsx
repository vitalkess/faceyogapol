import React, { useState } from 'react';
import { Section, Button } from '../ui/Shared';
import { Star, Play } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const reviews = [
      { 
          type: 'youtube',
          id: 'gT483c86oM8', 
          name: "Karolina", 
          thumb: "https://img.youtube.com/vi/gT483c86oM8/maxresdefault.jpg"
      },
      { 
          type: 'youtube',
          id: '0Wc_SeN-MGI', 
          name: "Katarzyna", 
          thumb: "https://img.youtube.com/vi/0Wc_SeN-MGI/maxresdefault.jpg" 
      },
      { 
          type: 'youtube',
          id: 'nXvqKIv8tsI', 
          name: "Agnieszka", 
          thumb: "https://img.youtube.com/vi/nXvqKIv8tsI/maxresdefault.jpg" 
      }
  ];

  const participantResults = [
      "https://i.postimg.cc/764pm6sK/img1.webp",
      "https://i.postimg.cc/52MTxj1m/img2.webp",
      "https://i.postimg.cc/PqX7wcCG/img3.webp",
      "https://i.postimg.cc/HxKvFkBr/img4.webp"
  ];

  return (
    <>
      {/* --- BLOCK 9: BEFORE / AFTER --- */}
      <Section bg="light">
        <h2 className="text-3xl font-bold text-center mb-10">Wyniki uczestniczek</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
            {participantResults.map((imgSrc, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative rounded-xl overflow-hidden shadow-inner">
                        <img 
                            src={imgSrc} 
                            alt={`Wynik uczestniczki ${index + 1}`} 
                            className="w-full h-auto object-cover" 
                        />
                    </div>
                    <p className="text-center text-sm font-medium mt-3 text-gray-600">
                        Rezultat po przejściu kursu
                    </p>
                </div>
            ))}
        </div>
        
        <div className="text-center">
            <Button>Chcę tak samo</Button>
        </div>
      </Section>

      {/* --- BLOCK 10: VIDEO REVIEWS --- */}
      <Section bg="white">
        <h2 className="text-3xl font-bold text-center mb-12">Żywe wideo-opinie</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {reviews.map((review, i) => (
                <div 
                    key={i} 
                    className="relative group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => {
                        if (review.type === 'youtube') {
                            setPlayingIndex(i);
                        }
                    }}
                >
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg relative bg-gray-900 border border-gray-100">
                        
                        {playingIndex === i && review.type === 'youtube' ? (
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src={`https://www.youtube.com/embed/${review.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`} 
                                title={review.name} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        ) : (
                            <>
                                {/* Thumbnail */}
                                <img 
                                    src={review.thumb} 
                                    alt={review.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                                />
                                
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-xl">
                                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                                    </div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <p className="text-white font-bold text-lg leading-tight mb-1">{review.name}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* --- BLOCK 11: AUTHOR --- */}
      <Section bg="white" className="border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary-200 rounded-full transform translate-x-3 translate-y-3"></div>
                    <img src="https://i.postimg.cc/zXPY8qvC/image3333333.png" alt="Author" className="rounded-full w-full relative z-10 shadow-xl border-4 border-white" />
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Kim jestem?</h2>
                <h3 className="text-primary-600 font-semibold text-xl mb-4">Cześć! Jestem Marta – certyfikowany trener Face Yogi.</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Od ponad 5 lat pracuję z fizjologią twarzy. Moje podejście opiera się na bezpieczeństwie, naturalności i realnych efektach.
                </p>
                <div className="flex gap-8">
                    <div>
                        <span className="block text-3xl font-bold text-primary-500">5+</span>
                        <span className="text-sm text-gray-500">Lat doświadczenia</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-primary-500">3000+</span>
                        <span className="text-sm text-gray-500">Kobiet skorzystało</span>
                    </div>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default SocialProof;