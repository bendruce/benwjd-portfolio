import { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays";

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      <NavBar links={[{ href: "/projects", label: "projects" }]} />

      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end relative ">
        <h2
          className={`text-7xl sm:text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute  ${
            makeTitleVisible
              ? "visible sm:translate-y-[-200%]"
              : " invisible sm:translate-y-0"
          }`}
        >
          RxCloud
        </h2>

        {/* <div
          className={`flex flex-col gap-4  text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-row  gap-4 w-full ">
            <ul>
              <li> - Node.js</li>
              <li> - React</li>
              <li> - JavaScript</li>
              <li> - HTML</li>
              <li> - CSS</li>
              <li> - Python</li>
            </ul>
            <ul>
              <li> - Tailwind CSS</li>
              <li> - NoSQL</li>
              <li> - Firebase</li>
              <li> - Flask</li>
              <li> - Amazon Web Services (AWS)</li>
              <li> - Bitbucket</li>
            </ul>
          </div>
         
        </div> */}
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
            Project Overview{" "}
          </p>
          <p>
            RxCloud is an innovative data visualization dashboard I developed to
            provide interactive and real-time visualization of cardio-pulmonary
            health metrics. It’s tailored to interpret data from electronRx’s
            suite of remote health monitoring applications.
          </p>
          <p>
            This platform uniquely displays critical metrics such as the
            FEV1:FVC Ratio, respiratory rate, and vital capacity, among others.
            It's instrumental for healthcare professionals to make informed
            decisions based on respiratory and pulmonary data visualizations,
            including:
          </p>
          <ul className="list-disc ml-8">
            <li>FEV1:FVC Ratio</li>
            <li>Vital Capacity</li>
            <li>Respiratory Rate</li>
            <li>Spirometry Manoeuvres</li>
            <li>Flow Loops</li>
            <li>Heart Rate Variability (HRV) Charts</li>
            <li>Poincaré Plots for Heartbeat Variability</li>
          </ul>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technical Contributions
          </p>
          <p>
            The back end of RxCloud was engineered with a cloud-based data
            processing pipeline for handling large datasets with high
            throughput, reflecting my focus on creating a scalable and efficient
            platform. The use of technologies like Node.js, React, Python, and
            AWS has established a robust and flexible architecture.
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
              <li>Firebase</li>
              <li>Flask</li>
              <li>AWS</li>
            </ul>
          </div>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Visual Preview
          </p>
          <p className="">
            Visual previews and interactive demos of the RxCloud dashboard will
            be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
