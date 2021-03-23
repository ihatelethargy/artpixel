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
          <ul className="menuUl container">
            <li className="one">
              <a className="cool-link" href="#sec1">
                회사소개
              </a>
            </li>
            <li>
              <a href="#sec2" className="cool-link">
                원천기술
              </a>
            </li>
            <li>
              <a className="cool-link" href="#sec3">
                사업영역
              </a>
            </li>
            <li>
              <a className="cool-link" href="#sec4">
                기술정보
              </a>
            </li>
            <li>
              <a className="cool-link" href="sec5">
                Community
              </a>
            </li>
          </ul>

          {/* <div className="section">f</div> */}
        </div>
      </div>
    </>
  )
}

export default Header
