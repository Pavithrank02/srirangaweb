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
            <div className=" items-center">
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
                description="We have everything you need for custom sheet metal fabrication in-house."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Welding"
                href="/welding"
                src="https://static.vecteezy.com/system/resources/thumbnails/036/148/811/small_2x/ai-generated-welder-working-wearing-mask-industrial-safety-concept-photo.jpg"
                description=" Stainless steel will give you the results you’re looking for."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Powder Coating"
                href="/powder"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxK4u5RlHjsIXF92129GO1z-6jbzR9VkXL6Q&s"
                description="Stripping the item to its bare metal by removing paints, finishes, rust, grease and dirt."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Metal Rolling"
                href="/rolling"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9rU3ThNv4H4I9CQVPStpjt2JmYuSkd8CVg&s"
                description="Stripping the item to its bare metal by removing paints, finishes, rust, grease and dirt."
              />
            </div>
            <div className="flex flex-col items-center">
              <ProductItem
                title="Product Design"
                href="/products"
                src="https://www.grandviewresearch.com/static/img/research/sheet-metal-market-concentration-characteristics.png"
                description="Stripping the item to its bare metal by removing paints, finishes, rust, grease and dirt."
              />
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
