"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";
//xd
export function HoverBorderGradientDemo() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="
          dark:bg-black
          bg-white
          text-black dark:text-white
          flex items-center space-x-4
          shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]
          transition-shadow duration-300 ease-in-out
          px-4 py-2 md:px-6 md:py-3  
          text-sm md:text-base lg:text-lg
          hover:bg-yellow-600
          w-full max-w-xs sm:max-w-md md:max-w-lg
        "
        onClick={handleButtonClick}
      >
        <span>Contact Us</span>
      </HoverBorderGradient>
    </div>
  );
}
