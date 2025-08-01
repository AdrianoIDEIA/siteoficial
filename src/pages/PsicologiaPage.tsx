import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, BarChart3, TrendingUp, Calendar, PlayCircle, Repeat,
  Award, Compass, Hexagon, Shapes, BookOpen, FileText, Cog, User, Star, ArrowRight, Timer,
  MessageSquare, UserCheck, Home, School, Layers, MapPin, Focus
} from 'lucide-react';

const AnimatedSection = ({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}) => {
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

const DevelopmentTimeline = () => {
  const milestones = [
    { 
      age: '0-12 meses', 
      title: 'Desenvolvimento Social Inicial', 
      description: 'Contato visual, sorriso social, resposta ao nome, imitação básica',
      details: 'Nesta fase, observamos o desenvolvimento das primeiras habilidades sociais: contato visual sustentado, sorriso social responsivo, resposta ao nome e primeiras imitações. Marcos fundamentais para detecção precoce de TEA.',
      teaConsiderations: 'Sinais de alerta: ausência ou redução de contato visual, falta de sorriso social, não resposta ao nome.'
    },
    { 
      age: '12-24 meses', 
      title: 'Comunicação e Interação', 
      description: 'Gestos comunicativos, primeiras palavras, brincadeira social, imitação complexa',
      details: 'Desenvolvimento de gestos comunicativos (apontar, acenar), primeiras palavras funcionais, interesse em brincadeiras sociais e imitação de ações complexas. Período crucial para intervenção precoce.',
      teaConsiderations: 'No TEA: possível atraso na linguagem, gestos limitados, preferência por brincadeiras solitárias, dificuldades de imitação.'
    },
    { 
      age: '2-3 anos', 
      title: 'Linguagem e Brincadeira Simbólica', 
      description: 'Expansão vocabular, frases simples, brincadeira de faz-de-conta, interação com pares',
      details: 'Explosão vocabular, formação de frases simples, desenvolvimento da brincadeira simbólica e interesse crescente em interações com outras crianças. Marcos importantes para avaliação.',
      teaConsiderations: 'No TEA: linguagem pode ser ecolálica, dificuldades em brincadeiras simbólicas, interesses restritos, desafios na interação social.'
    },
    { 
      age: '3-4 anos', 
      title: 'Habilidades Sociais Complexas', 
      description: 'Conversação básica, cooperação, compreensão de regras sociais, autorregulação',
      details: 'Desenvolvimento de conversação básica, capacidade de cooperação, compreensão inicial de regras sociais e autorregulação emocional. Período ideal para intervenção estruturada.',
      teaConsiderations: 'No TEA: dificuldades pragmáticas, necessidade de estrutura externa para autorregulação, desafios na compreensão de regras sociais implícitas.'
    },
    { 
      age: '4-5 anos', 
      title: 'Competências Pré-Escolares', 
      description: 'Habilidades acadêmicas básicas, amizades, flexibilidade cognitiva, independência',
      details: 'Desenvolvimento de habilidades pré-acadêmicas, formação de amizades, flexibilidade cognitiva e crescente independência. Preparação para ambiente escolar.',
      teaConsiderations: 'No TEA: necessidade de suporte para transições, estratégias para desenvolvimento de amizades, trabalho específico em flexibilidade cognitiva.'
    },
    { 
      age: '5+ anos', 
      title: 'Integração Escolar e Social', 
      description: 'Adaptação escolar, competências sociais avançadas, autonomia, autorregulação',
      details: 'Adaptação ao ambiente escolar, desenvolvimento de competências sociais mais complexas, autonomia crescente e autorregulação emocional. Manutenção de ganhos terapêuticos.',
      teaConsiderations: 'No TEA: suporte contínuo para inclusão escolar, desenvolvimento de estratégias de enfrentamento, manutenção de habilidades sociais.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl">
      <motion.h3 
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Marcos do Desenvolvimento Comportamental
      </motion.h3>
      
      {/* Mobile Timeline - Stacked Layout */}
      <div className="block lg:hidden space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="mb-3">
                <Badge className="mb-2 bg-yellow-100 text-yellow-800 text-xs">{milestone.age}</Badge>
                <h4 className="font-bold text-base text-gray-800 mb-1">{milestone.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="text-yellow-600 text-sm font-medium"
                >
                  {activeIndex === index ? 'Ver menos' : 'Ver mais'}
                </button>
                {activeIndex === index && (
                  <motion.div 
                    className="mt-2 pt-2 border-t space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 text-sm">{milestone.details}</p>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-blue-800 text-xs font-medium">Considerações TEA:</p>
                      <p className="text-blue-700 text-xs">{milestone.teaConsiderations}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Timeline - Traditional Layout */}
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-600 rounded-full"></div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <Badge className="mb-2 bg-yellow-100 text-yellow-800">{milestone.age}</Badge>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                  {activeIndex === index && (
                    <motion.div 
                      className="border-t pt-3 space-y-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 text-sm">{milestone.details}</p>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-blue-800 text-xs font-medium mb-1">Considerações TEA:</p>
                        <p className="text-blue-700 text-xs">{milestone.teaConsiderations}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              
              <motion.div 
                className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 relative"
                whileHover={{ scale: 1.3 }}
                animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              >
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PsicologiaPageProps {
  onNavigateHome: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function App({ onNavigateHome, onNavigateToPage }: PsicologiaPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teaCharacteristics = [
    {
      id: 1,
      title: "Comunicação Social",
      description: "Dificuldades na comunicação verbal e não-verbal, reciprocidade social e desenvolvimento de relacionamentos",
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Dificuldades na comunicação não-verbal",
        "Déficits na reciprocidade social",
        "Desafios no desenvolvimento de relacionamentos",
        "Problemas na interpretação de sinais sociais",
        "Intervenção focada em habilidades sociais",
        "Desenvolvimento de comunicação funcional"
      ]
    },
    {
      id: 2,
      title: "Comportamentos Repetitivos",
      description: "Padrões restritos e repetitivos de comportamento, interesses ou atividades",
      icon: <Repeat className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600", 
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Movimentos motores estereotipados",
        "Insistência em rotinas ou rituais",
        "Interesses fixos e intensos",
        "Hiper ou hiporreatividade sensorial",
        "Estratégias de redução de estereotipias",
        "Expansão de interesses e flexibilidade"
      ]
    },
    {
      id: 3,
      title: "Processamento Sensorial",
      description: "Diferenças no processamento de informações sensoriais que afetam o comportamento",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      details: [
        "Hipersensibilidade ou hiposensibilidade",
        "Busca ou evitação sensorial",
        "Dificuldades de integração sensorial",
        "Impacto no comportamento e aprendizagem",
        "Estratégias de regulação sensorial",
        "Adaptações ambientais específicas"
      ]
    },
    {
      id: 4,
      title: "Flexibilidade Cognitiva",
      description: "Dificuldades com mudanças, transições e pensamento flexível",
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      details: [
        "Rigidez cognitiva e comportamental",
        "Dificuldades com mudanças e transições",
        "Pensamento concreto e literal",
        "Resistência a novidades",
        "Desenvolvimento de flexibilidade gradual",
        "Estratégias de preparação para mudanças"
      ]
    }
  ];

  const abaStrategies = [
    {
      title: "Análise Funcional do Comportamento",
      description: "Identificação das funções dos comportamentos para intervenção eficaz",
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A análise funcional identifica os antecedentes, comportamentos e consequências (ABC) para compreender por que comportamentos ocorrem. Esta análise orienta intervenções específicas e baseadas em evidências.",
      techniques: [
        "Coleta de dados comportamentais",
        "Análise de padrões ABC",
        "Identificação de variáveis controladoras",
        "Desenvolvimento de hipóteses funcionais"
      ]
    },
    {
      title: "Reforçamento Diferencial",
      description: "Aumento de comportamentos apropriados através de reforçamento sistemático",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "O reforçamento diferencial fortalece comportamentos desejados enquanto extingue comportamentos inadequados. Utiliza-se reforçadores individualizados baseados nas preferências da criança.",
      techniques: [
        "Identificação de reforçadores eficazes",
        "Cronogramas de reforçamento",
        "Reforçamento de comportamentos incompatíveis",
        "Fading gradual dos reforços"
      ]
    },
    {
      title: "Ensino Estruturado",
      description: "Metodologias sistemáticas para ensino de novas habilidades",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "O ensino estruturado utiliza técnicas como DTT (Discrete Trial Teaching) e NET (Natural Environment Teaching) para ensinar habilidades de forma sistemática e generalizada.",
      techniques: [
        "Discrete Trial Teaching (DTT)",
        "Natural Environment Teaching (NET)",
        "Prompting e fading",
        "Generalização de habilidades"
      ]
    },
    {
      title: "Gestão de Comportamentos Desafiadores",
      description: "Estratégias para redução de comportamentos problemáticos",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Abordagem proativa para prevenir e manejar comportamentos desafiadores, focando na prevenção através de modificação ambiental e ensino de comportamentos alternativos.",
      techniques: [
        "Estratégias preventivas",
        "Ensino de comportamentos alternativos",
        "Modificação ambiental",
        "Protocolos de crise"
      ]
    }
  ];

  const socialSkills = [
    {
      title: "Habilidades de Comunicação",
      description: "Desenvolvimento de comunicação funcional e social",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Desenvolvimento de habilidades comunicativas desde pedidos básicos até conversação complexa, incluindo comunicação verbal e alternativa conforme necessário.",
      skills: [
        "Pedidos (mands)",
        "Nomeação (tacts)",
        "Imitação vocal",
        "Conversação social",
        "Comunicação não-verbal",
        "Sistemas de comunicação alternativa"
      ]
    },
    {
      title: "Interação Social",
      description: "Desenvolvimento de habilidades para interação com pares e adultos",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Ensino sistemático de habilidades sociais desde interações básicas até amizades complexas, incluindo leitura de sinais sociais e reciprocidade.",
      skills: [
        "Contato visual apropriado",
        "Turnos em conversação",
        "Brincadeira cooperativa",
        "Empatia e teoria da mente",
        "Resolução de conflitos",
        "Manutenção de amizades"
      ]
    },
    {
      title: "Autorregulação",
      description: "Desenvolvimento de habilidades de autocontrole e regulação emocional",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Ensino de estratégias para autorregulação emocional, tolerância à frustração e controle de impulsos através de técnicas comportamentais.",
      skills: [
        "Identificação de emoções",
        "Estratégias de relaxamento",
        "Tolerância à frustração",
        "Controle de impulsos",
        "Automonitoramento",
        "Estratégias de enfrentamento"
      ]
    }
  ];

  const familySupport = [
    {
      title: "Treinamento Parental",
      description: "Capacitação de pais e cuidadores em estratégias ABA",
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Treinamento sistemático para pais implementarem estratégias ABA em casa, garantindo consistência e generalização das habilidades aprendidas.",
      components: [
        "Princípios básicos da ABA",
        "Estratégias de reforçamento",
        "Manejo de comportamentos desafiadores",
        "Coleta de dados",
        "Implementação de programas",
        "Resolução de problemas"
      ]
    },
    {
      title: "Consultoria Escolar",
      description: "Suporte para inclusão escolar e adaptações necessárias",
      icon: <School className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Trabalho colaborativo com equipes escolares para implementar estratégias ABA no ambiente educacional, promovendo inclusão efetiva.",
      components: [
        "Avaliação do ambiente escolar",
        "Treinamento de professores",
        "Desenvolvimento de adaptações",
        "Monitoramento de progresso",
        "Suporte em transições",
        "Consultoria contínua"
      ]
    },
    {
      title: "Coordenação Multidisciplinar",
      description: "Integração com outros profissionais da equipe terapêutica",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Coordenação com outros profissionais (TO, Fono, Médicos) para garantir abordagem integrada e coerente no tratamento.",
      components: [
        "Reuniões multidisciplinares",
        "Alinhamento de objetivos",
        "Compartilhamento de dados",
        "Planejamento conjunto",
        "Comunicação efetiva",
        "Avaliação integrada"
      ]
    }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = ['TEA', 'Desenvolvimento', 'ABA', 'Habilidades Sociais', 'Família'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50 flex flex-col">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-orange-200 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Header */}
      <Header onNavigateHome={onNavigateHome} onNavigateToPage={onNavigateToPage} />

      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Psicologia Comportamental Infantil
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-800 bg-clip-text text-transparent">
                    Psicologia TEA
                  </span>
                  <br />
                  <span className="text-gray-800">
                    e ABA
                  </span>
                  <br />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Análise Comportamental Aplicada
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Especializada em Transtorno do Espectro Autista (TEA) e Análise do Comportamento Aplicada (ABA), 
                  nossa abordagem científica e baseada em evidências promove desenvolvimento de habilidades sociais, 
                  comunicativas e comportamentais para crianças e suas famílias.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
                  alt="Psicologia comportamental infantil TEA e ABA"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Puzzle className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-60 shadow-lg flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="w-12 h-12 text-orange-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEA - Características */}
      <section id="tea" className="py-16 sm:py-20 lg:py-24 bg-white relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-blue-100 text-blue-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Puzzle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Transtorno do Espectro Autista
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Compreendendo o TEA
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              O TEA é caracterizado por diferenças na comunicação social e padrões comportamentais. 
              Nossa abordagem foca no desenvolvimento de habilidades e redução de barreiras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {teaCharacteristics.map((characteristic, index) => (
              <motion.div
                key={characteristic.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(characteristic.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-500 h-full ${characteristic.bgColor} border-0 shadow-lg hover:shadow-2xl`}
                  onClick={() => setActiveService(activeService === characteristic.id ? null : characteristic.id)}
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <motion.div 
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br ${characteristic.color} rounded-xl sm:rounded-2xl shadow-lg w-fit`}
                      animate={{ 
                        rotate: hoveredCard === characteristic.id ? 360 : 0,
                        scale: hoveredCard === characteristic.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {characteristic.icon}
                      </div>
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{characteristic.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">{characteristic.description}</CardDescription>
                  </CardHeader>
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeService === characteristic.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        {characteristic.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex}
                            className="flex items-start space-x-2 sm:space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-700">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desenvolvimento Comportamental */}
      <section id="desenvolvimento" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-orange-100 text-orange-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Baby className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Desenvolvimento Comportamental
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Marcos e Considerações TEA
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              Compreendendo o desenvolvimento típico e as particularidades do TEA para 
              intervenção precoce e eficaz
            </p>
          </motion.div>

          <DevelopmentTimeline />

          <motion.div 
            className="mt-16 sm:mt-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Detecção Precoce é Fundamental</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  A identificação precoce de sinais de TEA permite intervenção imediata, 
                  aproveitando a neuroplasticidade cerebral para maximizar o desenvolvimento 
                  de habilidades sociais e comunicativas.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Sinais Precoces</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Identificação de marcos atípicos nos primeiros anos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Intervenção Imediata</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Início de programas ABA intensivos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Neuroplasticidade</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Aproveitamento da capacidade cerebral de mudança</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2ac5?w=600&h=450&fit=crop"
                  alt="Desenvolvimento comportamental infantil"
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABA - Análise do Comportamento Aplicada */}
      <section id="aba" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-green-100 text-green-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Análise do Comportamento Aplicada
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Estratégias ABA Baseadas em Evidências
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              A ABA é uma ciência aplicada que utiliza princípios comportamentais para 
              desenvolver habilidades e reduzir comportamentos desafiadores
            </p>
          </motion.div>

          <div className="space-y-12">
            {abaStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <div className="text-green-600">
                          {strategy.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{strategy.title}</h3>
                        <p className="text-gray-600 text-sm">{strategy.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{strategy.content}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-bold text-green-800 mb-3">Técnicas Utilizadas:</h4>
                    <ul className="space-y-2">
                      {strategy.techniques.map((technique, techIndex) => (
                        <li key={techIndex} className="flex items-start gap-2">
                          <Settings className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-green-700 text-sm">{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades Sociais */}
      <section id="habilidades-sociais" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-purple-100 text-purple-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Habilidades Sociais
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Desenvolvimento Social e Comunicativo
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Ensino sistemático de habilidades sociais, comunicativas e de autorregulação 
              através de metodologias ABA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {socialSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <div className="text-purple-600">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{skill.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{skill.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm">{skill.content}</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2 text-sm">Habilidades Desenvolvidas:</h4>
                      <ul className="space-y-1">
                        {skill.skills.map((skillItem, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-700 text-xs">{skillItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suporte Familiar */}
      <section id="familia" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-orange-100 text-orange-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Suporte Familiar
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Capacitação e Apoio Integral
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Trabalhamos com toda a rede de apoio da criança: família, escola e outros 
              profissionais para garantir consistência e generalização
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {familySupport.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <div className="text-orange-600">
                          {support.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{support.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{support.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm">{support.content}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-2 text-sm">Componentes:</h4>
                      <ul className="space-y-1">
                        {support.components.map((component, componentIndex) => (
                          <li key={componentIndex} className="flex items-start gap-2">
                            <Star className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-700 text-xs">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recapitulação */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-yellow-100 text-yellow-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Síntese
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Psicologia TEA/ABA: Transformando Vidas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
              Síntese das principais abordagens da psicologia comportamental aplicada ao TEA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Compreensão do TEA",
                description: "Entendimento profundo das características do TEA: comunicação social, padrões repetitivos, processamento sensorial e flexibilidade cognitiva.",
                icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                color: "from-blue-50 to-white"
              },
              {
                title: "Desenvolvimento Comportamental",
                description: "Acompanhamento dos marcos de desenvolvimento com foco nas particularidades do TEA e intervenção precoce especializada.",
                icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
                color: "from-orange-50 to-white"
              },
              {
                title: "Metodologia ABA",
                description: "Análise funcional, reforçamento diferencial, ensino estruturado e gestão de comportamentos baseados em evidências científicas.",
                icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
                color: "from-green-50 to-white"
              },
              {
                title: "Habilidades Sociais",
                description: "Desenvolvimento sistemático de comunicação, interação social e autorregulação através de estratégias ABA personalizadas.",
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                color: "from-purple-50 to-white"
              },
              {
                title: "Suporte Familiar",
                description: "Capacitação de pais, consultoria escolar e coordenação multidisciplinar para garantir consistência e generalização.",
                icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />,
                color: "from-yellow-50 to-white"
              },
              {
                title: "Abordagem Científica",
                description: "Intervenções baseadas em evidências, coleta de dados sistemática e ajustes contínuos para maximizar resultados.",
                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
                color: "from-indigo-50 to-white"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full shadow-lg border-0 bg-gradient-to-br ${item.color}`}>
                  <CardHeader>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                      {item.icon}
                    </div>
                    <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Transformando Potenciais em Realizações
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem em psicologia comportamental aplicada ao TEA é baseada em evidências científicas 
              e foca no desenvolvimento integral da criança e sua família. Através da ABA, promovemos o 
              desenvolvimento de habilidades sociais, comunicativas e comportamentais que transformam 
              potenciais em realizações concretas. Cada conquista, por menor que seja, representa um 
              passo significativo na jornada de inclusão e desenvolvimento pleno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para Iniciar a Jornada ABA?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Inicie uma avaliação comportamental especializada e descubra como a ABA pode 
              transformar o desenvolvimento do seu filho através de evidências científicas.
            </p>
            <motion.button
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="w-5 h-5" />
              Avaliação Comportamental
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer
        specialtyName="EIBM Psicologia TEA/ABA"
        specialtyDescription="Comportamental Aplicada"
        specialtyIcon={<Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
        areas={[
          "Transtorno do Espectro Autista",
          "Análise Comportamental Aplicada",
          "Habilidades Sociais",
          "Comunicação Funcional",
          "Autorregulação"
        ]}
        treatments={[
          "Análise Funcional",
          "Reforçamento Diferencial",
          "Ensino Estruturado",
          "Coleta de Dados",
          "Treinamento Parental"
        ]}
        aboutText="Especialistas em desenvolvimento comportamental com abordagem científica e humanizada para crianças no espectro autista."
      />
    </div>
  );
}