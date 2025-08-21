import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StandardHeader } from '../components/StandardHeader';
import Footer from '../components/Footer';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar,
  Instagram, Facebook, Linkedin, Twitter, Globe, Building, Car,
  Accessibility, Wifi, Coffee, Shield, Heart, Star, CheckCircle
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

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 9999-9999',
      description: 'Atendimento de segunda a sexta, das 8h às 18h',
      color: 'from-blue-500 to-cyan-600',
      action: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@eibm.com.br',
      description: 'Resposta em até 24 horas',
      color: 'from-green-500 to-emerald-600',
      action: 'mailto:contato@eibm.com.br'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(11) 9999-9999',
      description: 'Atendimento rápido e direto',
      color: 'from-green-600 to-green-700',
      action: 'https://wa.me/5511999999999'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Especialidades, 123',
      description: 'São Paulo - SP, CEP 01234-567',
      color: 'from-purple-500 to-violet-600',
      action: 'https://maps.google.com'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {contactMethods.map((method, index) => {
        const IconComponent = method.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer group"
                  onClick={() => window.open(method.action, '_blank')}>
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {method.title}
                </CardTitle>
                <div className="text-xl font-bold text-gray-900">
                  {method.info}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {method.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

const BusinessHours = () => {
  const hours = [
    { day: 'Segunda-feira', time: '08:00 - 18:00' },
    { day: 'Terça-feira', time: '08:00 - 18:00' },
    { day: 'Quarta-feira', time: '08:00 - 18:00' },
    { day: 'Quinta-feira', time: '08:00 - 18:00' },
    { day: 'Sexta-feira', time: '08:00 - 18:00' },
    { day: 'Sábado', time: '08:00 - 12:00' },
    { day: 'Domingo', time: 'Fechado' }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
          <Clock className="w-6 h-6 mr-3 text-blue-600" />
          Horários de Funcionamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hours.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-700 font-medium">{schedule.day}</span>
              <span className={`font-semibold ${
                schedule.time === 'Fechado' ? 'text-red-600' : 'text-green-600'
              }`}>
                {schedule.time}
              </span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@eibm_especialidades',
      color: 'from-pink-500 to-purple-600',
      url: 'https://instagram.com'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'EIBM Especialidades',
      color: 'from-blue-600 to-blue-700',
      url: 'https://facebook.com'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'EIBM Especialidades',
      color: 'from-blue-700 to-blue-800',
      url: 'https://linkedin.com'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer group"
                  onClick={() => window.open(social.url, '_blank')}>
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{social.name}</h3>
                <p className="text-sm text-gray-600">{social.handle}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
          <Send className="w-6 h-6 mr-3 text-blue-600" />
          Envie uma Mensagem
        </CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e entraremos em contato em breve.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assunto *
              </label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecione um assunto</option>
                <option value="consulta">Agendar Consulta</option>
                <option value="informacoes">Solicitar Informações</option>
                <option value="convenio">Convênios</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Descreva como podemos ajudá-lo..."
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </CardContent>
    </Card>
  );
};

interface ContatosPageProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function ContatosPage({ onNavigateHome, onNavigateToPage }: ContatosPageProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-10"
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
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-cyan-200 rounded-full opacity-20"
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
        currentPage="contatos"
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
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Estamos Aqui para Ajudar
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                    Entre em
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Contato
                  </span>
                  <br />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Cuidado que Transforma Vidas
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Estamos prontos para atendê-lo com excelência e dedicação. 
                  Entre em contato conosco e descubra como podemos ajudar você 
                  ou sua família a alcançar o melhor desenvolvimento possível.
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
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop"
                  alt="Atendimento especializado e humanizado"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
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
                <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-blue-700" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
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
                <Mail className="w-6 h-6 sm:w-10 sm:h-10 text-cyan-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Como Entrar em Contato
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Escolha a forma de contato que for mais conveniente para você. 
              Estamos sempre disponíveis para esclarecer dúvidas e agendar consultas.
            </motion.p>
          </div>
          
          <ContactInfo />
        </div>
      </AnimatedSection>

      {/* Business Hours and Form Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <BusinessHours />
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <Building className="w-6 h-6 mr-3 text-blue-600" />
                    Facilidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Car, text: 'Estacionamento' },
                      { icon: Accessibility, text: 'Acessibilidade' },
                      { icon: Wifi, text: 'Wi-Fi Gratuito' },
                      { icon: Coffee, text: 'Área de Espera' }
                    ].map((facility, index) => {
                      const IconComponent = facility.icon;
                      return (
                        <div key={index} className="flex items-center space-x-2">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-700">{facility.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Siga-nos nas Redes Sociais
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Acompanhe nossas novidades, dicas e conteúdos exclusivos.
            </motion.p>
          </div>
          
          <SocialMedia />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pronto para Começar?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Agende sua consulta hoje mesmo e dê o primeiro passo para uma vida melhor.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('tel:+5511999999999')}
            >
              Ligar Agora
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer
        specialtyName="Contato"
        specialtyDescription="Entre em Contato Conosco"
        specialtyIcon={<Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
        areas={[
          "Agendamento de Consultas",
          "Informações sobre Serviços",
          "Dúvidas Gerais",
          "Parcerias",
          "Feedback",
          "Suporte"
        ]}
        treatments={[
          "Atendimento Presencial",
          "Teleconsulta",
          "Avaliações",
          "Terapias Especializadas",
          "Grupos de Apoio",
          "Programas Preventivos"
        ]}
        aboutText="Estamos aqui para ajudar você. Entre em contato conosco através dos canais disponíveis e tire todas as suas dúvidas."
      />
    </div>
  );
}