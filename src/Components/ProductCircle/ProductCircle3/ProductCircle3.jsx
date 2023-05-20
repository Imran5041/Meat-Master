import React from 'react'
import Navigator from '../../../Utils/Global/NavigationHistory';
import "./ProductCircle3.scss";
const ProductCircle3 = () => {
  return (
    <div className='ProductCircle3'
    onClick={() => {
        Navigator.push("/view-product/1");
      }}>
<div className="ProductCircle3__picture4">
    <img src='/Images/fresh4.png' alt='fresh' />
</div>
    </div>
  )
}

export default ProductCircle3