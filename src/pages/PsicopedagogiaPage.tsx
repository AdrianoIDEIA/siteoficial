import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StandardHeader } from '../components/StandardHeader';
import Footer from '../components/Footer';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, Calculator, PenTool, Focus, Layers, MapPin, Clock,
  Award, Compass, Hexagon, Shapes, BookOpen, FileText, Cog, User, Star, ArrowRight
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

interface PsicopedagogiaPageProps {
  onNavigateHome: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function PsicopedagogiaPage({ onNavigateHome, onNavigateToPage }: PsicopedagogiaPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      description: "Transtorno que afeta o raciocínio matemático e a compreensão de conceitos numéricos",
      icon: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600", 
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Dificuldades na identificação de números",
        "Problemas com conceitos matemáticos básicos",
        "Dificuldades na realização de cálculos",
        "Abordagens lúdicas e concretas",
        "Construção do pensamento lógico-matemático",
        "Estratégias visuais e manipulativas"
      ]
    },
    {
      id: 3,
      title: "Disgrafia",
      description: "Transtorno que afeta a coordenação motora fina, resultando em dificuldades na escrita",
      icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      details: [
        "Escrita ilegível ou traços irregulares",
        "Dificuldades na coordenação motora fina",
        "Problemas de organização espacial",
        "Desenvolvimento da motricidade fina",
        "Exercícios de caligrafia terapêutica",
        "Adaptações e recursos assistivos"
      ]
    },
    {
      id: 4,
      title: "TDAH e Dificuldades Atencionais",
      description: "Transtorno que afeta atenção, concentração e controle inibitório",
      icon: <Focus className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      details: [
        "Dificuldades de concentração e foco",
        "Impulsividade e hiperatividade",
        "Problemas de organização e planejamento",
        "Estratégias de autorregulação",
        "Desenvolvimento de rotinas estruturadas",
        "Técnicas de manejo da atenção"
      ]
    }
  ];

  const cognitiveSkills = [
    {
      title: "Flexibilidade Cognitiva",
      description: "Capacidade de adaptar-se a novas situações e encontrar soluções alternativas",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A flexibilidade cognitiva é crucial para quebrar a rigidez mental, permitindo que a criança se adapte a mudanças e busque diferentes estratégias para resolver problemas. Trabalhamos esta habilidade através de atividades que desafiam o pensamento linear e promovem a criatividade.",
      techniques: [
        "Jogos de categorização flexível",
        "Atividades de resolução de problemas",
        "Exercícios de mudança de perspectiva",
        "Brincadeiras que envolvem regras variáveis"
      ]
    },
    {
      title: "Planejamento e Organização",
      description: "Desenvolvimento de habilidades executivas para organizar tarefas e alcançar objetivos",
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "O planejamento é fundamental para o sucesso acadêmico e social. Ensinamos estratégias para organizar informações, estabelecer prioridades e seguir sequências lógicas para completar tarefas complexas.",
      techniques: [
        "Mapas mentais e organizadores gráficos",
        "Técnicas de gestão de tempo",
        "Estratégias de divisão de tarefas",
        "Desenvolvimento de rotinas estruturadas"
      ]
    },
    {
      title: "Memória e Processamento",
      description: "Fortalecimento da memória de trabalho e estratégias de retenção",
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A memória de trabalho é essencial para o processamento de informações durante as tarefas de aprendizagem. Desenvolvemos estratégias para melhorar a retenção e recuperação de informações.",
      techniques: [
        "Técnicas de memorização e mnemônicos",
        "Exercícios de memória sequencial",
        "Estratégias de associação e visualização",
        "Atividades de memória auditiva e visual"
      ]
    },
    {
      title: "Regulação Emocional",
      description: "Desenvolvimento de habilidades para gerenciar emoções durante o aprendizado",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A regulação emocional é fundamental para um ambiente de aprendizagem eficaz. Trabalhamos o reconhecimento e manejo de emoções, especialmente ansiedade e frustração relacionadas às dificuldades acadêmicas.",
      techniques: [
        "Técnicas de respiração e relaxamento",
        "Estratégias de autoaceitação",
        "Desenvolvimento de autoconfiança",
        "Manejo da ansiedade de desempenho"
      ]
    }
  ];

  const interventionStrategies = [
    {
      title: "Avaliação Psicopedagógica",
      description: "Diagnóstico completo das dificuldades e potencialidades",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Realizamos uma avaliação abrangente que inclui análise das habilidades cognitivas, acadêmicas, emocionais e comportamentais. Esta avaliação orienta o plano de intervenção personalizado.",
      process: [
        "Anamnese detalhada com família e escola",
        "Aplicação de testes padronizados",
        "Observação comportamental estruturada",
        "Análise de produções escolares",
        "Relatório diagnóstico completo"
      ]
    },
    {
      title: "Intervenção Individualizada",
      description: "Plano terapêutico adaptado às necessidades específicas",
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Cada criança recebe um plano de intervenção único, baseado em suas dificuldades específicas e estilo de aprendizagem. Adaptamos metodologias e recursos conforme o perfil individual.",
      process: [
        "Definição de objetivos específicos",
        "Seleção de estratégias adequadas",
        "Adaptação de material didático",
        "Monitoramento contínuo do progresso",
        "Ajustes periódicos no plano"
      ]
    },
    {
      title: "Parceria Família-Escola",
      description: "Trabalho colaborativo para potencializar resultados",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A colaboração entre família, escola e psicopedagogo é essencial. Orientamos pais e professores sobre estratégias específicas para apoiar o desenvolvimento da criança em diferentes ambientes.",
      process: [
        "Orientação parental estruturada",
        "Consultoria escolar especializada",
        "Reuniões multidisciplinares",
        "Capacitação de educadores",
        "Acompanhamento conjunto"
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

  const navItems = ['Dificuldades', 'Desenvolvimento', 'Habilidades Cognitivas', 'Intervenção', 'Vínculo'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 flex flex-col">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-200 rounded-full opacity-20"
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
          className="absolute top-1/3 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-pink-200 rounded-full opacity-20"
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
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="psicopedagogia"
      />

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
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Especialidade em Aprendizagem
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                    Psicopedagogia
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Desvendando o
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Potencial da Aprendizagem
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Na EIBM, a psicopedagogia é a chave para transformar desafios em descobertas. 
                  Através de uma abordagem que integra aspectos emocionais e comportamentais, 
                  estimulamos habilidades essenciais como planejamento, criatividade, memória e flexibilidade cognitiva.
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
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop"
                  alt="Psicopedagogia e aprendizagem"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
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
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60 shadow-lg flex items-center justify-center"
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
                <Brain className="w-12 h-12 text-pink-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dificuldades de Aprendizagem */}
      <section id="dificuldades" className="py-16 sm:py-20 lg:py-24 bg-white relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-purple-100 text-purple-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Dificuldades de Aprendizagem
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Compreender para Superar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              A identificação precoce e a intervenção especializada são cruciais para apoiar 
              crianças com transtornos que afetam o aprendizado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {learningDifficulties.map((difficulty, index) => (
              <motion.div
                key={difficulty.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(difficulty.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-500 h-full ${difficulty.bgColor} border-0 shadow-lg hover:shadow-2xl`}
                  onClick={() => setActiveService(activeService === difficulty.id ? null : difficulty.id)}
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <motion.div 
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br ${difficulty.color} rounded-xl sm:rounded-2xl shadow-lg w-fit`}
                      animate={{ 
                        rotate: hoveredCard === difficulty.id ? 360 : 0,
                        scale: hoveredCard === difficulty.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {difficulty.icon}
                      </div>
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{difficulty.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">{difficulty.description}</CardDescription>
                  </CardHeader>
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeService === difficulty.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        {difficulty.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex}
                            className="flex items-start space-x-2 sm:space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0 mt-0.5" />
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

      {/* Desenvolvimento */}
      <section id="desenvolvimento" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-pink-100 text-pink-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Baby className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Desenvolvimento da Aprendizagem
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Marcos e Intervenção Precoce
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              Observar os marcos do desenvolvimento e agir precocemente são passos cruciais 
              para garantir o pleno potencial de cada criança
            </p>
          </motion.div>

          <DevelopmentTimeline />

          <motion.div 
            className="mt-16 sm:mt-20 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Importância da Intervenção Precoce</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  A intervenção precoce é vital para identificar e tratar possíveis atrasos, 
                  maximizando as chances de um desenvolvimento saudável. Observar a capacidade 
                  de sustentar o corpo, reconhecer números e diferenciar formas e cores são 
                  exemplos de marcos importantes.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Observação Atenta</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Identificação precoce de sinais de dificuldade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Intervenção Direcionada</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Estratégias específicas para cada necessidade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Maximização do Potencial</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Desenvolvimento pleno das capacidades individuais</p>
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
                  src="https://images.unsplash.com/photo-1584952449397-da4b2b6c0ce2?w=600&h=450&fit=crop"
                  alt="Desenvolvimento infantil e intervenção precoce"
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Habilidades Cognitivas */}
      <section id="habilidades-cognitivas" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-blue-100 text-blue-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Habilidades Cognitivas
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Desenvolvimento de Habilidades Essenciais
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Trabalhamos ativamente no desenvolvimento de habilidades cognitivas fundamentais 
              para o sucesso acadêmico e social
            </p>
          </motion.div>

          <div className="space-y-12">
            {cognitiveSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <div className="text-blue-600">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                        <p className="text-gray-600 text-sm">{skill.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{skill.content}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-bold text-blue-800 mb-3">Técnicas Utilizadas:</h4>
                    <ul className="space-y-2">
                      {skill.techniques.map((technique, techIndex) => (
                        <li key={techIndex} className="flex items-start gap-2">
                          <Cog className="w-3 h-3 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-blue-700 text-sm">{technique}</span>
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

      {/* Intervenção */}
      <section id="intervencao" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-green-100 text-green-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Intervenção Psicopedagógica
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Estratégias e Abordagens
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Nossa intervenção é personalizada, focando nas necessidades individuais de cada criança
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {interventionStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <div className="text-green-600">
                          {strategy.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{strategy.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{strategy.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm">{strategy.content}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">Processo:</h4>
                      <ul className="space-y-1">
                        {strategy.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-green-700 text-xs">{step}</span>
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

      {/* Vínculo e Confiança */}
      <section id="vinculo" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-purple-100 text-purple-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Vínculo e Confiança
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              A Base da Intervenção
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Construir um ambiente seguro e de confiança é o ponto de partida para qualquer 
              processo terapêutico eficaz
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=450&fit=crop"
                alt="Vínculo terapêutico em psicopedagogia"
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
              />
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Importância do Vínculo Terapêutico</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      O vínculo entre o psicopedagogo e a criança é fundamental para o sucesso da intervenção. 
                      Criamos um ambiente de confiança e segurança onde a criança se sente à vontade para 
                      explorar, errar e aprender.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-100 rounded-full flex-shrink-0">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Abordagem Personalizada e Colaborativa</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Adaptamos as atividades às necessidades de cada criança, respeitando seu ritmo e estilo. 
                      A comunicação contínua com família e escola é essencial para promover um trabalho 
                      conjunto e eficaz.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Psicopedagogia: Transformando Desafios em Descobertas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
              Síntese das principais abordagens e estratégias da psicopedagogia na EIBM
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Dificuldades Específicas",
                description: "Abordagem especializada para dislexia, discalculia, disgrafia e TDAH, com estratégias personalizadas para cada transtorno de aprendizagem.",
                icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                color: "from-purple-50 to-white"
              },
              {
                title: "Desenvolvimento Cognitivo",
                description: "Acompanhamento dos marcos de desenvolvimento da aprendizagem, com intervenção precoce para maximizar o potencial de cada criança.",
                icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                color: "from-blue-50 to-white"
              },
              {
                title: "Habilidades Executivas",
                description: "Desenvolvimento de flexibilidade cognitiva, planejamento, memória de trabalho e regulação emocional para o sucesso acadêmico.",
                icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
                color: "from-green-50 to-white"
              },
              {
                title: "Intervenção Personalizada",
                description: "Avaliação psicopedagógica completa seguida de plano de intervenção individualizado, adaptado às necessidades específicas.",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
                color: "from-orange-50 to-white"
              },
              {
                title: "Vínculo Terapêutico",
                description: "Construção de ambiente seguro e de confiança, fundamental para o processo de aprendizagem e desenvolvimento.",
                icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
                color: "from-pink-50 to-white"
              },
              {
                title: "Trabalho Colaborativo",
                description: "Parceria entre psicopedagogo, família e escola para garantir continuidade e eficácia da intervenção em todos os ambientes.",
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
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
            className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Desvendando o Potencial de Cada Criança
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A psicopedagogia na EIBM é uma jornada de descobertas, onde cada desafio se transforma 
              em oportunidade de crescimento. Através de uma abordagem científica e humanizada, 
              desenvolvemos as habilidades cognitivas essenciais para o sucesso acadêmico e pessoal. 
              Cada criança é única, e nossa missão é desvendar e potencializar suas capacidades 
              individuais, construindo um futuro de possibilidades ilimitadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para Desvendar o Potencial de Aprendizagem do seu Filho?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma avaliação psicopedagógica e descubra como podemos construir um caminho 
              de sucesso e confiança para o desenvolvimento educacional da sua criança.
            </p>
            <motion.button
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="w-5 h-5" />
              Agendar Avaliação
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer
        specialtyName="EIBM Psicopedagogia"
        specialtyDescription="Desvendando Potenciais"
        specialtyIcon={<GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
        areas={[
          "Dislexia",
          "Discalculia",
          "Disgrafia",
          "TDAH",
          "Dificuldades Atencionais"
        ]}
        treatments={[
          "Flexibilidade Cognitiva",
          "Planejamento",
          "Memória de Trabalho",
          "Regulação Emocional",
          "Organização"
        ]}
        aboutText="Especialistas em desenvolvimento de potenciais de aprendizagem, com abordagem científica e humanizada para cada criança."
      />
    </div>
  );
}