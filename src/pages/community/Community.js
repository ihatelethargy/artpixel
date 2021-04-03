import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import ContentsLeft from '../../components/contentsleft/ContentsLeft.js'

import './Community.scss'
import ContactUs from '../../components/contactus/ContactUs'

function Community() {
  const [title, setTitle] = useState('Contact')
  const [menu, setMenu] = useState(['Contact'])
  const [menuToggle, setMenuToggle] = useState()
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/community') {
      setTitle('Contact')
      setMenu(['Contact'])
    }
  }, [history.location.pathname])

  return (
    <>
      <Route component={CustomHeader} />
      <div className="IntroWrapper">
        <div className="introImgWrapper"></div>

        <div className="contentsWrapper">
          <div className="contentsLeft">
            <ContactUs title={title} menu={menu} />
          </div>
        </div>
      </div>
      <Route component={Footer} />
    </>
  )
}

export default Community
