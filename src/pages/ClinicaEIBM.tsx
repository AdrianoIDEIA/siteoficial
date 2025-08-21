import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { StandardHeader } from '../components/StandardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';
import { Heart, Users, Shield, Cpu, Stethoscope, Microscope, Activity, Target, Syringe } from 'lucide-react';

interface ClinicaEIBMProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
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

export default function ClinicaEIBM({ onNavigateHome, onNavigateToPage }: ClinicaEIBMProps = {}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-16 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-10" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-sky-200 rounded-full opacity-20" animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
      </div>

      <StandardHeader onNavigateHome={onNavigateHome} onNavigateToPage={onNavigateToPage} currentPage="clinica" />

      {/* Hero */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div className="space-y-6 sm:space-y-8 text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-4 sm:space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Especialidades Integradas
                  </Badge>
                </motion.div>
                <div className="flex justify-center lg:justify-start mb-2">
                  <img src="/logo_eibm_clinica.svg" alt="EIBM Clínica" className="h-16 sm:h-20 md:h-24 w-auto" />
                </div>
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">Especialidades EIBM</span>
                  <br />
                  <span className="text-gray-800">Cuidado Integrado e Tecnológico</span>
                  <br />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">Atendimento humanizado, equipe multidisciplinar e tecnologia de ponta</span>
                </motion.h1>
                <motion.p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  Na Clínica EIBM, unimos especialidades médicas e terapêuticas para entregar diagnósticos precisos e planos de cuidado personalizados, em um único ecossistema.
                </motion.p>
              </div>
            </motion.div>

            <motion.div className="relative order-first lg:order-last" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <ImageWithFallback src="https://images.unsplash.com/photo-1580281657527-47d1cfba5d0e?w=600&h=600&fit=crop" alt="Equipe de saúde integrada" className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full" />
              </motion.div>
              <motion.div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full opacity-80 shadow-lg flex items-center justify-center" animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-blue-700" />
              </motion.div>
              <motion.div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-80 shadow-lg flex items-center justify-center" animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <Cpu className="w-6 h-6 sm:w-10 sm:h-10 text-sky-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Abordagem/Especialidades */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              Nossas Especialidades
            </motion.h2>
            <motion.p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Integração entre especialidades, tecnologia e cuidado humanizado para resultados consistentes.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[{ title: 'Clínica Geral', icon: Stethoscope, color: 'from-blue-500 to-sky-600' }, { title: 'Cardiologia', icon: Heart, color: 'from-red-500 to-pink-600' }, { title: 'Neurologia', icon: Activity, color: 'from-indigo-500 to-violet-600' }, { title: 'Pediatria', icon: Syringe, color: 'from-emerald-500 to-green-600' }].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        Atendimento especializado com enfoque no paciente, trabalhando em conjunto com outras áreas quando necessário.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Diferenciais */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              Diferenciais da Clínica
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[{ icon: Users, title: 'Equipe Integrada', description: 'Especialistas trabalhando juntos para um plano de cuidado único.' }, { icon: Cpu, title: 'Tecnologia Avançada', description: 'Recursos diagnósticos e terapêuticos de última geração.' }, { icon: Heart, title: 'Cuidado Humanizado', description: 'Atenção empática e personalizada em cada etapa.' }].map((b, index) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800">{b.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">{b.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-sky-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Agende sua Avaliação
          </motion.h2>
          <motion.p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Fale com nossa equipe e descubra o melhor caminho de cuidado para você.
          </motion.p>
          <motion.button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigateToPage?.('contatos')}>
            Agendar
          </motion.button>
        </div>
      </AnimatedSection>

      <Footer specialtyName="Especialidades Clínicas" specialtyDescription="Clínica EIBM" specialtyIcon={<Stethoscope className="w-4 h-4 sm:w-6 sm:h-6 text-white" />} areas={[ 'Clínica Geral', 'Cardiologia', 'Neurologia', 'Pediatria', 'Exames', 'Acompanhamento' ]} treatments={[ 'Consultas Integradas', 'Diagnóstico Avançado', 'Reabilitação Multidisciplinar', 'Acompanhamento Longitudinal' ]} aboutText="Integramos especialidades, tecnologia e cuidado centrado no paciente para uma jornada de saúde completa." />
    </div>
  );
}