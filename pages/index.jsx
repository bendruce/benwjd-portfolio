import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between w-[100vw] min-h-[100vh] h-fit font-montserrat">
      <NavBar
        links={[
          { href: "https://linkedin.com/in/benjamindruce", label: "i n" },
          { href: "/files/Benjamin Druce CV.pdf", label: "c v" },
        ]}
        textColor="text-black"
        borderColor="border-black"
      />

      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end ">
        <div className="flex flex-col gap-4">
          <div className="hidden sm:block">
            <h1 className="text-4xl  ">BENJAMIN DRUCE</h1>
          </div>
          <div className="">
            <h3>
              Full Stack Engineer / Software Engineer / Web Application
              Developer / UI/UX{" "}
            </h3>
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
