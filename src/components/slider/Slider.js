import React, { useRef } from 'react'
import sliderOne from '../../images/sliderImg1.png'
import sliderTwo from '../../images/sliderImg2.png'
import sliderThree from '../../images/sliderImg3.png'
import './Slider.scss'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'

const contentStyle1 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  marginTop: '9vh',
}

const contentStyle2 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  marginTop: '9vh',
}

const contentStyle3 = {
  height: '91vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  marginTop: '9vh',
}

function Slider() {
  return (
    <>
      {/* <div className="sliderWrapper">
        <img src={sliderOne} alt="" />
      </div> */}
      <div className="sliderWrapper" id="sec1">
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
      </div>
    </>
  )
}

export default Slider
