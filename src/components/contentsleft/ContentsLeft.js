import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './ContentsLeft.scss'

function ContentsLeft({ title, menu }) {
  const [menuToggle, setMenuToggle] = useState(0)
  const menuList = menu.map((item, index) => (
    <li onClick={() => setMenuToggle(index)}>{item}</li>
  ))

  return (
    <>
      <div className="contentsLeftComponent">
        <div className="leftHeaderTitle">
          <p>{title}</p>
        </div>
        <div className="leftButtonWrapper">
          <ToggleUl toggle={menuToggle} className="toggleUl">
            {menuList}
          </ToggleUl>
        </div>
      </div>
    </>
  )
}

const ToggleUl = styled.ul`
  ${props =>
    props.toggle === 0 &&
    css`
      @media screen and (min-width: 1024px) {
        li:nth-child(${props.toggle + 1}) {
          background-color: #184e87;
          color: #fff;
        }
      }
    `}
  ${props =>
    props.toggle === 1 &&
    css`
      @media screen and (min-width: 1024px) {
        li:nth-child(${props.toggle + 1}) {
          background-color: #184e87;
          color: #fff;
        }
      }
    `}
    ${props =>
    props.toggle === 2 &&
    css`
      @media screen and (min-width: 1024px) {
        li:nth-child(${props.toggle + 1}) {
          background-color: #184e87;
          color: #fff;
        }
      }
    `}
`

export default ContentsLeft
