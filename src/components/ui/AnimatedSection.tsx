import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, smoothTransition, createStaggeredAnimation } from '../../lib/animations';

/**
 * Componente AnimatedSection reutilizável
 * Implementa o princípio da Responsabilidade Única (SRP)
 * Responsável apenas por animar seções quando entram na viewport
 */

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInScale' | 'slideInFromLeft' | 'slideInFromRight';
  threshold?: number;
  once?: boolean;
}

const animations = {
  fadeInUp,
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  slideInFromRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  }
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
  threshold = 0.1,
  once = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  const selectedAnimation = animations[animation];
  const animationWithDelay = delay > 0 
    ? createStaggeredAnimation(delay, selectedAnimation)
    : { ...selectedAnimation, transition: smoothTransition };

  return (
    <motion.div
      ref={ref}
      variants={animationWithDelay}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
};