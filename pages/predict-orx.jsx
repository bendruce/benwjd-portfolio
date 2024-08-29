import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import EnlargedImage from "../components/EnlargedImage";
import ImageGrid from "../components/ImageGrid";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays"; // Adjust the path as needed
import Head from "next/head";

/**
 * The `PredictOrxPage` component represents a detailed project page for the PREDICT-oRx project.
 * It showcases an overview of the project, the technical contributions made, the technology stack used,
 * and a visual preview of the project through a grid of images. The page features a navigation bar (`NavBar`),
 * an animated background (`AnimatedBackground`), and an interactive image grid (`ImageGrid`) that allows users
 * to click and view enlarged images using the `EnlargedImage` component.
 *
 * The component makes use of the `useVisibilityDelays` hook to manage the timing of background, title, and description visibility,
 * providing a smooth user experience with timed transitions.
 */

export default function PredictOrxPage() {
  // Custom hook to handle visibility delays for background, title, and description
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  // State to manage the currently enlarged image
  const [enlargeImageUrl, setEnlargeImageUrl] = useState(null);

  // List of image URLs to be displayed in the image grid
  const images = [
    "predict-orx-home",
    "predict-orx-multirisk",
    "predict-orx-register",
    "predict-orx-login",
    "predict-orx-upload",
    "predict-orx-multirisk-results",
    "predict-orx-bioage-results",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      <Head>
        <title>Benjamin Druce</title> {/* Page title */}
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

      {/* Navigation bar with a link to the projects page */}
      <NavBar links={[{ href: "/projects", label: "projects" }]} />

      {/* Section containing the project title */}
      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end relative">
        <h2
          className={`text-7xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute ${
            makeTitleVisible
              ? "visible sm:translate-y-[-100%]"
              : "invisible sm:translate-y-0"
          }`}
        >
          PREDICT-oRx
        </h2>
      </div>

      {/* Main content section containing the project overview, technical contributions, technology stack, and visual preview */}
      <div className="h-full w-full sm:w-7/12 flex flex-col sm:py-12 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto sm:h-[100vh]">
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
            PREDICT-oRx is one of the most impactful projects I contributed to,
            where I integrated machine learning models into microservices to
            process biomarkers and generate predictive age and risk scores.
            These scores were then utilised within a web application that I
            developed.
          </p>
          <p>
            My role involved developing web applications that interfaced
            seamlessly with these microservices, enabling users to upload data
            and visualise results through an intuitive, user-friendly interface.
            This application was not just a technical challenge but also a
            collaborative effort, as I worked closely with a team of PhD-level
            machine learning engineers to refine the models and ensure the final
            product was robust and reliable.
          </p>
          <p>
            The final product was showcased as a Minimum Viable Product (MVP) to
            various collaborators and partners, highlighting its capabilities
            and potential impact. I also designed and developed a website to
            present the purpose and features of the MVP effectively.
          </p>

          {/* Section highlighting the technical contributions to the project */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technical Contributions
          </p>
          <ul className="list-disc ml-8">
            <li>
              Integrated machine learning models into microservices to process
              biomarkers, generating predictive age and risk scores.
            </li>
            <li>
              Developed web applications that interfaced seamlessly with these
              microservices, enabling users to upload data and visualize results
              through an intuitive interface.
            </li>
            <li>
              Collaborated closely with PhD-level ML engineers to refine the
              models and contributed to the creation of a robust MVP, which was
              showcased to collaborators and partners.
            </li>
            <li>
              Designed and developed a website that highlighted the purpose and
              capabilities of the MVP.
            </li>
          </ul>

          {/* Section listing the technology stack used in the project */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technology Stack
          </p>
          <div className="flex flex-row gap-8 w-full">
            <ul className="list-disc ml-8">
              <li> - Node.js</li>
              <li> - React</li>
              <li> - SQL</li>
              <li> - Flask</li>
            </ul>
            <ul className="list-disc ml-8">
              <li> - AWS</li>
              <li> - GCP</li>
              <li> - Microservices</li>
              <li> - Python</li>
            </ul>
          </div>

          {/* Section providing a visual preview of the project through an image grid */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Visual Preview
          </p>
          <ImageGrid images={images} onImageClick={setEnlargeImageUrl} />
        </div>
      </div>

      {/* Conditionally renders the enlarged image modal when an image is clicked */}
      {enlargeImageUrl && (
        <EnlargedImage
          imageUrl={enlargeImageUrl}
          onClose={() => setEnlargeImageUrl(null)}
        />
      )}
    </div>
  );
}
