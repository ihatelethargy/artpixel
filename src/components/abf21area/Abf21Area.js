import React from 'react'
import './Abf21Area.scss'
import abf from '../../images/abf.png'

function Abf21Area() {
  return (
    <>
      <div className="rightAbf21AreaWrapper">
        <div className="rightAbf21AreaTitle">
          <p>ABF21 제품군</p>
        </div>
        <div className="rigithAbf21AreaContent">
          <p>
            <span className="qmark">ABF21 필름의 제품군은?</span>
            <div className="abfImgWrapper">
              <img src={abf} alt="" />
              <figcaption>Zeolite</figcaption>
            </div>
            우리의 생활 환경에서 사용하는 많은 용품들에 항균 기능을 부여 할 수
            있는 ABF21 필름을활용하여 상기의 효과가 더욱 극대화될 수 있다고 판단
            됩니다.
            <br />
            <br />
            자동차 내장제(대쉬보드, 핸들, 디스플레이 등), 핸드폰 커버, 메트리스
            등
            <br />
            <br />
            지하철, 병원, 학교, 관공서, 교회, 요양원, 식당, 휴게소, 박물관,
            새집증후군, 페인트 등 <br />
            <br />
            매트(유아용, 다용도, 스포츠) 등 터치보호필름, 승강기 버튼, 현관
            키패드, 테이블(책상, 데스크, 탁자) 등 <br />
            <br />
            원단류 (액자, 가방, 파우치, 클러치, 신발깔창) 등 <br />
            <br />
            필름류(미디어, 윈도우, PPF, 강화마루, 장판, 벽지) 등<br />
          </p>
        </div>
      </div>
    </>
  )
}

export default Abf21Area
