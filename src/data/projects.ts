export type Item = { title: string; venue: string; year?: string; url?: string; blurb?: string };

export const TALKS: Item[] = [
  { title: "Battle Wounds from a Cloud SRE", venue: "DevOpsDays Seattle", year: "2019", url: "https://www.youtube.com/watch?v=xrtdonI2v5Ii" },
  { title: "Security Battle Wounds from a Cloud SRE", venue: "DefCon (Cloud Village)", year: "2019", url: "https://2019.cloud-village.org/#talks?janemiceli" },
  { title: "Blameless Post Mortems with Teeth (with Dave Harrison)", venue: "DevOpsDays Boise", year: "2019", url: "https://devopsdaysboise.com/events2019.html" },
  { title: "Battle Wounds from a Cloud SRE", venue: "DevOpsDays Boise", year: "2018", url: "https://devopsdaysboise.com/events2018.html" },
];

export const ARTICLES: Item[] = [
  { title: "Business Insider", venue: "Idaho Statesman", year: "2017", url: "https://issuu.com/idahostatesman/docs/0215_business_insider" },
];

export const PODCASTS: Item[] = [
  { title: "Blameless Post Mortems with Teeth (with Dave Harrison)", venue: "Achieving DevOps", year: "2015", url: "https://anchor.fm/dave-harrison5/episodes/Blameless-Postmortems-with-Jane-Miceli-e4b8r9" },
  { title: "Powerful Conversations", venue: "Voice of America", year: "2015", url: "https://www.voiceamerica.com/guest/26384/jane-miceli#guest-index" },
];

export const BOARDS: Item[] = [
  { title: "Board Member", venue: "Boise Code Camp", url: "https://boisecodecamp.org" },
  { title: "Board Member", venue: "DevOps Days Boise", url: "https://devopsdays.org" },
  { title: "Professional Advisory Committee", venue: "Stevens Henager College — Boise", url: "https://www.stevenshenager.edu" },
];
