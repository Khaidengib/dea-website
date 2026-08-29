// ---------------------------------------------------------------------------
// DEA content layer.
//
// Every page pulls its copy, stats, people, events, and posts from this file.
// This is intentionally the ONE place non-developers would need Sanity Studio
// to reach once the CMS is connected (see README.md, "Connecting Sanity").
// Until then, edit the objects below directly, commit, and Vercel redeploys
// automatically.
// ---------------------------------------------------------------------------

export const site = {
  name: "Dallas Entrepreneurial Alliance",
  shortName: "DEA",
  domain: "dallasea.com",
  description:
    "A student-led network for ambitious Dallas-area students exploring entrepreneurship, economics, leadership, innovation, and financial literacy.",
  social: {
    instagram: "https://instagram.com/dallasea",
    linkedin: "https://linkedin.com/company/dallasea",
  },
  email: "hello@dallasea.com",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Members", href: "/members" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Insights", href: "/insights" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Students", value: "250+", id: "students" },
  { label: "Partner Schools", value: "12", id: "schools" },
  { label: "Events Hosted", value: "30+", id: "events" },
  { label: "Active Initiatives", value: "8", id: "initiatives" },
];

export const pillars = [
  {
    slug: "economics",
    title: "Economics",
    description:
      "Explore economic ideas, markets, policy, and the forces shaping opportunity.",
    detail:
      "Members study macro and microeconomics, financial systems, and economic policy through discussion, research, and case competitions — building the analytical toolkit to understand how markets and incentives actually work.",
    topics: [
      "Economic policy",
      "Markets",
      "Macroeconomics & microeconomics",
      "Financial systems",
      "Economic research",
      "Competitions",
    ],
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    description:
      "Develop entrepreneurial thinking and learn how ideas become organizations, products, and ventures.",
    detail:
      "From first idea to pitch, students learn how ventures are actually built — validating a problem, shaping a strategy, and presenting it with the rigor a real investor or partner would expect.",
    topics: [
      "Business creation",
      "Idea development",
      "Pitching",
      "Strategy",
      "Innovation",
      "Entrepreneurship education",
    ],
  },
  {
    slug: "leadership",
    title: "Leadership",
    description:
      "Build communication, decision-making, collaboration, and leadership skills.",
    detail:
      "DEA is run by students, for students — which means every member has a real chance to lead a team, an event, or an initiative, not just attend one.",
    topics: [
      "Executive leadership",
      "Communication",
      "Decision-making",
      "Team building",
      "Professional development",
    ],
  },
  {
    slug: "innovation",
    title: "Innovation",
    description:
      "Explore emerging technologies, new ideas, and the changing economic landscape.",
    detail:
      "Students track and debate the technologies and trends reshaping industries — and think critically about what that means for the economy they're entering.",
    topics: [
      "Emerging technology",
      "Applied research",
      "Future of work",
      "Technology & policy",
    ],
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy",
    description:
      "Develop practical knowledge about money, investing, markets, and financial decision-making.",
    detail:
      "Practical, real-world financial education — investing fundamentals, personal finance, and the decision-making skills members will use long after graduation.",
    topics: [
      "Investing fundamentals",
      "Personal finance",
      "Financial decision-making",
      "Markets",
      "Wealth creation",
    ],
  },
  {
    slug: "community",
    title: "Community",
    description:
      "Connect ambitious students across Dallas and create meaningful opportunities for collaboration.",
    detail:
      "DEA is a cross-school network first. Members meet ambitious peers from other campuses, building relationships that outlast any single event.",
    topics: [
      "Cross-school collaboration",
      "Networking",
      "Mentorship",
      "Alumni community",
    ],
  },
];

export const values = [
  { title: "Leadership", description: "We put students in charge — of teams, events, and outcomes." },
  { title: "Curiosity", description: "We ask why the system works the way it does before we try to change it." },
  { title: "Innovation", description: "We treat new ideas and new technology as things to study, not fear." },
  { title: "Integrity", description: "We do the work honestly, even when no one is checking." },
  { title: "Collaboration", description: "The best ideas in DEA come from more than one school." },
  { title: "Opportunity", description: "We exist to open doors that wouldn't otherwise be open." },
  { title: "Excellence", description: "We hold our work to a professional standard, not a classroom one." },
];

export const whyDea = [
  "Student-run leadership at every level",
  "A genuine cross-school network, not a single-campus club",
  "Direct exposure to real business, economic, and civic professionals",
  "A structured curriculum in economics, entrepreneurship, and finance",
  "Professional networking with Dallas-area organizations",
  "Leadership roles with real responsibility",
  "Access to competitions, research, and opportunities most clubs can't offer",
];

export type Member = {
  id: string;
  name: string;
  position: string;
  school?: string;
  gradYear?: string;
  interest: string;
  bio: string;
  linkedin?: string;
};

export const members: Member[] = [
  { id: "m1", name: "Add your first member", position: "Member", school: "Sample High School", gradYear: "2027", interest: "Entrepreneurship", bio: "This is a placeholder member card — replace it with real roster data in src/lib/content.ts or via Sanity Studio once connected." },
  { id: "m2", name: "Add your second member", position: "Member", school: "Sample High School", gradYear: "2026", interest: "Economics", bio: "Member directory supports filtering by school, interest, and graduation year out of the box." },
];

export type LeadershipPerson = {
  id: string;
  name: string;
  position: string;
  category: "Executive Leadership" | "Directors" | "Advisors & Alumni";
  school?: string;
  bio: string;
  linkedin?: string;
};

export const leadership: LeadershipPerson[] = [
  { id: "l1", name: "Add your Chair", position: "Chair", category: "Executive Leadership", bio: "Replace with a real bio — this profile drives the leadership page and the homepage preview." },
  { id: "l2", name: "Add your Vice Chair", position: "Vice Chair", category: "Executive Leadership", bio: "Replace with a real bio." },
  { id: "l3", name: "Add a Director", position: "Director of Programs", category: "Directors", bio: "Replace with a real bio." },
  { id: "l4", name: "Add a School Representative", position: "School Representative", category: "Directors", bio: "Replace with a real bio." },
];

export type Event = {
  id: string;
  slug: string;
  name: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
  registrationUrl?: string;
};

export const events: Event[] = [
  {
    id: "e1",
    slug: "founders-forum-fall-2026",
    name: "DEA Founders Forum",
    date: "2026-10-17",
    time: "9:00 AM – 1:00 PM",
    location: "Downtown Dallas",
    description:
      "A half-day conference bringing together students from across Dallas for workshops on pitching, panels with local founders, and a closing networking session.",
    status: "upcoming",
    registrationUrl: "/contact",
  },
  {
    id: "e2",
    slug: "markets-and-policy-workshop",
    name: "Markets & Policy Workshop",
    date: "2026-11-14",
    time: "10:00 AM – 12:00 PM",
    location: "Virtual",
    description:
      "An interactive workshop on how monetary and fiscal policy shape everyday markets, led by DEA's Economics team.",
    status: "upcoming",
    registrationUrl: "/contact",
  },
  {
    id: "e3",
    slug: "spring-pitch-competition-2026",
    name: "Spring Pitch Competition",
    date: "2026-04-11",
    time: "9:00 AM – 3:00 PM",
    location: "Dallas, TX",
    description:
      "Student teams pitched original ventures to a panel of local entrepreneurs and investors for feedback and prizes.",
    status: "past",
  },
];

export type Initiative = {
  id: string;
  slug: string;
  name: string;
  description: string;
  goals: string[];
  participants: string;
  status: "Active" | "Launching Soon" | "Pilot";
};

export const initiatives: Initiative[] = [
  {
    id: "i1",
    slug: "dea-fellows",
    name: "DEA Fellows",
    description:
      "A semester-long leadership fellowship pairing students with mentors from the Dallas business community.",
    goals: ["Build a mentor network across Dallas", "Develop a cohort of trained student leaders"],
    participants: "Open to all DEA members by application",
    status: "Active",
  },
  {
    id: "i2",
    slug: "market-lab",
    name: "Market Lab",
    description:
      "A student research initiative publishing short analyses on economic trends affecting North Texas.",
    goals: ["Publish quarterly research briefs", "Give students real research experience"],
    participants: "Economics & Research track members",
    status: "Active",
  },
  {
    id: "i3",
    slug: "venture-studio",
    name: "Venture Studio",
    description:
      "A hands-on program where student teams develop an original business idea from concept to pitch.",
    goals: ["Launch 5+ student ventures per year", "Connect teams with local founder mentors"],
    participants: "Entrepreneurship track members",
    status: "Launching Soon",
  },
];

export type Post = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: "Economics" | "Entrepreneurship" | "Leadership" | "Research" | "Events" | "Organization";
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    id: "p1",
    slug: "why-dallas-students-should-care-about-economics",
    title: "Why Dallas Students Should Care About Economics",
    author: "DEA Insights",
    date: "2026-08-02",
    category: "Economics",
    excerpt:
      "Economics isn't just a subject — it's the lens for understanding almost every decision a city like Dallas makes.",
    body: [
      "Placeholder article body. Replace with real DEA Insights content, either directly in src/lib/content.ts or through Sanity Studio once connected.",
      "Each post supports a title, author, date, category, featured image, and full body — everything needed for a real editorial section.",
    ],
  },
  {
    id: "p2",
    slug: "how-to-pitch-a-first-idea",
    title: "How to Pitch a First Idea",
    author: "DEA Insights",
    date: "2026-07-18",
    category: "Entrepreneurship",
    excerpt:
      "A practical framework DEA members use before they ever stand in front of a room.",
    body: [
      "Placeholder article body — replace with real content.",
    ],
  },
];

export const partnershipOpportunities = [
  "Guest speaking",
  "Workshops",
  "Mentorship",
  "Events",
  "Sponsorship",
  "Educational partnerships",
  "Career exposure",
  "Research collaboration",
];

export const contactReasons = [
  "General Question",
  "Join DEA",
  "Partnership",
  "Sponsorship",
  "Speaking Opportunity",
  "Media",
  "Other",
];
