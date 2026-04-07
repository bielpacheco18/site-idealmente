import {
  Brain,
  HeartHandshake,
  Puzzle,
  Hand,
  MessageSquare,
  Salad,
  Users,
  ClipboardList,
} from 'lucide-react'

const specialties = [
  {
    icon: Brain,
    title: 'Psicologia',
    description:
      'Avaliação e acompanhamento psicológico individual, para crianças, adolescentes, adultos e idosos. Utilizamos abordagens como TCC, psicanálise e terapia humanista.',
    tags: ['Individual', 'Infantil', 'TCC'],
    color: '#2e9cca',
    bgColor: 'rgba(46, 156, 202, 0.07)',
  },
  {
    icon: HeartHandshake,
    title: 'Psiquiatria',
    description:
      'Diagnóstico e tratamento médico de transtornos mentais. Prescrição e acompanhamento farmacológico com foco no bem-estar global do paciente.',
    tags: ['Adulto', 'Infantil', 'Medicação'],
    color: '#1a3a5c',
    bgColor: 'rgba(26, 58, 92, 0.07)',
  },
  {
    icon: Puzzle,
    title: 'Neuropsicologia',
    description:
      'Estudo da relação entre o cérebro e o comportamento. Atendimento a pacientes com lesões neurológicas, transtornos do neurodesenvolvimento e dificuldades cognitivas.',
    tags: ['Avaliação', 'Reabilitação', 'TEA/TDAH'],
    color: '#5bc4e8',
    bgColor: 'rgba(91, 196, 232, 0.07)',
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional',
    description:
      'Promoção da autonomia e participação nas atividades da vida diária. Intervenções para crianças com atrasos no desenvolvimento, adultos e idosos.',
    tags: ['Infantil', 'Adulto', 'Integração Sensorial'],
    color: '#2e9cca',
    bgColor: 'rgba(46, 156, 202, 0.07)',
  },
  {
    icon: MessageSquare,
    title: 'Fonoaudiologia',
    description:
      'Avaliação e reabilitação dos distúrbios da comunicação humana: linguagem, fala, voz, fluência, audição e funções orofaciais.',
    tags: ['Linguagem', 'Voz', 'Disfagia'],
    color: '#1a3a5c',
    bgColor: 'rgba(26, 58, 92, 0.07)',
  },
  {
    icon: Salad,
    title: 'Nutrição Comportamental',
    description:
      'Abordagem que integra nutrição e psicologia alimentar, promovendo uma relação saudável com a comida e o corpo, sem foco em dietas restritivas.',
    tags: ['Comportamental', 'Mindful Eating', 'TCAP'],
    color: '#5bc4e8',
    bgColor: 'rgba(91, 196, 232, 0.07)',
  },
  {
    icon: Users,
    title: 'Orientação Familiar',
    description:
      'Suporte e orientação para famílias que enfrentam desafios no relacionamento, na criação dos filhos, ou que possuem um familiar com transtorno mental.',
    tags: ['Família', 'Pais', 'Cuidadores'],
    color: '#2e9cca',
    bgColor: 'rgba(46, 156, 202, 0.07)',
  },
  {
    icon: ClipboardList,
    title: 'Avaliação Neuropsicológica',
    description:
      'Bateria completa de testes para mapear o perfil cognitivo do paciente. Essencial para diagnósticos de TDAH, TEA, dislexia e outras condições.',
    tags: ['TDAH', 'TEA', 'Dislexia'],
    color: '#1a3a5c',
    bgColor: 'rgba(26, 58, 92, 0.07)',
  },
]

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#2e9cca' }}
          >
            O que oferecemos
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 section-heading section-heading-center"
            style={{ color: '#0d1b2a' }}
          >
            Nossas Especialidades
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
            Uma equipe integrada de profissionais altamente qualificados,
            trabalhando juntos para oferecer o cuidado que você merece.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {specialties.map((spec, i) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.title}
                className="reveal card-hover group rounded-2xl p-6 border cursor-default"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#e2e8f0',
                  transitionDelay: `${(i % 4) * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: spec.bgColor }}
                >
                  <Icon size={28} style={{ color: spec.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2.5 group-hover:transition-colors"
                  style={{ color: '#0d1b2a' }}
                >
                  {spec.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#718096' }}
                >
                  {spec.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: spec.bgColor,
                        color: spec.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                  style={{ backgroundColor: spec.color }}
                />
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-base mb-5" style={{ color: '#4a5568' }}>
            Não encontrou o que procura? Entre em contato — podemos ajudá-lo a
            encontrar o cuidado ideal.
          </p>
          <button
            onClick={() => {
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#2e9cca' }}
          >
            Fale com nossa equipe
          </button>
        </div>
      </div>
    </section>
  )
}
