import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import OriginTechContents from '../../components/OriginTech/OriginTechContents'
import './OriginTech.scss'

function OriginTech() {
  const [title, setTitle] = useState('원천기술')
  const [menu, setMenu] = useState(['기술소개', '원천기술'])
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/origintech') {
      setTitle('원천기술')
      setMenu(['기술소개', '원천기술'])
    }
  }, [history.location.pathname])

  return (
    <>
      <Route component={CustomHeader} />
      <div className="IntroWrapper">
        <div className="introImgWrapper"></div>

        <div className="contentsWrapper">
          <div className="contentsLeft">
            <OriginTechContents title={title} menu={menu} />
          </div>
        </div>
      </div>
      <Route component={Footer} />
    </>
  )
}

export default OriginTech
