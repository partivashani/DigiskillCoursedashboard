// App.js
import React from "react";

const courses = [
  {
    title: "Data Analytics Bootcamp",
    description: "Master data analytics with practical, real-world projects.",
    image: "/data.jpeg", // Replace with actual image URL
    dollor: "$9.70",
    dollor2:"7.85",
    rating: "4.5"
  },
  {
    title: "Full Stack Web Development",
    description: "Learn to build scalable web applications from scratch.",
    image: "/fullstack.png", // Replace with actual image URL
    dollor: "$19.70",
    dollor2:"27.85" ,
    rating: "4.6"
},
  {
    title: "Introduction to Python Programming",
    description: "Begin your programming journey with Python basics.",
    image: "/python.jpeg", // Replace with actual image URL
     dollor: "$12.70",
    dollor2:"15.85",
    rating: "4.7"
  },
  {
    title: "Javascript for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/javascript.png", // Replace with actual image URL
     dollor: "$8.70",
    dollor2:"10.85",
    rating: "4.5"
  },
  {
    title: "HTML for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/html.jpeg", // Replace with actual image URL
     dollor: "$5.70",
    dollor2:"6.85",
    rating: "4.5"
  },
  {
    title: "React JS for Beginners",
    description: "Master data analytics with practical, real-world projects.",
    image: "/react.png", // Replace with actual image URL
     dollor: "$7.70",
    dollor2:"9.85",
    rating: "4.6"
  },
];

const Coursecard = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      {/* Page Title */}
      <h1 className="text-gray-800 text-3xl font-bold text-center mb-8">
      Top courses in Web Development
      </h1>

{/* CourseCard */}


<div className=" flex p-4 ">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center m-auto">
                {courses.map((course, index) => (
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
  );
};

export default Coursecard;
