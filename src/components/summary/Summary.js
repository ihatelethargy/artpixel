import React from 'react'
import './Summary.scss'

function Summary() {
  return (
    <>
      <div className="SummaryWrapper">
        <div className="SummaryTitle">
          <p>개요</p>
        </div>
        <div className="SummaryContent">
          <div className="boxWrapper">
            <span className="qmark">개요</span>
            <p>
              1756년에 끓는 돌이라는 의미의 천연 제오라이트가 최초로
              발견되었으며, 그 이후 약 39종의 천연제오라이트가 발견되었고, 약
              100여종의 제오라이트가 합성되었다.
              <br />
              <br />
              이들 제오라이트는 짧은 역사를 가지고 있지만, 산업의 발달에 미치는
              영향은 매우 크다고 할 수 있다. 아직도 이들의 효용성 및 적용에
              대하여 밝혀야 될 부분들이 남아 있다.
              <br />
              <br />
            </p>
          </div>

          <div className="boxWrapper">
            <span className="qmark">화학식</span>
            <p>
              제오라이트는 신생대 3기의 화산재가 속성작용을 받아 생성된 Alumino
              Silicate계의 광물로써 일반적인 화학식은 아래와 같이 표현될 수
              있다.
              <br />
              MxDy[Alx+2ySin-(x+2y)O2n]mH2O <br />M : 1 알칼리 금속, D : 2
              알칼리 토금속
              <br />
              <br />
            </p>
          </div>

          <div className="boxWrapper">
            <span className="qmark">상업적 이용 예</span>
            <p>
              촉매
              <br /> 담체
              <br /> 이온교환제
              <br /> 소광제
              <br /> 바이오세라믹
              <br /> 증량제 및 내열성 증가제
              <br /> 흡습제
              <br /> gas제거 및 분리
              <br /> 항균제
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary
