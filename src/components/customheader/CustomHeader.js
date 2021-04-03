import React from 'react'
import './CustomHeader.scss'
import logo from '../../images/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'

function CustomHeader() {
  return (
    <>
      <div className="headerWrapper">
        <div className="logoWrapper">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menuWrapper">
          <ul className="menuUl container">
            <Link to="/intro">
              <li className="one">
                <a className="cool-link"> 회사소개</a>
              </li>
            </Link>
            <Link to="/origintech">
              <li>
                <a className="cool-link">원천기술</a>
              </li>
            </Link>
            <Link to="/businessarea">
              <li>
                <a className="cool-link">사업영역</a>
              </li>
            </Link>
            <Link to="/techinfo">
              <li>
                <a className="cool-link">기술정보</a>
              </li>
            </Link>
            <Link to="/community">
              <li>
                <a className="cool-link">ContactUs</a>
              </li>
            </Link>
          </ul>

          {/* <div className="section">f</div> */}
        </div>
      </div>
    </>
  )
}

export default CustomHeader
