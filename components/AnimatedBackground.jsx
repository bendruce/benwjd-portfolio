import React from "react";

function AnimatedBackground({
  isVisible,
  bgColor = "bg-zinc-800",
  duration = 500,
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
