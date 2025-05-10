"use client";

import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import Screen from "./animations/Preloader/Preloader";
// import Navbar from "./Navbar/page";


export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  return (
    <>
      <Screen />
    </>
  );
}
