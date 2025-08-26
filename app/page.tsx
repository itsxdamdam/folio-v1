"use client";

import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { useEffect } from "react";
import Blobity from "blobity";
import Hero from "./hero-section/Hero";
import About from "./about-section/About";
import Work from "./projects/Work";
import Footer from "./Footer/Footer";

declare global {
  interface Window {
    blobity: Blobity;
  }
}

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Work />

        <Footer />
      </main>
    </>
  );
}
