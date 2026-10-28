import { projects } from './projects.js'

/** Exibe ícones SVG locais sem depender de fontes externas. */
function Icon({ name, size = 16 }) {
  const paths = {
    down: <path d="M12 5v14m-7-7 7 7 7-7" />,
    right: <path d="M5 12h14m-7-7 7 7-7 7" />,
    up: <path d="M7 17 17 7M7 7h10v10" />,
    github: (
      <path
        d={
          'M9 19c-4.3 1.4-4.3-2.5-6-3 ' +
          'm12 5v-3.87a3.37 3.37 0 0 0-.94-2.61 ' +
          'c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.77 ' +
          '5.07 5.07 0 0 0 18.91 0S17.73-.35 15 1.48 ' +
          'a13.38 13.38 0 0 0-7 0C5.27-.35 4.09 0 4.09 0 ' +
          'A5.07 5.07 0 0 0 4 3.77a5.44 5.44 0 0 0-1.5 3.78 ' +
          'c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 17.13V21'
        }
        transform="translate(1 1) scale(.9)"
      />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.up}
    </svg>
  )
}

/** Desenha um mascote original inspirado em uma xícara de café Java. */
function JavaMascot() {
  return (
    <svg
      className="java-mascot"
      viewBox="0 0 48 48"
      role="img"
      aria-label="Mascote de café inspirado em Java"
    >
      <path
        className="mascot-steam"
        d="M19 8c-3-3 3-4 0-7M28 9c-3-3 3-4 0-7"
      />
      <path className="mascot-arm" d="m13 22-7 5 4 3 5-4m20-4 7 5-4 3-5-4" />
      <path
        className="mascot-cup"
        d="M14 15h21l-2 20H17l-3-20Zm21 4h3a5 5 0 0 1 0 10h-5"
      />
      <path className="mascot-coffee" d="M16 19h17" />
      <circle className="mascot-eye" cx="21" cy="25" r="1.4" />
      <circle className="mascot-eye" cx="29" cy="25" r="1.4" />
      <path className="mascot-smile" d="M21 29c2 2 5 2 7 0" />
      <path className="mascot-leg" d="m20 35-1 6m10-6 1 6" />
      <path className="mascot-shoe" d="M16 42h6m6 0h6" />
    </svg>
  )
}

/** Mostra um projeto; os dados e o link ficam em src/projects.js. */
function ProjectCard({ project }) {
  return (
    <article className="project-card group">
      <a
        className={`project-art art-${project.theme}`}
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver ${project.title} no GitHub`}
      >
        <div className="art-top">
          <span>{project.category}</span>
          <span className="art-number">{project.number}</span>
        </div>

        <div className="art-visual" aria-hidden="true">
          {project.theme === 'wine' && (
            <>
              <div className="wine-orbit orbit-one" />
              <div className="wine-orbit orbit-two" />
              <div className="wine-bottle"><i /></div>
              <div className="wine-glow" />
            </>
          )}
          {project.theme === 'job' && (
            <>
              <div className="job-window">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="job-line long" />
                <div className="job-line" />
                <div className="job-row"><i /><i /><i /></div>
                <div className="job-line short" />
              </div>
              <div className="job-badge">
                01 <Icon name="up" size={14} />
              </div>
            </>
          )}
          {project.theme === 'bank' && (
            <>
              <div className="bank-card">
                <span>JP</span>
                <div className="bank-chip" />
                <div className="bank-card-bottom">
                  <i /><i /><i /><i />
                </div>
              </div>
              <div className="bank-ring" />
            </>
          )}
          {project.theme === 'sushi' && (
            <>
              <div className="sushi-sun" />
              <div className="sushi-roll roll-one"><i /></div>
              <div className="sushi-roll roll-two"><i /></div>
              <div className="sushi-leaf" />
            </>
          )}
        </div>

        <span className="art-open"><Icon name="up" size={19} /></span>
      </a>

      <div className="project-info">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <span className={`status ${project.status === 'Concluído' ? 'complete' : ''}`}>
            <i />
            {project.status}
          </span>
        </div>
        <p>{project.description}</p>
        <div className="project-bottom">
          <div className="tags">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a
            className="repo-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={15} />
            GitHub
            <Icon name="up" size={13} />
          </a>
        </div>
      </div>
    </article>
  )
}

/** Reúne os perfis sociais e o e-mail em links fáceis de identificar. */
function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Links de contato">
      <a
        className="contact-link"
        href="https://github.com/joao-jps"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" size={18} />
        <span><small>PROJETOS E CÓDIGO</small>GitHub</span>
        <Icon name="up" size={15} />
      </a>
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/joaojps/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="linkedin" size={18} />
        <span><small>VAMOS NOS CONECTAR</small>LinkedIn</span>
        <Icon name="up" size={15} />
      </a>
      <a className="contact-link" href="mailto:jujpsouza@gmail.com">
        <Icon name="mail" size={18} />
        <span>
          <small>MANDE UMA MENSAGEM</small>
          E-mail
          <span className="contact-address">jujpsouza@gmail.com</span>
        </span>
        <Icon name="up" size={15} />
      </a>
    </div>
  )
}

/** Organiza as seções principais do portfólio em uma página única. */
export default function Portfolio() {
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav shell">
          <a href="#inicio" className="wordmark" aria-label="João Pedro De Souza, início">
            <span className="mark">JP</span>
            <span>
              João Pedro De Souza
              <small>ENGENHARIA DE SOFTWARE · BACKEND</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="resume-links">
            <a href="/cv/resume-jpss.pdf" download>
              Resume <Icon name="down" size={13} />
            </a>
            <a href="/cv/cv-jps.pdf" download>
              CV <Icon name="down" size={13} />
            </a>
          </div>

          <a className="mobile-contact" href="#contato" aria-label="Ver contatos">
            <Icon name="right" size={19} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero shell" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              Java / Spring / PostgreSQL | Backend &amp; APIs
            </div>
            <h1>Construindo o que<br />acontece <em>por trás.</em></h1>
            <p className="hero-description">
              Sou João Pedro, estudante e desenvolvedor com foco em backend,
              Java e Spring. Gosto de transformar ideias em soluções claras,
              úteis e bem construídas.
            </p>
            <div className="hero-actions">
              <a href="#projetos" className="button button-dark">
                Explorar projetos <Icon name="right" size={17} />
              </a>
              <a href="#sobre" className="text-link">
                Um pouco sobre mim <Icon name="up" size={15} />
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-frame">
              <img
                className="profile-photo"
                src="/images/joao-pedro-profile.png"
                alt="João Pedro De Souza"
              />
              <span className="portrait-spark spark-one" />
              <span className="portrait-spark spark-two" />
            </div>
            <h2 className="portrait-name">João Pedro De Souza</h2>
            <div className="side-caption">
              <span>BRASIL · 2026</span>
              <span>18 ANOS</span>
            </div>
            <div className="hero-rule" />
            <p>Backend · APIs<br />Java / Spring / PostgreSQL</p>
          </div>

          <a className="scroll-cue" href="#projetos">
            <span>ROLE PARA EXPLORAR</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section className="projects-section" id="projetos">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="eyebrow section-eyebrow">
                  PROJETOS PESSOAIS E ACADÊMICOS <span>— 04 PROJETOS</span>
                </div>
                <h2>Projetos em <em>movimento.</em></h2>
              </div>
              <p>Ideias em construção e entregas<br />que já ganharam vida.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>

            <div className="project-foot">
              <span>{String(projects.length).padStart(2, '0')} projetos selecionados</span>
              <span>Mais a caminho <span className="foot-arrow">↗</span></span>
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="shell about-grid">
            <div>
              <div className="eyebrow section-eyebrow">UM POUCO SOBRE MIM</div>
              <h2>Menos ruído.<br /><em>Mais intenção.</em></h2>
            </div>

            <div className="about-copy">
              <p>
                Sou estudante de Engenharia de Software e desenvolvedor
                brasileiro, explorando o universo de APIs, bancos de dados e
                arquitetura backend. Acredito que bons produtos começam por
                entender bem o problema.
              </p>
              <p>
                Estou atualmente no segundo semestre da graduação, iniciada em
                02/2026, com formação prevista para 12/2029. Continuo me
                aprofundando e buscando melhorar minhas hard e soft skills para
                me tornar um estudante desenvolvedor melhor. Procuro minha
                primeira oportunidade para adquirir experiência, aprender e
                contribuir com resultados.
              </p>
              <div className="about-note">
                <JavaMascot />
                <span>Em constante aprendizado,<br />com os pés no presente.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="shell contact-inner">
            <div>
              <div className="eyebrow section-eyebrow">VAMOS CONVERSAR?</div>
              <h2>Uma boa ideia começa<br />com um <em>olá.</em></h2>
              <p className="contact-intro">Escolha por onde prefere falar comigo.</p>
            </div>
            <ContactLinks />
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a href="#inicio" className="footer-mark" aria-label="Voltar ao início">
          JP<span>.</span>
        </a>
        <span>João Pedro De Souza · 2026</span>
        <div className="footer-socials">
          <a href="https://github.com/joao-jps" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={17} />
          </a>
          <a href="https://www.linkedin.com/in/joaojps/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={17} />
          </a>
          <a href="mailto:jujpsouza@gmail.com" aria-label="E-mail">
            <Icon name="mail" size={17} />
          </a>
        </div>
      </footer>
    </>
  )
}
