import React from 'react'
import img from '../images/img1.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className='h-80 bg-black flex flex-col justify-around w-full items-center'>
      <div className='h-70 flex flex-row justify-around w-9/12 items-center border-b-4 border-yellow-600'>
        <div className='h-full w-1/2 flex flex-col item-end justify-around text-justify'>
          <div>
            <img src={img} className='h-24' alt="Logo" />
          </div>
          <div className='text-white text-wrap text-xl font-light w-11/12'>
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

            <div className='text-white font-light text-base'>
              :+91 97904 84558
            </div>
            <div className='text-white font-light text-base'>
              :srirangalaser.coimbatore@gmail.com
            </div>
            <div className='text-white font-light text-base'>
              <FontAwesomeIcon icon="fa-solid fa-map-pin" style={{ color: "#FFD43B", }} />: 9/1E, Gandhi Nagar, Ondiputhur Road, Irugur, Coimbatore - 641103
            </div>
          </div>
          <div className='text-white font-bold text-lg'>
            <p>
              Open Hours: <br />
            </p>
            <p className='text-base font-light'> Monday-Friday: 7:00AM – 5:00PM<br />
              Sat-Sun: CLOSED</p>
          </div>

        </div>
      </div>
      <div className='text-white'>
        <p>© 2022 APX Company – All rights reserved. - Powered By CodeFusion</p>
      </div>

    </div>
  )
}

export default Footer