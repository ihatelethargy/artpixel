import React from 'react'
import './Footer.scss'
import logo from '../../images/logo1.png'

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="logoWrapper">
          <img src={logo} />
        </div>
        <div className="contentWrapper">
          <p>경기도 군포시 봉성로67, 동국화공 부설연구소 2층 (주)아트픽셀</p>
          <br />
          <p>Copyright &copy; ARTPIXEL All Rights Reserved</p>
        </div>
        <div className="contactWrapper"></div>
      </div>
    </>
  )
}

export default Footer
