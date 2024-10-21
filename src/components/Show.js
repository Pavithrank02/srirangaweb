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
    title: "Metal Rolling",
    link: "/rolling",
    thumbnail:
      "https://www.rapiddirect.com/wp-content/uploads-v0/2022/01/how-laser-cutting-works.gif",
  },
  {
    title: "Powder Coating",
    link: "/powder",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxK4u5RlHjsIXF92129GO1z-6jbzR9VkXL6Q&s",
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
    title: "Product Design",
    link: "/products",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF60SowaMcZ_ibomzusJtPCq6snW1Nq1ILJQ&s",
  },
  {
    title: "Laser Cutting",
    link: "/laserservice",
    thumbnail:
      "https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x",
  },

];
