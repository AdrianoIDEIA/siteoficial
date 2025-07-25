import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, BarChart3, TrendingUp, Calendar, PlayCircle, Repeat,
  Award, Compass, Hexagon, Shapes, BookOpen, FileText, Cog, User, Star, ArrowRight, Timer,
  MessageSquare, UserCheck, Home, School, Layers, MapPin, Focus, ArrowLeft
} from 'lucide-react';

interface PsicologiaPageProps {
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

export default function PsicologiaPage({ onNavigateHome }: PsicologiaPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teaCharacteristics = [
    {
      id: 1,
      title: "Comunicação Social",
      description: "Dificuldades persistentes na comunicação e interação social",
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Dificuldades na reciprocidade socioemocional",
        "Déficits em comportamentos comunicativos não verbais",
        "Dificuldades para desenvolver e manter relacionamentos",
        "Problemas com contato visual e expressões faciais",
        "Dificuldades na compreensão de gestos e linguagem corporal"
      ]
    },
    {
      id: 2,
      title: "Padrões Restritos e Repetitivos",
      description: "Comportamentos, interesses ou atividades restritos e repetitivos",
      icon: <Repeat className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Movimentos motores ou fala estereotipados",
        "Insistência em rotinas e rituais",
        "Interesses fixos e altamente restritos",
        "Hiper ou hiporreatividade sensorial",
        "Resistência a mudanças no ambiente"
      ]
    }
  ];

  const interventionApproaches = [
    {
      id: 1,
      title: "Análise do Comportamento Aplicada (ABA)",
      description: "Abordagem científica baseada em evidências para modificação comportamental",
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      details: [
        "Análise funcional do comportamento",
        "Ensino estruturado de habilidades",
        "Reforçamento positivo sistemático",
        "Coleta de dados objetivos",
        "Generalização de aprendizagens",
        "Redução de comportamentos inadequados"
      ]
    },
    {
      id: 2,
      title: "Terapia Cognitivo-Comportamental",
      description: "Abordagem focada em pensamentos, sentimentos e comportamentos",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
      details: [
        "Identificação de padrões de pensamento",
        "Desenvolvimento de estratégias de enfrentamento",
        "Regulação emocional",
        "Resolução de problemas",
        "Habilidades sociais",
        "Autoconhecimento e autoestima"
      ]
    },
    {
      id: 3,
      title: "Intervenção Precoce",
      description: "Programas especializados para crianças pequenas",
      icon: <Baby className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      details: [
        "Estimulação do desenvolvimento",
        "Envolvimento familiar",
        "Atividades lúdicas terapêuticas",
        "Desenvolvimento de comunicação",
        "Habilidades sociais básicas",
        "Preparação para inclusão escolar"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
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
                <h1 className="text-xl font-bold text-gray-800">Psicologia</h1>
                <p className="text-sm text-gray-600">Desenvolvimento Comportamental</p>
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
              Psicologia Infantil
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Especializada
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Desenvolvimento emocional, comportamental e social através de técnicas baseadas em evidências como ABA e terapia cognitivo-comportamental.
            </motion.p>
          </div>
        </div>
      </section>

      {/* TEA Characteristics */}
      <AnimatedSection className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Características do TEA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compreendendo os principais aspectos do Transtorno do Espectro Autista
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {teaCharacteristics.map((characteristic, index) => (
              <motion.div
                key={characteristic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${characteristic.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(characteristic.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${characteristic.color} text-white flex-shrink-0`}>
                    {characteristic.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {characteristic.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      {characteristic.description}
                    </p>
                    <ul className="space-y-2">
                      {characteristic.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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

      {/* Intervention Approaches */}
      <AnimatedSection className="py-12 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Abordagens de Intervenção
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Métodos baseados em evidências para o desenvolvimento comportamental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {interventionApproaches.map((approach, index) => (
              <motion.div
                key={approach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${approach.bgColor} p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${approach.color} text-white inline-flex mb-4`}>
                  {approach.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {approach.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {approach.description}
                </p>
                <ul className="space-y-2">
                  {approach.details.map((detail, idx) => (
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
