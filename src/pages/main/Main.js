import React from 'react'
import { Route, Router } from 'react-router-dom'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import './Main.scss'

function Main() {
  return (
    <>
      <div className="MainWrapper">
        <Route component={Header} />
        <Route component={Slider} />
      </div>
    </>
  )
}

export default Main
