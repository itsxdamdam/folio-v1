"use client";

import React, { useEffect, useRef, useState } from "react";
import { loaderAnimation } from "./loader";
import gsap from "gsap";

const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [entered, setEntered] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (entered) {
      // Defer the animation until DOM updates are complete
      const timeout = setTimeout(() => {
        if (!textRef.current || !authorRef.current) return;

        loaderAnimation({
          textElement: textRef.current,
          authorElement: authorRef.current,
        }).then(() => {
          // Animate preloader out
          gsap.to(preloaderRef.current, {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.inOut",
            onComplete: onDone, // Notify parent
          });
        });
      }, 30); // give DOM time to paint

      return () => clearTimeout(timeout);
    }
  }, [entered, onDone]);

  return (
    <div
      ref={preloaderRef}
      className="preloader h-screen bg-[#0E1016] text-[#E4DED7] flex flex-col justify-center items-center text-left"
    >
      {!entered ? (
        <button
          onClick={() => {
            setEntered(true);
          }}
        >
          Tap to Enter
        </button>
      ) : (
        <div className="preloader-inner width-fit">
          <p
            className=" p-3 preload-text font-bold w-max-[600px]"
            ref={textRef}
          ></p>

          <p
            ref={authorRef}
            className="author opacity-0 text-right justify-self-end font-bold py-3"
          >
            ━━━ Bakare Samuel <br />
            ‘87 😂
          </p>
        </div>
      )}
    </div>
  );
};

export default Preloader;
