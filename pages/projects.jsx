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
    <div className="flex flex-col sm:flex-row justify-between w-full min-h-[100vh] relative">
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
            <a href="/" className="block whitespace-nowrap">
              <p className="hover:italic">home</p>
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

      <div className="w-full sm:w-3/12 gap-8 p-4 sm:py-44 flex flex-col items-start justify-end relative ">
        {/* "hello" text */}
        <h2
          className={`text-7xl sm:text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform sm:absolute  ${
            makeTitleVisible
              ? "visible sm:translate-y-[-200%]"
              : " invisible sm:translate-y-0"
          }`}
        >
          projects.
        </h2>

        <div
          className={`flex flex-col gap-4  text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 sm:translate-y-0"
              : "opacity-0 sm:translate-y-10"
          }`}
        >
          <div className="">
            <p>
              My portfolio includes confidential work across various industries,
              showcasing my expertise in web development, machine learning, and
              cloud technologies.
            </p>
            <p>
              Crafting scalable and secure digital solutions is my forte. I
              welcome dialogue about the broader impact of my work. Let's
              connect!
            </p>
          </div>
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
              <a href="/dr-in-your-pocket" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  Dr in Your Pocket
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx</span>{" "}
            </div>
            <p className="hidden sm:block">
              - Next js Website with Community Forum
            </p>
          </div>

          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/rxcloud" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  RxCloud{" "}
                </p>
              </a>
              <span className="text-xl self-end pb-1">electronRx</span>{" "}
            </div>
            <p className="hidden sm:block">- Node js Web Application</p>
          </div>

          <div className="w-full h-fit flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <a href="/orx-web-applications" className="block group">
                <p className="inline hover:italic hover:translate-x-8 transform transition-transform text-7xl font-font-eb-garamond">
                  oRx Web Application Suite
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
