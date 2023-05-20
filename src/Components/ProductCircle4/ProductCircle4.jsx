import React from 'react'
import Navigator from "../../Utils/Global/NavigationHistory";
import "./ProductCircle4.scss";
const ProductCircle4 = () => {
  return (
    <div className='ProductCircle4'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle4__picture3">
    <img src='/Images/fresh3.png' alt='fresh' />
</div>
    </div>
  )
}

export default ProductCircle4