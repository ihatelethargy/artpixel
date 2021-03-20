import React, { useRef } from 'react'
import sliderOne from '../../images/sliderImg1.jpeg'
import sliderTwo from '../../images/sliderImg2.jpg'
import sliderThree from '../../images/sliderImg3.jpeg'
import './Slider.scss'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'

const contentStyle1 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // backgroundImage: { sliderOne },
  marginTop: '9vh',
}

const contentStyle2 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'navy',
  marginTop: '9vh',
}

const contentStyle3 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#000',
  // paddingTop: '9vh',
  marginTop: '9vh',
}

function Slider() {
  return (
    <>
      {/* <div className="sliderWrapper">
        <img src={sliderOne} alt="" />
      </div> */}
      <Carousel autoplay clanssName="test">
        <div>
          <h3 style={contentStyle1}>
            <div className="slideOne">
              <img src={sliderOne} alt="" />
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle2}>
            <div className="slideOne">
              <img src={sliderTwo} alt="" />
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle3}>
            <div className="slideOne">
              <img src={sliderThree} alt="" />
            </div>
          </h3>
        </div>
      </Carousel>
    </>
  )
}

export default Slider
