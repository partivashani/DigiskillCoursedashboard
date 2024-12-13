import React, { useState } from "react";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div
        className="bg-blue-900 p-8 rounded-lg shadow-lg w-full max-w-sm 
         "
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 ">
          Register
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4  ">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md text-white bg-gray-50 focus:ring-purple-500 focus:border-purple-500 "
              placeholder="Enter your full name"
            />
          </div>
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
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-red-500 focus:border-red-500"
              placeholder="Re-enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          Already have an account?{" "}
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

export default SigninForm;
