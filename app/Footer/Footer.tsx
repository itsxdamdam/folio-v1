import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="mt-6 mb-5 w-3/4 h-[300px] font-[syne] text-[#e4ded7] flex flex-col justify-between items-stretch">
      <p className="text-2xl md:text-3xl md:font-bold ">
        Got a question, Proposal, Wanna Collaborate ?
      </p>
      <p className="md:text-6xl font-extrabold">
        LET&apos;S MAKE <br /> <span className="font-italics italic">
          MAGIC TOGETHER
        </span>
      </p>

      <p className="text-xl font-bold self-center">bakareayomiku@gmail.com</p>
      <p className="self-end">
        <Link target="_blank" href="https://github.com/itsxdamdam">
          Designed by Bakare Samuel
        </Link>
      </p>
    </section>
  );
};

export default Footer;
