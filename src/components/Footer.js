import React from 'react'
import img from '../images/img1.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className='h-80 bg-black flex flex-row justify-evenly w-full items-center'>
      <div className='h-full w-1/2 flex flex-col item-end justify-around '>
        <div>
          <img src={img} className='h-24' alt="Logo" />
        </div>
        <div className='text-white text-wrap text-xl font-bold w-full'>
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

          <div className='text-white font-bold text-lg'>
            :+91 97904 84558
          </div>
          <div className='text-white font-bold text-lg'>
            :srirangalaser.coimbatore@gmail.com
          </div>
          <div className='text-white font-bold text-lg'>
            <FontAwesomeIcon icon="fa-solid fa-map-pin" style={{ color: "#FFD43B", }} />: 9/1E, Gandhi Nagar, Ondiputhur Road, Irugur, Coimbatore - 641103
          </div>
        </div>
        <div className='text-white font-bold text-lg'>
          <p>
            Open Hours: <br />
            Monday-Friday: 7:00AM – 5:00PM<br />
            Sat-Sun: CLOSED
          </p>
        </div>

      </div>


    </div>
  )
}

export default Footer