import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Cartitem.css";

const CarItem = (props) => {
    const { imgUrl, model, carName, automatic, speed, price } = props.item;
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Implement adding product to cart logic
        console.log('Added to cart:', props.item);

        // Redirect to the cart page after adding to cart
        navigate('/cart');
    };

    return (
        <div className="car-item-container">
            <div className="car-item-img">
                <img src={imgUrl} alt="" className="car-image" />
            </div>
            <div className="car-item-content">
                <h4 className="car-title">{carName}</h4>
                <h6 className="rent-price">
                    ${price}.00 <span>/Per Piece</span>
                </h6>

                <div className="car-item-info">
                    <span className="car-info">
                        <i className="ri-car-line"></i> {model}
                    </span>
                    <span className="car-info">
                        <i className="ri-settings-2-line"></i> {automatic}
                    </span>
                    <span className="car-info">
                        <i className="ri-timer-flash-line"></i> {speed}
                    </span>
                </div>

                <button className="car-btn car-btn-buy" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default CarItem;