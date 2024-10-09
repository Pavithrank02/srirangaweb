import React from 'react'
import { HoverBorderGradientDemo } from './Button'

const ServicesComponent = ({ image, benefits, bullets, data }) => {
  return (
    <div> <div className='flex flex-col justify-around'>
      <div className='flex h-16 justify-around items-center'>
        <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data.t11} <span className="text-yellow-600"> {data.t12}</span> {data.t13}</h2>
      </div>
      <div className="flex h-48 justify-center w-full  items-center">
        <img
          src={image.img1}
          alt='laser'
          width={800}
          height={600}
          className="h-44   sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
        />
      </div>
      <div className=" h-16 text-xl text-justify font-semibold">
        <p className="flex justify-center item-start w-11/12 ml-14">{data.desc1}</p>
      </div>
      <div className='h-16 flex justify-center'>
        <div className='w-1/2 border-b-4 border-b-yellow-600'>
          <HoverBorderGradientDemo />
        </div>
      </div>
      <div className='flex h-16 justify-around items-center'>
        <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data.t21}  <span className="text-yellow-600"> {data.t22} </span> Process</h2>
      </div>
      <div className='flex justify-center'>
        <p className='text-black font-semibold w-9/12 text-justify text-xl'>
          {data.desc2}.<br />

          {data.desc3}
        </p>
      </div>
      <div className='flex flex-row h-96 justify-around items-center text-lg text-justify '>

        <div className="flex h-full justify-center w-1/2  items-center">

          <img
            src={image.img2}
            alt='ss'
            className="h-80 w-96  sm:rounded-tr-lg sm:rounded-tl-lg object-fill "
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-evenly ">
          <p className='w-3/4 font-semibold text-xl '>{data.desc4}</p>
          {bullets.map((i, k) => (
            <li k={k} className="text-xl">
              {i}
            </li>
          ))}
        </div>
      </div>
      <div className='h-16 flex justify-center'>
        <div className='w-1/2 border-b-4 border-b-yellow-600'>
          <HoverBorderGradientDemo />
        </div>
      </div>
      <div className='flex h-16 justify-around items-center'>
        <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data.t31}  <span className="text-yellow-600"> {data.t32}</span> </h2>
      </div>
      <div className='flex flex-row h-96 justify-around items-center text-lg text-justify '>

        <div className="flex h-full justify-center w-1/2  items-center">

          <img
            src={image.img3}
            alt='ss'
            className="h-80 w-96  sm:rounded-tr-lg sm:rounded-tl-lg object-fill "
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-evenly ">
          <p className='w-3/4 font-semibold text-xl '>{data.desc5}</p>
          {benefits.map((i, k) => (
            <li k={k} className="text-xl w-3/5">
              {i}
            </li>
          ))}
        </div>

      </div>
      <div className='h-16 flex justify-center'>
        <div className='w-1/2 border-b-4 border-b-yellow-600'>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='flex  justify-center w-full '>
          <h2 className=' text-black font-bold text-3xl from-neutral-500 to-slate-500'>Choose<span className="text-yellow-600">  Sri Ranga Laser
          </span> </h2>
        </div>

        <div className=" text-xl text-justify font-semibold h-60 flex flex-col justify-center items-center">
          <p className="flex justify-center w-11/12 ml-14">Sri Ranga Laser custom sheet metal parts in Northern Maryland that are reliable and top-quality. Read our blog to learn more about trends or submit a contact form for a free quote. <br />You can also call us at +91 97904 84558.

            All of our fabricated metal products are made in the India.<br />

            #carbonsteel #fabrication #sheetfabrication</p>
          <div className="flex items-start ml-12">
            <HoverBorderGradientDemo />
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default ServicesComponent