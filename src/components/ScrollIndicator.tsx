import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#jornada-transformadora');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <motion.button
        onClick={scrollToNext}
        className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium mb-2 group-hover:text-orange-200 transition-colors">
          Descubra mais
        </span>
        <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-orange-200 transition-colors">
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.button>
    </motion.div>
  );
};