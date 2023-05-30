"use strict";

/**
 * Create a window according to the given parameter.
 *
 * @param {Object} options - The options object that contain the follow properties:
 *                            - type: the type of the base window.
 *                            - title: the title displayed in the window.
 */
export function createBaseWindow(options) {
  // Parameter validation
  if (!options || typeof options !== "object") {
    throw new Error("Invalid or missing options");
  }

  const baseWindow = document.createElement("div");

  // Add common attributes to the element
  baseWindow.setAttribute("type", options.type);
  baseWindow.title = options.title;

  // Append element to the body
  document.body.appendChild(baseWindow);
}

// Example usage
createBaseWindow({type: "popup", title: "Popup Window"});