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
    titleBadges: ['Featured Project', 'Capstone Project', '2026'],
    title: 'DriveTree — Full-Stack Driving Instructor Booking Platform',
    teamNote: 'Built by a 4-member Agile team',
    description:
      'Production-style capstone connecting learners with verified driving instructors. Full-stack application with instructor search, profile management, student booking workflows, MongoDB persistence, and a REST API backend—delivered through Agile team collaboration.',
    screenshot: '/images/projects/drivetree-homepage.png',
    gallery: [
      {
        id: 'homepage',
        label: 'Homepage',
        src: '/images/projects/drivetree-homepage.png',
        alt: 'DriveTree homepage — instructor discovery landing page',
      },
    ],
    highlights: [
      'Verified instructor discovery',
      'Search by city, language, rating, and price',
      'Student booking workflow',
      'Instructor profile management',
      'MongoDB database integration',
      'REST API backend',
      'Team Agile development',
    ],
    stats: [
      { value: '4', label: 'Team Members' },
      { value: 'Full-Stack', label: 'Application' },
      { value: 'React + Node.js + MongoDB', label: 'Tech Stack' },
      { value: '2026', label: 'Capstone Project' },
    ],
    keyContributions: [
      'Built React frontend components',
      'Developed REST API integrations',
      'Participated in database design',
      'Collaborated using Git and Agile workflows',
      'Contributed to testing and project delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Driving and road theme — DriveTree capstone project',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Agile', 'Full-stack'],
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
    screenshot: null,
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
    screenshot: null,
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
    title: 'DevOps & CI/CD Infrastructure',
    description:
      'DevOps project demonstrating CI/CD workflows using Jenkins, Docker, GitHub Actions, SonarQube, Azure Virtual Machines, and Linux administration practices.',
    screenshot: null,
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
