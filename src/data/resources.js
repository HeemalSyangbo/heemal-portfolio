import { personal } from './personal'

/**
 * Portfolio section: recruiter-first documents, then supplemental materials.
 */
export const featuredDocuments = [
  {
    id: 'resume',
    title: 'Résumé',
    description: 'Professional résumé—view online or download from the PDF viewer.',
    icon: 'file-text',
    action: 'view',
    href: '/documents/resume.pdf',
    featured: true,
  },
  {
    id: 'dean-letter',
    title: "Dean's Letter",
    description: 'Official academic recognition from George Brown College.',
    icon: 'award',
    action: 'view',
    href: '/documents/dean-letter.pdf',
    featured: true,
  },
  {
    id: 'ml-cert',
    title: 'Supervised Machine Learning Certificate',
    description: 'Course certificate in regression and classification.',
    icon: 'brain',
    action: 'view',
    href: '/documents/supervised-ml-regression-classification.pdf',
    featured: true,
  },
  {
    id: 'drivetree-docs',
    title: 'DriveTree Documentation',
    description: 'Capstone artifacts—proposal, design, requirements, and reports.',
    icon: 'folder',
    action: 'capstone',
    featured: true,
  },
]

export const supplementalMaterials = [
  {
    id: 'profile',
    title: 'About Me',
    description: 'Extended background for applications and LinkedIn.',
    icon: 'user',
    action: 'modal',
    modalContent: personal.extendedProfile,
    featured: false,
  },
  {
    id: 'cover',
    title: 'Sample Cover Letter',
    description: 'Full sample letter—customize the opening line for each application.',
    icon: 'mail',
    action: 'modal',
    modalContent:
      'Dear Hiring Manager,\n\nI am writing to express my interest in a Junior Software Developer role with your team. I graduated in April 2026 from George Brown College with an Advanced Diploma in Computer Programming & Analysis, and I have focused my training on building practical web applications with JavaScript, React.js, Node.js, Express.js, MongoDB, and REST APIs.\n\nMy most significant project to date is DriveTree, a full-stack driving mentor platform developed as a capstone with a four-member Agile team. We used React.js and Node.js with Express and MongoDB to support instructor discovery, booking workflows, profile management, and verification processes. Working in that environment taught me how to break down requirements, communicate clearly during development, and deliver features iteratively while keeping the codebase organized and testable.\n\nAlongside my technical work, I bring leadership experience from roles in Canada and the United Arab Emirates. As a warehouse team lead and team supervisor, I coordinated daily operations, trained new staff, and worked across departments to keep workflows running smoothly. That background has helped me stay dependable in group projects, ask clear questions during code reviews, and approach problems with a calm, structured mindset.\n\nI have also worked with Docker, Jenkins, Microsoft Azure, and GitHub through hands-on labs and project work. I am looking for an opportunity to grow as a Junior Software Developer, Full-Stack Developer, QA Analyst, or in Application Support or IT Support, where I can contribute while continuing to build depth in production-style development.\n\nThank you for considering my application. I would appreciate the chance to discuss how my education, project experience, and work background align with your needs. My portfolio and GitHub repositories are available for your review, and I am happy to walk through my work in more detail at your convenience.\n\nSincerely,\nHeemal Syangbo\nToronto, Ontario',
    featured: false,
  },
  {
    id: 'philosophy',
    title: 'Career Goals',
    description: 'Professional direction, technical focus, and roles I am pursuing.',
    icon: 'sparkles',
    action: 'modal',
    modalContent:
      'My objective is to start my software career in a junior-level role where I can apply strong academic and project experience while learning from experienced developers on a real team. I graduated in April 2026 with an Advanced Diploma in Computer Programming & Analysis from George Brown College, and I am pursuing opportunities as a Junior Software Developer, Full-Stack Developer, QA Analyst, or in Application Support and IT Support.\n\nMy technical focus is full-stack web development with React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, and REST APIs. DriveTree, my completed capstone, reinforced how I work in Agile delivery—integrating frontend and backend systems, collaborating across a four-person team, and shipping features with clear requirements and deadlines. I have also built practical familiarity with Docker, Jenkins, Microsoft Azure, and GitHub through labs and project work.\n\nI intend to keep advancing through hands-on contribution, feedback, and structured learning in a professional environment. Leadership experience in Canada and the UAE strengthened my communication, reliability, and ability to coordinate work across teams—skills I apply in technical collaboration today. I am seeking a workplace where I can add value early while developing into a dependable full-stack developer over time.',
    featured: false,
  },
]

export const achievementSections = [
  {
    id: 'academic',
    title: 'Academic credentials',
    subtitle: 'Certificates and official letters—view online.',
    items: [
      {
        id: 'ml-cert',
        title: 'Supervised machine learning',
        subtitle: 'Regression & classification (course certificate)',
        description: 'Certificate in supervised machine learning—regression and classification fundamentals.',
        href: '/documents/supervised-ml-regression-classification.pdf',
        icon: 'brain',
      },
      {
        id: 'dean-letter',
        title: 'Dean’s letter',
        subtitle: 'George Brown College',
        description: 'Official academic recognition (PDF).',
        href: '/documents/dean-letter.pdf',
        icon: 'award',
      },
    ],
  },
  {
    id: 'prior-roles',
    title: 'Prior professional experience',
    subtitle: 'Leadership and operations experience before software development.',
    items: [
      {
        id: 'leadership-richelieu',
        title: 'Warehouse associate / team lead',
        subtitle: 'Richelieu Hardware Ltd — Toronto',
        description:
          'Team leadership, process coordination, training, and cross-department communication—skills applied in collaborative software delivery.',
        href: '#experience',
        icon: 'briefcase',
      },
      {
        id: 'supervisor-dubai',
        title: 'Team supervisor',
        subtitle: 'Education & operations — Dubai, UAE',
        description:
          'Staff supervision, scheduling, operations management, and problem-solving across departments—transferable to technical team environments.',
        href: '#experience',
        icon: 'trophy',
      },
    ],
  },
]

/** DriveTree (T06) — capstone PDFs in public/documents/capstone/ */
export const capstoneDocs = [
  {
    id: 'proposal',
    title: 'Project proposal',
    description: 'Scope and initial plan — F25 T06',
    href: '/documents/capstone/f25-t06-project-proposal.pdf',
  },
  {
    id: 'vision',
    title: 'Project vision',
    description: 'Goals and problem framing — F25 T06',
    href: '/documents/capstone/f25-t06-project-vision.pdf',
  },
  {
    id: 'high-level',
    title: 'High-level design',
    description: 'Architecture overview — F25 T06',
    href: '/documents/capstone/f25-t06-high-level.pdf',
  },
  {
    id: 'personas',
    title: 'User personas',
    description: 'Users and needs — F25 T06',
    href: '/documents/capstone/f25-t06-user-personas.pdf',
  },
  {
    id: 'product-backlog',
    title: 'Product backlog',
    description: 'Prioritized work — F25 T06',
    href: '/documents/capstone/f25-t06-product-backlog.pdf',
  },
  {
    id: 'sprint-backlog',
    title: 'Sprint backlog',
    description: 'Sprint planning — F25 T06',
    href: '/documents/capstone/f25-t06-sprint-backlog.pdf',
  },
  {
    id: 'team-charter',
    title: 'Team charter',
    description: 'Roles and norms — F25 T06',
    href: '/documents/capstone/f25-t06-team-charter.pdf',
  },
  {
    id: 'project-plan-f25',
    title: 'Project plan (F25)',
    description: 'Timeline and milestones — F25 T06',
    href: '/documents/capstone/f25-t06-project-plan.pdf',
  },
  {
    id: 'req-design',
    title: 'Requirements analysis & design',
    description: 'Requirements and design package — F25 T06',
    href: '/documents/capstone/f25-t06-requirements-analysis-and-design.pdf',
  },
  {
    id: 'tech-req',
    title: 'Technical requirements',
    description: 'Tech constraints — F25 T06',
    href: '/documents/capstone/f25-t06-tech-requirements.pdf',
  },
  {
    id: 'mockups',
    title: 'Mockups',
    description: 'UI mockups — F25 T06',
    href: '/documents/capstone/f25-t06-mockups.pdf',
  },
  {
    id: 'project-plan-w26',
    title: 'Project plan v2.0 (W26)',
    description: 'Updated plan — W26 T06',
    href: '/documents/capstone/w26-t06-project-plan-v2.pdf',
  },
  {
    id: 'report-2',
    title: 'Project report 2',
    description: 'Progress report — W26 T06',
    href: '/documents/capstone/w26-t06-project-report-2.pdf',
  },
  {
    id: 'report-1',
    title: 'Project report 1',
    description: 'Progress report — W26 T06',
    href: '/documents/capstone/w26-t06-project-report-1.pdf',
  },
]
