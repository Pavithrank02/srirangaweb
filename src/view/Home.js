import React from 'react'
import { HeroParallaxDemo } from '../components/Show'
import { ImagesSliderDemo } from '../components/ImageSlider'
import Choose from '../components/Choose'

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