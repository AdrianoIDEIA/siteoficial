import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Brain, Heart, Users, Stethoscope, Baby, 
  GraduationCap, Palette, Music, Eye, Ear, Hand, 
  Puzzle, Activity, Lightbulb, Target, Award, 
  CheckCircle, ArrowRight, Star, Shield, Zap,
  Sparkles, Wand2, Coffee, BookOpen, Headphones,
  Play, Pause, MousePointer, Globe
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSynopsis, setActiveSynopsis] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const modalRef = useRef(null);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (modalRef.current && activeSynopsis) {
        const rect = modalRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (activeSynopsis) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeSynopsis]);

  useEffect(() => {
    const handleGlobalClose = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      if (activeSynopsis) {
        setActiveSynopsis(null);
      }
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        handleGlobalClose();
      }
    };

    document.body.addEventListener('click', handleGlobalClose);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.removeEventListener('click', handleGlobalClose);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [mobileMenuOpen, activeSynopsis]);

  const openSynopsis = (synopsisId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (activeSynopsis === synopsisId) {
      // Se já está ativo, redireciona
      const links = {
        'terapias': 'terapias.html',
        'transtornos': 'gatta.html', 
        'idea': 'ideia.html',
        'especialidades': 'especialidades.html'
      };
      if (links[synopsisId]) {
        window.location.href = links[synopsisId];
      }
      return;
    }
    
    setActiveSynopsis(synopsisId);
  };

  const closeSynopsis = (e) => {
    e.stopPropagation();
    setActiveSynopsis(null);
  };

  const handleMobileMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleSynopsisClick = (e) => {
    e.stopPropagation();
  };

  const handleCardClick = (cardType) => {
    console.log(`Card clicked: ${cardType}`);
    // Aqui você pode adicionar a lógica para cada card clicado
  };

  useEffect(() => {
    // Add/remove body classes for overlay effects
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }

    if (activeSynopsis) {
      document.body.classList.add('synopsis-active');
    } else {
      document.body.classList.remove('synopsis-active');
    }

    return () => {
      document.body.classList.remove('mobile-menu-active', 'synopsis-active');
    };
  }, [mobileMenuOpen, activeSynopsis]);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
        html { 
          scroll-behavior: smooth; 
        }
        
        header { 
          position: relative; 
          z-index: 40; 
        }
        
        body.synopsis-active::after, 
        body.mobile-menu-active::after {
          content: "";
          position: fixed;
          inset: 0;
          background: rgba(25, 81, 132, 0.3);
          backdrop-filter: blur(4px);
          z-index: 80;
          pointer-events: auto;
        }

        #prisma-container {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          top: 55%;
        }
        
        .circle-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          transition: opacity 0.4s ease, filter 0.4s ease, transform 0.5s ease;
          z-index: 20;
        }
        
        .animation-paused .circle-item {
          animation-play-state: paused !important;
        }
        
        .circle-item.active {
          z-index: 95;
        }
        
        .circle-item.inactive {
          z-index: 10;
          filter: saturate(0.5) brightness(0.9);
          opacity: 0.7;
        }

        .circle-button {
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-width: 6px;
          background-color: white;
        }
        
        .circle-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .circle-item.active .circle-button {
          transform: scale(1.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .circle-label {
          position: absolute;
          top: 105%;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          transition: all 0.3s ease;
          background-color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-size: 14px;
        }

        .circle-synopsis {
          position: fixed;
          top: 50%;
          left: 50%;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 1.5rem;
          padding: 0;
          width: 95vw;
          max-width: 600px;
          max-height: 90vh;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -50%) scale(0.8) rotateX(10deg);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
          z-index: 100;
          border: none;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }
        
        .circle-synopsis.active {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1) rotateX(0deg);
        }
        
        .synopsis-header {
          background: linear-gradient(135deg, var(--header-color-1) 0%, var(--header-color-2) 100%);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .synopsis-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .synopsis-content {
          padding: 2rem;
          max-height: 60vh;
          overflow-y: auto;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .feature-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-accent-color);
        }
        
        #synopsis-terapias { 
          --header-color-1: #195184;
          --header-color-2: #2563eb;
          --card-accent-color: linear-gradient(90deg, #195184, #2563eb);
        }
        #synopsis-transtornos { 
          --header-color-1: #ED3924;
          --header-color-2: #ef4444;
          --card-accent-color: linear-gradient(90deg, #ED3924, #ef4444);
        }
        #synopsis-idea { 
          --header-color-1: #EFCD18;
          --header-color-2: #f59e0b;
          --card-accent-color: linear-gradient(90deg, #EFCD18, #f59e0b);
        }
        #synopsis-especialidades { 
          --header-color-1: #6CBB45;
          --header-color-2: #22c55e;
          --card-accent-color: linear-gradient(90deg, #6CBB45, #22c55e);
        }

        .synopsis-close {
          position: absolute;
          top: 1rem; 
          right: 1rem;
          width: 40px; 
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .synopsis-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg) scale(1.1);
        }
        
        .synopsis-title { 
          font-size: 2rem; 
          font-weight: 800; 
          margin-bottom: 0.5rem; 
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .synopsis-subtitle { 
          font-size: 1.1rem; 
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0;
          font-weight: 400;
        }
        
        .synopsis-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 1.5rem 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .synopsis-text { 
          font-size: 1rem; 
          color: #4b5563; 
          line-height: 1.7; 
          margin-bottom: 1rem;
        }
        
        .synopsis-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          background: linear-gradient(135deg, var(--header-color-1), var(--header-color-2));
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border: none;
          font-size: 1rem;
          margin-top: 1rem;
          width: auto;
          min-width: 200px;
        }
        
        .synopsis-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.2);
        }
        
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }
        
        .specialty-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
        
        .specialty-item:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }
        
        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #6b7280;
          margin-top: 0.5rem;
        }

        /* Mouse follower effect */
        .mouse-follower {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 50%);
          transition: transform 0.1s ease;
          z-index: 5;
        }

        /* Interactive card animations */
        .interactive-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .interactive-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .interactive-card:hover::before {
          left: 100%;
        }

        /* Morphing button effect */
        .morphing-button {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .morphing-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .morphing-button:hover::after {
          width: 300px;
          height: 300px;
        }

        @keyframes orbit-north { 
          0% { transform: translate(-50%,-50%) rotate(0deg) translateY(-200px) rotate(0deg); } 
          100% { transform: translate(-50%,-50%) rotate(360deg) translateY(-200px) rotate(-360deg); } 
        }
        @keyframes orbit-south { 
          0% { transform: translate(-50%,-50%) rotate(0deg) translateY(200px) rotate(0deg); } 
          100% { transform: translate(-50%,-50%) rotate(360deg) translateY(200px) rotate(-360deg); } 
        }
        @keyframes orbit-east { 
          0% { transform: translate(-50%,-50%) rotate(0deg) translateX(200px) rotate(0deg); } 
          100% { transform: translate(-50%,-50%) rotate(360deg) translateX(200px) rotate(-360deg); } 
        }
        @keyframes orbit-west { 
          0% { transform: translate(-50%,-50%) rotate(0deg) translateX(-200px) rotate(0deg); } 
          100% { transform: translate(-50%,-50%) rotate(360deg) translateX(-200px) rotate(-360deg); } 
        }
        
        #circle-terapias { animation: orbit-north 40s linear infinite; }
        #circle-transtornos { animation: orbit-east 40s linear infinite; }
        #circle-especialidades { animation: orbit-south 40s linear infinite; }
        #circle-idea { animation: orbit-west 40s linear infinite; }
        
        @media (max-width: 767px) {
          @keyframes orbit-north { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateY(-150px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateY(-150px) rotate(-360deg); } 
          }
          @keyframes orbit-south { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateY(150px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateY(150px) rotate(-360deg); } 
          }
          @keyframes orbit-east { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateX(150px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateX(150px) rotate(-360deg); } 
          }
          @keyframes orbit-west { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateX(-150px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateX(-150px) rotate(-360deg); } 
          }
        }
        
        @media (max-width: 640px) {
          .circle-button { 
            width: 90px !important; 
            height: 90px !important; 
            border-width: 4px; 
          }
          .circle-button img { 
            max-height: 80%; 
            max-width: 80%; 
          }
          .circle-label { 
            font-size: 12px; 
            padding: 4px 10px; 
          }
          @keyframes orbit-north { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateY(-120px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateY(-120px) rotate(-360deg); } 
          }
          @keyframes orbit-south { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateY(120px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateY(120px) rotate(-360deg); } 
          }
          @keyframes orbit-east { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateX(120px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateX(120px) rotate(-360deg); } 
          }
          @keyframes orbit-west { 
            0% { transform: translate(-50%,-50%) rotate(0deg) translateX(-120px) rotate(0deg); } 
            100% { transform: translate(-50%,-50%) rotate(360deg) translateX(-120px) rotate(-360deg); } 
          }
        }

        #main-background-logo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1559081842-5c2c55b19e97?w=400&h=400&fit=crop&crop=center');
          background-repeat: no-repeat;
          background-position: center 55%;
          background-size: contain;
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }
        `
      }} />

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="index.html">
                <div className="h-12 md:h-16 w-32 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">EIBM</span>
                </div>
              </a>
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="especialidades.html" className="text-blue-700 hover:text-blue-900 font-medium">Clínica EIBM</a></li>
                <li><a href="gatta.html" className="text-blue-700 hover:text-blue-900 font-medium">GATTA</a></li>
                <li><a href="terapias.html" className="text-blue-700 hover:text-blue-900 font-medium">EIBM Terapias</a></li>
                <li><a href="ideia.html" className="text-blue-700 hover:text-blue-900 font-medium">IDEIA</a></li>
                <li><a href="contato.html" className="text-blue-700 hover:text-blue-900 font-medium">Contato</a></li>
              </ul>
            </nav>
            
            {/* Botão do Menu Mobile */}
            <div className="md:hidden">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="text-blue-700 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Painel do Menu Mobile */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-[90] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={handleMobileMenuClick}
      >
        {/* Botão de Fechar */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(false);
            }}
            className="text-gray-600 hover:text-blue-700"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
        {/* Links do Menu */}
        <nav>
          <ul className="space-y-6">
            <li><a href="especialidades.html" className="block text-blue-700 hover:text-blue-900 font-medium text-lg">Clínica EIBM</a></li>
            <li><a href="gatta.html" className="block text-blue-700 hover:text-blue-900 font-medium text-lg">GATTA</a></li>
            <li><a href="terapias.html" className="block text-blue-700 hover:text-blue-900 font-medium text-lg">EIBM Terapias</a></li>
            <li><a href="ideia.html" className="block text-blue-700 hover:text-blue-900 font-medium text-lg">IDEIA</a></li>
            <li><a href="contato.html" className="block text-blue-700 hover:text-blue-900 font-medium text-lg">Contato</a></li>
          </ul>
        </nav>
      </div>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[85vh] relative">
        {/* Div para a imagem de fundo do logo */}
        <div id="main-background-logo"></div>

        <div 
          className={`relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto h-[320px] sm:h-[440px] md:h-[520px] lg:h-[580px] ${
            activeSynopsis ? 'animation-paused' : ''
          }`} 
          id="prisma-container"
        >
          {/* Círculos Orbitantes */}
          <div 
            className={`circle-item ${activeSynopsis === 'terapias' ? 'active' : activeSynopsis ? 'inactive' : ''}`} 
            id="circle-terapias"
          >
            <div 
              className="circle-button w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] border-blue-700 rounded-full"
              onClick={(e) => openSynopsis('terapias', e)}
            >
              <div className="h-24 md:h-28 w-24 md:w-28 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TERAPIAS</span>
              </div>
            </div>
            <span className="circle-label text-blue-700">EIBM Terapias</span>
          </div>

          <div 
            className={`circle-item ${activeSynopsis === 'transtornos' ? 'active' : activeSynopsis ? 'inactive' : ''}`} 
            id="circle-transtornos"
          >
            <div 
              className="circle-button w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] border-red-600 rounded-full"
              onClick={(e) => openSynopsis('transtornos', e)}
            >
              <div className="h-28 md:h-32 w-28 md:w-32 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GATTA</span>
              </div>
            </div>
            <span className="circle-label text-red-600">GATTA</span>
          </div>

          <div 
            className={`circle-item ${activeSynopsis === 'idea' ? 'active' : activeSynopsis ? 'inactive' : ''}`} 
            id="circle-idea"
          >
            <div 
              className="circle-button w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] border-yellow-500 rounded-full"
              onClick={(e) => openSynopsis('idea', e)}
            >
              <div className="h-24 md:h-28 w-24 md:w-28 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IDEIA</span>
              </div>
            </div>
            <span className="circle-label text-yellow-600">IDEIA</span>
          </div>

          <div 
            className={`circle-item ${activeSynopsis === 'especialidades' ? 'active' : activeSynopsis ? 'inactive' : ''}`} 
            id="circle-especialidades"
          >
            <div 
              className="circle-button w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] border-green-600 rounded-full"
              onClick={(e) => openSynopsis('especialidades', e)}
            >
              <div className="h-24 md:h-28 w-24 md:w-28 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CLÍNICA</span>
              </div>
            </div>
            <span className="circle-label text-green-600">Clínica EIBM</span>
          </div>
        </div>
      </main>
      
      {/* Modal EIBM Terapias */}
      <div 
        ref={activeSynopsis === 'terapias' ? modalRef : null}
        id="synopsis-terapias" 
        className={`circle-synopsis ${activeSynopsis === 'terapias' ? 'active' : ''}`}
        onClick={handleSynopsisClick}
      >
        {/* Mouse Follower Effect */}
        {activeSynopsis === 'terapias' && (
          <div 
            className="mouse-follower"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: '50px',
              height: '50px'
            }}
          />
        )}

        <button className="synopsis-close morphing-button" onClick={closeSynopsis}>
          <X className="w-5 h-5" />
        </button>
        
        <div className="synopsis-header">
          <h3 className="synopsis-title">EIBM Terapias</h3>
          <p className="synopsis-subtitle">Desenvolvimento Integral e Personalizado</p>
        </div>
        
        <div className="synopsis-content">
          <p className="synopsis-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          <h4 className="synopsis-section-title">
            <Heart className="w-5 h-5 text-blue-600" />
            Especialidades Oferecidas
          </h4>
          
          <div className="specialties-grid">
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('psicologia')}
            >
              <Brain className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium">Psicologia</span>
            </div>
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('terapia-ocupacional')}
            >
              <Hand className="w-8 h-8 text-indigo-600 mb-2" />
              <span className="text-sm font-medium">Terapia Ocupacional</span>
            </div>
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('fonoaudiologia')}
            >
              <Ear className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium">Fonoaudiologia</span>
            </div>
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('psicopedagogia')}
            >
              <GraduationCap className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium">Psicopedagogia</span>
            </div>
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('musicoterapia')}
            >
              <Music className="w-8 h-8 text-pink-600 mb-2" />
              <span className="text-sm font-medium">Musicoterapia</span>
            </div>
            <div 
              className="specialty-item interactive-card"
              onClick={() => handleCardClick('arteterapia')}
            >
              <Palette className="w-8 h-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium">Arteterapia</span>
            </div>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card interactive-card" onClick={() => handleCardClick('avaliacao-personalizada')}>
              <Target className="w-6 h-6 text-blue-600 mb-3" />
              <h5 className="font-semibold mb-2">Avaliação Personalizada</h5>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('equipe-multidisciplinar')}>
              <Users className="w-6 h-6 text-blue-600 mb-3" />
              <h5 className="font-semibold mb-2">Equipe Multidisciplinar</h5>
              <p className="text-sm text-gray-600">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="terapias.html" 
              className="synopsis-button morphing-button"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Conhecer Terapias
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal GATTA */}
      <div 
        ref={activeSynopsis === 'transtornos' ? modalRef : null}
        id="synopsis-transtornos" 
        className={`circle-synopsis ${activeSynopsis === 'transtornos' ? 'active' : ''}`}
        onClick={handleSynopsisClick}
      >
        {/* Mouse Follower Effect */}
        {activeSynopsis === 'transtornos' && (
          <div 
            className="mouse-follower"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: '50px',
              height: '50px'
            }}
          />
        )}

        <button className="synopsis-close morphing-button" onClick={closeSynopsis}>
          <X className="w-5 h-5" />
        </button>
        
        <div className="synopsis-header">
          <h3 className="synopsis-title">GATTA</h3>
          <p className="synopsis-subtitle">Grupo de Apoio e Tratamento de Transtornos Alimentares</p>
        </div>
        
        <div className="synopsis-content">
          <p className="synopsis-text">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          
          <h4 className="synopsis-section-title">
            <Shield className="w-5 h-5 text-red-600" />
            Nossa Abordagem
          </h4>
          
          <div className="feature-grid">
            <div className="feature-card interactive-card" onClick={() => handleCardClick('avaliacao-medica')}>
              <Stethoscope className="w-6 h-6 text-red-600 mb-3" />
              <h5 className="font-semibold mb-2">Avaliação Médica</h5>
              <p className="text-sm text-gray-600">Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('apoio-psicologico')}>
              <Heart className="w-6 h-6 text-red-600 mb-3" />
              <h5 className="font-semibold mb-2">Apoio Psicológico</h5>
              <p className="text-sm text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('grupos-apoio')}>
              <Users className="w-6 h-6 text-red-600 mb-3" />
              <h5 className="font-semibold mb-2">Grupos de Apoio</h5>
              <p className="text-sm text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('reabilitacao-nutricional')}>
              <Activity className="w-6 h-6 text-red-600 mb-3" />
              <h5 className="font-semibold mb-2">Reabilitação Nutricional</h5>
              <p className="text-sm text-gray-600">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="gatta.html" 
              className="synopsis-button morphing-button"
            >
              <Shield className="w-4 h-4 mr-2" />
              Conhecer GATTA
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal IDEIA */}
      <div 
        ref={activeSynopsis === 'idea' ? modalRef : null}
        id="synopsis-idea" 
        className={`circle-synopsis ${activeSynopsis === 'idea' ? 'active' : ''}`}
        onClick={handleSynopsisClick}
      >
        {/* Mouse Follower Effect */}
        {activeSynopsis === 'idea' && (
          <div 
            className="mouse-follower"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: '50px',
              height: '50px'
            }}
          />
        )}

        <button className="synopsis-close morphing-button" onClick={closeSynopsis}>
          <X className="w-5 h-5" />
        </button>
        
        <div className="synopsis-header">
          <h3 className="synopsis-title">IDEIA</h3>
          <p className="synopsis-subtitle">Instituto de Desenvolvimento e Estruturação de Ambientes Inclusivos</p>
        </div>
        
        <div className="synopsis-content">
          <p className="synopsis-text">
            Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          
          <h4 className="synopsis-section-title">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Nossos Pilares
          </h4>
          
          <div className="feature-grid">
            <div className="feature-card interactive-card" onClick={() => handleCardClick('treinamento-habilidades')}>
              <Target className="w-6 h-6 text-yellow-600 mb-3" />
              <h5 className="font-semibold mb-2">Treinamento de Habilidades</h5>
              <p className="text-sm text-gray-600">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('ambiente-escolar')}>
              <GraduationCap className="w-6 h-6 text-yellow-600 mb-3" />
              <h5 className="font-semibold mb-2">Ambiente Escolar</h5>
              <p className="text-sm text-gray-600">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('ambiente-familiar')}>
              <Heart className="w-6 h-6 text-yellow-600 mb-3" />
              <h5 className="font-semibold mb-2">Ambiente Familiar</h5>
              <p className="text-sm text-gray-600">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('metodologia-cientifica')}>
              <Star className="w-6 h-6 text-yellow-600 mb-3" />
              <h5 className="font-semibold mb-2">Metodologia Científica</h5>
              <p className="text-sm text-gray-600">Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="ideia.html" 
              className="synopsis-button morphing-button"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Descobrir IDEIA
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Clínica EIBM */}
      <div 
        ref={activeSynopsis === 'especialidades' ? modalRef : null}
        id="synopsis-especialidades" 
        className={`circle-synopsis ${activeSynopsis === 'especialidades' ? 'active' : ''}`}
        onClick={handleSynopsisClick}
      >
        {/* Mouse Follower Effect */}
        {activeSynopsis === 'especialidades' && (
          <div 
            className="mouse-follower"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: '50px',
              height: '50px'
            }}
          />
        )}

        <button className="synopsis-close morphing-button" onClick={closeSynopsis}>
          <X className="w-5 h-5" />
        </button>
        
        <div className="synopsis-header">
          <h3 className="synopsis-title">Clínica EIBM</h3>
          <p className="synopsis-subtitle">Especialidades Integradas e Bem-estar Multidisciplinar</p>
        </div>
        
        <div className="synopsis-content">
          <p className="synopsis-text">
            Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos.
          </p>
          
          <h4 className="synopsis-section-title">
            <Award className="w-5 h-5 text-green-600" />
            Diferenciais da Clínica
          </h4>
          
          <div className="feature-grid">
            <div className="feature-card interactive-card" onClick={() => handleCardClick('equipe-integrada')}>
              <Users className="w-6 h-6 text-green-600 mb-3" />
              <h5 className="font-semibold mb-2">Equipe Integrada</h5>
              <p className="text-sm text-gray-600">Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('plano-personalizado')}>
              <Puzzle className="w-6 h-6 text-green-600 mb-3" />
              <h5 className="font-semibold mb-2">Plano Personalizado</h5>
              <p className="text-sm text-gray-600">Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('acompanhamento-continuo')}>
              <Eye className="w-6 h-6 text-green-600 mb-3" />
              <h5 className="font-semibold mb-2">Acompanhamento Contínuo</h5>
              <p className="text-sm text-gray-600">Animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            </div>
            <div className="feature-card interactive-card" onClick={() => handleCardClick('tecnologia-avancada')}>
              <Zap className="w-6 h-6 text-green-600 mb-3" />
              <h5 className="font-semibold mb-2">Tecnologia Avançada</h5>
              <p className="text-sm text-gray-600">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
            </div>
          </div>
          
          <h4 className="synopsis-section-title">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Nossos Valores
          </h4>
          
          <div className="stats-container">
            <div className="stat-item interactive-card" onClick={() => handleCardClick('excelencia')}>
              <Sparkles className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <span className="stat-label">Excelência em Atendimento</span>
            </div>
            <div className="stat-item interactive-card" onClick={() => handleCardClick('inovacao')}>
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <span className="stat-label">Inovação Constante</span>
            </div>
            <div className="stat-item interactive-card" onClick={() => handleCardClick('cuidado-humanizado')}>
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <span className="stat-label">Cuidado Humanizado</span>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="especialidades.html" 
              className="synopsis-button morphing-button"
            >
              <Award className="w-4 h-4 mr-2" />
              Explorar Clínica
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Simplificado */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-left">
          <p className="text-gray-400">&copy; 2025 EIBM - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}