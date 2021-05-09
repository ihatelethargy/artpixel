import React, { useEffect, useState } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import BusinessAreaContents from '../../components/businessareacontents/BusinessAreaContents'
import CustomHeader from '../../components/customheader/CustomHeader'
import Footer from '../../components/footer/Footer'
import OriginTechContents from '../../components/OriginTech/OriginTechContents'
import Techinfo from '../../components/techinfo/Techinfo'
import TechinfoContents from '../../components/techinfocontents/TechInfoContents'
import './TechInfoPage.scss'

function TechInfoPage() {
  const [title, setTitle] = useState('기술정보')
  const [menu, setMenu] = useState([
    '항균필름비교',
    'SGS DATA',
    '인체안전성 데이터',
    '특허출원',
  ])
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/origintech') {
      setTitle('기술정보')
      setMenu(['항균필름비교', 'SGS DATA', '인체안전성 데이터', '특허출원'])
    }
  }, [history.location.pathname])

  return (
    <>
      <Route component={CustomHeader} />
      <div className="IntroWrapper">
        <div className="introImgWrapper"></div>

        <div className="contentsWrapper">
          <div className="contentsLeft">
            <TechinfoContents title={title} menu={menu} />
            {/* <BusinessAreaContents title={title} menu={menu} /> */}
          </div>
        </div>
      </div>
      <Route component={Footer} />
    </>
  )
}

export default TechInfoPage
