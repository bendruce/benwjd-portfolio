import React from "react";

/**
 * AnimatedBackground Component
 *
 * This component is designed to create a full-screen background overlay with an animation
 * effect that can slide in or out vertically. It is particularly useful for creating
 * transitions or visual effects that involve changing the background of a page or section.
 *
 * Props:
 * - `isVisible` (boolean): Determines whether the background is visible (i.e., slid into view) or not.
 * - `bgColor` (string): The Tailwind CSS background color class to be applied. Defaults to `bg-zinc-800`.
 * - `duration` (number): The duration of the animation in milliseconds. Defaults to 500ms.
 */

function AnimatedBackground({
  isVisible, // Controls the visibility of the background
  bgColor = "bg-zinc-800", // Background color class
  duration = 500, // Animation duration
}) {
  return (
    <div
      className={`absolute inset-0 ${bgColor} transform transition-transform duration-${duration} ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    ></div>
  );
}

export default AnimatedBackground;
