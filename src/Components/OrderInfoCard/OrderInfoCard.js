import React, {useContext} from 'react'
import Styles from './OrderInfoCard.module.scss';
import { IoMdRemove, IoMdAdd } from 'react-icons/io';
import CartContext from '../../ContextStore/CartContext';

const OrderInfoCard = () => {
    const cartCtx = useContext(CartContext);

    const decreaseItemCount = (cartItemID) => {
        cartCtx.removeItem(cartItemID);
    }

    const increaseItemCount = (cartItem) => {
        cartCtx.addItem({...cartItem, amount: 1});       
    }

    const removeArrayItem = (cartItem) => {
        cartCtx.removeFromArray(cartItem);
    }

  return (
    <div className={`${Styles['info-section-width']}`}>
        {cartCtx.items.map((item) => {
            return (
                <div key={item.id} className="border-bottom border-dark">
                    <div className="d-flex justify-content-between flex-lg-row flex-column py-3">
                        <img 
                            style={{height: 200, width: 180}}
                            className="m-auto"
                            src={item.image}
                            alt="product-img"
                        />
                        <div className={`d-flex flex-row justify-content-between ${Styles['product-details-amount']}`}>                            
                            <div className="d-flex justify-content-around flex-column px-0 px-lg-3 w-75">
                                <div className="product-name">
                                    <b>Product:</b> {item.title}
                                </div>
                                <div className="product-id">
                                    <b>ID:</b> {item.id}
                                </div>
                                <div className="product-rating">
                                    <b>Rating:</b> {item.rating}
                                </div>
                                <button
                                    className="btn btn-danger w-50"
                                    onClick={() => removeArrayItem(item)}
                                >
                                    Remove
                                </button>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center w-25 px-0 px-lg-3">
                                <div className="d-flex">
                                <button
                                    className="btn p-1 p-lg-2 btn-outline-dark"
                                    onClick={() => decreaseItemCount(item.id)}
                                    disabled={item.amount <= 1 ? true : false}
                                >
                                    <IoMdRemove />
                                </button>
                                <div className="p-lg-2 p-1 lead">{item.amount}</div>
                                <button
                                    className="btn p-1 p-lg-2 btn-outline-dark"
                                    onClick={() => increaseItemCount(item)}
                                >
                                    <IoMdAdd />
                                </button>                      
                                </div>
                                <div className="fs-3">
                                    <b>${(item.price*item.amount).toFixed(2)}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
          })}
      </div>
  )
}

export default OrderInfoCard
