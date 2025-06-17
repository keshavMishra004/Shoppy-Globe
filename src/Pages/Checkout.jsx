import React, { useState } from 'react';

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    payment: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-16 lg:px-48">
      {!orderPlaced ? (
        <>
          <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Street address"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="City"
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="ZIP"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Payment Method</label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select payment method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-800 font-semibold"
            >
              Place Order
            </button>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Your order has been placed!</h2>
          <p className="text-lg">Thank you for shopping with us.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;