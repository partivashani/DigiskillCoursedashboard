import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import SigninForm from './SigninForm'
import { coursecard, courses } from '../utility/coursedata';

import CourseLession from './CourseLession'
import CourseSection from './CourseSection';
import CourseRequire from './CourseRequire';
import CourseTopic from './CourseTopic';
// import Home from './Landingpage/Home';


const Coursedetail = () => {


const param = useParams()
const title = decodeURIComponent(param.courseid)

console.log(title)

    const data = coursecard.find((d)=>d.title== title)
console.log(data)


// const data2 = coursecard.find((d)=>d.title== title)
// console.log(data)

//     const param2 = useParams()
// console.log(param.courseid)

    // const data2 = coursecard.find((c)=>{
    //    return c.title === param.courseid
    // }) ;
    // console.log(data)

  return (
<>
<div>
        {/* First Heading Section */}


<section className="bg-gray-900 text-white p-2">
     
      {/* Nav Part */}
      {/* <div className=" bg-gray-900 flex justify-between items-center p-5 ">
        <div>
          <h1 className="font-bold text-2xl ml-10">Digiskill</h1>
        </div>
        <div className="text-red-500 border-red-500 border-2 p-2 rounded-md mr-8 w-[150px] text-center">
          
          <Link to="/SigninForm">
          <button>Login/Register</button>
          </Link>


        </div>
      </div> */}
      {/* Main Container */}



      <div className="border-red-500 border-2 w-[90%] flex flex-col lg:flex-row gap-20 justify-center max-w-full mx-auto  items-center p-2  mt-2">


{/* Left Section - Course Details */}
  <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl">

    <div className="flex justify-start items-center gap-1 mb-2 "><CiHome className="text-red-500 " /><Link to={"/"}>Home</Link><FaGreaterThan /><span className="font-thin">{data && data.title}</span></div>
    
    
    <h1 className="text-4xl font-bold mb-4 leading-snug">
      {data  && data.title}
    </h1>
    <p className="text-gray-300 mb-4 leading-relaxed">
      {data && data.author}
    </p>

    {/* Bestseller Badge */}
    <p className="text-sm flex items-center gap-3 mb-4">
      <span className="bg-yellow-500 text-black font-semibold py-1 px-2 rounded">
        {data && data.badge}
      </span>
      <span className="flex items-center gap-1">
        {data.rating} <span className="text-yellow-400">★★★★★</span>
      </span>
     <span className="text-gray-400">
        {data.reviews} students
       
      </span> 
    </p>

    {/* Buy and Shear */}
    <div className=" w-[400px] p-2 flex gap-5 mt-12">
     <Link to="/checkout">
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
        src={data && data.image}
        alt="Data Analytics Bootcamp"
        className="w-full h-48 object-cover"
      />
    </div>

    {/* Course Information */}
    <h2 className="text-lg font-semibold text-gray-800 mb-2">
    {data && data.title}
    </h2>
    <p className="text-gray-600 text-sm mb-4">
     {data && data.author}
    </p>

    {/* Pricing and Rating */}
    <p className="text-lg font-bold text-gray-800 mb-1">
      {data.price}{" "}
      <span className="text-sm font-normal line-through text-gray-500">
       {data.originalPrice}
      </span>
    </p>
    <p className="text-sm text-gray-700 flex items-center gap-1 mb-6">
      {data.rating} <span className="text-yellow-500">★★★★★</span>
    </p>

    {/* Add to Cart Button */}
    <button className="bg-red-500 hover:bg-red-600 text-white py-2 w-full rounded-md font-semibold transition-colors">
      Add to Cart
    </button>
  </div>
</div>
  
  

    
    </section>

    </div>

    <CourseSection/>
    <CourseTopic/>
    <CourseLession/>
    <CourseRequire/>

</>
  )
}

export default Coursedetail