import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Dra. Mariana Fonseca',
    role: 'Psicóloga Clínica',
    crp: 'CRP 06/123456',
    specialty: 'Terapia Cognitivo-Comportamental',
    bio: 'Especialista em ansiedade, depressão e transtornos de humor. Mestre em Psicologia Clínica pela USP. Atende adultos e adolescentes com abordagem baseada em evidências.',
    initials: 'MF',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #2e9cca 100%)',
    tags: ['TCC', 'Ansiedade', 'Depressão'],
  },
  {
    name: 'Dr. Rafael Monteiro',
    role: 'Psiquiatra',
    crp: 'CRM 12/654321',
    specialty: 'Psiquiatria do Adulto e Infantil',
    bio: 'Médico psiquiatra com residência na UNIFESP. Especializado em transtornos do humor, TDAH e acompanhamento farmacológico. Experiência de 10 anos na área.',
    initials: 'RM',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)',
    tags: ['TDAH', 'Farmacologia', 'Transtorno Bipolar'],
  },
  {
    name: 'Dra. Camila Vieira',
    role: 'Neuropsicóloga',
    crp: 'CRP 06/789012',
    specialty: 'Avaliação e Reabilitação Neuropsicológica',
    bio: 'Especialista em avaliação neuropsicológica para TEA, TDAH, dislexia e sequelas neurológicas. Doutoranda em Neurociências pela UNICAMP.',
    initials: 'CV',
    gradient: 'linear-gradient(135deg, #2e9cca 0%, #5bc4e8 100%)',
    tags: ['TEA', 'Avaliação', 'Reabilitação'],
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Terapeuta Ocupacional',
    crp: 'CREFITO 3/234567-TO',
    specialty: 'Desenvolvimento Infantil e Integração Sensorial',
    bio: 'Especialista em desenvolvimento infantil, integração sensorial e inclusão escolar. Atende crianças e adolescentes com atrasos globais e transtornos do neurodesenvolvimento.',
    initials: 'BS',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #5bc4e8 100%)',
    tags: ['Infantil', 'Sensorial', 'Inclusão'],
  },
]

const AvatarPlaceholder = ({
  initials,
  gradient,
}: {
  initials: string
  gradient: string
}) => (
  <div
    className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg"
    style={{ background: gradient }}
    aria-label={`Avatar de ${initials}`}
  >
    {initials}
  </div>
)

export default function Team() {
  return (
    <section
      id="equipe"
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
            Nossa Equipe
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-5 section-heading section-heading-center"
            style={{ color: '#0d1b2a' }}
          >
            Profissionais que Fazem a Diferença
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
            Conheça alguns dos profissionais que compõem nossa equipe multidisciplinar,
            todos comprometidos com o seu bem-estar e com os mais altos padrões éticos.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal card-hover group bg-white rounded-3xl overflow-hidden border"
              style={{
                borderColor: '#e2e8f0',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Card top accent */}
              <div
                className="h-1.5 w-full"
                style={{ background: member.gradient }}
              />

              <div className="p-6">
                {/* Avatar + contact */}
                <div className="flex items-start justify-between mb-5">
                  <AvatarPlaceholder
                    initials={member.initials}
                    gradient={member.gradient}
                  />
                  <div className="flex gap-2 mt-1">
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(46, 156, 202, 0.1)',
                        color: '#2e9cca',
                      }}
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail size={14} />
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(26, 58, 92, 0.1)',
                        color: '#1a3a5c',
                      }}
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={14} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <h3
                  className="text-base font-bold leading-tight mb-0.5"
                  style={{ color: '#0d1b2a' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#2e9cca' }}
                >
                  {member.role}
                </p>
                <p className="text-xs mb-1" style={{ color: '#718096' }}>
                  {member.crp}
                </p>
                <p
                  className="text-xs font-medium mb-3"
                  style={{ color: '#4a5568' }}
                >
                  {member.specialty}
                </p>

                {/* Bio */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#718096' }}
                >
                  {member.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(46, 156, 202, 0.08)',
                        color: '#2e9cca',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center text-sm mt-10 reveal"
          style={{ color: '#a0aec0' }}
        >
          Nossa equipe conta com mais de 15 profissionais especializados. Conheça todos eles
          entrando em contato conosco.
        </p>
      </div>
    </section>
  )
}
