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
      'Completed full-stack platform built with React, Node.js, and REST APIs to connect learners with driving mentors. Developed frontend components and backend services with database integration, collaborating with a team to design, implement, and test features iteratively from proposal through final delivery.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Driving and road theme — visual placeholder for DriveTree capstone',
    tech: ['React', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'Team collaboration'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: false,
  },
  {
    id: 'employee-mern',
    number: '02',
    title: 'Full-Stack Employee Management System',
    description:
      'MERN stack application for managing employee records: CRUD operations, JWT-based authentication, and file uploads via RESTful APIs. Deployed frontend on Vercel and backend on Render with environment-based configuration; tested endpoints with Postman and MongoDB Atlas.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Team collaboration — placeholder for employee management system UI',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Vercel', 'Render'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: true,
  },
  {
    id: 'weather',
    number: '03',
    title: 'Weather Application — Live API',
    description:
      'Full-stack weather application consuming live external APIs: backend logic to fetch, process, and serve real-time data to the frontend, with deployment and environment configuration.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Clouds and sky — placeholder for weather application',
    tech: ['JavaScript', 'React', 'REST API', 'Node.js'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: false,
  },
  {
    id: 'devops-azure',
    number: '04',
    title: 'DevOps Cloud Infrastructure & CI/CD',
    description:
      'Cloud-based DevOps environment on Azure Virtual Machines with Ubuntu Linux. Jenkins CI/CD integrated with GitHub; SonarQube with PostgreSQL for static analysis; Docker containers, Linux services, SSH, and Azure network security rules.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Server room aesthetic — placeholder for DevOps and cloud project',
    tech: ['Azure', 'Ubuntu', 'Jenkins', 'GitHub', 'Docker', 'SonarQube', 'PostgreSQL'],
    links: {
      cta: { href: '#contact', label: 'Discuss this project' },
      github: GH,
    },
    gradientTitle: true,
  },
]
