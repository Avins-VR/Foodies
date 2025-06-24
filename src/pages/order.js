import { useState } from 'react';
import '../styles/App.css';

function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    restaurant: '', 
    items: '',
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponseMsg(data.message);
  };

  return (
    <div className="order-container">
      <h1>Place Your Order</h1>

      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            placeholder="Enter delivery address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Number:
          <input
            type="tel"
            name="contact"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Restaurant Name:
          <input
            type="text"
            name="restaurant"
            placeholder="Enter restaurant name"
            value={formData.restaurant}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Order:
          <textarea
            name="items"
            placeholder="E.g. 2x Burger, 1x Coke"
            value={formData.items}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Confirm Order</button>
      </form>

      {responseMsg && <p className="response-msg">{responseMsg}</p>}
    </div>
  );
}
export default OrderPage;