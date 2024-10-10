"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu.tsx";
import { cn } from "../lib/utils.ts";

export function NavbarDemo() {
  return (
    <div className="">
      <Navbar className="" />
    </div>
  );
}

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          {/* Adjusting grid layout for responsiveness */}
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {/* Centering each item in mobile view */}
            <div className="flex flex-col items-center">
              <ProductItem
                title="Laser Cutting"
                href="/laserservice"
                src="https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x"
                description="Precision cutting services for all types of metals."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Metal Bending"
                href="/bendingservice"
                src="https://t4.ftcdn.net/jpg/03/99/51/77/360_F_399517769_gUVJn5wXj1H7JczuFdw1dTyXK0ZE8rJf.jpg"
                description="Production-ready Tailwind CSS components for your next project."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Welding"
                href="/welding"
                src="https://static.vecteezy.com/system/resources/thumbnails/036/148/811/small_2x/ai-generated-welder-working-wearing-mask-industrial-safety-concept-photo.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Metal Shearing"
                href="/shearing"
                src="https://fractory.com/wp-content/uploads/2023/06/sheet-metal-shearing-operations.jpg"
                description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI."
              />
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
