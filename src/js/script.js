
// ===== DADOS DOS CARDS =====
const cardData = {
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
      <p>Confira meu currículo completo com minhas experiências, formação e habilidades.</p>
      <a href="./src/assets/curriculojpsvscode.pdf" download>Baixar Currículo →</a>
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
     <p>Tenho 18 anos e curso <strong>Engenharia de Software</strong> na <strong>FIAP</strong>, estando no <strong>1º semestre</strong>.</p>

     <p>Iniciei meus estudos em programação recentemente e desde então venho desenvolvendo projetos práticos para fortalecer minhas habilidades técnicas.</p>

     <p>Busco minha primeira oportunidade de estágio na área de tecnologia, com foco em <strong>Desenvolvimento Web</strong> e aprendizado contínuo.</p>
    `
  },

  // SKILLS 
  "skill-html": {
    title: "HTML",
    content: `<p>Tenho boa base em HTML semântico, estruturação de páginas e acessibilidade.</p> <p>Nível: <strong>Intermediário</strong></p>`
  },
  "skill-css": {
    title: "CSS",
    content: `<p>Trabalho com Flexbox, Grid, animações e responsividade.</p><p>Nível: <strong>Intermediário</strong></p>`
  },
  "skill-js": {
    title: "JavaScript",
    content: `<p>Arrays, Objetos, Eventos, Fetch de APIs e Lógica de programação.</p><p>Nível: <strong>Intermediário</strong></p>`
  },
  "skill-python": {
    title: "Python",
    content: `<p>Lógica de programação, scripts e automações simples.</p><p>Nível: <strong>Básico</strong></p>`
  },
  "skill-git": {
    title: "Git/GitHub",
    content: `<p>Versionamento de código, commits, branches e repositórios remotos.</p><p>Nível: <strong>Intermediário/Avançado</strong></p>`
  },
  "skill-cpp": {
    title: "C++",
    content: `<p>Lógica de programação, estruturas de dados, conhecimento básico de hardwares e algoritmos básicos.</p><p>Nível: <strong>Básico</strong></p>`
  },

  // PROJETOS 
  "proj-petshop": {
    title: "H&S Petshop",
    content: `
      <p>Site completo para um petshop fictício com páginas de serviços, produtos e contato.</p>
      <p><strong>Tecnologias:</strong> HTML, CSS</p>
      <a href="https://github.com/SEU_USUARIO/petshop" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-vinharia": {
    title: "Vinharia Agnello",
    content: `
      <p>Landing page elegante para uma vinharia com foco em design e tipografia.</p>
      <p><strong>Tecnologias:</strong> HTML, CSS, JS</p>
      <a href="https://github.com/joao-jps/CP2-Vinharia-Agnello.git" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-vinharia2": {
    title: "Vinharia Agnello (JS)",
    content: `
      <p>Vinharia Agnello com foco no sistema de informação dos vinhos utilizando de JS</p>
      <p><strong>Tecnologias:</strong> HTML, CSS, JS</p>
      <a href="https://github.com/joao-jps/vinheria-agnello-checkpoint03.git" target="_blank">Ver no GitHub →</a>
    `
  },
  "proj-Jovi": {
    title: "Jovi Vision Core",
    content: `
      <p>Projeto acadêmico focado em inovação tecnológica, apresentando a estrutura e funcionalidades do sistema <strong>Jovi Vision Core.</strong></p>

      <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript e integração com API REST.</p>
      <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript, API REST</p>
      <a href="https://github.com/joao-jps/Sprint-2-Jovi.git" target="_blank">Ver no GitHub →</a>
    `
  }
};

//  ABRIR CARD 
function openCard(id) {
  const data = cardData[id];
  if (!data) return;

  document.getElementById("modal-content").innerHTML = `
    <h3>${data.title}</h3>
    ${data.content}
  `;

  document.getElementById("overlay").style.display = "block";
  const modal = document.getElementById("modal-card");
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("active"), 10);
}

// ===== FECHAR CARD =====
function closeCard() {
  const modal = document.getElementById("modal-card");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }, 300);
}

// ===== BOTÕES COM data-card =====
document.querySelectorAll(".btn-card[data-card]").forEach(btn => {
  btn.addEventListener("click", () => openCard(btn.dataset.card));
});

// ===== MENU MOBILE =====
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("open");
}

