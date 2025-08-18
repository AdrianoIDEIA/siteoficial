import { Heart, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Cada paciente recebe atenção individual e tratamento personalizado para suas necessidades específicas.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Nossos médicos são especialistas em suas áreas, com formação atualizada e experiência comprovada.",
    color: "from-primary to-primary-medium"
  },
  {
    icon: Award,
    title: "Excelência Médica",
    description: "Comprometidos com os mais altos padrões de qualidade e excelência no atendimento médico.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Consultas pontuais e processos eficientes para otimizar seu tempo e experiência.",
    color: "from-primary-medium to-primary-light"
  }
];

const statsVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  })
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -right-20 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-medium to-primary-light bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Sobre a Clínica EIBM
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A Clínica EIBM - Especialidades Integradas é um centro médico moderno que une 
              diferentes especialidades em um só lugar, oferecendo atendimento completo e 
              integrado para toda a família.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nossa missão é proporcionar cuidados médicos de excelência, combinando expertise 
              profissional com tecnologia avançada e um atendimento humanizado.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div 
                className="text-center p-6 glass rounded-xl group cursor-pointer"
                variants={statsVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(25, 81, 132, 0.1)"
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary mb-1"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  15+
                </motion.div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 glass rounded-xl group cursor-pointer"
                variants={statsVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(25, 81, 132, 0.1)"
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-medium mb-1"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  5000+
                </motion.div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="flex items-start space-x-4 p-6 glass rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(25, 81, 132, 0.1)"
                  }}
                >
                  <motion.div 
                    className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg group-hover:shadow-xl`}
                    whileHover={{ 
                      rotate: 10,
                      scale: 1.1
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


