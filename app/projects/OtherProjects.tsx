import React from "react";
import { MoreProjects, MoreProjectsProps } from "./ProjectDetails";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OtherProjects = () => {
  useGSAP(() => {
    // gsap
    //   .fromTo(
    //     ".marquee_part",
    //     {
    //       xPercent: 300,
    //       repeat: -1,
    //     },
    //     {
    //       xPercent: -500,
    //       duration: 10,
    //       ease: "linear",
    //       repeat: -1,
    //     }
    //   )
    //   .totalProgress(0.5);

    gsap.to(".marquee-container", {
      xPercent: -500,
      duration: 10,
      ease: "none",
      repeat: -1,
      //   modifiers: {
      //     x: gsap.utils.unitize(x => parseFloat(x) % totalWidth), // Wrap x
      //   },
      // });
    });
    // gsap.set(".marquee-container", { xPercent: 200 });
  }, []);

  return (
    <section className="px-2 py-3 mt-2 w-3/4 h-[600px] z-10 overflow-x-hidden">
      <div className="flex justify-around items-center marquee-container">
        {MoreProjects.map((moreproject: MoreProjectsProps) => (
          <Image
            src={moreproject.image}
            alt={moreproject.name}
            width={400}
            height={400}
            className=" rounded-3xl px-8 marquee_part"
            key={moreproject.id}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
