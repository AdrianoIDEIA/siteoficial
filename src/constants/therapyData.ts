/**
 * Dados estruturados das terapias
 * Implementa o princípio DRY e Separação de Preocupações
 * Centraliza todos os dados de terapias em um local
 */

export interface TherapyCard {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
  detailedDescription?: string;
  benefits?: string[];
  targetAudience?: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  objectives: string[];
  process: string[];
  icon: string;
  image?: string;
  color: string;
}

export const THERAPY_CARDS: TherapyCard[] = [
  {
    id: 'fono',
    title: 'Fonoaudiologia',
    icon: '🗣️',
    color: 'green',
    description: 'Trabalha com o desenvolvimento da comunicação, linguagem, fala e funções orais, essenciais para a interação social e aprendizagem.',
    features: [
      'Desenvolvimento da linguagem',
      'Comunicação alternativa', 
      'Funções orais e alimentação'
    ],
    detailedDescription: 'A fonoaudiologia é fundamental no desenvolvimento da comunicação e linguagem, trabalhando aspectos como articulação, fluência, voz e compreensão.',
    benefits: [
      'Melhora na comunicação verbal e não-verbal',
      'Desenvolvimento de habilidades sociais',
      'Fortalecimento das funções orais'
    ],
    targetAudience: [
      'Crianças com atraso de linguagem',
      'Pessoas com dificuldades de fala',
      'Indivíduos com transtornos de deglutição'
    ]
  },
  {
    id: 'psicologia',
    title: 'Psicologia',
    icon: '🧠',
    color: 'blue',
    description: 'Foca no desenvolvimento emocional, comportamental e cognitivo, promovendo bem-estar mental e habilidades de enfrentamento.',
    features: [
      'Regulação emocional',
      'Desenvolvimento cognitivo',
      'Habilidades sociais'
    ],
    detailedDescription: 'A psicologia trabalha com aspectos emocionais, comportamentais e cognitivos, promovendo o desenvolvimento integral da pessoa.',
    benefits: [
      'Melhora na regulação emocional',
      'Desenvolvimento de estratégias de enfrentamento',
      'Fortalecimento da autoestima'
    ],
    targetAudience: [
      'Crianças com dificuldades emocionais',
      'Adolescentes em desenvolvimento',
      'Famílias em processo de adaptação'
    ]
  },
  {
    id: 'terapia_ocupacional',
    title: 'Terapia Ocupacional',
    icon: '✋',
    color: 'purple',
    description: 'Desenvolve habilidades motoras, sensoriais e de vida diária, promovendo independência e qualidade de vida.',
    features: [
      'Coordenação motora',
      'Integração sensorial',
      'Atividades de vida diária'
    ],
    detailedDescription: 'A terapia ocupacional foca no desenvolvimento de habilidades necessárias para as atividades do dia a dia.',
    benefits: [
      'Melhora na coordenação motora',
      'Desenvolvimento da independência',
      'Integração sensorial adequada'
    ],
    targetAudience: [
      'Crianças com dificuldades motoras',
      'Pessoas com transtornos sensoriais',
      'Indivíduos buscando independência'
    ]
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogia',
    icon: '📚',
    color: 'orange',
    description: 'Trabalha com dificuldades de aprendizagem, desenvolvendo estratégias personalizadas para o sucesso acadêmico.',
    features: [
      'Estratégias de aprendizagem',
      'Desenvolvimento cognitivo',
      'Suporte acadêmico'
    ],
    detailedDescription: 'A psicopedagogia une conhecimentos da psicologia e pedagogia para abordar dificuldades de aprendizagem.',
    benefits: [
      'Melhora no desempenho acadêmico',
      'Desenvolvimento de estratégias de estudo',
      'Aumento da motivação para aprender'
    ],
    targetAudience: [
      'Estudantes com dificuldades de aprendizagem',
      'Crianças com transtornos de atenção',
      'Pessoas buscando melhor desempenho acadêmico'
    ]
  },
  {
    id: 'clinica_ideia',
    title: 'Clínica IDEIA',
    icon: '💡',
    color: 'yellow',
    description: 'Programa intensivo e personalizado que integra todas as terapias para máximo desenvolvimento do potencial individual.',
    features: [
      'Abordagem multidisciplinar',
      'Programa intensivo',
      'Acompanhamento personalizado'
    ],
    detailedDescription: 'A Clínica IDEIA oferece um programa integrado e intensivo que combina diferentes abordagens terapêuticas.',
    benefits: [
      'Desenvolvimento integral',
      'Resultados mais rápidos',
      'Acompanhamento especializado'
    ],
    targetAudience: [
      'Pessoas que precisam de intervenção intensiva',
      'Famílias buscando abordagem integrada',
      'Casos complexos que requerem múltiplas terapias'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'avaliacoes',
    title: 'Avaliações Padronizadas',
    duration: '2-4 semanas',
    description: 'Avaliação completa e multidisciplinar para identificar necessidades específicas e potenciais de desenvolvimento.',
    objectives: [
      'Identificar pontos fortes e áreas de desenvolvimento',
      'Estabelecer linha de base para acompanhamento',
      'Definir metas terapêuticas específicas'
    ],
    process: [
      'Anamnese detalhada com a família',
      'Aplicação de testes padronizados',
      'Observação comportamental estruturada',
      'Relatório técnico com recomendações'
    ],
    icon: 'FileText',
    color: 'blue'
  },
  {
    id: 'plano_treinamento',
    title: 'Plano de Treinamento Intensivo IDEIA',
    duration: '6-12 meses',
    description: 'Programa personalizado e intensivo de desenvolvimento de habilidades baseado nas necessidades identificadas.',
    objectives: [
      'Desenvolver habilidades específicas identificadas',
      'Promover generalização dos aprendizados',
      'Fortalecer autonomia e independência'
    ],
    process: [
      'Sessões terapêuticas individualizadas',
      'Atividades estruturadas e lúdicas',
      'Monitoramento contínuo do progresso',
      'Ajustes no plano conforme evolução'
    ],
    icon: 'Target',
    color: 'green'
  },
  {
    id: 'suporte_escolar',
    title: 'Suporte e PEI Escolar',
    duration: 'Contínuo',
    description: 'Acompanhamento e suporte no ambiente escolar com desenvolvimento de Plano Educacional Individualizado.',
    objectives: [
      'Facilitar inclusão escolar efetiva',
      'Desenvolver estratégias pedagógicas adaptadas',
      'Promover colaboração escola-família-terapeutas'
    ],
    process: [
      'Reuniões com equipe escolar',
      'Desenvolvimento do PEI',
      'Treinamento de professores',
      'Acompanhamento regular do progresso'
    ],
    icon: 'School',
    color: 'purple'
  },
  {
    id: 'acompanhamento_residencial',
    title: 'Acompanhamento Residencial',
    duration: 'Conforme necessidade',
    description: 'Suporte especializado no ambiente familiar para generalização das habilidades desenvolvidas.',
    objectives: [
      'Generalizar habilidades para o ambiente natural',
      'Capacitar família para continuidade',
      'Promover autonomia no dia a dia'
    ],
    process: [
      'Visitas domiciliares estruturadas',
      'Orientação familiar específica',
      'Adaptação do ambiente doméstico',
      'Treinamento de cuidadores'
    ],
    icon: 'Home',
    color: 'orange'
  },
  {
    id: 'relatorios_evolucao',
    title: 'Relatórios de Evolução',
    duration: 'Mensal/Trimestral',
    description: 'Documentação detalhada do progresso e ajustes necessários no plano terapêutico.',
    objectives: [
      'Documentar progresso objetivamente',
      'Identificar necessidades de ajustes',
      'Comunicar evolução para família e escola'
    ],
    process: [
      'Coleta de dados sistemática',
      'Análise estatística do progresso',
      'Relatórios técnicos detalhados',
      'Reuniões de feedback com família'
    ],
    icon: 'BarChart3',
    color: 'indigo'
  },
  {
    id: 'alta_potencial',
    title: 'Alta e Potencial Pleno',
    duration: 'Variável',
    description: 'Processo de alta terapêutica com foco na manutenção dos ganhos e desenvolvimento contínuo.',
    objectives: [
      'Consolidar habilidades desenvolvidas',
      'Preparar para independência',
      'Estabelecer plano de manutenção'
    ],
    process: [
      'Avaliação final de progresso',
      'Plano de manutenção personalizado',
      'Orientações para continuidade',
      'Acompanhamento de follow-up'
    ],
    icon: 'Trophy',
    color: 'yellow'
  }
];