"use client";
import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect.tsx";
import Choose from "./Choose.js";

const words = 'The process involves various machines and methods depending on the type of end results you’re searching for. For example, the procedure can include laser cutting, bending, inserts, welding, grinding, powder coating and others. Here’s a quick rundown of varying processes:';
const content = {
  'Bending': 'A machine bends the work piece to form contours, flanges, seams, curls, corrugations and other shapes. The method uses applied force from pneumatic, hydraulic or electrical machines.',
  'Conventional and turret shearing': 'Conventional shearing is where we cut material using a scissor-like action, often in a straight line, and the turret is where our craftsmen cut the metal by using shaped punches.',
  'Sawing': 'The technique uses sharp saw blade teeth to chip away small amounts of material.',
  'Tapping': 'Tapping creates internal threads using a tool with multiple teeth.',
  'Boring': 'Technicians use a hollow workpiece and the boring process delivers an internal circular profile.',
  'Turning': 'Using a cutting tool to craft custom shapes, a machine rotates the workpiece on an axis.',
  'Milling': 'The milling method removes small pieces of material using a rotating cutter.',
  'Grinding': 'An abrasive grain wheel completes processes like cylindrical, internal and centerless grinding to fashion the chip removal process.',
  'Laser cutting': 'With a high-density beam of light, the focused energy targets areas to form different pieces.',
  'Wire EDM': 'Wire EDM produces shapes using a moving wire that has rapid spark discharges.',
};

const industry = [
  'Construction equipment manufacturers',
  'Custom performance fabrications',
  'Energy and environmental solution providers',
  'Industrial enclosures and cabinets',
  'Manufacturing and machinery OEMs',
  'Material handling and logistics solution providers',
  'Web handling and printing equipment OEMs',
];

const Capability = () => {
  return (
    <div className="h-full flex flex-col justify-around bg-white">
      <div className="flex justify-center">
        <h2 className="text-black font-bold text-2xl md:text-3xl from-neutral-500 to-slate-500">
          Custom <span className="text-yellow-600">Metal</span> Fabrication Process
        </h2>
      </div>

      <div className="flex flex-col justify-between items-center text-lg text-justify px-4">
        <p className="text-black font-semibold w-full md:w-7/12 text-base md:text-xl">
          <TextGenerateEffect words={words} />
        </p>

        <div className="flex flex-col justify-between items-center text-lg text-justify mb-7 mt-5 w-full px-4 md:px-0">
          {Object.entries(content).map(([key, value]) => (
            <li key={key} className="w-full md:w-4/12 text-base md:text-xl">
              <span className="font-bold">{key}:</span> {value}
            </li>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between h-full mt-10">
        <div className="flex justify-center w-full">
          <h2 className="text-black font-bold text-2xl md:text-3xl from-neutral-500 to-slate-500">
            <span className="text-yellow-600">Industries</span> Served
          </h2>
        </div>

        <div className="flex justify-center text-base md:text-xl w-full text-justify font-semibold mt-5 px-4 md:px-0">
          <div className=" items-center md:w-11/12">
            <p >
              Sri Ranga Laser supports industries across the board — even ones that may not be listed below. No matter the custom sheet metal fabrication services you require, our professionals have you covered:
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center text-lg text-justify mt-5 px-4 md:px-0 h-auto md:h-96">
          <div className="flex justify-center w-full md:w-1/2 items-center mb-5 md:mb-0">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/9/342904673/DM/LA/ZY/40353772/74ac532d-1697-49bb-b940-d2cf2be41cdf-1000x1000.jpg"
              alt="ss"
              width={200}
              height={600}
              className="h-64 w-64 md:h-96 md:w-96 rounded-lg object-cover"
            />
          </div>
          <div className="w-full h-full md:w-1/2 flex flex-col justify-evenly">
            {industry.map((i, k) => (
              <li key={k} className="text-base md:text-xl">
                {i}
              </li>
            ))}
          </div>
        </div>
      </div>

      <Choose />
    </div>
  );
};

export default Capability;
