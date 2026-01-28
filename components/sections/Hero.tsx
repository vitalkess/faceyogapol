import React from 'react';
import { Button, Countdown, PriceDisplay, CheckItem } from '../ui/Shared';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Calculate tomorrow's date
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);
  const formattedDate = startDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });

  return (
    <header className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-50">
         <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Tagline */}
        <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wide mb-6 uppercase">
          6-dniowy Maraton Odmładzającego Masażu Twarzy
        </span>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Odzyskaj <br/>
          <span className="gradient-text">«Młodzieńcze Spojrzenie»</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Lwia zmarszczka • Opadająca powieka • Worki pod oczami • Zmarszczki na czole
          <br />
          <span className="font-semibold text-primary-600">Tylko 10–15 minut dziennie • Start: {formattedDate}</span>
        </p>

        {/* Hero Image Container */}
        <div className="max-w-md mx-auto mb-10">
             <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 mb-4">
                <img 
                    src="https://i.postimg.cc/90X5H82B/imvvaaaage.png" 
                    alt="Face Yoga Result" 
                    className="w-full h-auto object-cover"
                />
             </div>
             {/* Text moved below image */}
             <div className="inline-block bg-white px-6 py-2 rounded-full shadow-md border border-primary-100">
                <p className="font-bold text-gray-800 text-sm md:text-base">✨ Efekty zobaczysz już po 6 dniach</p>
             </div>
        </div>

        {/* Bullets */}
        <ul className="text-left max-w-lg mx-auto mb-10 space-y-2">
            <CheckItem bold>Widocznie wygładzisz lwią zmarszczkę</CheckItem>
            <CheckItem bold>Spojrzenie stanie się bardziej otwarte i lekkie</CheckItem>
            <CheckItem bold>Zmniejszysz poranne opuchnięcia i obrzęki</CheckItem>
            <CheckItem bold>Poprawisz drenaż limfatyczny – efekt „świeżej twarzy”</CheckItem>
            <CheckItem bold>Nauczysz się tapingu, który utrwali efekty</CheckItem>
        </ul>

        {/* Offer */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl border border-primary-100 max-w-md mx-auto">
            <div className="mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Oferta specjalna</p>
                <Countdown />
            </div>
            
            <PriceDisplay />

            <div className="mt-6">
                <Button fullWidth size="lg" pulse>Weź udział</Button>
                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Dostęp otrzymasz natychmiast na maila
                </p>
            </div>
        </div>

        <div className="mt-12 animate-bounce">
             <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Hero;