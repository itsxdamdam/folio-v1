export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live_link: string;
  image: string;
};

export type MoreProjectsProps = {
  id: number;
  name: string;
  image: string;
};

export const Projects = [
  {
    id: 1,
    name: "HorizBank",
    description:
      "Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
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
  },
  {
    id: 2,
    name: "Apple Website",
    description:
      "Apple Website This project displays the potential of dynamic animations. This concept aims to reimagine the landing page for Apple's iPhone 15 Pro Device, leveraging engaging visual effects to enhance user engagement and potentially drive immediate purchase decisions.",
    technologies: ["React", "GSAP", "Three.js"],
    github: "https://github.com/itsxdamdam/apple-website",
    live_link: "https://apple-website-ten-opal.vercel.app/",
    image: "/apple-website.png",
  },
  {
    id: 3,
    name: "DropFunds",
    description:
      "Co-developed solana-based crowdfunding platform supporting cryptocurrency transactions. - Provided design direction. - Created multiview web application.",
    technologies: ["TypeScript", "Next.js", "Rust", "TailwindCSS", "Anchor"],
    github: "https://github.com/itsxdamdam/dropfunds",
    live_link: "https://gofundme-dapp.netlify.app/",
    image: "/dropfunds.png",
  },
  {
    id: 4,
    name: "Chronos API",
    description:
      "This is an API for a ChangeLog App called Chronos. This allows managers to post product updates for their users. The Users can read, create, update and delete product updates.",
    technologies: ["TypeScript", "Node.js", "Prisma"],
    github: "https://github.com/itsxdamdam/chronos-api",
    live_link: "https://github.com/itsxdamdam/chronos-api",
    image: "/chronos.png",
  },
];

export const MoreProjects = [
  { id: 1, name: "apple-clone", image: "/apple-1.png" },
  { id: 2, name: "colossus-digital", image: "/colossusdigi1.png" },
  { id: 3, name: "retro-snake", image: "/snake-retro.png" },
  { id: 4, name: "drop-funds", image: "/dropfund-1.png" },
  { id: 5, name: "Ecommerce", image: "/ecommerce1.png" },
];
