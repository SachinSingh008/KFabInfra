import React, { useState, useEffect } from 'react';
import { PhoneCall, X } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground p-3 shadow-2xl flex items-center justify-between md:hidden">
      <div className="flex items-center gap-3 font-semibold">
        <PhoneCall className="w-5 h-5 animate-pulse" />
        <a href="tel:+919922427381" className="text-lg">Call: +91 9922 427381</a>
      </div>
      <button onClick={() => setIsVisible(false)} className="p-1 opacity-70 hover:opacity-100" aria-label="Close sticky CTA">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default StickyCTA;
