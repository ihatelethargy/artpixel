import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import ContentsLeft from '../../components/contentsleft/ContentsLeft.js'

import './Intro.scss'

function Intro() {
  const [title, setTitle] = useState('회사소개')
  const [menu, setMenu] = useState(['인사말', '오시는길'])
  const [menuToggle, setMenuToggle] = useState(0)
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/intro') {
      setTitle('회사소개')
      setMenu(['인사말', '오시는길'])
    }
  }, [history.location.pathname])

  return (
    <>
      <Route component={CustomHeader} />
      <div className="IntroWrapper">
        <div className="introImgWrapper"></div>

        <div className="contentsWrapper">
          <div className="contentsLeft">
            <ContentsLeft title={title} menu={menu} />
          </div>
        </div>
      </div>
      <Route component={Footer} />
    </>
  )
}

export default Intro
