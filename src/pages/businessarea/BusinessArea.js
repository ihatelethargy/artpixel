import React, { useEffect } from 'react'
import { Route, Router, useHistory } from 'react-router-dom'
import CustomHeader from '../../components/customheader/CustomHeader'
import './BusinessArea.scss'

function BusinessArea() {
  const history = useHistory()
  useEffect(() => {
    if (history.location.pathname === '/businessarea') {
      console.log('here is businessarea page')
    }
  }, [history.location.pathname])

  return (
    <>
      <div className="origintechWrapper">
        <Route component={CustomHeader} />
      </div>
    </>
  )
}

export default BusinessArea
