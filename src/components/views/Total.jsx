import React from "react";
import { useSelector } from "react-redux";

import './Total.css';

const Total = () => {
    const totalPrice = useSelector(state => state.totalPrice);

    return (
      <React.Fragment>
        <div className="border"></div>

        <div className="total">
          <h4>Total</h4>
          <p className='totalPrice'>${totalPrice.toFixed(2)}</p>
        </div>
      </React.Fragment>
    );
};

export default React.memo(Total);
