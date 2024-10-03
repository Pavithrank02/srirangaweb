import React from 'react'
import img from '../images/img1.JPG';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaWhatsapp, FaMailBulk, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='h-80 bg-black flex flex-col justify-around w-full items-center'>
      <div className='h-72 flex flex-row justify-between w-9/12 border-b-4 border-yellow-600 '>
        <div className='h-full w-1/2 flex flex-col item-center justify-center text-justify '>
          <div className=' flex '>
            <img src={img} className='h-24' alt="Logo" />

          </div>
          <div className='text-white text-wrap text-lg font-light w-11/12'>
            APX Incorporated is comprised of five fully integrated manufacturing operations.
            In addition to APX Enclosures  (NEMA Enclosures & ITS Enclosures) the APX Company is comprised of APX York Sheet Metal,
            APX Industrial Coatings, APX Mitchell Machine Shop, and APX Precision Routing
          </div>
        </div>
        <div className='h-full flex flex-col justify-around'>

          <div className='text-white font-bold text-2xl'>
            Official info:
          </div>
          <div>
            <p className='text-white font-bold text-lg'>
              Contact Us: <br />
            </p>
            <div className='text-white font-light text-base flex flex-row  items-center'>
              <FaPhoneSquareAlt style={{ color: '#FFCA4B' }} /> : +91 97904 84558
            </div>
            <div className='text-white font-light text-base flex flex-row  items-center'>
              <FaMailBulk style={{ color: '#FFCA4B' }} /> : srirangalaser.coimbatore@gmail.com
            </div>
            <div className='text-white font-light text-base flex flex-row justify-center items-center'>
              <FaMapMarkerAlt style={{ color: '#FFCA4B' }} /> : 9/1E, Gandhi Nagar, Ondiputhur Road, Irugur, Coimbatore - 641103
            </div>
          </div>
          <div className='text-white font-bold text-lg'>
            <p>
              Open Hours: <br />
            </p>
            <p className='text-base font-light'> Monday-Friday: 7:00AM – 5:00PM<br />
              Sat-Sun: CLOSED</p>
          </div>
          <div className='text-white font-bold text-lg'>
            <p>
              Follow Us: <br />
            </p>
            <motion.a className='w-44 flex flex-row justify-between text-white font-light' animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", delay: 2 }} href="https://github.com/Pavithrank02" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ color: '#FFCA4B' }} size={32} />
              <FaInstagramSquare style={{ color: '#FFCA4B' }} size={32} />
              <FaFacebook style={{ color: '#FFCA4B' }} size={32} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <p>© 2024 Sri Ranga Company – All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer