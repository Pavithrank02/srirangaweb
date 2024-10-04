"use client";

import { Tabs } from "../components/ui/tabs.tsx";
import { ExpandableCardDemo } from "./ExpandableCards.js";

export function TabsDemo() {
  const tabs = [
    {
      title: "MDF Jalis",
      value: "MDF Jalis",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>MDF Jalis</p>
          <ExpandableCardDemo />
        </div>
      ),
    },
    {
      title: "Designer Stainless Steel Sheet",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Designer Stainless Steel Sheet</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Laser Cutting",
      value: "playground",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Laser Cutting Services</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Decorative Wall Art",
      value: "content",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Decorative Wall Art</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Cr Sheet",
      value: "random",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Cr Sheet</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Capacitor Clamp",
      value: "Capacitor Clamp",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Capacitor Clamp</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
