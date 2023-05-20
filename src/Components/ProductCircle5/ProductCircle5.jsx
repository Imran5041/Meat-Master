import React from 'react'
import Navigator from "../../Utils/Global/NavigationHistory";
import "./ProductCircle5.scss";
const ProductCircle5 = () => {
  return (
    <div className='ProductCircle5'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle5__picture2">
    <img src='/Images/fresh2.png' alt='fresh' />
</div>
    </div>
  )
}

export default ProductCircle5