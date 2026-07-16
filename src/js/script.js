// -- DADOS DOS CARDS --
const cardData = {

  // Criando IDs para uso na function open card
  github: {
    title: "GitHub",
    content: `
      <p>Aqui você encontra todos os meus projetos e repositórios públicos.</p>
      <p>Estou sempre commitando novos projetos e evoluindo meu código!</p>
      <a href="https://github.com/joao-jps" target="_blank">Acessar GitHub →</a>
    `
  },
  linkedin: {
    title: "LinkedIn",
    content: `
      <p>Conecte-se comigo no LinkedIn para acompanhar minha trajetória profissional.</p>
      <p>Estou aberto a oportunidades de estágio e networking!</p>
      <a href="https://www.linkedin.com/in/joaojps/" target="_blank">Acessar LinkedIn →</a>
    `
  },
  curriculo: {
    title: "Currículo",
    content: `
      <p>Confira meu currículo completo!</p>
      <a href="./src/assets/imgs/CV_JPS (4).pdf" download>Baixar Currículo →</a>
    `
  },
  email: {
    title: "E-mail",
    content: `
      <p>Prefere o e-mail? Me manda uma mensagem diretamente!</p>
      <a href="mailto:jujp.souza@gmail.com">jujp.souza@gmail.com →</a>
    `
    
  },
  "sobre-mais": {
    title: "Mais sobre mim",
    content: `
     <p>Tenho 18 anos e curso <strong>Engenharia de Software</strong> na <strong>FIAP</strong>, atualmente no <strong>2º semestre</strong>.</p>

    <p>Estou focado em <strong>Desenvolvimento Back-End</strong>, estudando principalmente <strong>Java, Spring Boot</strong> e <strong>SQL</strong>, com interesse em <strong>Cloud Computing (AWS)</strong> para atuar com infraestrutura e aplicações escaláveis.</p>

    <p>Desenvolvo projetos práticos para consolidar meus conhecimentos, aplicando conceitos de APIs REST, bancos de dados, Git/GitHub e boas práticas de desenvolvimento.</p>

    <p>Busco minha primeira oportunidade para evoluir profissionalmente, contribuir com projetos reais e continuar aprendendo na área de tecnologia.</p>`
  },

  // -- SKILLS  --
  "skill-js": {
    title: "JavaScript",
    content: `<p>Estudando Node.js para BackEnd, Bootstrap para Front-End. Arrays, Objetos, Eventos, Fetch de APIs, Lógica de programação. </p><p>Nível: <strong>Intermediário</strong></p>`
  },
  "skill-python": {
    title: "Python",
    content: `<p>Lógica de programação, scripts e automações simples, focando em BackEnd.</p><p>Nível: <strong>Básico</strong></p>`
  },
  "skill-git": {
    title: "Git/GitHub",
    content: `<p>Versionamento de código, commits, branches e repositórios remotos.</p><p>Nível: <strong>Intermediário/Avançado</strong></p>`
  },
  "skill-cpp": {
    title: "C++",
    content: `<p>Lógica de programação, estruturas de dados, conhecimento básico de hardwares e algoritmos básicos.</p><p>Nível: <strong>Básico</strong></p>`
  },
  // NOVOS: Java, Spring Boot (aninhado), POO
  "skill-java": {
    title: "Java",
    content: `
      <p>Desenvolvimento back-end com Java, aplicando lógica de programação, estruturas de controle e orientação a objetos.</p>
      <p>Nível: <strong>Básico</strong></p>

      <div class="framework-block">
        <p><strong>Frameworks utilizados:</strong></p>
        <span class="framework-tag"><i class="fas fa-leaf"></i> Spring Boot</span>
        <p>(Atualmente estudando) Criação de aplicações back-end com Spring Boot: estrutura de projetos, endpoints REST e integração com banco de dados.</p>
      </div>
    `
  },
  "skill-poo": {
    title: "POO — Programação Orientada a Objetos",
    content: `
      <p>Aplicação dos pilares da orientação a objetos: encapsulamento, herança, polimorfismo e abstração.</p>
      <p>Praticado principalmente em Java, com foco em organização e reutilização de código.</p>
      <p>Nível: <strong>Básico / Em desenvolvimento</strong></p>
    `
  },
  // NOVO: Banco de Dados
  "skill-sql": {
    title: "SQL",
    content: `
      <p>Consultas, criação de tabelas e modelagem básica de banco de dados relacional.</p>
      <p>Nível: <strong>Básico</strong></p>
    `
  },

  //-- PROJETOS -- 
  "proj-vinharia": {
    title: "Vinharia Agnello",
    content: `
      <p>Landing page desenvolvida para uma vinharia fictícia, com foco em tipografia refinada e apresentação elegante dos produtos.</p>
      <p><strong>Tecnologias:</strong> HTML5, CSS3</p>
      <a href="https://github.com/joao-jps/CP2-Vinharia-Agnello.git" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-vinharia2": {
    title: "Vinharia Agnello (JS)",
    content: `
      <p>Evolução do projeto anterior, com sistema dinâmico de exibição de informações dos vinhos utilizando JavaScript.</p>
      <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript</p>
      <a href="https://github.com/joao-jps/vinheria-agnello-checkpoint03.git" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-Jovi": {
    title: "Jovi Vision Core",
    content: `
      <p>Projeto acadêmico focado em inovação tecnológica, apresentando a estrutura e funcionalidades do sistema <strong>Jovi Vision Core.</strong></p>

      <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript, API REST.</p>
      <a href="https://github.com/joao-jps/Sprint-2-Jovi.git" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-orbitmax": {
    title: "OrbitMax Sentinel",
    content: `
      <p>Sistema de detecção de queimadas via satélite desenvolvido como projeto acadêmico na <strong>FIAP</strong> (Global Solution 2026 — 1º semestre).</p>
      <p>Interface web visualmente agradável, animações em <strong>Canvas API</strong>, scroll effects e design totalmente responsivo.</p>
      <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript, Canvas API</p>
      <a href="https://github.com/joao-jps/Landing-Page-OrbitMax-Sentinel.git" target="_blank">Ver no GitHub →</a>
    `
  },

  // -- IDIOMAS --
  "lang-pt": {
    title: "Português",
    content: `<p>Idioma nativo, usado no dia a dia e em toda a comunicação acadêmica.</p><p>Nível: <strong>Nativo</strong></p>`
  },
  "lang-en": {
    title: "Inglês",
    content: `<p>Boa fluência em leitura, escrita e conversação técnica — Possuo Experiência em conversação com estrangeiros.</p><p>Nível: <strong>Fluente</strong></p>`
  },
};

// -- ABRIR CARD -- 
function openCard(id) {     
  const data = cardData[id];   //Pedindo ID do card q foi aberto
  if (!data) return;           // se não existir esse id accabar a função


  // Aqui eu procuro os elementos q tem o ID modal-content no html e troco o conteúdo deles pelo q está dentro do html
  document.getElementById("modal-content").innerHTML = `   
    <h3>${data.title}</h3>
    ${data.content}
  `;

  document.getElementById("overlay").style.display = "block";     //Transforma o display:none em display:block e faz aparecer o fundo escuro
  const modal = document.getElementById("modal-card");            // guarda o modal card na variável
  modal.style.display = "block";                                  // faz o modal aparecer
  setTimeout(() => modal.classList.add("active"), 10);            // aqui adiciono uma classe no modal dentro do html e digo para esperar 10 segundos para agir, ai a classe #model-card.active do CSS entra em ação
}

// -- FECHAR CARD --
function closeCard() {
  const modal = document.getElementById("modal-card");
  modal.classList.remove("active");  // Aqui ele remove a classe active fazendo a classe do CSS parar e a animação voltar
  setTimeout(() => {
    modal.style.display = "none";       // Aqui retorna ao display:none
    document.getElementById("overlay").style.display = "none";      // retorna ao display:none
  }, 300);   // Timeout de 300 ms ( 0.3 segundos no CSS)
}

// -- BOTÕES COM data-card --
document.querySelectorAll(".btn-card[data-card]").forEach(btn => {       // Pega todos os botões q possuem data-card e para cada botão execute:
  btn.addEventListener("click", () => openCard(btn.dataset.card));       // Quando clicar abre o card correspondente 
});

// -- MENU MOBILE --
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("open");
}

// -- ABAS DE PROJETOS (Front-End / Back-End) --
function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".projetos-panel").forEach(panel => {
    panel.hidden = panel.dataset.panel !== tab;
  });
}

// -- SLIDESHOW DE PROJETOS --
const track = document.getElementById("slide-track");
const dotsWrap = document.getElementById("slide-dots");
const slides = track ? Array.from(track.children) : [];
let currentSlide = 0;

// Cria os pontinhos (dots) de navegação, um para cada projeto
if (dotsWrap) {
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.setAttribute("aria-label", `Ir para o projeto ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
}
const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

// Atualiza a posição do track e o estado visual dos dots
function updateSlide() {
  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

// Suporte a arraste/swipe (mouse e touch) para "passar o lado" e ver outros projetos
if (track) {
  let startX = 0;
  let isDragging = false;

  const dragStart = (x) => { startX = x; isDragging = true; };
  const dragEnd = (x) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - x;
    if (Math.abs(diff) > 50) { // arraste mínimo para trocar de slide
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  track.addEventListener("touchstart", (e) => dragStart(e.touches[0].clientX));
  track.addEventListener("touchend", (e) => dragEnd(e.changedTouches[0].clientX));
  track.addEventListener("mousedown", (e) => dragStart(e.clientX));
  track.addEventListener("mouseup", (e) => dragEnd(e.clientX));
}

updateSlide();

// Animação ao rolar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.50 });

document.querySelectorAll('.observe-anim').forEach(el => observer.observe(el));