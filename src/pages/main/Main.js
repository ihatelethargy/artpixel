import React from 'react'
import { Route, Router } from 'react-router-dom'
import Business from '../../components/business/Business'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import './Main.scss'

function Main() {
  return (
    <>
      <div className="MainWrapper">
        <Route component={Header} />
        <Route component={Slider} />
        <Route component={Business} />
      </div>
    </>
  )
}

export default Main
