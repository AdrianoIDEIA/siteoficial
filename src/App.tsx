import React, { useState, useEffect } from 'react';
import { useModal, useMobileMenu } from './hooks';
import { MODAL_DATA, CIRCLE_DATA, NAVIGATION_LINKS } from './constants';
import { AppHeader, AppFooter, SynopsisModal, CircleButton, MouseFollower } from './components/ui';
import Portalterapias from './pages/Portalterapias';
import FonoaudiologiaPage from './pages/FonoaudiologiaPage';
import PsicologiaPage from './pages/PsicologiaPage';
import PsicopedagogiaPage from './pages/PsicopedagogiaPage';
import TerapiaOcupacionalPage from './pages/TerapiaOcupacionalPage';
import IDEIA from './pages/IDEIA';
import './styles/App.css';
import './styles/animations.css';

function App() {
  const { activeSynopsis, openSynopsis, closeSynopsis } = useModal();
  const { isMobileMenuOpen, toggleMobileMenu, closeMenu } = useMobileMenu();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);
  const [backgroundParticles, setBackgroundParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);

  // Inicialização e animações de entrada
  useEffect(() => {
    // Simula carregamento inicial
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Gera partículas de fundo
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setBackgroundParticles(particles);

    return () => clearTimeout(loadTimer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animação das partículas de fundo
  useEffect(() => {
    const animateParticles = () => {
      setBackgroundParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: (particle.y + 0.1) % 100,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.2 + 0.3
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Navegação com transições
  const navigateToPage = (page: string) => {
    setPageTransition(true);
    closeSynopsis(); // Fecha qualquer modal aberto
    
    setTimeout(() => {
      setCurrentPage(page);
      setPageTransition(false);
    }, 300);
  };

  const navigateHome = () => {
    setPageTransition(true);
    
    setTimeout(() => {
      setCurrentPage('home');
      setPageTransition(false);
    }, 300);
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

  // Componente de transição para páginas
  const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={`page-transition ${pageTransition ? 'transitioning' : 'loaded'}`}>
      {children}
    </div>
  );

  // Renderização condicional das páginas com transições
  if (currentPage === 'terapias') {
    return (
      <PageTransition>
        <Portalterapias onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />
      </PageTransition>
    );
  }

  if (currentPage === 'fonoaudiologia') {
    return (
      <PageTransition>
        <FonoaudiologiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />
      </PageTransition>
    );
  }

  if (currentPage === 'psicologia') {
    return (
      <PageTransition>
        <PsicologiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />
      </PageTransition>
    );
  }

  if (currentPage === 'psicopedagogia') {
    return (
      <PageTransition>
        <PsicopedagogiaPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />
      </PageTransition>
    );
  }

  if (currentPage === 'terapia-ocupacional') {
    return (
      <PageTransition>
        <TerapiaOcupacionalPage onNavigateHome={navigateHome} onNavigateToPage={navigateToPage} />
      </PageTransition>
    );
  }

  if (currentPage === 'ideia') {
    return (
      <PageTransition>
        <IDEIA onNavigateHome={navigateHome} />
      </PageTransition>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Partículas de fundo animadas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {backgroundParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${3 + particle.id * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-ping-slow"></div>
      </div>

      <div 
        id="main-background-logo"
        className="fixed inset-0 opacity-5 bg-center bg-no-repeat bg-contain z-0"
      />

      <AppHeader 
        mobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
        onMobileMenuClose={closeMenu}
        onMobileMenuClick={(e) => e.stopPropagation()}
        onNavigateToPage={navigateToPage}
      />

      <main className={`container mx-auto px-4 py-16 flex flex-col items-center justify-center flex-1 relative z-10 transition-all duration-700 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'}`}>
        {/* Título principal animado */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 animate-gradient">
            EIBM Terapias
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conectando você aos melhores especialistas em terapias integradas
          </p>
        </div>

        <div 
          id="prisma-container" 
          className={`relative transition-all duration-500 ${activeSynopsis ? 'animation-paused scale-95' : 'scale-100'} ${isLoaded ? 'animate-fade-in-up' : ''}`}
        >
          {/* Círculo central decorativo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 border-2 border-blue-200 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute w-24 h-24 border-2 border-green-200 rounded-full animate-spin-reverse opacity-20"></div>
          </div>

          {/* Círculos Orbitantes */}
          {CIRCLE_DATA.map((circle, index) => (
            <div
              key={circle.id}
              className={`transition-all duration-700 delay-${index * 100} ${isLoaded ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'}`}
            >
              <CircleButton
                circle={circle}
                activeSynopsis={activeSynopsis}
                onOpenSynopsis={openSynopsis}
              />
            </div>
          ))}
        </div>

        {/* Indicador de interação */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <span className="text-sm">Clique nos círculos para explorar</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </main>
      
      {/* Modais */}
      {modalArray.map((modal) => (
        <SynopsisModal
          key={modal.id}
          modal={modal}
          activeSynopsis={activeSynopsis}
          mousePosition={mousePosition}
          onCloseSynopsis={closeSynopsis}
          onCardClick={handleCardClick}
          onModalClick={handleModalClick}
          onNavigateToPage={navigateToPage}
        />
      ))}

      {/* Mouse Follower */}
      {activeSynopsis && (
        <MouseFollower mousePosition={mousePosition} />
      )}

      <AppFooter />
    </div>
  );
}

export default App;