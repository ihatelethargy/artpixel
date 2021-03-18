import React from 'react'
import sliderOne from '../../images/tempslider.jpg'
import './Slider.scss'

function Slider() {
  return (
    <>
      <div className="sliderWrapper">
        <img src={sliderOne} alt="" />
      </div>
    </>
  )
}

export default Slider
