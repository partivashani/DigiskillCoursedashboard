import React from 'react'
import {itCertifications} from '../../utility/webdevlopmentdata'

const ITcertifications = () => {
  return (
    <div>
<div className=" flex p-4 ">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center m-auto">
                {itCertifications.map((course, index) => (
          <div
            key={index}
            className="bg-white h-auto w-[280px] shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Course Details */}
            <div className="p-3">
              <h2 className="text-md font-bold text-gray-800">
                {course.title}
              </h2>
              <p className='text-gray-600 mt-1 text-xs '>{course.description} </p> 
              <p>{course.dollor} <span className='line-through text-gray-500 '>{course.dollor2}</span></p>
              <p className="text-gray-700">{course.rating} <span className="text-yellow-500">★★★★★</span></p>
            </div>
          </div>
        ))}
    </div>
      
      </div>

    </div>
  )
}

export default ITcertifications;