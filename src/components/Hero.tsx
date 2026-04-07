import { ChevronDown, Calendar, Stethoscope, Shield, Heart, Users } from 'lucide-react'

const stats = [
  { value: '2.500+', label: 'Pacientes Atendidos', icon: Users },
  { value: '15+', label: 'Profissionais', icon: Stethoscope },
  { value: '8+', label: 'Anos de Experiência', icon: Shield },
  { value: '8', label: 'Especialidades', icon: Heart },
]

const FloatingShape = ({
  className,
  bgColor,
  delay = 0,
}: {
  className?: string
  bgColor: string
  delay?: number
}) => (
  <div
    className={`absolute rounded-full opacity-10 blur-2xl ${className}`}
    style={{
      backgroundColor: bgColor,
      animation: `float ${6 + delay}s ease-in-out ${delay}s infinite`,
    }}
  />
)

export default function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 40%, #0d2744 70%, #0d1b2a 100%)',
      }}
    >
      {/* Decorative floating blobs */}
      <FloatingShape className="w-72 h-72 sm:w-96 sm:h-96 -top-20 -right-20" bgColor="#2e9cca" delay={0} />
      <FloatingShape className="w-48 h-48 sm:w-64 sm:h-64 bottom-40 -left-10" bgColor="#5bc4e8" delay={2} />
      <FloatingShape className="w-36 h-36 sm:w-48 sm:h-48 top-1/2 right-1/4" bgColor="#1a3a5c" delay={4} />

      {/* Decorative grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left column - text */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border"
              style={{
                backgroundColor: 'rgba(46, 156, 202, 0.15)',
                borderColor: 'rgba(46, 156, 202, 0.4)',
                color: '#5bc4e8',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: '#5bc4e8' }} />
              Clínica Interdisciplinar de Saúde Mental
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
              Cuidando da sua{' '}
              <span style={{ color: '#5bc4e8' }}>saúde mental</span>{' '}
              com excelência interdisciplinar
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Na IdealMente, oferecemos cuidado integral e humanizado, unindo
              diferentes especialidades em um único espaço. Nossa equipe trabalha
              de forma colaborativa para garantir o melhor tratamento para você e
              sua família.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => handleScroll('#contato')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                style={{
                  backgroundColor: '#2e9cca',
                  boxShadow: '0 8px 25px rgba(46, 156, 202, 0.35)',
                }}
              >
                <Calendar size={18} />
                Agendar Consulta
              </button>
              <button
                onClick={() => handleScroll('#especialidades')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-300 border border-white/30 hover:bg-white/10 hover:-translate-y-1"
              >
                <Stethoscope size={18} />
                Nossas Especialidades
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <div className="flex items-center gap-2">
                <Shield size={15} style={{ color: '#5bc4e8' }} />
                <span>Equipe certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={15} style={{ color: '#5bc4e8' }} />
                <span>Atendimento humanizado</span>
              </div>
            </div>
          </div>

          {/* Right column - illustration (desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="relative rounded-3xl p-8 border"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  borderColor: 'rgba(255,255,255,0.12)',
                }}
              >
                {/* Logo large */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/logo.jpg"
                    alt="IdealMente"
                    className="w-28 h-28 rounded-2xl object-cover shadow-xl"
                  />
                </div>

                <div className="text-center text-white mb-8">
                  <p className="text-2xl font-bold">IdealMente</p>
                  <p className="text-sm mt-1" style={{ color: '#5bc4e8' }}>
                    Clínica Interdisciplinar
                  </p>
                </div>

                {/* Mini stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl p-4 text-center"
                        style={{
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <Icon size={22} className="mx-auto mb-2" style={{ color: '#5bc4e8' }} />
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs leading-tight mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {stat.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -top-6 -right-6 rounded-2xl px-4 py-3 text-white text-sm font-semibold shadow-xl"
                style={{ background: 'linear-gradient(135deg, #2e9cca, #5bc4e8)' }}
              >
                ✓ CRP/CRM Registrado
              </div>
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 text-white text-sm font-semibold shadow-xl"
                style={{ backgroundColor: '#1a3a5c' }}
              >
                ♥ +2.500 vidas transformadas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative border-t"
        style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-2.5 sm:gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <div
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(46, 156, 202, 0.2)' }}
                  >
                    <Icon size={18} style={{ color: '#5bc4e8' }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  )
}
