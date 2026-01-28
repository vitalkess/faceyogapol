import React, { useState, useEffect } from 'react';
import { Button } from './ui/Shared';
import { PRICE } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Calculate tomorrow's date
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);
  const formattedDate = startDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
            <p className="font-bold text-gray-800 text-sm">
                Maraton «Młodzieńcze Spojrzenie» <span className="text-primary-600 ml-2">Start: {formattedDate}</span>
            </p>
            <p className="text-primary-600 font-bold">{PRICE.current} {PRICE.currency} <span className="text-gray-400 text-xs line-through">{PRICE.original}</span></p>
        </div>
        <div className="sm:hidden">
            <span className="font-bold text-primary-600 text-lg">{PRICE.current} {PRICE.currency}</span>
        </div>
        <Button size="sm" pulse className="flex-1 sm:flex-none">Weź udział</Button>
      </div>
    </div>
  );
};

export default StickyCTA;