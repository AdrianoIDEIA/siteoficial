import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface ParallaxLampProps {
  speed?: number;
  className?: string;
}

export const ParallaxLamp = ({ speed = 0.5, className = '' }: ParallaxLampProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <motion.div
      className={`${className}`}
      style={{ transform: `translateY(${offsetY}px)` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 1, delay: Math.random() * 2 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-3 shadow-lg">
          <Lightbulb className="w-full h-full text-white" />
        </div>
      </div>
    </motion.div>
  );
};