import React from 'react'
import { Link } from 'react-router-dom'
import './Techinfo.scss'
import { SwapRightOutlined } from '@ant-design/icons'

function Techinfo() {
  return (
    <>
      <div className="TechInfoWrapper" id="sec4">
        <div className="layer">
          <div className="buttonTitle">
            <p>기술정보</p>
          </div>
          <div className="goButton">
            <Link to="/techinfo">
              <p>
                기술정보 <SwapRightOutlined />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Techinfo
