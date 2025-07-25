import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileText, UserCheck, BarChart3, Target, School, Home, Trophy,
  Heart, Star, ArrowRight, CheckCircle, Lightbulb, ExternalLink, Users,
  Menu, X, Puzzle, ChevronDown, Clock, Settings, MessageCircle, Hand,
  Brain, Smile, BookOpen, Gamepad2, PenTool
} from 'lucide-react';
import TestSimple from './TestSimple';
import FonoaudiologiaPage from './pages/FonoaudiologiaPage';
import PsicologiaPage from './pages/PsicologiaPage';
import PsicopedagogiaPage from './pages/PsicopedagogiaPage';
import TerapiaOcupacionalPage from './pages/TerapiaOcupacionalPage';

// Simple ImageWithFallback component
const ImageWithFallback = ({ src, alt, className, style = {}, ...props }: any) => {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className || ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-gray-400">Image not found</div>
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...props} onError={handleError} />
  );
};

// Simple Button component
const Button = ({ children, className = "", variant = "default", onClick = () => {}, ...props }: any) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === "outline" 
    ? "border border-current bg-transparent hover:bg-current hover:bg-opacity-10" 
    : "text-white";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Badge component
const Badge = ({ children, className = "", variant = "default" }: any) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const variantClasses = variant === "secondary" 
    ? "bg-gray-100 text-gray-800" 
    : "bg-blue-100 text-blue-800";
  
  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};

// Simple Card component
const Card = ({ children, className = "", ...props }: any) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "", ...props }: any) => {
  return (
    <div className={`p-6 pb-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "", ...props }: any) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = "", ...props }: any) => {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
};

const Modal = ({ id, isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
};

const ParallaxElement = ({ children, speed = 0.5, className = "" }: any) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={className}
      style={{ transform: `translateY(${offsetY * speed}px)` }}
    >
      {children}
    </div>
  );
};

const AnimatedSection = ({ children, className = "", delay = 0 }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  const openModal = (modalId: string) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (mobileMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen || activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, activeModal]);

  const therapyCards = [
    {
      id: 'fono',
      title: 'Fonoaudiologia',
      icon: '🗣️',
      color: 'green',
      description: 'Trabalha com o desenvolvimento da comunicação, linguagem, fala e funções orais, essenciais para a interação social e aprendizagem.',
      features: [
        'Desenvolvimento da linguagem',
        'Comunicação alternativa', 
        'Funções orais e alimentação'
      ],
      link: '#'
    },
    {
      id: 'psico',
      title: 'Psicologia',
      icon: '🧠',
      color: 'yellow',
      description: 'Foca no desenvolvimento emocional, comportamental e social, utilizando técnicas baseadas em evidências como ABA e terapia cognitivo-comportamental.',
      features: [
        'Análise do Comportamento Aplicada (ABA)',
        'Terapia cognitivo-comportamental',
        'Habilidades sociais e emocionais'
      ],
      link: '#'
    },
    {
      id: 'to',
      title: 'Terapia Ocupacional',
      icon: '🧩',
      color: 'blue',
      description: 'Auxilia no desenvolvimento de habilidades necessárias para atividades diárias, trabalhando coordenação motora, integração sensorial e autonomia.',
      features: [
        'Coordenação motora fina e global',
        'Integração sensorial',
        'Atividades da vida diária',
        'Desenvolvimento postural',
        'Habilidades de escrita',
        'Regulação emocional'
      ],
      link: '/terapia-ocupacional'
    },
    {
      id: 'psicoped',
      title: 'Psicopedagogia',
      icon: '👩‍🏫',
      color: 'purple',
      description: 'Aborda dificuldades de aprendizagem, fornecendo estratégias e intervenções personalizadas para promover o sucesso escolar e académico.',
      features: [
        'Dificuldades de aprendizagem',
        'Estratégias de estudo',
        'Adaptações curriculares'
      ],
      link: '#'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Anamnese e Acompanhamento Diferencial',
      subtitle: 'Marco 0 - Primeira Impressão',
      duration: 'Duração: até 1 semana',
      description: 'A nossa jornada começa com um olhar atento e personalizado. Realizamos uma anamnese completa, apoiada por tecnologia e uma equipe multidisciplinar, focando no que realmente importa para o desenvolvimento único do seu filho.',
      color: 'blue',
      bgGradient: 'from-blue-50/50 via-blue-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop',
      icon: <FileText className="w-6 h-6" />,
      deliverable: 'Documento ANAMNESE',
      objectives: [
        'Compreender o histórico completo da criança',
        'Identificar necessidades específicas',
        'Estabelecer linha de base para acompanhamento',
        'Definir expectativas familiares'
      ],
      process: [
        'Entrevistas estruturadas com pais/cuidadores',
        'Análise de relatórios médicos anteriores',
        'Observação inicial da criança',
        'Aplicação de questionários especializados'
      ]
    },
    {
      number: 2,
      title: 'Vínculo e Plano Terapêutico',
      subtitle: 'Marco 1 - Construção de Confiança',
      duration: 'Duração: até 4 semanas após Marco 0',
      description: 'Dedicamo-nos a construir uma relação sólida de confiança com o seu filho. Através de sessões interativas e lúdicas, descobrimos preferências, hiperfocos e identificamos tanto barreiras quanto potencialidades únicas.',
      color: 'green',
      bgGradient: 'from-green-50/50 via-green-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&h=500&fit=crop',
      icon: <UserCheck className="w-6 h-6" />,
      deliverable: 'PONTUÁRIO de sessões + PLANO TERAPÊUTICO',
      objectives: [
        'Estabelecer rapport com a criança',
        'Identificar motivações e interesses',
        'Mapear perfil sensorial e comportamental',
        'Criar plano de intervenção personalizado'
      ],
      process: [
        'Sessões de observação lúdica',
        'Atividades de interesse da criança',
        'Registo detalhado de comportamentos',
        'Ajuste de informações da anamnese'
      ]
    },
    {
      number: 3,
      title: 'Avaliações Padronizadas',
      subtitle: 'Marco 2 - Base Científica',
      duration: 'Duração: até 8 semanas após Marco 1',
      description: 'Aprofundamos o conhecimento através de avaliações científicas rigorosas. Aplicamos testes padronizados quando necessário, fornecendo dados objetivos que orientam as intervenções especializadas.',
      color: 'purple',
      bgGradient: 'from-purple-50/50 via-purple-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop',
      icon: <BarChart3 className="w-6 h-6" />,
      deliverable: 'Documentos AVALIAÇÕES detalhadas',
      objectives: [
        'Obter medidas objetivas de desenvolvimento',
        'Confirmar hipóteses clínicas',
        'Estabelecer linha de base mensurável',
        'Orientar estratégias específicas'
      ],
      process: [
        'Seleção de instrumentos apropriados',
        'Aplicação de testes padronizados',
        'Análise estatística dos resultados',
        'Interpretação clínica especializada'
      ]
    },
    {
      number: 4,
      title: 'Plano de Treinamento Intensivo IDEIA',
      subtitle: 'Marco 3 - Intervenção Especializada',
      duration: 'Duração: até 4 semanas após Marco 1',
      description: 'Avaliamos a necessidade de um Plano de Treinamento Intensivo utilizando os ambientes inovadores do IDEIA. Atividades estruturadas e programadas são aplicadas de forma intensiva nos ambientes mais adequados.',
      color: 'orange',
      bgGradient: 'from-orange-50/50 via-orange-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=500&fit=crop',
      icon: <Target className="w-6 h-6" />,
      deliverable: 'Plano de Treinamento Estruturado',
      objectives: [
        'Acelerar aquisição de habilidades-chave',
        'Utilizar ambientes especializados',
        'Implementar treino intensivo',
        'Monitorizar progressos em tempo real'
      ],
      process: [
        'Análise de elegibilidade para treino intensivo',
        'Design de atividades estruturadas',
        'Implementação em ambientes simulados',
        'Registo e premiação de conquistas'
      ]
    },
    {
      number: 5,
      title: 'Suporte e PEI Escolar',
      subtitle: 'Marco 4 - Integração Educacional',
      duration: 'Duração: até 8 semanas após Marco 1',
      description: 'Apoiamos ativamente o desenvolvimento no ambiente escolar. A nossa equipe pode visitar a escola para consultoria, treinamentos e apoio na criação do Plano Educacional Individualizado (PEI).',
      color: 'blue',
      bgGradient: 'from-blue-50/50 via-blue-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=500&fit=crop',
      icon: <School className="w-6 h-6" />,
      deliverable: 'Suporte PEI + Relatório Escolar',
      objectives: [
        'Facilitar inclusão escolar efetiva',
        'Capacitar equipe educacional',
        'Adaptar estratégias ao ambiente escolar',
        'Garantir continuidade terapêutica'
      ],
      process: [
        'Visitas técnicas à escola',
        'Formação de professores',
        'Desenvolvimento colaborativo do PEI',
        'Acompanhamento da implementação'
      ]
    },
    {
      number: 6,
      title: 'Acompanhamento Residencial',
      subtitle: 'Marco Complementar - Autonomia no Lar',
      duration: 'Conforme necessidade',
      description: 'Oferecemos acompanhamento especializado no ambiente residencial, focando na otimização de rotinas e desenvolvimento das Atividades de Vida Diária (AVDs) para máxima autonomia familiar.',
      color: 'green',
      bgGradient: 'from-green-50/50 via-green-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop',
      icon: <Home className="w-6 h-6" />,
      deliverable: 'Plano de Autonomia Residencial',
      objectives: [
        'Transferir habilidades para casa',
        'Otimizar rotinas familiares',
        'Desenvolver independência em AVDs',
        'Capacitar familiares como co-terapeutas'
      ],
      process: [
        'Avaliação do ambiente domiciliar',
        'Adaptações físicas necessárias',
        'Treino de rotinas estruturadas',
        'Orientação familiar contínua'
      ]
    },
    {
      number: 7,
      title: 'Relatórios de Evolução',
      subtitle: 'Marco 5 - Transparência e Progresso',
      duration: 'Duração: até 30 semanas após Marco 1',
      description: 'Realizamos avaliação abrangente para demonstrar a evolução da criança. Geramos relatório detalhado com dados claros e mensuráveis, servindo como mapa para o próximo semestre.',
      color: 'purple',
      bgGradient: 'from-purple-50/50 via-purple-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop',
      icon: <BarChart3 className="w-6 h-6" />,
      deliverable: 'RELATÓRIO DE EVOLUÇÃO completo',
      objectives: [
        'Documentar progressos objetivos',
        'Ajustar metas terapêuticas',
        'Planear próximas etapas',
        'Comunicar resultados à família'
      ],
      process: [
        'Reavaliação com instrumentos padronizados',
        'Análise comparativa de dados',
        'Relatório técnico detalhado',
        'Reunião de feedback com família'
      ]
    },
    {
      number: 8,
      title: 'Alta e Potencial Pleno',
      subtitle: 'Objetivo Final - Autonomia Conquistada',
      duration: 'Meta a longo prazo',
      description: 'Capacitamos cada criança para alcançar o seu pleno potencial e eventualmente a alta terapêutica. Monitorizamos o progresso contínuo e fornecemos suporte para sustentabilidade das conquistas.',
      color: 'orange',
      bgGradient: 'from-orange-50/50 via-orange-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop',
      icon: <Trophy className="w-6 h-6" />,
      deliverable: 'Plano de Transição e Alta',
      objectives: [
        'Garantir generalização das habilidades',
        'Preparar transição gradual',
        'Estabelecer rede de suporte',
        'Celebrar conquistas alcançadas'
      ],
      process: [
        'Avaliação de prontidão para alta',
        'Plano de manutenção familiar',
        'Rede de suporte comunitário',
        'Acompanhamento pós-alta programado'
      ]
    }
  ];

  const navItems = [
    { name: 'Terapia Ocupacional', page: 'terapia-ocupacional' },
    { name: 'Fonoaudiologia', page: 'fonoaudiologia' },
    { name: 'Psicologia', page: 'psicologia' },
    { name: 'Psicopedagogia', page: 'psicopedagogia' },
    { name: 'IDEIA', page: 'ideia' },
    { name: 'Contacto', page: 'contacto' }
  ];

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const navigateHome = () => {
    setCurrentPage('home');
  };

  // Renderizar páginas específicas
  if (currentPage === 'psicologia') {
    return <PsicologiaPage onNavigateHome={navigateHome} />;
  }
  
  if (currentPage === 'fonoaudiologia') {
    return <FonoaudiologiaPage onNavigateHome={navigateHome} />;
  }
  
  if (currentPage === 'psicopedagogia') {
    return <PsicopedagogiaPage onNavigateHome={navigateHome} />;
  }
  
  if (currentPage === 'terapia-ocupacional') {
    return <TerapiaOcupacionalPage onNavigateHome={navigateHome} />;
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full bg-white shadow-md rounded-b-xl z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                EIBM Terapias
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => navigateToPage(item.page)}
                className="text-black hover:text-blue-700 font-medium transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-800 hover:text-orange-500 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          className="md:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 p-5"
          initial={{ x: '-100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">EIBM</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <motion.li key={item.name}>
                <button 
                  onClick={() => navigateToPage(item.page)}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-white py-24 relative flex items-center">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <ParallaxElement speed={0.7} className="absolute top-32 left-20 lg:left-80">
            <Puzzle className="w-20 h-20 lg:w-32 lg:h-32 text-orange-400 opacity-60" />
          </ParallaxElement>
          <ParallaxElement speed={0.6} className="absolute top-32 right-16">
            <Puzzle className="w-20 h-20 lg:w-32 lg:h-32 text-green-500 opacity-60" />
          </ParallaxElement>
          <ParallaxElement speed={0.5} className="absolute bottom-28 left-1/4">
            <Puzzle className="w-24 h-24 lg:w-36 lg:h-36 text-purple-400 opacity-60" />
          </ParallaxElement>
          <ParallaxElement speed={0.4} className="absolute bottom-32 left-1/2">
            <Puzzle className="w-12 h-12 lg:w-20 lg:h-20 text-red-500 opacity-60" />
          </ParallaxElement>
          <ParallaxElement speed={0.75} className="absolute top-36 right-1/2">
            <Puzzle className="w-16 h-16 lg:w-24 lg:h-24 text-blue-500 opacity-60" />
          </ParallaxElement>
          <ParallaxElement speed={0.65} className="absolute bottom-16 left-2/3">
            <Puzzle className="w-20 h-20 lg:w-32 lg:h-32 text-orange-400 opacity-60" />
          </ParallaxElement>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <AnimatedSection className="md:col-span-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Inclusão e desenvolvimento para todas as crianças
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                IDEIA une ciência, tecnologia e equipa multidisciplinar para apoiar o desenvolvimento de crianças neurodivergentes, as suas famílias e educadores.
              </p>
              <motion.a 
                href="#step-1" 
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="w-5 h-5" />
                Caminho do Desenvolvimento
              </motion.a>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 md:mt-0">
              {therapyCards.map((therapy, index) => (
                <motion.button
                key={therapy.id}
                onClick={() => openModal(therapy.id)}
                className={`bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition-all group border-2 border-transparent hover:border-${therapy.color}-600`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-3xl mb-2 group-hover:scale-110 transition-transform`}>
                  {therapy.icon}
                </div>
                <span className={`font-bold text-center group-hover:text-${therapy.color}-800 transition-colors`}>
                  {therapy.title}
                </span>
              </motion.button>
              ))}
              
              <motion.button
                onClick={() => openModal('clinica')}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center col-span-1 md:col-span-2 hover:shadow-xl transition-all group border-2 border-transparent hover:border-blue-600"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center space-x-2 mb-2 group-hover:scale-110 transition-transform">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="font-bold text-center group-hover:text-blue-800 transition-colors">
                  IDEIA
                </span>
              </motion.button>
            </AnimatedSection>
          </div>
          
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center p-3 rounded-full bg-white/70 backdrop-blur-sm shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-blue-700 mb-1">Conheça o nosso método</p>
            <ChevronDown className="w-5 h-5 text-blue-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Improved Steps Sections */}
      <div className="relative">
        {/* Central Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 h-full z-0"></div>
        
        {steps.map((step, index) => (
          <section 
            key={step.number}
            id={`step-${step.number}`}
            className={`py-20 relative bg-gradient-to-br ${step.bgGradient}`}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Title - Always on left for consistency */}
                <AnimatedSection className="lg:col-span-5 lg:pr-8" delay={0.1}>
                  <div className="sticky top-32">
                    {/* Step Number Circle */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className={`bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-2xl lg:text-3xl font-bold text-${step.color}-800 leading-tight mb-1`}>
                          {step.title}
                        </h2>
                        <p className={`text-${step.color}-600 font-medium text-lg`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <Badge className={`mb-4 bg-${step.color}-100 text-${step.color}-800 px-4 py-2`}>
                      <Clock className="w-4 h-4 mr-2" />
                      {step.duration}
                    </Badge>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverable */}
                    <div className={`bg-${step.color}-50 border-l-4 border-${step.color}-400 p-4 rounded-r-lg mb-6`}>
                      <div className="flex items-center gap-2 mb-2">
                        {step.icon}
                        <span className={`font-bold text-${step.color}-800`}>Entregável</span>
                      </div>
                      <p className={`text-${step.color}-700`}>{step.deliverable}</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content Details */}
                <AnimatedSection className="lg:col-span-7" delay={0.2}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-200 to-${step.color}-300 rounded-2xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform`}></div>
                      <ImageWithFallback
                        src={step.image}
                        alt={`Ilustração ${step.title}`}
                        className="w-full h-64 object-cover rounded-2xl shadow-xl relative z-10"
                      />
                    </motion.div>

                    {/* Objectives and Process */}
                    <div className="space-y-6">
                      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                          <CardTitle className={`text-lg font-bold text-${step.color}-800 flex items-center gap-2`}>
                            <Target className="w-5 h-5" />
                            Objetivos
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {step.objectives.map((objective, objIndex) => (
                              <motion.li 
                                key={objIndex}
                                className="flex items-start gap-3 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: objIndex * 0.1 }}
                              >
                                <CheckCircle className={`w-4 h-4 text-${step.color}-500 mt-0.5 flex-shrink-0`} />
                                <span className="text-gray-700">{objective}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                          <CardTitle className={`text-lg font-bold text-${step.color}-800 flex items-center gap-2`}>
                            <Settings className="w-5 h-5" />
                            Processo
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {step.process.map((process, processIndex) => (
                              <motion.li 
                                key={processIndex}
                                className="flex items-start gap-3 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: processIndex * 0.1 }}
                              >
                                <div className={`w-6 h-6 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <span className={`text-xs font-bold text-${step.color}-600`}>
                                    {processIndex + 1}
                                  </span>
                                </div>
                                <span className="text-gray-700">{process}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Step connector */}
            {index < steps.length - 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>
            )}
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EIBM</h3>
                  <p className="text-xs text-gray-400">Especialidades Integradas e Bem-estar Multidisciplinar</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-400">&copy; 2025 EIBM - Todos os direitos reservados.</p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                {['facebook-f', 'instagram', 'youtube', 'linkedin-in'].map((social, index) => (
                  <motion.a 
                    key={social}
                    href="#" 
                    className="text-white hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none hover:bg-blue-700 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowRight className="w-5 h-5 transform -rotate-90" />
      </motion.button>

      {/* Modals */}
      <Modal id="modal-fono" isOpen={activeModal === 'fono'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          {/* Logo EIBM */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-lg">EIBM</div>
          </div>
          
          <h2 className="text-xl font-bold text-green-600 mb-2">Fonoaudiologia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Trabalha com o desenvolvimento da comunicação, linguagem, fala e funções orais, essenciais para a interação social e aprendizagem.
          </p>
          
          <ul className="mb-4 text-gray-700 space-y-2 text-sm text-left w-full">
            <li className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-orange-400" />
              Desenvolvimento da linguagem
            </li>
            <li className="flex items-center gap-2">
              <Hand className="w-4 h-4 text-indigo-400" />
              Comunicação alternativa
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-pink-400" />
              Funções orais e alimentação
            </li>
          </ul>
          
          <Button 
            className="inline-flex items-center gap-2 mt-4 bg-green-700 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
            onClick={() => {
              closeModal();
              navigateToPage('fonoaudiologia');
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Saiba Mais
          </Button>
        </div>
      </Modal>

      <Modal id="modal-psico" isOpen={activeModal === 'psico'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          {/* Logo EIBM */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-lg">EIBM</div>
          </div>
          
          <h2 className="text-xl font-bold text-yellow-600 mb-2">Psicologia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Foca no desenvolvimento emocional, comportamental e social, utilizando técnicas baseadas em evidências como ABA e terapia cognitivo-comportamental.
          </p>
          
          <ul className="mb-4 text-gray-700 space-y-2 text-sm text-left w-full">
            <li className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              Análise do Comportamento Aplicada (ABA)
            </li>
            <li className="flex items-center gap-2">
              <Smile className="w-4 h-4 text-green-400" />
              Terapia cognitivo-comportamental
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Habilidades sociais e emocionais
            </li>
          </ul>
          
          <Button 
            className="inline-flex items-center gap-2 mt-4 bg-yellow-700 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
            onClick={() => {
              closeModal();
              navigateToPage('psicologia');
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Saiba Mais
          </Button>
        </div>
      </Modal>

      {/* Terapia Ocupacional Modal */}
      <Modal id="modal-to" isOpen={activeModal === 'to'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          {/* Logo EIBM */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-lg">EIBM</div>
          </div>
          
          <h2 className="text-xl font-bold text-blue-600 mb-2">Terapia Ocupacional</h2>
          <p className="text-gray-800 mb-4 text-center">
            Auxilia no desenvolvimento de habilidades necessárias para atividades diárias, trabalhando coordenação motora, integração sensorial e autonomia.
          </p>
          
          <ul className="mb-4 text-gray-700 space-y-2 text-sm text-left w-full max-h-32 overflow-y-auto">
            <li className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-red-400" />
              Coordenação motora fina e global
            </li>
            <li className="flex items-center gap-2">
              <Puzzle className="w-4 h-4 text-indigo-400" />
              Integração sensorial
            </li>
            <li className="flex items-center gap-2">
              <Home className="w-4 h-4 text-green-400" />
              Atividades da vida diária
            </li>
            <li className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-orange-400" />
              Habilidades de escrita
            </li>
          </ul>
          
          <Button 
            className="inline-flex items-center gap-2 mt-4 bg-blue-700 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
            onClick={() => {
              closeModal();
              navigateToPage('terapia-ocupacional');
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Saiba Mais
          </Button>
        </div>
      </Modal>

      <Modal id="modal-psicoped" isOpen={activeModal === 'psicoped'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          {/* Logo EIBM */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <div className="text-white font-bold text-lg">EIBM</div>
          </div>
          
          <h2 className="text-xl font-bold text-purple-600 mb-2">Psicopedagogia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Aborda dificuldades de aprendizagem, fornecendo estratégias e intervenções personalizadas para promover o sucesso escolar e académico.
          </p>
          
          <ul className="mb-4 text-gray-700 space-y-2 text-sm text-left w-full">
            <li className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              Dificuldades de aprendizagem
            </li>
            <li className="flex items-center gap-2">
              <Target className="w-4 h-4 text-green-400" />
              Estratégias de estudo
            </li>
            <li className="flex items-center gap-2">
              <School className="w-4 h-4 text-purple-400" />
              Adaptações curriculares
            </li>
          </ul>
          
          <Button 
            className="inline-flex items-center gap-2 mt-4 bg-purple-700 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
            onClick={() => {
              closeModal();
              navigateToPage('psicopedagogia');
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Saiba Mais
          </Button>
        </div>
      </Modal>

      <Modal id="modal-clinica" isOpen={activeModal === 'clinica'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">IDEIA - Inclusão e Desenvolvimento Infantil</h2>
          <p className="text-gray-800 mb-4 text-center">
            Um espaço integrado e acolhedor, projetado para proporcionar o melhor atendimento para crianças com necessidades especiais e as suas famílias.
          </p>
          <ul className="mb-4 text-gray-700 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              Ambiente acolhedor e seguro
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Equipe multidisciplinar
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Atendimento personalizado
            </li>
            <li className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              Abordagem inovadora
            </li>
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Conheça o IDEIA
          </Button>
        </div>
      </Modal>
    </div>
  );
}