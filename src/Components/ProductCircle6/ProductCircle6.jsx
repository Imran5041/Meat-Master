import React from 'react'
import Navigator from "../../Utils/Global/NavigationHistory";
import "./ProductCircle6.scss";
const ProductCircle6 = () => {
  return (
    <div className='ProductCircle6'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle6__picture1">
    <img src='/Images/fresh.png' alt='fresh' />
</div>
    </div>
  )
}

export default ProductCircle6