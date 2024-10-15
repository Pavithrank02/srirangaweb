import React from 'react'
import { ImagesSliderDemo } from '../components/Corousal'
import CompanyDesc from '../components/CompanyDesc'
import { LayoutGridDemo } from '../components/ImageLayout'
import { AnimatedTooltipPreview } from '../components/ToolTip'
import TwoColumnTable from '../components/FactTable'
import Choose from '../components/Choose'

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