export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live_link: string;
  image: string;
  // category: string;
};

export type MoreProjectsProps = {
  id: number;
  name: string;
  image: string;
};

export const Projects = [
  {
    id: 1,
    name: "Converso",
    description:
      " Converso, a modern Learning Management SaaS platform that combines real-time teaching, AI-powered tutoring, and seamless subscription management. The platform allows users to sign up securely, subscribe to different learning plans, and access interactive sessions with AI voice tutors. Learners can also create their own custom tutors, bookmark sessions, and manage their learning journey across devices.",
    technologies: ["TypeScript", "Next.js", "Shadcn", "TailwindCSS", "Lottie"],
    github: "https://github.com/itsxdamdam/converso",
    live_link: "https://converso-six-cyan.vercel.app/",
    image: "/converso.png",
    category: "Web App",
  },
  {
    id: 2,
    name: "HorizBank",
    description:
      "HorizBank is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Shadcn",
      "TailwindCSS",
      "Chart.js",
    ],
    github: "https://github.com/itsxdamdam/bankly",
    live_link: "https://bankly-lake.vercel.app/",
    image: "/horizbank-image.png",
    category: "Web App",
  },
  {
    id: 3,
    name: "Productivity Saas",
    description:
      "Landing Page for SaaS all-in-one productivity companion designed to help you stay organized, focused, and in control of your day. Whether you're managing tasks, planning your week, or tracking habits, our intuitive interface and smart features make it effortless to get things done.",
    technologies: ["Next", "TypeScript", "Framer Motion"],
    github: "https://github.com/itsxdamdam/saas-landing",
    live_link: "https://saas-landing-two.vercel.app/",
    image: "/saas.png",
    category: "Website",
  },
  {
    id: 4,
    name: "Apple Website",
    description:
      "Apple Website This project displays the potential of dynamic animations. This concept aims to reimagine the landing page for Apple's iPhone 15 Pro Device, leveraging engaging visual effects to enhance user engagement and potentially drive immediate purchase decisions.",
    technologies: ["React", "GSAP", "Three.js"],
    github: "https://github.com/itsxdamdam/apple-website",
    live_link: "https://apple-website-ten-opal.vercel.app/",
    image: "/apple-website.png",
    category: "Interactive Website",
  },
  {
    id: 5,
    name: "Chronos API",
    description:
      "This is an API for a ChangeLog App called Chronos. This allows managers to post product updates for their users. The Users can read, create, update and delete product updates.",
    technologies: ["TypeScript", "Node.js", "Prisma"],
    github: "https://github.com/itsxdamdam/chronos-api",
    live_link: "https://github.com/itsxdamdam/chronos-api",
    image: "/chronos.png",
    category: "Backend & Systems",
  },
];

export const MoreProjects = [
  { id: 1, name: "apple-clone", image: "/apple-1.png" },
  { id: 2, name: "colossus-digital", image: "/colossusdigi1.png" },
  { id: 3, name: "retro-snake", image: "/snake-retro.png" },
  { id: 4, name: "drop-funds", image: "/dropfund-1.png" },
  { id: 5, name: "Ecommerce", image: "/ecommerce1.png" },
];
