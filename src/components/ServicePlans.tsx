import { Heart, Star, Award } from 'lucide-react'

const plans = [
  {
    icon: Heart,
    title: 'Atendimento Social',
    description:
      'Para quem precisa de um acompanhamento com valor reduzido. Vagas limitadas e possibilidade de fila de espera.',
    color: '#2e9cca',
    bg: 'rgba(46, 156, 202, 0.08)',
  },
  {
    icon: Star,
    title: 'Atendimento Padrão',
    description:
      'Mais flexibilidade de horários e início mais rápido. Atendimento contínuo com acompanhamento estruturado e profissionais específicos para você.',
    color: '#1a3a5c',
    bg: 'rgba(26, 58, 92, 0.08)',
  },
  {
    icon: Award,
    title: 'Atendimento Premium',
    description:
      'Horários prioritários e maior flexibilidade de agenda. Acompanhamento mais próximo e direcionado ao seu momento.',
    color: '#5bc4e8',
    bg: 'rgba(91, 196, 232, 0.08)',
  },
]

export default function ServicePlans() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 reveal">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Escolha o formato ideal para você
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.title}
                className="reveal card-hover rounded-3xl p-8 border transition-all duration-300"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#e2e8f0',
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: plan.bg }}
                >
                  <Icon size={28} style={{ color: plan.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0d1b2a' }}>
                  {plan.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                  {plan.description}
                </p>
                <div
                  className="mt-6 h-1 w-12 rounded-full"
                  style={{ backgroundColor: plan.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
