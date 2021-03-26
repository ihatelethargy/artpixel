import React from 'react'
import { Link } from 'react-router-dom'
import './Business.scss'

function Business() {
  return (
    <>
      <div className="businessWrapper" id="sec2">
        <div className="layer">
          <div className="buttonTitle">
            <p>원천기술</p>
          </div>
          <div className="businessContent">
            <div className="round"></div>
            <div className="round"></div>
            <div className="round"></div>
          </div>

          <Link to="/origintech">
            <div className="goButton">
              <p>원천기술</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Business
