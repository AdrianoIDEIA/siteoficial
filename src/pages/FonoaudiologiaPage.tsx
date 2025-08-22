import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StandardHeader } from '../components/StandardHeader';
import Footer from '../components/Footer';
import TherapiesFooter from '../components/TherapiesFooter';
import { 
  Heart, Users, Brain, Gamepad2, CheckCircle, Target, Activity, Sparkles, Baby, GraduationCap,
  Puzzle, Lightbulb, Settings, Zap, Shield, Eye, Ear, Hand, Book, Palette, 
  Smile, TreePine, Flower2, Menu, X, Mic, VolumeX, Volume2, MessageCircle, Stethoscope, 
  Languages, School, Clock, AlertTriangle, HelpCircle, Waves, Star, Timer,
  Headphones, Speaker, MicIcon, Pause, FileAudio
} from 'lucide-react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
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

const DevelopmentTimeline = () => {
  const speechMilestones = [
    { 
      age: '0-6 meses', 
      title: 'Primeiros Sons e Reações', 
      description: 'Emite sons (balbucios), reage a vozes e sons do ambiente',
      details: 'Nesta fase inicial, o bebê desenvolve os primeiros sons comunicativos. Balbucios, reação a vozes familiares e sons do ambiente são marcos fundamentais. É o início da jornada comunicativa.',
      alertSigns: 'Ausência de reação a sons altos ou vozes familiares pode indicar necessidade de avaliação.'
    },
    { 
      age: '7-12 meses', 
      title: 'Primeiras Sílabas', 
      description: 'Começa a dizer sons como "mamama", "dadada"; entende "não", responde ao nome',
      details: 'Desenvolvimento do balbucio canônico com repetição de sílabas. A criança começa a entender palavras simples como "não" e responde quando chamada pelo nome.',
      alertSigns: 'Ausência de balbucios até os 12 meses é um sinal de alerta importante.'
    },
    { 
      age: '1 ano', 
      title: 'Primeiras Palavras', 
      description: 'Diz 1 a 3 palavras com significado ("mamãe", "papai", "água")',
      details: 'Surgimento das primeiras palavras verdadeiras com significado. A criança usa palavras funcionais para comunicar necessidades básicas.',
      alertSigns: 'Ausência de palavras aos 12 meses requer atenção profissional.'
    },
    { 
      age: '18 meses', 
      title: 'Expansão Vocabular', 
      description: 'Fala cerca de 10 a 20 palavras; aponta para pedir coisas',
      details: 'Vocabulário em expansão com 10-20 palavras. Uso de gestos comunicativos como apontar para fazer pedidos. Combinação de gestos e palavras.',
      alertSigns: 'Menos de 10 palavras aos 18 meses indica necessidade de avaliação.'
    },
    { 
      age: '2 anos', 
      title: 'Primeiras Frases', 
      description: 'Fala frases de 2 palavras ("quer água", "pega bola"); vocabulário de 50+ palavras',
      details: 'Início da combinação de palavras em frases simples. Vocabulário de pelo menos 50 palavras. Compreensão superior à expressão.',
      alertSigns: 'Dificuldade em formar frases simples até os 2 anos é sinal de alerta.'
    },
    { 
      age: '2-3 anos', 
      title: 'Frases Completas', 
      description: 'Frases completas, vocabulário de 300+ palavras, compreensão de comandos simples',
      details: 'Desenvolvimento de frases mais complexas e vocabulário em rápida expansão. Compreensão e execução de comandos simples.',
      alertSigns: 'Fala ininteligível para familiares aos 3 anos requer intervenção.'
    },
    { 
      age: '3-5 anos', 
      title: 'Linguagem Elaborada', 
      description: 'Uso de pronomes, frases elaboradas, narração, fala clara e fluente',
      details: 'Desenvolvimento de gramática complexa, uso correto de pronomes, capacidade de narrar eventos e contar histórias simples. Fala inteligível para estranhos.',
      alertSigns: 'Trocas ou omissões de sons persistentes após os 4 anos necessitam atenção.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl">
      <motion.h3 
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Marcos do Desenvolvimento da Fala
      </motion.h3>
      
      {/* Roadmap Interativo */}
      <div className="relative">
        <div className="relative h-12">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-2 bg-teal-500 rounded-full"
              animate={{ width: `${(activeIndex)/(speechMilestones.length - 1) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
            {speechMilestones.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-6 h-6 rounded-full border-2 transition-all ${index <= activeIndex ? 'bg-teal-500 border-teal-600' : 'bg-white border-gray-300'} shadow`}
                aria-label={`Ir para etapa ${index + 1}`}
              >
                <span className="absolute left-1/2 -translate-x-1/2 mt-7 w-20 text-[10px] sm:text-xs text-gray-600">
                  {speechMilestones[index].age}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeIndex}
          className="mt-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge className="mb-2 bg-teal-100 text-teal-800">{speechMilestones[activeIndex].age}</Badge>
              <h4 className="font-bold text-lg text-gray-800 mb-1">{speechMilestones[activeIndex].title}</h4>
              <p className="text-gray-600 text-sm mb-3">{speechMilestones[activeIndex].description}</p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {showDetails ? 'Ver menos informações' : 'Ver mais informações'}
            </button>
          </div>
          {showDetails && (
            <motion.div 
              className="mt-2 pt-3 border-t space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 text-sm">{speechMilestones[activeIndex].details}</p>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-orange-800 text-xs font-medium mb-1">Sinais de Alerta:</p>
                <p className="text-orange-700 text-xs">{speechMilestones[activeIndex].alertSigns}</p>
              </div>
            </motion.div>
          )}

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => { setActiveIndex(Math.max(0, activeIndex - 1)); }}
              disabled={activeIndex === 0}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeIndex === 0 ? 'bg-gray-100 text-gray-400' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
            >
              Anterior
            </button>
            <div className="text-xs text-gray-500">Etapa {activeIndex + 1} de {speechMilestones.length}</div>
            <button
              onClick={() => { setActiveIndex(Math.min(speechMilestones.length - 1, activeIndex + 1)); }}
              disabled={activeIndex === speechMilestones.length - 1}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeIndex === speechMilestones.length - 1 ? 'bg-gray-100 text-gray-400' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
            >
              Próximo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface FonoaudiologiaPageProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
}

export default function App({ onNavigateHome, onNavigateToPage }: FonoaudiologiaPageProps = {}) {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [disordersMode, setDisordersMode] = useState<'info' | 'aba'>('info');
  const [activeDisorderIndex, setActiveDisorderIndex] = useState(0);
  const [showDisorderDetails, setShowDisorderDetails] = useState(false);


  const fundamentalConcepts = [
    {
      id: 1,
      title: "O que faz um Fonoaudiólogo?",
      description: "Profissional que trata distúrbios relacionados à comunicação, linguagem, audição, voz e deglutição",
      icon: <Mic className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50 hover:bg-teal-100",
      details: [
        "Avalia e trata distúrbios da comunicação",
        "Trabalha função auditiva periférica e central",
        "Atua na função vestibular e cognitiva",
        "Trata linguagem oral e escrita",
        "Trabalha fala, fluência e voz",
        "Atua em funções orofaciais e deglutição",
        "Atende todas as idades: recém-nascido ao idoso"
      ]
    },
    {
      id: 2,
      title: "Quando levar seu filho ao Fonoaudiólogo?",
      description: "Sinais que indicam necessidade de avaliação fonoaudiológica",
      icon: <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-orange-600", 
      bgColor: "bg-orange-50 hover:bg-orange-100",
      details: [
        "Ausência de balbucios até os 12 meses",
        "Dificuldade em formar frases simples até os 2 anos",
        "Trocas ou omissões de sons na fala após os 3 anos",
        "Fala pouco compreensível por pessoas externas",
        "Falta de interesse por sons, palavras ou imitação",
        "Não responde ao nome quando chamado",
        "Ausência de gestos comunicativos"
      ]
    },
    {
      id: 3,
      title: "Meu filho entende, mas não fala",
      description: "Quando a compreensão está adequada mas a expressão está atrasada",
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      details: [
        "Situação que requer avaliação especializada",
        "Pode indicar questões articulatórias específicas",
        "Possível alteração no desenvolvimento motor da fala",
        "Avaliação com fonoaudiólogo e pediatra necessária",
        "Verificação de todas as possibilidades envolvidas",
        "Intervenção precoce melhora prognóstico",
        "Cada caso deve ser analisado individualmente"
      ]
    },
    {
      id: 4,
      title: "Troca de letras ao falar",
      description: "Quando as substituições na fala são normais vs. patológicas",
      icon: <Languages className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      details: [
        "Algumas trocas são normais no desenvolvimento",
        "Verificar se atingiu marcos esperados para idade",
        "Conversar com pediatra sobre o desenvolvimento",
        "Avaliação fonoaudiológica quando necessário",
        "Trocas persistentes após 4 anos necessitam atenção",
        "Múltiplas trocas podem indicar transtorno fonológico",
        "Intervenção precoce é fundamental"
      ]
    }
  ];

  const hearingDisorders = [
    {
      title: "Primeiros Sinais de Perda Auditiva",
      description: "Identificação precoce é fundamental para desenvolvimento",
      icon: <Ear className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Os primeiros sinais podem ser sutis mas são cruciais para detecção precoce. A identificação precoce evita impactos no desenvolvimento da linguagem, aprendizado e qualidade de vida.",
      signs: [
        "Pedir para repetir frequentemente",
        "Aumentar volume da TV ou rádio",
        "Não responder quando chamado",
        "Dificuldades de atenção aparentes",
        "Atraso no desenvolvimento da fala",
        "Isolamento social progressivo"
      ],
      abaMentions: [
        "Treinos receptivos com prompts visuais e fading",
        "Reforçamento diferencial para atenção a instruções sonoras",
        "Generalização em contextos naturais (casa, escola)",
        "Uso de sistemas de comunicação alternativa quando necessário"
      ],
      reflection: [
        "Observe frequência e impacto funcional (ASHA, 2021)",
        "Considere ambientes onde o sinal aparece (BACB, 2022)",
        "Registre exemplos práticos para discussão clínica"
      ]
    },
    {
      title: "Aparelho Auditivo",
      description: "Ferramenta poderosa mas com limitações",
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "O aparelho auditivo é uma ferramenta poderosa, mas não é uma solução mágica. Seu sucesso depende do tipo e grau da perda auditiva, modelo do aparelho e uso correto com acompanhamento profissional.",
      considerations: [
        "Não restaura audição normal",
        "Sucesso depende do tipo de perda",
        "Modelo deve ser adequado ao caso",
        "Uso correto é fundamental",
        "Acompanhamento profissional necessário",
        "Adaptação gradual é importante"
      ],
      abaMentions: [
        "Treino de tolerância ao uso com reforço positivo",
        "Encadeamento de passos para colocar e retirar o aparelho",
        "Rotinas com pistas visuais e checklist",
        "Registro de dados para acompanhamento de adesão"
      ],
      reflection: [
        "Note duração diária de uso e barreiras (BACB, 2022)",
        "Identifique antecedentes de retirada do aparelho",
        "Monitore progresso com dados simples"
      ]
    },
    {
      title: "Zumbido no Ouvido (Tinnitus)",
      description: "Sintoma que indica algo no organismo",
      icon: <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "O zumbido é a percepção de som sem fonte externa - apitos, chiados, batidas ou 'barulhos de pressão'. Não é doença, mas sintoma de algo que está acontecendo no organismo.",
      types: [
        "Apitos constantes ou intermitentes",
        "Chiados de alta frequência",
        "Batidas rítmicas",
        "Sensação de pressão no ouvido",
        "Ruídos que pioram no silêncio",
        "Sons que interferem no sono"
      ],
      abaMentions: [
        "Treinos de relaxamento e respiração com reforço",
        "Dessensibilização gradual a ambientes silenciosos",
        "Estratégias de coping ensinadas via modelagem",
        "Monitoramento funcional para identificar antecedentes"
      ],
      reflection: [
        "Descreva quando o desconforto mais ocorre",
        "Perceba interferência em sono/atenção (ASHA, 2020)",
        "Avalie estratégias que parecem aliviar"
      ]
    },
    {
      title: "Hiper/Hipo-responsividade Sonora no TEA",
      description: "Modulação sensorial auditiva e impacto na comunicação",
      icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Pessoas no espectro podem responder de forma aumentada ou reduzida a sons. Isso afeta atenção conjunta, tolerância a ambientes e participação social.",
      signs: [
        "Cobrir os ouvidos ou evitar lugares barulhentos",
        "Busca excessiva por sons específicos",
        "Dificuldade para filtrar ruído de fundo",
        "Aumento de estereotipias em ambientes ruidosos"
      ],
      abaMentions: [
        "Análise funcional para identificar estímulos gatilho",
        "Dessensibilização sistemática com controle de estímulos",
        "Treino de tolerância com reforço diferencial",
        "Uso de fones abafadores/ruído branco como acomodação",
        "Planejamento de generalização em ambientes reais"
      ],
      reflection: [
        "Mapeie sons gatilho e intensidade (TEA/ABA clínica)",
        "Note efeitos em participação social e aprendizagem",
        "Registre estratégias que aumentam tolerância"
      ]
    }
  ];

  

  const multidisciplinaryApproach = [
    {
      title: "Fonoaudiólogo na Equipe TEA",
      description: "Desenvolvimento da linguagem e comunicação",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "Na equipe multidisciplinar para TEA, o fonoaudiólogo é essencial para desenvolvimento da linguagem e comunicação, trabalhando de forma integrada com outros profissionais.",
      focus: [
        "Desenvolvimento da linguagem oral",
        "Comunicação alternativa quando necessário",
        "Habilidades pragmáticas de comunicação",
        "Processamento auditivo",
        "Funções orofaciais",
        "Integração com outras terapias"
      ]
    },
    {
      title: "Outros Profissionais da Equipe",
      description: "Trabalho colaborativo e integrado",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A abordagem multidisciplinar garante tratamento eficaz e abrangente. Cada profissional contribui com sua especialidade para desenvolvimento integral.",
      team: [
        "Terapeuta ABA: intervenções comportamentais",
        "Psicólogo: apoio emocional e cognitivo",
        "Terapeuta Ocupacional: habilidades motoras",
        "Nutricionista: questões alimentares",
        "Médico: diagnóstico e medicação",
        "Pedagogo: adaptações educacionais"
      ]
    },
    {
      title: "Benefícios da Integração",
      description: "Avanços consistentes e duradouros",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: "A colaboração entre profissionais permite que diferentes áreas sejam trabalhadas simultaneamente, promovendo avanços mais consistentes e fortalecendo vínculo familiar.",
      benefits: [
        "Diferentes áreas trabalhadas simultaneamente",
        "Avanços mais consistentes e duradouros",
        "Fortalecimento do vínculo familiar",
        "Compreensão ampla do processo terapêutico",
        "Participação ativa da família",
        "Objetivos alinhados entre profissionais"
      ]
    }
  ];

  // Síntese (Mind Map)
  const synthesisCenter = {
    id: 'center',
    title: 'Fonoaudiologia',
    subtitle: 'Ciência da Comunicação Humana',
    x: 50,
    y: 50
  };

  const synthesisNodes = [
    {
      id: 'campos',
      title: 'Campos de Atuação',
      description: 'Função auditiva, vestibular, cognitiva, linguagem, fala, fluência, voz, funções orofaciais e deglutição.',
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />,
      angle: -40,
      radius: 28,
      color: 'from-teal-50 to-white'
    },
    {
      id: 'desenvolvimento',
      title: 'Desenvolvimento da Fala',
      description: 'Marcos por idade: dos balbucios à linguagem elaborada. Identificação precoce é chave.',
      icon: <Baby className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />,
      angle: 20,
      radius: 30,
      color: 'from-cyan-50 to-white'
    },
    {
      id: 'disturbios',
      title: 'Distúrbios Auditivos',
      description: 'Perda auditiva, zumbido e aparelhos auditivos. Detecção precoce evita impactos.',
      icon: <Ear className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      angle: 60,
      radius: 28,
      color: 'from-blue-50 to-white'
    },
    {
      id: 'saude_vocal',
      title: 'Saúde Vocal',
      description: 'Prevenção e melhora de desempenho vocal. Cuidados para profissionais da voz.',
      icon: <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      angle: -140,
      radius: 30,
      color: 'from-green-50 to-white'
    },
    {
      id: 'fluencia',
      title: 'Gagueira e Fluência',
      description: 'Intervenção multidisciplinar pode controlar e melhorar a fluência.',
      icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      angle: 140,
      radius: 26,
      color: 'from-purple-50 to-white'
    },
    {
      id: 'multidisciplinar',
      title: 'Abordagem Multidisciplinar',
      description: 'Trabalho integrado (ABA, psicologia, TO, nutrição, pedagogia, medicina).',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
      angle: -90,
      radius: 20,
      color: 'from-indigo-50 to-white'
    }
  ];

  const [synthesisIndex, setSynthesisIndex] = useState(0);

  const synthesisCards = [...synthesisNodes];

  const handlePrev = () => setSynthesisIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setSynthesisIndex((i) => Math.min(synthesisCards.length - 1, i + 1));

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (mobileMenuOpen && target && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Terapia Ocupacional', page: 'terapia-ocupacional' },
    { name: 'Fonoaudiologia', page: 'fonoaudiologia' },
    { name: 'Psicologia', page: 'psicologia' },
    { name: 'Psicopedagogia', page: 'psicopedagogia' },
    { name: 'IDEIA', page: 'ideia' },
    { name: 'Contacto', page: 'contacto' }
  ];

  const navigateToPage = (page: string) => {
    if (page === 'home' || page === 'ideia') {
      onNavigateHome?.();
    }
    // Para outras páginas, você pode implementar navegação específica aqui
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-50 flex flex-col">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-teal-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-200 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Header */}
      <StandardHeader 
        onNavigateHome={onNavigateHome}
        onNavigateToPage={onNavigateToPage}
        currentPage="fonoaudiologia"
      />



      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Mic className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Ciência da Comunicação Humana
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800 bg-clip-text text-transparent">
                    Fonoaudiologia
                  </span>
                  <br />
                  <span className="text-gray-800">
                    ABA
                  </span>
                  <br />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Comunicação, Audição e Voz
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  A Fonoaudiologia é a ciência que estuda a comunicação humana em seus diversos aspectos: 
                  desenvolvimento, aperfeiçoamento, distúrbios e diferenças. Abrange função auditiva, 
                  linguagem, fala, voz, funções orofaciais e deglutição, atuando em todas as idades.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="/Noah.png"
                  alt="Fonoaudiologia e comunicação humana"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full scale-[0.85] origin-center"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-80 shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Volume2 className="w-8 h-8 text-teal-600" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-60 shadow-lg flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Mic className="w-12 h-12 text-cyan-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conceitos Fundamentais */}
      <section id="o-que-e" className="py-16 sm:py-20 lg:py-24 bg-white relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-teal-100 text-teal-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Fundamentos da Fonoaudiologia
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Compreendendo a Fonoaudiologia
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Descubra os conceitos essenciais da Fonoaudiologia e quando buscar 
              ajuda profissional especializada
            </p>
          </motion.div>

          <div className="grid grid-cols-2 items-stretch gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {fundamentalConcepts.map((concept, index) => (
              <motion.div
                key={concept.id}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(concept.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card 
                  className={`cursor-pointer transition-shadow duration-300 h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden ${concept.bgColor} border-0 shadow-lg hover:shadow-2xl flex flex-col`}
                  onClick={() => setActiveService(activeService === concept.id ? null : concept.id)}
                >
                  <CardHeader className="pb-3 sm:pb-4 flex-1">
                    <motion.div 
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br ${concept.color} rounded-xl sm:rounded-2xl shadow-lg w-fit flex-shrink-0`}
                      animate={{ 
                        rotate: hoveredCard === concept.id ? 360 : 0,
                        scale: hoveredCard === concept.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {concept.icon}
                      </div>
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-1">{concept.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-1">{concept.description}</CardDescription>
                  </CardHeader>
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeService === concept.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden md:hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        {concept.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex}
                            className="flex items-start space-x-2 sm:space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-700">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desenvolvimento da Fala */}
      <section id="desenvolvimento" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-cyan-100 text-cyan-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Baby className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Desenvolvimento da Fala
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Marcos do Desenvolvimento da Fala
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              É importante identificar precocemente se seu filho tem atraso na fala 
              para buscar ajuda e aumentar as chances de melhora
            </p>
          </motion.div>

          <DevelopmentTimeline />

          <motion.div 
            className="mt-16 sm:mt-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Identificação Precoce é Fundamental</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Se esses marcos não forem atingidos, é recomendável procurar um fonoaudiólogo. 
                  A detecção precoce permite intervenção adequada e melhores resultados no 
                  desenvolvimento da comunicação.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Observação Atenta</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Acompanhar marcos esperados para cada idade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Intervenção Precoce</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Quanto antes iniciar, melhores os resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">Acompanhamento Profissional</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Avaliação e orientação especializadas</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ImageWithFallback
                  src="/Criança.jpg"
                  alt="Desenvolvimento da fala infantil"
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção removida conforme solicitação: Distúrbios da Comunicação e Audição */}

      {/* Seção Saúde Vocal e Afasia removida conforme solicitação */}

      {/* TEA e Abordagem Multidisciplinar */}
      <section id="tea-multidisciplinar" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-purple-100 text-purple-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Puzzle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              TEA e Multidisciplinaridade
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Fonoaudiologia no TEA e Abordagem Multidisciplinar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              A presença de uma equipe multidisciplinar nas terapias ABA para pessoas com TEA 
              é essencial para garantir tratamento eficaz, personalizado e abrangente
            </p>
          </motion.div>

          {/* Roadmap vertical com cards alternados */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-indigo-300 rounded-full" />
            <div className="space-y-10">
              {multidisciplinaryApproach.map((approach, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                      <CardHeader>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                            {approach.icon}
                          </div>
                          <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <CardTitle className="text-lg leading-tight">{approach.title}</CardTitle>
                            <CardDescription className="text-sm mt-1">{approach.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-sm">{approach.content}</p>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-bold text-purple-800 mb-2 text-sm">{approach.focus ? 'Foco de Atuação:' : approach.team ? 'Equipe:' : 'Benefícios:'}</h4>
                          <ul className="space-y-1">
                            {(approach.focus || approach.team || approach.benefits).map((item, itemIndex) => (
                              <li key={itemIndex} className={`flex items-start gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                <Star className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span className="text-purple-700 text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex items-center justify-center relative">
                    <motion.div 
                      className="w-7 h-7 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"
                      whileHover={{ scale: 1.15 }}
                    />
                  </div>
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-purple-50 to-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Complexidade e Heterogeneidade do TEA
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              O TEA é um transtorno complexo e heterogêneo. A abordagem multidisciplinar permite que 
              diferentes áreas do desenvolvimento sejam trabalhadas simultaneamente, promovendo avanços 
              mais consistentes e duradouros. Além disso, essa colaboração fortalece o vínculo com a 
              família, que passa a entender melhor o processo terapêutico e a participar ativamente dele.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recapitulação */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-yellow-100 text-yellow-800 mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Síntese
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Fonoaudiologia: Ciência da Comunicação Humana
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
              Síntese dos principais aspectos da fonoaudiologia e sua importância 
              para a comunicação humana
            </p>
          </motion.div>

          {/* Grade de cards lado a lado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {synthesisCards.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className={`h-full shadow-lg border-0 bg-gradient-to-br ${node.color}`}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow">
                      {node.icon}
                    </div>
                    <CardTitle className="text-base">{node.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">{node.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-teal-50 to-cyan-50 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              A Fonoaudiologia como Ponte para a Comunicação
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A Fonoaudiologia é fundamental para o desenvolvimento e manutenção da comunicação humana 
              em todas as suas formas. Desde os primeiros balbucios do bebê até a reabilitação após 
              lesões neurológicas, esta ciência oferece soluções especializadas para cada necessidade. 
              A detecção precoce, intervenção adequada e trabalho multidisciplinar são pilares para 
              o sucesso terapêutico, promovendo não apenas a comunicação eficaz, mas também qualidade 
              de vida e inclusão social.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <TherapiesFooter />
    </div>
  );
}