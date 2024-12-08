import React, { useState } from "react";

const CourseLession = () => {
  const [activeSection, setActiveSection] = useState(null); // State to track active section

  const sections = [
    { title: "Introduction to the Course", lectures: 4, time: "21min" },
    { title: "Introduction to Data Analytics", lectures: 5, time: "22min" },
    { title: "Setting up the Environment", lectures: 9, time: "34min" },
    { title: "Python Basics", lectures: 34, time: "1hr 41min" },
    { title: "Fundamentals for Coding in Python", lectures: 6, time: "32min" },
    { title: "Mathematics for Python", lectures: 11, time: "51min" },
    { title: "NumPy Basics", lectures: 5, time: "14min" },
    { title: "Pandas - Basics", lectures: 17, time: "1hr 22min" },
    { title: "Working with Text Files", lectures: 29, time: "1hr 58min" },
    { title: "Working with Text Data", lectures: 6, time: "41min" },
  ];

  // Toggle section handler
  const toggleSection = (index) => {
    setActiveSection((prev) => (prev === index ? null : index)); // Toggle active section
  };

  return (
    <div>
      {/* Lesson section */}
      <div className="mb-4 max-w-4xl m-auto p-5">
        <h1 className="text-2xl font-bold mb-4">Lesson</h1>
        {sections.map((section, index) => (
          <div key={index} className="border-gray-700 border-b text-black">
            <button
              onClick={() => toggleSection(index)}
              className="flex justify-between items-center w-full text-left px-4 py-2 bg-gray-300 text-black"
            >
              <span>{section.title}</span>
              <span>
                {section.lectures} lectures {section.time}
              </span>
            </button>

            {activeSection === index && (
              <div className="bg-blue-500 px-4 py-2">
                <p>Details about {section.title}...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLession;
