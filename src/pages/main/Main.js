import React from 'react'
import { Route, Router } from 'react-router-dom'
import Business from '../../components/business/Business'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'
import Techinfo from '../../components/techinfo/Techinfo'
import './Main.scss'

function Main() {
  return (
    <>
      <div className="MainWrapper">
        <Route component={Header} />
        <Route component={Slider} />
        <Route component={Business} />
        <Route component={Products} />
        <Route component={Techinfo} />
        <Route component={Footer} />
      </div>
    </>
  )
}

export default Main
