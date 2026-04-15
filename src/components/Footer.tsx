import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const specialtiesLinks = [
  'Psicologia',
  'Psiquiatria',
  'Neuropsicologia',
  'Terapia Ocupacional',
  'Fonoaudiologia',
  'Nutrição Comportamental',
  'Orientação Familiar',
]

const Logo = () => (
  <img
    src="/logo.jpg"
    alt="IdealMente Clínica Interdisciplinar"
    width={48}
    height={48}
    className="rounded-xl object-cover"
  />
)

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: '#0d1b2a' }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => handleNavClick('#inicio')}
              className="flex items-center gap-3 mb-5 group"
            >
              <Logo />
              <div>
                <p className="text-lg font-bold text-white leading-none">IdealMente</p>
                <p className="text-xs mt-0.5" style={{ color: '#5bc4e8' }}>
                  Clínica Interdisciplinar
                </p>
              </div>
            </button>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Cuidado integral da saúde mental com excelência, ética e humanidade.
              Sua saúde mental é o nosso compromisso.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/idealmenteclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                aria-label="Instagram da IdealMente"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5521987841233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: '#25d366' }}
                aria-label="WhatsApp da IdealMente"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: '#5bc4e8' }}
            >
              Links Rápidos
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-white text-left"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: '#5bc4e8' }}
            >
              Especialidades
            </h3>
            <ul className="space-y-2.5">
              {specialtiesLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick('#especialidades')}
                    className="text-sm transition-colors duration-200 hover:text-white text-left"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: '#5bc4e8' }}
            >
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5521987841233"
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#2e9cca' }}
                  />
                  <span
                    className="text-sm group-hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    (21) 98784-1233
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@idealmente.com.br"
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#2e9cca' }}
                  />
                  <span
                    className="text-sm group-hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    contato@idealmente.com.br
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#2e9cca' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    Rua das Flores, 123 — Sala 45{'\n'}Jardim América, São Paulo — SP
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>
              &copy; {new Date().getFullYear()} IdealMente Clínica Interdisciplinar. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart size={12} fill="#2e9cca" stroke="none" /> para um mundo mais saudável
            </p>
            <div className="flex gap-4">
              <button className="hover:text-white transition-colors">Política de Privacidade</button>
              <button className="hover:text-white transition-colors">Termos de Uso</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
