import React from 'react'

const CourseTopic = () => {
  return (
    <div>
         

      
      {/* Related Topics Section */}
      <section className="mb-6 max-w-4xl m-auto mt-8 p-5">
        <h3 className="text-lg font-semibold mb-3">Explore related topics</h3>
        <div className="flex flex-wrap gap-4">
          {["Data Analysis", "Business Analytics & Intelligence", "Business"].map((topic, index) => (
            <button
              key={index}
              className="border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>
      

       {/* Course Includes Section */}
       <section className="mb-4 max-w-4xl m-auto p-5">
        <h3 className="text-lg font-semibold mb-3">This course includes:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
          <li className="flex items-center gap-3">
            <span className="text-lg">💻</span>
            <span>20.5 hours on-demand video</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-lg">💻</span>
            <span>218 coding exercises</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-lg">📄</span>
            <span>17 articles</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-lg">📂</span>
            <span>142 downloadable resources</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-lg">📱</span>
            <span>Access on mobile and TV</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-lg">🏆</span>
            <span>Certificate of completion</span>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default CourseTopic