import React from 'react'
import ServicesComponent from '../components/ServicesComponent'
import { ImagesSliderDemo } from '../components/Corousal'

const MetalRolling = () => {

  const data = {
    t11: 'Metal ',
    t12: 'Rolling ',
    t13: '& Forming',
    desc1: 'Steel plate rolling is a process that creates bends in different materials as we work with aluminum, steel, stainless and galvanized steel, perforated metal and other resources. APX York Sheet Metal specialists can create products like channels, enclosures, frames, cones, hoppers, ductwork, machine housings, molds, stacks, piping and bridges. We can also create rolled tanks, guards, chutes and dozens of items while our machines maintain repeatability and accuracy.',
    t21: 'Custom',
    t22: 'Tubing and Cylinders',
    desc2: 'We roll materials into tubular shapes, as well as eccentric and centric cones. APX York Sheet Metal can customize tubing and cylinders from lightweight gauge pipe or heavy plate rolling for ventilation systems and metal ductwork respectively — and we can craft everything in between. We work with a range of elements and grades, and also use the rolling technique to craft helical shapes.',
    t31: 'Steel',
    t32: 'Plate & Metal Rolling',
    desc5: 'he benefits of precision laser cutting over other types of cutting are considerable:'
  }

  const benefits = [
    'APX York Sheet Metal can work with thick and thin materials of any kind. The narrower the width entering the roller machines means we can roll a thicker plate. For example, we can fashion dense materials to tight diameters. We can take a piece that’s 2 inches thick by 10 inches and roll it to be 19 inches in diameter.',

    'The type and grade of the material determine what the largest dimension we can roll is, along with the minimum radii. When it comes to harder substances, the plate rolling dimensions become smaller and the smallest radii increases. Our professionals can perform structural and plate rolling, heat induction and plate forming, and cold and hot cambering.',

  ]
  const image = {
    img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9rU3ThNv4H4I9CQVPStpjt2JmYuSkd8CVg&s',
    img3: 'https://www.rapiddirect.com/wp-content/uploads-v0/2022/01/how-laser-cutting-works.gif',

  }
  return (
    <div className='h-full flex flex-col  '>
      <div>
        <ImagesSliderDemo name={'Metal Rolling'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} data={data} />

    </div>
  )
}

export default MetalRolling