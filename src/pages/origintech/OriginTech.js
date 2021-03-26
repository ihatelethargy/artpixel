import React from 'react'
import { Route, Router } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import './OriginTech.scss'

function OriginTech() {
  return (
    <>
      <div className="origintechWrapper">
        <Route component={CustomHeader} />
      </div>
    </>
  )
}

export default OriginTech
