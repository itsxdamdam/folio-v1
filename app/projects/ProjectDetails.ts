export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live_link: string;
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
];
