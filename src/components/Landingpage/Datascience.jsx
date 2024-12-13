import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { coursecard } from "../../utility/coursedata"
// import Section from './Section';
// import ITcertifications from '../Courses/ITcertifications';

const Datascience = () => {
  const [activeTab, setActiveTab] = useState(null);


  const param = useParams()
  
  const data = coursecard.find((d)=>{
    return d.title === param.courseid
  }) ;
  console.log(param.courseid)


  
  // const Coursecontent = {
  //   ITcertifications:<ITcertifications/>,
  //   Leadership:"jsjhfjsgj",
  //   Communication: "hsfjh",
  //   WebDevelopment: "jdhgjshjgh",
  //   Business: "sgfshgdf"

    
  // };
  return (
    <>
   <section>
   <div className="p-6  w-[90%] mx-auto text-center ">
      <h1 className="text-3xl font-bold mt-8 mb-4">All the skills you need in one place</h1>
      <p className="text-gray-600 mb-6">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      <div className="flex space-x-6 border-b border-gray-200 p-1 justify-center text-lg font-bold">
        {["Data Science", "IT Certifications","Leadership", "Web Development", "Communication", "Business Analytics & Intelligence"].map((tab)=>(
            <button
            key={tab}
            onClick={() => setActiveTab(tab)} // Set active tab on click
            className={`p-3 text-gray-800 hover:text-blue-700 focus:text-blue-700 border-b-2 transition ${
              activeTab && activeTab === tab ? "border-blue-700 text-blue-700" : "border-transparent "
            }`}
          >
            {tab}
          </button>
        ))}
      
      </div>

      {/* <div className="mt-4">
        <div>{Coursecontent[activeTab]}</div>
      </div> */}

    </div>

   </section>


    </>


  )
}

export default Datascience;