/**
 * Catálogo de projetos exibidos no portfólio.
 * Edite esta lista para adicionar, remover ou atualizar os cartões.
 *
 * Campos obrigatórios: number, title, category, status, description,
 * stack, github e theme.
 * Temas de capa disponíveis: wine, job, bank e sushi.
 */
export const projects = [
  {
    number: '01',
    title: 'WineGuard Backend',
    category: 'Backend · FIWARE',
    status: 'Em desenvolvimento',
    description:
      'API para monitoramento de ambientes de armazenamento de vinho, conectada ao ecossistema FIWARE.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'FIWARE'],
    github: 'https://github.com/joao-jps/wineguard-backend',
    theme: 'wine',
  },
  {
    number: '02',
    title: 'JobTrack API',
    category: 'Backend · REST API',
    status: 'Em desenvolvimento',
    description: [
      'API para organizar projetos de desenvolvimento, acompanhar seu status',
      'e gerenciar tecnologias e matérias relacionadas.',
    ].join(' '),
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/joao-jps/jobtrack-api',
    theme: 'job',
  },
  {
    number: '03',
    title: 'Spring Bank',
    category: 'Backend · Finanças',
    status: 'Em desenvolvimento',
    description:
      'Projeto de serviços bancários com foco em operações de conta e transferência.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/joao-jps/Spring-Bank',
    theme: 'bank',
  },
  {
    number: '04',
    title: 'Restaurante Japonês',
    category: 'Frontend · Projeto acadêmico',
    status: 'Concluído',
    description:
      'Experiência digital para uma loja de sushi, desenvolvida em equipe na Smartech.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Smartech-Fiap/CP5-Restaurante_Japones',
    theme: 'sushi',
  },
]
