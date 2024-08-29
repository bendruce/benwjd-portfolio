import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays"; // Custom hook for managing visibility delays
import Head from "next/head";

/**
 * DIYPPage Component
 * This component represents the "Dr in Your Pocket" project page on Benjamin Druce's portfolio website.
 * It includes a navigation bar, animated background, and detailed information about the project.
 * The page is styled using Tailwind CSS and uses visibility delays for smooth transitions.
 */

export default function DIYPPage() {
  // Destructure the visibility states from the custom hook
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      {/* Head component for SEO and meta tags */}
      <Head>
        <title>Benjamin Druce</title> {/* Page title */}
        <meta
          name="description"
          content="Learn about the Dr in Your Pocket project, a community website for individuals with respiratory conditions."
        />{" "}
        {/* Meta description for SEO */}
        <meta
          name="keywords"
          content="Full Stack Engineer, Software Engineer, Web Developer, UI/UX, electronRx, Cambridge"
        />{" "}
        {/* Meta keywords for SEO */}
        <meta name="author" content="Benjamin Druce" /> {/* Author meta tag */}
      </Head>

      {/* Animated background component */}
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      {/* Navigation bar with a link to the projects page */}
      <NavBar links={[{ href: "/projects", label: "projects" }]} />

      {/* Section with project title and description */}
      <div className="w-full sm:w-3/12 p-4 gap-4 sm:py-44 flex flex-col items-start justify-end relative">
        {/* Animated title "Dr in Your Pocket" */}
        <h2
          className={`text-7xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute ${
            makeTitleVisible
              ? "visible sm:translate-y-[-100%]"
              : " invisible sm:translate-y-0"
          }`}
        >
          Dr in Your Pocket.
        </h2>

        {/* Button to view the Dr in Your Pocket site */}
        <div
          className={`flex flex-col gap-4 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <div className="flex flex-col gap-2">
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

      {/* Main content area with project details */}
      <div className="h-full w-full sm:w-7/12 flex flex-col sm:py-12 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto sm:h-[100vh]">
        <div
          className={`flex flex-col gap-4 text-orange-50 z-50 p-4 sm:p-0 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Project Overview Section */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Project Overview
          </p>
          <p>
            Dr in Your Pocket is the consumer-facing brand of{" "}
            <a
              className="underline hover:italic"
              href="https://www.electronrx.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              electronRx
            </a>{" "}
            and their remote health monitoring mobile applications.
          </p>
          <p>
            The Dr in Your Pocket website was a project designed to build a
            community of individuals suffering from respiratory conditions, with
            the aim of sharing experiences and stories to help others.
          </p>
          <ul>
            This community is built by:
            <li className="ml-8">
              - Encouraging users to share their stories and allow others to
              read about conditions similar to their own.
            </li>
            <li className="ml-8">
              - Providing a community forum where users can ask questions, share
              their experiences, and communicate with others facing similar
              conditions.
            </li>
            <li className="ml-8">
              - Offering insights into various respiratory conditions and
              regular blog posts.
            </li>
          </ul>
          {/* Technical Contributions Section */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technical Contributions
          </p>
          <p>
            The Dr in Your Pocket website and forum are built with Next.js and
            React, forming the foundation of the front-end infrastructure. The
            back-end leverages API routes to efficiently use the Firebase NoSQL
            database. Hosting is provided through AWS EC2, ensuring reliable and
            scalable server management. Additionally, welcome emails are
            seamlessly integrated and automated to enhance user engagement.
          </p>
          {/* Technology Stack Section */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technology Stack
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
              <li>Firebase</li>
              <li>Amazon Web Services (AWS)</li>
              <li>Bitbucket</li>
            </ul>
          </div>
          {/* Visual Preview Section */}
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
            drinyourpocket.net
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
