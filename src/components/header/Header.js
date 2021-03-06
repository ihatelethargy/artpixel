import React from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="logoWrapper">
          <div className="logoImgWrapper">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="menuWrapper">
          <ul className="menuUl container">
            <li className="one">
              {/* <a className="cool-link" href="#sec1"> */}
              <Link to="/intro">회사소개</Link>
              {/* </a> */}
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
              <Link to="/community">ContactUs</Link>
            </li>
          </ul>

          {/* <div className="section">f</div> */}
        </div>
      </div>
    </>
  )
}

export default Header
