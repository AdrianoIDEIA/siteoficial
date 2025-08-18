import { Heart, Users, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Users,
    title: 'Equipe Integrada',
    description:
      'Especialistas de múltiplas áreas trabalhando de forma coordenada, com planos compartilhados para cada paciente.'
  },
  {
    icon: Award,
    title: 'Excelência Clínica',
    description:
      'Protocolos baseados em evidências, auditoria contínua de qualidade e atualização científica permanente.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e Ética',
    description:
      'Governança clínica, sigilo de dados e consentimento informado em todas as etapas do cuidado.'
  },
  {
    icon: Heart,
    title: 'Cuidado Humanizado',
    description:
      'Atenção centrada na pessoa, acolhimento e comunicação clara com pacientes e familiares.'
  }
];

export function HighlightsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-medium to-primary-light bg-clip-text text-transparent">
            Diferenciais da Clínica
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A mesma identidade visual do portal, aplicada aos pilares de atendimento da Clínica EIBM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group glass rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 border border-white/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


