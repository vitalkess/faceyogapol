import React from 'react';
import { Section, Button } from '../ui/Shared';
import { PAIN_POINTS } from '../../constants';
import { XCircle, AlertTriangle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <>
      {/* --- BLOCK 2: PAIN POINTS --- */}
      <Section bg="white" className="border-t border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Czy to o <span className="text-primary-600 underline decoration-wavy decoration-primary-300">Tobie</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
                <ul className="space-y-4">
                    {PAIN_POINTS.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-4 bg-primary-50 p-4 rounded-xl border border-primary-100 shadow-sm">
                            <div className="min-w-[24px] h-6 flex items-center justify-center bg-white rounded-full text-primary-500 font-bold text-sm border border-primary-200">
                                ?
                            </div>
                            <span className="text-gray-700 font-medium">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="order-1 md:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform">
                     {/* Removed grayscale and dark gradient overlay */}
                     <img src="https://i.postimg.cc/5N35tPVq/imvvvvvvvage.png" alt="Problem zones" className="w-full h-auto" />
                     
                     {/* Text styled as a floating white box instead of white text on dark overlay */}
                     <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-primary-100">
                        <p className="text-primary-900 font-bold text-lg text-center">Czujesz, że twoja twarz wygląda na zmęczoną?</p>
                     </div>
                </div>
            </div>
        </div>
        <div className="mt-10 text-center">
            <Button variant="outline">Tak, to o mnie</Button>
        </div>
      </Section>

      {/* --- BLOCK 3: WHY IT HAPPENS --- */}
      <Section bg="gray">
        <h2 className="text-3xl font-bold text-center mb-8">Dlaczego tak się dzieje?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Zmarszczki to nie tylko kwestia wieku skóry. To efekt głębszych procesów w mięśniach i tkankach:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
                { title: "Napięcia mięśni", desc: "Przewlekłe napięcia mięśni twarzy" },
                { title: "Hipertonia", desc: "Hipertonia, która „zgniata” skórę" },
                { title: "Zastój limfy", desc: "Nadmiar płynu rozciągający tkanki, tworząc worki" },
                { title: "Postawa", desc: "Napięcie szyi i nieprawidłowa postawa wpływające na krążenie" }
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-400">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>

        <div className="bg-primary-100 p-6 rounded-2xl text-center max-w-2xl mx-auto">
            <p className="text-primary-800 font-semibold text-lg">
                Dlatego nie „smarujemy problemu kremem”, tylko pracujemy z przyczyną.
            </p>
        </div>
      </Section>

      {/* --- BLOCK 4: WHY TRADITIONAL CARE FAILS --- */}
      <Section bg="white">
        <h2 className="text-3xl font-bold text-center mb-10">Dlaczego sama pielęgnacja nie wystarcza?</h2>
        
        <div className="space-y-4 max-w-2xl mx-auto">
            {[
                { title: "Płatki i kremy działają tylko chwilowo", text: "Nawilżają górną warstwę skóry, ale nie usuwają przyczyny problemu głębiej." },
                { title: "Kremy nie unoszą mięśni", text: "Żaden kosmetyk nie przywróci prawidłowego napięcia mięśni." },
                { title: "Medycyna estetyczna to ryzyko", text: "Często wysokie koszty, ryzyko powikłań i możliwe obrzęki." }
            ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default Problem;