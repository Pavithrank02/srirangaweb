import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import ServicesComponent from '../components/ServicesComponent'

const PowderCoating = () => {
  const bullets = [
    'Metal brackets',
    'Front panels',
    'Sheet metal boxes',
    'Custom fabricated steel',
    'aluminum parts',

  ]

  const data = {
    t12: 'Powder Coating',
    t13: 'Services in Coimbatore',
    desc1: 'The powder coating process at APX York Sheet Metal forms a corrosion-resistant finish that you can apply to steel, brass, aluminum, iron or copper. In fact, almost any type of metal can undergo the powder method that creates a similar look to paint but is more durable. The technique begins by stripping the item to its bare metal by removing paints, finishes, rust, grease and dirt.',
    t21: 'Advantages of',
    t22: 'Powder Coating',
    desc2: 'When you rely on our powder-coated steel fabrication in Northern Maryland, you will see the many benefits of implementing the powder, whether you’re coating iron or steel. Our solutions are resistant to rust, chips, cracks, peeling and fading and are mar-resistant. It protects your unit from corrosion and is an environmentally-friendly process.',
    desc3: 'Our powder coating finish in Central PA covers fabricated sharp edges and is a hard, abrasion-resistant method. It’s less susceptible to imperfections compared to matte or gloss finishes and hides scratches and scrapes from your piece',
    desc4: 'APX York Sheet Metal is your go-to powder coating company in Northern Maryland, with hundreds of colors and textures available for your project. Ranging from purple, blue, green and yellow to red, orange, brown, black and pink, our colors come in different shades as well. Our experts can coat multi-colored sections and provide exact color matching.',
    t31: 'Our Powder ',
    t32: 'Coating Technology',
    desc5: 'At APX York Sheet Metal, our facility has an overhead continuous loop conveyor along with a three-stage phosphate wash system. Other technology we have includes:'
  }

  const benefits = [
    '22′ x 24′ Nordson powder coat booth.',

    '16′ x 38′ main oven',

    '10′ x 14′ auxiliary oven',
  ]
  const image = {
    img1: 'https://mccoymart.com/post/wp-content/uploads/Powder-Coating.png',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxK4u5RlHjsIXF92129GO1z-6jbzR9VkXL6Q&s',
    img3: 'https://www.researchgate.net/publication/312339720/figure/fig1/AS:461215412559872@1486973731019/Electrostatic-powder-coating-process.png',

  }
  return (
    <div className='h-full flex flex-col  '>
      <div>
        <ImagesSliderDemo name={'Powder Coating'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default PowderCoating