import React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-black",
      {
        // autoAlpha: 1,
        y: 0,
      },
      {
        // autoAlpha: 0,
        y: 800,
        duration: 1,
        yoyo: true,
      }
    );

    gsap.to(".link", {
      yoyo: true,
      delay: 2,
      duration: 3,
      opacity: 1,
      ease: "elastic",
    });

    gsap.to(".main-text", {
      yoyo: true,
      delay: 3,
      duration: 3,
      opacity: 1,
      ease: "elastic",
    });

    gsap.to(".title-text", {
      yoyo: true,
      delay: 5,
      duration: 8,
      opacity: 1,
      stagger: 0.2,
    });

    gsap.to(".memoji", {
      delay: 4,
      opacity: 1,
      ease: "power1.inOut",
      duration: 3,
      yoyo: true,
    });

    gsap.to(".currently-tag", {
      delay: 4,
      opacity: 1,
      ease: "bounce.in",
      duration: 3,
    });
  }, []);

  return (
    <section className="flex h-[85vh] z-20 w-full bg-[url('/hero.jpg')] relative bg-cover bg-center py-0 px-5">
      <div className="hero-black absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-[#0E1016]"></div>
      <div className="link absolute flex top-2 right-5 justify-end py-4 px-2 items-end gap-10 text-[#e4ded7] opacity-0">
        <Link
          href={`mailto:bakareayomiku@gmail.com`}
          target="_blank"
          aria-label="Send an Email"
        >
          Email
        </Link>
        <Link
          href="https://docs.google.com/document/d/1R6F8HT6FQ5soknDiser2XsvXYINslWzhDATom-ulTQU/edit?usp=sharing"
          target="_blank"
          aria-label="View Resume"
        >
          Resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/itsxdamdam/"
          target="_blank"
          aria-label="View LinkedIn Profile"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/itsxdamdam"
          target="_blank"
          aria-label="View Github Profile"
        >
          Github
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="main-text flex flex-col h-full items-center justify-center text-[#e4ded7] opacity-0">
          <h1 className=" flex justify-center items-center font-[mona_sans] md:text-9xl text-3xl">
            BAKARE{" "}
            <span className="align-center">
              <Image
                src="/Memoji.png"
                alt="memoji"
                width={100}
                height={100}
                sizes="(max-width: 100px)"
                className="memoji opacity-0"
                layout="raw"
              />
            </span>
            SAMUEL
          </h1>
          <div className="text-[#e4ded7] flex flex-col-reverse md:flex-row items-start mt-5 justify-self-end w-full">
            <h3 className="mx-2 title-text opacity-0">SOFTWARE ENGINEER,</h3>
            <h3 className="mx-2 title-text opacity-0">BUILDER,</h3>
            <h3 className="mx-2 title-text opacity-0">LEADER.</h3>
          </div>
        </div>
        <p className="currently-tag font-bold  text-[#e4d] mb-5 bg-[#0E1016] p-4 opacity-0">
          Currently exploring AI and Blockchain Technologies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
