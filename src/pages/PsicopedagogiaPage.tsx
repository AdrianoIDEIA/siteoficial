import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, Calculator, PenTool, Focus, Layers, MapPin, Clock,
  Award, Compass, Hexagon, Shapes, BookOpen, FileText, Cog, User, Star, ArrowRight, ArrowLeft
} from 'lucide-react';

interface PsicopedagogiaPageProps {
  onNavigateHome: () => void;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", delay = 0 }) => {
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
      age: '0-2 anos', 
      title: 'Desenvolvimento Sensório-Motor', 
      description: 'Sustentação corporal, coordenação básica, primeiras explorações cognitivas',
      details: 'Nesta fase, observamos o desenvolvimento da coordenação motora básica, capacidade de sustentar o corpo e as primeiras explorações do ambiente. Essencial para bases futuras da aprendizagem.'
    },
    { 
      age: '2-4 anos', 
      title: 'Desenvolvimento Cognitivo Inicial', 
      description: 'Reconhecimento de formas, cores, números básicos, desenvolvimento da linguagem',
      details: 'Período crucial para o desenvolvimento da linguagem, reconhecimento de formas geométricas, cores primárias e conceitos numéricos básicos. Fundamento para habilidades acadêmicas posteriores.'
    },
    { 
      age: '4-6 anos', 
      title: 'Pré-Escolar e Prontidão', 
      description: 'Desenvolvimento da atenção, coordenação motora fina, habilidades pré-acadêmicas',
      details: 'Desenvolvimento da atenção sustentada, coordenação motora fina para escrita, consciência fonológica e habilidades pré-matemáticas. Preparação para educação formal.'
    },
    { 
      age: '6-8 anos', 
      title: 'Alfabetização e Numeracia', 
      description: 'Aprendizagem formal da leitura, escrita e matemática básica',
      details: 'Período crítico para alfabetização e desenvolvimento de competências matemáticas básicas. Identificação precoce de dificuldades é fundamental nesta fase.'
    },
    { 
      age: '8-12 anos', 
      title: 'Consolidação das Aprendizagens', 
      description: 'Fluência em leitura, escrita e cálculo, desenvolvimento de estratégias de estudo',
      details: 'Consolidação das habilidades acadêmicas básicas, desenvolvimento de estratégias de estudo e pensamento mais abstrato. Período importante para intervenção em dificuldades específicas.'
    },
    { 
      age: '12+ anos', 
      title: 'Aprendizagem Complexa', 
      description: 'Pensamento abstrato, planejamento avançado, autonomia nos estudos',
      details: 'Desenvolvimento de pensamento abstrato, capacidades de planejamento e organização avançadas, autonomia crescente nos estudos e preparação para desafios acadêmicos complexos.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl">
      <motion.h3 
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Marcos do Desenvolvimento da Aprendizagem
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
                <Badge className="mb-2 bg-purple-100 text-purple-800 text-xs">{milestone.age}</Badge>
                <h4 className="font-bold text-base text-gray-800 mb-1">{milestone.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="text-purple-600 text-sm font-medium"
                >
                  {activeIndex === index ? 'Ver menos' : 'Ver mais'}
                </button>
                {activeIndex === index && (
                  <motion.p 
                    className="text-gray-700 text-sm mt-2 pt-2 border-t"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {milestone.details}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Timeline - Traditional Layout */}
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
        
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
                  <Badge className="mb-2 bg-purple-100 text-purple-800">{milestone.age}</Badge>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                  {activeIndex === index && (
                    <motion.p 
                      className="text-gray-700 text-sm border-t pt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.details}
                    </motion.p>
                  )}
                </motion.div>
              </div>
              
              <motion.div 
                className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 relative"
                whileHover={{ scale: 1.3 }}
                animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              >
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-purple-400 rounded-full"
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

export default function PsicopedagogiaPage({ onNavigateHome }: PsicopedagogiaPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const learningDifficulties = [
    {
      id: 1,
      title: "Dislexia",
      description: "Transtorno que afeta a leitura e a escrita, manifestando-se em trocas de letras e dificuldades na interpretação",
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Dificuldades na decodificação de palavras",
        "Trocas de letras e inversões",
        "Problemas de fluência na leitura",
        "Dificuldades na compreensão textual",
        "Estratégias compensatórias personalizadas",
        "Fortalecimento das habilidades fonológicas"
      ]
    },
    {
      id: 2,
      title: "Discalculia",
      description: "Dificuldade específica na aprendizagem matemática, afetando conceitos numéricos e operações",
      icon: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Dificuldades com conceitos numéricos",
        "Problemas em operações matemáticas",
        "Dificuldades de raciocínio lógico",
        "Problemas com sequências numéricas",
        "Estratégias visuais e concretas",
        "Desenvolvimento do pensamento matemático"
      ]
    },
    {
      id: 3,
      title: "Disgrafia",
      description: "Transtorno que afeta a escrita, manifestando-se em dificuldades motoras e de organização textual",
      icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      details: [
        "Dificuldades na coordenação motora fina",
        "Problemas na organização espacial",
        "Letra ilegível ou irregular",
        "Dificuldades na estruturação textual",
        "Exercícios de coordenação motora",
        "Estratégias de organização da escrita"
      ]
    },
    {
      id: 4,
      title: "TDAH",
      description: "Transtorno do Déficit de Atenção com Hiperatividade, afetando concentração e controle de impulsos",
      icon: <Focus className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      details: [
        "Dificuldades de atenção e concentração",
        "Hiperatividade e impulsividade",
        "Problemas de organização",
        "Dificuldades no controle executivo",
        "Estratégias de autorregulação",
        "Técnicas de foco e concentração"
      ]
    }
  ];

  const interventionStrategies = [
    {
      id: 1,
      title: "Avaliação Psicopedagógica",
      description: "Diagnóstico completo das dificuldades de aprendizagem",
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      details: [
        "Anamnese detalhada",
        "Testes psicopedagógicos",
        "Observação do comportamento",
        "Análise da produção escolar",
        "Relatório diagnóstico",
        "Plano de intervenção personalizado"
      ]
    },
    {
      id: 2,
      title: "Estratégias de Estudo",
      description: "Desenvolvimento de métodos eficazes de aprendizagem",
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
      details: [
        "Técnicas de memorização",
        "Organização do tempo de estudo",
        "Mapas mentais e esquemas",
        "Estratégias de leitura",
        "Métodos de revisão",
        "Desenvolvimento da autonomia"
      ]
    },
    {
      id: 3,
      title: "Adaptações Curriculares",
      description: "Modificações no processo de ensino-aprendizagem",
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
      details: [
        "Adequação de atividades",
        "Modificação de avaliações",
        "Recursos pedagógicos especiais",
        "Tempo adicional para tarefas",
        "Orientação à equipe escolar",
        "Acompanhamento do progresso"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={onNavigateHome}
                className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Psicopedagogia</h1>
                <p className="text-sm text-gray-600">Desenvolvimento da Aprendizagem</p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Psicopedagogia
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Especializada
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Abordagem de dificuldades de aprendizagem, fornecendo estratégias e intervenções personalizadas para promover o sucesso escolar e acadêmico.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Learning Difficulties */}
      <AnimatedSection className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Dificuldades de Aprendizagem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Identificação e intervenção em transtornos específicos da aprendizagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {learningDifficulties.map((difficulty, index) => (
              <motion.div
                key={difficulty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${difficulty.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(difficulty.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${difficulty.color} text-white inline-flex mb-4`}>
                  {difficulty.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {difficulty.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {difficulty.description}
                </p>
                <ul className="space-y-2">
                  {difficulty.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Development Timeline */}
      <AnimatedSection className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevelopmentTimeline />
        </div>
      </AnimatedSection>

      {/* Intervention Strategies */}
      <AnimatedSection className="py-12 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Estratégias de Intervenção
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Abordagens especializadas para superar dificuldades de aprendizagem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {interventionStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${strategy.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${strategy.color} text-white inline-flex mb-4`}>
                  {strategy.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {strategy.description}
                </p>
                <ul className="space-y-2">
                  {strategy.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
