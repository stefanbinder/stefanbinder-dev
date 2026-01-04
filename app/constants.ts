import type { Certificate, Experience, SocialLink, Education } from './types';

export const USER_NAME = "Stefan Binder";
export const USER_TITLE = "Senior Full Stack Engineer";
export const USER_BIO = "Highly versatile Senior Full Stack Engineer focused on defining future-proof systems, with a recent high focus on Frontend development. I drive high-performing teams by balancing deep technical ownership with guidance on best practices and modular code structure. A curious all-rounder committed to continuous learning and platform excellence.";
export const USER_PHONE = "+43 676 / 97 97 205";
export const USER_EMAIL = "me@stefanbinder.dev";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'email', url: `mailto:${USER_EMAIL}` },
  // Placeholders as they were not explicitly in the OCR text but requested in design
  { platform: 'github', url: 'https://github.com/stefanbinder' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/stefan-binder-a37ba368' },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '3',
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'January 2026',
    // Switched to a cleaner icon-only SVG that centers better in a circle than the full text logo
    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    link: 'https://cloud.google.com/learn/certification/cloud-engineer/'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Chapter Lead & Senior Frontend Engineer',
    company: '@XXXLDigital',
    period: '12/2021 – Today',
    description: [
      'Defined the strategic direction for the frontend architecture, including implementing Server-Side Rendering (SSR) and applying Domain-Driven Design (DDD) and NX mono repository principles.',
      'Drove platform reliability and efficiency by managing DevOps tasks, including Kubernetes, ArgoCD, Argo Workflows, Istio, Cloudflare configuration, and leveraging Dynatrace for observability.',
      'Founded and Initiated the Kosmos Design System team, responsible for defining requirements and the technical direction for the framework-agnostic component library.',
      'Mentored developers and fostered continuous improvement by conducting regular 1:1s and identifying growth opportunities within the team.'
    ]
  },
  {
    id: 'e2',
    role: 'Senior Frontend Engineer',
    company: '@XXXLDigital',
    period: '10/2019 – 11/2021',
    description: [
      'Led key e-commerce feature implementations as the Technical Project Lead for the Timendo consultancy reservation tool, the Transporter reservation tool, and the new Order Status implementation.',
      'Partnered with Product Owners and stakeholders to engineer technical requirements and collaboratively plan project roadmaps.',
      'Enhanced the e-commerce setup through customization and development across the Frontend, BFF, and Hydra Design System.'
    ]
  },
  {
    id: 'e3',
    role: 'Owner & Full Stack Engineer',
    company: '@SpirIT e.U.',
    period: '07/2015 – 09/2019',
    description: [
      'Managed all facets of business operations, including customer acquisition, tax & accounting, and financial management.',
      'Delivered full-lifecycle project execution, transitioning projects from requirement analysis over agile programming to maintenance.',
      'Architected and Developed the Wooter e-commerce platform (React Frontend) for ordering sport apparel and managing sports leagues.',
      'Launched and Maintained the project myStudentjob, a student job platform implemented with AngularJS and Laravel.'
    ]
  },
  {
    id: 'e4',
    role: 'Web Developer',
    company: '@Gentics Software GmbH',
    period: '09/2012 – 05/2015',
    description: [
      'Directed Intranet development projects, serving as the Project Manager for Erste Bank\'s implementation.',
      'Customized and Enhanced Gentics products, including ECMS Content.Node, Java Web Portal.Node, and the JS wysiwyg Editor Aloha.',
      'Developed a Content-Importer into ECMS via a NodeJS application and a Social Media Wall PHP application.'
    ]
  },
  {
    id: 'e5',
    role: 'HELPDESK REPRESENTATIVE',
    company: 'CSC AUSTRIA GMBH (WWW.CSC.COM)',
    period: '08/2011 - 11/2011',
    description: [
      'Abteilung: MSS Managed Services Sector',
      'Helpdesk Representative, 1st & 2nd Level Support',
      'Network & Server Administration',
    ]
  },
  {
    id: 'e6',
    role: 'SACHBEARBEITER',
    company: 'RAIFFEISEN DATEN SERVICE CENTER (WWW.RSC.AT)',
    period: '05/2008 - 07/2011',
    description: [
      'Department: Cash Management Support & Infodienste Maintainance of Cash-Management accounts, cashpooling (arrangements, change of condition, deletions), diverse statisticreports and compensation of charges. Customer correspondence for Western Union',
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'ed1',
    degree: 'Bachelor Of Science in Engineering (BSc)',
    institution: 'FH Technikum Wien',
    period: '09/2010 – 06/2013',
    details: 'Business Informatics (extra occupational)'
  },
  {
    id: 'ed2',
    degree: 'Höhere Lehranstalt für Berufstätige',
    institution: 'Spengergasse',
    period: '09/2008 – 06/2010',
    details: 'Software Engineering (extra occupational)'
  },
  {
    id: 'ed3',
    degree: 'Fachschule für EDV',
    institution: 'Spengergasse',
    period: '09/2003 – 07/2007',
    details: 'Network Engineering'
  }
];

export const SKILLS = {
  "Software Architecture": ["Microservices", "Domain-Driven Design", "NX Mono Repo"],
  "Frontend Development": ["ReactJS", "React Native", "NextJS", "Remix", "TypeScript", "ES6", "SCSS", "Tailwind"],
  "Backend Development": ["NodeJS", "GOLang", "Python Scripting"],
  "Platform & DevOps": ["Kubernetes", "Istio", "Cloudflare", "Dynatrace", "ArgoCD", "GitHub Actions"],
  "Backend & Databases": ["Postgres", "MongoDB", "Redis"],
  "CMS & Tooling": ["Wordpress", "Typo3", "Joomla", "Shopify", "Vite", "Webpack"]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Stefan Binder's portfolio website.
You are helpful, professional, and concise.
You have access to the following information about Stefan:

Name: ${USER_NAME}
Title: ${USER_TITLE}
Bio: ${USER_BIO}
Contact: ${USER_PHONE}, ${USER_EMAIL}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Skills:
${Object.entries(SKILLS).map(([cat, items]) => `${cat}: ${items.join(', ')}`).join('\n')}

Answer visitor questions about Stefan's background, skills, and experience based on this data.
If asked about contact info, provide the email or phone number.
Keep answers under 3-4 sentences unless requested otherwise.
`;
