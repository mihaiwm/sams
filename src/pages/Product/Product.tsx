import React from 'react'
import './Product.scss';
import ProductMain from './components/ProductMain/ProductMain';
import ProductInformation from './components/ProductInformation/ProductInformation';
import Hero from '../../components/Hero/Hero';

function Product() {
  return (
    <div className="product">
      <ProductMain/>
      <ProductInformation/>
      <Hero/>
    </div>
  )
}

export default Product