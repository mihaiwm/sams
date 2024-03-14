import React from 'react'
import './Product.scss';
import ProductMain from './components/ProductMain/ProductMain';
import ProductInformation from './components/ProductInformation/ProductInformation';
import Hero from '../../components/Hero/Hero';
import Carousel from '../../components/Carousel/Carousel';
import Benefit from '../../components/Benefit/Benefit';
import Card from '../../components/Card/Card';

function Product() {
  return (
    <div className="product">
      <ProductMain/>
      <ProductInformation/>
      <Carousel slidesToShowDesktop={2.5} slidesToShowMobile={1.5} title="Key Benefits" className="bg-gray">
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dw19c2fdfa/content-block/content-block_proxis-features_roxkin/content-block_proxis-features_roxkin_1686.jpg?sw=645&sh=470" title="Impressively resilient, unimaginably strong" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dw5f6a761c/content-block/content-block_proxis-features_madeineurope/content-block_proxis-features_madeineurope_1686.jpg?sw=645&sh=470" title="Made in europe" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dwb0037653/content-block/content-block_proxis-features_comfort/content-block_proxis-features_comfort_1686.jpg?sw=645&sh=470" title="Integrated usb port" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dw19c2fdfa/content-block/content-block_proxis-features_roxkin/content-block_proxis-features_roxkin_1686.jpg?sw=645&sh=470" title="Outstanding comfort" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dw5f6a761c/content-block/content-block_proxis-features_madeineurope/content-block_proxis-features_madeineurope_1686.jpg?sw=645&sh=470" title="Impressively resilient, unimaginably strong" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
        <Benefit imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dwb0037653/content-block/content-block_proxis-features_comfort/content-block_proxis-features_comfort_1686.jpg?sw=645&sh=470" title="Impressively resilient, unimaginably strong" description='Shells are made from Roxkin™, an innovative material that bounces back into shape easily and is highly resilient resisting shocks. It is exceptionally robust, thanks to its phenomenal layer-by-layer in-built strength.'/>
      </Carousel>
      <Hero/>
      <Carousel slidesToShowDesktop={3.5} slidesToShowMobile={1.5} title="Recommended for you">
        <Card imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dwe044e3b2/images/salsify/061dcba6d9e7aecf87b87bf0c1bc8c328aebf24a_s--Zh1Q0HUJ--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900" brand="C-LITE" description="Spinner (4 wheels) 81cm | 81 x 55 x 34 cm | 3.1 kg" price={379.00} colors={['red', 'green','blue','white', 'gray']}/>
        <Card imageSrc="https://www.samsonite.co.uk/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw1f8fbfa3/images/salsify/32c82ffff1b973fb29805f30b84b9b7e786a4bea_s--09BJaCaT--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png" brand="C-LITE" description="Spinner (4 wheels) 81cm | 81 x 55 x 34 cm | 3.1 kg" price={379.00} colors={['red', 'green','blue','white', 'gray']}/>
        <Card imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw168698be/images/salsify/17ca26061cee2a856792cba29b16099bb1be011b_s--AJGJFW0b--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900" brand="C-LITE" description="Spinner (4 wheels) 81cm | 81 x 55 x 34 cm | 3.1 kg" price={379.00} colors={['red', 'green','blue','white', 'gray']}/>
        <Card imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw38cc3ebf/images/salsify/46f55cef062adcc9ff11e7eb0f419fbc5d760b61_s--ulnwJT5n--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900" brand="C-LITE" description="Spinner (4 wheels) 81cm | 81 x 55 x 34 cm | 3.1 kg" price={379.00} colors={['red', 'green','blue','white', 'gray']}/>
        <Card imageSrc="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dwe044e3b2/images/salsify/061dcba6d9e7aecf87b87bf0c1bc8c328aebf24a_s--Zh1Q0HUJ--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900" brand="C-LITE" description="Spinner (4 wheels) 81cm | 81 x 55 x 34 cm | 3.1 kg" price={379.00} colors={['red', 'green','blue','white', 'gray']}/>
      </Carousel>
    </div>
  )
}

export default Product