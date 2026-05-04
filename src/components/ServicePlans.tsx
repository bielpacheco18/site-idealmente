import { useState } from 'react'

const plans = [
  {
    title: 'Atendimento Social',
    description:
      'Para quem precisa de um acompanhamento com valor reduzido. Vagas limitadas e possibilidade de fila de espera.',
    color: '#2e9cca',
    bg: 'rgba(46, 156, 202, 0.10)',
  },
  {
    title: 'Atendimento Padrão',
    description:
      'Mais flexibilidade de horários e início mais rápido. Atendimento contínuo com acompanhamento estruturado e profissionais específicos para você.',
    color: '#2e9cca',
    bg: 'rgba(46, 156, 202, 0.10)',
  },
  {
    title: 'Atendimento Premium',
    description:
      'Horários prioritários e maior flexibilidade de agenda. Acompanhamento mais próximo e direcionado ao seu momento.',
    color: '#2e9cca',
    bg: 'rgba(46, 156, 202, 0.10)',
  },
]

export default function ServicePlans() {
  const [active, setActive] = useState(0)
  const plan = plans[active]

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 reveal">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Escolha o formato ideal para você
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 reveal">
          {plans.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-md text-sm font-bold tracking-wide uppercase transition-all duration-200"
              style={{
                backgroundColor: active === i ? '#2e9cca' : 'rgba(255,255,255,0.08)',
                color: active === i ? '#ffffff' : 'rgba(255,255,255,0.55)',
                border: active === i ? '2px solid #2e9cca' : '2px solid transparent',
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={active}
          className="rounded-3xl p-8 sm:p-10 text-center"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(46, 156, 202, 0.3)',
          }}
        >
          <div
            className="w-1 h-10 rounded-full mx-auto mb-6"
            style={{ backgroundColor: plan.color }}
          />
          <h3
            className="text-xl sm:text-2xl font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            {plan.title}
          </h3>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            {plan.description}
          </p>
        </div>
      </div>
    </section>
  )
}
