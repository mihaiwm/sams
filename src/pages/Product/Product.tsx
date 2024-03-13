import React from 'react'
import './Product.scss';
import ProductMain from './components/ProductMain/ProductMain';
import ProductInformation from './components/ProductInformation/ProductInformation';

function Product() {
  return (
    <div>
      <ProductMain/>
      <ProductInformation/>
    </div>
  )
}

export default Product