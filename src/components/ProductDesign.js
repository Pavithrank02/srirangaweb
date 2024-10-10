import React from 'react'
import { ImagesSliderDemo } from './Corousal'
import ServicesComponent from './ServicesComponent'

const ProductDesign = () => {
  const bullets = [
    `SOLIDWORKS®: SolidWorks is a tool with tight integration that can create assemblies, parts and drawings.`,
    'AutoCAD: AutoCAD is a computer-aided design software application that features 2D documentation, advanced 3D design and connected collaboration. We use this technology to customize your metal fabrication components with superior accuracy',
    'AutoDesk Inventor: Autodesk Inventor is an application for 3D mechanical, visualization, design, documentation and simulation. It allows us to work with any CAD data and offers modeling flexibility, parametric modeling and automation',

  ]

  const data = {
    t11: 'Custom',
    t12: 'Metal Product',
    t13: 'Design Services',
    desc1: 'When you need a company to create custom fabrication parts that are cost-effective, strong and versatile, APX York Sheet Metal is your complete design resource. Our modern technology can formulate better products for your clients, as we combine our engineering and manufacturing expertise. Our custom sheet metal fabrication and design operations in Central PA have our personnel working regularly with stainless steel, steel, aluminum and sheet metal',
    t21: 'Choose',
    t22: 'Software',
    desc2: 'Come to us with an all-inclusive idea or a few rough sketches and our experts can use our various software suites to build your parts from the ground up. We can develop and implement projects ranging from commercial and technical to military and industrial. APX York Sheet Metal can manufacture precision electrical enclosures, custom sheet metal parts and everything in between.',
    desc3: 'Steel fabrication design in Central PA with APX York Sheet Metal begins with a partnership between the client and our specialists. From there, we use various software tools to help us design and develop your specifications to an exact measurement. Our software includes',
  }

  const image = {
    img1: 'https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8=',
    img2: 'https://cdn.canadianmetalworking.com/a/maximizing-laser-cutting-performance-1699648217.jpg?size=1000x',

  }
  return (
    <div className='h-full flex flex-col justify-evenly '>
      <div>
        <ImagesSliderDemo name={'Product Design'} />
      </div>
      <ServicesComponent image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default ProductDesign