import React from 'react';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Program from './components/sections/Program';
import SocialProof from './components/sections/SocialProof';
import Offer from './components/sections/Offer';
import Footer from './components/sections/Footer';
import StickyCTA from './components/StickyCTA';
import { ModalProvider } from './components/context/ModalContext';
import { PaymentModal } from './components/ui/PaymentModal';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen pb-12 relative">
        <Hero />
        <Problem />
        <Solution />
        <Program />
        <SocialProof />
        <Offer />
        <Footer />
        <StickyCTA />
        <PaymentModal />
      </div>
    </ModalProvider>
  );
};

export default App;