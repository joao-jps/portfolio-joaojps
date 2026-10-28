import { projects } from './projects.js'

function Icon({ name, size = 16 }) {
  const paths = { down: <path d="M12 5v14m-7-7 7 7 7-7"/>, right: <path d="M5 12h14m-7-7 7 7-7 7"/>, up: <path d="M7 17 17 7M7 7h10v10"/>, github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.77 5.07 5.07 0 0 0 18.91 0S17.73-.35 15 1.48a13.38 13.38 0 0 0-7 0C5.27-.35 4.09 0 4.09 0A5.07 5.07 0 0 0 4 3.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 17.13V21" transform="translate(1 1) scale(.9)"/></> }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.up}</svg>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card group">
      <a className={`project-art art-${project.theme}`} href={project.github} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} no GitHub`}>
        <div className="art-top"><span>{project.category}</span><span className="art-number">{project.number}</span></div>
        <div className="art-visual" aria-hidden="true">
          {project.theme === 'wine' && <><div className="wine-orbit orbit-one"/><div className="wine-orbit orbit-two"/><div className="wine-bottle"><i/></div><div className="wine-glow"/></>}
          {project.theme === 'job' && <><div className="job-window"><div className="window-dots"><i/><i/><i/></div><div className="job-line long"/><div className="job-line"/><div className="job-row"><i/><i/><i/></div><div className="job-line short"/></div><div className="job-badge">01 <Icon name="up" size={14}/></div></>}
          {project.theme === 'bank' && <><div className="bank-card"><span>JP</span><div className="bank-chip"/><div className="bank-card-bottom"><i/><i/><i/><i/></div></div><div className="bank-ring"/></>}
          {project.theme === 'sushi' && <><div className="sushi-sun"/><div className="sushi-roll roll-one"><i/></div><div className="sushi-roll roll-two"><i/></div><div className="sushi-leaf"/></>}
        </div>
        <span className="art-open"><Icon name="up" size={19}/></span>
      </a>
      <div className="project-info">
        <div className="project-heading"><h3>{project.title}</h3><span className={`status ${project.status === 'Concluído' ? 'complete' : ''}`}><i/>{project.status}</span></div>
        <p>{project.description}</p>
        <div className="project-bottom"><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a className="repo-link" href={project.github} target="_blank" rel="noreferrer"><Icon name="github" size={15}/> GitHub <Icon name="up" size={13}/></a></div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return <>
    <header className="nav-wrap"><nav className="nav shell"><a href="#inicio" className="wordmark" aria-label="João Paulo Santos, início"><span className="mark">JP</span><span>João Paulo Santos<small>DESENVOLVEDOR BACKEND</small></span></a><div className="nav-links"><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div><div className="resume-links"><a href="/cv/resume-jpss.pdf" download>Resume <Icon name="down" size={13}/></a><a href="/cv/cv-jps.pdf" download>CV <Icon name="down" size={13}/></a></div><a className="mobile-contact" href="#contato"><Icon name="right" size={19}/></a></nav></header>
    <main>
      <section className="hero shell" id="inicio">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> DISPONÍVEL PARA OPORTUNIDADES</div><h1>Construindo o que<br/>acontece <em>por trás.</em></h1><p className="hero-description">Sou João Paulo, desenvolvedor com interesse em backend e sistemas que resolvem problemas reais. Gosto de transformar ideias em soluções claras, úteis e bem construídas.</p><div className="hero-actions"><a href="#projetos" className="button button-dark">Explorar projetos <Icon name="right" size={17}/></a><a href="#sobre" className="text-link">Um pouco sobre mim <Icon name="up" size={15}/></a></div></div>
        <div className="hero-side"><div className="hero-monogram">JP<span>.</span></div><div className="side-caption"><span>BRASIL · 2026</span><span>01 / 04</span></div><div className="hero-rule"/><p>Curiosidade, consistência<br/>e código com propósito.</p></div>
        <a className="scroll-cue" href="#projetos"><span>ROLE PARA EXPLORAR</span><span className="scroll-line"/></a>
      </section>
      <section className="projects-section" id="projetos"><div className="shell"><div className="section-head"><div><div className="eyebrow section-eyebrow">SELEÇÃO DE TRABALHOS <span>— 2024 / 2026</span></div><h2>Projetos em <em>movimento.</em></h2></div><p>Ideias em construção e entregas<br/>que já ganharam vida.</p></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project}/>)}</div><div className="project-foot"><span>{String(projects.length).padStart(2,'0')} projetos selecionados</span><span>Mais a caminho <span className="foot-arrow">↗</span></span></div></div></section>
      <section className="about-section" id="sobre"><div className="shell about-grid"><div><div className="eyebrow section-eyebrow">UM POUCO SOBRE MIM</div><h2>Menos ruído.<br/><em>Mais intenção.</em></h2></div><div className="about-copy"><p>Sou estudante e desenvolvedor brasileiro, explorando o universo de APIs, bancos de dados e arquitetura backend. Acredito que bons produtos começam por entender bem o problema.</p><p>Tenho aprendido construindo: cada projeto é uma oportunidade de aprofundar fundamentos, colaborar e deixar o código um pouco melhor do que encontrei.</p><div className="about-note"><span className="note-symbol">✳</span><span>Em constante aprendizado,<br/>com os pés no presente.</span></div></div></div></section>
      <section className="contact-section" id="contato"><div className="shell contact-inner"><div><div className="eyebrow section-eyebrow">VAMOS CONVERSAR?</div><h2>Uma boa ideia começa<br/>com um <em>olá.</em></h2></div><a className="contact-cta" href="https://github.com/joao-jps"><span>Visite meu GitHub</span><span className="contact-icon"><Icon name="up" size={22}/></span></a></div></section>
    </main>
    <footer className="footer shell"><a href="#inicio" className="footer-mark">JP<span>.</span></a><span>Feito com cuidado · 2026</span><div className="social-links"><a href="https://github.com/joao-jps" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={17}/></a></div></footer>
  </>
}
