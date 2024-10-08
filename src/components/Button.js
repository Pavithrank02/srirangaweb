"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";

export function HoverBorderGradientDemo() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("su")
    navigate("/contact");
  };
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black hover:bg-yellow-600 bg-white text-black dark:text-white flex items-center space-x-4 shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out"
        onClick={handleButtonClick}
      >
        {/* <AceternityLogo /> */}
        <span>Contact Us</span>
      </HoverBorderGradient>
    </div>
  );
}


// const AceternityLogo = () => {
//   return (
//     (<svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-3 text-black dark:text-white">
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="30"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round" />
//     </svg>)
//   );
// };
