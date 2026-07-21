export type SkillGroup = {
  title: string;
  items: string[];
  // Compact one-liner used by the terminal `skills` command
  terminalKey: string;
  terminalBlurb: string;
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Leadership",
    terminalKey: "leadership/",
    terminalBlurb: "team building • coaching • org design • strategy",
    items: [
      "Servant Leadership",
      "People-First Management",
      "Team Building",
      "Psychological Safety",
      "Coaching & Mentorship",
      "Org Design",
      "Change Management",
    ],
  },
  {
    title: "Practice",
    terminalKey: "sre/       ",
    terminalBlurb: "incident cmd • observability • slis/slos • chaos eng",
    items: [
      "Site Reliability Engineering",
      "Production Engineering",
      "DevOps",
      "Incident Management",
      "Blameless Post-Mortems",
      "On-Call Health",
      "SLO / SLI / Error Budgets",
    ],
  },
  {
    title: "Agile & Process",
    terminalKey: "agile/     ",
    terminalBlurb: "scrum • kanban • safe • coaching • transformation",
    items: [
      "Scrum (CSM, ACSM, CSP)",
      "SAFe",
      "Kanban",
      "Certified Agile Leadership",
      "Product Ownership (CSPO)",
      "Facilitation",
    ],
  },
  {
    title: "Architecture & Cloud",
    terminalKey: "cloud/     ",
    terminalBlurb: "aws • azure • gcp • cost optimization • migrations",
    items: [
      "Cloud Enterprise Architecture",
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Microservices",
      "Platform Engineering",
    ],
  },
  {
    title: "Engineering",
    terminalKey: "devops/    ",
    terminalBlurb: "ci/cd • terraform • kubernetes • docker • gitops",
    items: [
      "Software Engineering",
      "Firmware / Embedded",
      "Automation",
      "CI/CD",
      "Observability",
      "Testing & QA",
    ],
  },
  {
    title: "Domain",
    terminalKey: "arch/      ",
    terminalBlurb: "microservices • event-driven • api design • security",
    items: [
      "Payments",
      "Retail Scale",
      "Enterprise IT",
      "Consulting",
      "EdTech",
      "Industrial Automation",
    ],
  },
];
