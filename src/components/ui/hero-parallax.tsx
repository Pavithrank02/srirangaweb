"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] xs:h-[200] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:800px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        {/* First Row */}
        <motion.div className="flex flex-col items-center space-y-8 mb-10 md:flex-row-reverse md:space-y-0 md:space-x-reverse md:space-x-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        {/* Second Row */}
        <motion.div className="flex flex-col items-center space-y-8 mb-10 md:flex-row md:space-y-0 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        {/* Third Row */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-40 px-4 w-full left-0 top-16 xs:top-">
      <h1 className="text-3xl md:text-7xl font-bold  dark:text-black">
        The Ultimate <br /> <span className="text-yellow-600">Sheet Metalling</span> Works
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8  text-black font-bold">
        We specialize in bending, welding, and finishing to meet your exact specifications
        with durability and precision.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 w-full md:h-96  sm:w-[30rem] relative flex-shrink-0 mx-2 md:mx-0">
      <Link to={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </Link>
      <div className="absolute flex justify-center items-center inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none">
        <h2 className="absolute opacity-0 group-hover/product:opacity-100 text-white text-lg md:text-4xl font-bold text-center">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
