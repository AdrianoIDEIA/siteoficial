import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StandardHeader } from '../components/StandardHeader';
import {
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,       
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette,
  Smile, TreePine, Flower2, ChevronDown, ArrowUp, Star, Play, Clock, FileText,
  UserCheck, School, Home, BarChart3, Trophy, ExternalLink, Folder
} from 'lucide-react';

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ id, isOpen, onClose, children }: ModalProps) => {
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

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxElement = ({ children, speed = 0.5, className = "" }: ParallaxElementProps) => {
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

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
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

interface PortalterapiasProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function Portalterapias({ onNavigateHome, onNavigateToPage }: PortalterapiasProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const step1Ref = useRef<HTMLElement | null>(null);
  const isStep1InView = useInView(step1Ref, { amount: 0.2 });
  const heroRef = useRef<HTMLElement | null>(null);
  const isHeroInView = useInView(heroRef, { amount: 0.6 });

  const openModal = (modalId: string) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const handleFonoButtonClick = () => {
    if (onNavigateToPage) {
      onNavigateToPage('fonoaudiologia');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

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
      description: 'A nossa jornada começa com um olhar atento e personalizado. Realizamos uma anamnese completa, apoiada por tecnologia e uma equipa multidisciplinar, focando no que realmente importa para o desenvolvimento único do seu filho.',
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
      title: 'Plano de Treinamento Intensivo EIBM IDEIA',
      subtitle: 'Marco 3 - Intervenção Especializada',
      duration: 'Duração: até 4 semanas após Marco 1',
      description: 'Avaliamos a necessidade de um Plano de Treinamento Intensivo utilizando os ambientes inovadores do EIBM IDEIA. Atividades estruturadas e programadas são aplicadas de forma intensiva nos ambientes mais adequados.',
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
      description: 'Apoiamos ativamente o desenvolvimento no ambiente escolar. A nossa equipa pode visitar a escola para consultoria, treinamentos e apoio na criação do Plano Educacional Individualizado (PEI).',
      color: 'blue',
      bgGradient: 'from-blue-50/50 via-blue-100/30 to-white',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=500&fit=crop',
      icon: <School className="w-6 h-6" />,
      deliverable: 'Suporte PEI + Relatório Escolar',
      objectives: [
        'Facilitar inclusão escolar efetiva',
        'Capacitar equipa educacional',
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

  // Instagram embeds loader
  useEffect(() => {
    const processEmbeds = () => {
      if ((window as any).instgrm && (window as any).instgrm.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
    };

    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="terapias"
        logoSrc="/logo_eibm_terapias_escrito.svg"
        appearance="glass"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-white py-24 relative flex items-center">
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
            <motion.div 
              className="md:col-span-2 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  EIBM Terapias
                </Badge>
              </div>
              <motion.div 
                className="flex justify-center md:justify-start mb-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img src="/logo_eibm_terapias.svg" alt="EIBM Terapias" className="h-48 sm:h-56 md:h-72 w-auto" />
              </motion.div>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Inclusão e desenvolvimento para todas as crianças
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Unimos ciência, tecnologia e uma equipe multidisciplinar para apoiar o desenvolvimento de crianças neurodivergentes, as suas famílias.
              </motion.p>
              <motion.a 
                href="#step-1" 
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="w-5 h-5" />
                Caminho do Desenvolvimento
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="md:col-span-3 grid grid-cols-2 md:grid-cols-2 md:grid-rows-3 gap-6 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {therapyCards.map((therapy, index) => (
                <motion.button
                  key={therapy.id}
                  onClick={() => openModal(therapy.id)}
                  className={`rounded-xl shadow-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition-all group border-2 border-transparent hover:border-${therapy.color}-600 bg-${therapy.color}-50 col-span-1 w-full h-full min-h-[140px] text-lg sm:text-xl md:text-2xl ${
                    therapy.id === 'psico' ? 'bg-yellow-100' : ''
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`text-3xl mb-2 group-hover:scale-110 transition-transform`}>
                    {therapy.icon}
                  </div>
                  <span className={`font-extrabold text-center transition-colors text-2xl sm:text-3xl md:text-4xl ${
                    therapy.color === 'green' 
                      ? 'text-green-900' 
                      : therapy.color === 'yellow' 
                        ? 'text-yellow-900' 
                        : therapy.color === 'blue' 
                          ? 'text-blue-900' 
                          : therapy.color === 'purple' 
                            ? 'text-purple-900' 
                            : ''
                  }`}>
                    {therapy.title}
                  </span>
                </motion.button>
              ))}
              
              <motion.button
                onClick={() => openModal('clinica')}
                className="rounded-xl shadow-lg p-4 flex flex-col items-center justify-center col-span-2 md:col-span-2 md:row-start-3 w-full h-full min-h-[140px] hover:shadow-xl transition-all group border-2 border-transparent hover:border-orange-600 bg-orange-50 text-lg sm:text-xl md:text-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center space-x-2 mb-2 group-hover:scale-110 transition-transform">
                  <img src="/logo_ideia.svg" alt="IDEIA Logo" className="h-10 w-auto object-contain" />
                </div>
                <span className="font-extrabold text-center text-orange-900 group-hover:text-orange-900 transition-colors text-2xl sm:text-3xl md:text-4xl">
                  EIBM IDEIA - Centro de Terapias
                </span>
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center p-3 rounded-full bg-white/70 backdrop-blur-sm shadow-md z-50"
            initial={{ opacity: 1 }}
            animate={{ y: [0, -10, 0], opacity: isStep1InView ? 0 : 1 }}
            transition={{ duration: 2, repeat: Infinity, opacity: { duration: 0.3 } }}
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
            ref={step.number === 1 ? step1Ref : undefined}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {index % 2 === 0 ? (
                  <>
                    {/* Detalhes à esquerda */}
                    <AnimatedSection className="lg:col-span-5 lg:pr-8" delay={0.1}>
                      <div className="sticky top-32">
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
                        <Badge className={`mb-4 bg-${step.color}-100 text-${step.color}-800 px-4 py-2`}>
                          <Clock className="w-4 h-4 mr-2" />
                          {step.duration}
                        </Badge>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{step.description}</p>
                        <div className={`bg-${step.color}-50 border-l-4 border-${step.color}-400 p-4 rounded-r-lg mb-6`}>
                          <div className="flex items-center gap-2 mb-2">
                            {step.icon}
                            <span className={`font-bold text-${step.color}-800`}>Entregável</span>
                          </div>
                          <p className={`text-${step.color}-700`}>{step.deliverable}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                    {/* Conteúdo à direita */}
                    <AnimatedSection className="lg:col-span-7" delay={0.2}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div className="relative group order-last md:order-none" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-200 to-${step.color}-300 rounded-2xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform`}></div>
                          <ImageWithFallback src={step.image} alt={`Ilustração ${step.title}`} className="w-full h-64 object-cover rounded-2xl shadow-xl relative z-10" />
                        </motion.div>
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
                                  <motion.li key={objIndex} className="flex items-start gap-3 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: objIndex * 0.1 }}>
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
                                  <motion.li key={processIndex} className="flex items-start gap-3 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: processIndex * 0.1 }}>
                                    <div className={`w-6 h-6 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                      <span className={`text-xs font-bold text-${step.color}-600`}>{processIndex + 1}</span>
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
                  </>
                ) : (
                  <>
                    {/* Conteúdo à esquerda */}
                    <AnimatedSection className="lg:col-span-7" delay={0.2}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-200 to-${step.color}-300 rounded-2xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform`}></div>
                          <ImageWithFallback src={step.image} alt={`Ilustração ${step.title}`} className="w-full h-64 object-cover rounded-2xl shadow-xl relative z-10" />
                        </motion.div>
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
                                  <motion.li key={objIndex} className="flex items-start gap-3 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: objIndex * 0.1 }}>
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
                                  <motion.li key={processIndex} className="flex items-start gap-3 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: processIndex * 0.1 }}>
                                    <div className={`w-6 h-6 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                      <span className={`text-xs font-bold text-${step.color}-600`}>{processIndex + 1}</span>
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
                    {/* Detalhes à direita */}
                    <AnimatedSection className="lg:col-span-5 lg:pl-8" delay={0.1}>
                      <div className="sticky top-32">
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
                        <Badge className={`mb-4 bg-${step.color}-100 text-${step.color}-800 px-4 py-2`}>
                          <Clock className="w-4 h-4 mr-2" />
                          {step.duration}
                        </Badge>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{step.description}</p>
                        <div className={`bg-${step.color}-50 border-l-4 border-${step.color}-400 p-4 rounded-r-lg mb-6`}>
                          <div className="flex items-center gap-2 mb-2">
                            {step.icon}
                            <span className={`font-bold text-${step.color}-800`}>Entregável</span>
                          </div>
                          <p className={`text-${step.color}-700`}>{step.deliverable}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </>
                )}
              </div>
            </div>

            {/* Step connector */}
            {index < steps.length - 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>
            )}
          </section>
        ))}
      </div>

      {/* Cards: Instagram, IDEIA e Contato */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://instagram.com/eibmterapias"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-start hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-pink-100 text-pink-700">Instagram</Badge>
              <p className="text-gray-700">Siga conteúdos e novidades no nosso perfil @eibmterapias.</p>
            </motion.a>
            <motion.button
              onClick={() => onNavigateToPage && onNavigateToPage('ideia')}
              className="bg-white rounded-2xl p-6 shadow-lg text-left hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-purple-100 text-purple-700">IDEIA</Badge>
              <p className="text-gray-700">Conheça o EIBM IDEIA - Centro de Terapias e os nossos ambientes.</p>
            </motion.button>
            <motion.button
              onClick={() => onNavigateToPage && onNavigateToPage('contatos')}
              className="bg-white rounded-2xl p-6 shadow-lg text-left hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-3 bg-blue-100 text-blue-700">Contato</Badge>
              <p className="text-gray-700">Fale connosco para informações e agendamentos.</p>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Instagram Embeds */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DNocjXJOmK0/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DNocjXJOmK0/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DNocjXJOmK0/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação compartilhada por EIBM Terapias (@eibmterapias)</a></p></div></blockquote>'
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DNjE3Y-uQir/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DNjE3Y-uQir/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DNjE3Y-uQir/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação compartilhada por EIBM Terapias (@eibmterapias)</a></p></div></blockquote>'
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DNRA7p3OxA3/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DNRA7p3OxA3/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DNRA7p3OxA3/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação compartilhada por EIBM Terapias (@eibmterapias)</a></p></div></blockquote>'
              }}
            />
          </div>
        </div>
      </section>

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
        className={`fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none hover:bg-blue-700 z-50 ${isHeroInView ? 'pointer-events-none' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isHeroInView ? 0 : 1, scale: isHeroInView ? 0.9 : 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Modals */}
      <Modal id="modal-fono" isOpen={activeModal === 'fono'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-4xl">🗣️</div>
          </div>
          <h2 className="text-xl font-bold text-green-600 mb-2">Fonoaudiologia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Trabalha com o desenvolvimento da comunicação, linguagem, fala e funções orais, essenciais para a interação social e aprendizagem.
          </p>
          <ul className="mb-4 text-gray-700 space-y-2 text-sm">
            {therapyCards.find(t => t.id === 'fono')?.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleFonoButtonClick}
          >
            <Folder className="w-4 h-4 mr-2" />
            {copySuccess ? 'Navegando...' : 'Ir para Fonoaudiologia'}
          </Button>
        </div>
      </Modal>

      <Modal id="modal-psico" isOpen={activeModal === 'psico'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-4xl">🧠</div>
          </div>
          <h2 className="text-xl font-bold text-yellow-600 mb-2">Psicologia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Foca no desenvolvimento emocional, comportamental e social, utilizando técnicas baseadas em evidências como ABA e terapia cognitivo-comportamental.
          </p>
          <ul className="mb-4 text-gray-700 space-y-2 text-sm">
            {therapyCards.find(t => t.id === 'psico')?.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
            onClick={() => onNavigateToPage && onNavigateToPage('psicologia')}
          >
            <Folder className="w-4 h-4 mr-2" />
            Ir para Psicologia
          </Button>
        </div>
      </Modal>

      {/* Terapia Ocupacional Modal with Link */}
      <Modal id="modal-to" isOpen={activeModal === 'to'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-4xl">🧩</div>
          </div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">Terapia Ocupacional</h2>
          <p className="text-gray-800 mb-4 text-center">
            Auxilia no desenvolvimento de habilidades necessárias para atividades diárias, trabalhando coordenação motora, integração sensorial e autonomia.
          </p>
          <ul className="mb-6 text-gray-700 space-y-2 text-sm max-h-32 overflow-y-auto">
            {therapyCards.find(t => t.id === 'to')?.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => onNavigateToPage && onNavigateToPage('terapia-ocupacional')}
          >
            <Folder className="w-4 h-4 mr-2" />
            Ir para Terapia Ocupacional
          </Button>
        </div>
      </Modal>

      <Modal id="modal-psicoped" isOpen={activeModal === 'psicoped'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-4xl">👩‍🏫</div>
          </div>
          <h2 className="text-xl font-bold text-purple-600 mb-2">Psicopedagogia</h2>
          <p className="text-gray-800 mb-4 text-center">
            Aborda dificuldades de aprendizagem, fornecendo estratégias e intervenções personalizadas para promover o sucesso escolar e académico.
          </p>
          <ul className="mb-4 text-gray-700 space-y-2 text-sm">
            {therapyCards.find(t => t.id === 'psicoped')?.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => onNavigateToPage && onNavigateToPage('psicopedagogia')}
          >
            <Folder className="w-4 h-4 mr-2" />
            Ir para Psicopedagogia
          </Button>
        </div>
      </Modal>

      <Modal id="modal-clinica" isOpen={activeModal === 'clinica'} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <img src="/logo_ideia.svg" alt="IDEIA Logo" className="h-16 w-auto object-contain" />
          </div>
          <h2 className="text-xl font-bold text-pink-600 mb-2">EIBM IDEIA</h2>
          <p className="text-gray-800 mb-4 text-center">
            Programa especializado em intervenção precoce para crianças com Transtorno do Espectro Autista (TEA), oferecendo suporte abrangente e personalizado.
          </p>
          <ul className="mb-4 text-gray-700 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-pink-500" />
              Avaliação diagnóstica especializada
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-pink-500" />
              Intervenção comportamental intensiva
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-pink-500" />
              Suporte familiar e orientação
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-pink-500" />
              Desenvolvimento de habilidades sociais
            </li>
          </ul>
          <Button 
            className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white"
            onClick={() => onNavigateToPage && onNavigateToPage('ideia')}
          >
            <Folder className="w-4 h-4 mr-2" />
            Ir para EIBM IDEIA
          </Button>
        </div>
      </Modal>
    </div>
  );
}