import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../ForgotPasswordForm';

const LoginStudent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="flex items-center justify-center max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-5">
        {/* Left Section */}
        <div className="hidden  md:flex flex-col items-center justify-center bg-gradient-to-br from-black to-red-600 p-8 text-white w-auto ">
          <img
            src="/student.jpeg"
            alt="Student Group"
            className="rounded-full w-72 h-72 mb-6 shadow-lg border-4 border-white"
          />
          <h3 className="text-2xl font-bold">Welcome Back!</h3>
          <p className="text-sm text-center mt-2">
            Login to continue your journey with us.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please enter your details to proceed.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-red-500 focus:ring-indigo-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/ForgotPasswordForm"
                className="text-sm text-indigo-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              LOGIN AS STUDENT
            </button>
          </form>
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <a href="#" className="text-red-700 hover:underline">
                Sign up
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Are you a partner?{' '}
              <a href="#" className="text-red-700 hover:underline">
                Login as teacher
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginStudent;
