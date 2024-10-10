"use client";
import { useState } from "react";
import { cn } from "../lib/utils.ts";
import { Lens } from "../components/ui/lens.tsx";

export function LensDemo({ src, width, height, className, alt }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] w-full">
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src={src}
              alt={alt}
              width="100%" // Make the image responsive
              height="auto" // Maintain aspect ratio
              className={cn("object-cover", className)} // Ensure proper scaling
            />
          </Lens>
        </div>
        <Beams />
        <Rays />
      </div>
    </div>
  );
}

// SVG components remain unchanged
const Beams = () => {
  return (
    <svg
      width="100%" // Set to responsive width
      height="auto" // Maintain aspect ratio
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      {/* SVG content... */}
    </svg>
  );
};

const Rays = ({ className }) => {
  return (
    <svg
      width="100%" // Set to responsive width
      height="auto" // Maintain aspect ratio
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute left-0 top-0 pointer-events-none z-[1]", className)}
    >
      {/* SVG content... */}
    </svg>
  );
};
