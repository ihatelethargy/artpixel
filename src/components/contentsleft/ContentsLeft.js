import React from 'react'
import './ContentsLeft.scss'

function ContentsLeft({ title, menu }) {
  console.log(menu)
  const menuList = menu.map(item => <li>{item}</li>)

  return (
    <>
      <div className="contentsLeftComponent">
        <div className="leftHeaderTitle">
          <p>{title}</p>
        </div>
        <div className="leftButtonWrapper">
          <ul>{menuList}</ul>
        </div>
      </div>
    </>
  )
}

export default ContentsLeft
