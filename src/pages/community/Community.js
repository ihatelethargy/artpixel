import React from 'react'
import { Route, Router } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import './Community.scss'

function Community() {
  return (
    <>
      <div className="communityWrapper">
        <Route component={CustomHeader} />
      </div>
    </>
  )
}

export default Community
