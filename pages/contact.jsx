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
    <div className="flex flex-col sm:flex-row justify-between w-full h-[100vh] ">
      <div
        className={`absolute inset-0 bg-zinc-800 transform transition-transform duration-500 ${
          bgFinished ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>

      {/* <div className="w-1/24 h-screen flex flex-col items-start justify-between overflow-hidden text-orange-50">
        <div className="flex flex-col w-12 h-2/4 items-center justify-center ">
          <div className="w-full h-1/4 flex items-center justify-center transform -rotate-90 ">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">home</h3>
            </a>
          </div>

          <div className="border border-t border-b-0 border-orange-50 w-0 h-32 mb-4 z-50"></div>
        </div>
        <div className="flex flex-col w-full h-2/4 items-end justify-end pb-12">
          <div className="flex items-center w-12 h-1/3 justify-center transform -rotate-90">
            <a href="/" className="block whitespace-nowrap">
              <h3 className="hover:italic">BENJAMIN DRUCE</h3>
            </a>
          </div>
        </div>
      </div> */}
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
      <div className="w-3/12 py-44 flex flex-col items-start justify-end relative ">
        {/* "hello" text */}
        <h2
          className={`text-9xl px-4 font-font-eb-garamond text-orange-50 transition-transform duration-500 transform absolute ${
            makeTitleVisible
              ? "visible translate-y-[-150%]"
              : " invisible translate-y-0"
          }`}
        >
          hello.
        </h2>

        {/* Description */}
        <div
          className={`flex flex-col gap-4 p-4 text-orange-50 z-50 bg-zinc-800 transition-all duration-500 ${
            makeDescriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="">
            <h3>Lets build something amazing together. Get in touch.</h3>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="w-full h-fit flex flex-row gap-2">
              <p>Email: </p>
              <a
                href="mailto:hello@benwjd.com?subject=Software%20Opportunity"
                className="underline hover:no-underline hover:italic"
              >
                hello@benwjd.com
              </a>
            </div>
            <div className="w-full h-fit flex flex-row gap-2">
              <p>.com: </p>
              <a
                href="https://linkedin.com/in/benjamindruce"
                className="underline hover:no-underline hover:italic"
              >
                LinkedIn
              </a>
              <p> / </p>
              <a
                href="https://github.com/bendruce"
                className="underline hover:no-underline hover:italic"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-7/12 flex flex-col py-40 justify-end text-9xl font-font-eb-garamond "></div>
    </div>
  );
}
