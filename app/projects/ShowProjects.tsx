import React from "react";
import { ProjectProps, Projects } from "./ProjectDetails";
import ProjectCard from "./ProjectCard";

const ShowProjects = () => {
  return (
    <div className="my-5">
      {Projects.map((project: ProjectProps) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          live_link={project.live_link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ShowProjects;