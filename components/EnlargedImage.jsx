import React, { useRef } from "react";
import useOutsideClick from "../utils/useOutsideClick";

/**
 * EnlargedImage Component
 *
 * This component is designed to display an enlarged version of an image, typically
 * as part of a modal or lightbox effect. The image is centered on the screen with
 * a semi-transparent background overlay, allowing users to focus on the image. The
 * component also includes a "Close" button to dismiss the enlarged image, and it
 * listens for clicks outside the image area to close the modal automatically.
 *
 * Props:
 * - `imageUrl` (string): The file name of the image to be displayed, without the
 *   path or extension. It is assumed that the image is in `.webp` format and is
 *   located in the `/images/` directory.
 * - `onClose` (function): A callback function that is called when the enlarged image
 *   is closed. Typically, this function will update the state in the parent component
 *   to hide the `EnlargedImage` component.
 */

export default function EnlargedImage({ imageUrl, onClose }) {
  // Reference to the image element, used to detect outside clicks
  const enlargedImageRef = useRef(null);

  // Custom hook that triggers the onClose callback if a click occurs outside the image
  useOutsideClick(enlargedImageRef, onClose);

  return (
    // Main container for the enlarged image, with a semi-transparent background overlay
    <div className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
      {/* Close button to manually close the enlarged image */}
      <button
        className="absolute right-8 top-8 text-2xl text-orange-50 flex flex-row gap-1"
        onClick={() => onClose(null)} // Calls the onClose function to close the modal
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

      {/* Display the enlarged image */}
      <img
        ref={enlargedImageRef} // Attach the ref to the image element for outside click detection
        className="rounded-md h-2/3 shadow-xl" // Style the image with rounded corners and a shadow
        src={`/images/${imageUrl}.webp`} // Dynamically set the image source based on the passed imageUrl prop
        alt={imageUrl} // Set the alt attribute to the image file name for accessibility
      />
    </div>
  );
}
