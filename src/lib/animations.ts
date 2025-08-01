/**
 * Utilitários para animações
 * Implementa o princípio DRY
 * Centraliza configurações de animação reutilizáveis
 */

import { ANIMATION_CONFIG } from '../constants/config';

// Variantes de animação para Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

// Configurações de transição reutilizáveis
export const smoothTransition = {
  duration: ANIMATION_CONFIG.duration.normal,
  ease: ANIMATION_CONFIG.easing.smooth
};

export const bounceTransition = {
  duration: ANIMATION_CONFIG.duration.slow,
  ease: ANIMATION_CONFIG.easing.bounce
};

export const fastTransition = {
  duration: ANIMATION_CONFIG.duration.fast,
  ease: ANIMATION_CONFIG.easing.ease
};

// Função para criar animação com delay
export const createStaggeredAnimation = (index: number, baseAnimation: any) => ({
  ...baseAnimation,
  transition: {
    ...smoothTransition,
    delay: index * ANIMATION_CONFIG.delays.stagger
  }
});

// Função para criar animação de container com stagger
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: ANIMATION_CONFIG.delays.stagger
    }
  }
};