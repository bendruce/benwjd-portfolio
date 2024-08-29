import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays"; // Adjust the path as needed

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] ">
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      <NavBar links={[{ href: "/", label: "home" }]} mainLink="/" />
      <div className="w-3/12 py-44 flex flex-col items-start justify-end relative ">
        {/* "hello" text */}
        <h2
          className={`text-9xl px-4 font-font-eb-garamond text-orange-50 transition-transform duration-500 transform absolute ${
            makeTitleVisible
              ? "visible translate-y-[-150%]"
              : " invisible translate-y-0"
          }`}
        >
          hello.
        </h2>

        {/* Description */}
        <div
          className={`flex flex-col gap-4 p-4 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="">
            <h3>Lets build something amazing together. Get in touch.</h3>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="w-full h-fit flex flex-row gap-2">
              <p>Email: </p>
              <a
                href="mailto:hello@benwjd.com?subject=Software%20Opportunity"
                className="underline hover:no-underline hover:italic"
              >
                hello@benwjd.com
              </a>
            </div>
            <div className="w-full h-fit flex flex-row gap-2">
              <p>.com: </p>
              <a
                href="https://linkedin.com/in/benjamindruce"
                className="underline hover:no-underline hover:italic"
              >
                LinkedIn
              </a>
              <p> / </p>
              <a
                href="https://github.com/bendruce"
                className="underline hover:no-underline hover:italic"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-7/12 flex flex-col py-40 justify-end text-9xl font-font-eb-garamond "></div>
    </div>
  );
}
