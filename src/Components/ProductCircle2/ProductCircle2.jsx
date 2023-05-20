import React from 'react'
import Navigator from "../../Utils/Global/NavigationHistory";
import "./ProductCircle2.scss";
const ProductCircle2 = () => {
  return (
    <div className='ProductCircle2'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle2__picture5">
    <img src='/Images/fresh5.png' alt='fresh' />
</div>
    </div>
  )
}

export default ProductCircle2