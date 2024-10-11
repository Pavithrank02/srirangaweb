"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../components/hooks/use-outside-click.ts";
import { LensDemo } from "./ImageAnimation.js";
import '../global.css'

export function ExpandableCardDemo({ cards }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center scrollbar-hide z-[100] px-2 md:px-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-md md:max-w-lg h-auto max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Title and description area */}
              <div className="flex justify-between items-start p-4">
                <div className="flex flex-row w-full items-center justify-around">
                  <div>
                    <motion.div layoutId={`src-${active.src}-${id}`}>
                      <LensDemo
                        src={active.src}
                        alt={active.title}
                        width={200}
                        height={200}
                        className="h-16 w-32 md:h-20 md:w-40 lg:h-40 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-xl md:text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl"
                    >
                      {active.description}
                    </motion.p>
                    <motion.p
                      layoutId={`label-${active.label}-${id}`}
                      className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base"
                    >
                      {active.label}
                    </motion.p>
                  </div>
                </div>
              </div>
              {/* Limited content area with scrolling */}
              <div className="flex p-6 relative overflow-y-auto max-h-96 w-full scrollbar-hide">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 w-full text-xs md:text-sm lg:text-base pb-10 flex flex-col gap-4 dark:text-neutral-400 items-center"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-md md:max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col sm:flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <LensDemo
                  src={card.src}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="h-24 sm:w-32 md:h-40 md:w-40 lg:h-40 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>
              <div className="flex flex-col justify-around">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-neutral-800 dark:text-neutral-200 text-center md:text-left text-xl md:text-2xl font-semibold"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-lg"
                >
                  {card.description}
                </motion.p>
                <motion.p
                  layoutId={`label-${card.label}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-sm md:text-base"
                >
                  {card.label}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm md:text-base rounded-full font-bold bg-gray-100 hover:bg-yellow-600 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
