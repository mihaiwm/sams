import React from "react";
import "./Welfare.scss";
import { TfiWorld } from "react-icons/tfi";
import { GrPowerCycle, GrSecure } from "react-icons/gr";
import { TbClockBolt } from "react-icons/tb";
function Welfare() {
  return (
    <div className="welfare">
      <div className="welfare__benefit">
        <div className="welfare__iconWrapper">
          <TbClockBolt className="welfare__icon" />
        </div>
        <div className="welfare__content">
          <h5 className="welfare__title">
            Fast free standard delivery starting from £100
          </h5>
          <p className="welfare__description">
            Samsonite uses only the best courier services and guarantees the
            safe delivery of all your online orders
          </p>
        </div>
      </div>
      <div className="welfare__benefit">
        <div className="welfare__iconWrapper">
          <GrPowerCycle className="welfare__icon" />
        </div>
        <div className="welfare__content">
          <h5 className="welfare__title">Return are free</h5>
          <p className="welfare__description">
            Shopping at Samsonite is risk-free. We guarantee your satisfaction
            by offering free returns.
          </p>
        </div>
      </div>
      <div className="welfare__benefit">
        <div className="welfare__iconWrapper">
          <GrSecure className="welfare__icon" />
        </div>
        <div className="welfare__content">
          <h5 className="welfare__title">Secure payment</h5>
          <p className="welfare__description">
            Secure Socket Layer (SSL) encryption is used for every transaction
            in order to ensure that your order is secure.
          </p>
        </div>
      </div>
      <div className="welfare__benefit">
        <div className="welfare__iconWrapper">
          <TfiWorld className="welfare__icon" />
        </div>
        <div className="welfare__content">
          <h5 className="welfare__title">Global commercial warranty</h5>
          <p className="welfare__description">
            Samsonite guarantees worldwide commercial warranty services to
            ensure your Samsonite luggage can always stay by your side.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welfare;
