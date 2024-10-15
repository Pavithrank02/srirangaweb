import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import ServicesComponent from '../components/ServicesComponent'

const LaserCutting = () => {
  const bullets = [
    'Plain steel',
    'Stainless steel',
    'Aluminum',
    ' Spring steel',
    'Titanium',
    'Nickel',

  ]

  const data = {
    t11: 'Custom',
    t12: 'Metal',
    t13: 'Fabrication Process',
    desc1: 'Are you in need of precision laser cutting services in Coimbatore and Tamil Nadu? Then you could likely benefit from our services as a leading provider of precision metal cutting in central Pennsylvania for decades',
    t21: 'Precision',
    t22: 'Laser Cutting',
    desc2: 'The precision laser cutting process is a relatively new one that has evolved along with the rise of ever more powerful computers with increasingly accurate computing power. Once a design is input into the computer, the computer guides the laser over a piece of sheet metal to vaporize, burn, melt or blow away with gas the excess material. What remains is the desired shape that has an edge with a top-quality surface finish.',
    desc3: 'Just like with a conventional milling machine, precision laser cutting allows for cutting on the x, y and z axes. However, the difference is that a laser cutter uses a high-powered laser, not a drill, to make incisions. It’s important to note that laser cutting is best for designs that can be cut from the edge of the material. If this isn’t possible, a pierce cut needs to be made in the material, which adds seconds to the total production process.r.',
    desc4: 'There are several types of materials that can be used as input materials for our laser cutting services in central Pennsylvania, such as:',
    t31: 'Benefits of',
    t32: 'Laser Cutting',
    desc5: 'he benefits of precision laser cutting over other types of cutting are considerable:'
  }

  const benefits = [
    'The high-powered laser jet has the capability to cut extremely complex shapes.',

    'There’s no damage to the material during the cutting process — and therefore no distortion.',

    'The process is highly versatile, since changes can be input into the computer and rapidly incorporated into the production process.',

    'It’s environmentally friendly, since there are no harmful byproducts.',

    'It’s safer, with lower risk of personnel injuries',

  ]
  const image = {
    img1: 'https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8=',
    img2: 'https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x',
    img3: 'https://www.rapiddirect.com/wp-content/uploads-v0/2022/01/how-laser-cutting-works.gif',

  }
  return (
    <div className='h-full flex flex-col  '>
      <div>
        <ImagesSliderDemo name={'Laser Cutting'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default LaserCutting