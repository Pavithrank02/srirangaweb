import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import ServicesComponent from '../components/ServicesComponent'

const ProductDesign = () => {
  const bullets = [
    'Computer-Aided Design (CAD)',
    'Computer-Aided Manufacturing (CAM)',
    ' Finite Element Analysis (FEA)',
    ' 3D Printing (Additive Manufacturing)',
    'CNC Machining',
    'Laser Cutting and Welding Technologies',

  ]

  const data = {
    t11: 'Sheet Metal',
    t12: 'Research and Development',
    desc1: 'In the sheet metal business, R&D stands for Research and Development. It refers to activities that companies undertake to innovate, improve products, or develop new technologies in the field of sheet metal fabrication. R&D is essential for businesses to stay competitive and meet the evolving needs of the market.',
    t21: 'Sheet metal',
    t22: 'R&D',
    desc2: 'Material Innovation: Researching and developing new types of metals or alloys that offer better strength, durability, or flexibility for specific applications. Process Optimization: Developing or improving manufacturing processes like cutting, bending, welding, and forming to increase efficiency, reduce waste, or lower costs.',
    desc3: 'Tooling and Equipment: Innovating or refining tools and machines used in sheet metal fabrication, such as CNC machines, laser cutters, or stamping machines, to enhance precision and reduce errors. Product Design: Experimenting with new designs or improvements to existing sheet metal products, ensuring they meet customer demands or function better in specific environments. Automation and Technology: Integrating advanced technologies like robotics, automation, and software(CAD/ CAM) to streamline the production process.',
    desc4: 'There are several types of materials that can be used as input materials for our laser cutting services in central Pennsylvania, such as:',
    t31: 'Different',
    t32: 'Research and Development (R&D) ',
    desc5: 'In the sheet metal business, Research and Development (R&D) encompasses a wide range of activities, each aimed at improving products, processes, or technologies. Here are the different types of R&D performed in this field:'
  }

  const benefits = [
    'Material Research and Development',
    'Process Development',
    'Automation and Robotics.',
    'Tool and Equipment Development.',
    'Product Innovation',
    'Sustainability and Energy Efficiency',
    'Simulation and Modeling',
    'Quality Control and Inspection Technologies',
    'Cost Reduction and Efficiency Improvement',
    'Safety and Ergonomics',


  ]
  const image = {
    img1: 'https://www.hitechcaddservices.com/wp-content/uploads/2024/04/top-companies-for-sheet-metal-design-detailing.jpg',
    img2: 'https://www.grandviewresearch.com/static/img/research/sheet-metal-market-concentration-characteristics.png',
    img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF60SowaMcZ_ibomzusJtPCq6snW1Nq1ILJQ&s',

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