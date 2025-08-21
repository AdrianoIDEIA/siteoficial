import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Heart, Users, Brain, Target, CheckCircle, Activity, Baby, GraduationCap,
  Puzzle, Lightbulb, TrendingUp, Award, Menu, X, Home, School, 
  ArrowRight, Gavel, Calendar, Users2, BookOpen,
  Compass, Map, Navigation, Rocket, Star, Building, Heart as HeartIcon,
  Hand, Ear, ExternalLink
} from 'lucide-react';

// Components
import { AnimatedSection } from '../components/AnimatedSection';
import { HeroCard } from '../components/HeroCard';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { ParallaxLamp } from '../components/ParallaxLamp';
import { BackToTopButton } from '../components/BackToTopButton';
import { PageHeader } from '../components/PageHeader';
import { StandardHeader } from '../components/StandardHeader';

interface IDEIAPageProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function App({ onNavigateHome, onNavigateToPage }: IDEIAPageProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Nossa Proposta', href: '#jornada-transformadora' },
    { label: 'Habilidades', href: '#treinamento-habilidades' },
    { label: 'Escola', href: '#ambiente-escolar' },
    { label: 'Família', href: '#ambiente-familiar' },
    { label: 'Trilha EIBM', href: '#eibm-terapias-trilha' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

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
          <div className="space-y-3">
            {[
              { icon: <Puzzle className="w-5 h-5 text-orange-400" />, text: "Comunicação funcional e expressiva" },
              { icon: <Users className="w-5 h-5 text-purple-400" />, text: "Habilidades sociais e interação" },
              { icon: <Target className="w-5 h-5 text-green-400" />, text: "Autonomia e independência" },
              { icon: <HeartIcon className="w-5 h-5 text-red-400" />, text: "Regulação emocional e comportamental" },
              { icon: <Hand className="w-5 h-5 text-blue-400" />, text: "Auto-higiene e autocuidado" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                {item.icon}
                <span className="text-sm font-medium">{item.text}</span>
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
              "Material didático adaptado e personalizado",
              "Salas de aula sensorialmente acessíveis",
              "Mediação escolar qualificada e especializada"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-orange-50">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
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
              "Avaliação ambiental completa e personalizada",
              "Adaptações sensoriais sob medida",
              "Treinamento especializado dos cuidadores",
              "Suporte contínuo e acompanhamento",
              "Protocolos de rotina visual estruturada"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-green-50">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
          <div className="space-y-3">
            {[
              { icon: <Brain className="w-5 h-5 text-orange-400" />, text: "Psicologia Clínica e Comportamental" },
              { icon: <Hand className="w-5 h-5 text-indigo-400" />, text: "Terapia Ocupacional Especializada" },
              { icon: <Ear className="w-5 h-5 text-pink-400" />, text: "Fonoaudiologia e Comunicação" },
              { icon: <GraduationCap className="w-5 h-5 text-green-400" />, text: "Psicopedagogia Inclusiva" },
              { icon: <Activity className="w-5 h-5 text-purple-400" />, text: "Musicoterapia e Artes" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-purple-50">
                {item.icon}
                <span className="text-sm font-medium">{item.text}</span>
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
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="ideia"
      />

      {/* Parallax Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ParallaxLamp speed={0.05} className="absolute top-[15%] left-[10%] w-16 h-16 hidden lg:block" />
        <ParallaxLamp speed={0.03} className="absolute top-[25%] right-[15%] w-14 h-14 hidden lg:block" />
        <ParallaxLamp speed={0.07} className="absolute bottom-[20%] left-[20%] w-16 h-16 hidden md:block" />
        <ParallaxLamp speed={0.04} className="absolute bottom-[25%] right-[10%] w-16 h-16 hidden md:block" />
        <ParallaxLamp speed={0.06} className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 w-16 h-16" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-6 py-3 text-sm mb-6 inline-flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Instituto de Desenvolvimento Inclusivo
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                EIBM IDEIA: Cultivando o Potencial Único
              </span>
              <br />
              <span className="text-gray-800">
                de Cada Criança
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <p className="text-xl font-medium text-orange-600 mb-4">
                Inclusão e Desenvolvimento Pleno para Todos
              </p>
              <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Conectando Famílias, Escolas e a Ciência para um Futuro Mais Inclusivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('#jornada-transformadora')}
              >
                Descubra Nosso Método Inovador
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
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
          <div className="text-center mb-16">
            <Badge className="bg-orange-200 text-orange-700 px-6 py-3 text-sm mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Entendemos Sua Luta
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Quando o Caminho Parece Sem Saída:<br />
              <span className="text-orange-600">A Esperança que Transforma</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sabemos que a jornada de uma família com uma criança neurodivergente pode ser exaustiva. 
              A busca por respostas, a sensação de isolamento, a incerteza sobre o futuro e a falta de 
              suporte adequado podem levar ao desânimo. No IDEIA, você encontra um porto seguro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Um Olhar Além do Diagnóstico</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Não vemos apenas um diagnóstico, mas um universo de potencialidades em cada criança. 
                    Nosso compromisso é desvendar esses talentos, oferecendo um suporte que vai além do 
                    convencional, com ética, ciência e um profundo respeito pela individualidade.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Caminhos Reais, Resultados Comprovados</h3>
                  <p className="text-gray-700 leading-relaxed">
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
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                  alt="Família e criança felizes"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-orange-600" />
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
          <div className="text-center mb-16">
            <Badge className="bg-orange-200 text-orange-700 px-6 py-3 text-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              Pilar Fundamental do IDEIA
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Capacitando para a Vida:<br />
              <span className="text-orange-600">Treinamento de Habilidades Essenciais</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              No IDEIA, o treinamento de habilidades é a base para o desenvolvimento integral da criança 
              neurodivergente. Nosso foco é capacitar cada indivíduo com as ferramentas necessárias para 
              interagir com o mundo de forma mais autônoma e feliz.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Puzzle className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Metodologias Baseadas em Evidências</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Utilizamos abordagens cientificamente comprovadas, como a Análise do Comportamento Aplicada (ABA), 
                    o TEACCH e o ensino naturalista. Essas metodologias são adaptadas para criar um ambiente de 
                    aprendizado eficaz e motivador.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-orange-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Baby className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Habilidades Essenciais Desenvolvidas</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Comunicação", desc: "Expressão e compreensão verbal e não-verbal" },
                      { label: "Habilidades Sociais", desc: "Interação com pares, empatia, resolução de conflitos" },
                      { label: "Autonomia", desc: "Independência em atividades diárias e tomada de decisões" },
                      { label: "Regulação Emocional", desc: "Gerenciamento de sentimentos e reações" },
                      { label: "Auto-Higiene", desc: "Rotinas pessoais e bem-estar" }
                    ].map((skill, i) => (
                      <div key={i} className="p-3 bg-orange-50 rounded-lg">
                        <div className="font-semibold text-gray-800">{skill.label}</div>
                        <div className="text-sm text-gray-600">{skill.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                  alt="Criança aprendendo habilidades"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-orange-600" />
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
          <div className="text-center mb-16">
            <Badge className="bg-blue-200 text-blue-700 px-6 py-3 text-sm mb-6">
              <School className="w-4 h-4 mr-2" />
              Inclusão Efetiva
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Além dos Muros da Sala:<br />
              <span className="text-blue-600">Inclusão Efetiva no Ambiente Escolar</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A escola é um ambiente crucial para o desenvolvimento social e cognitivo, mas muitas vezes apresenta 
              desafios para crianças neurodivergentes. O IDEIA atua diretamente com instituições de ensino para 
              criar espaços verdadeiramente inclusivos e adaptados às necessidades de cada aluno.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2} className="flex justify-center order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
                  alt="Ambiente escolar inclusivo"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="space-y-8 order-1 lg:order-2">
              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Capacitação de Educadores e Equipes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Oferecemos treinamentos e consultorias para professores e demais profissionais da escola, 
                    capacitando-os a compreender e aplicar estratégias pedagógicas inclusivas, manejo 
                    comportamental e comunicação alternativa.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adaptação Curricular e Material Didático</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Auxiliamos na adaptação de materiais didáticos e na elaboração de Planos Educacionais 
                    Individualizados (PEIs), garantindo que o conteúdo seja acessível e relevante para 
                    o aprendizado de cada aluno.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-blue-600" />
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
          <div className="text-center mb-16">
            <Badge className="bg-green-200 text-green-700 px-6 py-3 text-sm mb-6">
              <Home className="w-4 h-4 mr-2" />
              Suporte no Lar
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              O Coração do Desenvolvimento:<br />
              <span className="text-green-600">Fortalecendo o Ambiente Familiar</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O lar é o primeiro e mais importante ambiente de desenvolvimento de uma criança. No entanto, 
              pais de crianças neurodivergentes podem se sentir sobrecarregados ao tentar adaptar a rotina 
              e o espaço. O IDEIA oferece suporte para transformar o ambiente familiar em um espaço que 
              potencializa a autonomia e o bem-estar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adaptação do Ambiente Doméstico</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Realizamos avaliações completas do ambiente para identificar e implementar adaptações 
                    sensoriais personalizadas, otimizando o espaço para o desenvolvimento e a segurança da criança.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Treinamento e Suporte aos Cuidadores</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Capacitamos pais e cuidadores com estratégias e técnicas baseadas em evidências para 
                    lidar com desafios comportamentais, promover a comunicação e aplicar rotinas visuais 
                    e estruturadas que facilitam o dia a dia.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop"
                  alt="Família interagindo em casa"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-green-600" />
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
          <div className="text-center mb-16">
            <Badge className="bg-purple-200 text-purple-700 px-6 py-3 text-sm mb-6">
              <Navigation className="w-4 h-4 mr-2" />
              Jornada Integrada
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              IDEIA e EIBM Terapias:<br />
              <span className="text-purple-600">A Jornada Completa de Suporte</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Para famílias que buscam um suporte abrangente e integrado, o IDEIA é um componente essencial 
              do "Caminho do Desenvolvimento" da EIBM Terapias. Esta é uma jornada estruturada e contínua, 
              projetada para garantir o progresso e o desenvolvimento integral de cada criança.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2} className="space-y-8">
              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Map className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Um Caminho Estruturado e Mensurável</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A EIBM Terapias segue um "Caminho do Desenvolvimento" com marcos claros: desde a Anamnese 
                    inicial e o estabelecimento de Vínculo, passando por Avaliações Padronizadas e Planos 
                    Terapêuticos individualizados, até o suporte contínuo e relatórios de evolução.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-xl border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Integração e Complementaridade Terapêutica</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As intervenções do IDEIA em Treinamento de Habilidades, Ambiente Escolar e Ambiente Familiar 
                    complementam as terapias individuais especializadas oferecidas pela EIBM. Essa sinergia cria 
                    uma rede de suporte completa e coesa.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559081842-5c2c55b19e97?w=600&h=400&fit=crop"
                  alt="Caminho do desenvolvimento EIBM Terapias"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl shadow-inner mb-12">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-purple-600" />
              Base Legal: Direito à Saúde e Desenvolvimento Integral
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A atenção integral à saúde e ao desenvolvimento de pessoas com deficiência é um direito fundamental. 
              A <strong>Lei Brasileira de Inclusão (LBI - Lei nº 13.146/2015)</strong>, em seu <strong>Art. 18</strong>, 
              assegura "atenção integral à saúde da pessoa com deficiência em todos os níveis de complexidade, por 
              intermédio do SUS, garantido acesso universal e igualitário".
            </p>
          </AnimatedSection>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver o Caminho Completo da EIBM Terapias
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Pronto para Transformar o<br />
              <span className="text-orange-200">Futuro do Seu Filho?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra como o IDEIA pode criar ambientes verdadeiramente inclusivos 
              que potencializam o desenvolvimento único de cada criança.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-10 py-5 rounded-full shadow-2xl text-lg transition-all duration-300"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Iniciar Jornada IDEIA
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EIBM IDEIA</h3>
                  <p className="text-sm text-gray-400">Instituto Inclusivo</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                EIBM IDEIA - Inclusão com ética e ciência para um futuro mais inclusivo e acolhedor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-6 text-lg">Nossos Pilares</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Treinamento de Habilidades",
                  "Ambiente Escolar",
                  "Ambiente Familiar",
                  "Base Científica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center hover:text-orange-400 transition-colors cursor-pointer">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-6 text-lg">Metodologias</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Análise Comportamental Aplicada (ABA)",
                  "TEACCH",
                  "Ensino Naturalista",
                  "Adaptações Sensoriais"
                ].map((item, i) => (
                  <li key={i} className="hover:text-orange-400 transition-colors cursor-pointer text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold mb-6 text-lg">Contato</h4>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'Youtube', 'LinkedIn'].map((social, i) => (
                    <motion.a 
                      key={social}
                      href="#" 
                      className="text-white hover:text-orange-400 transition-colors"
                      aria-label={social}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                        <Star className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center">&copy; 2025 EIBM IDEIA - Instituto de Desenvolvimento Inclusivo. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}