import React from 'react'
import { ShimmerContentBlock } from "react-shimmer-effects";

const ShimmerUi = () => {
  return (
    <div
      className='top-20'
    >
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}

      />
    </div>
  )
}

export default ShimmerUi