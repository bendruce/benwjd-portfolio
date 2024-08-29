import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays"; // Adjust the path as needed

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } = useV();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      <NavBar links={[{ href: "/projects", label: "projects" }]} />

      <div className="w-full sm:w-3/12 p-4 gap-4 sm:py-44 flex flex-col items-start justify-end relative ">
        <h2
          className={`text-7xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute  ${
            makeTitleVisible
              ? "visible sm:translate-y-[-100%]"
              : " invisible sm:translate-y-0"
          }`}
        >
          Dr in Your Pocket.
        </h2>

        <div
          className={`flex flex-col gap-4  text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <div className=" flex flex-col gap-2">
            <a
              href="https://drinyourpocket.net/"
              alt="View Dr in Your Pocket site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit"
            >
              <button className="w-fit bg-orange-50 shadow-xl rounded-full text-zinc-800 p-8 py-4 font-font-eb-garamond text-2xl transform duration-150 hover:scale-105">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="h-full w-full sm:w-7/12 flex flex-col sm:py-12 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto sm:h-[100vh">
        <div
          className={`flex flex-col gap-4 text-orange-50 z-50 p-4 sm:p-0 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Project Overview
          </p>
          <p>
            Dr in Your Pocket is the consumer facing brand of{" "}
            <a
              className="underline hover:italic"
              href="https://www.electronrx.com/"
              target="_blank"
            >
              electronRx
            </a>{" "}
            and their remote health monitoring mobile applications.
          </p>
          <p>
            The Dr in Your Pocket website was a project designed to build a
            community of similar individuals who are suffering with respiratory
            conditions with the aim of sharing experinences and stories to help
            others.
          </p>
          <ul>
            This community is built by:
            <li className="ml-8">
              - Promoting users to share their stories and allow others to read
              about conditions similar to their own.
            </li>
            <li className="ml-8">
              - A community forum where users can ask questions, share their
              experiences and communicate with users with conditions like their
              own.
            </li>
            <li className="ml-8">
              - Providing insites into varying respiratory conditions and
              regular blog posts.
            </li>
          </ul>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technical Contributions
          </p>
          <p>
            The Dr in Your Pocket website and forum are built with Next.js and
            React, forming the foundation of the front-end infrastructure. The
            back-end leverages API routes to utilise the Firebase NoSQL database
            efficiently. Hosting is provided through AWS EC2, ensuring reliable
            and scalable server management. Additionally, welcome emails are
            seamlessly integrated and automated to enhance user engagement.
          </p>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technology Stack{" "}
          </p>
          <div className="flex flex-row gap-8 w-full">
            <ul className="list-disc ml-8">
              <li>Next.js</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul className="list-disc ml-8">
              <li>Tailwind CSS</li>
              <li>NoSQL </li>
              <li>Firebase </li>
              <li>Amazon Web Services (AWS)</li>
              <li>Bitbucket</li>
            </ul>
          </div>
          {/* Future section for images or links to the application if available */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Visual Preview
          </p>
          <a
            href="https://drinyourpocket.net/"
            alt="View Dr in Your Pocket site"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit underline hover:italic"
          >
            drinyourpocket.net{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
