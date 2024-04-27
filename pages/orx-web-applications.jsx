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
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] relative">
      <div
        className={`absolute inset-0 bg-zinc-800 min-w-[100vw] transform transition-transform duration-500 ${
          bgFinished ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>

      <div className="w-full px-4 py-3 sm:py-0 sm:px-0   h-fit  flex  flex-row  items-start justify-between text-xl sm:text-xs text-orange-50 sm:flex-col sm:w-fit sm:h-[100vh]">
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 flex sm:hidden">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <p className="hover:italic">BENJAMIN DRUCE</p>
            </a>
          </div>
        </div>
        <div className="flex gap-4 flex-row sm:flex-col w-fit sm:w-12 h-full sm:h-2/4 items-center justify-center ">
          <div className="w-fit h-fit sm:w-full sm:h-1/4 flex items-center justify-center transform sm:-rotate-90">
            <a href="/projects" className="block whitespace-nowrap">
              <p className="hover:italic">projects</p>
            </a>
          </div>

          <div className="border border-t border-b-0 border-orange-50 z-50 w-0 h-32 mb-4 hidden sm:block"></div>
        </div>
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 hidden sm:flex">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <p className="hover:italic">BENJAMIN DRUCE</p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-3/12 p-4 sm:py-44 flex flex-col items-start justify-end relative ">
        <h2
          className={`text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute  ${
            makeTitleVisible
              ? "visible sm:translate-y-[-100%]"
              : " invisible sm:translate-y-0"
          }`}
        >
          oRx Suite
        </h2>

        <div
          className={`flex flex-col gap-4  text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* <div className="flex flex-row  gap-4 w-full ">
            <ul>
              <li> - Node.js</li>
              <li> - React</li>
              <li> - JavaScript</li>
              <li> - CSS</li>
              <li> - Tailwind CSS</li>
            </ul>
            <ul>
              <li> - Python</li>
              <li> - Flask</li>
              <li> - Amazon Web Services (AWS)</li>
              <li> - Bitbucket</li>
            </ul>
          </div> */}
          {/* <div className=" flex flex-col gap-2">
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
          </div> */}
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
            At the intersection of technology and healthcare, I developed a
            suite of full-stack web applications leveraging advanced Machine
            Learning (ML) models to explore and quantify aspects of aging. These
            applications, characterised by specialised dashboards and
            microservice architectures, empower users with predictive insights
            into brain aging, biological age, and long-term mortality risk.
          </p>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Key Applications
          </p>
          <ul className="list-disc ml-8">
            <li>
              A diagnostic tool that utilizes MRI analysis to assess dementia
              and estimate brain age.
            </li>
            <li>
              A ten-year mortality risk calculator designed for the insurance
              industry and recognised by Swiss Re.
            </li>
            <li>
              An estimator that calculates biological age based on blood
              biomarker analysis.
            </li>
          </ul>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technical Contributions
          </p>
          <p>
            My role encompassed transitioning Python ML models into
            microservices, enhancing scalability and reliability. I collaborated
            closely with Oxcitas's team of machine learning experts to refine
            model performance and ensure seamless integration into the web
            ecosystem.
          </p>
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Technology Stack{" "}
          </p>
          <div className="flex flex-row gap-8 w-full">
            <ul className="list-disc ml-8">
              <li> - Node.js</li>
              <li> - React</li>
              <li> - Next.js</li>
              <li> - Python</li>
            </ul>
            <ul className="list-disc ml-8">
              <li> - SQL</li>
              <li> - Tailwind CSS</li>
              <li> - AWS</li>
              <li> - Microservices</li>
            </ul>
          </div>
          {/* Future section for images or links to the application if available */}
          <p className="font-font-eb-garamond text-3xl font-semibold">
            Visual Preview
          </p>
          <p>Images and interactive demos coming soon.</p>
        </div>
      </div>
    </div>
  );
}
