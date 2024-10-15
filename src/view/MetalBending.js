import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import ServicesComponent from '../components/ServicesComponent'

const MetalBending = () => {
  const bullets = [
    'Pro ENGINEER Wildfire',

    'AutoCAD',

    'AutoDesk®Inventor®',

    'DS SolidWorks',

  ]

  const data = {
    t11: 'Custom',
    t12: 'Metal Product',
    t13: 'Design Services',
    desc1: 'Are you in need of sheet metal bending services in Coimbatore and Tamil Nadu? Then you could likely benefit from our services as a leading provider of precision metal cutting in central Pennsylvania for decades',
    t21: 'Sheet ',
    t22: 'Metal Bending',
    desc2: 'Sheet metal bending, also referred to as sheet metal forming, is the process of applying force to a piece of sheet metal in order to change its shape. The bending process takes place using an electric, pneumatic or hydraulic press. The two most common shapes are U and V, although the metal can also be formed into corrugations, curls, flanges or other shapes',
    desc4: 'When it comes to sheet metal bending in central Pennsylvania for a wide range of applications, you need cutting-edge technology to get world-class results. At APX York Sheet Metal, we use only the best technology for custom sheet metal fabrication, include',
    t31: 'Industries Using  ',
    t32: 'Metal Bending Services',
    desc5: 'we offer sheet metal bending services in northern Maryland and central Pennsylvania to the following industries:'
  }

  const benefits = [
    'Manufacturing/machinery OEMS',

    'Construction equipment manufacturers',

    'Material handling / logistics solutions providers',

    'Energy / environmental solutions providers',

    'Web handling and printing equipment OEMS',

    'Industrial enclosures and cabinets',

    'Custom performance fabrications',

  ]
  const image = {
    img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bxyqTxFDxOSTeLdomF15mKd9hxooWfPhCw&s',
    img2: 'https://t4.ftcdn.net/jpg/03/99/51/77/360_F_399517769_gUVJn5wXj1H7JczuFdw1dTyXK0ZE8rJf.jpg',
    img3: 'https://media.istockphoto.com/id/1355381823/photo/sheet-metal-bending-on-a-hydraulic-press-brake.jpg?s=612x612&w=0&k=20&c=VM7pG5pG3_xpAQQmiIABOsTJUCvny2DfHc1LlUPwn6c=',

  }
  return (
    <div className='h-full flex flex-col justify-evenly '>
      <div>
        <ImagesSliderDemo name={'Metal Bending'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default MetalBending