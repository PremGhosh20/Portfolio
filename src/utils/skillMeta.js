import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiFirebase, SiGit, SiGithub, SiJavascript, SiHtml5, SiSocketdotio,
} from 'react-icons/si'
import { Brain, Cloud, Wrench, Code2, MessageSquare, Terminal } from 'lucide-react'

export const SKILL_ICONS = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'HTML5': SiHtml5,
  'CSS3': Code2,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': Terminal,
  Postman: Wrench,
  'Claude AI': Brain,
  'Cursor AI': Wrench,
  ChatGPT: MessageSquare,
  'REST APIs': Cloud,
  JWT: Cloud,
  CRUD: Cloud,
  'Socket.io': SiSocketdotio,
  SEO: Cloud,
}

export const SKILL_DESCRIPTIONS = {
  'React.js': 'Component architecture & modern UI',
  'Next.js': 'SSR, routing & production apps',
  'HTML5': 'Semantic markup & accessibility',
  'CSS3': 'Responsive layouts & animations',
  'JavaScript': 'ES6+ & async programming',
  'Node.js': 'Server-side JavaScript runtime',
  'Express.js': 'RESTful API development',
  MySQL: 'Relational database design',
  MongoDB: 'NoSQL document storage',
  Firebase: 'Realtime backend & auth',
  Git: 'Version control workflows',
  GitHub: 'Collaboration & CI/CD',
  'VS Code': 'Development environment',
  Postman: 'API testing & documentation',
  'Claude AI': 'AI-assisted development',
  'Cursor AI': 'AI-powered coding workflow',
  ChatGPT: 'Prompt engineering & automation',
  'REST APIs': 'API design patterns',
  JWT: 'Secure authentication tokens',
  CRUD: 'Data operation patterns',
  'Socket.io': 'Real-time communication',
  SEO: 'Search optimization',
}

export function getGroupedSkills(skills) {
  const aiNames = new Set(['Claude AI', 'Cursor AI', 'ChatGPT'])
  const toolNames = new Set(['Git', 'GitHub', 'VS Code', 'Postman'])
  const cloudNames = new Set(['Firebase', 'REST APIs', 'JWT', 'Socket.io'])

  const groups = {
    Frontend: skills.Frontend || [],
    Backend: skills.Backend || [],
    Database: (skills.Database || []).filter((s) => !cloudNames.has(s.name)),
    Tools: (skills.Tools || []).filter((s) => toolNames.has(s.name)),
    Cloud: [
      ...(skills.Database || []).filter((s) => cloudNames.has(s.name)),
      ...(skills.Concepts || []).filter((s) => ['REST APIs', 'JWT', 'Socket.io'].includes(s.name)),
    ],
    'AI Tools': (skills.Tools || []).filter((s) => aiNames.has(s.name)),
  }

  const conceptsRest = (skills.Concepts || []).filter(
    (s) => !['REST APIs', 'JWT', 'Socket.io'].includes(s.name),
  )
  groups.Backend = [...groups.Backend, ...conceptsRest.filter((s) => s.name === 'CRUD')]
  groups.Tools = [...groups.Tools, ...conceptsRest.filter((s) => s.name === 'SEO')]

  return groups
}
