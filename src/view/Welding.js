import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import ServicesComponent from '../components/ServicesComponent'

const Welding = () => {
  const bullets = [
    'Construction equipment manufacturers',

    'Custom performance fabrications',

    'Energy and environmental solution providers',

    'Industrial enclosures and cabinets',

    'Manufacturing and machinery OEMs',

    'Material handling and logistics solution providers',

    'Web handling and printing equipment OEMs',

  ]

  const data = {
    t11: 'Sheet ',
    t12: 'Metal Welding',
    t13: 'PA & MD',
    desc1: 'Are you in need of steel welding company services in Coimbatore and Tamil Nadu? Then you could likely benefit from our services as a leading provider of precision metal cutting in Coimbatore for decades',
    t21: 'MIG & TIG',
    t22: 'Welding Methods',
    desc2: 'By choosing the correct welding procedure for your parts, we can shorten turn around times & provide premium-quality results. The main difference between MIG — metal inert gas — and TIG — tungsten inert gas — is that one has a constant feeding wire and the other doesn’t. While TIG requires you to use welding rods and feed them through the weld puddle, MIG has a continuous flow. However, both use an electric arc to make welding possible',
    desc3: 'MIG is an easy and simple process where a welder works with a continuously feeding spool of wire. The method involves burning the metal and fusing the base and parent metals together. It can work with materials such as stainless steel, mild steel and aluminum. While we can weld a range of thicknesses, MIG is ideal for forming thicker materials and in less time compared to TIG. Also known as gas metal arc welding, it’s a faster technique and is easier to use, more forgiving and great for first-timers',
    desc4: 'There are several types of materials that can be used as input materials for our laser cutting services in central Pennsylvania, such as:',
    t31: 'Our Metal Welding',
    t32: 'Technology',
    desc5: 'Our sheet metal welding services in Central PA deliver custom welding with modern machines and technology. Our trained engineers provide precise and efficient manufacturing abilities using the right tools to give you the parts that match your requirements. Our technology includes'
  }

  const benefits = [
    'TBetterman Stud Welder',

    'HyperTherm Plasma Cutter',

    'Lincoln Square Wave',

    'Loors Spot Welders',

    'Miller Deltaweld',

  ]
  const image = {
    img1: 'https://www.adorwelding.com/wp-content/uploads/2021/06/banner-img.png',
    img2: 'https://static.vecteezy.com/system/resources/thumbnails/036/148/811/small_2x/ai-generated-welder-working-wearing-mask-industrial-safety-concept-photo.jpg',
    img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeWqHBaO-RjggBFLjymoQoG675cLeu2qifw&s',

  }
  return (
    <div className='h-full flex flex-col justify-evenly '>
      <div>
        <ImagesSliderDemo name={'Welding'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default Welding