export const SITE_CONFIG = {
  name: 'Prem Shrikant Ghosh',
  shortName: 'Prem Ghosh',
  title: 'Full Stack Developer',
  tagline: 'Transforming Ideas into High-Performance Web Applications.',
  email: 'premghoshs2005@gmail.com',
  github: 'https://github.com/PremGhosh20',
  linkedin: 'https://www.linkedin.com/in/prem-ghosh20/',
  githubUsername: 'Premghosh20',
  resumePath: '/Portfolio/Prem_Resume.pdf',
  siteUrl: 'https://premghosh20.github.io/Portfolio/',
  /** Digits only with country code, e.g. 919876543210 */
  whatsapp: '918329796758',
}

/** Build WhatsApp deep link with a project demo request message */
export function getProjectWhatsAppLink(project) {
  const number = String(SITE_CONFIG.whatsapp || '').replace(/\D/g, '')
  const message = [
    `Hi Prem, I found your portfolio and I'd like to test your project "${project.title}"`,
    project.subtitle ? ` (${project.subtitle}).` : '.',
    ' Could you please share the live demo / access details?',
  ].join('')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

export const TYPED_STRINGS = [
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
  'Node.js Developer',
  'AI Enthusiast',
]

export const HERO_SUMMARY =
  'Passionate Full Stack Developer with hands-on experience building scalable web applications using React, Node.js, and Next.js. Proven track record across multiple internships delivering production-ready features, fixing critical UI/UX issues, and writing technical documentation. Department Rank 1 with CGPI 9.53, driven to craft elegant, performant digital experiences.'

export const ABOUT_CONTENT = {
  intro:
    'I am a Full Stack Developer based in Mumbai, India, specializing in building modern, responsive, and scalable web applications. With experience across startups and tech companies, I bring a blend of technical expertise and creative problem-solving to every project.',
  journey:
    'My journey began with a passion for technology during my BSc in Information Technology at the University of Mumbai. Through rigorous coursework and multiple internships, I honed my skills in full-stack development, from crafting pixel-perfect UIs to building robust backend APIs.',
  goals:
    'I aim to grow as a software engineer at a product-driven company, contributing to impactful projects while continuously expanding my expertise in cloud technologies, DevOps, and AI-powered applications.',
  currentPosition: 'Web Trainee & Digital Marketing at BrandBase Capsule Pvt. Ltd.',
}

export const STATS = [
  { label: 'Projects', value: 3, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'CGPI', value: 9.53, suffix: '', decimals: 2 },
  { label: 'Certificates', value: 4, suffix: '+' },
  { label: 'GitHub Repos', value: 5, suffix: '+' },
  { label: 'Years Learning', value: 3, suffix: '+' },
]

export const SKILLS = {
  Frontend: [
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
  ],
  Backend: [
    { name: 'Node.js' },
    { name: 'Express.js' },
  ],
  Database: [
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Firebase' },
  ],
  Tools: [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'VS Code' },
    { name: 'Postman' },
    { name: 'Claude AI' },
    { name: 'Cursor AI' },
    { name: 'ChatGPT' },
  ],
  Concepts: [
    { name: 'REST APIs' },
    { name: 'JWT' },
    { name: 'CRUD' },
    { name: 'Socket.io' },
    { name: 'SEO' },
  ],
}

export const EXPERIENCE = [
  {
    company: 'BrandBase Capsule Pvt. Ltd.',
    role: 'Web Trainee & Digital Marketing',
    period: 'July 2026 – Present',
    current: true,
    responsibilities: [
      'Website Management & Deployment',
      'SEO Optimization',
      'Portfolio Updates & Content Management',
      'Social Media Content Creation',
      'Client Projects Support',
      'Digital Marketing Support',
    ],
  },
  {
    company: 'Gohil Tech Empire Pvt. Ltd.',
    role: 'Software Engineer Intern',
    period: 'May 2026 – June 2026',
    project: 'Way To Event – Event Ticketing & Management Platform',
    description:
      'A full-stack Event Ticketing & Management Platform featuring event creation, online ticket booking, QR code-based entry validation, secure payments, and role-based dashboards built with Next.js, Supabase, and TypeScript.',
    responsibilities: [
      'Fixed functional and UI/UX issues to improve user experience',
      'Performed testing and validation to improve platform reliability',
      'Debugged application issues across the stack',
      'Authored technical blogs and prepared documentation',
    ],
  },
  {
    company: 'ElevanceSkills',
    role: 'Full Stack Developer Intern',
    period: 'April 2026 – May 2026',
    responsibilities: [
      'React Development & Component Architecture',
      'Backend API Development',
      'Authentication & Authorization',
      'REST APIs & CRUD Operations',
      'Firebase Integration',
      'Version Control with Git & GitHub',
    ],
  },
]

export const PROJECTS = [
  {
    id: 'fastcab',
    title: 'FastCab',
    subtitle: 'Smart Cab Booking System',
    description:
      'A comprehensive cab booking platform with real-time ride management, role-based access control, and secure authentication for riders and drivers.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    features: ['Authentication', 'Booking System', 'Role Based Access', 'REST APIs', 'Responsive UI'],
    status: 'Completed',
    github: 'https://github.com/PremGhosh20/Cab-Booking-System.git',
    live: '',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'way-to-event',
    title: 'Way To Event',
    subtitle: 'Event Ticketing Platform',
    description:
      'A modern event ticketing platform enabling event creation, secure ticket booking, QR code-based entry validation, role-based dashboards, and payment integration.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'QR Code', 'Payments'],
    features: ['Event Creation', 'QR Validation', 'Role Dashboards', 'Secure Payments'],
    contributions: [
      'Fixed UI/UX issues and improved platform usability',
      'Tested application reliability and stability',
      'Debugged functional issues across the stack',
      'Prepared technical documentation',
    ],
    status: 'In Production',
    github: 'https://github.com/PremGhosh20',
    live: 'https://event-management-pi-nine.vercel.app/',
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Video Streaming Platform',
    description:
      'A feature-rich video streaming application with search, category filtering, and a modular component architecture for scalable development.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    features: ['Video Search', 'Category Filter', 'Responsive Design', 'Reusable Components'],
    status: 'Completed',
    github: 'https://github.com/PremGhosh20/YouTube-Clone.git',
    live: 'https://you-tube-clone-one-eosin.vercel.app/',
    gradient: 'from-red-600 to-orange-500',
  },
]

export const CERTIFICATIONS = [
  { title: 'Full Stack Web Development', issuer: 'Professional Certification', icon: 'code' },
  { title: 'Introduction to Generative AI', issuer: 'AI Certification', icon: 'ai' },
  { title: 'Claude 101', issuer: 'Anthropic', icon: 'claude' },
  { title: 'Claude Code 101', issuer: 'Anthropic', icon: 'claude' },
  { title: 'Fundamentals of Computers', issuer: 'Academic', icon: 'computer' },
]

export const ACHIEVEMENTS = [
  { title: 'Department Rank 1', description: 'Top performer in BSc IT department', icon: 'trophy' },
  { title: 'CGPI 9.53', description: 'Outstanding academic excellence', icon: 'star' },
  { title: 'Multiple Internships', description: 'Professional experience at 3 companies', icon: 'briefcase' },
  { title: 'Full Stack Apps', description: 'Built multiple production-ready applications', icon: 'rocket' },
  { title: 'Cloud & DevOps', description: 'Strong interest in cloud infrastructure', icon: 'cloud' },
]

export const EDUCATION = [
  {
    degree: 'Bachelor of Science (Information Technology)',
    institution: 'University of Mumbai',
    period: '2023 – 2026',
    highlight: 'CGPI 9.53',
    status: 'Completed',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    period: 'Completed',
    highlight: '77.83%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    period: 'Completed',
    highlight: '76.80%',
  },
]

export const FLOATING_TECH = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'Express', icon: 'SiExpress', color: '#FFFFFF' },
  { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
  { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
]

export const COMMAND_ITEMS = [
  {
    label: 'Home',
    description: 'Jump to the hero section',
    action: 'hero',
    category: 'Navigation',
    icon: 'home',
  },
  {
    label: 'About',
    description: 'Learn more about Prem',
    action: 'about',
    category: 'Navigation',
    icon: 'user',
  },
  {
    label: 'Skills',
    description: 'Browse tech stack & tools',
    action: 'skills',
    category: 'Navigation',
    icon: 'sparkles',
  },
  {
    label: 'Experience',
    description: 'View work history & roles',
    action: 'experience',
    category: 'Navigation',
    icon: 'briefcase',
  },
  {
    label: 'Projects',
    description: 'Explore featured builds',
    action: 'projects',
    category: 'Navigation',
    icon: 'folder',
  },
  {
    label: 'Contact',
    description: 'Get in touch',
    action: 'contact',
    category: 'Navigation',
    icon: 'mail',
  },
  {
    label: 'Download Resume',
    description: 'Open PDF resume in a new tab',
    action: 'resume',
    category: 'Actions',
    icon: 'download',
  },
  {
    label: 'Toggle Theme',
    description: 'Switch between dark and light mode',
    action: 'theme',
    category: 'Actions',
    icon: 'theme',
  },
  {
    label: 'Copy Email',
    description: 'Copy email address to clipboard',
    action: 'email',
    category: 'Actions',
    icon: 'copy',
  },
  {
    label: 'GitHub',
    description: 'Open GitHub profile',
    action: 'github',
    category: 'Social',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    description: 'Open LinkedIn profile',
    action: 'linkedin',
    category: 'Social',
    icon: 'linkedin',
  },
]
