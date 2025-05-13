"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./preloader.css";

gsap.registerPlugin(TextPlugin);

const preloadText = [
  '"The sole purpose of technology is to solve problems, build usable and reusable solutions, leaving a positive impact on anyone that interact with it.."',
];

export const loaderAnimation = ({ textElement, authorElement }) => {
  return new Promise((resolve) => {
    const typingSound = new Audio("/sounds/typewriter-sound.mp3");

    gsap.to(textElement, {
      text: { value: preloadText },
      duration: 3,
      // delay: 1.5,
      ease: "power1.inOut",
      onStart: function () {
        typingSound.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      },
      onComplete: function () {
        typingSound.pause();
        typingSound.currentTime = 0;

        gsap.to(authorElement, {
          duration: 1,
          opacity: 1,
          y: 10,
          onComplete: () => {
            resolve();
          },
        });
      },
    });
  });
};
