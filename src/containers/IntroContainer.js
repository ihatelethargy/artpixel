import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Intro from '../pages/intro/Intro'

function IntroContainer() {
  const [title, setTitle] = useState()
  const [menu, setMenu] = useState()
  const history = useHistory()

  useEffect(() => {
    console.log(history.location.pathname)
    if (history.location.pathname === '/intro') {
      setTitle('회사소개')
      setMenu(['인사말', '경영진', '오시는길'])
    }
  }, [history.location.pathname])

  return <Route component={Intro} title={title} menu={menu} />
}

export default IntroContainer
