import React from "react";

export default function ImageGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
      {images.map((imgUrl, index) => (
        <button
          key={index}
          onClick={() => onImageClick(imgUrl)}
          className="relative w-full flex items-start "
        >
          <img
            className=" rounded-md w-full h-fit"
            src={`/images/${imgUrl}.webp`}
            alt={imgUrl}
          />
        </button>
      ))}
    </div>
  );
}
