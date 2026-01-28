import React from 'react';

const ThankYouPreview: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-primary-50 text-gray-800 antialiased min-h-screen flex flex-col relative overflow-hidden font-sans">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50 pointer-events-none">
             <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200 rounded-full blur-[100px] animate-pulse-slow"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <main className="flex-grow flex items-center justify-center p-4 z-10">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center animate-fade-in-up border border-primary-100 relative">
                
                {/* Confetti/Sparkle decoration */}
                <div className="absolute -top-6 -right-6 text-yellow-400 animate-bounce delay-100 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>

                {/* Icon: CheckCircle2 */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" stroke="none"/>
                        <path d="m9 12 2 2 4-4"/>
                    </svg>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Witamy w zespole!
                </h1>
                <p className="text-primary-600 font-medium mb-6">Twoje zgłoszenie zostało pomyślnie przyjęte</p>
                
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Zrobiłaś wspaniały krok w stronę piękna i zdrowia! Wkrótce prześlemy Ci szczegóły dostępu.
                </p>
        
                <button onClick={onBack} className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Powrót na stronę
                </button>
            </div>
        </main>

        <footer className="py-6 text-center text-gray-400 text-xs z-10">
            &copy; 2024 Face Yoga Marathon. Wszelkie prawa zastrzeżone.
        </footer>
    </div>
  );
}

export default ThankYouPreview;