import { personal } from './personal'

/**
 * Portfolio section: career materials + achievements + capstone PDFs.
 */
export const resourceCategories = [
  {
    id: 'core',
    title: 'Career & application materials',
    items: [
      {
        id: 'resume',
        title: 'Résumé',
        description: 'View my résumé in the browser—download from the PDF viewer when needed.',
        icon: 'file-text',
        action: 'view',
        href: '/documents/resume.pdf',
      },
      {
        id: 'profile',
        title: 'About Me',
        description: 'Background, projects, and what I bring to junior software roles.',
        icon: 'user',
        action: 'modal',
        modalContent: personal.extendedProfile,
      },
      {
        id: 'cover',
        title: 'Sample Cover Letter',
        description: 'A practical structure for junior developer and IT support applications.',
        icon: 'mail',
        action: 'modal',
        modalContent:
          'Opening — State the role and company clearly.\n\nFit — Highlight your Computer Programming & Analysis diploma, React.js/Node.js stack, and one concrete project (DriveTree capstone or MERN employee management system).\n\nProof — Share one specific example: team delivery, API integration, testing, or a technical problem you solved.\n\nClose — Link to this portfolio and GitHub and invite a brief conversation.\n\nExport to PDF from Google Docs or Word when you apply.',
      },
      {
        id: 'philosophy',
        title: 'Career Goals',
        description: 'Where I am headed as a developer and what I want to learn next.',
        icon: 'sparkles',
        action: 'modal',
        modalContent:
          'I aim to write clean, maintainable code and grow through mentorship and hands-on delivery on real teams. Near term: contribute as a junior software developer, QA analyst, or application support specialist while building depth in React, Node.js, and REST APIs. Long term: expand full-stack and cloud skills through production experience and continuous learning.',
      },
      {
        id: 'certs-awards',
        title: 'Certificates & recognition',
        description: 'Official certificates and academic recognition—view PDFs in the credentials section.',
        icon: 'award',
        action: 'anchor',
        href: '#achievements',
      },
    ],
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
