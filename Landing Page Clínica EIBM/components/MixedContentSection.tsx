import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlassButton } from './GlassButton';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

const authoralContent: ContentItem[] = [
  {
    id: 1,
    title: "5 Dicas para Manter o Coração Saudável",
    image: "https://images.unsplash.com/photo-1642844613096-7b743b7d9915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1NTEwMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#"
  },
  {
    id: 2,
    title: "Cuidados com a Pele no Verão",
    image: "https://images.unsplash.com/photo-1614169270929-313072140a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTU1Mzc0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#"
  },
  {
    id: 3,
    title: "Prevenção de Lesões Esportivas",
    image: "https://images.unsplash.com/photo-1739285388427-d6f85d12a8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudCUyMGNhcmV8ZW58MXx8fHwxNzU1NTM3NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#"
  },
  {
    id: 4,
    title: "A Importância do Check-up Regular",
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NTM3NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#"
  }
];

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  })
};

export function MixedContentSection() {
  return (
    <section id="content" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 -right-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-32 w-80 h-80 bg-primary-light/6 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 20,
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
            Conteúdo e Redes Sociais
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fique por dentro das novidades e dicas de saúde da nossa equipe
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {/* Instagram Feed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Siga-nos no Instagram
            </motion.h3>
            
            <motion.div 
              className="glass rounded-2xl p-8 text-center relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(25, 81, 132, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-50"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              <div className="glass rounded-xl p-8 max-w-md mx-auto relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </motion.svg>
                </motion.div>
                
                <motion.h4 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  @clinicaeibm
                </motion.h4>
                
                <motion.p 
                  className="text-muted-foreground mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Dicas de saúde, novidades da clínica e muito mais!
                </motion.p>
                
                <GlassButton
                  variant="primary"
                  onClick={() => window.open('https://instagram.com/clinicaeibm', '_blank')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Seguir no Instagram
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ❤️
                    </motion.div>
                  </motion.span>
                </GlassButton>
              </div>
            </motion.div>
          </motion.div>

          {/* Conteúdo Autoral */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              Artigos e Conteúdos
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {authoralContent.map((item, index) => (
                <motion.a 
                  key={item.id}
                  href={item.link}
                  custom={index}
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="group block glass rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    />
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating read indicator */}
                    <motion.div
                      className="absolute top-3 right-3 glass rounded-full p-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </motion.svg>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + 0.05 * index }}
                  >
                    <motion.h4 
                      className="font-semibold group-hover:text-primary transition-colors duration-300 leading-tight"
                      whileHover={{ x: 3 }}
                    >
                      {item.title}
                    </motion.h4>
                    
                    {/* Read more indicator */}
                    <motion.div
                      className="flex items-center gap-1 mt-2 text-sm text-primary opacity-0 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span>Ler mais</span>
                      <motion.svg
                        className="w-3 h-3"
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
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}