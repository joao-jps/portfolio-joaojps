
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
      <p>Confira meu currículo completo com minhas experiências, formação e habilidades.</p>
      <a href="./src/assets/curriculojpds.pdf" download>Baixar Currículo →</a>
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

  // -- SKILLS  --
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

  //-- PROJETOS -- 
  "proj-petshop": {
    title: "H&S Petshop",
    content: `
      <p>Site completo para um petshop fictício com páginas de serviços, produtos e contato.</p>
      <p><strong>Tecnologias:</strong> HTML, CSS</p>
      <a href="https://github.com/joao-jps/H-S-petshop.git" target="_blank">Ver no GitHub →</a>
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

      <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript, API REST.</p>
      <a href="https://github.com/joao-jps/Sprint-2-Jovi.git" target="_blank">Ver no GitHub →</a>
    `
  }
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

// Animação ao rolar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.observe-anim').forEach(el => observer.observe(el));