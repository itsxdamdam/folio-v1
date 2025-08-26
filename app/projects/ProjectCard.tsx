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
    <div className="flex  project-card p-7 justify-center text-white bg-[#20273A] rounded-3xl my-4  w-full">
      <div className="h-full flex flex-col lg:justify-between md:justify-start md:w-full lg:w-[40%] xl:w-[60%] ">
        <div className="links">
          <Link
            href={live_link}
            target="_blank"
            className="font-bold pr-3 md:text-2xl"
          >
            Live Link
          </Link>
          <Link
            href={github}
            target="_blank"
            className="font-bold px-3 md:text-2xl"
          >
            Github
          </Link>
        </div>
        <div className="">
          <p className="font-extrabold text-[24px]">{name}</p>
          <p className="text-[18px] mt-2 leading-8 lg:flex-wrap">
            {description}
          </p>
        </div>
        <div className="flex gap-4 items-start my-3 font-bold md:text-xl flex-wrap md:flex-wrap lg:flex-wrap">
          {technologies.map((tech, id) => (
            <p key={id}>{tech}</p>
          ))}
        </div>
      </div>
      <div className="project-right">
        <Image
          src={image}
          alt={`${id}${name}`}
          className="rounded-tl-3xl rounded-br-3xl lg:w-[450px]"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
