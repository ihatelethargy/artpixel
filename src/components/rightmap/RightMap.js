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
        <div className="rightMapbutton">
          <a
            target="_blank"
            href="https://map.naver.com/v5/search/%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EB%B4%89%EC%84%B1%EB%A1%9C67,%20%EB%8F%99%EA%B5%AD%ED%99%94%EA%B3%B5%20%EB%B6%80%EC%84%A4%EC%97%B0%EA%B5%AC%EC%86%8C%202%EC%B8%B5%20(%EC%A3%BC)%EC%95%84%ED%8A%B8%ED%94%BD%EC%85%80/address/14132247.858215075,4488224.981371991,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B5%B0%ED%8F%AC%EC%8B%9C%20%EB%B4%89%EC%84%B1%EB%A1%9C%2067,new?c=14132146.6898161,4488298.7556420,17,0,0,0,dh"
          >
            <button>상세주소 보기</button>
          </a>
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
