import React from 'react';
import { Section, Button, Countdown, PriceDisplay, CheckItem } from '../ui/Shared';
import { BONUSES } from '../../constants';
import { Gift, ShieldCheck } from 'lucide-react';

const Offer: React.FC = () => {
  // Calculate tomorrow's date
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);
  const formattedDate = startDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });

  return (
    <>
      {/* --- BLOCK 12: WHAT'S INCLUDED --- */}
      <Section bg="light">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-3xl mx-auto border border-primary-100">
            <div className="bg-primary-500 p-6 text-center text-white">
                <h2 className="text-2xl font-bold">Co zawiera pakiet?</h2>
            </div>
            <div className="p-8">
                <ul className="space-y-4 mb-8">
                    <CheckItem bold>6 lekcji wideo krok po kroku</CheckItem>
                    <CheckItem bold>Dostęp do materiałów przez 60 dni</CheckItem>
                    <CheckItem bold>Zamknięty chat dla uczestniczek</CheckItem>
                    <CheckItem bold>Stałe wsparcie prowadzącej</CheckItem>
                </ul>

                {/* --- BLOCK 13: BONUSES --- */}
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Gift className="text-yellow-600 w-6 h-6" />
                        <h3 className="font-bold text-lg text-yellow-800">Bonusy dla Ciebie:</h3>
                    </div>
                    <ul className="space-y-2">
                        {BONUSES.map((bonus, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-yellow-500 font-bold">+</span> {bonus}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- BLOCK 14: PRICE & CTA --- */}
                <div id="pricing" className="text-center border-t border-gray-100 pt-8">
                     <p className="text-sm text-red-500 font-bold mb-2 animate-pulse">🔥 Zostały 4 miejsca w cenie promocyjnej</p>
                     <Countdown condensed />
                     <div className="my-6">
                        <PriceDisplay size="lg" />
                     </div>
                     <Button fullWidth size="lg" pulse>KUP KURS</Button>
                     <p className="text-xs text-gray-400 mt-4">Bezpieczna płatność kartą dowolnego banku</p>
                </div>
            </div>
        </div>
      </Section>

      {/* --- BLOCK 15: GUARANTEE --- */}
      <Section bg="white" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-dashed border-primary-200 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
                
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-100/50 rounded-tr-full -ml-16 -mb-16 z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-lg mb-6 border border-primary-100">
                        <ShieldCheck className="w-16 h-16 text-green-500" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        100% Gwarancja satysfakcji
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
                        Jeśli w ciągu <span className="font-bold text-gray-900 bg-yellow-100 px-1 rounded">2 dni</span> uznasz, że to nie dla Ciebie – zwrócę Ci pełną kwotę.
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-primary-100 shadow-sm text-primary-800 font-bold text-sm uppercase tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Bez pytań. Bez formalności.
                    </div>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Offer;