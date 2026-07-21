// Central profile / identity. Change values here and they propagate across
// the header, footer, home hero, terminal, and SEO metadata.

export const PROFILE = {
  name: "Jane Miceli",
  handle: "jane-miceli",
  role: "Manager of Cloud Infra, Ops and Reliability Engineering",
  shortRole: "Director of Production Engineering",
  tagline: "Engineering Leader",
  bio:
    "I'm an engineering leader who is always learning and solving problems — building resilient production systems and the empowered teams that run them. People-first leadership, blameless post-mortems, and a healthy respect for the error budget.",
  email: "jane+github@janemiceli.com",
  socials: {
    github: "https://github.com/janemiceli",
    linkedin: "https://www.linkedin.com/in/janemiceli",
  },
} as const;

export const RESUME_URL = `${import.meta.env.BASE_URL}Jane-Miceli-Resume.pdf`;
