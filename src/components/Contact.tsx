import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5521987841233'
const WHATSAPP_MESSAGE =
  'Olá! Gostaria de agendar uma consulta na IdealMente Clínica Interdisciplinar.'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(21) 98784-1233',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    color: '#2e9cca',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua das Flores, 123 — Sala 45\nJardim América, São Paulo — SP',
    href: null,
    color: '#2e9cca',
    external: false,
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta: 8h às 20h\nSábado: 8h às 14h',
    href: null,
    color: '#1a3a5c',
    external: false,
  },
]

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#2e9cca' }}
          >
            Entre em Contato
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 section-heading section-heading-center"
            style={{ color: '#0d1b2a' }}
          >
            Agende sua Consulta
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
            Fale diretamente com nossa equipe pelo WhatsApp. Respondemos rapidamente
            e agendamos no melhor horário para você.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mb-12 reveal-scale">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-100"
            style={{
              backgroundColor: '#25d366',
              boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)',
            }}
          >
            <MessageCircle size={26} />
            Agendar pelo WhatsApp
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-5 reveal">
          {contactInfo.map((info) => {
            const Icon = info.icon
            const content = (
              <>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto mb-3"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <Icon size={20} style={{ color: info.color }} />
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: '#a0aec0' }}
                >
                  {info.label}
                </p>
                <p
                  className="text-sm font-medium whitespace-pre-line"
                  style={{ color: '#0d1b2a' }}
                >
                  {info.value}
                </p>
              </>
            )

            return (
              <div
                key={info.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border"
                style={{ borderColor: '#e2e8f0' }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            )
          })}
        </div>

        {/* Social */}
        <div className="flex justify-center mt-8 reveal">
          <a
            href="https://instagram.com/idealmenteclinica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
            }}
          >
            <Instagram size={18} />
            @idealmenteclinica
          </a>
        </div>
      </div>
    </section>
  )
}
