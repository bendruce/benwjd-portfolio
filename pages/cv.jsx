import AnimatedBackground from "../components/AnimatedBackground";
import CV from "../components/CV";
import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays"; // Adjust the path as needed

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full min-h-[100vh] h-fit ">
      <AnimatedBackground
        isVisible={bgFinished}
        bgColor="bg-zinc-800"
        duration={500}
      />

      <NavBar links={[{ href: "/", label: "home" }]} />

      <div className="w-full sm:w-3/12 pt-44 sm:py-44 px-4 sm:px-0 flex flex-col items-start justify-end relative">
        <h2
          className={`text-9xl font-font-eb-garamond text-orange-50 transition-transform duration-500 transform absolute ${
            makeTitleVisible
              ? "visible translate-y-[-100%]"
              : " invisible translate-y-0"
          }`}
        >
          CV.
        </h2>

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
          <div className="flex flex-col gap-2">
            <a
              href="/files/Benjamin Druce CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit"
            >
              <button className="whitespace-nowrap w-fit bg-orange-50 shadow-xl rounded-full text-zinc-800 p-8 py-4 font-font-eb-garamond text-2xl transform duration-150 hover:scale-105">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <CV isVisible={makeDescriptionVisible} />
    </div>
  );
}
