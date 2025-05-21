import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutCard.css';

function CheckoutCard({ subtotal, deliveryFee, total }) {
  const navigate = useNavigate();

  return (
    <div className="checkout-card">
      <h2>Checkout</h2>
      <div className="summary-item">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Delivery Fee:</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="summary-item total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="cart-summary">
        <button
          className="checkout-button"
          onClick={() =>
            navigate("/checkout", {
              state: {
                orderItems: [
                  { name: "Subtotal", price: subtotal },
                  { name: "Delivery Fee", price: deliveryFee }
                ],
                total: total
              }
            })
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutCard;
