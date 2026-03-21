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
        description: 'PDF — update public/documents/resume.pdf when your CV changes.',
        icon: 'file-text',
        action: 'download',
        href: '/documents/resume.pdf',
      },
      {
        id: 'profile',
        title: 'Professional profile',
        description: 'Full narrative for job forms, recruiters, or LinkedIn About.',
        icon: 'user',
        action: 'modal',
        modalContent: personal.extendedProfile,
      },
      {
        id: 'cover',
        title: 'Cover letter guide',
        description: 'Outline for internship and junior applications.',
        icon: 'mail',
        action: 'modal',
        modalContent:
          '1) Opening — Name the role and organization.\n\n2) Fit — Two or three sentences on your diploma, web stack (React, Node.js, REST), and one concrete project (e.g. capstone or MERN assignment).\n\n3) Proof — Brief example: teamwork, API design, or a lab you are proud of. Keep DevOps/cloud as “coursework exposure” unless you shipped it in production.\n\n4) Close — Link to this portfolio and GitHub; invite a conversation.\n\nExport to PDF from Docs or Word when you apply.',
      },
      {
        id: 'philosophy',
        title: 'Career focus',
        description: 'How you want to grow as a developer.',
        icon: 'sparkles',
        action: 'modal',
        modalContent:
          'I want to write readable, testable code and to learn from code review and mentorship. Short term: contribute to a real codebase as an intern or junior developer. Long term: deepen full-stack delivery and keep building honest depth in cloud and automation—without overstating experience I have not had in production.',
      },
      {
        id: 'certs-awards',
        title: 'Certificates & recognition',
        description: 'PDFs including supervised ML certificate and Dean’s letter.',
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
    subtitle: 'Certificates and official letters (PDF).',
    items: [
      {
        id: 'ml-cert',
        title: 'Supervised machine learning',
        subtitle: 'Regression & classification (course certificate)',
        description: 'Academic certificate — introductory ML coursework.',
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
    subtitle: 'Non-software roles — leadership and operations.',
    items: [
      {
        id: 'leadership-richelieu',
        title: 'Warehouse associate / team lead',
        subtitle: 'Richelieu Hardware Ltd — Toronto',
        description:
          'Operations, prioritization, training, and cross-team coordination — transferable to agile delivery and communication in software teams.',
        href: '#experience',
        icon: 'briefcase',
      },
      {
        id: 'supervisor-dubai',
        title: 'Team supervisor',
        subtitle: 'The Arbor School — Dubai, UAE',
        description:
          'Staff supervision, daily operations, and stakeholder communication — accountability and clarity relevant to collaborative development.',
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
