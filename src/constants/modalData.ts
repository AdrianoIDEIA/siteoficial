import { 
  Brain, Heart, Users, Stethoscope, Baby, 
  GraduationCap, Palette, Music, Eye, Ear, Hand, 
  Puzzle, Activity, Lightbulb, Target, Award, 
  CheckCircle, ArrowRight, Star, Shield, Zap,
  Sparkles, Wand2, Coffee, BookOpen, Headphones,
  Play, Pause, MousePointer, Globe
} from 'lucide-react';

export interface ModalData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sectionTitle: string;
  sectionIcon: any;
  buttonText: string;
  buttonIcon: any;
  buttonLink: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  specialties?: Array<{
    id: string;
    name: string;
    icon: any;
    color: string;
  }>;
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
  }>;
  stats?: Array<{
    id: string;
    label: string;
    icon: any;
    color: string;
  }>;
}

export const MODAL_DATA: Record<string, ModalData> = {
  terapias: {
    id: 'terapias',
    title: 'EIBM Terapias',
    subtitle: 'Equipe Integrada de Bem-estar Mental',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    sectionTitle: 'Nossas Especialidades',
    sectionIcon: Brain,
    buttonText: 'Conhecer Terapias',
    buttonIcon: Sparkles,
    buttonLink: 'Portalterapias.tsx',
    colorScheme: {
      primary: '#195184',
      secondary: '#2563eb',
      accent: 'linear-gradient(90deg, #195184, #2563eb)'
    },
    specialties: [
      { id: 'psicologia', name: 'Psicologia', icon: Brain, color: 'text-blue-600' },
      { id: 'terapia-ocupacional', name: 'Terapia Ocupacional', icon: Hand, color: 'text-indigo-600' },
      { id: 'fonoaudiologia', name: 'Fonoaudiologia', icon: Ear, color: 'text-purple-600' },
      { id: 'psicopedagogia', name: 'Psicopedagogia', icon: GraduationCap, color: 'text-green-600' },
      { id: 'musicoterapia', name: 'Musicoterapia', icon: Music, color: 'text-pink-600' },
      { id: 'arteterapia', name: 'Arteterapia', icon: Palette, color: 'text-orange-600' }
    ],
    features: [
      {
        id: 'avaliacao-personalizada',
        title: 'Avaliação Personalizada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        icon: Target,
        color: 'text-blue-600'
      },
      {
        id: 'equipe-multidisciplinar',
        title: 'Equipe Multidisciplinar',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        icon: Users,
        color: 'text-blue-600'
      }
    ]
  },
  transtornos: {
    id: 'transtornos',
    title: 'GATTA',
    subtitle: 'Grupo de Apoio e Tratamento de Transtornos Alimentares',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    sectionTitle: 'Nossa Abordagem',
    sectionIcon: Shield,
    buttonText: 'Conhecer GATTA',
    buttonIcon: Shield,
    buttonLink: 'gatta.html',
    colorScheme: {
      primary: '#ED3924',
      secondary: '#ef4444',
      accent: 'linear-gradient(90deg, #ED3924, #ef4444)'
    },
    features: [
      {
        id: 'avaliacao-medica',
        title: 'Avaliação Médica',
        description: 'Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        icon: Stethoscope,
        color: 'text-red-600'
      },
      {
        id: 'apoio-psicologico',
        title: 'Apoio Psicológico',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: Heart,
        color: 'text-red-600'
      },
      {
        id: 'grupos-apoio',
        title: 'Grupos de Apoio',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        icon: Users,
        color: 'text-red-600'
      },
      {
        id: 'reabilitacao-nutricional',
        title: 'Reabilitação Nutricional',
        description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
        icon: Activity,
        color: 'text-red-600'
      }
    ]
  },
  idea: {
    id: 'idea',
    title: 'IDEIA',
    subtitle: 'Instituto de Desenvolvimento e Estruturação de Ambientes Inclusivos',
    description: 'Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    sectionTitle: 'Nossos Pilares',
    sectionIcon: Lightbulb,
    buttonText: 'Descobrir IDEIA',
    buttonIcon: Wand2,
    buttonLink: 'ideia.html',
    colorScheme: {
      primary: '#EFCD18',
      secondary: '#f59e0b',
      accent: 'linear-gradient(90deg, #EFCD18, #f59e0b)'
    },
    features: [
      {
        id: 'treinamento-habilidades',
        title: 'Treinamento de Habilidades',
        description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
        icon: Target,
        color: 'text-yellow-600'
      },
      {
        id: 'ambiente-escolar',
        title: 'Ambiente Escolar',
        description: 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        icon: GraduationCap,
        color: 'text-yellow-600'
      },
      {
        id: 'ambiente-familiar',
        title: 'Ambiente Familiar',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
        icon: Heart,
        color: 'text-yellow-600'
      },
      {
        id: 'metodologia-cientifica',
        title: 'Metodologia Científica',
        description: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.',
        icon: Star,
        color: 'text-yellow-600'
      }
    ]
  },
  especialidades: {
    id: 'especialidades',
    title: 'Clínica EIBM',
    subtitle: 'Especialidades Integradas e Bem-estar Multidisciplinar',
    description: 'Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos.',
    sectionTitle: 'Diferenciais da Clínica',
    sectionIcon: Award,
    buttonText: 'Explorar Clínica',
    buttonIcon: Award,
    buttonLink: 'especialidades.html',
    colorScheme: {
      primary: '#6CBB45',
      secondary: '#22c55e',
      accent: 'linear-gradient(90deg, #6CBB45, #22c55e)'
    },
    features: [
      {
        id: 'equipe-integrada',
        title: 'Equipe Integrada',
        description: 'Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        icon: Users,
        color: 'text-green-600'
      },
      {
        id: 'plano-personalizado',
        title: 'Plano Personalizado',
        description: 'Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.',
        icon: Puzzle,
        color: 'text-green-600'
      },
      {
        id: 'acompanhamento-continuo',
        title: 'Acompanhamento Contínuo',
        description: 'Animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        icon: Eye,
        color: 'text-green-600'
      },
      {
        id: 'tecnologia-avancada',
        title: 'Tecnologia Avançada',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.',
        icon: Zap,
        color: 'text-green-600'
      }
    ],
    stats: [
      {
        id: 'excelencia',
        label: 'Excelência em Atendimento',
        icon: Sparkles,
        color: 'text-green-600'
      },
      {
        id: 'inovacao',
        label: 'Inovação Constante',
        icon: Globe,
        color: 'text-green-600'
      },
      {
        id: 'cuidado-humanizado',
        label: 'Cuidado Humanizado',
        icon: Heart,
        color: 'text-green-600'
      }
    ]
  }
};

export const CIRCLE_DATA = [
  {
    id: 'terapias',
    label: 'EIBM Terapias',
    displayText: 'TERAPIAS',
    borderColor: 'border-blue-700',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-700',
    animation: 'orbit-north'
  },
  {
    id: 'transtornos',
    label: 'GATTA',
    displayText: 'GATTA',
    borderColor: 'border-red-600',
    bgColor: 'bg-red-600',
    textColor: 'text-red-600',
    animation: 'orbit-east'
  },
  {
    id: 'idea',
    label: 'IDEIA',
    displayText: 'IDEIA',
    borderColor: 'border-yellow-500',
    bgColor: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    animation: 'orbit-west'
  },
  {
    id: 'especialidades',
    label: 'Clínica EIBM',
    displayText: 'CLÍNICA',
    borderColor: 'border-green-600',
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    animation: 'orbit-south'
  }
];

export const NAVIGATION_LINKS = [
  { href: 'especialidades.html', label: 'Clínica EIBM' },
  { href: 'gatta.html', label: 'GATTA' },
  { href: '/terapias', label: 'EIBM Terapias' },
  { href: 'ideia.html', label: 'IDEIA' },
  { href: 'contato.html', label: 'Contato' }
];