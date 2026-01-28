import React from 'react';
import { Section, Button } from '../ui/Shared';
import { PROGRAM } from '../../constants';

const Program: React.FC = () => {
  return (
    <Section bg="white" id="program">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Program 6-dniowy</h2>
        <p className="text-gray-600">6 dni • Plan krok po kroku • Kompleksowe działanie</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {PROGRAM.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="md:w-32 bg-primary-50 flex items-center justify-center py-4 md:py-0">
                <span className="text-primary-600 font-bold text-xl md:text-2xl">Dzień {item.day}</span>
            </div>
            <div className="p-6 flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                    {item.description}
                </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
         <p className="text-sm text-gray-500 mb-4">Każda lekcja zajmuje 10-15 min. Włącz i powtarzaj.</p>
         <Button>Rozpocznij naukę</Button>
      </div>
    </Section>
  );
};

export default Program;