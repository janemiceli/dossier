export type Role = {
  title: string;
  company: string;
  period: string;
  url?: string;
  tags: string[];
  summary?: string;
  current?: boolean;
  // Compact fields used by the terminal `experience` command
  shortPeriod: string;
  shortCompany: string;
  shortTitle: string;
};

export const ROLES: Role[] = [
  {
    title: "Manager of Cloud Infra, Ops and Reliability Engineering",
    company: "Global Payments",
    period: "Feb 2024 – Present",
    url: "https://www.globalpayments.com",
    current: true,
    tags: ["Leadership", "Cloud Infrastructure", "Operations", "Reliability Engineering"],
    summary:
      "Leading cloud infrastructure, operations, and reliability engineering — building resilient platforms and the empowered teams that run them.",
    shortPeriod: "2024-pres",
    shortCompany: "Global Payments",
    shortTitle: "Manager, Cloud Infra, Ops & Reliability Eng",
  },
  {
    title: "Senior Manager, Site Reliability Engineering",
    company: "Kohl's",
    period: "Jan 2021 – Jul 2023",
    url: "https://www.kohls.com",
    tags: ["SRE", "Retail Scale", "People Leadership"],
    summary:
      "Grew and led SRE at retail scale — reliability, on-call health, and platform practice.",
    shortPeriod: "2021-2023",
    shortCompany: "Kohl's",
    shortTitle: "Senior Manager, Site Reliability Engineering",
  },
  {
    title: "Principal Engineer & Team Lead, DevOps Now",
    company: "IBM (formerly Taos Mountain Inc)",
    period: "Dec 2019 – Jan 2021",
    url: "https://www.ibm.com",
    tags: ["DevOps", "Consulting", "Platform"],
    shortPeriod: "2019-2021",
    shortCompany: "IBM (Taos)",
    shortTitle: "Principal Engineer & Team Lead, DevOps Now",
  },
  {
    title: "Cloud Enterprise Architect",
    company: "Micron",
    period: "Feb 2018 – Dec 2019",
    url: "https://www.micron.com",
    tags: ["Cloud Architecture", "Enterprise"],
    shortPeriod: "2018-2019",
    shortCompany: "Micron",
    shortTitle: "Cloud Enterprise Architect",
  },
  {
    title: "Lead, Senior Site Reliability Engineer",
    company: "HP Inc (formerly Hewlett-Packard)",
    period: "Nov 2014 – Feb 2018",
    url: "https://www.hp.com",
    tags: ["SRE", "Reliability", "Automation"],
    shortPeriod: "2014-2018",
    shortCompany: "HP Inc",
    shortTitle: "Lead, Senior Site Reliability Engineer",
  },
  {
    title: "Software Development Engineer",
    company: "Xylem (formerly Sensus)",
    period: "Sep 2013 – Nov 2014",
    url: "https://www.xylem.com/en-us/",
    tags: ["Software Engineering"],
    shortPeriod: "2013-2014",
    shortCompany: "Xylem (Sensus)",
    shortTitle: "Software Development Engineer",
  },
  {
    title: "Software Engineer",
    company: "EdPower (formerly Silverback Learning Solutions)",
    period: "Jan 2012 – Sep 2013",
    url: "https://www.myedpower.com",
    tags: ["Software Engineering", "EdTech"],
    shortPeriod: "2012-2013",
    shortCompany: "EdPower (Silverback)",
    shortTitle: "Software Engineer",
  },
  {
    title: "Software Engineer II/III",
    company: "Adecco (assigned to Hewlett-Packard)",
    period: "Mar 2010 – Dec 2011",
    url: "https://www.hp.com",
    tags: ["Software Engineering"],
    shortPeriod: "2010-2011",
    shortCompany: "Adecco @ HP",
    shortTitle: "Software Engineer II/III",
  },
  {
    title: "Quality Assurance Engineer",
    company: "Bodybuilding.com",
    period: "Oct 2008 – Mar 2010",
    url: "https://www.bodybuilding.com",
    tags: ["QA", "Web Scale"],
    shortPeriod: "2008-2010",
    shortCompany: "Bodybuilding.com",
    shortTitle: "Quality Assurance Engineer",
  },
  {
    title: "Firmware Design Engineer",
    company: "Hewlett-Packard",
    period: "Jun 2007 – Oct 2008",
    url: "https://www.hp.com",
    tags: ["Firmware", "Embedded"],
    shortPeriod: "2007-2008",
    shortCompany: "Hewlett-Packard",
    shortTitle: "Firmware Design Engineer",
  },
  {
    title: "Software Test Engineer",
    company: "Rockwell Automation (formerly Rockwell Software)",
    period: "Mar 2002 – Jun 2007",
    url: "https://www.rockwellautomation.com",
    tags: ["Automation", "Testing"],
    shortPeriod: "2002-2007",
    shortCompany: "Rockwell Automation",
    shortTitle: "Software Test Engineer",
  },
];
