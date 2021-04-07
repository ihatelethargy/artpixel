import React from 'react'
import './TechInfoTwo.scss'
import hang1 from '../../images/hang1.png'
import hang2 from '../../images/hang2.png'
import jung1 from '../../images/jung1.png'
import jung2 from '../../images/jung2.png'

function TechInfoTwo() {
  return (
    <>
      <div className="TechInfoTwoWrapper">
        <div className="TechInfoTwoTitle">
          <p>SGS 데이터</p>
        </div>
        <div className="TechInfoTwoContent">
          <p>
            <span className="qmark">항균 SGS DATA</span>

            <div className="sgsImgWrapper">
              <img src={hang1} alt="" />
              <img src={hang2} alt="" />
            </div>
          </p>
        </div>

        <div className="TechInfoTwoContent">
          <p>
            <span className="qmark">중금속 SGS DATA</span>
            <div className="sgsImgWrapper">
              <img src={jung1} alt="" />
              <img src={jung2} alt="" />
            </div>
          </p>
        </div>
      </div>
    </>
  )
}

export default TechInfoTwo
