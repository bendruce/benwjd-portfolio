/**
 * useOutsideClick is a custom React hook that allows you to detect clicks outside a specified element.
 *
 * This is particularly useful for scenarios such as closing a modal, dropdown, or any UI component
 * when the user clicks outside of it. By attaching this hook to a component, you can trigger a
 * callback function whenever a click occurs outside of the referenced element.
 *
 * The hook takes two arguments:
 *
 * - `ref`: A React ref object that points to the DOM element you want to detect outside clicks for.
 * - `callback`: A function that will be called when a click is detected outside the specified element.
 *
 * How it works:
 *
 * 1. When the component mounts, an event listener is added to the document to listen for "mousedown" events.
 * 2. The event listener calls `handleClickOutside`, a function that checks if the clicked element is outside
 *    the referenced element.
 * 3. If the clicked element is outside, the callback function is invoked, allowing you to handle the outside click.
 * 4. When the component unmounts or either the ref or callback changes, the event listener is removed to prevent
 *    memory leaks.
 */

import { useEffect } from "react";

export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    // handleClickOutside is triggered whenever a "mousedown" event occurs on the document.
    // It checks if the clicked element is outside the element referenced by `ref`.
    function handleClickOutside(event) {
      // If `ref.current` exists and the clicked target is not within the referenced element,
      // the callback function is executed.
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Add the "mousedown" event listener to the document.
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts or ref/callback changes.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]); // The effect depends on `ref` and `callback`. It will re-run if they change.
}
