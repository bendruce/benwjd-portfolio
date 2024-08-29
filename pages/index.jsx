import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";

/**
 * The `Landing` component serves as the main landing page for the portfolio website.
 * It includes a navigation bar (`NavBar`) and presents key links to various sections
 * of the website, such as the About, Projects, CV, and Contact pages. The page also
 * features metadata in the head section for better SEO and responsiveness.
 *
 * The component is styled using Tailwind CSS classes and is designed to be responsive,
 * adapting to different screen sizes. The main content is divided into two sections:
 * the left section contains personal information and role description, while the
 * right section provides navigation links to other pages.
 */

export default function Landing() {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between w-[100vw] min-h-[100vh] h-fit font-montserrat">
      <Head>
        <title>Benjamin Druce - Full Stack Engineer</title> {/* Page title */}
        <meta
          name="description"
          content="Benjamin Druce is a Full Stack Engineer specializing in software and web application development."
        />{" "}
        {/* Meta description for SEO */}
        <meta
          name="keywords"
          content="Full Stack Engineer, Software Engineer, Web Developer, UI/UX, electronRx, Cambridge"
        />{" "}
        {/* Meta keywords for SEO */}
        <meta name="author" content="Benjamin Druce" /> {/* Author meta tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
        {/* Viewport for responsive design */}
      </Head>

      {/* Navigation bar component */}
      <NavBar
        links={[
          { href: "https://linkedin.com/in/benjamindruce", label: "i n" },
          { href: "/files/Benjamin Druce CV.pdf", label: "c v" },
        ]}
        textColor="text-black"
        borderColor="border-black"
      />

      {/* Left section: Personal information and role description */}
      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end ">
        <div className="flex flex-col gap-4">
          {/* Name header, hidden on smaller screens */}
          <div className="hidden sm:block">
            <h1 className="text-4xl">BENJAMIN DRUCE</h1>
          </div>
          {/* Role descriptions */}
          <div className="">
            <h3>
              Full Stack Engineer / Software Engineer / Web Application
              Developer / UI/UX
            </h3>
          </div>
          {/* Current placement information */}
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

      {/* Right section: Navigation links to other pages */}
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
