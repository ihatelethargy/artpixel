import React from 'react'
import './Zeolite.scss'
import Zeo1 from '../../images/zeo1.png'
import Zeo2 from '../../images/zeo2.png'

function Zeolite() {
  return (
    <>
      <div className="ZeoliteWrapper">
        <div className="ZeoliteTitle">
          <p>Zeolite</p>
        </div>
        <div className="ZeoliteContent">
          <div className="boxWrapper">
            <span className="qmark">Zeolite 종류</span>
            <p>
              - 천연 Zeolite : 현재 약 39종이 발견됨 국내 포항, 영일, 감포
              등지에서 Clinoptilonite, Mordenite 2종이 발견되어 시판되고
              있으며대표적인 회사는 왕표화학임.
              <br />- 합성 Zeolite : 약 100여종 외국의 대표적인 회사
              <br />- UCC, Mobil사 등
              <br />- Zeolite A (3A, 4A, 5A)
              <br />- Si/Al ＝ 0.7 ～ 1.2
              <br />- Zeolite X
              <br />- Si/Al ＝ 1.0 ～ 1.5
              <br />- Zeolite Y
              <br />- Si/Al ＝ 1.5 ～ 3.0
              <br />- ZSM-5 및 기타
              <br />- Si/Al ＝ 3 ～ 약 100
            </p>
            <br />
            <br />
          </div>

          <div className="boxWrapper">
            <span className="qmark">Zeolite 구조</span>
            <div className="zeoTitle">
              <p>
                Mx/n[(AlO2)x(SiO2)y]․wH2O
                <br /> Crystalline Aluminosilicate
                <br /> 4A type : Na12[AlO2․SiO2]12․27H2O
              </p>
            </div>
            <div className="boxImgWrapper">
              <img src={Zeo1} alt="" />
              <img src={Zeo2} alt="" />
            </div>
            <div className="zeoContent">
              <p>
                Figure 4 The arrangement of the sodalite cage (truncated
                octahedral)
                <br /> in the framework structures of LTA and faujasite
              </p>
            </div>
          </div>
          <div className="boxWrapper end">
            <span className="qmark">Zeolite 예</span>
            <p>
              <span className="contentZeo">
                1) 담체의 예 : 유기물을 담지시켜 열적 안정성 증가, 분산성 증가,
                지속성 증가, 증량의 효과
              </span>
              <br />
              <span className="contentZeo">
                2) 이온 교환체의 예 : 분말세제 중 10～30 wt%까지 첨가(한국과
                같이 하천의 길이가 짧은 경우 인산염 계통을 사용하면 자정작용을
                하지 못함) 경수 → 연수(Ca2+제거) A type 제오라이트의 이온교환
                순서 1 양이온 : Ag ＞ Tl ＞ Na ＞ K ＞ NH4 ＞ Rb ＞ Li ＞ Cs 2
                양이온 : Zn ＞ Sr ＞ Ba ＞ Ca ＞ Co ＞ Ni ＞ Cd ＞ Hg ＞ Mg
              </span>
              <br />
              <span className="contentZeo">
                3) 소광제 : 구형의 입자를 가진 Zeolite를 이용하여 소광의 역할과
                증량제의 역할을 동시에 가짐
              </span>
              <br />
              <span className="contentZeo">
                4) 바이오 세라믹(원적외선 방사체) : Si/Al이 약 1일 때 원적외선
                방사 효과가 높은 것에 착안 – 천연 바이오 세라믹의 경우
                coloring에 문제가 있음
              </span>
              <br />
              <span className="contentZeo">
                5) 증량제 및 내열제 : 제품의 단가를 낮추기 위하여 일부 또는 다량
                첨가하는 증량제의 역할 및  무기 소재로써의 내열성 증가제의 효과
              </span>
              <br />
              <span className="contentZeo">
                6) 흡습제 : 액체나 기체중에 존재하는 수분을 제거하기 위하여
                사용함. (powder, pollet, bead type etc.)
              </span>
              <br />
              <span className="contentZeo">7) 가스 제거 및 분리 : PSA</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Zeolite
