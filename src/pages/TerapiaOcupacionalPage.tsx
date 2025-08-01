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
  Smile, TreePine, Flower2, Menu, X
} from 'lucide-react';

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
        Marcos do Desenvolvimento Infantil
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

interface TerapiaOcupacionalPageProps {
  onNavigateHome: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function TerapiaOcupacionalPage({ onNavigateHome, onNavigateToPage }: TerapiaOcupacionalPageProps) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
      title: "TO vs Fisioterapia: Qual a diferença?",
      description: "Embora complementares, TO e fisioterapia têm focos distintos",
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Fisioterapia: foco na função muscular e movimento",
        "TO: foco na funcionalidade para atividades diárias",
        "Fisio trabalha força, amplitude, postura",
        "TO trabalha adaptação e independência funcional",
        "Ambas podem se complementar no tratamento"
      ]
    },
    {
      id: 4,
      title: "Quais problemas a TO trata?",
      description: "Amplo espectro de condições podem se beneficiar da terapia ocupacional",
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      details: [
        "Transtornos do desenvolvimento (TEA, TDAH)",
        "Lesões neurológicas (AVC, TCE)",
        "Problemas de saúde mental",
        "Lesões ortopédicas",
        "Dificuldades de aprendizagem",
        "Problemas geriátricos"
      ]
    }
  ];

  const autismSupport = [
    {
      title: "Como a TO ajuda crianças com autismo?",
      description: "Abordagem individualizada respeitando as necessidades únicas de cada criança",
      icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A TO trabalha com crianças autistas focando no desenvolvimento de habilidades sociais, comunicativas e de vida diária, sempre respeitando suas características individuais e utilizando seus interesses como motivação para o aprendizado."
    },
    {
      title: "Integração Sensorial no Autismo",
      description: "Processamento sensorial diferenciado requer abordagens específicas",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Muitas crianças autistas apresentam diferenças no processamento sensorial. A TO ajuda a organizar essas experiências sensoriais, criando estratégias para lidar com hiper ou hipossensibilidades de forma que não limitem a participação nas atividades diárias."
    },
    {
      title: "Melhoria do Comportamento",
      description: "TO pode contribuir para comportamentos mais adaptativos",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Através da regulação sensorial e desenvolvimento de rotinas estruturadas, a TO pode ajudar a reduzir comportamentos desafiadores, promovendo maior organização interna e capacidade de autorregulação."
    },
    {
      title: "Desenvolvimento da Autonomia no TEA",
      description: "Promoção da independência em atividades cotidianas",
      icon: <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A TO trabalha sistematicamente para desenvolver habilidades de autocuidado, organização pessoal e participação social, utilizando estratégias visuais, rotinas estruturadas e adaptações ambientais quando necessário."
    }
  ];

  const rehabilitationAreas = [
    {
      title: "TO na Recuperação Pós-AVC",
      description: "Reabilitação neurológica focada na funcionalidade",
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Após um AVC, a TO trabalha para recuperar ou compensar funções perdidas, focando especialmente nas atividades que o paciente considera mais importantes para sua qualidade de vida, como vestir-se, cozinhar ou retornar ao trabalho."
    },
    {
      title: "Lesões de Mão e Braço",
      description: "Especialização em reabilitação de membros superiores",
      icon: <Hand className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Para lesões de mão e braço, a TO combina exercícios específicos com atividades funcionais, garantindo que a recuperação seja aplicada em tarefas reais do dia a dia. Pode incluir confecção de órteses personalizadas."
    },
    {
      title: "Órteses e Adaptações",
      description: "Tecnologia assistiva personalizada",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A TO pode confeccionar órteses sob medida e recomendar adaptações ambientais ou em utensílios para facilitar a realização de atividades, sempre priorizando a funcionalidade e conforto do usuário."
    },
    {
      title: "TO com Idosos",
      description: "Promoção do envelhecimento ativo e saudável",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Com idosos, a TO foca na manutenção da independência, prevenção de quedas, adaptação do ambiente domiciliar e promoção de atividades significativas que mantenham o engajamento e qualidade de vida."
    }
  ];

  const mentalHealthApproach = [
    {
      title: "TO na Depressão",
      description: "Retomada de atividades significativas e prazerosas",
      icon: <Smile className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Na depressão, a TO ajuda a pessoa a retomar gradualmente atividades que antes eram prazerosas e significativas, estruturando rotinas saudáveis e desenvolvendo estratégias de enfrentamento através de ocupações terapêuticas."
    },
    {
      title: "TO para Ansiedade",
      description: "Desenvolvimento de estratégias de regulação e enfrentamento",
      icon: <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Para ansiedade, a TO utiliza atividades que promovem relaxamento e autorregulação, ensina técnicas de organização e planejamento, e ajuda a desenvolver estratégias para lidar com situações desafiadoras do cotidiano."
    },
    {
      title: "Atividades Terapêuticas em Saúde Mental",
      description: "Uso de ocupações como ferramenta terapêutica",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A TO utiliza diversas atividades como arte, música, culinária, jardinagem e exercícios como ferramentas terapêuticas, sempre escolhidas de acordo com os interesses e necessidades específicas de cada pessoa."
    },
    {
      title: "Reinserção Social",
      description: "Facilitação do retorno à comunidade e atividades sociais",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A TO trabalha na preparação para reinserção social, desenvolvendo habilidades sociais, de comunicação e de participação comunitária, sempre respeitando o ritmo e as possibilidades de cada pessoa."
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

  const navItems = ['Conceitos', 'Desenvolvimento', 'Autismo', 'Reabilitação', 'Saúde Mental'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-20"
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
          className="absolute top-1/3 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-20"
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
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-green-200 rounded-full opacity-20"
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
      <Header 
        onNavigateHome={onNavigateHome} 
        onNavigateToPage={onNavigateToPage}
        currentPage="terapia-ocupacional"
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
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Portfólio Educativo de Terapia Ocupacional
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Terapia Ocupacional
                  </span>
                  <br />
                  <span className="text-gray-800">
                    e Psicomotricidade
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Explore o mundo da Terapia Ocupacional: desde conceitos fundamentais até aplicações 
                  específicas em desenvolvimento infantil, autismo, reabilitação e saúde mental. 
                  Um guia educativo completo para entender esta profissão essencial.
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
                  src="https://images.unsplash.com/photo-1594736797933-d0b22ba59bd0?w=600&h=600&fit=crop"
                  alt="Terapia ocupacional em ação"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-80 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60 shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conceitos Fundamentais */}
      <section id="conceitos" className="py-16 sm:py-20 lg:py-24 bg-white relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-green-100 text-green-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Book className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Conceitos Fundamentais
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Entendendo a Terapia Ocupacional
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Descubra os conceitos essenciais da Terapia Ocupacional, suas aplicações e 
              como ela se diferencia de outras áreas da reabilitação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {fundamentalConcepts.map((concept, index) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(concept.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-500 h-full ${concept.bgColor} border-0 shadow-lg hover:shadow-2xl`}
                  onClick={() => setActiveService(activeService === concept.id ? null : concept.id)}
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <motion.div 
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br ${concept.color} rounded-xl sm:rounded-2xl shadow-lg w-fit`}
                      animate={{ 
                        rotate: hoveredCard === concept.id ? 360 : 0,
                        scale: hoveredCard === concept.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {concept.icon}
                      </div>
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{concept.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">{concept.description}</CardDescription>
                  </CardHeader>
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeService === concept.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        {concept.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex}
                            className="flex items-start space-x-2 sm:space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

      {/* Desenvolvimento Infantil */}
      <section id="desenvolvimento" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-purple-100 text-purple-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Baby className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Desenvolvimento Infantil
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              TO no Desenvolvimento Infantil
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              Como a Terapia Ocupacional acompanha e promove o desenvolvimento saudável das crianças
            </p>
          </motion.div>

          <DevelopmentTimeline />

          <motion.div 
            className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Estimulação Precoce em TO</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  A estimulação precoce em Terapia Ocupacional utiliza atividades lúdicas e 
                  funcionais para promover o desenvolvimento de habilidades motoras, cognitivas, 
                  sensoriais e sociais desde os primeiros meses de vida.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Estímulos Visuais</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Desenvolvimento da coordenação olho-mão e percepção visual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Ear className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Estímulos Auditivos</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Promoção da atenção auditiva e desenvolvimento da linguagem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Hand className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Estímulos Táteis</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Desenvolvimento da sensibilidade e coordenação motora fina</p>
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
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=450&fit=crop"
                  alt="Estimulação precoce em terapia ocupacional"
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Autismo e TEA */}
      <section id="autismo" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-indigo-100 text-indigo-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Puzzle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Autismo e TEA
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Terapia Ocupacional no Transtorno do Espectro Autista
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Abordagem especializada e respeitosa para promover desenvolvimento e autonomia 
              em pessoas com TEA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {autismSupport.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-indigo-100 rounded-full flex-shrink-0">
                        <div className="text-indigo-600">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg leading-tight">{item.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm mt-1">{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reabilitação */}
      <section id="reabilitação" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-emerald-100 text-emerald-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Reabilitação
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              TO na Reabilitação Física e Neurológica
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Como a Terapia Ocupacional atua na recuperação funcional após lesões, 
              doenças e no processo de envelhecimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {rehabilitationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-emerald-100 rounded-full flex-shrink-0">
                        <div className="text-emerald-600">
                          {area.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg leading-tight">{area.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm mt-1">{area.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{area.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Saúde Mental */}
      <section id="saúde-mental" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-rose-100 text-rose-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Saúde Mental
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Terapia Ocupacional em Saúde Mental
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              A TO como ferramenta terapêutica para promoção do bem-estar psicológico 
              e reinserção social
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {mentalHealthApproach.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-rose-50 to-white">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-rose-100 rounded-full flex-shrink-0">
                        <div className="text-rose-600">
                          {approach.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg leading-tight">{approach.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm mt-1">{approach.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{approach.content}</p>
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
              Recapitulação
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Resumo: Terapia Ocupacional em Perspectiva
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
              Uma síntese dos principais conceitos e aplicações da Terapia Ocupacional 
              abordados neste guia educativo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Essência da TO",
                description: "A TO foca na funcionalidade para atividades diárias, promovendo independência e qualidade de vida através de ocupações significativas.",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                color: "from-blue-50 to-white"
              },
              {
                title: "Desenvolvimento",
                description: "No desenvolvimento infantil, a TO acompanha marcos motores e promove estimulação precoce através de atividades lúdicas e funcionais.",
                icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
                color: "from-green-50 to-white"
              },
              {
                title: "Autismo/TEA",
                description: "Com pessoas autistas, a TO trabalha integração sensorial e autonomia, sempre respeitando as características individuais.",
                icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                color: "from-purple-50 to-white"
              },
              {
                title: "Reabilitação",
                description: "Na reabilitação, a TO recupera funcionalidade após lesões, adaptando atividades e ambiente para máxima independência.",
                icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
                color: "from-orange-50 to-white"
              },
              {
                title: "Saúde Mental",
                description: "Em saúde mental, a TO utiliza atividades terapêuticas para promover bem-estar psicológico e reinserção social.",
                icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
                color: "from-pink-50 to-white"
              },
              {
                title: "Abordagem Holística",
                description: "A TO considera a pessoa como um todo, incluindo aspectos físicos, cognitivos, emocionais e sociais em sua abordagem terapêutica.",
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
            className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              A Terapia Ocupacional é uma profissão essencial
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Que promove saúde, bem-estar e qualidade de vida através da participação em 
              ocupações significativas. Seja no desenvolvimento infantil, reabilitação física, 
              saúde mental ou condições específicas como o autismo, a TO oferece abordagens 
              personalizadas e baseadas em evidências para capacitar pessoas a viverem de 
              forma mais independente e satisfatória.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer
        specialtyName="EIBM Terapia Ocupacional"
        specialtyDescription="Portfólio Educativo"
        specialtyIcon={<Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
        areas={[
          "Conceitos Fundamentais",
          "Desenvolvimento Infantil",
          "Autismo e TEA",
          "Reabilitação Física",
          "Saúde Mental"
        ]}
        treatments={[
          "Pediatria",
          "Neurologia",
          "Geriatria",
          "Ortopedia",
          "Psiquiatria"
        ]}
        aboutText="Material educativo desenvolvido para demonstrar conhecimentos em Terapia Ocupacional e suas aplicações práticas em diferentes contextos terapêuticos."
      />
    </div>
  );
}