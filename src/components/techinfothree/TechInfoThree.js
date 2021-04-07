import React from 'react'
import './TechInfoThree.scss'

function TechInfoThree() {
  return (
    <>
      <div className="TechInfoThreeWrapper">
        <div className="TechInfoThreeTitle">
          <p>인체안전성 데이터</p>
        </div>
        <div className="TechInfoThreeContent">
          <p>
            <span className="qmark">안전성</span>
            영국의 HUNTINGDON LIFE SCIENCES(생명과학연구소)에 의한 각종 안전성에
            관한 실험에서 지극히 높은 안전성을 갖고 있다고 확인되었다. <br />
            <br />
            <span className="strong">(1) 급성 경구독성</span> <br />
            <br />
            쥐에게 물리적 최대 투여 량인 2000mg/kg체중의 투여로도 한 마리의
            사망도 없었고, 투여 후의 체중감소도 보이지 않았다. 실험수 50% 치사
            농도인 LD50은 2000mg 이상으로 무독성이 높은 것을 확인할 수
            있었다.(식용 소금의 LD50은 1500mg/kg체중) <br />
            [영국 HUNTINGDON LIFE SCIENCES, 시험번호 SWO 003/974112보고서]{' '}
            <br />
            <br />
            <span className="strong">(2) 피부 자극성시험</span> <br />
            <br />
            토끼 등 부위의 털을 깍아서 건상피부에 주사바늘로 진피에 상처를 주지
            않을 정도로 우물정자 형태의 상처를 낸 각질의 박리피부에 0.5g을
            24시간 점착 후 72시간까지의 경과를 관찰하였으며, 습진이나 홍반에
            의한 피부반응은 전혀 발생하지 않았다(음성).
            <br />
            [영국 HUNTINGDON LIFE SCIENCES, 시험번호 SWO 004/974074/SE보고서]
            <br />
            <br /> <span className="strong">(3) 복귀돌연변이시험</span> <br />
            <br />
            대장균과 살모넬라균에서의 5단계 농도의 복귀돌연변이시험에서 직접법,
            대사활성화법 및 처리농도에 관계없이 모두 음성 대조군과 유사한
            복귀돌연변이 집락수를 나타내어 돌연변이 유발성이 없는 것으로
            판단되었다.(음성).
          </p>
        </div>

        <div className="TechInfoThreeContent">
          <p>
            <span className="qmark">세균, 곰팡이 및 바이러스에 항균효과</span>
            은이온 및 아연이온의 효과에 따라 대장균, 녹농균, 살모넬라균 등 그램
            음성세균류와 황색포도구균, MRSA 등 그램 양성세균류, 누룩곰팡이,
            푸른곰팡이 등 곰팡이류와 O-157바이러스 등 광범위한미생물에 대해
            항균작용을 나타내고 있다. 대장균에 대한 0.5%w/w의 박테사이드
            D-value(세균의 90% 감소)는 9분대로 나타났다. <br />
            [영국 HUNTINGDON LIFE SCIENCES, 시험번호 SWO 001/974105 보고서]
            <br />
            <br />
            미국의 FDA, 일본의 후생성 및 유럽의 EU등 전 세계에서 가장 유력한
            공인기관에서인정하는 영국의 연구소인 HUNTINGDON LIFE SCIENCES Ltd.
            로부터 인체 안정성 및 품질을 인증받아인체에 전혀 무해함과 우수한
            항균성이 입증된 제품으로, 내수용 또는 수출용 항균 상품에 투입 할
            경우별도의 인증이 필요하지 않습니다. 자세한 사항은 별도의 MSDS를
            참조하시기 바랍니다.
          </p>
        </div>
      </div>
    </>
  )
}

export default TechInfoThree
