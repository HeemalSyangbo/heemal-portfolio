/**
 * `cta` — primary action (live demo URL or #contact to discuss).
 * `github` — profile or specific repo; update repo URLs when repos are public.
 */
const GH = 'https://github.com/HeemalSyangbo'

export const projects = [
  {
    id: 'drivetree',
    number: '01',
    featured: true,
    badge: '⭐ FEATURED PROJECT',
    title: 'DriveTree — Driving Mentor Platform',
    teamNote: 'Built by a 4-member Agile team',
    description:
      'Full-stack platform connecting learners with verified driving instructors. Built using React, Node.js, Express.js, and MongoDB. Delivered as a 4-member capstone project featuring instructor discovery, booking workflows, profile management, and verification processes.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Driving and road theme — DriveTree capstone project',
    tech: ['React.js', 'Node.js', 'REST APIs', 'MongoDB', 'Team collaboration', 'Full-stack architecture'],
    links: {
      liveDemo: { href: 'https://drivetree.ca', label: '🌐 Live Demo' },
      github: 'https://github.com/HeemalSyangbo/DriveTree',
    },
    gradientTitle: false,
  },
  {
    id: 'employee-mern',
    number: '02',
    title: 'Employee Management System — MERN Stack',
    description:
      'Secure MERN application featuring JWT authentication, CRUD operations, protected routes, MongoDB Atlas integration, and deployment using Vercel and Render. API endpoints validated with Postman.',
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
      'Real-time weather application consuming external REST APIs with asynchronous data fetching, error handling, and responsive React-based user interfaces.',
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
      'DevOps project demonstrating CI/CD workflows using Jenkins, Docker, GitHub Actions, SonarQube, Azure Virtual Machines, and Linux administration practices.',
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
