import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: "(11) 99999-9999",
    subtitle: "WhatsApp",
    href: "tel:+5511999999999"
  },
  {
    icon: Mail,
    title: "contato@clinicaeibm.com.br",
    subtitle: "E-mail",
    href: "mailto:contato@clinicaeibm.com.br"
  },
  {
    icon: MapPin,
    title: "Rua das Especialidades, 123",
    subtitle: "São Paulo - SP, 01234-567",
    href: "#"
  }
];

const schedule = [
  { day: "Segunda a Sexta", time: "08:00 - 18:00", isOpen: true },
  { day: "Sábado", time: "08:00 - 12:00", isOpen: true },
  { day: "Domingo", time: "Fechado", isOpen: false }
];

const links = [
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Uso", href: "#" },
  { name: "Perguntas Frequentes", href: "#" }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-primary-light/8 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-primary via-primary-medium to-primary-light rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ 
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(25, 81, 132, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-lg select-none">EIBM</span>
              </motion.div>
              <div>
                <motion.div 
                  className="text-xl font-semibold group-hover:text-primary-light transition-colors"
                  whileHover={{ x: 3 }}
                >
                  Clínica EIBM
                </motion.div>
                <div className="text-gray-400">Especialidades Integradas</div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 mb-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Cuidados médicos integrados e especializados, oferecendo atendimento de excelência 
              com foco na sua saúde e bem-estar.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.name}
                  href={social.href} 
                  className="glass-hover rounded-lg p-3 text-gray-400 hover:text-primary-light transition-all duration-300"
                  whileHover={{ 
                    y: -3,
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(25, 81, 132, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary-light">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 group cursor-pointer glass-hover rounded-lg p-3 transition-all duration-300"
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(25, 81, 132, 0.1)"
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 10,
                      scale: 1.1
                    }}
                  >
                    <contact.icon className="w-5 h-5 text-primary-light flex-shrink-0" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="font-medium group-hover:text-primary-light transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {contact.title}
                    </motion.div>
                    <div className="text-gray-400 text-sm">{contact.subtitle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Horário de Funcionamento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary-light">Horário</h3>
            <div className="space-y-3 mb-6">
              {schedule.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center space-x-3 glass-hover rounded-lg p-3 transition-all duration-300 ${
                    item.isOpen ? 'hover:bg-green-500/10' : 'hover:bg-red-500/10'
                  }`}
                  whileHover={{ x: 3 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.div
                    animate={{ 
                      scale: item.isOpen ? [1, 1.1, 1] : 1,
                      opacity: item.isOpen ? [0.7, 1, 0.7] : 0.5
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: item.isOpen ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    <Clock className={`w-5 h-5 flex-shrink-0 ${
                      item.isOpen ? 'text-primary-light' : 'text-gray-600'
                    }`} />
                  </motion.div>
                  <div>
                    <motion.div 
                      className={`font-medium ${
                        item.isOpen ? 'text-white' : 'text-gray-400'
                      }`}
                      whileHover={{ x: 2 }}
                    >
                      {item.day}
                    </motion.div>
                    <div className={`text-sm ${
                      item.isOpen ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="pt-6 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h4 className="font-medium mb-3 text-primary-light">Links Úteis</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.a 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-primary-light transition-all duration-300 inline-block"
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Clínica EIBM - Especialidades Integradas. Todos os direitos reservados.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}