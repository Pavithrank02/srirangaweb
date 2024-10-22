import React from 'react'
import Choose from './Choose'
import { HoverBorderGradientDemo } from './Button'

const ServicesComponent = ({ image, benefits, bullets, data }) => {
  return (
    <div> <div className='flex flex-col justtify-center sm:justify-center'>
      <div className='flex sm:h-16 text-center sm:justify-center sm:items-center'>
        <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data.t11} <span className="text-yellow-600"> {data.t12}</span> {data.t13}</h2>
      </div>
      <div className='h-[400px] md:h-full sm:h-full flex flex-col justify-between mb-3'>
        <div className="flex h-48 justify-center w-full items-center">
          <img
            src={image.img1}
            alt='laser'
            width={800}
            height={600}
            className="h-44  sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
          />
        </div>
        <div className=" text-xl text-justify font-semibold">
          <p className="flex justify-center item-start w-11/12 ml-4 md:ml-14 sm:ml-14">{data?.desc1}</p>
        </div>
        <div className=' flex justify-center'>
          <div className='w-1/2 border-b-4 border-b-yellow-600'>
            <HoverBorderGradientDemo />
          </div>
        </div>
      </div>
      <div className=' md:h-full sm:h-full flex flex-col justify-between mb-3'>
        <div className='flex h-16 text-center justify-center items-center'>
          <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data?.t21}  <span className="text-yellow-600"> {data.t22} </span> Process</h2>
        </div>
        <div className='flex justify-center'>
          <p className='text-black font-semibold w-9/12 text-justify text-xl'>
            {data?.desc2}.<br />

            {data?.desc3}
          </p>
        </div>
        <div className='flex flex-col md:flex-row sm:flex-row md:h-96 sm:h-96 justify-around items-center text-lg text-justify '>
          <div className="flex h-full justify-center md:w-1/2 sm:w-1/2  items-center">
            <img
              src={image.img2}
              alt='ss'
              className="h-80 w-10/12 md:w-96 sm:w-96  sm:rounded-tr-lg sm:rounded-tl-lg object-fill "
            />
          </div>
          <div className="w-10/12 sm:w-1/2 h-full flex flex-col sm:justify-evenly ">
            <p className='sm:w-3/4 font-semibold text-xl '>{data?.desc4}</p>
            {bullets?.map((i, k) => (
              <li k={k} className="sm:text-xl">
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
      </div>
      <div className=' sm:h-full flex flex-col justify-between mb-3'>

        <div className='flex h-16 text-center justify-around items-center'>
          <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>{data?.t31}  <span className="text-yellow-600"> {data.t32}</span> </h2>
        </div>
        <div className='flex flex-col md:flex-row sm:flex-row  h-full md:h-full sm:h-96 justify-around items-center text-lg text-justify '>

          <div className="flex h-full w-full justify-center sm:w-1/2  items-center">

            <img
              src={image?.img3}
              alt='ss'
              className="h-80 w-96  sm:rounded-tr-lg sm:rounded-tl-lg object-fill "
            />
          </div>
          <div className=" w-3/4 md:w-1/2 sm:w-1/2 h-full flex flex-col justify-center md:justify-evenly sm:justify-evenly ">
            <p className='sm:w-3/4 font-semibold text-xl '>{data?.desc5}</p>
            {benefits?.map((i, k) => (
              <li k={k} className="sm:text-xl sm:w-3/5">
                {i}
              </li>
            ))}
          </div>

        </div>
        <div className='h-16 flex justify-center'>
          <div className='w-1/2 border-b-4 border-b-yellow-600'>
          </div>
        </div>
        <Choose />

      </div>
    </div>
    </div>
  )
}

export default ServicesComponent