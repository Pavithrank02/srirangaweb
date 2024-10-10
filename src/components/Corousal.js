"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider.tsx";

export function ImagesSliderDemo({ name }) {
  const images = [
    "https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bxyqTxFDxOSTeLdomF15mKd9hxooWfPhCw&s",
    "https://www.adorwelding.com/wp-content/uploads/2021/06/banner-img.png",
  ];

  return (
    <ImagesSlider className="h-[20rem] md:h-[25rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-10 md:mt-20 z-50 flex flex-col justify-center items-center"
      >
        <motion.p
          className="font-bold text-lg md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 md:py-4"
        >
          {name}
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
