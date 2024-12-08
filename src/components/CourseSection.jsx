import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";

const CourseSection = () => {
   

      const items = [
        "The course provides the complete preparation you need to become a data analyst",
        "Acquire a big picture understanding of the data analyst role",
        "Study mathematics for Python",
        "Be able to work with text files",
        "Learn how to obtain interesting, real-time information from an API with a simple script",
        "Complete a data cleaning exercise on absenteeism rate",
        "Go through a complete loan data case study and apply your NumPy skills",
        "Learn how to create pie, bar, line, area, histogram, scatter, regression, and combo charts",
        "Practice with real-world data",
        "Fill up your resume with in-demand data skills: Python programming, NumPy, pandas, data preparation - data collection, data cleaning, data preprocessing, data visualization, data analysis, data analytics",
        "Learn beginner and advanced Python",
        "We will teach you NumPy and pandas, basics and advanced",
        "Understand different data types and their memory usage",
        "Clean data with pandas Series and DataFrames",
        "Expand your knowledge of NumPy statistics and preprocessing",
        "Master data visualization",
        "Engage with coding exercises that will prepare you for the job",
        "Solve a final capstone project",
      ];


 const [showAll, setShowAll] = useState(false);

  // Limit items to show initially
  const visibleItems = showAll ? items : items.slice(0, 6);


  return (
    <div>
        {/* For learn Section */}
    <section>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 mt-5">What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5 transition-all duration-500 ease-in-out">
            {visibleItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-blue-500 hover:underline font-medium"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>



    </div>
  )
}

export default CourseSection