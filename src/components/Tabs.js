"use client";
import { Tabs } from "../components/ui/tabs.tsx";
import { ExpandableCardDemo } from "./ExpandableCards.js";
import TwoColumnTable from "./Table.js";
import '../global.css'

export function TabsDemo() {
  const tabs = [
    {
      title: "MDF Jalis",
      value: "MDF Jalis",
      content: (
        <div
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide h-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
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
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  h-full relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
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
          className="w-full overflow-scroll overflow-x-hidden scrollbar-hide  h-full relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-600 bg-gradient-to-br bg-black">
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
    label: 'Minimum Order Quantity: 20 sq ft',
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342909840/KN/HQ/PD/40353772/peacock-cutting-mdf-jali-250x250.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",

    content: (data = {
      Material: 'Mild Steel (MS)',
      Color: 'Silver',
      Sheet_Metal_Type: '	Hot Rolled MS Sheet',
      Finish: 'New York',
      "Water Proof": 'Yes',
      Product_Size: '3X1.5 Feet (LXW)',
      Laser_Type: 'Fiber Laser',
      Machine_Used: 'Laser Machine',
      'Product Thickness': '6 mm',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },
  {
    description: "₹ 220/ sq ft",
    title: "2MM LASER CUTTING",
    label: 'Minimum Order Quantity: 10 sq ft',
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342874706/MC/VI/XI/40353772/design-laser-cutting-plates-250x250.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      Color: '	Black',
      Style: 'Sun',
      Finish: 'Matte',
      Resistant: 'Yes',
      'Product Thickness': '7 mm',
      'Product Size': '3X3 ft ( L x W )'
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },

  {
    description: "₹ 280/ sq ft",
    title: "3mm INTERIOR DESIGN",
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342873531/YK/FU/ME/40353772/cnc-bending-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      Color: '	Black',
      Style: 'Sun',
      'Application': 'Home',
      Finish: 'Matte',
      Resistant: 'Yes',
      'Product Thickness': '3 mm',
      'Product Size': '3 x 2 ft ( L x W )'
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },
  {
    description: "₹ 650/ Sq ft",
    title: "3x2 Feet SS LASER CUTTING",
    label: 'Minimum Order Quantity: 10 sq ft',
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342810837/QL/WG/OE/40353772/ss-laser-cutting-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      'Surface Treatment': '	Polished',
      Application: 'Home',
      Color: 'Silver',
      Carving: 'Yes',
      'Product Thickness': '1.6 mm',
      'Product Size': '3 x 2 ft ( L x W )'
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
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
    content: (data = {
      'Surface Treatment': '	Polished',
      Color: 'Black',
      Technique: 'Hot Rolled',
      Design: '	Tree',
      'Usage/Applications': '	Windows',
      'Hardness Type': 'Hard'
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },
  {
    description: "₹ 275/ Sq ft",
    title: "MS CNC LASER CUTTING",
    label: 'Minimum Order Quantity: 50 sq ft',
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342768259/LQ/MU/DN/40353772/laser-cutting-plates-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      Finish: '	2D',
      Technique: 'Hot Rolled',
      Hardness: 'Type	Hard',
      Material: 'Stainless Steel',
      'Item Thickness': '3 mm',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },

  {
    description: "850/ piece",
    title: "Stainless Steel Butterfly Laser Cut Sheet",
    label: 'Minimum Order Quantity: 20 piece',
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/342835173/LA/CA/BF/40353772/sheet-metals-500x500.jpeg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      Grade: 304,
      'Surface Treatment': 'Polished',
      Finish: '2D',
      Color: 'Silver',
      Design: 'Butterfly',
      'Usage/ Applications': 'Windows',
      'Hardness Type': 'Hard',
      Size: '1sqft',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },


];
const cards3 = [
  {
    description: "₹ 225/ sq ft",
    title: "Laser Cutting Services",
    label: 'Minimum Order Quantity: 3 sq ft',
    src: "http://5.imimg.com/data5/SELLER/Default/2023/9/344263690/DH/JX/MY/40353772/365468185-6724658460926571-5611084412077245536-n-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      'Type of Machine': 'CNC Plasma Cutting Machine',
      'Sevice Location': 'tamil nadu',
      'Max Cutting Thickness': '20 mm',
      "Automation Grade": 'Fully Automatic',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },
  {
    description: "₹ 650/ sq ft",
    title: "CR 1mm Box",
    src: "https://5.imimg.com/data5/ANDROID/Default/2023/9/348734126/JB/PK/QJ/40353772/product-jpeg-500x500.jpg",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: (data = {
      'Cutting Method': 'Laser Cutting',
      'Service Location': 'tamil nadu',
      'method': 'laser',
      usage: 'all',
      want: 'customised',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
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
    content: (data = {
      Purpose: 'Home Decor',
      Application: 'Home',
      'Finish': 'Matte',
      'Product Thickness': '2 mm',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
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
    content: (data = {
      Color: '	Black',
      Style: 'Sun',
      Finish: 'Matte',
      Resistant: 'Yes',
      'Product Thickness': '7 mm',
      'Product Size': '3X3 ft ( L x W )'
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
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
    content: (data = {
      'Material Type': 'Mild Steel',
      'Service Location': 'south india',
    },) => {
      return (
        (<div>
          <TwoColumnTable data={data} />
        </div>)
      );
    },
  },



];