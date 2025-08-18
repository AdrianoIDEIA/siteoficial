import React, { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ModalData } from '../../constants/modalData';
import { 
  ModalHeader, 
  SpecialtyItem, 
  FeatureCard, 
  StatItem, 
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
  const SectionIcon = modal.sectionIcon;
  const ButtonIcon = modal.buttonIcon;

  return (
    <div 
      ref={isActive ? modalRef : null}
      id={`synopsis-${modal.id}`} 
      className={`circle-synopsis ${isActive ? 'active' : ''}`}
      onClick={onModalClick}
      style={{
        '--header-color-1': modal.colorScheme.primary,
        '--header-color-2': modal.colorScheme.secondary,
        '--card-accent-color': modal.colorScheme.accent
      } as React.CSSProperties}
    >
      {/* Mouse Follower Effect */}
      {isActive && <MouseFollower mousePosition={mousePosition} />}

      <ModalHeader 
        title={modal.title}
        subtitle={modal.subtitle}
        onClose={onCloseSynopsis}
      />
      
      <div className="synopsis-content">
        <p className="synopsis-text">{modal.description}</p>
        
        <h4 className="synopsis-section-title">
          <SectionIcon className={`w-5 h-5 ${modal.features[0]?.color || 'text-gray-600'}`} />
          {modal.sectionTitle}
        </h4>
        
        {/* Specialties Grid (only for terapias) */}
        {modal.specialties && (
          <div className="specialties-grid">
            {modal.specialties.map((specialty) => (
              <SpecialtyItem
                key={specialty.id}
                specialty={specialty}
                onClick={onCardClick}
              />
            ))}
          </div>
        )}
        
        {/* Features Grid */}
        <div className="feature-grid">
          {modal.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onClick={onCardClick}
            />
          ))}
        </div>
        
        {/* Stats Container (only for especialidades) */}
        {modal.stats && (
          <>
            <h4 className="synopsis-section-title">
              <CheckCircle className={`w-5 h-5 ${modal.features[0]?.color || 'text-gray-600'}`} />
              Nossos Valores
            </h4>
            <div className="stats-container">
              {modal.stats.map((stat) => (
                <StatItem
                  key={stat.id}
                  stat={stat}
                  onClick={onCardClick}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="text-center">
          <a 
            href="#" 
            className="synopsis-button morphing-button"
            onClick={(e) => {
              e.preventDefault();
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
  );
};