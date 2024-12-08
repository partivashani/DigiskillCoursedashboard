import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SigninForm from './Video/SigninForm';


const CourseHeading = () => {
  return (
    <div>
        {/* First Heading Section */}

<section className="bg-gray-900 text-white p-5">
     
      {/* Nav Part */}
      <div className=" bg-gray-900 flex justify-between items-center p-5 ">
        <div>
          <h1 className="font-bold text-2xl ml-10">Digiskill</h1>
        </div>
        <div className="text-red-500 border-red-500 border-2 p-2 rounded-md mr-8 w-[150px] text-center">
          
          <Link to="/SigninForm">
          <button>Login/Register</button>
          </Link>


        </div>
      </div>
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-20 justify-center max-w-full mx-auto  items-center p-2">


      {/* Left Section - Course Details */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl">

          <div className="flex justify-start items-center gap-1 mb-2 "><CiHome className="text-red-500 " /><a href="" className=" text-blue-500 font-semibold">Home  </a><FaGreaterThan /><span className="font-thin">The Data Analyst Course: Complete Bootcamp</span></div>
          
          
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            The Data Analyst Course: Complete Data 
            Analyst Bootcamp
          </h1>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Complete Data Analyst Training: Python, NumPy, Pandas, Data Collection, Preprocessing, Data Types, Data Visualization
          </p>

          {/* Bestseller Badge */}
          <p className="text-sm flex items-center gap-3 mb-4">
            <span className="bg-yellow-500 text-black font-semibold py-1 px-2 rounded">
              Bestseller
            </span>
            <span className="flex items-center gap-1">
              4.5 <span className="text-yellow-400">★★★★★</span>
            </span>
            <span className="text-gray-400">
              (15,520 ratings) • 12,585 students
            </span>
          </p>

          {/* Buy and Shear */}
          <div className=" w-[400px] p-2 flex gap-5 mt-12">
           <Link to="/SigninForm">
           <button className="p-3 bg-blue-500 w-44 rounded-md">Buy Now</button>
           </Link>

            <button className="p-3 bg-red-400 w-44 rounded-md">Share </button>
           

          </div>
        </div>
        

        {/* Right Section - Purchase Card */}
        <div className="w-full lg:w-96 bg-gray-100 text-black p-6 rounded-lg shadow-lg">
          {/* Course Image */}
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src="/data.jpeg"
              alt="Data Analytics Bootcamp"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Course Information */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Data Analytics Bootcamp
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Master data analytics with practical, real-world projects.
          </p>

          {/* Pricing and Rating */}
          <p className="text-lg font-bold text-gray-800 mb-1">
            $20.5{" "}
            <span className="text-sm font-normal line-through text-gray-500">
              $30.2
            </span>
          </p>
          <p className="text-sm text-gray-700 flex items-center gap-1 mb-6">
            4.4 <span className="text-yellow-500">★★★★★</span>
          </p>

          {/* Add to Cart Button */}
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 w-full rounded-md font-semibold transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      </section>

    </div>
  )
}

export default CourseHeading