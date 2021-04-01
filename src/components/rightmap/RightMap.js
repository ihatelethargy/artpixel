import React from 'react'
import './RightMap.scss'
import GoogleMap from '../map/Map'

function RightMap() {
  return (
    <>
      <div className="rightMapWrapper">
        <div className="rightMapTitle">
          <p>오시는길</p>
        </div>
        <div className="rigithIntroContent"></div>
        <div className="rightIntroSign"></div>
      </div>
      <GoogleMap
        onLoad={map => {
          const bounds = new window.google.maps.LatLngBounds()
          map.fitBounds(bounds)
        }}
        onUnmount={map => {
          // do your stuff before map is unmounted
        }}
      />
    </>
  )
}

export default RightMap
