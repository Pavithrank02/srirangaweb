import React from 'react'
import ServicesComponent from '../components/ServicesComponent'
import { ImagesSliderDemo } from '../components/Corousal'

const MetalShearing = () => {
  const bullets = [
    'Aluminum',
    'Hot rolled steel',
    'Titanium',
    ' Galvanized steel',

  ]

  const data = {
    t11: 'What Is',
    t12: 'Metal Shearing',
    desc1: 'Are you in need of sheet metal shearing services in Coimbatore and Tamil Nadu? Then you could likely benefit from our services as a leading provider of precision metal cutting in central Pennsylvania for decades',
    t22: 'Plasma Cutters',
    desc2: 'The only drawback of implementing shears is that it puts excessive stress on the material. Massive amounts of force can cause thicker elements to bow instead of cut, which is why the technique works best for thinner materials that require straight, clean-cut lines.',
    desc3: 'Using shears to cut materials is the process of placing a significant amount of perpendicular force on a sheet, which will cause it to tear. Shears create accurate and clean edges as the moving blades slice at high speeds. It’s a precise process and can take on large or small projects to achieve almost any shape. APX York Sheet Metal can shear materials such as:',
    desc4: 'There are several types of materials that can be used as input materials for our laser cutting services in central Pennsylvania, such as:',
    t31: 'Benefits of',
    t32: 'Shearing',
    desc5: 'Also called die cutting, the method allows us to cut small lengths of any material because we can mount shearing blades at an angle to reduce the necessary shearing force. It’s ideal for people who need customized sheet metal fabrication solutions, as it produces minimal to no kerf, which is a slit produced by cutting.:'
  }

  const benefits = [
    'Another advantage of shearing is that is results in almost no loss of material.',

    'It uses shear blades instead of burning or melting like other processes, because edges create smoother cuts with less distortionn.',

    'Shearing is the most popular technique because of its speed and cost-effective benefit, as well as being able to cut a straight edge and form any shape.',


  ]
  const image = {
    img1: 'https://www.metals-inc.com/wp-content/uploads/2016/02/metal-shearing-example.jpg',
    img2: 'https://fractory.com/wp-content/uploads/2023/06/sheet-metal-shearing-operations.jpg',
    img3: 'https://www.primalasercut.com/wp-content/uploads/2022/06/metal-shearing-machine01.jpg',

  }
  return (
    <div className='h-full flex flex-col justify-evenly '>
      <div>
        <ImagesSliderDemo name={'Metal Shearing'} />
      </div>
      <ServicesComponent benefits={benefits} image={image} bullets={bullets} data={data} />

    </div>
  )
}

export default MetalShearing