import React, { useState } from "react";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { course_lession } from "../../Sidebardata";

const VideoSidebar = () => {
  const [activeModule, setActiveModule] = useState({}); // Track active module
  
  // Data structure for modules and their chapters

 
  const handleModuleClick = (index) => {
    // Toggle the active state for the module
    // setActiveModule( index);
    setActiveModule((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    ));
    console.log("it",index)
    console.log(activeModule)
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-serif">
      {/* Sidebar */}
      <aside className="w-full bg-gray-900 text-white p-4 space-y-5">
        <h2 className="text-2xl font-bold mt-10">Course Modules</h2>
        <div className="mt-4 space-y-2">
          {course_lession.map((module, index) => (
            <div key={index} className={`space-y-1 ${activeModule[index] ? "h-[210px]" : "h-12"}  overflow-hidden transition-all`}>
             
              <button
                onClick={() => handleModuleClick(index)}
                className={`w-full flex items-center p-2 rounded-md h-12 ${
                  activeModule === index
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span
                  className={`w-4 h-4 mr-2 rounded-full border-2 ${
                    activeModule >= index
                      ? "bg-green-500 border-green-500"
                      : "border-gray-500"
                  }`}
                ></span>
                {module.title}
              </button>

                { activeModule[index] && <div className={`text-sm text-gray-400 space-y-1  transition-all overflow-hidden`}> 
                  {module && module.chapters &&  module.chapters.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="list-disc bg-gray-700 p-2 text-white rounded-md flex gap-2 cursor-pointer hover:bg-green-600 "
                    >
                      <MdCheckBoxOutlineBlank />
                      {chapter}
                    </div>
                  ))}
                </div>}
            
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default VideoSidebar;
