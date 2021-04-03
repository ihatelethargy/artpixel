import React from 'react'
import './ApplyArea.scss'
import Car from '../../images/item_car.png'
import ATF1 from '../../images/atf1.png'
import ATF2 from '../../images/atf2.png'
import INNER from '../../images/inner.png'
import INNER1 from '../../images/inner1.png'
import OUTER from '../../images/outter0.png'
import OUTER1 from '../../images/outter.png'
import MOBILE from '../../images/mobile.png'
import MOBILE1 from '../../images/mobile2.png'
import ETC from '../../images/etc.png'

function ApplyArea() {
  return (
    <>
      <div className="rightApplyAreaWrapper">
        <div className="rightApplyAreaTitle">
          <p>적용분야</p>
        </div>
        <div className="rigithApplyAreaContent">
          <span className="qmark">ABF21 필름의 적용분야</span>
        </div>
        <div className="rightApplyAreaSection">
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>자동차용 내장재</span>
            </div>
            <div className="itemImgWrapper">
              <img src={Car} alt="" />
              {/* <img src={Car} alt="" /> */}
            </div>
          </div>
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>기존 제품 / ATF 제품</span>
            </div>
            <div className="itemImgWrapper">
              <img src={ATF1} alt="" />
              <img src={ATF2} alt="" />
            </div>
          </div>
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>실내공간</span>
            </div>
            <div className="itemImgWrapper">
              <img src={INNER} alt="" />
              <img src={INNER1} alt="" />
            </div>
          </div>
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>외부기관</span>
            </div>
            <div className="itemImgWrapper">
              <img src={OUTER} alt="" />
              <img src={OUTER1} alt="" />
            </div>
          </div>
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>전자기기</span>
            </div>
            <div className="itemImgWrapper">
              <img src={MOBILE} alt="" />
              <img src={MOBILE1} alt="" />
            </div>
          </div>
          <div className="sectionItem">
            <div className="itemTitleWrapper">
              <span>가방 / 소품 / 악세사리</span>
            </div>
            <div className="itemImgWrapper">
              <img className="etc" src={ETC} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyArea
