import React from 'react'
import { ImagesSliderDemo } from './Corousal'
import { HoverBorderGradientDemo } from './Button'

const LaserCutting = () => {
  const industry = [
    'Plain steel',
    'Stainless steel',
    'Aluminum',
    ' Spring steel',
    'Titanium',
    'Nickel',

  ]
  const image = 'https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8='
  return (
    <div className='h-full flex flex-col justify-evenly '>
      <div>
        <ImagesSliderDemo name={'Laser Cutting'} />
      </div>
      <div className='flex flex-col justify-around'>
        <div className='flex h-16 justify-around items-center'>
          <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>Custom <span className="text-yellow-600"> Metal</span> Fabrication Process</h2>
        </div>
        <div className="flex h-48 justify-center w-full  items-center">
          <img
            src={image}
            alt='laser'
            width={800}
            height={600}
            className="h-44   sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
          />
        </div>
        <div className=" h-16 text-xl text-justify font-semibold">
          <p className="flex justify-center item-start w-11/12 ml-14">Are you in need of precision laser cutting services in Coimbatore and Tamil Nadu? Then you could likely benefit from our services as a leading provider of precision metal cutting in central Pennsylvania for decades.</p>
        </div>
        <div className='h-16 flex justify-center'>
          <div className='w-1/2 border-b-4 border-b-yellow-600'>
            <HoverBorderGradientDemo />
          </div>
        </div>
        <div className='flex h-16 justify-around items-center'>
          <h2 className='text-black font-bold text-3xl from-neutral-500 to-slate-500'>Precision  <span className="text-yellow-600"> Laser Cutting</span> Process</h2>
        </div>
        <div className='flex justify-center'>
          <p className='text-black font-semibold w-9/12 text-justify text-xl'>
            The precision laser cutting process is a relatively new one that has evolved along with the rise of ever more powerful computers with increasingly accurate computing power. Once a design is input into the computer, the computer guides the laser over a piece of sheet metal to vaporize, burn, melt or blow away with gas the excess material. What remains is the desired shape that has an edge with a top-quality surface finish.<br />

            Just like with a conventional milling machine, precision laser cutting allows for cutting on the x, y and z axes. However, the difference is that a laser cutter uses a high-powered laser, not a drill, to make incisions. It’s important to note that laser cutting is best for designs that can be cut from the edge of the material. If this isn’t possible, a pierce cut needs to be made in the material, which adds seconds to the total production process.r.
          </p>
        </div>
        <div className='flex flex-row h-96 justify-around items-center text-lg text-justify '>

          <div className="flex h-full justify-center w-1/2  items-center">

            <img
              src='https://5.imimg.com/data5/SELLER/Default/2023/9/342904673/DM/LA/ZY/40353772/74ac532d-1697-49bb-b940-d2cf2be41cdf-1000x1000.jpg'
              alt='ss'
              width={200}
              height={600}
              className="h-96 w-96  sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
            />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-evenly">
            <p className='w-3/4'>There are several types of materials that can be used as input materials for our laser cutting services in central Pennsylvania, such as:</p>
            {industry.map((i, k) => (
              <li k={k} className="text-xl">
                {i}
              </li>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default LaserCutting