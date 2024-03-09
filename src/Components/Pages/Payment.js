// PaymentPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/Payment.css';

const PaymentPage = () => {
    const totalAmount = sessionStorage.getItem('totalAmount');
    const { products } = useLocation().state || {};
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handlePaymentSubmit = () => {
        // Perform actions based on the selected payment method
        console.log(`Processing payment of $${totalAmount} via ${selectedPaymentMethod}`);
        // Add further logic or redirect to a confirmation page
    };

    return (
        <div className="payment-container">
            <h2 className="payment-title">Payment Details</h2>
            <div className="payment-summary">
                <p>Total Amount: ${totalAmount}.00</p>
                <ul>
                    {products && products.map((product) => (
                        <li key={product.id}>
                            Product Name: {product.model}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="payment-methods">
                <h3>Select Payment Method:</h3>
                <label>
                    <input
                        type="radio"
                        value="cashOnDelivery"
                        checked={selectedPaymentMethod === 'cashOnDelivery'}
                        onChange={() => handlePaymentMethodChange('cashOnDelivery')}
                    />
                    Cash on Delivery
                    <img src="placeholder_cash_image_url.png" alt="Cash on Delivery Logo" />
                </label>

                <label>
                    <input
                        type="radio"
                        value="netBanking"
                        checked={selectedPaymentMethod === 'netBanking'}
                        onChange={() => handlePaymentMethodChange('netBanking')}
                    />
                    Net Banking
                    <img src="placeholder_netbanking_image_url.png" alt="Net Banking Logo" />
                </label>

                <label>
                    <input
                        type="radio"
                        value="cardPayment"
                        checked={selectedPaymentMethod === 'cardPayment'}
                        onChange={() => handlePaymentMethodChange('cardPayment')}
                    />
                    Card Payment
                    <img src="placeholder_card_image_url.png" alt="Card Payment Logo" />
                </label>
            </div>

            <button onClick={handlePaymentSubmit}>Proceed to Pay</button>
        </div>
    );
};

export default PaymentPage;
