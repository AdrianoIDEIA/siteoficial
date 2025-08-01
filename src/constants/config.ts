/**
 * Constantes de configuração da aplicação
 * Implementa o princípio DRY (Don't Repeat Yourself)
 * Centraliza todas as configurações em um local
 */

// Configurações de animação
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  easing: {
    smooth: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    ease: 'ease-in-out',
  },
  delays: {
    stagger: 0.1,
    section: 0.2,
  }
} as const;

// Configurações de cores por seção
export const SECTION_COLORS = {
  terapias: {
    primary: '#195184',
    secondary: '#2563eb',
    gradient: 'linear-gradient(135deg, #195184 0%, #2563eb 100%)',
  },
  transtornos: {
    primary: '#ED3924',
    secondary: '#ef4444',
    gradient: 'linear-gradient(135deg, #ED3924 0%, #ef4444 100%)',
  },
  ideia: {
    primary: '#EFCD18',
    secondary: '#f59e0b',
    gradient: 'linear-gradient(135deg, #EFCD18 0%, #f59e0b 100%)',
  },
  especialidades: {
    primary: '#6CBB45',
    secondary: '#22c55e',
    gradient: 'linear-gradient(135deg, #6CBB45 0%, #22c55e 100%)',
  },
} as const;

// Configurações de breakpoints responsivos
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

// Configurações de z-index
export const Z_INDEX = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
  overlay: 80,
  modal_content: 100,
} as const;

// Configurações de espaçamento
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;