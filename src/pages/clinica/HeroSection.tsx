import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassButton } from './GlassButton';
import { logoSemBolinha as logoFallback } from '../../assets';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl" animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-medium/15 rounded-full blur-3xl" animate={{ x: [0, -30, 0], y: [0, -50, 0], scale: [1, 0.9, 1] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl" animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
        <motion.button onClick={() => scrollToSection('about')} className="glass rounded-full p-4 hover:shadow-xl group flex items-center justify-center" aria-label="Rolar para baixo" whileHover={{ y: -5, scale: 1.1, boxShadow: '0 15px 30px rgba(25, 81, 132, 0.2)' }} whileTap={{ scale: 0.9 }} animate={{ y: [0, -8, 0] }} transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}>
          <ChevronDown className="w-6 h-6 text-primary group-hover:text-primary-medium transition-colors" />
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6 h-[90vh] md:h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <motion.div className="text-center lg:text-left" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, type: 'spring', stiffness: 100 }}>
            <div className="mb-8">
              <motion.div className="mx-auto lg:mx-0 mb-6 animate-float" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <img
                  src={process.env.PUBLIC_URL + '/logo_eibm_clinica.svg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = logoFallback; }}
                  alt="Clínica EIBM"
                  className="w-56 sm:w-72 md:w-80 lg:w-[520px] xl:w-[640px] h-auto object-contain drop-shadow"
                />
              </motion.div>
              <motion.div className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                Especialidades Integradas
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, type: 'spring', stiffness: 100, delay: 0.3 }}>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              Cuidado Médico <motion.span className="text-primary bg-gradient-to-r from-primary via-primary-medium to-primary-light bg-clip-text text-transparent">Integrado</motion.span> e <motion.span className="text-primary-medium bg-gradient-to-r from-primary-medium to-primary-light bg-clip-text text-transparent">Especializado</motion.span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              Na Clínica EIBM, oferecemos atendimento médico de excelência com uma abordagem integrada, reunindo especialistas qualificados para cuidar da sua saúde de forma completa e personalizada.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
              <GlassButton size="lg" onClick={() => scrollToSection('contact')} className="group">
                Agende sua Consulta
              </GlassButton>
              <GlassButton variant="outline" size="lg" onClick={() => scrollToSection('medical-staff')}>
                Conheça Nossa Equipe
              </GlassButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


