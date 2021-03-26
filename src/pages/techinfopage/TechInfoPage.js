import React from 'react'
import { Route, Router } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import './TechInfoPage.scss'

function TechInfoPage() {
  return (
    <>
      <div className="techinfopageWrapper">
        <Route component={CustomHeader} />
      </div>
    </>
  )
}

export default TechInfoPage
