import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './CheckoutComponent.css';

const CheckoutComponent = () => {
  const location = useLocation();
  const { orderItems = [], total = 0 } = location.state || {};

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();

  const orderData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    paymentMethod: formData.paymentMethod,
    orderItems,
    total,
  };

  try {
    const response = await axios.post('http://localhost:5000/api/place-order', orderData);
    alert('Order placed successfully!');
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Failed to place order. Please try again.');
  }
};


  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-lg-8">
          <h3 className="mb-4">Checkout</h3>
          <div className="bg-white p-4 shadow-sm rounded">
            <form onSubmit={handleSubmit}>
              <h5 className="mb-3">Billing Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Full Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <h5 className="mt-4 mb-3">Payment Method</h5>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  value="creditCard"
                  checked={formData.paymentMethod === 'creditCard'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="creditCard">Credit Card</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
              </div>

              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </form>
          </div>
        </div>

        
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="bg-light p-4 shadow-sm rounded">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              {orderItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                Total <span>${total.toFixed(2)}</span>
              </li>
            </ul>
            <p className="text-muted small">Delivery fees and taxes will be calculated at checkout.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutComponent;
