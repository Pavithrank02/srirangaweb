import React from 'react'
import Choose from '../components/Choose'
import { HeroParallaxDemo } from '../components/Show'
import { ImagesSliderDemo } from '../components/ImageSlider'

const Home = () => {
  return (
    <div>
      <HeroParallaxDemo />
      <ImagesSliderDemo />
      <Choose />
    </div>
  )
}

export default Home