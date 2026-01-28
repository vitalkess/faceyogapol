import React from 'react';
import { Section, Button, CheckItem } from '../ui/Shared';
import { Sparkles, Calendar, MessageCircle, PlayCircle } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <>
      {/* --- BLOCK 5: METHOD --- */}
      <Section bg="light" className="text-center">
        <h2 className="text-3xl font-bold mb-8">Na czym polega metoda?</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            To systemowe, naturalne podejście, które łączy:
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
                { label: "Face Yoga", icon: "🧘‍♀️" },
                { label: "Masaż Anti-age", icon: "💆‍♀️" },
                { label: "Drenaż limfatyczny", icon: "💧" },
                { label: "Taping", icon: "🩹" },
            ].map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{m.icon}</div>
                    <div className="font-bold text-gray-800">{m.label}</div>
                </div>
            ))}
        </div>
      </Section>

      {/* --- BLOCK 6: RESULTS --- */}
      <Section bg="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6">Co zyskasz po 6 dniach?</h2>
                <ul className="space-y-3">
                    <CheckItem>Jaśniejsze, bardziej otwarte spojrzenie</CheckItem>
                    <CheckItem>Wyraźnie wygładzoną lwią zmarszczkę</CheckItem>
                    <CheckItem>Rozluźnione czoło i mniejsze napięcie</CheckItem>
                    <CheckItem>Mniejsze poranne obrzęki</CheckItem>
                    <CheckItem>Twarz, która wygląda młodziej, świeżo i lekko</CheckItem>
                </ul>
                <div className="mt-8">
                    <Button>Chcę takie efekty</Button>
                </div>
             </div>
             <div className="relative">
                <div className="aspect-[3/4] rounded-3xl bg-gray-200 overflow-hidden shadow-2xl">
                    <img src="https://i.postimg.cc/DfskRGKM/imkvavavaage.png" alt="Happy woman" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                        <span className="text-primary-600 font-bold flex items-center gap-2">
                            <Sparkles className="w-4 h-4" /> Efekt blasku
                        </span>
                    </div>
                </div>
             </div>
        </div>
      </Section>

      {/* --- BLOCK 7: HOW IT WORKS --- */}
      <Section bg="gray">
        <h2 className="text-3xl font-bold text-center mb-12">Jak wygląda maraton?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-9xl text-gray-50 font-bold z-0">1</div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 relative z-10">
                    <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 relative z-10">Płatność i dostęp</h3>
                <p className="text-gray-600 relative z-10">Po zakupie natychmiast otrzymujesz dostęp do panelu.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-9xl text-gray-50 font-bold z-0">2</div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 relative z-10">
                    <PlayCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 relative z-10">10–15 minut dziennie</h3>
                <p className="text-gray-600 relative z-10">Włączasz wideo w dogodnym czasie i ćwiczysz razem ze mną.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-9xl text-gray-50 font-bold z-0">3</div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 relative z-10">
                    <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 relative z-10">Wsparcie</h3>
                <p className="text-gray-600 relative z-10">Masz pytania? Piszesz na chacie i otrzymujesz wsparcie prowadzącej.</p>
            </div>
        </div>
        
        <div className="mt-10 text-center">
             <Button variant="secondary">Dołącz teraz</Button>
        </div>
      </Section>
    </>
  );
};

export default Solution;