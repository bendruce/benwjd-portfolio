import React from "react";

/**
 * ImageGrid Component
 *
 * This component is designed to display a grid of images, where each image can
 * be clicked to trigger a specified action, such as opening the image in an
 * enlarged view or navigating to a detailed page. The grid layout is responsive
 * and adjusts to different screen sizes, ensuring that the images are presented
 * in a visually appealing manner across devices.
 *
 * Props:
 * - `images` (array): An array of image file names (without the extension) to be
 *   displayed in the grid. These images are expected to be in the `.webp` format.
 * - `onImageClick` (function): A callback function that is invoked when an image
 *   is clicked. The clicked image's file name is passed as an argument to this
 *   function, allowing for dynamic handling of image clicks (e.g., opening the
 *   image in a modal).
 */

export default function ImageGrid({ images, onImageClick }) {
  return (
    // Main container for the image grid
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
      {/* Loop through the images array and render each image */}
      {images.map((imgUrl, index) => (
        <button
          key={index} // Unique key for each image based on its index
          onClick={() => onImageClick(imgUrl)} // Handle image click by calling onImageClick with the image's file name
          className="relative w-full flex items-start"
        >
          <img
            className="rounded-md w-full h-fit" // Image styling: rounded corners, full width, auto height
            src={`/images/${imgUrl}.webp`} // Construct the image source path dynamically
            alt={imgUrl} // Set the alt attribute to the image file name for accessibility
          />
        </button>
      ))}
    </div>
  );
}
