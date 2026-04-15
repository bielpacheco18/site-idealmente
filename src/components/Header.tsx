import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const Logo = ({ size = 44 }: { size?: number }) => (
  <img
    src="/logo.jpg"
    alt="IdealMente Clínica Interdisciplinar"
    width={size}
    height={size}
    className="rounded-xl object-cover"
  />
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5 border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#inicio')}
              className="flex items-center gap-3 group"
              aria-label="IdealMente - ir para o início"
            >
              <Logo />
              <div className="flex flex-col leading-none">
                <span
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-navy' : 'text-white'
                  }`}
                  style={{ color: scrolled ? '#0d1b2a' : 'white' }}
                >
                  IdealMente
                </span>
                <span
                  className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    scrolled ? 'text-accent' : 'text-accent-light'
                  }`}
                  style={{ color: scrolled ? '#2e9cca' : '#5bc4e8' }}
                >
                  Clínica Interdisciplinar
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-accent'
                        : scrolled
                        ? 'text-gray-600 hover:text-navy hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    style={isActive ? { color: '#2e9cca' } : {}}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: '#2e9cca' }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Phone - desktop only */}
              <a
                href="tel:+5521987841233"
                className={`hidden xl:flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-gray-500 hover:text-navy' : 'text-white/70 hover:text-white'
                }`}
              >
                <Phone size={15} />
                (21) 98784-1233
              </a>

              <button
                onClick={() => handleNavClick('#contato')}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: '#2e9cca' }}
              >
                Agendar Consulta
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? 'text-navy hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Logo size={40} />
                <span className="font-bold text-navy" style={{ color: '#0d1b2a' }}>
                  IdealMente
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-navy hover:bg-gray-100 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col px-4 py-6 gap-1 overflow-y-auto">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center px-4 py-3 rounded-xl text-left text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
                    }`}
                    style={isActive ? { backgroundColor: '#2e9cca', color: 'white' } : {}}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-gray-100 space-y-3">
              <a
                href="tel:+5521987841233"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-navy font-medium"
              >
                <Phone size={18} style={{ color: '#2e9cca' }} />
                (21) 98784-1233
              </a>
              <button
                onClick={() => handleNavClick('#contato')}
                className="w-full py-3 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: '#2e9cca' }}
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
