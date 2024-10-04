"use client";

import { Tabs } from "../components/ui/tabs.tsx";
import { ExpandableCardDemo } from "./ExpandableCards.js";
import '../global.css'

export function TabsDemo() {
  const tabs = [
    {
      title: "MDF Jalis",
      value: "MDF Jalis",
      content: (
        <div
          className="w-full h-full overflow-scroll overflow-x-hidden scrollbar-hide  relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>MDF Jalis</p>
          <ExpandableCardDemo cards={cards1} />
        </div>
      ),
    },
    {
      title: "Designer Stainless Steel Sheet",
      value: "services",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>Designer Stainless Steel Sheet</p>
          <ExpandableCardDemo cards={cards2} />
        </div>
      ),
    },
    {
      title: "Laser Cutting",
      value: "playground",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>Laser Cutting Services</p>
          <ExpandableCardDemo cards={cards3} />
        </div>
      ),
    },
    {
      title: "Decorative Wall Art",
      value: "content",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>Decorative Wall Art</p>
          <ExpandableCardDemo cards={cards4} />
        </div>
      ),
    },
    {
      title: "Cr Sheet",
      value: "random",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>Cr Sheet</p>
          <ExpandableCardDemo cards={cards5} />
        </div>
      ),
    },
    {
      title: "Cnc Gas Plasma Cutting",
      value: "Cnc Gas Plasma Cutting Service",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
          <p>Cnc Gas Plasma Cutting Service</p>
          <ExpandableCardDemo cards={cards6} />
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
const cards1 = [
  {
    description: "₹ 350/ sq",
    title: "3X1.5 Feet MS 4mm",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342909840/KN/HQ/PD/40353772/peacock-cutting-mdf-jali-250x250.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>)
      );
    },
  },
  {
    description: "₹ 220/ sq ft",
    title: "2MM LASER CUTTING",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342874706/MC/VI/XI/40353772/design-laser-cutting-plates-250x250.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>)
      );
    },
  },

  {
    description: "₹ 280/ sq ft",
    title: "3mm INTERIOR DESIGN",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342873531/YK/FU/ME/40353772/cnc-bending-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>)
      );
    },
  },
  {
    description: "₹ 650/ Sq ft",
    title: "3x2 Feet SS LASER CUTTING",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342810837/QL/WG/OE/40353772/ss-laser-cutting-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br />Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>)
      );
    },
  },

];
const cards2 = [
  {
    description: "₹ 250/ Piece",
    title: "Tree Laser Cut Sheet",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342844869/QW/YX/VJ/40353772/laser-cutting-works-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>)
      );
    },
  },
  {
    description: "₹ 275/ Sq ft",
    title: "MS CNC LASER CUTTING",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342768259/LQ/MU/DN/40353772/laser-cutting-plates-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>)
      );
    },
  },

  {
    description: "₹ 280/ sq ft",
    title: "Stainless Steel Butterfly Laser Cut Sheet",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342835173/LA/CA/BF/40353772/sheet-metals-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>)
      );
    },
  },


];
const cards3 = [
  {
    description: "₹ 225/ sq ft",
    title: "Laser Cutting Services",
    src: "http://5.imimg.com/data5/SELLER/Default/2023/9/344263690/DH/JX/MY/40353772/365468185-6724658460926571-5611084412077245536-n-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>)
      );
    },
  },
  {
    description: "₹ 650/ sq ft",
    title: "CR 1mm Box",
    src: "https://5.imimg.com/data5/ANDROID/Default/2023/9/348734126/JB/PK/QJ/40353772/product-jpeg-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>)
      );
    },
  },


];
const cards4 = [
  {
    description: "₹ 220/ sq ft",
    title: "Decorative Metal Wall Art",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342830750/CC/ZT/CK/40353772/laser-plates-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>)
      );
    },
  },



];
const cards5 = [
  {
    description: "₹ 20/ Piece",
    title: "CR 1mm CNC Laser Cutting & Bending",
    src: "https://5.imimg.com/data5/ANDROID/Default/2023/9/348734698/MO/TS/LN/40353772/product-jpeg-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br />Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>)
      );
    },
  },



];
const cards6 = [
  {
    description: "₹ 220/ Kg",
    title: "Cnc Gas Plasma Cutting Service",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/344266734/MV/NE/DC/40353772/349100852-6364603100249938-8560688532603931185-n-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<div>
          <table className="">
            <tr>
              <th>Name</th>: <td>Anom</td>
            </tr>
            <tr>
              <th>Name</th>: <td>Anom</td>
            </tr>
            <tr>
              <th>Name</th>: <td>Anom</td>
            </tr>
            <tr>
              <th>Name</th>: <td>Anom</td>
            </tr>
          </table>
        </div>
        )
      );
    },
  },



];