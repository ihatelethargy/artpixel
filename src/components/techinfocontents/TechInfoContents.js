import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import ApplyArea from '../applyarea/ApplyArea'
import TechInfoOne from '../techinfoone/TechInfoOne'
import TechInfoThree from '../techinfothree/TechInfoThree'
import TechInfoTwo from '../techinfotwo/TechInfoTwo'
import './TechInfoContents.scss'

function TechinfoContents({ title, menu }) {
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
          {menuToggle === 0 && <TechInfoOne />}
          {menuToggle === 1 && <TechInfoTwo />}
          {menuToggle === 2 && <TechInfoThree />}
        </ToggleRight>
      </div>
    </>
  )
}

const ToggleRight = styled.div`
  width: 75%;
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

export default TechinfoContents
