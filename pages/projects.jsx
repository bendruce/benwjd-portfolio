import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays";
import Head from "next/head";

/**
 * The `ProjectsPage` component showcases a selection of projects that highlight
 * my expertise in web development, machine learning, and cloud technologies.
 * The page includes a navigation bar (`NavBar`), an animated background (`AnimatedBackground`),
 * and a list of projects that dynamically change based on visibility delays managed by
 * the `useVisibilityDelays` hook.
 *
 * The component presents project titles and brief descriptions, with links to detailed
 * project pages. Each section has smooth transitions to enhance the user experience.
 */

export default function ProjectsPage() {
  // Custom hook to handle visibility delays for background, title, and description
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full min-h-[100vh] relative">
      <Head>
        <title>Projects</title> {/* Page title */}
        {/* Meta description for SEO */}
        <meta
          name="keywords"
          content="Full Stack Engineer, Software Engineer, Web Developer, UI/UX, electronRx, Cambridge"
        />{" "}
        {/* Meta keywords for SEO */}
        <meta name="author" content="Benjamin Druce" /> {/* Author meta tag */}
      </Head>
      {/* Animated background that transitions in based on the bgFinished state */}
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      {/* Navigation bar with a link to the home page */}
      <NavBar links={[{ href: "/", label: "home" }]} mainLink="/" />

      {/* Section containing the page title */}
      <div className="w-full sm:w-3/12 gap-8 p-4 sm:py-44 flex flex-col items-start justify-end relative">
        <h2
          className={`text-7xl sm:text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute ${
            makeTitleVisible
              ? "visible sm:translate-y-[-200%]"
              : "invisible sm:translate-y-0"
          }`}
        >
          projects.
        </h2>

        {/* Section containing the page description */}
        <div
          className={`flex flex-col gap-4 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 sm:translate-y-0"
              : "opacity-0 sm:translate-y-10"
          }`}
        >
          <div className="">
            <p>
              My portfolio includes work across various industries, showcasing
              my expertise in web development, machine learning, and cloud
              technologies.
            </p>
            <p>
              Crafting scalable and secure digital solutions is my forte. I
              welcome dialogue about the broader impact of my work. Let's
              connect!
            </p>
          </div>
          {/* Contact email section */}
          <div className="w-full h-fit flex flex-row gap-2">
            <p>Email: </p>
            <a
              href="mailto:hello@benwjd.com?subject=Software%20Opportunity"
              className="underline hover:no-underline hover:italic"
            >
              hello@benwjd.com
            </a>
          </div>
        </div>
      </div>

      {/* Main content section listing the projects */}
      <div className="h-full w-full sm:w-7/12 flex flex-col py-4 sm:py-12 px-4 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto min-h-[100vh]">
        <div
          className={`flex flex-col gap-8 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a
                href="https://grid.benwjd.com"
                target="_blank"
                className="block group"
              >
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  National Grid{" "}
                </p>
              </a>
              <span className="text-xl self-end pb-1">Personal Project</span>{" "}
            </div>
            <p className="hidden sm:block">
              - Typescript dashboard using opensource apis
            </p>
          </div>
          {/* Project 1: purpleDx Dashboard */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/purpledx-dashboard" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  purpleDx Dashboard{" "}
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx</span>{" "}
            </div>
            <p className="hidden sm:block">
              - Node.js web application for clinical remote patient monitoring
            </p>
          </div>

          {/* Project 2: Dr in Your Pocket */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/dr-in-your-pocket" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  Dr in Your Pocket
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx</span>{" "}
            </div>
            <p className="hidden sm:block">
              - Next.js Website with Community Forum
            </p>
          </div>

          {/* Project 3: RxCloud */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/rxcloud" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  RxCloud{" "}
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx</span>{" "}
            </div>
            <p className="hidden sm:block">
              - Node.js Web Application for data visualisation
            </p>
          </div>

          {/* Project 4: PREDICT-oRx */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/predict-orx" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  PREDICT-oRx
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx, Oxcitas</span>
            </div>
            <p className="hidden sm:block">- Node.js Web Application</p>
          </div>
        </div>
      </div>
    </div>
  );
}
