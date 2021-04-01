import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './OriginTechContents.scss'

function BusinessAreaContents({ title, menu }) {
  const [menuToggle, setMenuToggle] = useState(0)
  const menuList = menu.map((item, index) => (
    <li onClick={() => setMenuToggle(index)}>{item}</li>
  ))

  return (
    <>
      <div className="contentsWrapper">
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
        <ToggleRight>
          {menuToggle === 0 && <div>기술소개</div>}
          {menuToggle === 1 && <div>원천기술</div>}
        </ToggleRight>
      </div>
    </>
  )
}

const ToggleRight = styled.div`
  width: 75%;
  border: 1px solid blue;
`

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
`

export default BusinessAreaContents
