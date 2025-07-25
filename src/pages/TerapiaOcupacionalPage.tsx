import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, ArrowLeft
} from 'lucide-react';

interface TerapiaOcupacionalPageProps {
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
      age: '0-3 meses', 
      title: 'Controle Cervical', 
      description: 'Desenvolvimento do controle da cabeça e pescoço, primeiro marco motor fundamental',
      details: 'Nesta fase, observamos se o bebê consegue levantar e sustentar a cabeça quando está de bruços. É essencial para o desenvolvimento visual e motor posterior.'
    },
    { 
      age: '4-6 meses', 
      title: 'Sentar com Apoio', 
      description: 'Capacidade de se manter sentado com suporte, desenvolvendo estabilidade postural',
      details: 'O bebê deve conseguir se manter sentado com apoio das mãos. Importante para exploração visual do ambiente e manipulação de objetos.'
    },
    { 
      age: '6-9 meses', 
      title: 'Engatinhar', 
      description: 'Mobilidade independente através do engatinhar, explorando o ambiente',
      details: 'Nem todas as crianças engatinham, mas é importante para coordenação bilateral e planejamento motor. Permite exploração ativa do ambiente.'
    },
    { 
      age: '9-12 meses', 
      title: 'Ficar em Pé', 
      description: 'Capacidade de se manter em pé com apoio, preparando para a marcha',
      details: 'A criança consegue se apoiar em móveis para ficar em pé. Desenvolve força muscular e equilíbrio necessários para caminhar.'
    },
    { 
      age: '12-18 meses', 
      title: 'Primeiros Passos', 
      description: 'Início da marcha independente, grande marco do desenvolvimento motor',
      details: 'A marcha independente representa um marco fundamental. Abre possibilidades para exploração mais ampla e desenvolvimento de habilidades complexas.'
    },
    { 
      age: '18+ meses', 
      title: 'Exploração Ativa', 
      description: 'Desenvolvimento de habilidades motoras complexas e coordenação refinada',
      details: 'Fase de refinamento motor: correr, pular, subir escadas, manipulação fina para desenhar, empilhar blocos e atividades mais complexas.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl">
      <motion.h3 
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Marcos do Desenvolvimento Motor
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
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-blue-100 text-blue-800 text-xs">{milestone.age}</Badge>
                  <h4 className="font-bold text-base text-gray-800 mb-1">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                  <button 
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    className="text-blue-600 text-sm font-medium"
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Timeline - Traditional Layout */}
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
        
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
                  <Badge className="mb-2 bg-blue-100 text-blue-800">{milestone.age}</Badge>
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
                className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 relative"
                whileHover={{ scale: 1.3 }}
                animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              >
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-blue-400 rounded-full"
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

export default function TerapiaOcupacionalPage({ onNavigateHome }: TerapiaOcupacionalPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fundamentalConcepts = [
    {
      id: 1,
      title: "O que faz um Terapeuta Ocupacional?",
      description: "O terapeuta ocupacional trabalha com pessoas para desenvolver, recuperar ou manter habilidades necessárias para atividades cotidianas",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Avalia as capacidades funcionais da pessoa",
        "Desenvolve estratégias para superar limitações",
        "Adapta atividades e ambientes conforme necessário",
        "Promove independência e qualidade de vida",
        "Trabalha com prevenção e reabilitação"
      ]
    },
    {
      id: 2,
      title: "Quando procurar um Terapeuta Ocupacional?",
      description: "Diversas situações podem indicar a necessidade de terapia ocupacional",
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-green-600", 
      bgColor: "bg-green-50 hover:bg-green-100",
      details: [
        "Dificuldades em atividades da vida diária",
        "Problemas de coordenação motora",
        "Dificuldades de atenção e concentração",
        "Atrasos no desenvolvimento infantil",
        "Necessidades de adaptação após lesões",
        "Questões de integração sensorial"
      ]
    },
    {
      id: 3,
      title: "Áreas de Atuação",
      description: "A terapia ocupacional atua em diversas áreas do desenvolvimento humano",
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Coordenação motora fina e global",
        "Integração sensorial",
        "Atividades da vida diária",
        "Desenvolvimento postural",
        "Habilidades de escrita",
        "Regulação emocional"
      ]
    }
  ];

  const therapeuticActivities = [
    {
      id: 1,
      title: "Atividades Motoras",
      description: "Desenvolvimento da coordenação e força muscular",
      icon: <Hand className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
      details: [
        "Exercícios de coordenação motora fina",
        "Atividades de força e resistência",
        "Treino de equilíbrio e postura",
        "Coordenação bilateral",
        "Planejamento motor",
        "Propriocepção e consciência corporal"
      ]
    },
    {
      id: 2,
      title: "Integração Sensorial",
      description: "Processamento e organização das informações sensoriais",
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
      details: [
        "Estimulação vestibular",
        "Atividades proprioceptivas",
        "Processamento tátil",
        "Integração visual-motora",
        "Modulação sensorial",
        "Autorregulação sensorial"
      ]
    },
    {
      id: 3,
      title: "Atividades da Vida Diária",
      description: "Desenvolvimento de autonomia e independência",
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      details: [
        "Alimentação independente",
        "Higiene pessoal",
        "Vestir e despir roupas",
        "Organização pessoal",
        "Habilidades domésticas",
        "Mobilidade funcional"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
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
                <h1 className="text-xl font-bold text-gray-800">Terapia Ocupacional</h1>
                <p className="text-sm text-gray-600">Desenvolvimento Motor e Sensorial</p>
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
              Terapia Ocupacional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Especializada
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Auxilia no desenvolvimento de habilidades necessárias para atividades diárias, trabalhando coordenação motora, integração sensorial e autonomia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Fundamental Concepts */}
      <AnimatedSection className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Conceitos Fundamentais
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compreendendo a terapia ocupacional e suas aplicações
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {fundamentalConcepts.map((concept, index) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${concept.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(concept.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${concept.color} text-white inline-flex mb-4`}>
                  {concept.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {concept.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {concept.description}
                </p>
                <ul className="space-y-2">
                  {concept.details.map((detail, idx) => (
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

      {/* Therapeutic Activities */}
      <AnimatedSection className="py-12 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Atividades Terapêuticas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Abordagens especializadas para o desenvolvimento motor e sensorial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {therapeuticActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${activity.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${activity.color} text-white inline-flex mb-4`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {activity.description}
                </p>
                <ul className="space-y-2">
                  {activity.details.map((detail, idx) => (
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
