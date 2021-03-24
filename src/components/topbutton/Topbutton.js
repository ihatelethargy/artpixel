import React from 'react'
import './Topbutton.scss'
import { CaretUpOutlined } from '@ant-design/icons'

function Topbutton() {
  return (
    <>
      <a href="#sec1">
        <div className="topbuttonWrapper">
          <CaretUpOutlined style={{ fontSize: '24px', color: '#000' }} />
        </div>
      </a>
    </>
  )
}

export default Topbutton
