import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { baseClasses, zIndexClasses } from '../../lib/styles';
import { fadeInScale, smoothTransition } from '../../lib/animations';

/**
 * Componente Modal reutilizável
 * Implementa o princípio da Responsabilidade Única (SRP)
 * Responsável apenas por exibir conteúdo em modal
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl'
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  size = 'lg',
  showCloseButton = true
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`${baseClasses.modal.overlay} ${zIndexClasses.modal}`}
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={fadeInScale}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={smoothTransition}
        className={`${baseClasses.modal.content} ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button 
            onClick={onClose}
            className={baseClasses.modal.closeButton}
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>
        )}
        {children}
      </motion.div>
    </div>
  );
};