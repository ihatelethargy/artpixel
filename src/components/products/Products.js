import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/businessarea">
              <p>실내공간</p>
            </Link>
          </div>

          <div className="item b">
            <Link to="/businessarea">
              <p>자동차</p>
            </Link>
          </div>

          <div className="item c">
            <Link to="/businessarea">
              <p>전자기기</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
