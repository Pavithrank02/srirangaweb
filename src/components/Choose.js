import React from 'react'
import { HoverBorderGradientDemo } from './Button'

const Choose = () => {
  return (
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
  )
}

export default Choose