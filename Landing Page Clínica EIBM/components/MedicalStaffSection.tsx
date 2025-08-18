import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  description: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Carlos Mendes",
    specialty: "Cardiologista",
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NTM3NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Especialista em cardiologia com mais de 15 anos de experiência, focado em prevenção e tratamento de doenças cardiovasculares."
  },
  {
    id: 2,
    name: "Dra. Ana Silva",
    specialty: "Dermatologista",
    image: "https://images.unsplash.com/photo-1576669801945-7a346954da5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTUzNzQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Dermatologista com expertise em dermatologia clínica e estética, oferecendo tratamentos personalizados para cada paciente."
  },
  {
    id: 3,
    name: "Dr. Ricardo Santos",
    specialty: "Ortopedista",
    image: "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1MTY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Ortopedista especializado em cirurgias do joelho e traumatologia esportiva, com formação internacional e técnicas avançadas."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export function MedicalStaffSection() {
  return (
    <section id="medical-staff" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-blue-100/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-primary/8 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-medium to-primary-light bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Nosso Corpo Clínico
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Profissionais qualificados e experientes, dedicados a oferecer o melhor atendimento médico
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {doctors.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:glass-hover"
                layout
              >
                <div className="aspect-square overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating specialty badge */}
                  <motion.div
                    className="absolute top-4 right-4 glass rounded-full px-3 py-1 opacity-0 group-hover:opacity-100"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs font-medium text-primary">{doctor.specialty}</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.h3 
                    className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {doctor.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="text-primary-medium font-medium mb-3 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + 0.1 * index }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary-light rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    {doctor.specialty}
                  </motion.div>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + 0.1 * index }}
                  >
                    {doctor.description}
                  </motion.p>

                  {/* Interactive hover element */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-sm font-medium">Ver mais</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}