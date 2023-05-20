import React from 'react'
import Navigator from "../../Utils/Global/NavigationHistory";
import "./ProductCircle.scss";
const ProductCircle = () => {
  return (
    <div className='ProductCircle'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle__picture1">
    <img src='/Images/fresh6.png' alt='fresh' />
</div>

    </div>
  )
}

export default ProductCircle