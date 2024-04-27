import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [makeMainTextVisible, setMakeMainTextVisible] = useState(false);
  const [makeDescriptionVisible, setMakeDescriptionVisible] = useState(false);
  const [makeTitleVisible, setMakeTitleVisible] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => {
      setMakeMainTextVisible(true);
    }, 1500);
    const b = setTimeout(() => {
      setMakeDescriptionVisible(true);
    }, 1000);
    const c = setTimeout(() => {
      setMakeTitleVisible(true);
    }, 500);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);
  return (
    <div className="flex flex-col font-font-eb-garamond sm:flex-row justify-start w-full min-h-[100vh] relative ">
      <div className="w-full px-4 py-3 sm:py-0 sm:px-0   h-fit  flex  flex-row  items-start justify-between text-xl sm:text-xs sm:flex-col sm:w-fit sm:h-[100vh]">
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

          <div className="border border-t border-b-0 border-black w-0 h-32 mb-4 hidden sm:block"></div>
        </div>
        <div className=" flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 hidden sm:flex">
          <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-6/12 p-4  sm:p-44 flex flex-col items-start relative text-zinc-800">
        <h2
          className={`text-8xl sm:text-[20rem] font-monsters p-4 sm:p-0 transition-transform duration-500 absolute ${
            makeTitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
          style={{ top: "2rem" }} // Adjust '2rem' as needed to fit the design
        >
          about.
        </h2>

        {/* Sub-heading description */}
        <div
          className={`text-4xl w-full p-4 sm:p-0 sm:w-3/4 transition-transform duration-500 absolute top-36 sm:top-96 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3>
            I'm Benjamin. A full stack, software and UI/UX engineer based in the
            UK.
          </h3>
        </div>
        <div
          className={`text-xl w-full sm:w-3/4 font-font-grand-slang-roman transition-transform duration-500 absolute flex flex-col gap-8 p-4 pr-8 sm:p-0 sm:pt-4 sm:pb-44 top-80 sm:top-[32rem] ${
            makeMainTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <p className=" ">
            With a strong command over both front-end and back-end technologies
            and a keen focus on creating seamless software solutions, I
            specialise in crafting applications that are as robust under the
            hood as they are intuitive to the user.
          </p>

          <p className=" ">
            The foundational bedrock of my skill set is built upon a rigorous
            Computer Science education at Loughborough University, where I am
            deepening my knowledge and honing my practical expertise.
          </p>
          <p className=" ">
            Currently, I am applying and expanding my skills in a dynamic role
            at electronRx, where I am engaged in developing web applications
            that leverage the power of machine learning to revolutionise the
            healthcare sector. My tenure here is defined by a deep commitment to
            innovation and collaborative success.
          </p>
          <p className=" ">
            If you are looking for a developer with a balanced mix of methodical
            thinking and innovative problem-solving, let's connect and explore
            how my expertise can contribute to the success of your next project.
          </p>
          <p className="text-3xl font-font-eb-garamond">
            Software and Development
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <ul>
              <li> - Node.js</li>
              <li> - Next.js</li>
              <li> - React</li>
              <li> - JavaScript</li>
              <li> - HTML</li>
            </ul>
            <ul>
              <li> - CSS</li>
              <li> - Python</li>
              <li> - Flutter</li>
              <li> - Java</li>
              <li> - SQL</li>
            </ul>
            <ul>
              <li> - Amazon Web Services (AWS)</li>
              <li> - GCP</li>
              <li> - Git</li>
              <li> - Bitbucket</li>
            </ul>
          </div>
          <p className="text-3xl font-font-eb-garamond">Experience</p>
          <div className=" gap-4 w-full">
            <ul>
              <li>
                - Software Engineer @{" "}
                <a
                  href="http://www.electronrx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline hover:italic"
                >
                  electronRx
                </a>
              </li>
              <li> - UK Computer Science BSc @ Loughborough University </li>

              <li>- Freelance Web Development</li>
            </ul>
          </div>
          <p className="text-3xl font-font-eb-garamond">Skills</p>
          <p>
            Web Application Development / Web Development / UI/UX Design / App
            Development / Computer Science / Collaboration / Problem Solving /
            Logical Thinking
          </p>
          <div className=" flex flex-col gap-2">
            <a
              href="/files/Benjamin Druce CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit"
            >
              <button className="w-52 bg-zinc-800 shadow-xl rounded-full text-orange-50 p-8 py-4 font-font-eb-garamond text-2xl transform duration-150 hover:scale-105">
                My CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
