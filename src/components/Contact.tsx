import { useState, type FormEvent, type ChangeEvent } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
} from 'lucide-react'

const specialties = [
  'Psicologia',
  'Psiquiatria',
  'Neuropsicologia',
  'Terapia Ocupacional',
  'Fonoaudiologia',
  'Nutrição Comportamental',
  'Orientação Familiar',
  'Avaliação Neuropsicológica',
  'Não tenho certeza',
]

type FormState = {
  name: string
  email: string
  phone: string
  specialty: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(21) 98784-1233',
    href: 'tel:+5521987841233',
    color: '#2e9cca',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@idealmente.com.br',
    href: 'mailto:contato@idealmente.com.br',
    color: '#1a3a5c',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua das Flores, 123 — Sala 45\nJardim América, São Paulo — SP',
    href: '#',
    color: '#2e9cca',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta: 8h às 20h\nSábado: 8h às 14h',
    href: null,
    color: '#1a3a5c',
  },
]

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim() || form.name.trim().length < 3) {
    errors.name = 'Informe seu nome completo (mínimo 3 caracteres).'
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  const digits = form.phone.replace(/\D/g, '')
  if (!digits || digits.length < 10) {
    errors.phone = 'Informe um telefone válido com DDD.'
  }
  if (!form.specialty) {
    errors.specialty = 'Selecione uma especialidade de interesse.'
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Descreva sua mensagem (mínimo 10 caracteres).'
  }
  return errors
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const newValue = name === 'phone' ? formatPhone(value) : value
    const newForm = { ...form, [name]: newValue }
    setForm(newForm)
    if (touched[name as keyof FormState]) {
      const newErrors = validate(newForm)
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormState] }))
    }
  }

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormState] }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const allTouched: Partial<Record<keyof FormState, boolean>> = {
      name: true,
      email: true,
      phone: true,
      specialty: true,
      message: true,
    }
    setTouched(allTouched)
    const newErrors = validate(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const fieldClass = (name: keyof FormState) => {
    const base =
      'w-full px-4 py-3 rounded-xl border text-sm outline-none form-input transition-all duration-200'
    const hasError = touched[name] && errors[name]
    const isValid = touched[name] && !errors[name] && form[name]
    if (hasError)
      return `${base} border-red-400 bg-red-50 focus:border-red-500`
    if (isValid)
      return `${base} border-green-400 bg-green-50/30 focus:border-green-500`
    return `${base} border-gray-200 bg-white`
  }

  return (
    <section
      id="contato"
      className="py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Dê o primeiro passo. Preencha o formulário ou entre em contato
            diretamente. Nossa equipe responderá em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 reveal-left space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <Icon size={20} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: '#a0aec0' }}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium whitespace-pre-line hover:underline"
                        style={{ color: '#0d1b2a' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium whitespace-pre-line"
                        style={{ color: '#0d1b2a' }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Social */}
            <div
              className="p-5 rounded-2xl bg-white border"
              style={{ borderColor: '#e2e8f0' }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-3"
                style={{ color: '#a0aec0' }}
              >
                Redes Sociais
              </p>
              <a
                href="https://instagram.com/idealmenteclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background:
                    'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                }}
              >
                <Instagram size={18} />
                @idealmenteclinica
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right">
            <div
              className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border shadow-sm"
              style={{ borderColor: '#e2e8f0' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  >
                    <CheckCircle size={40} style={{ color: '#10b981' }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: '#0d1b2a' }}
                  >
                    Mensagem Enviada!
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-sm"
                    style={{ color: '#4a5568' }}
                  >
                    Recebemos sua mensagem com sucesso. Nossa equipe entrará em
                    contato em até 24 horas para agendar sua consulta.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', phone: '', specialty: '', message: '' })
                      setTouched({})
                      setErrors({})
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: '#2e9cca' }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: '#0d1b2a' }}
                  >
                    Preencha o formulário
                  </h3>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: '#374151' }}
                    >
                      Nome completo <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass('name')}
                      style={{ color: '#0d1b2a' }}
                    />
                    {touched.name && errors.name && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#ef4444' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: '#374151' }}
                      >
                        E-mail <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldClass('email')}
                        style={{ color: '#0d1b2a' }}
                      />
                      {touched.email && errors.email && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#ef4444' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: '#374151' }}
                      >
                        Telefone <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(11) 99999-9999"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldClass('phone')}
                        style={{ color: '#0d1b2a' }}
                      />
                      {touched.phone && errors.phone && (
                        <p className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#ef4444' }}>
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Specialty */}
                  <div>
                    <label
                      htmlFor="specialty"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: '#374151' }}
                    >
                      Especialidade de interesse <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={form.specialty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass('specialty')}
                      style={{ color: form.specialty ? '#0d1b2a' : '#9ca3af' }}
                    >
                      <option value="" disabled>
                        Selecione uma especialidade
                      </option>
                      {specialties.map((s) => (
                        <option key={s} value={s} style={{ color: '#0d1b2a' }}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {touched.specialty && errors.specialty && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#ef4444' }}>
                        <AlertCircle size={12} /> {errors.specialty}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: '#374151' }}
                    >
                      Mensagem <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Conte um pouco sobre o que você busca ou qualquer informação que queira compartilhar..."
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${fieldClass('message')} resize-none`}
                      style={{ color: '#0d1b2a' }}
                    />
                    <div className="flex items-start justify-between mt-1">
                      {touched.message && errors.message ? (
                        <p className="flex items-center gap-1 text-xs" style={{ color: '#ef4444' }}>
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs" style={{ color: '#a0aec0' }}>
                        {form.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs" style={{ color: '#a0aec0' }}>
                    Suas informações são confidenciais e protegidas pela LGPD. Nunca
                    compartilharemos seus dados com terceiros.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                    style={{
                      background: loading
                        ? '#2e9cca'
                        : 'linear-gradient(135deg, #2e9cca, #1a3a5c)',
                      boxShadow: '0 6px 20px rgba(46, 156, 202, 0.3)',
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="3"
                          />
                          <path
                            d="M12 2a10 10 0 0 1 10 10"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
