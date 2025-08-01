import { useState, useEffect } from 'react';

/**
 * Hook customizado para gerenciar estados de modais
 * Implementa o princípio da Responsabilidade Única (SRP)
 * Centraliza a lógica de controle de modais
 */
export const useModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const isModalOpen = (modalId: string) => {
    return activeModal === modalId;
  };

  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  // Fecha modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return {
    activeModal,
    activeSynopsis: activeModal, // Alias para compatibilidade
    openModal,
    openSynopsis: openModal, // Alias para compatibilidade
    closeModal,
    closeSynopsis: closeModal, // Alias para compatibilidade
    isModalOpen
  };
};