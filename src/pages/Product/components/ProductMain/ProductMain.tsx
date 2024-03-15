import React from "react";
import "./ProductMain.scss";
import { useMediaQuery } from "react-responsive";

function ProductMain() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="productMain">
      <div className="productMain__leftSide">
        <span className="productMain__breadcrumb">
          Home / Luggage / Made in Europe
        </span>
        <div className="productMain__head">
          <span className="productMain__collection">Proxis</span>
          <p className="productMain__name">
            Spinner expandable (4 wheels) 55cm
          </p>
          <div className="productMain__rating">★★★★☆ 4.4 (231)</div>
          <div className="productMain__priceWrapper">
            <span className="productMain__price">£359.00</span>
            <div className="productMain__availability">Available</div>
          </div>
          <a href="#" className="productMain__checkStore">
            Check availability for a store near you
          </a>
        </div>
        <div className="productMain__linksWrapper">
          <span className="productMain__link">Product details</span>
          <span className="productMain__link">Compare</span>
        </div>
        <div className="productMain__sizeWrapper">
          <div className="productMain__sizeTop">
            <p className="productMain__sizeInfo">
              SIZE
              <span className="productMain__dimension">55 x 40 x 20/23 cm</span>
            </p>
            <span className="productMain__sizeLink">Size guide</span>
          </div>
          <div className="productMain__selectableSize">
            <button className="productMain__size">55 cm (20/23cm)</button>
            <button className="productMain__size">55 cm (20/26cm)</button>
            <button className="productMain__size">69cm</button>
            <button className="productMain__size">75cm</button>
            <button className="productMain__size">81cm</button>
            <button className="productMain__size">86cm</button>
          </div>
        </div>
        <div className="productMain__colorWrapper">
          <div className="productMain__colorTop">
            <p className="productMain__colorInfo">
              COLOUR<span className="productMain__colorName">Petrol Blue</span>
            </p>
          </div>
          <div className="productMain__selectableColor">
            <div className="productMain__colorContainer">
              <a href="#" className="productMain__color"></a>
            </div>
            <div className="productMain__colorContainer">
              <a href="#" className="productMain__color blue"></a>
            </div>
            <div className="productMain__colorContainer">
              <a href="#" className="productMain__color green"></a>
            </div>
            <div className="productMain__colorContainer">
              <a href="#" className="productMain__color black"></a>
            </div>
            <div className="productMain__colorContainer">
              <a href="#" className="productMain__color magenta"></a>
            </div>
          </div>
        </div>
        <div className="productMain__buttonsWrapper">
          <button className="productMain__personaliseButton">
            {isMobile ? `£359.00 AVAILABLE` : 'Personalise your case '} 
          </button>
          <button className="productMain__addToCart">Add to Cart</button>
        </div>
      </div>
      <div className="productMain__rightSide">
        <div className="productMain__firstRow">
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw0b14a3ec/images/salsify/2b7d4558df45f038122702bf982dceb9a2fac774_s--_ZxWiRq5--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
        </div>
        <div className="productMain__secondRow">
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw0b14a3ec/images/salsify/2b7d4558df45f038122702bf982dceb9a2fac774_s--_ZxWiRq5--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw0a8c4147/images/salsify/5064809c667f28b4d09a28fbf8fbd1e72d4ef03a_s--uFLwpN-H--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dwcb05bd28/images/salsify/30a6e88423fd46844bbf855dec2b108b0c57e331_s--6bIYuQIR--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw612a9b37/images/salsify/7d97c89333c945e79267f5e90beb1ba70f29a184_s--gaNDy_zZ--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
        </div>
        <div className="productMain__thirdRow">
          <div className="productMain__imageWrapper">
            <img
              className="productMain__image"
              src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Sites-samsonite-product-catalog/default/dw0b14a3ec/images/salsify/2b7d4558df45f038122702bf982dceb9a2fac774_s--_ZxWiRq5--_fl_clip_pg_1_e_trim_c_fit_w_2000_h_3000_u_tcrttuyt8xafi2acibgb_fl_layer_apply_e_make_transparent.png?sw=600&sh=900"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMain;
