import React from 'react'
import inter1 from '../../images/inter.png'
import inter2 from '../../images/inter2.png'
import './AntiInter.scss'

function AntiInter() {
  return (
    <>
      <div className="ZeoliteWrapper">
        <div className="ZeoliteTitle">
          <p>향균제비교</p>
        </div>
        <div className="ZeoliteContent">
          <div className="boxWrapper">
            <span className="qmark">유기항균제 vs 무기항균제</span>
            <p></p>
          </div>

          <div className="antiImgWrapper">
            <img src={inter1} alt="" />
            <img src={inter2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AntiInter
