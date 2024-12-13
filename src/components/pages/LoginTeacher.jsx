import React from 'react';

const LoginTeacher = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/teacher-group-image.png" // Replace with your teacher image path
            alt="Teacher Group"
            className="w-1/2 mb-4"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Welcome, Teacher</h2>
        <p className="text-center text-gray-600 mb-6">Please login to access your dashboard.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            LOGIN AS TEACHER
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            New to the platform? <a href="#" className="text-blue-500 hover:underline">Sign in</a>
          </p>
          <p className="text-sm text-gray-600">
            Are you a student? <a href="#" className="text-blue-500 hover:underline">Login as student</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginTeacher;
