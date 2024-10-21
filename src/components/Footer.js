import React from 'react';
import { motion } from 'framer-motion';
import { IconPhone, IconMapPin, IconMailFilled } from "@tabler/icons-react";
import img from '../images/img1.JPG';
import { FloatingDockDemo } from './FooterIcons';
import { MapButton } from './MapButton';

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-around w-full items-center py-6">
      {/* Upper section with company info and contact */}
      <div className="flex flex-col md:flex-row justify-between w-11/12 lg:w-9/12 border-b-4 border-yellow-600 pb-4">
        {/* Company Info Section */}
        <div className="flex flex-col items-start justify-center text-justify mb-6 md:mb-0 md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <img src={img} className="h-16 md:h-24" alt="Logo" />
          </div>
          <div className="text-white text-sm md:text-lg font-light w-full md:w-11/12">
            Sri Ranga Laser Incorporated is comprised of five fully integrated manufacturing operations. In addition to APX Enclosures (NEMA Enclosures & ITS Enclosures), the APX Company is comprised of APX York Sheet Metal, APX Industrial Coatings, APX Mitchell Machine Shop, and APX Precision Routing.
          </div>
        </div>

        {/* Contact and Info Section */}
        <div className="flex flex-col justify-between items-start md:items-start md:w-1/2">
          <div className="text-white font-bold text-lg md:text-2xl mb-4 md:mb-0">
            Official info:
          </div>
          <div className="mb-6">
            <p className="text-white font-bold text-sm md:text-lg mb-2">Contact Us:</p>
            <div className="text-white font-light text-sm md:text-base flex flex-row items-center mb-2">
              <IconPhone style={{ color: '#FFCA4B' }} />
              <span className="ml-2"> +91 97904 84558</span>
            </div>
            <div className="text-white font-light text-sm md:text-base flex flex-row items-center mb-2">
              <IconMailFilled style={{ color: '#FFCA4B' }} />
              <span className="ml-2"> srirangalaser.coimbatore@gmail.com</span>
            </div>
            <div className="text-white font-light text-sm md:text-base flex flex-row items-center">
              <IconMapPin style={{ color: '#FFCA4B' }} />
              <span className="ml-2"> 9/1E, Gandhi Nagar, Ondiputhur Road, Irugur, Coimbatore - 641103</span>
            </div>
          </div>

          {/* Open Hours */}
          <div className="mb-6">
            <p className="text-white font-bold text-sm md:text-lg mb-2">Open Hours:</p>
            <p className="text-white font-light text-sm md:text-base">
              Monday-Friday: 7:00AM – 5:00PM<br />
              Sat-Sun: CLOSED
            </p>
          </div>
          {/* <MapButton /> */}

          {/* Social Media */}
        </div>
      </div>
      <div className="text-white font-bold text-sm md:text-lg text-center">
        <p className="mb-2">Follow Us</p>
        <motion.div
          className="flex flex-row justify-between text-white font-light w-32 md:w-44"
          animate={{ x: 0, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring", delay: 2 }}>
          {/* <a href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ color: '#FFCA4B', md: 32 }} size={24} />
              </a>
              <a href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare style={{ color: '#FFCA4B', md: 32 }} size={24} />
              </a>
              <a href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ color: '#FFCA4B', md: 32 }} size={24} />
              </a> */}
          <FloatingDockDemo />
        </motion.div>

      </div>

      {/* Bottom Section with Copyright */}
      <div className="text-white text-sm md:text-base mt-4">
        <p>© 2024 Sri Ranga Company – All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
