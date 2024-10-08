"use client";
import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect.tsx";


const words = 'The process involves various machines and methods depending on the type of end results you’re searching for. For example, the procedure can include laser cutting, bending, inserts, welding, grinding, powder coating and others. Here’s a quick rundown of varying processes:'
const content = [
  {
    title: "Collaborative Editing",
    description:
      "The process involves various machines and methods depending on the type of end results you’re searching for. For example, the procedure can include laser cutting, bending, inserts, welding, grinding, powder coating and others. Here’s a quick rundown of varying processes:.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Custom Metal Fabrication Process
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" /> */}
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
const Capability = () => {
  return (
    (
      <div className='h-full flex flex-col justify-around bg-slate-200'>
        <div className='flex justify-center'>
          <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>Custom Metal Fabrication Process</h2>
        </div>
        <div className='flex flex-col justify-between items-center text-lg text-justify'>
          <p className='text-black font-semibold w-7/12  text-xl'>
            <TextGenerateEffect words={words} />
          </p>
          <li className="w-4/12">

            <span className="font-bold ">Bending:</span> A machine bends the work piece to form contours, flanges, seams, curls, corrugations and other shapes. The method uses applied force from pneumatic, hydraulic or electrical machines.

          </li>
          <li className="w-4/12">
            <span className="font-bold ">Conventional and turret shearing:</span> Conventional shearing is where we cut material using a scissor-like action, often in a straight line, and the turret is where our craftsmen cut the metal by using shaped punches.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Sawing:</span> The technique uses sharp saw blade teeth to chip away small amounts of material.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Tapping:</span> Tapping creates internal threads using a tool with multiple teeth.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Boring:</span> Technicians use a hollow workpiece and the boring process delivers an internal circular profile.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Turning:</span> Using a cutting tool to craft custom shapes, a machine rotates the workpiece on an axis.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Milling:</span> The milling method removes small pieces of material using a rotating cutter.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Grinding:</span> An abrasive grain wheel completes processes like cylindrical, internal and centerless grinding to fashion the chip removal process.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Laser cutting:</span> With a high-density beam of light, the focused energy targets areas to form different pieces.
          </li>
          <li className="w-4/12">
            <span className="font-bold ">Wire EDM:</span> Wire EDM produces shapes using a moving wire that has rapid spark discharges.
          </li>
        </div>
      </div >
    )
  );
}

export default Capability