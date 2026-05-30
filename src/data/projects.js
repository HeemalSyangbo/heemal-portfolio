/**
 * `cta` — primary action (live demo URL or #contact to discuss).
 * `github` — profile or specific repo; update repo URLs when repos are public.
 */
const GH = 'https://github.com/HeemalSyangbo'

export const projects = [
  {
    id: 'drivetree',
    number: '01',
    title: 'DriveTree — Capstone Project',
    description:
      'Completed team capstone delivering a full-stack platform that connects learners with driving mentors. Built responsive React.js interfaces, Node.js REST APIs, and MongoDB integration with iterative Agile delivery—from proposal through final release.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Driving and road theme — DriveTree capstone project',
    tech: ['React.js', 'Node.js', 'REST APIs', 'MongoDB', 'Team collaboration', 'Full-stack architecture'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: false,
  },
  {
    id: 'employee-mern',
    number: '02',
    title: 'Employee Management System — MERN Stack',
    description:
      'Full-stack MERN application with secure CRUD operations for employee records, JWT authentication, protected routes, and file uploads via REST APIs. Deployed the frontend on Vercel and backend on Render with environment-based configuration; integrated MongoDB Atlas and validated endpoints with Postman.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Team collaboration — employee management system',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'MERN', 'Vercel', 'Render'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: true,
  },
  {
    id: 'weather',
    number: '03',
    title: 'Weather Application — API Integration',
    description:
      'Weather application consuming external REST APIs and displaying real-time weather data. Implemented API request handling, asynchronous data fetching, and frontend rendering with debugging and error handling for reliable responses.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Clouds and sky — weather application',
    tech: ['JavaScript', 'React.js', 'REST APIs', 'API Integration'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: false,
  },
  {
    id: 'devops-azure',
    number: '04',
    title: 'DevOps & CI/CD — Cloud Infrastructure',
    description:
      'Coursework-based DevOps and CI/CD project on Azure Virtual Machines with Ubuntu Linux. Set up Jenkins pipelines with GitHub workflows, SonarQube static analysis, Docker containers, Linux services, and Azure network security—demonstrating foundational automation and cloud skills.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Server infrastructure — DevOps and CI/CD project',
    tech: ['Azure VM', 'Ubuntu', 'Docker', 'Jenkins', 'SonarQube', 'GitHub Actions'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: true,
  },
]
