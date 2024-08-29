/**
 * useVisibilityDelays is a custom React hook designed to sequentially trigger visibility states
 * for different UI components with specified delays. This is particularly useful for creating
 * animations or timed appearances of elements in a UI, such as background, description, and title
 * elements, enhancing the user experience with a smooth, staged reveal.
 *
 * The hook manages three states:
 *
 * 1. `bgFinished`: Indicates when the background has finished its transition or is ready to be displayed.
 * 2. `makeDescriptionVisible`: Controls the visibility of the description element.
 * 3. `makeTitleVisible`: Controls the visibility of the title element.
 *
 * How it works:
 *
 * - When the component using this hook mounts, three `setTimeout` functions are triggered, each
 *   with a different delay to update the respective state.
 * - The delays are:
 *   - 500ms for the background (`bgFinished`)
 *   - 1000ms for the description (`makeDescriptionVisible`)
 *   - 1500ms for the title (`makeTitleVisible`)
 * - The hook returns the three states, which can be used to control the visibility of UI components
 *   based on these time delays.
 * - The cleanup function ensures that the timeouts are cleared if the component unmounts before
 *   the timeouts have completed, preventing potential memory leaks.
 */

import { useState, useEffect } from "react";

function useVisibilityDelays() {
  // State to track when the background has finished its transition.
  const [bgFinished, setBgFinished] = useState(false);

  // State to control the visibility of the description element.
  const [makeDescriptionVisible, setMakeDescriptionVisible] = useState(false);

  // State to control the visibility of the title element.
  const [makeTitleVisible, setMakeTitleVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger `bgFinished` after 500ms.
    const a = setTimeout(() => {
      setBgFinished(true);
    }, 500);

    // Set a timeout to trigger `makeDescriptionVisible` after 1000ms.
    const b = setTimeout(() => {
      setMakeDescriptionVisible(true);
    }, 1000);

    // Set a timeout to trigger `makeTitleVisible` after 1500ms.
    const c = setTimeout(() => {
      setMakeTitleVisible(true);
    }, 1500);

    // Cleanup function to clear the timeouts when the component unmounts
    // or if the component is re-rendered before the timeouts complete.
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  // Return the states so they can be used in the component that invokes this hook.
  return { bgFinished, makeDescriptionVisible, makeTitleVisible };
}

export default useVisibilityDelays;
