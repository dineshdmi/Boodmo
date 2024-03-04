// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (existingProductIndex !== -1) {
                // Product already exists in the cart, update the quantity
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingProductIndex].quantity += 1;

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                // Product is not in the cart, add it with quantity 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };

        // ... other cases

        default:
            return state;
    }
};

// CartProvider component
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product,
        });
    };

    const removeFromCart = (productId) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: productId,
        });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { productId, quantity },
        });
    };

    // ... other functions

    return (
        <CartContext.Provider
            value={{
                state,
                addToCart,
                removeFromCart,
                updateQuantity,
                // ... other functions
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };
