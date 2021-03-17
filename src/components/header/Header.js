import React from 'react'
import './Header.scss'
import logo from '../../images/logo.png'

function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="logoWrapper">
          <div className="logoImgWrapper">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="menuWrapper">
          <ul className="menuUl">
            <li>회사소개</li>
            <li>사업분야</li>
            <li>제품소개</li>
            <li>기술정보</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      <div className="section"></div>
    </>
  )
}

export default Header
