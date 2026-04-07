import { Target, Eye, Star, Award, CheckCircle } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Nossa Missão',
    description:
      'Oferecer atendimento interdisciplinar de excelência, promovendo saúde mental, bem-estar e qualidade de vida para nossos pacientes e familiares, com ética, respeito e humanidade.',
    color: '#2e9cca',
    bg: 'rgba(46, 156, 202, 0.08)',
  },
  {
    icon: Eye,
    title: 'Nossa Visão',
    description:
      'Ser referência regional em saúde mental interdisciplinar, reconhecida pela excelência dos tratamentos, pelo acolhimento humanizado e pelo impacto positivo na vida das pessoas.',
    color: '#1a3a5c',
    bg: 'rgba(26, 58, 92, 0.08)',
  },
  {
    icon: Star,
    title: 'Nossos Valores',
    description:
      'Ética, empatia e respeito ao ser humano são a base de tudo o que fazemos. Valorizamos a escuta ativa, o trabalho em equipe e o compromisso com resultados reais para os pacientes.',
    color: '#5bc4e8',
    bg: 'rgba(91, 196, 232, 0.08)',
  },
]

const differentials = [
  'Equipe multiprofissional integrada',
  'Abordagem baseada em evidências científicas',
  'Atendimento para todas as idades',
  'Ambiente acolhedor e seguro',
  'Prontuário eletrônico compartilhado',
  'Suporte familiar e orientação a cuidadores',
  'Planos de tratamento individualizados',
  'Parceria com planos de saúde selecionados',
]

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-12 lg:mb-20">
          <div className="reveal-left">
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#2e9cca' }}
            >
              Sobre a Clínica
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 section-heading"
              style={{ color: '#0d1b2a' }}
            >
              Uma clínica que cuida de você por inteiro
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#4a5568' }}>
              A IdealMente nasceu do sonho de oferecer um cuidado que vai além do
              sintoma — que enxerga o ser humano em toda a sua complexidade.
              Fundada em 2016, nossa clínica reúne profissionais de diversas
              especialidades da saúde mental que trabalham de forma coordenada e
              integrada.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              Acreditamos que a saúde mental é um direito, não um privilégio. Por
              isso, criamos um espaço onde cada paciente é acolhido com
              individualidade, onde os tratamentos são pensados de forma
              personalizada e onde a família é sempre parte do processo.
            </p>
          </div>

          {/* Differentials list */}
          <div className="reveal-right">
            <div
              className="rounded-3xl p-8 border"
              style={{
                backgroundColor: 'white',
                borderColor: '#e2e8f0',
                boxShadow: '0 10px 40px rgba(13, 27, 42, 0.08)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(46, 156, 202, 0.12)' }}
                >
                  <Award size={20} style={{ color: '#2e9cca' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#0d1b2a' }}>
                  Por que escolher a IdealMente?
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differentials.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#2e9cca' }}
                    />
                    <span className="text-sm leading-snug" style={{ color: '#4a5568' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`reveal card-hover rounded-3xl p-8 border transition-all duration-300`}
                style={{
                  backgroundColor: 'white',
                  borderColor: '#e2e8f0',
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 delay-${(i + 1) * 100}`}
                  style={{ backgroundColor: pillar.bg }}
                >
                  <Icon size={28} style={{ color: pillar.color }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#0d1b2a' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                  {pillar.description}
                </p>
                {/* Accent bottom border */}
                <div
                  className="mt-6 h-1 w-12 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
