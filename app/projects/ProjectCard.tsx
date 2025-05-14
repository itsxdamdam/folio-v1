import React from "react";
import { ProjectProps } from "./ProjectDetails";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  live_link,
  image,
}: ProjectProps) => {
  return (
    <div className="relative project-card p-7 justify-center text-white bg-[#20273A] rounded-3xl my-2 h-[700px] md:h-[500px] w-full">
      <div className="h-full flex flex-col md:justify-between md:w-[40%]">
        <div className="links">
          <Link href={live_link} className="font-bold pr-3 md:text-2xl">
            Live Link
          </Link>
          <Link href={github} className="font-bold px-3 md:text-2xl">
            Github
          </Link>
        </div>
        <div>
          <p className="font-extrabold text-[24px]">{name}</p>
          <p className="text-[18px] mt-2 leading-8">{description}</p>
        </div>
        <div className="flex gap-4 items-start my-3 font-bold md:text-xl flex-wrap md:flex-nowrap">
          {technologies.map((tech, id) => (
            <p key={id}>{tech}</p>
          ))}
        </div>
      </div>
      <div className="project-right">
        <Image
          src={image}
          alt={`${id}${name}`}
          className="absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
