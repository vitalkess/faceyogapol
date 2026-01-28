import React, { useState } from 'react';
import { Section, Button, Countdown, PriceDisplay } from '../ui/Shared';
import { FAQS } from '../../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* --- BLOCK 16: FAQ --- */}
            <Section bg="white">
                <h2 className="text-3xl font-bold text-center mb-10">Częste pytania</h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 text-left focus:outline-none"
                            >
                                <span className="font-bold text-gray-800">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                            </button>
                            <div 
                                className={`bg-white px-5 text-gray-600 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 py-5' : 'max-h-0 py-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- BLOCK 17: FINAL CTA --- */}
            <Section bg="light" className="text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowa odzyskać młodsze spojrzenie?</h2>
                    <p className="text-xl mb-6">Odbierz plan krok po kroku za jedyne:</p>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                         <PriceDisplay />
                         <div className="mt-4">
                            <Countdown condensed />
                         </div>
                    </div>

                    <Button size="lg" fullWidth pulse>DOŁĄCZ DO MARATONU</Button>
                </div>
            </Section>

            {/* --- REAL FOOTER --- */}
            <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="mb-4">FOP Ivanenko A.A. NIP 1234567890</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href="#" className="underline hover:text-white">Oferta publiczna</a>
                        <a href="#" className="underline hover:text-white">Polityka prywatności</a>
                    </div>
                    <p className="mt-8 opacity-50">© 2024 Face Yoga Marathon. Wszelkie prawa zastrzeżone.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;