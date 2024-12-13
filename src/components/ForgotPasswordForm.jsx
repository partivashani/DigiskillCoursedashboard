import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Reset Email Sent to:", email);
    // Add your password reset logic here (e.g., API call)
    alert("If this email is registered, you will receive a reset link.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div
        className="bg-blue-900 p-8 rounded-lg shadow-lg w-full max-w-sm"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email or phone"
            />
           <p className="text-sm mt-3">You may receive email and SMS notifications from us for security and login purposes</p>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
          >
           Continue
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          Remembered your password?{" "}
          <a
            href="/signin"
            className="text-red-500 hover:underline hover:text-red-500"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
