import React, { useRef } from "react";
import useOutsideClick from "../utils/useOutsideClick";

export default function EnlargedImage({ imageUrl, onClose }) {
  const enlargedImageRef = useRef(null);

  useOutsideClick(enlargedImageRef, onClose);

  return (
    <div className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
      <button
        className="absolute right-8 top-8 text-2xl text-orange-50 flex flex-row gap-1"
        onClick={() => onClose(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-orange-50"
          viewBox="0 -960 960 960"
        >
          <path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"></path>
        </svg>{" "}
        Close
      </button>
      <img
        ref={enlargedImageRef}
        className="rounded-md h-2/3 shadow-xl"
        src={`/images/${imageUrl}.webp`}
        alt={imageUrl}
      />
    </div>
  );
}
