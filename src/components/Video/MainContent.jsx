import React, { useState } from "react";

const MainContent = () => {
  const [progress, setProgress] = useState(50); // Initialize progress to 50%

  const handleMarkAsComplete = () => {
    setProgress(100); // Example: Update progress to 100%
  };

  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Lecture: Course Induction</h1>
          <div className="flex items-center space-x-4">
            <div className="text-gray-600">
              Course Progress:{" "}
              <span className="font-semibold">{progress}%</span>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              onClick={handleMarkAsComplete} // Update progress on click
            >
              Mark As Complete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
