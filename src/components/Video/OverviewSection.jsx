import React from "react";

const OverviewSection = () => {
  const cards = [
    {
      title: "Upcoming Classes",
      description: "You have a live class scheduled at 3:00 PM today.",
      icon: "📅",
    },
    {
      title: "Completed Modules",
      description: "You’ve completed 8 out of 12 modules.",
      icon: "✅",
    },
    {
      title: "Feedback Pending",
      description: "2 feedback forms are awaiting your response.",
      icon: "📝",
    },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      
        {/* Header */}
        <div className="border-b">
        <div className="max-w-5xl mx-auto ">
      {/* Card container */}
      <div className="bg-white shadow-lg rounded-lg p-4 ">
        {/* Course Title */}
        <h1 className="text-2xl font-bold mb-4">
          Complete Guide to Building, Deploying, and Optimizing Generative AI with Langchain and Huggingface
        </h1>

        {/* Ratings and Students */}
        <div className="flex items-center justify-between mb-4 text-gray-700">
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-lg">4.6</span>
            <span>⭐</span>
            <span className="text-sm">(4,176 ratings)</span>
          </div>
          <span className="text-sm">35,006 Students</span>
        </div>

        {/* Duration */}
        <div className="mb-4 text-gray-700">
          <p className="text-sm">54 total hours</p>
        </div>

        {/* Last Updated and Language */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <span>Last updated September 2024</span>
          <span>Languages: English, Dutch (Auto)</span>
        </div>

        {/* By the Numbers */}
        <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
          <div>
            <p className="font-semibold">Skill Level:</p>
            <p>All Levels</p>
          </div>
          <div>
            <p className="font-semibold">Lectures:</p>
            <p>207</p>
          </div>
          <div>
            <p className="font-semibold">Languages:</p>
            <p>English</p>
          </div>
          <div>
            <p className="font-semibold">Captions:</p>
            <p>Yes</p>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="border-t pt-4">
          <p className="text-sm mb-2">Get digiskill certificate by completing entire course</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ">
            Digiskill certificate
          </button>
        </div>
      </div>
    </div>
      

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-600 mb-6">
            Welcome back! Here's a quick glance at your progress and schedule.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className="text-lg font-medium">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
