// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: [],
    };

    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            // Add more cases for other actions if needed

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
