"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax.tsx";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Laser Cutting",
    link: "/laserservice",
    thumbnail:
      "https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x",
  },
  {
    title: "Metal Bending",
    link: "/bendingservice",
    thumbnail:
      "https://t4.ftcdn.net/jpg/03/99/51/77/360_F_399517769_gUVJn5wXj1H7JczuFdw1dTyXK0ZE8rJf.jpg",
  },
  {
    title: "Welding",
    link: "/welding",
    thumbnail:
      "https://static.vecteezy.com/system/resources/thumbnails/036/148/811/small_2x/ai-generated-welder-working-wearing-mask-industrial-safety-concept-photo.jpg",
  },

  {
    title: "Metal Shearing",
    link: "/shearing",
    thumbnail:
      "https://fractory.com/wp-content/uploads/2023/06/sheet-metal-shearing-operations.jpg",
  },
  {
    title: "Metal Shearing",
    link: "/shearing",
    thumbnail:
      "https://fractory.com/wp-content/uploads/2023/06/sheet-metal-shearing-operations.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Welding",
    link: "/welding",
    thumbnail:
      "https://static.vecteezy.com/system/resources/thumbnails/036/148/811/small_2x/ai-generated-welder-working-wearing-mask-industrial-safety-concept-photo.jpg",
  },
  {
    title: "Metal Bending",
    link: "/bendingservice",
    thumbnail:
      "https://t4.ftcdn.net/jpg/03/99/51/77/360_F_399517769_gUVJn5wXj1H7JczuFdw1dTyXK0ZE8rJf.jpg",
  },
  {
    title: "Laser Cutting",
    link: "/laserservice",
    thumbnail:
      "https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x",
  },

];
