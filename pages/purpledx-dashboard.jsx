import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import EnlargedImage from "../components/EnlargedImage";
import ImageGrid from "../components/ImageGrid";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays";

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();
  const [enlargeImageUrl, setEnlargeImageUrl] = useState(null);

  const images = [
    "purpledx-login",
    "purpledx-patients",
    "purpledx-overview",
    "purpledx-alerts",
    "purpledx-sessions",
    "purpledx-notes",
    "purpledx-traces",
    "purpledx-account",
    "purpledx-info",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      <NavBar links={[{ href: "/projects", label: "projects" }]} />

      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end relative">
        <h2
          className={`text-7xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute ${
            makeTitleVisible
              ? "visible sm:translate-y-[-100%]"
              : "invisible sm:translate-y-0"
          }`}
        >
          purpleDx Dashboard
        </h2>
      </div>

      <div className="h-full w-full sm:w-7/12 flex flex-col sm:py-12 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto sm:h-[100vh]">
        <div
          className={`flex flex-col gap-4 text-orange-50 z-50 p-4 sm:p-0 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Leadership & Team Management
          </p>
          <p>
            As the lead developer for the purpleDx Dashboard project, I was
            responsible for managing a multidisciplinary team of developers. My
            leadership involved overseeing the entire development process,
            ensuring that the project met all deadlines, and maintaining a high
            standard of code quality. I coordinated closely with external teams
            to integrate their work into our platform, particularly focusing on
            the seamless integration of data from the purpleDx SaMD mobile
            application. My role also included acting as a Scrum Lead, where I
            implemented Agile methodologies to streamline our workflows and
            enhance collaboration across the team.
          </p>

          <p className="font-font-eb-garamond text-3xl font-semibold">
            Dashboard Development
          </p>
          <p>
            The purpleDx Dashboard was designed to enable clinicians to remotely
            monitor patients' health by visualising data collected from the
            purpleDx SaMD mobile application. The dashboard provided clinicians
            with a secure platform to log in, view patient metrics, and analyse
            trends over time. I was instrumental in the creation of this
            dashboard, ensuring that it was both user-friendly and highly
            functional. The development process involved building custom
            components, optimising data flows, and ensuring compliance with
            industry standards for medical data handling.
          </p>

          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technology Stack
          </p>
          <div className="flex flex-row gap-4 w-full">
            <ul className="list-disc ml-8">
              <li>Node.js</li>
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
            <ul className="list-disc ml-8">
              <li>Python</li>
              <li>Tailwind CSS</li>
              <li>MySQL</li>
              <li>Azure</li>
              <li>AWS</li>
            </ul>
          </div>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Visual Preview
          </p>
          <ImageGrid images={images} onImageClick={setEnlargeImageUrl} />
        </div>
      </div>
      {enlargeImageUrl && (
        <EnlargedImage
          imageUrl={enlargeImageUrl}
          onClose={() => setEnlargeImageUrl(null)}
        />
      )}
    </div>
  );
}
