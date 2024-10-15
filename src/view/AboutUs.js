import React from 'react'
import { ImagesSliderDemo } from '../Corousal'
import CompanyDesc from '../CompanyDesc'
import { LayoutGridDemo } from '../ImageLayout'
import { AnimatedTooltipPreview } from '../ToolTip'
import TwoColumnTable from '../FactTable'
import Choose from '../Choose'

const AboutUs = () => {
  return (
    <div>
      <ImagesSliderDemo name={'Our Company'} />
      <CompanyDesc />
      <LayoutGridDemo />
      <AnimatedTooltipPreview />
      <TwoColumnTable />
      <Choose />
    </div>
  )
}

export default AboutUs