import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRICE } from '../../constants';
import { useModal } from '../context/ModalContext';

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  size = 'md',
  className = '',
  ...props 
}) => {
  const { openModal } = useModal();

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl focus:ring-primary-500",
    secondary: "bg-white text-primary-600 hover:bg-gray-50 border border-transparent shadow-md focus:ring-gray-200",
    outline: "bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg md:text-xl",
  };

  const pulseAnimation = pulse ? "animate-pulse" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${pulseAnimation} ${widthClass} ${className}`}
      onClick={(e) => {
        if (props.onClick) {
            props.onClick(e);
        } else {
            // Default behavior: Open Payment Modal
            openModal();
        }
      }}
      {...props}
    >
      {children}
      {variant === 'primary' && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

// --- SECTION WRAPPER ---
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'light';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    light: "bg-primary-50",
  };

  return (
    <section id={id} className={`py-12 md:py-20 ${backgrounds[bg]} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {children}
      </div>
    </section>
  );
};

// --- COUNTDOWN TIMER ---
export const Countdown: React.FC<{ condensed?: boolean }> = ({ condensed = false }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Simple mock timer decrement
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 0, seconds: 0 }; // Reset
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  if (condensed) {
    return (
      <div className="flex items-center space-x-2 text-primary-700 font-bold font-mono">
        <Timer className="w-4 h-4" />
        <span>{format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center text-center my-4">
      {['Godzin', 'Minut', 'Sekund'].map((label, idx) => {
        const value = idx === 0 ? timeLeft.hours : idx === 1 ? timeLeft.minutes : timeLeft.seconds;
        return (
          <div key={label} className="bg-white rounded-lg shadow-sm p-3 w-20 border border-primary-100">
            <div className="text-2xl font-bold text-primary-600 font-mono leading-none">
              {format(value)}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

// --- PRICE DISPLAY ---
export const PriceDisplay: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'lg' }) => {
  const isLarge = size === 'lg';
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline gap-3">
        <span className={`text-gray-400 line-through decoration-red-500 decoration-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {PRICE.original} {PRICE.currency}
        </span>
        <span className={`font-bold text-primary-600 ${isLarge ? 'text-5xl' : 'text-3xl'}`}>
          {PRICE.current} {PRICE.currency}
        </span>
      </div>
      {isLarge && (
        <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded mt-2 font-medium">
          Zniżka -70% tylko teraz
        </span>
      )}
    </div>
  );
};

// --- BULLET LIST ITEM ---
export const CheckItem: React.FC<{ children: React.ReactNode; bold?: boolean }> = ({ children, bold = false }) => (
  <li className="flex items-start gap-3 mb-3 text-lg">
    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
    <span className={bold ? "font-bold text-gray-800" : "text-gray-700"}>{children}</span>
  </li>
);