import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ModalData } from '../../constants/modalData';
import { 
  ModalHeader, 
  MouseFollower 
} from './AppComponents';

interface SynopsisModalProps {
  modal: ModalData;
  activeSynopsis: string | null;
  mousePosition: { x: number; y: number };
  onCloseSynopsis: () => void;
  onCardClick: (cardType: string) => void;
  onModalClick: (e: React.MouseEvent) => void;
  onNavigateToPage?: (page: string) => void;
  disableNavigation?: boolean;
}

export const SynopsisModal: React.FC<SynopsisModalProps> = ({
  modal,
  activeSynopsis,
  mousePosition,
  onCloseSynopsis,
  onCardClick,
  onModalClick,
  onNavigateToPage,
  disableNavigation = false
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isActive = activeSynopsis === modal.id;
  const ButtonIcon = modal.buttonIcon;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCloseSynopsis();
    }
  };

  return (
    <>
      {/* Overlay para fechar modal ao clicar fora */}
      {isActive && (
        <div 
          className="modal-overlay active"
          onClick={handleOverlayClick}
          style={{ zIndex: 999 }}
        >
          <div 
            ref={isActive ? modalRef : null}
            id={`synopsis-${modal.id}`} 
            className={`circle-synopsis ${isActive ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation(); // Impede que o clique no modal feche o overlay
              onModalClick(e);
            }}
            style={{
              '--header-color-1': modal.colorScheme.primary,
              '--header-color-2': modal.colorScheme.secondary,
              '--card-accent-color': modal.colorScheme.accent
            } as React.CSSProperties}
            data-modal-id={modal.id}
          >
            {/* Mouse Follower Effect */}
            {isActive && <MouseFollower mousePosition={mousePosition} />}

            <ModalHeader 
              title={modal.title}
              subtitle={modal.subtitle}
            />
            
            <div className="synopsis-content">
              <p className="synopsis-text">{modal.description}</p>
              
              <div className="text-center mt-6">
                <a 
                  href="#" 
                  className="synopsis-button morphing-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Impede que o clique no botão feche o modal
                    if (disableNavigation) {
                      onCloseSynopsis();
                      return;
                    }
                    // Fecha o modal antes de navegar para evitar sobreposição visual
                    onCloseSynopsis();
                    if (onNavigateToPage) {
                      if (modal.id === 'terapias') {
                        onNavigateToPage('terapias');
                      } else if (modal.id === 'especialidades') {
                        onNavigateToPage('clinica');
                      } else {
                        // fallback para links existentes
                        window.location.href = modal.buttonLink;
                      }
                    } else {
                      window.location.href = modal.buttonLink;
                    }
                  }}
                >
                  <ButtonIcon className="w-4 h-4 mr-2" />
                  {modal.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};