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
  Smile, TreePine, Flower2, Menu, X, Utensils, Scale, Apple, AlertTriangle, 
  Clock, Calendar, TrendingUp, Award, Star, Timer, Leaf, Coffee, Salad
} from 'lucide-react';

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

const TreatmentApproach = () => {
  const approaches = [
    {
      title: 'Avaliação Nutricional Completa',
      description: 'Análise detalhada dos hábitos alimentares, estado nutricional e relação com a comida',
      icon: Scale,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Terapia Cognitivo-Comportamental',
      description: 'Trabalho com pensamentos e comportamentos relacionados à alimentação e imagem corporal',
      icon: Brain,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Reeducação Alimentar',
      description: 'Desenvolvimento de uma relação saudável e equilibrada com os alimentos',
      icon: Apple,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Acompanhamento Multidisciplinar',
      description: 'Trabalho integrado com psicólogos, médicos e outros profissionais de saúde',
      icon: Users,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {approaches.map((approach, index) => {
        const IconComponent = approach.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${approach.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {approach.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {approach.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

const DisorderTypes = () => {
  const disorders = [
    {
      name: 'Anorexia Nervosa',
      description: 'Restrição alimentar severa com medo intenso de ganhar peso',
      symptoms: ['Perda de peso significativa', 'Distorção da imagem corporal', 'Amenorreia', 'Isolamento social'],
      color: 'border-red-200 bg-red-50'
    },
    {
      name: 'Bulimia Nervosa',
      description: 'Episódios de compulsão alimentar seguidos de comportamentos compensatórios',
      symptoms: ['Episódios de compulsão', 'Vômitos induzidos', 'Uso de laxantes', 'Flutuações de peso'],
      color: 'border-orange-200 bg-orange-50'
    },
    {
      name: 'Transtorno de Compulsão Alimentar',
      description: 'Episódios recorrentes de compulsão alimentar sem comportamentos compensatórios',
      symptoms: ['Comer rapidamente', 'Comer até desconforto', 'Comer sem fome', 'Sentimentos de culpa'],
      color: 'border-yellow-200 bg-yellow-50'
    },
    {
      name: 'Transtorno Alimentar Restritivo/Evitativo',
      description: 'Evitação ou restrição alimentar que resulta em deficiências nutricionais',
      symptoms: ['Perda de peso significativa', 'Deficiência nutricional', 'Dependência de suplementos', 'Interferência psicossocial'],
      color: 'border-blue-200 bg-blue-50'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {disorders.map((disorder, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`h-full ${disorder.color} border-2 hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {disorder.name}
              </CardTitle>
              <CardDescription className="text-gray-700">
                {disorder.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium text-gray-800 mb-3">Principais sintomas:</h4>
              <ul className="space-y-2">
                {disorder.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

interface GattonPageProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function GattonPage({ onNavigateHome, onNavigateToPage }: GattonPageProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-emerald-200 rounded-full opacity-20"
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
        currentPage="gatton"
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
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Utensils className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Acompanhamento Nutricional Especializado
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent">
                    Gatton
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Transtornos Alimentares
                  </span>
                  <br />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Cuidado Integral e Humanizado
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  O Gatton oferece acompanhamento especializado para transtornos alimentares, 
                  combinando expertise nutricional com abordagem terapêutica integrada. 
                  Nosso foco é restaurar uma relação saudável com a alimentação e promover 
                  o bem-estar físico e emocional.
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
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop"
                  alt="Alimentação saudável e equilibrada"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Apple className="w-8 h-8 sm:w-12 sm:h-12 text-green-700" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Heart className="w-6 h-6 sm:w-10 sm:h-10 text-emerald-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Nossa Abordagem Terapêutica
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Utilizamos uma metodologia integrada que combina diferentes técnicas e 
              profissionais para oferecer o melhor cuidado possível.
            </motion.p>
          </div>
          
          <TreatmentApproach />
        </div>
      </AnimatedSection>

      {/* Disorder Types Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Tipos de Transtornos Alimentares
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Conheça os principais transtornos alimentares que tratamos e seus sintomas característicos.
            </motion.p>
          </div>
          
          <DisorderTypes />
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Benefícios do Acompanhamento
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: 'Recuperação Sustentável',
                description: 'Foco na recuperação a longo prazo com estratégias personalizadas'
              },
              {
                icon: Shield,
                title: 'Ambiente Seguro',
                description: 'Espaço acolhedor e livre de julgamentos para o processo terapêutico'
              },
              {
                icon: TrendingUp,
                title: 'Melhoria da Qualidade de Vida',
                description: 'Restauração do bem-estar físico, mental e social'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pronto para Iniciar sua Jornada de Recuperação?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Entre em contato conosco e dê o primeiro passo para uma relação mais saudável com a alimentação.
          </motion.p>
          <motion.button
            className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigateToPage?.('contatos')}
          >
            Agendar Consulta
          </motion.button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer
        specialtyName="Transtornos Alimentares"
        specialtyDescription="Grupo de Apoio e Tratamento"
        specialtyIcon={<Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
        areas={[
          "Anorexia Nervosa",
          "Bulimia Nervosa",
          "Transtorno de Compulsão Alimentar",
          "ARFID",
          "Outros Transtornos Alimentares",
          "Prevenção"
        ]}
        treatments={[
          "Terapia Nutricional",
          "Psicoterapia Individual",
          "Terapia Familiar",
          "Grupos de Apoio",
          "Acompanhamento Médico",
          "Reabilitação Nutricional"
        ]}
        aboutText="Especializados no tratamento de transtornos alimentares, oferecemos abordagem multidisciplinar e humanizada para recuperação completa."
      />
    </div>
  );
}