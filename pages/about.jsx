import NavBar from "../components/NavBar";
import useVisibilityDelays from "../hooks/useVisibilityDelays";

export default function Page() {
  const { bgFinished, makeDescriptionVisible, makeTitleVisible } =
    useVisibilityDelays();

  return (
    <div className="flex flex-col font-font-eb-garamond sm:flex-row justify-start w-full min-h-[100vh] relative ">
      <NavBar
        links={[{ href: "/", label: "home" }]}
        textColor="text-black"
        borderColor="border-black"
      />
      <div className="w-full sm:w-6/12 p-4 sm:p-44 flex flex-col items-start relative text-zinc-800">
        <h2
          className={`text-8xl sm:text-[14rem] lg:text-[16rem] xl:text-[20rem] font-monsters p-4 sm:p-0 transition-transform duration-500 absolute ${
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
          className={`text-3xl lg:text-4xl w-full p-4 sm:p-0 xl:w-3/4 transition-transform duration-500 absolute top-36 sm:top-96 ${
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

        {/* Main content */}
        <div
          className={`text-xl w-full xl:w-3/4 font-font-grand-slang-roman transition-transform duration-500 absolute flex flex-col gap-8 p-4 pr-8 sm:p-0 sm:pt-4 sm:pb-44 top-80 sm:top-[32rem] ${
            bgFinished
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <p>
            With a strong command over both front-end and back-end technologies
            and a keen focus on creating seamless software solutions, I
            specialise in crafting applications that are as robust under the
            hood as they are intuitive to the user.
          </p>

          <p>
            The foundational bedrock of my skill set is built upon a rigorous
            Computer Science education at Loughborough University, where I am
            deepening my knowledge and honing my practical expertise.
          </p>
          <p>
            Currently, I am applying and expanding my skills in a dynamic role
            at electronRx, where I am engaged in developing web applications
            that leverage the power of machine learning to revolutionise the
            healthcare sector. My tenure here is defined by a deep commitment to
            innovation and collaborative success.
          </p>

          {/* New Aspirations Section */}
          <p className="text-3xl font-font-eb-garamond">Aspirations</p>
          <p>
            My ultimate goal is to run my own tech-based startup, where I can
            drive innovation and create impactful solutions. To achieve this, I
            am focused on gaining extensive technical experience at this stage
            of my career, as I believe a strong technical foundation is crucial
            for leading a successful tech company.
          </p>
          <p>
            Additionally, I am eager to take on more managerial responsibilities
            and deepen my expertise in product development from a technical
            perspective. I see this as a natural progression that will equip me
            with the skills needed to effectively lead a team, manage projects,
            and bring innovative products to market.
          </p>

          {/* New Health Tech Experience Section */}
          <p className="text-3xl font-font-eb-garamond">
            Impact in Health Tech
          </p>
          <p>
            During my year at electronRx, a health tech startup, I've found
            immense satisfaction in working on projects that have the potential
            to touch and improve people's lives. Being part of a team that
            builds technology aimed at enhancing healthcare has been incredibly
            rewarding.
          </p>
          <p>
            Discussing the tangible impact our technical products can have on
            improving health outcomes and quality of life has only deepened my
            passion for the intersection of technology and healthcare. It's an
            area where I see a great opportunity to make a real difference, and
            it's driven me to contribute even more to projects that have a
            meaningful impact on society.
          </p>

          <p>
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
