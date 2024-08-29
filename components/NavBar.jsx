import React from "react";

/**
 * NavBar Component
 *
 * This component is designed to provide a reusable and flexible navigation bar
 * that can be adapted to different layouts and design requirements. It supports
 * horizontal and vertical orientations, dynamic link generation, and customizable
 * colors for text and borders. This is particularly useful for creating consistent
 * navigation across various pages of an application while maintaining the ability
 * to tweak styles for specific use cases.
 *
 * Props:
 * - `name` (string): The name or title displayed at the top or side of the navigation.
 *   Defaults to "BENJAMIN DRUCE".
 * - `links` (array): An array of objects, where each object represents a navigation link
 *   with `href` and `label` properties.
 * - `mainLink` (string): The URL that the main name/title will link to. Defaults to "/".
 * - `bgColor` (string): Background color for the navigation bar. Defaults to "bg-transparent".
 * - `textColor` (string): Text color for the navigation links and name/title. Defaults to "text-orange-50".
 * - `borderColor` (string): Border color for the vertical divider between links. Defaults to "border-orange-50".
 */

export default function NavBar({
  name = "BENJAMIN DRUCE", // Default name/title
  links = [], // Default to an empty array if no links are provided
  mainLink = "/", // Default main link
  bgColor = "bg-transparent", // Background color for the nav bar
  textColor = "text-orange-50", // Text color for the links and name
  borderColor = "border-orange-50", // Border color for the vertical divider
}) {
  return (
    // Main container for the navigation bar
    <div
      className={`w-full px-4 py-3 sm:py-0 sm:px-0 h-fit flex flex-row items-start justify-between text-xl sm:text-xs ${textColor} sm:flex-col sm:w-fit sm:h-[100vh]`}
    >
      {/* Top section for the name/title (visible only on small screens) */}
      <div className="flex-col w-fit sm:w-full h-fit sm:h-2/4 items-end justify-end sm:pb-12 flex sm:hidden">
        <div className="flex items-center w-fit sm:w-12 h-fit sm:h-1/3 justify-center transform sm:-rotate-90">
          <a href={mainLink} className="block whitespace-nowrap">
            <p className="hover:italic">{name}</p>
          </a>
        </div>
      </div>

      {/* Middle section for navigation links */}
      <div className="flex gap-4 flex-row sm:flex-col w-fit sm:w-12 h-full sm:h-2/4 items-center justify-center">
        {/* Dynamically render each link provided in the `links` array */}
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
        {/* Vertical divider (visible only on small screens) */}
        <div
          className={`border border-t border-b-0 ${borderColor} z-50 w-0 h-32 mb-4 hidden sm:block`}
        ></div>
      </div>

      {/* Bottom section for the name/title (visible only on large screens) */}
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
