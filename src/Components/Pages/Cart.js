// Cart.js
import React from 'react';
import { useCart } from '../Pages/CartContext';
import { useNavigate } from 'react-router-dom';
import './CSS/Cart.css';

const Cart = () => {
    const { state, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    // Calculate total amount
    const totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Function to proceed to buy and navigate to the address page
    const proceedToBuy = () => {
        navigate('/address');
    };

    // Function to navigate back to the product 
    const addMoreProducts = () => {
        navigate('/product');
    };

    // Function to update the quantity of a product
    const updateProductQuantity = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    return (
        <div className="cart-container">
            <h2 className="section-title">Shopping Cart</h2>
            {state.cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="cart-items-container">
                        {state.cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.imgUrl} alt={item.carName} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.carName}</h3>
                                    <p>Model: {item.model}</p>
                                    <p>Price: ${item.price}.00</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateProductQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateProductQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <p>Total Amount: ${totalAmount}.00</p>
                        <button onClick={proceedToBuy}>Proceed to Buy</button>
                        <button onClick={addMoreProducts}>Add More Products</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;