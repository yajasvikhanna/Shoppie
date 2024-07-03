import React from 'react';

const cartContext = React.createContext({
    items: [],
    subtotal: 0,
    estimated_shipping: 5.90,
    shipping_discount: -5.90,
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    removeFromArray: (id) => {}
})

export default cartContext;
