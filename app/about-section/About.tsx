import React from "react";

const About = () => {
  return (
    <section className="bg-[#0E1016] text-[#e4ded7]  z-40 mt-7 w-3/4 font-medium text-xl">
      <div className=" grid grid-cols-2 gap-4">
        <div className="about-text col-span-1 my-3 leading-[1.8]">
          I am a Software Engineer, with great passion for solving problems
          through innovative and user-friendly solutions. If the goal is to
          build software that makes a different{" "}
          <span className="text-red-600 bg-amber-300 font-bold">
            “I will be there”
          </span>
        </div>
        <div className="about-text">
          <h3 className="font-extrabold text-[32px]">UI Libraries</h3>
          GSAP, TailwindCSS, CSS3/Sass, Three.js, D3.js, Chart.js, Redux,
          Bootstrap
        </div>
        <div className="about-text">
          <h3 className="font-extrabold text-[32px]">Tools</h3>
          AWS, Docker, Git, Github, Netlify, Figma
        </div>
        <div className="about-text">
          <h3 className="font-extrabold text-[32px]">Databases</h3>
          PostgreSQL, MongoDB, MySQL, Prisma
        </div>
      </div>
      <div className="about-text mt-5">
        <h3 className="font-extrabold text-[32px]">Languages & Frameworks</h3>
        JavaScript (ES6+), React, Next.js, TypeScript, HTML5, Node.js, NestJS,
        Python
      </div>
    </section>
  );
};

export default About;
