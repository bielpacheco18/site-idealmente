import { Instagram, Mail } from 'lucide-react'

const team = [
  {
    name: 'Gabriela Alves Barcelos',
    role: 'Psicóloga Clínica',
    crp: 'CRP 06/225881',
    specialty: 'Abordagem Centrada na Pessoa',
    bio: 'Graduada pelo IBMR, com formação sólida na ACP e Pós-graduanda em Psicologia Clínica. Atua em atendimentos individuais, grupos e plantão psicológico. Integra núcleos de pesquisa em Psicopatologia, Saúde Mental e Perdas e Lutos.',
    photo: '/gabriela.jpeg',
    initials: 'GA',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #2e9cca 100%)',
    tags: ['ACP', 'Luto', 'Plantão Psicológico'],
    instagram: 'https://instagram.com/galvespsi',
  },
  {
    name: 'Fabiana Elias',
    role: 'Psicóloga Clínica',
    crp: '',
    specialty: 'TCC e Psicopatologia',
    bio: 'Formada pela UNESA, com formação em TCC e Psicopatologia. Experiência em atendimento individual, grupos, saúde mental, crises, urgência e dependência química. Atendimento marcado pela empatia e atenção na escuta.',
    photo: '/fabiana.jpeg',
    initials: 'FE',
    gradient: 'linear-gradient(135deg, #2e9cca 0%, #5bc4e8 100%)',
    tags: ['TCC', 'Dependência Química', 'Urgência'],
  },
  {
    name: 'Larissa Vieira Leal',
    role: 'Psicóloga Clínica',
    crp: 'CRP 05/86385',
    specialty: 'Terapia Cognitivo-Comportamental',
    bio: 'Graduada pela Universidade Veiga de Almeida. Atua com TCC em atendimentos individuais focados em ansiedade, burnout, autoestima e relacionamentos. Oferece escuta acolhedora e estratégias práticas respeitando a individualidade de cada paciente.',
    photo: '/larissa.jpeg',
    initials: 'LL',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #5bc4e8 100%)',
    tags: ['TCC', 'Ansiedade', 'Burnout'],
    instagram: 'https://instagram.com/psilarissaleal_',
  },
]

const Avatar = ({
  photo,
  initials,
  gradient,
  name,
}: {
  photo?: string
  initials: string
  gradient: string
  name: string
}) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-2xl object-cover flex-shrink-0 shadow-lg"
      />
    )
  }
  return (
    <div
      className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg"
      style={{ background: gradient }}
      aria-label={`Avatar de ${initials}`}
    >
      {initials}
    </div>
  )
}

export default function Team() {
  return (
    <section
      id="equipe"
      className="py-16 sm:py-24 lg:py-32"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="h-1.5 w-full" style={{ background: member.gradient }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <Avatar
                    photo={member.photo}
                    initials={member.initials}
                    gradient={member.gradient}
                    name={member.name}
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
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(26, 58, 92, 0.1)',
                          color: '#1a3a5c',
                        }}
                        aria-label={`Instagram de ${member.name}`}
                      >
                        <Instagram size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold leading-tight mb-0.5" style={{ color: '#0d1b2a' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#2e9cca' }}>
                  {member.role}
                </p>
                {member.crp && (
                  <p className="text-xs mb-1" style={{ color: '#718096' }}>
                    {member.crp}
                  </p>
                )}
                <p className="text-xs font-medium mb-3" style={{ color: '#4a5568' }}>
                  {member.specialty}
                </p>

                <p className="text-sm leading-relaxed mb-4" style={{ color: '#718096' }}>
                  {member.bio}
                </p>

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

        <p className="text-center text-sm mt-10 reveal" style={{ color: '#a0aec0' }}>
          Nossa equipe conta com mais de 15 profissionais especializados. Conheça todos eles
          entrando em contato conosco.
        </p>
      </div>
    </section>
  )
}
