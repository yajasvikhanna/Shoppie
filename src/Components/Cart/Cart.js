import React, { useContext } from 'react';
import cartContext from '../../ContextStore/CartContext';
import ErrorPage from '../ErrorPage/ErrorPage';
import OrderInfoCard from '../OrderInfoCard/OrderInfoCard';
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';

const Cart=()=>{
    const cartCtx = useContext(cartContext);
    return(
        <div className="py-2">
            <div className="display-6 text-center border-bottom border-dark py-3">YOUR BAG</div>
            <div className="container d-flex justify-content-between mt-5 flex-column flex-md-row">
                {cartCtx.items.length > 0 ? (
                    <>
                        <OrderInfoCard/>
                        <div className="p-3"></div>
                        <OrderSummaryCard/>
                    </>
                ) : (
                <ErrorPage className="m-auto"
                    error="Error: 404"
                    title="Oopsie! No Items Found In Cart..."
                    desc="Please Add Items In the Cart to see them here."
                />
                )}
            </div>
        </div>
    );
}

export default Cart;