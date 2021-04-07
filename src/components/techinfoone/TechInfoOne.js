import React from 'react'
import './TechInfoOne.scss'
import Filminter from '../../images/filminter.png'

function TechInfoOne() {
  return (
    <>
      <div className="TechInfoOneWrapper">
        <div className="TechInfoOneTitle">
          <p>항균필름비교</p>
        </div>
        <div className="TechInfoOneContent">
          <p>
            <span className="qmark">항균필름비교</span>
          </p>
          <img src={Filminter} alt="" />
        </div>
      </div>
    </>
  )
}

export default TechInfoOne
