import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between w-[100vw] min-h-[100vh] h-fit font-montserrat">
      <div className="w-full px-4 py-3 sm:py-0 sm:px-0   h-fit  flex  flex-row  items-start justify-between text-xl sm:text-xs sm:flex-col sm:w-fit sm:h-[100vh]">
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 flex sm:hidden">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
        <div className="flex gap-4 flex-row sm:flex-col w-fit sm:w-12 h-full sm:h-2/4 items-center justify-center ">
          <div className="w-fit h-fit sm:w-full sm:h-1/4 flex items-center justify-center transform sm:-rotate-90">
            <a
              href="https://linkedin.com/in/benjamindruce"
              className="block whitespace-nowrap"
            >
              <h3 className="hover:italic">i n</h3>
            </a>
          </div>
          <div className="w-fit sm:w-full h-fit sm:h-1/4 flex items-center justify-center transform sm:-rotate-90">
            <a
              href="/files/Benjamin Druce CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              className="block whitespace-nowrap"
            >
              <h3 className="hover:italic">c v</h3>
            </a>
          </div>
          <div className="border border-t border-b-0 border-black w-0 h-32 mb-4 hidden sm:block"></div>
        </div>
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 hidden sm:flex">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end ">
        <div className="flex flex-col gap-4">
          <div className="hidden sm:block">
            <h1 className="text-xl  ">BENJAMIN DRUCE</h1>
          </div>
          <div className="">
            <h3>Full Stack Engineer / Software Engineer / UI/UX </h3>
          </div>
          <div className="">
            <h3>
              Currently on Placement at{" "}
              <a
                href="http://www.electronrx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline hover:italic"
              >
                electronRx
              </a>
              , a deep tech company based in Cambridge, leading the development
              of novel chronic disease solutions.
            </h3>
          </div>
        </div>
      </div>
      <div className="h-fit sm:h-full w-7/12 flex flex-col p-4 sm:py-40 justify-end text-7xl sm:text-9xl font-font-eb-garamond ">
        <div className="w-full h-fit">
          <a href="/about" className="block">
            <h3 className="hover:italic hover:translate-x-8 transform transition-transform">
              About
            </h3>
          </a>
        </div>
        <div className="w-full h-fit">
          <a href="/projects" className="block">
            <h3 className="hover:italic hover:translate-x-8 transform transition-transform">
              Projects
            </h3>
          </a>
        </div>
        <div className="w-full h-fit">
          <a href="/cv" className="block">
            <h3 className="hover:italic hover:translate-x-8 transform transition-transform">
              CV
            </h3>
          </a>
        </div>
        <div className="w-full h-fit">
          <a href="/contact" className="block">
            <h3 className="hover:italic hover:translate-x-8 transform transition-transform">
              Contact
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
