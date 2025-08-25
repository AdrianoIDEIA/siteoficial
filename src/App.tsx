import React, { useState } from 'react';
import { useModal, useMobileMenu } from './hooks';
import { MODAL_DATA, CIRCLE_DATA } from './constants';
import { SynopsisModal, CircleButton } from './components/ui';
import { StandardHeader } from './components/StandardHeader';
import Portalterapias from './pages/Portalterapias';
import FonoaudiologiaPage from './pages/FonoaudiologiaPage';
import PsicologiaPage from './pages/PsicologiaPage';
import PsicopedagogiaPage from './pages/PsicopedagogiaPage';
import TerapiaOcupacionalPage from './pages/TerapiaOcupacionalPage';
import IDEIA from './pages/IDEIA';
import ClinicaEIBM from './pages/ClinicaEIBM';
import GattonPage from './pages/Gatton';
import ContatosPage from './pages/Contatos';
import './styles/App.css';
import './styles/animations.css';

function App() {
  const { activeSynopsis, openSynopsis, closeSynopsis } = useModal();
  const { isMobileMenuOpen, toggleMobileMenu, closeMenu } = useMobileMenu();
  const [currentPage, setCurrentPage] = useState('home');





  // Navegação
  const navigateToPage = (page: string) => {
    // Fecha qualquer modal aberto primeiro
    closeSynopsis();
    // Navega para a página solicitada
    setCurrentPage(page);
    // Garante que a nova página apareça do topo
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {
      /* no-op */
    }
  };

  // Expor navegação globalmente para componentes desacoplados (ex.: rodapé)
  // Uso: (window as any).navigateToPage('contatos')
  (window as any).navigateToPage = navigateToPage;

  const navigateHome = () => {
    setCurrentPage('home');
  };

  const handleCardClick = (cardType: string) => {
    console.log(`Card clicked: ${cardType}`);
    // Aqui você pode adicionar a lógica para cada card clicado
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Converter MODAL_DATA object para array
  const modalArray = Object.values(MODAL_DATA);

  // Renderização condicional das páginas
  if (currentPage === 'terapias') {
    return <Portalterapias onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'fonoaudiologia') {
    return <FonoaudiologiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'psicologia') {
    return <PsicologiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'psicopedagogia') {
    return <PsicopedagogiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'terapia-ocupacional') {
    return <TerapiaOcupacionalPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'ideia') {
    return <IDEIA onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'clinica') {
    return <ClinicaEIBM onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'gatton') {
    return <GattonPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  if (currentPage === 'contatos') {
    return <ContatosPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div 
        id="main-background-logo"
      />

      <StandardHeader 
        onNavigateHome={navigateHome}
        onNavigateToPage={navigateToPage}
        currentPage={currentPage}
        showLogo={false}
        align="center"
      />

      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center flex-1 relative">
        <div 
          id="prisma-container" 
          className={activeSynopsis ? 'animation-paused' : ''}
        >
          {/* Círculos Orbitantes */}
          {CIRCLE_DATA.map((circle) => (
            <CircleButton
              key={circle.id}
              circle={circle}
              activeSynopsis={activeSynopsis}
              onOpenSynopsis={openSynopsis}
            />
          ))}
        </div>
      </main>
      
      {/* Modais */}
      {modalArray.map((modal) => (
        <SynopsisModal
          key={modal.id}
          modal={modal}
          activeSynopsis={activeSynopsis}
          mousePosition={{ x: 0, y: 0 }}
          onCloseSynopsis={closeSynopsis}
          onCardClick={handleCardClick}
          onModalClick={handleModalClick}
          onNavigateToPage={navigateToPage}
        />
      ))}



      
    </div>
  );
}

export default App;