import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  //closes dropdown when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (dropdownVisible) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownVisible]);

  //loads in the name, description arrow incrementally
  useEffect(() => {
    setIsLoaded(true);
    const a = setTimeout(() => {
      setIsNameVisible(true);
    }, 1000);
    const b = setTimeout(() => {
      setIsTitleVisible(true);
    }, 2000);
    const c = setTimeout(() => {
      setIsArrowVisible(true);
    }, 3000);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);

  //checks if the arrow has been loaded at the start before the breathing animation starts
  useEffect(() => {
    if (isArrowVisible) {
      setIsLoaded(true);
    }
  }, [isArrowVisible]);

  //closes dropdown when the user clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        event.target !== buttonRef.current
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  function toggleDropdown() {
    setDropdownVisible((prevState) => !prevState);
  }

  return (
    <>
      <div className="topnav-dropdown-container fixed w-full  flex flex-col justify-between z-50 bg-[rgba(0,0,0,.5)]">
        <div className="topNavBar flex flex-row justify-between w-full  h-[7.5vh] items-center p-3 sm:p-8 ">
          <Link href="#title">
            <h1 className="my-name w-fit text-sm md:text-sm lg:text-xl xl:text-4xl  font-font-custom-1 text-topnav-font">
              Benjamin W J Druce
            </h1>
          </Link>
          <div className="dropdown-container">
            <button
              onClick={toggleDropdown}
              className="hamburger-menu flex flex-col  justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 sm:hidden"
              ref={buttonRef}
            >
              <span className="hamburger-line w-full h-0.5 bg-custom-main"></span>
              <span className="hamburger-line w-full h-0.5 bg-custom-main"></span>
              <span className="hamburger-line w-full h-0.5 bg-custom-main"></span>
            </button>
          </div>
          <div className="link-container w-fit hidden sm:flex flex-row justify-between gap-12 text-light-text">
            <Link
              href="/#expertise"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// expertise</p>
            </Link>

            <Link
              href="/#projects"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// projects</p>
            </Link>
            <Link
              href="/#contact-me"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// contactMe</p>
            </Link>
          </div>
        </div>
        {dropdownVisible && (
          <div
            className="dropdown-container flex flex-col justify-between w-full h-fit p-5 gap-5 text-light-text"
            ref={dropdownRef}
          >
            <Link
              href="/#expertise"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// expertise</p>
            </Link>
            <Link
              href="/#employment"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// employment</p>
            </Link>
            <Link
              href="/#projects"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// projects</p>
            </Link>
            <Link
              href="/#contact-me"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// contactMe</p>
            </Link>
          </div>
        )}
      </div>
      <div
        id="title"
        className={`title flex flex-col p-4 sm:p-12 w-full bg-gradient-to-b from-background-dark1 to-background-dark6 h-[100vh] -mb-px items-center justify-center gap-3 
    transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`font-bold text-3xl sm:text-3xl  lg:text-8xl  text-center transition-opacity duration-1000 text-light-text ${
            isNameVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1>Benjamin Druce</h1>
        </div>
        <div
          className={` text-xl sm:text-2xl  lg:text-5xl text-center transition-opacity duration-1000 text-light-text ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1>Software Engineer</h1>
        </div>
        <div className=" pt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[10vw] h-[10vh] fill-white ${
              isArrowVisible ? "arrow-animate-breathe opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        id="expertise"
        className={`expertise flex flex-col sm:flex-row gap-4 sm:gap-12 p-4 sm:p-20 h-fit sm:h-[100vh] w-full bg-gradient-to-b from-background-dark6 to-background-dark2  items-center text-white
  transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="text-gray-800 w-full flex flex-col opacity-90 bg-gradient-to-bl from-custom-main via-cyan-300 to-purple-300 rounded-xl p-4 gap-4 lg:h-64">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className=" text-xl sm:text-4xl">Software Development</h2>
            </div>
            <div className="h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 fill-gray-800"
                viewBox="0 -960 960 960"
              >
                <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140zm0-60h680v-436H140v436zm160-72l-42-42 103-104-104-104 43-42 146 146-146 146zm190 4v-60h220v60H490z"></path>
              </svg>
            </div>
          </div>
          <div className="">
            <div>
              <h2>
                Experienced in both functional and OOP. Passionate about UI/UX.
              </h2>
            </div>
          </div>
        </div>
        <div className="text-gray-800 w-full flex flex-col opacity-90 bg-gradient-to-tr from-custom-main via-blue-300 to-violet-400 rounded-xl p-4 gap-4 lg:h-64">
          <div className=" flex flex-row justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-4xl">Languages</h2>
            </div>
            <div className="h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 fill-gray-800"
                viewBox="0 -960 960 960"
              >
                <path d="M320-242L80-482l242-242 43 43-199 199 197 197-43 43zm318 2l-43-43 199-199-197-197 43-43 240 240-242 242z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2>
                Experienced in a variety of coding languages. Including but not
                limited to:
              </h2>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <ul>
                  <li>- React</li>
                  <li>- Flutter</li>
                  <li>- Dart</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>- Next.js</li>
                  <li>- SQL</li>
                  <li>- Python</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>- Java</li>
                  <li>- JavaScript</li>
                  <li>- HTML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-800 w-full flex flex-col opacity-90 bg-gradient-to-br from-red-200 via-blue-400 to-custom-main rounded-xl p-4 gap-4 lg:h-64">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-4xl">Computer Science</h2>
            </div>
            <div className="h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 fill-gray-800"
                viewBox="0 -960 960 960"
              >
                <path d="M479-120L189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120zm0-308l315-172-315-169-313 169 313 172zm0 240l230-127v-168L479-360 249-485v170l230 127zm1-240zm-1 74zm0 0z"></path>
              </svg>
            </div>
          </div>
          <div className="">
            <div>
              <h2>
                Second Year Computer Science BSc student at Loughborough
                University. Second year completed with a 2:1
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className={`employment flex flex-col justify-center p-3 sm:p-12 w-full bg-gradient-to-b from-background-dark2 to-background-dark6 min-h-[100vh] h-fit -mb-px items-center gap-4 sm:gap-8 
    transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className=" w-full flex flex-col opacity-90 bg-neutral-950 rounded-xl overflow-hidden">
          <div className="w-full  bg-red-500  flex flex-col items-start relative ">
            <Image
              src={"/images/movement-clinics.png"}
              width={2880}
              height={1648}
              className="object-cover h-full w-full"
              alt="Movement Clinics"
            ></Image>
          </div>
          <div className="p-4 flex flex-col ">
            <div className=" text-white font-bold text-2xl">
              <h2>Movement Clinics</h2>
            </div>
            <div className=" text-white ">
              <h2>
                Creating a bespoke website for a sports therapy clinic using
                Next.js and React. This project involves using AWS for hosting,
                Stripe for payments, 20+ custom APIs and a custom booking system
                using SQL.
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col opacity-90 bg-neutral-950 rounded-xl overflow-hidden">
          <div className="w-full  bg-red-500  flex flex-col items-start relative ">
            <Image
              src={"/images/Sigma.png"}
              width={1380}
              height={814}
              className="object-cover h-full w-full"
              alt="Sigma Workout App"
            ></Image>
          </div>
          <div className="p-4 flex flex-col ">
            <div className=" text-white font-bold text-2xl">
              <h2>Workout Tracker</h2>
            </div>
            <div className=" text-white ">
              <h2>
                Built a workout tracker app in Java using Android Studio and a
                Firebase Database for an app development module during year two
                of University.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact-me"
        className="contact-me h-fit w-full flex flex-col bg-gradient-to-b from-background-dark6 to-background-dark3 p-4 sm:p-12 items-center gap-24 sm:gap-48"
      >
        <h1 className="pt-24 text-6xl sm:text-9xl text-center font-bold text-topnav-font">
          Avaliable for hire
        </h1>
        <div className="work flex flex-col h-fit w-full gap-5 sm:gap-12  items-center p-4">
          <h1 className="text-light-text text-center text-2xl sm:text-4xl">
            Seeking software engineering projects that challenge and inspire
          </h1>
          <h1 className="text-light-text text-center text-2xl sm:text-4xl">
            Contact me to explore how my expertise can benefit your initiatives
          </h1>

          <div className="fancy">
            <span className="top-key"></span>
            <span className="text">
              <a href="mailto:hello@benwjd.com?subject=Software%20Opportunity">
                hello@benwjd.com
              </a>
            </span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </div>
        </div>
      </div>
      <div className="footer w-full h-fit bg-gray-950 flex flex-col sm:flex-row text-light-text p-3 items-center justify-between sm:px-12">
        <h1>Built from Scratch by Me</h1>
        <a
          href="/files/Benjamin Druce CV.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <span className="button_lg">
            <span className="button_text">Download My CV</span>
          </span>
        </a>
      </div>
    </>
  );
}

{
  /* <div
        id="employment"
        className={`employment flex flex-col justify-center p-3 sm:p-12 w-full bg-gradient-to-b from-background-dark2 to-background-dark4 min-h-[100vh] h-fit -mb-px items-center gap-4 sm:gap-8 
    transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main p-4 sm:p-8 rounded-xl flex flex-row justify-between">
          <h1 className="text-light-text text-xl sm:text-4xl">
            Machine operator @ GT Bunning & Sons
          </h1>
          <button
            className="flex items-center justify-center"
            onClick={toggleOpenEmploymentBunning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-10"
              viewBox="0 0 12 12"
            >
              <path
                fill="#F7F7F7"
                fillRule="evenodd"
                d="M6 0a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {openEmploymentBunning && (
          <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main-darker p-4 sm:p-8 rounded-xl flex flex-col gap-8">
            <div className="row1 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="location flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M6 16s6-5.686 6-10A6 6 0 100 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  Gressenhall, UK
                </h1>
              </div>
              <div className="date flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  07-22 to 09-22
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-light-text text-lg sm:text-xl ">
                Worked within multiple teams on the production line to
                manufacture parts used to create agricultural and industrial
                machinery for a company with a turnover of £17 million in 2021.
              </h1>
            </div>
          </div>
        )}
        <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main p-4 sm:p-8 rounded-xl flex flex-row justify-between">
          <h1 className="text-light-text text-xl sm:text-4xl">
            Bartender @ Dial House
          </h1>
          <button
            className="flex items-center justify-center"
            onClick={toggleOpenEmploymentDH}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-10"
              viewBox="0 0 12 12"
            >
              <path
                fill="#F7F7F7"
                fillRule="evenodd"
                d="M6 0a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {openEmploymentDH && (
          <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main-darker p-4 sm:p-8 rounded-xl flex flex-col gap-8">
            <div className="row1 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="location flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M6 16s6-5.686 6-10A6 6 0 100 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  Reepham, UK
                </h1>
              </div>

              <div className="date flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  07-20 to 09-21
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-light-text text-lg sm:text-xl ">
                Worked as a bartender within a front of house team, engaging
                with customers whilst creating and serving their drinks.
              </h1>
            </div>
          </div>
        )}
      </div> */
}
