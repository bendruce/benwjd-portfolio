import React from "react";

export default function NavBar({
  name = "BENJAMIN DRUCE",
  links = [],
  mainLink = "/",
  bgColor = "bg-transparent",
  textColor = "text-orange-50",
  borderColor = "border-orange-50",
}) {
  return (
    <div
      className={`w-full px-4 py-3 sm:py-0 sm:px-0 h-fit flex flex-row items-start justify-between text-xl sm:text-xs ${textColor} sm:flex-col sm:w-fit sm:h-[100vh]`}
    >
      <div className="flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 flex sm:hidden">
        <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
          <a href={mainLink} className="block whitespace-nowrap">
            <p className="hover:italic">{name}</p>
          </a>
        </div>
      </div>
      <div className="flex gap-4 flex-row sm:flex-col w-fit sm:w-12 h-full sm:h-2/4 items-center justify-center">
        {links.map((link, index) => (
          <div
            key={index}
            className="w-fit h-fit sm:w-full sm:h-1/4 flex items-center justify-center transform sm:-rotate-90"
          >
            <a href={link.href} className="block whitespace-nowrap">
              <p className="hover:italic">{link.label}</p>
            </a>
          </div>
        ))}
        <div
          className={`border border-t border-b-0 ${borderColor} z-50 w-0 h-32 mb-4 hidden sm:block`}
        ></div>
      </div>
      <div className="flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 hidden sm:flex">
        <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
          <a href={mainLink} className="block whitespace-nowrap">
            <p className="hover:italic">{name}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
