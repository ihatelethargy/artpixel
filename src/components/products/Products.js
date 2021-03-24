import React from 'react'
import './Products.scss'

function Products() {
  return (
    <>
      <div className="productsWrapper" id="sec3">
        {/* <div className="titleWrapper">
          <p>사업영역</p>
        </div> */}

        <div className="itemWrapper">
          <div className="item a">
            <p>실내공간</p>
          </div>
          <div className="item b">
            <p>자동차</p>
          </div>
          <div className="item c">
            <p>전자기기</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
