"use client";

import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    // Prevent accidental zoom from Ctrl + scroll / trackpad pinch-zoom
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Prevent gesture zoom on trackpads / touch devices
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    // Prevent keyboard zoom shortcuts (Ctrl/Cmd + '+', '-', '0', '=')
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0" || e.key === "_")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("gesturestart", preventGesture);
    window.addEventListener("gesturechange", preventGesture);
    window.addEventListener("gestureend", preventGesture);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("gesturestart", preventGesture);
      window.removeEventListener("gesturechange", preventGesture);
      window.removeEventListener("gestureend", preventGesture);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
