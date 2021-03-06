import React, { useRef } from 'react'
import sliderOne from '../../images/sliderImg1-min.png'
import sliderTwo from '../../images/sliderImg2-min.png'
import sliderThree from '../../images/sliderImg3-min.png'
import './Slider.scss'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'

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
      <Link to="/intro">
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
      </Link>
    </>
  )
}

export default Slider
