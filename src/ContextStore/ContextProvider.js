import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
    items: [],
    subtotal: 0,
    totalAmount: 0
}
const cartReducer= (state, action) => {
    if(action.type === "ADD"){
        const newSubtotal = state.subtotal + action.item.price * action.item.amount;
        const newTotalAmount = state.totalAmount + newSubtotal;

        const indexOfAlreadyExistingItem = state.items.findIndex((item) => {return item.id === action.item.id});
        const existingItem = state.items[indexOfAlreadyExistingItem];
        let newItems;
        if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount 
            }
            newItems = [...state.items];
            newItems[indexOfAlreadyExistingItem] = updatedItem;
        }
        else{
            newItems = state.items.concat(action.item); // concat() returns a new array with updated items
        }
        return {
            items: newItems,
            subtotal: newSubtotal,
            totalAmount: newTotalAmount
        }
    }

    if(action.type === "REMOVE"){
        const indexOfAlreadyExistingItem = state.items.findIndex((item) => {return item.id === action.id});
        const existingItem = state.items[indexOfAlreadyExistingItem];

        const newSubtotal = state.subtotal - existingItem.price;
        const newTotalAmount = state.totalAmount - existingItem.price;

        let newItems;
        const updatedItem = {...existingItem, amount: existingItem.amount - 1}
        newItems = [...state.items];
        newItems[indexOfAlreadyExistingItem] = updatedItem;
        return {
            items: newItems,
            subtotal: newSubtotal,
            totalAmount: newTotalAmount
        }
    }

    if(action.type === "REMOVEFROMARRAY"){
        const newSubtotal = state.subtotal - action.item.price * action.item.amount;
        const newTotalAmount = state.totalAmount - action.item.price * action.item.amount;
        let newItems = state.items.filter((item)=>{return item.id !== action.item.id});
        return {
            items: newItems,
            subtotal: newSubtotal,
            totalAmount: newTotalAmount
        }
    }

    return initialCartState;
}

const ContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    const addItemToCart = item => {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeItemFromCart = id => {
        dispatchCartAction({type: "REMOVE", id: id});
    }

    const removeItemFromArray = item =>{
        dispatchCartAction({type: "REMOVEFROMARRAY", item: item});
    }

    const cartContext = {
        items: cartState.items,
        subtotal: cartState.subtotal,
        estimated_shipping: 5.90,
        shipping_discount: -5.90,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        removeFromArray: removeItemFromArray
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider
