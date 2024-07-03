import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import cartContext from '../../ContextStore/CartContext';
import Styles from './OrderSummaryCard.module.scss';


const OrderSummaryCard = () => {
  const cartCtx = useContext(cartContext);
  const navigate = useNavigate();
  let calTotalAmount = cartCtx.subtotal>80 ? cartCtx.subtotal : cartCtx.subtotal + 5.90;
  const checkoutNow = () => {
    navigate('/checkoutpage');
  }

  return (
    <div className={`card ${Styles['summary-section-width']}`}>
      <div className="card-body">
      <h5 className="fs-5 py-3"><b>ORDER SUMMARY</b></h5>
        <div className="d-flex justify-content-between py-2">
          <h5 className="card-title">Subtotal</h5>
          <p className="card-text">${cartCtx.subtotal.toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between py-2">
          <h5 className="card-title">Estimated Shipping</h5>
          <p className="card-text">$5.90</p>
        </div>
        {cartCtx.subtotal>80 && <div className="d-flex justify-content-between py-2">
          <h5 className="card-title">Shipping Discount</h5>
          <p className="card-text">-$5.90</p>
        </div>}        
        <hr/>
        <div className="d-flex justify-content-between py-2">
          <h5 className="fs-5"><b>TOTAL</b></h5>
          <p className="fs-5"><b>${calTotalAmount.toFixed(2)}</b></p>
        </div>
      </div>
        <button className="btn btn-outline-dark m-2" 
        onClick={checkoutNow}
        >
          CHECKOUT NOW
        </button>
    </div>
  );
}

export default OrderSummaryCard;