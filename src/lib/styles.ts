/**
 * Utilitários para estilos CSS
 * Implementa o princípio DRY
 * Centraliza classes CSS reutilizáveis
 */

import { SECTION_COLORS, Z_INDEX } from '../constants/config';

// Classes base reutilizáveis
export const baseClasses = {
  // Botões
  button: {
    base: "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
    outline: "border border-current bg-transparent hover:bg-current hover:bg-opacity-10"
  },
  
  // Cards
  card: {
    base: "bg-white rounded-lg border border-gray-200 shadow-sm",
    elevated: "bg-white rounded-lg shadow-lg border border-gray-100",
    interactive: "bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
  },
  
  // Modais
  modal: {
    overlay: `fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4`,
    content: "bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative",
    closeButton: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
  },
  
  // Layout
  layout: {
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    section: "py-16 lg:py-24",
    grid: "grid gap-6 md:gap-8",
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex items-center justify-between"
  },
  
  // Texto
  text: {
    heading1: "text-4xl lg:text-5xl font-bold",
    heading2: "text-3xl lg:text-4xl font-bold",
    heading3: "text-2xl lg:text-3xl font-bold",
    body: "text-base lg:text-lg",
    small: "text-sm",
    muted: "text-gray-600"
  }
};

// Função para gerar classes de cor por seção
export const getSectionClasses = (section: keyof typeof SECTION_COLORS) => {
  const colors = SECTION_COLORS[section];
  return {
    background: `bg-gradient-to-br from-[${colors.primary}] to-[${colors.secondary}]`,
    text: `text-[${colors.primary}]`,
    border: `border-[${colors.primary}]`,
    button: `bg-[${colors.primary}] hover:bg-[${colors.secondary}] text-white`,
    gradient: colors.gradient
  };
};

// Função para combinar classes CSS
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Classes de z-index
export const zIndexClasses = {
  dropdown: `z-[${Z_INDEX.dropdown}]`,
  sticky: `z-[${Z_INDEX.sticky}]`,
  fixed: `z-[${Z_INDEX.fixed}]`,
  modal: `z-[${Z_INDEX.modal}]`,
  overlay: `z-[${Z_INDEX.overlay}]`,
  modalContent: `z-[${Z_INDEX.modal_content}]`
};