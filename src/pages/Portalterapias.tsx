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

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="terapias"
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
                  className={`bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition-all group border-2 border-transparent hover:border-${therapy.color}-600 col-span-1 w-full h-full min-h-[140px]`}
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
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center col-span-2 md:col-span-2 md:row-start-3 w-full h-full min-h-[140px] hover:shadow-xl transition-all group border-2 border-transparent hover:border-blue-600"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center space-x-2 mb-2 group-hover:scale-110 transition-transform">
                  <img src="/logo_ideia.svg" alt="IDEIA Logo" className="h-10 w-auto object-contain" />
                </div>
                <span className="font-bold text-center group-hover:text-blue-800 transition-colors">
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