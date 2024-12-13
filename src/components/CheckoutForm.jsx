import React, { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    country: "Nepal",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardName: "",
    saveCard: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add payment logic here (e.g., integration with payment gateway)
    alert("Payment successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Billing Address */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Payment Method</h3>
            <div className="mb-4">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                defaultChecked
                className="mr-2"
              />
              <label htmlFor="card" className="text-gray-700">
                Cards
              </label>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Name on card"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="saveCard"
              name="saveCard"
              checked={formData.saveCard}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
              Securely save this card for my later purchase
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              Complete Checkout
            </button>
          </div>
        </form>

        {/* Summary */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Summary</h3>
          <div className="flex justify-between text-gray-700 mt-2">
            <p>Original Price:</p>
            <p>$19.99</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Discount (45% Off):</p>
            <p>-$9.00</p>
          </div>
          <div className="flex justify-between text-gray-800 font-bold mt-2">
            <p>Total:</p>
            <p>$10.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
