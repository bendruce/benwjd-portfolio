import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [bgFinished, setBgFinished] = useState(false);
  const [makeDescriptionVisible, setMakeDescriptionVisible] = useState(false);
  const [makeTitleVisible, setMakeTitleVisible] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => {
      setBgFinished(true);
    }, 500);
    const b = setTimeout(() => {
      setMakeDescriptionVisible(true);
    }, 1000);
    const c = setTimeout(() => {
      setMakeTitleVisible(true);
    }, 1500);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full min-h-[100vh] h-fit ">
      <div
        className={`absolute inset-0 bg-zinc-800 transform transition-transform duration-500 ${
          bgFinished ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>

      <div className="text-orange-50 w-full px-4 py-3 sm:py-0 sm:px-0   h-fit  flex  flex-row  items-start justify-between text-xl sm:text-xs sm:flex-col sm:w-fit sm:h-[100vh]">
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 flex sm:hidden">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
        <div className="flex gap-4 flex-row sm:flex-col w-fit sm:w-12 h-full sm:h-2/4 items-center justify-center ">
          <div className="w-fit h-fit sm:w-full sm:h-1/4 flex items-center justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">home</h3>
            </a>
          </div>

          <div className="border border-t border-b-0 border-orange-50 z-50 w-0 h-32 mb-4 hidden sm:block"></div>
        </div>
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 hidden sm:flex">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/12  pt-44 sm:py-44 px-4 sm:px-0 flex flex-col items-start justify-end relative  ">
        {/* "hello" text */}
        <h2
          className={`text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform absolute ${
            makeTitleVisible
              ? "visible translate-y-[-100%]"
              : " invisible translate-y-0"
          }`}
        >
          CV.
        </h2>

        {/* Description */}
        <div
          className={`flex flex-col gap-8 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="">
            <p>View my CV or download below.</p>
          </div>
          <div className=" flex flex-col gap-2">
            <a
              href="/files/Benjamin Druce CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit"
            >
              <button className=" whitespace-nowrap w-fit bg-orange-50 shadow-xl rounded-full text-zinc-800 p-8 py-4 font-font-eb-garamond text-2xl transform duration-150 hover:scale-105">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="h-fit sm:h-[100vh] w-full sm:w-7/12 flex flex-col sm:py-12  sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto ">
        <div
          className={`flex flex-col h-fit gap-4 text-orange-50 z-50 bg-zinc-800 p-4 transition-all duration-500 ${
            makeDescriptionVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <div className="flex flex-col items-center text-orange-50 gap-2 h-fit">
            <h2 className="text-2xl">BENJAMIN DRUCE</h2>
            <div className="flex flex-row flex-wrap text-sm gap-2 items-center text-center justify-center">
              <a
                href="http://benwjd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline hover:italic"
              >
                benwjd.com
              </a>
              <p>|</p>
              <a
                href="mailto:hello@benwjd.com?subject=Software%20Opportunity"
                className="underline hover:no-underline hover:italic"
              >
                hello@benwjd.com
              </a>
              <p>| +44 7555 793351 |</p>
              <a
                href="https://linkedin.com/in/benjamindruce"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline hover:italic"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full h-fit text-left  gap-2">
            <p className="text-xl font-bold underline">
              Programming and Developmemt
            </p>
            <div className="text-sm">
              <p>
                Node.js | Next.js | React | JavaScript | HTML | CSS | Python |
                Flutter | Java | SQL | NoSQL
              </p>
              <p>Amazon Web Services (AWS) | GCP | Git | Bitbucket </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit text-left  gap-2">
            <p className="text-xl font-bold underline">Education</p>
            <div className="text-sm">
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <p className="font-bold">Loughborough University </p>
                </div>
                <p> Oct 2021 - Sept 2025</p>
              </div>
              <p className="ml-8"> - UK Computer Science BSc</p>

              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <p className="font-bold">Reepham Sixth Form College </p>
                </div>
                <p> Sept 2019 - Jun 2021</p>
              </div>
              <p className="ml-8">
                - Physics (A), Maths (A), Computer Science (B)
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit text-left  gap-2">
            <p className="text-xl font-bold underline">Work Experience</p>
            <div className="text-sm">
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <h4 className="font-bold">Full Stack Engineer Placement </h4>
                  <p>electronRx</p>
                </div>
                <p>July 2023 - Present</p>
              </div>

              <ul className="ml-8">
                <li>
                  - Web Application Development: Spearheaded the design and
                  development of several diagnostic, analytical and
                  visualisation web applications, ensuring seamless user
                  experience and functionality.
                </li>
                <li>
                  - Machine Learning Integration: Successfully integrated
                  Python-based ML models into cloud services, converting them
                  into microservices for improved scalability and functionality.
                </li>
                <li>
                  - Cloud Deployment: Utilised AWS for deploying web apps and
                  microservices, ensuring optimised performance and security.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit text-left  gap-2">
            <p className="text-xl font-bold underline">Projects</p>
            <div className="text-sm">
              <div className="flex flex-row gap-2">
                <p className="font-bold">
                  ML Integrated Web Applications electronRx, Oxcitas
                </p>
                <p>electronRx, Oxcitas</p>
              </div>
              <ul className="ml-8">
                <li>
                  - Developed a suite of full-stack web applications leveraging
                  Machine Learning models, each with a specialized dashboard and
                  cloud-based microservice architecture. Key applications
                  include:
                  <ul className="ml-8">
                    <li>
                      - Dementia and brain age diagnostic tool using MRI
                      analysis.
                    </li>
                    <li>
                      - Ten-year mortality risk calculator for insurance,
                      presented to and recognized by Swiss Re.
                    </li>
                    <li>
                      - Biological age estimator based on blood biomarkers.
                    </li>
                  </ul>
                </li>
                <li>
                  - Managed the transition of Python ML models into
                  microservices, streamlining scalability.
                </li>
                <li>
                  - Collaborated with a team of machine learning specialists
                  from Oxcitas to enhance model performance and integration.
                </li>
                <li>
                  - Node.js | React | Next.js | Python | Tailwind CSS | SQL |
                  AWS
                </li>
              </ul>
              <div className="flex flex-row gap-2">
                <p className="font-bold">RxCloud Data Visualisation Platform</p>
                <p>electronRx</p>
              </div>
              <ul className="ml-8">
                <li>
                  - Engineered a robust data visualization web application to
                  interface with a Software as a Medical Device mobile
                  application, facilitating real-time result streams.
                </li>
                <li>
                  - Orchestrated the development of a comprehensive cloud-based
                  data processing pipeline, originally conceptualized by
                  electronRx's data science team, to ensure seamless data flow
                  from patient recordings to processed outputs.
                </li>
                <li>
                  - Designed and implemented a bespoke visualization platform to
                  provide insightful analytics, enhancing the value chain from
                  data acquisition to decision-making.
                </li>
                <li>
                  - Node.js | React | Next.js | Python | Tailwind CSS | SQL |
                  AWS | GCP (Firebase){" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit text-left  gap-2">
            <p className="text-xl font-bold underline">Key Strengths</p>
            <div className="text-sm">
              <ul className="ml-8">
                <li>- Collaboration</li>
                <li>- Rapid learning and adaptability</li>
                <li>Proactive nature</li>
                <li>- Logical thinking/problem solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
