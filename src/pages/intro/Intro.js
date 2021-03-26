import React from 'react'
import { Route, Router } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import './Intro.scss'

function Intro() {
  return (
    <>
      <div className="IntroWrapper">
        <Route component={CustomHeader} />
      </div>
    </>
  )
}

export default Intro
