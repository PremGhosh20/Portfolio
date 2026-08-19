export const SITE_CONFIG = {
  name: 'Prem Shrikant Ghosh',
  shortName: 'Prem Ghosh',
  title: 'Software Engineer & Full Stack Developer',
  tagline: 'Building reliable full-stack systems — growing toward AI inference and high-performance computing.',
  email: 'premghoshs2005@gmail.com',
  github: 'https://github.com/PremGhosh20',
  linkedin: 'https://www.linkedin.com/in/prem-ghosh20/',
  githubUsername: 'PremGhosh20',
  resumePath: '/Portfolio/Prem_Resume.pdf',
  siteUrl: 'https://premghosh20.github.io/Portfolio/',
  location: 'Virar, Maharashtra, India',
  /** Digits only with country code — used for demo WhatsApp messages, not shown as a contact card */
  whatsapp: '918329796758',
}

/** Build WhatsApp HTTPS link (works better on mobile than wa.me → whatsapp://) */
export function getProjectWhatsAppLink(project) {
  const number = String(SITE_CONFIG.whatsapp || '').replace(/\D/g, '')
  const message = [
    `Hi Prem, I found your portfolio and I'd like to test your project "${project.title}"`,
    project.subtitle ? ` (${project.subtitle}).` : '.',
    ' Could you please share the live demo / access details?',
  ].join('')
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`
}

export function getWhatsAppChatLink() {
  const number = String(SITE_CONFIG.whatsapp || '').replace(/\D/g, '')
  const message = encodeURIComponent('Hi Prem, I visited your portfolio and would like to connect.')
  return `https://api.whatsapp.com/send?phone=${number}&text=${message}`
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
  'Software Engineer',
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'AI Enthusiast',
]

export const HERO_SUMMARY =
  'Computer Science and Information Technology graduate with hands-on software engineering experience and a strong foundation in C++, data structures, debugging, full-stack development, REST APIs, databases, and application optimization. Experienced in identifying functional and performance issues, developing backend services, and building end-to-end software systems. Currently expanding knowledge in Generative AI, LLM inference, model optimization, PyTorch, CUDA, GPU computing, and AI inference runtimes.'

export const ABOUT_CONTENT = {
  intro:
    'I am a B.Sc. Information Technology graduate from the University of Mumbai (CGPI 9.53) with software engineering and full-stack development experience. I work across debugging, testing, deployment, REST APIs, databases, and end-to-end application development.',
  journey:
    'My academic foundation in computer science and information technology is paired with internships in software engineering, full-stack development, and web development. I have worked on identifying functional and performance issues, developing backend services, and shipping application improvements in production environments.',
  goals:
    'I am growing into a strong software engineer, with a primary focus on software engineering and full-stack development. In parallel, I am actively learning Generative AI, LLM inference, C++ systems programming, GPU computing, and model optimization — areas I am developing toward, not claiming as professional expertise.',
  currentPosition: 'Web Trainee & Digital Marketing Intern at BrandBase Capsule Pvt. Ltd.',
}

export const ABOUT_MILESTONES = [
  { year: '2023', title: 'Started B.Sc. IT', desc: 'University of Mumbai' },
  { year: '—', title: 'Full Stack Developer Intern', desc: 'ElevanceSkills' },
  { year: '2026', title: 'Software Engineer Intern', desc: 'Gohil Tech Empire — Way To Event' },
  { year: 'Now', title: 'Web Trainee & Digital Marketing Intern', desc: 'BrandBase Capsule Pvt. Ltd.' },
]

export const SKILLS = {
  'Programming Languages': [
    { name: 'C++' },
    { name: 'C' },
    { name: 'JavaScript' },
  ],
  'Core Computer Science': [
    { name: 'Data Structures' },
    { name: 'Algorithms' },
    { name: 'Object-Oriented Programming' },
    { name: 'Problem Solving' },
    { name: 'Debugging' },
  ],
  'AI / ML': [
    { name: 'Generative AI Fundamentals' },
    { name: 'Machine Learning Fundamentals' },
    { name: 'LLM Concepts' },
    { name: 'AI Inference Concepts' },
  ],
  'Currently Exploring': [
    { name: 'PyTorch', exploring: true },
    { name: 'llama.cpp', exploring: true },
    { name: 'LLM Quantization', exploring: true },
    { name: 'Model Inference Optimization', exploring: true },
    { name: 'CUDA', exploring: true },
    { name: 'GPU Computing', exploring: true },
  ],
  Frontend: [
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'HTML5' },
    { name: 'CSS3' },
  ],
  Backend: [
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'REST APIs' },
  ],
  Databases: [
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'Firebase' },
  ],
  'Development Tools': [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Postman' },
    { name: 'VS Code' },
    { name: 'Cursor AI' },
    { name: 'Claude AI' },
    { name: 'ChatGPT' },
  ],
  'Software Engineering': [
    { name: 'REST APIs' },
    { name: 'JWT Authentication' },
    { name: 'CRUD' },
    { name: 'Testing' },
    { name: 'Debugging' },
    { name: 'Performance Analysis' },
    { name: 'Technical Documentation' },
  ],
}

export const SOFT_SKILLS = [
  'Analytical Problem Solving',
  'Software Debugging',
  'Technical Documentation',
  'Performance-Oriented Thinking',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Continuous Learning',
]

export const TECHNICAL_INTERESTS = [
  'Large Language Models and Generative AI',
  'AI Model Inference and Deployment',
  'C++ Systems Programming',
  'GPU Computing and CUDA',
  'Model Quantization and Optimization',
  'AI Inference Runtimes',
  'Memory and Performance Optimization',
  'High-Performance Computing',
  'PyTorch and llama.cpp',
  'Edge AI and Local Model Deployment',
]

export const EXPERIENCE = [
  {
    company: 'BrandBase Capsule Pvt. Ltd.',
    role: 'Web Trainee & Digital Marketing Intern',
    period: 'July 2026 – Present',
    current: true,
    responsibilities: [
      'Maintain and improve production web applications and company digital infrastructure.',
      'Identify and resolve website functionality, deployment, responsiveness, and performance issues.',
      'Assist with application deployment, website optimization, SEO, and production updates.',
      'Collaborate on client software projects and support application bring-up and deployment activities.',
      'Analyze application behavior across devices and environments and implement improvements.',
      'Prepare and manage technical and digital content for company platforms.',
    ],
  },
  {
    company: 'Gohil Tech Empire Pvt. Ltd.',
    role: 'Software Engineer Intern',
    period: 'May 2026 – June 2026',
    project: 'Way To Event – Event Ticketing & Management Platform',
    responsibilities: [
      'Debugged functional and UI/UX issues in the Way To Event software platform.',
      'Performed application testing and systematic debugging to improve software stability.',
      'Investigated implementation issues and contributed fixes across application components.',
      'Worked on software validation and documented implementation findings.',
      'Authored technical content covering visionOS and technologies introduced at Apple WWDC.',
      'Prepared technical documentation and implementation reports to support engineering activities.',
    ],
  },
  {
    company: 'ElevanceSkills',
    role: 'Full Stack Developer Intern',
    responsibilities: [
      'Developed responsive software applications using React.js, JavaScript, HTML5, and CSS3.',
      'Designed and implemented backend APIs using Node.js and Express.js.',
      'Developed authentication systems and RESTful application services.',
      'Integrated databases and implemented CRUD-based application functionality.',
      'Debugged frontend/backend integration issues and improved application reliability.',
      'Used Git and GitHub for version control, source management, and development collaboration.',
    ],
  },
]

export const PROJECTS = [
  {
    id: 'fastcab',
    title: 'FastCab',
    subtitle: 'Smart Web-Based Cab Booking System',
    description:
      'An end-to-end cab booking system supporting user and driver workflows with authentication, authorization, ride booking, role-based functionality, RESTful backend APIs, and MySQL-backed data management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'User & Driver Workflows',
      'Authentication',
      'Authorization',
      'Ride Booking',
      'Role-Based Functionality',
      'REST APIs',
      'MySQL Database',
      'CRUD Operations',
    ],
    status: 'Completed',
    github: 'https://github.com/PremGhosh20/Cab-Booking-System.git',
    live: '',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'edupulse',
    title: 'EduPulse',
    subtitle: 'Student Management System – Multi-Institute SaaS',
    description:
      'Developed a multi-institute software platform with secure institute registration and administration, student management, analytics, activity logging, image handling, role-based access control, and JWT authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM'],
    features: [
      'Institute Registration',
      'Student CRUD',
      'Search & Filtering',
      'Image Handling',
      'Analytics',
      'Activity Logging',
      'Role-Based Access Control',
      'JWT Authentication',
      'REST APIs',
      'Prisma ORM',
    ],
    status: 'Completed',
    github: 'https://github.com/PremGhosh20/Student-Management',
    live: 'https://student-management-eta-dun.vercel.app',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Video Streaming Platform',
    description:
      'Developed a responsive video-streaming web application inspired by YouTube with reusable React components, video searching, category-based filtering, backend API integration, and MongoDB data management.',
    tech: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
    features: [
      'Video Search',
      'Category Filtering',
      'Reusable Components',
      'Responsive Design',
      'Backend API Integration',
      'MongoDB',
    ],
    status: 'Completed',
    github: 'https://github.com/PremGhosh20/YouTube-Clone.git',
    live: 'https://you-tube-clone-one-eosin.vercel.app/',
    gradient: 'from-red-600 to-orange-500',
  },
  {
    id: 'way-to-event',
    title: 'Way To Event',
    subtitle: 'Event Ticketing & Management Platform',
    description:
      'Event Ticketing & Management Platform featuring event creation, online ticket booking, QR code-based entry validation, secure payments, and role-based dashboards.',
    note: 'Contributed during my Software Engineer internship at Gohil Tech Empire Pvt. Ltd. — I did not independently build the entire platform.',
    tech: ['Next.js', 'Supabase', 'TypeScript'],
    contributions: [
      'Fixed functional and UI/UX issues.',
      'Performed application testing and validation.',
      'Debugged implementation issues.',
      'Contributed to software reliability and stability.',
      'Prepared technical documentation.',
    ],
    status: 'Internship Contribution',
    github: 'https://github.com/PremGhosh20',
    live: 'https://event-management-pi-nine.vercel.app/',
    gradient: 'from-violet-600 to-purple-500',
  },
]

export const CERTIFICATIONS = [
  { title: 'Full Stack Web Development', issuer: 'ElevanceSkills', icon: 'code' },
  { title: 'Introduction to Generative AI', icon: 'ai' },
  { title: 'Claude 101', issuer: 'Anthropic', icon: 'claude' },
  { title: 'Claude Code 101', issuer: 'Anthropic', icon: 'claude' },
  { title: 'Fundamentals of Computers', icon: 'computer' },
]

export const ACHIEVEMENTS = [
  {
    title: 'Department Rank 1',
    description: 'Ranked 1st in the Information Technology Department for academic excellence.',
    icon: 'trophy',
  },
  {
    title: 'Strong Academic Performance',
    description: 'Achieved a CGPI of 9.53 in B.Sc. Information Technology.',
    icon: 'star',
    metric: { value: 9.53, prefix: 'CGPI ', decimals: 2 },
  },
  {
    title: 'Multiple Internships',
    description: 'Completed internships spanning Software Engineering, Full Stack Development, and Web Development.',
    icon: 'briefcase',
  },
  {
    title: 'End-to-End Applications',
    description: 'Developed multiple end-to-end software applications using modern frontend, backend, and database technologies.',
    icon: 'rocket',
  },
  {
    title: 'Software Engineering Experience',
    description: 'Gained practical experience in debugging, testing, deployment, API development, and technical documentation.',
    icon: 'code',
  },
  {
    title: 'Continuous Technical Growth',
    description: 'Continuously expanding technical knowledge toward AI/ML, Generative AI, C++ systems programming, and high-performance model inference.',
    icon: 'growth',
  },
]

export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Mumbai',
    period: '2023 – 2026',
    highlight: 'CGPI 9.53',
    status: 'Completed',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    period: '',
    highlight: '77.83%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    period: '',
    highlight: '76.80%',
  },
]

export function getPortfolioStats() {
  return [
    { label: 'Projects', value: PROJECTS.length, suffix: '+' },
    { label: 'Internships', value: EXPERIENCE.length, suffix: '' },
    { label: 'CGPI', value: 9.53, suffix: '', decimals: 2 },
    { label: 'Certificates', value: CERTIFICATIONS.length, suffix: '' },
    { label: 'Years Learning', value: 3, suffix: '+' },
  ]
}

export const STATS = getPortfolioStats()

export const FLOATING_TECH = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
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
    label: 'Technical Interests',
    description: 'Areas of technical interest',
    action: 'interests',
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
    label: 'Education',
    description: 'Academic background',
    action: 'education',
    category: 'Navigation',
    icon: 'user',
  },
  {
    label: 'Achievements',
    description: 'Highlights and milestones',
    action: 'achievements',
    category: 'Navigation',
    icon: 'sparkles',
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
