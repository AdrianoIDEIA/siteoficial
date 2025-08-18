import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Phone, title: '(11) 99999-9999', subtitle: 'WhatsApp', href: 'tel:+5511999999999' },
  { icon: Mail, title: 'contato@clinicaeibm.com.br', subtitle: 'E-mail', href: 'mailto:contato@clinicaeibm.com.br' },
  { icon: MapPin, title: 'Rua das Especialidades, 123', subtitle: 'São Paulo - SP, 01234-567', href: '#' }
];

const schedule = [
  { day: 'Segunda a Sexta', time: '08:00 - 18:00', isOpen: true },
  { day: 'Sábado', time: '08:00 - 12:00', isOpen: true },
  { day: 'Domingo', time: 'Fechado', isOpen: false }
];

const links = [
  { name: 'Política de Privacidade', href: '#' },
  { name: 'Termos de Uso', href: '#' },
  { name: 'Perguntas Frequentes', href: '#' }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-20 left-20 w-32 h-32 bg-primary-light/8 rounded-full blur-2xl" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.div className="flex items-center space-x-3 mb-6 group cursor-pointer" whileHover={{ scale: 1.02 }}>
              <motion.div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-medium to-primary-light rounded-xl flex items-center justify-center shadow-lg" whileHover={{ rotate: 5, boxShadow: '0 10px 25px rgba(25, 81, 132, 0.3)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                <span className="text-white font-bold text-lg select-none">EIBM</span>
              </motion.div>
              <div>
                <motion.div className="text-xl font-semibold group-hover:text-primary-light transition-colors" whileHover={{ x: 3 }}>
                  Clínica EIBM
                </motion.div>
                <div className="text-gray-400">Especialidades Integradas</div>
              </div>
            </motion.div>
            <motion.p className="text-gray-400 mb-6 max-w-md leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
              Cuidados médicos integrados e especializados, oferecendo atendimento de excelência com foco na sua saúde e bem-estar.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h3 className="text-lg font-semibold mb-6 text-primary-light">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a key={index} href={contact.href} className="flex items-center space-x-3 group cursor-pointer glass-hover rounded-lg p-3 transition-all duration-300" whileHover={{ x: 5, backgroundColor: 'rgba(25, 81, 132, 0.1)' }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                    <contact.icon className="w-5 h-5 text-primary-light flex-shrink-0" />
                  </motion.div>
                  <div>
                    <motion.div className="font-medium group-hover:text-primary-light transition-colors" whileHover={{ x: 2 }}>
                      {contact.title}
                    </motion.div>
                    <div className="text-gray-400 text-sm">{contact.subtitle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}>
            <h3 className="text-lg font-semibold mb-6 text-primary-light">Horário</h3>
            <div className="space-y-3 mb-6">
              {schedule.map((item, index) => (
                <motion.div key={index} className={`flex items-center space-x-3 glass-hover rounded-lg p-3 transition-all duration-300 ${item.isOpen ? 'hover:bg-green-500/10' : 'hover:bg-red-500/10'}`} whileHover={{ x: 3 }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                  <motion.div animate={{ scale: item.isOpen ? [1, 1.1, 1] : 1, opacity: item.isOpen ? [0.7, 1, 0.7] : 0.5 }} transition={{ duration: 2, repeat: item.isOpen ? Infinity : 0, ease: 'easeInOut' }}>
                    <Clock className={`w-5 h-5 flex-shrink-0 ${item.isOpen ? 'text-primary-light' : 'text-gray-600'}`} />
                  </motion.div>
                  <div>
                    <motion.div className={`font-medium ${item.isOpen ? 'text-white' : 'text-gray-400'}`} whileHover={{ x: 2 }}>
                      {item.day}
                    </motion.div>
                    <div className={`${item.isOpen ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div className="pt-6 border-t border-gray-700" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }}>
              <h4 className="font-medium mb-3 text-primary-light">Links Úteis</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                    <motion.a href={link.href} className="text-sm text-gray-400 hover:text-primary-light transition-all duration-300 inline-block" whileHover={{ x: 5, scale: 1.02 }}>
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="border-t border-gray-700 mt-12 pt-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }}>
          <motion.p className="text-gray-400" whileHover={{ scale: 1.02 }}>
            © 2025 Clínica EIBM - Especialidades Integradas. Todos os direitos reservados.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}


