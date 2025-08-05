"use client";

import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import Preloader from "./animations/Preloader/Preloader";
import { useEffect, useState } from "react";
import Blobity from "blobity";
// import Navbar from "./Navbar/page";
import Hero from "./hero-section/Hero";
import About from "./about-section/About";
import Work from "./projects/Work";
import Footer from "./Footer/Footer";
// import OtherProjects from "./projects/OtherProjects";

declare global {
  interface Window {
    blobity: Blobity;
  }
}

export default function Home() {
  // const [preloader, setPreloader] = useState(false);

  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  return (
    <>
      {/* {!preloader ? (
        <Preloader onDone={() => setPreloader(true)} />
      ) : ( */}
        <main className="flex flex-col items-center justify-center">
          <Hero />
          <About />
          <Work />
          {/* <OtherProjects /> */}
          <Footer />
        </main>
      {/* )} */}

      {/* <Navbar /> */}
    </>
  );
}
