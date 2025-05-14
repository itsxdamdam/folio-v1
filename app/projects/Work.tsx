import React from "react";
import ShowProjects from "./ShowProjects";

const Work = () => {
  return (
    <section className="bg-[#0E1016] z-40 mt-10 text-[#e4ded7] font-[syne] flex flex-col w-3/4">
      <h2 className="text-4xl lg:text-5xl font-extrabold">Selected Projects</h2>
      <ShowProjects />
    </section>
  );
};

export default Work;
