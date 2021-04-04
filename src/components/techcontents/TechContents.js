import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import ContactRight from '../contactright/ContactRight'
import ContactUs from '../contactus/ContactUs'
import RightIntro from '../rightcontents/RightIntro'
import RightMap from '../rightmap/RightMap'
import TechRight from '../techright/TechRight'
import './TechContents.scss'

function TechContents({ title, menu, compo }) {
  const [menuToggle, setMenuToggle] = useState(0)
  const menuList = menu.map((item, index) => (
    <li onClick={() => setMenuToggle(index)}>{item} </li>
  ))

  return (
    <>
      <div className="techContentsWrapper">
        <div className="TechContentsLeftComponent">
          <div className="leftHeaderTitle">
            <p>{title}</p>
          </div>
          <div className="leftButtonWrapper">
            <ToggleUl toggle={menuToggle} className="toggleUl">
              {menuList}
            </ToggleUl>
          </div>
        </div>
        <ToggleRight>{menuToggle === 0 && <TechRight />}</ToggleRight>
        {/* <ToggleRight>{menuToggle === 0 && <ContactRight />}</ToggleRight> */}
      </div>
    </>
  )
}

const ToggleRight = styled.div`
  width: 75%;
  /* border: 1px solid blue; */
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
`

export default TechContents
