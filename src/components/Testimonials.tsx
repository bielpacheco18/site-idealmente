import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula M.',
    detail: 'Paciente há 2 anos',
    initials: 'AP',
    rating: 5,
    text: 'A IdealMente transformou minha vida. Depois de anos lutando com ansiedade e não encontrar o suporte certo, finalmente encontrei uma equipe que me ouviu de verdade. O trabalho integrado entre a psicóloga e a psiquiatra foi fundamental para minha recuperação. Me sinto outra pessoa.',
    specialty: 'Ansiedade / Depressão',
    gradient: 'linear-gradient(135deg, #2e9cca, #5bc4e8)',
  },
  {
    name: 'Renato S.',
    detail: 'Pai de paciente',
    initials: 'RS',
    rating: 5,
    text: 'Trouxe meu filho de 8 anos para avaliação neuropsicológica, pois estava com dificuldades na escola. O diagnóstico de TDAH foi feito com muito cuidado e a equipe nos orientou em cada passo. O acompanhamento com a terapeuta ocupacional e a psicóloga fez uma diferença enorme no desenvolvimento dele.',
    specialty: 'TDAH / Infantil',
    gradient: 'linear-gradient(135deg, #1a3a5c, #2e9cca)',
  },
  {
    name: 'Fernanda C.',
    detail: 'Paciente há 1 ano',
    initials: 'FC',
    rating: 5,
    text: 'O ambiente da clínica é extremamente acolhedor. Desde a recepção até os profissionais, todos tratam a gente com muita atenção e respeito. O tratamento com nutrição comportamental, junto com a psicoterapia, ajudou a resolver questões que eu carregava há mais de 10 anos. Recomendo a todos!',
    specialty: 'Nutrição Comportamental',
    gradient: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)',
  },
]

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < count ? '#f59e0b' : 'none'}
        stroke={i < count ? '#f59e0b' : '#d1d5db'}
      />
    ))}
  </div>
)

const AvatarInitials = ({
  initials,
  gradient,
}: {
  initials: string
  gradient: string
}) => (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow"
    style={{ background: gradient }}
  >
    {initials}
  </div>
)

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
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
            Depoimentos
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 section-heading section-heading-center"
            style={{ color: '#0d1b2a' }}
          >
            O que Nossos Pacientes Dizem
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
            A transformação de quem atendemos é a nossa maior realização. Veja o
            que alguns de nossos pacientes compartilharam sobre suas experiências.
          </p>
        </div>

        {/* Average rating highlight */}
        <div className="flex justify-center mb-12 reveal">
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.05)',
              borderColor: 'rgba(245, 158, 11, 0.2)',
            }}
          >
            <div className="text-center">
              <p
                className="text-4xl font-extrabold"
                style={{ color: '#f59e0b' }}
              >
                4.9
              </p>
              <StarRating count={5} />
            </div>
            <div className="border-l pl-4" style={{ borderColor: '#e2e8f0' }}>
              <p className="text-sm font-semibold" style={{ color: '#0d1b2a' }}>
                Avaliação média
              </p>
              <p className="text-xs" style={{ color: '#718096' }}>
                Baseada em +200 avaliações
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal card-hover relative group bg-white rounded-3xl p-8 border quote-card overflow-hidden"
              style={{
                borderColor: '#e2e8f0',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Large quote icon */}
              <div
                className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
              >
                <Quote size={60} style={{ color: '#2e9cca' }} />
              </div>

              {/* Stars */}
              <div className="mb-4">
                <StarRating count={t.rating} />
              </div>

              {/* Text */}
              <p
                className="text-base leading-relaxed mb-6 relative"
                style={{ color: '#4a5568' }}
              >
                "{t.text}"
              </p>

              {/* Specialty tag */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{
                  backgroundColor: 'rgba(46, 156, 202, 0.08)',
                  color: '#2e9cca',
                }}
              >
                {t.specialty}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#f1f5f9' }}>
                <AvatarInitials initials={t.initials} gradient={t.gradient} />
                <div>
                  <p className="text-sm font-bold" style={{ color: '#0d1b2a' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#a0aec0' }}>
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <p
          className="text-center text-xs mt-8 reveal"
          style={{ color: '#a0aec0' }}
        >
          * Nomes e detalhes alterados para preservar a privacidade dos pacientes.
          Depoimentos usados com autorização.
        </p>
      </div>
    </section>
  )
}
