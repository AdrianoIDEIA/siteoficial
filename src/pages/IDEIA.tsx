import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, Home, School, TrendingUp, Award, ChevronDown,
  ArrowRight, ChevronRight, ExternalLink, Gavel, Calendar, Clock, Users2, BookOpen,
  FileText, BarChart3, Compass, Map, Navigation, Rocket, Star, Building, Heart as HeartIcon
} from 'lucide-react';

const AnimatedSection = ({ children, className = "", delay = 0, id }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxLamp = ({ speed = 0.05, className = "" }: {
  speed?: number;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div style={{ y }} className={className}>
      <Lightbulb className="w-full h-full text-orange-400 opacity-60" />
    </motion.div>
  );
};

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center"
      >
        <ChevronDown className="text-orange-600 text-2xl mx-auto" />
        <span className="block text-xs text-orange-700 font-bold mt-1">Role para ver mais</span>
      </motion.div>
    </motion.div>
  );
};

const HeroCard = ({ icon, title, description, modalContent, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  modalContent: React.ReactNode;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group cursor-pointer h-auto p-0 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
        >
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-full bg-transparent border-0 shadow-none">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[120px]">
                <motion.div
                  className="text-orange-500 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {icon}
                </motion.div>
                <span className="font-semibold text-gray-900 text-center text-sm lg:text-base">
                  {title}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-orange-600 flex items-center gap-2">
            {icon}
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-800">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {modalContent}
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface IDEIAPageProps {
  onNavigateHome: () => void;
}

export default function App({ onNavigateHome }: IDEIAPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Nossa Proposta', href: '#jornada-transformadora' },
    { label: 'Habilidades', href: '#treinamento-habilidades' },
    { label: 'Escola', href: '#ambiente-escolar' },
    { label: 'Família', href: '#ambiente-familiar' },
    { label: 'Trilha EIBM', href: '#eibm-terapias-trilha' }
  ];

  const heroCards = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Treinamento de Habilidades",
      description: "Desenvolvimento de um amplo repertório de habilidades com metodologias baseadas em evidências",
      modalContent: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Trabalhamos o desenvolvimento de um amplo repertório de habilidades, sempre com base em metodologias como ABA, TEACCH e ensino naturalista.
          </p>
          <div className="space-y-2">
            {[
              { icon: <Puzzle className="w-4 h-4 text-orange-400" />, text: "Comunicação" },
              { icon: <Users className="w-4 h-4 text-purple-400" />, text: "Habilidades Sociais" },
              { icon: <Target className="w-4 h-4 text-green-400" />, text: "Autonomia" },
              { icon: <HeartIcon className="w-4 h-4 text-red-400" />, text: "Regulação emocional" },
              { icon: <Hand className="w-4 h-4 text-blue-400" />, text: "Auto-Higiene" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Ambiente Escolar",
      description: "Adaptação de espaços escolares e treinamento para educadores",
      modalContent: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Adaptamos espaços escolares, oferecemos treinamento para educadores e apoiamos a inclusão efetiva de crianças com necessidades especiais.
          </p>
          <div className="space-y-2">
            {[
              "Avaliação de acessibilidade e funcionalidade",
              "Capacitação da equipe pedagógica", 
              "Material didático adaptado",
              "Salas de aula sensorialmente acessíveis",
              "Mediação escolar qualificada"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Ambiente Familiar",
      description: "Adaptação de ambientes domésticos para desenvolvimento e autonomia",
      modalContent: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Adaptamos ambientes domésticos para facilitar o desenvolvimento e autonomia de crianças neurodivergentes em suas próprias casas.
          </p>
          <div className="space-y-2">
            {[
              "Avaliação ambiental completa",
              "Adaptações sensoriais personalizadas",
              "Treinamento dos cuidadores",
              "Suporte contínuo à família",
              "Protocolos de rotina visual e estruturada"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "EIBM Terapias",
      description: "Polo de referência em neurodiversidade com equipe multidisciplinar",
      modalContent: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Polo de referência em neurodiversidade, a EIBM Terapias integra abordagens inovadoras e equipe multidisciplinar para promover autonomia e bem-estar.
          </p>
          <div className="space-y-2">
            {[
              { icon: <Brain className="w-4 h-4 text-orange-400" />, text: "Psicologia" },
              { icon: <Hand className="w-4 h-4 text-indigo-400" />, text: "Terapia Ocupacional" },
              { icon: <Ear className="w-4 h-4 text-pink-400" />, text: "Fonoaudiologia" },
              { icon: <GraduationCap className="w-4 h-4 text-green-400" />, text: "Psicopedagogia" },
              { icon: <Activity className="w-4 h-4 text-purple-400" />, text: "Musicoterapia" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-xl rounded-b-xl z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant="ghost"
              onClick={onNavigateHome}
              className="mr-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Voltar
            </Button>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-black hover:text-orange-600 font-medium transition"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-orange-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition border-b border-gray-100 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </motion.header>

      {/* Parallax Lamps */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ParallaxLamp speed={0.05} className="absolute top-[15%] left-[20%] w-16 h-16 hidden md:block" />
        <ParallaxLamp speed={0.03} className="absolute top-[20%] right-[20%] w-14 h-14 hidden md:block" />
        <ParallaxLamp speed={0.07} className="absolute bottom-[15%] left-[15%] w-16 h-16 hidden sm:block" />
        <ParallaxLamp speed={0.04} className="absolute bottom-[15%] right-[15%] w-16 h-16 hidden sm:block" />
        <ParallaxLamp speed={0.06} className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-16 h-16" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-28 pb-24 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-2 text-sm mb-4">
                <Lightbulb className="w-4 h-4 mr-2" />
                Instituto de Desenvolvimento Inclusivo
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                IDEIA: Cultivando o Potencial Único
              </span>
              <br />
              <span className="text-gray-800">
                de Cada Criança
              </span>
              <br />
              <span className="text-xl font-medium text-orange-600 block mt-2">
                Inclusão e Desenvolvimento Pleno para Todos
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Conectando Famílias, Escolas e a Ciência para um Futuro Mais Inclusivo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg"
                onClick={() => document.getElementById('jornada-transformadora')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Descubra Nosso Método Inovador
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroCards.map((card, index) => (
              <HeroCard
                key={index}
                {...card}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Jornada Transformadora */}
      <AnimatedSection id="jornada-transformadora" className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-200 text-orange-700 px-4 py-2 text-sm mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Entendemos Sua Luta
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quando o Caminho Parece Sem Saída: A Esperança que Transforma
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sabemos que a jornada de uma família com uma criança neurodivergente pode ser exaustiva. 
              A busca por respostas, a sensação de isolamento, a incerteza sobre o futuro e a falta de 
              suporte adequado podem levar ao desânimo. No IDEIA, você encontra um porto seguro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Um Olhar Além do Diagnóstico</h3>
                  <p className="text-gray-700">
                    Não vemos apenas um diagnóstico, mas um universo de potencialidades em cada criança. 
                    Nosso compromisso é desvendar esses talentos, oferecendo um suporte que vai além do 
                    convencional, com ética, ciência e um profundo respeito pela individualidade.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="text-xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Caminhos Reais, Resultados Comprovados</h3>
                  <p className="text-gray-700">
                    Diferente de promessas vazias, o IDEIA oferece um plano de ação claro, baseado em 
                    metodologias científicas e em conformidade com as leis brasileiras. Nosso foco é em 
                    resultados mensuráveis e na construção de um futuro mais autônomo e feliz para seu filho.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                  alt="Família e criança felizes"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 p-8 bg-orange-100 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Gavel className="text-orange-600" />
              Nosso Compromisso Legal e Ético
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que todo indivíduo tem direito ao pleno desenvolvimento. A <strong>Constituição Federal de 1988</strong>, 
              em seu <strong>Art. 205</strong>, estabelece a educação como um direito de todos, visando ao "pleno desenvolvimento da pessoa". 
              A <strong>Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI - Lei nº 13.146/2015)</strong>, no <strong>Art. 27</strong>, 
              reforça a garantia do "máximo desenvolvimento possível de seus talentos e habilidades". No IDEIA, não apenas seguimos a lei, 
              mas a utilizamos como um guia para assegurar que cada criança receba o suporte que merece para florescer.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Treinamento de Habilidades */}
      <AnimatedSection id="treinamento-habilidades" className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-200 text-orange-700 px-4 py-2 text-sm mb-4">
              <Target className="w-4 h-4 mr-2" />
              Pilar Fundamental do IDEIA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Capacitando para a Vida: Treinamento de Habilidades Essenciais
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              No IDEIA, o treinamento de habilidades é a base para o desenvolvimento integral da criança 
              neurodivergente. Nosso foco é capacitar cada indivíduo com as ferramentas necessárias para 
              interagir com o mundo de forma mais autônoma e feliz.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Puzzle className="text-xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Metodologias Baseadas em Evidências</h3>
                  <p className="text-gray-700">
                    Utilizamos abordagens cientificamente comprovadas, como a Análise do Comportamento Aplicada (ABA), 
                    o TEACCH e o ensino naturalista. Essas metodologias são adaptadas para criar um ambiente de 
                    aprendizado eficaz e motivador.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Baby className="text-xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Habilidades Essenciais Desenvolvidas</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Comunicação:</strong> Expressão e compreensão verbal e não-verbal.</li>
                    <li><strong>Habilidades Sociais:</strong> Interação com pares, empatia, resolução de conflitos.</li>
                    <li><strong>Autonomia:</strong> Independência em atividades diárias e tomada de decisões.</li>
                    <li><strong>Regulação Emocional:</strong> Gerenciamento de sentimentos e reações.</li>
                    <li><strong>Auto-Higiene e Autocuidado:</strong> Rotinas pessoais e bem-estar.</li>
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                  alt="Criança aprendendo habilidades"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 p-8 bg-orange-100 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Gavel className="text-orange-600" />
              Base Legal: Direito ao Desenvolvimento Pleno
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A Constituição Federal de 1988, em seu <strong>Art. 205</strong>, estabelece que "a educação, direito de todos 
              e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno 
              desenvolvimento da pessoa". A Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI - Lei nº 13.146/2015), 
              no <strong>Art. 27</strong>, reforça que a educação é um direito da pessoa com deficiência, assegurando "o máximo 
              desenvolvimento possível de seus talentos e habilidades físicas, sensoriais, intelectuais e sociais".
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Ambiente Escolar */}
      <AnimatedSection id="ambiente-escolar" className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-200 text-blue-700 px-4 py-2 text-sm mb-4">
              <School className="w-4 h-4 mr-2" />
              Inclusão Efetiva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Além dos Muros da Sala: Inclusão Efetiva no Ambiente Escolar
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A escola é um ambiente crucial para o desenvolvimento social e cognitivo, mas muitas vezes apresenta 
              desafios para crianças neurodivergentes. O IDEIA atua diretamente com instituições de ensino para 
              criar espaços verdadeiramente inclusivos e adaptados às necessidades de cada aluno.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="flex justify-center order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
                  alt="Ambiente escolar inclusivo"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="space-y-8 order-1 lg:order-2">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Capacitação de Educadores e Equipes</h3>
                  <p className="text-gray-700">
                    Oferecemos treinamentos e consultorias para professores e demais profissionais da escola, 
                    capacitando-os a compreender e aplicar estratégias pedagógicas inclusivas, manejo 
                    comportamental e comunicação alternativa.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Adaptação Curricular e Material Didático</h3>
                  <p className="text-gray-700">
                    Auxiliamos na adaptação de materiais didáticos e na elaboração de Planos Educacionais 
                    Individualizados (PEIs), garantindo que o conteúdo seja acessível e relevante para 
                    o aprendizado de cada aluno.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Ambientes Sensorialmente Acessíveis</h3>
                  <p className="text-gray-700">
                    Orientamos a criação de salas de aula e espaços escolares que considerem as necessidades 
                    sensoriais dos alunos, minimizando distrações e promovendo um ambiente de aprendizado 
                    confortável e produtivo.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 p-8 bg-blue-100 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Gavel className="text-blue-600" />
              Base Legal: Educação Inclusiva como Direito Fundamental
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A inclusão escolar não é uma opção, mas um direito fundamental garantido pela legislação brasileira. 
              A <strong>Constituição Federal de 1988</strong>, em seu <strong>Art. 208, III</strong>, assegura "atendimento 
              educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino". 
              A <strong>Lei Brasileira de Inclusão (LBI - Lei nº 13.146/2015)</strong>, em seus <strong>Art. 27 e 28</strong>, 
              detalha o dever do Estado, da família, da comunidade escolar e da sociedade em assegurar um sistema 
              educacional inclusivo em todos os níveis.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Ambiente Familiar */}
      <AnimatedSection id="ambiente-familiar" className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-200 text-green-700 px-4 py-2 text-sm mb-4">
              <Home className="w-4 h-4 mr-2" />
              Suporte no Lar
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              O Coração do Desenvolvimento: Fortalecendo o Ambiente Familiar
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              O lar é o primeiro e mais importante ambiente de desenvolvimento de uma criança. No entanto, 
              pais de crianças neurodivergentes podem se sentir sobrecarregados ao tentar adaptar a rotina 
              e o espaço. O IDEIA oferece suporte para transformar o ambiente familiar em um espaço que 
              potencializa a autonomia e o bem-estar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="text-xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Adaptação do Ambiente Doméstico</h3>
                  <p className="text-gray-700">
                    Realizamos avaliações completas do ambiente para identificar e implementar adaptações 
                    sensoriais personalizadas, otimizando o espaço para o desenvolvimento e a segurança da criança.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Treinamento e Suporte aos Cuidadores</h3>
                  <p className="text-gray-700">
                    Capacitamos pais e cuidadores com estratégias e técnicas baseadas em evidências para 
                    lidar com desafios comportamentais, promover a comunicação e aplicar rotinas visuais 
                    e estruturadas que facilitam o dia a dia.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protocolos de Rotina e Autonomia</h3>
                  <p className="text-gray-700">
                    Desenvolvemos e implementamos protocolos de rotina visual e estruturada para atividades 
                    de vida diária (AVDs), como higiene, alimentação e vestuário, promovendo a independência 
                    da criança no seu próprio lar.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop"
                  alt="Família interagindo em casa"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 p-8 bg-green-100 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Gavel className="text-green-600" />
              Base Legal: Proteção e Desenvolvimento no Seio Familiar
            </h3>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Estatuto da Criança e do Adolescente (ECA - Lei nº 8.069/1990)</strong> é claro ao estabelecer, 
              em seu <strong>Art. 4º</strong>, que é dever da família, da comunidade, da sociedade em geral e do poder 
              público assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, à saúde, à educação, 
              ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência 
              familiar e comunitária.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* EIBM Terapias Trilha */}
      <AnimatedSection id="eibm-terapias-trilha" className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-200 text-purple-700 px-4 py-2 text-sm mb-4">
              <Navigation className="w-4 h-4 mr-2" />
              Jornada Integrada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              IDEIA e EIBM Terapias: A Jornada Completa de Suporte
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Para famílias que buscam um suporte abrangente e integrado, o IDEIA é um componente essencial 
              do "Caminho do Desenvolvimento" da EIBM Terapias. Esta é uma jornada estruturada e contínua, 
              projetada para garantir o progresso e o desenvolvimento integral de cada criança.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Map className="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Um Caminho Estruturado e Mensurável</h3>
                  <p className="text-gray-700">
                    A EIBM Terapias segue um "Caminho do Desenvolvimento" com marcos claros: desde a Anamnese 
                    inicial e o estabelecimento de Vínculo, passando por Avaliações Padronizadas e Planos 
                    Terapêuticos individualizados, até o suporte contínuo e relatórios de evolução.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Integração e Complementaridade Terapêutica</h3>
                  <p className="text-gray-700">
                    As intervenções do IDEIA em Treinamento de Habilidades, Ambiente Escolar e Ambiente Familiar 
                    complementam as terapias individuais especializadas oferecidas pela EIBM. Essa sinergia cria 
                    uma rede de suporte completa e coesa.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Foco em Autonomia e Futuro</h3>
                  <p className="text-gray-700">
                    Nosso objetivo final é garantir que cada criança alcance seu pleno potencial, com relatórios 
                    de evolução detalhados e um caminho claro para a alta terapêutica. Promovemos autonomia e 
                    participação ativa em todos os ambientes de sua vida.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559081842-5c2c55b19e97?w=600&h=400&fit=crop"
                  alt="Caminho do desenvolvimento EIBM Terapias"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-16 p-8 bg-purple-100 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Gavel className="text-purple-600" />
              Base Legal: Direito à Saúde e Desenvolvimento Integral
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A atenção integral à saúde e ao desenvolvimento de pessoas com deficiência é um direito fundamental. 
              A <strong>Lei Brasileira de Inclusão (LBI - Lei nº 13.146/2015)</strong>, em seu <strong>Art. 18</strong>, 
              assegura "atenção integral à saúde da pessoa com deficiência em todos os níveis de complexidade, por 
              intermédio do SUS, garantido acesso universal e igualitário".
            </p>
          </AnimatedSection>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver o Caminho Completo da EIBM Terapias
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para Transformar o Futuro do Seu Filho?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubra como o IDEIA pode criar ambientes verdadeiramente inclusivos 
              que potencializam o desenvolvimento único de cada criança.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full shadow-lg text-lg"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Iniciar Jornada IDEIA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                IDEIA - Inclusão com ética e ciência para um futuro mais inclusivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-6">Nossos Pilares</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Treinamento de Habilidades</li>
                <li>Ambiente Escolar</li>
                <li>Ambiente Familiar</li>
                <li>Base Científica</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-6">Metodologias</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Análise Comportamental Aplicada (ABA)</li>
                <li>TEACCH</li>
                <li>Ensino Naturalista</li>
                <li>Adaptações Sensoriais</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  {['facebook-f', 'instagram', 'youtube', 'linkedin-in'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="text-white hover:text-orange-400 transition-colors"
                      aria-label={social}
                    >
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                        <Star className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 IDEIA - Todos os direitos reservados</p>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-orange-700 focus:outline-none"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: backToTopVisible ? 1 : 0,
          scale: backToTopVisible ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 transform -rotate-90" />
      </motion.button>
    </div>
  );
}