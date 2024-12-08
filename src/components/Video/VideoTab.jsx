import React, { useState } from 'react';
import OverviewSection from './OverviewSection';
import AttachmentSection from './AttachmentSection';
import NotesSection from './NotesSection';
import DoubtsSection from './DoubtsSection';
import RatingSection from './RatingSection';


const VideoTab = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(null);

  // Content for each tab
  const tabContent = {
    Overview: <OverviewSection/>,
    Attachment: <AttachmentSection/>,
    Notes: <NotesSection/>,
    Doubts: <DoubtsSection/>,
    Rating: <RatingSection/>
  };

  return (
    <div className="mt-6">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300">

        {["Overview", "Attachment", "Notes", "Doubts", "Rating"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)} // Set active tab on click
            className={`p-3 text-gray-600 hover:text-blue-500 focus:text-blue-500 border-b-2 transition ${
              activeTab && activeTab === tab ? "border-blue-500 text-blue-500" : "border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <div>{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default VideoTab;






