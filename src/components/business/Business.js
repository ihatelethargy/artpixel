import React from 'react'
import { Link } from 'react-router-dom'
import './Business.scss'
import { SwapRightOutlined } from '@ant-design/icons'

function Business() {
  return (
    <>
      <div className="businessWrapper" id="sec2">
        <div className="layer">
          <div className="buttonTitle">
            <p>원천기술</p>
          </div>
          <div className="businessContent">
            <div className="round">
              <p>바이러스 항균</p>
            </div>
            <div className="round">
              <p>인체 안정성</p>
            </div>
            <div className="round">
              <p>세균/곰팡이 항균</p>
            </div>
          </div>

          <Link to="/origintech">
            <div className="goButton">
              <p>
                원천기술 <SwapRightOutlined />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Business
