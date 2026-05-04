const plans = [
  {
    title: 'Atendimento Social',
    description:
      'Para quem precisa de um acompanhamento com valor reduzido. Vagas limitadas e possibilidade de fila de espera.',
  },
  {
    title: 'Atendimento Padrão',
    description:
      'Mais flexibilidade de horários e início mais rápido. Atendimento contínuo com acompanhamento estruturado e profissionais específicos para você.',
  },
  {
    title: 'Atendimento Premium',
    description:
      'Horários prioritários e maior flexibilidade de agenda. Acompanhamento mais próximo e direcionado ao seu momento.',
  },
]

export default function ServicePlans() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Escolha o formato ideal para você
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {plans.map((plan, i) => (
            <div key={plan.title} className="reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span
                className="inline-block px-6 py-2 rounded-md text-sm font-bold tracking-widest uppercase mb-4"
                style={{ backgroundColor: '#1a5f7a', color: '#ffffff' }}
              >
                {plan.title}
              </span>
              <p
                className="text-base sm:text-lg font-semibold leading-relaxed max-w-md"
                style={{ color: '#ffffff' }}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
