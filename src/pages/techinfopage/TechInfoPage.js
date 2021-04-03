import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import './TechInfoPage.scss'
import ContactUs from '../../components/contactus/ContactUs'

function TechInfoPage() {
  const [title, setTitle] = useState('기술정보')
  const [menu, setMenu] = useState(['기술정보'])
  const [menuToggle, setMenuToggle] = useState()
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/community') {
      setTitle('기술정보')
      setMenu(['기술정보'])
    }
  }, [history.location.pathname])

  return (
    <>
      <Route component={CustomHeader} />
      <div className="TechInfoPageWrapper">
        <div className="TechInfoPageImgWrapper"></div>

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

export default TechInfoPage
