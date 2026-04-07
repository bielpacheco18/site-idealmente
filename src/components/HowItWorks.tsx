import { CalendarDays, ClipboardCheck, FileText, HeartPulse } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Agendamento',
    description:
      'Entre em contato pelo telefone, WhatsApp ou formulário online. Nossa equipe de recepção irá orientá-lo sobre as opções de horários e profissionais disponíveis, facilitando todo o processo.',
    detail: 'Rápido e sem burocracia',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Avaliação Inicial',
    description:
      'Na primeira consulta, o profissional realiza uma escuta cuidadosa e abrangente para entender sua história, suas queixas e seus objetivos. Essa etapa é fundamental para um cuidado personalizado.',
    detail: 'Escuta ativa e acolhedora',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Plano de Tratamento',
    description:
      'Com base na avaliação, nossa equipe interdisciplinar elabora um plano de tratamento individualizado, com metas claras e estratégias terapêuticas alinhadas às suas necessidades específicas.',
    detail: 'Totalmente personalizado',
  },
  {
    number: '04',
    icon: HeartPulse,
    title: 'Acompanhamento Contínuo',
    description:
      'O tratamento é acompanhado de perto, com reavaliações periódicas e ajustes conforme necessário. A comunicação entre os profissionais garante a continuidade e a qualidade do seu cuidado.',
    detail: 'Cuidado de longo prazo',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d1b2a 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#2e9cca' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#5bc4e8' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#5bc4e8' }}
          >
            Como trabalhamos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 text-white section-heading section-heading-center">
            Como Funciona o Tratamento
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Um processo simples, transparente e centrado em você. Do primeiro
            contato ao acompanhamento contínuo, estamos com você em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(46,156,202,0.4) 20%, rgba(46,156,202,0.4) 80%, transparent)',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  {/* Number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
                    style={{ backgroundColor: '#2e9cca' }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <Icon size={36} style={{ color: '#5bc4e8' }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  {step.description}
                </p>

                {/* Detail badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(46, 156, 202, 0.2)',
                    color: '#5bc4e8',
                    border: '1px solid rgba(46, 156, 202, 0.3)',
                  }}
                >
                  {step.detail}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl w-full sm:w-auto"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <p
              className="text-base font-medium"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Pronto para começar sua jornada de bem-estar?
            </p>
            <button
              onClick={() => {
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #2e9cca, #5bc4e8)',
                boxShadow: '0 6px 20px rgba(46,156,202,0.3)',
              }}
            >
              Agendar Minha Primeira Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
