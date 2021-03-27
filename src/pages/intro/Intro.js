import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import ContentsLeft from '../../components/contentsleft/ContentsLeft.js'
import IntroImg from '../../images/introimg.jpeg'
import './Intro.scss'

function Intro({ menu, title }) {
  const history = useHistory()
  console.log(menu)

  return (
    <>
      <Route component={CustomHeader} />
      <div className="IntroWrapper">
        <div className="introImgWrapper">
          {/* <img src={IntroImg} alt="" /> */}
        </div>

        <div className="contentsWrapper">
          <div className="contentsLeft">
            <ContentsLeft title={title} menu={menu} />
            {/* menu={menu} */}
          </div>
          <div className="contentsRight"></div>
        </div>
      </div>
      <Route component={Footer} />
    </>
  )
}

export default Intro
