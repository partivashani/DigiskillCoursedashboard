import React from "react";

const RatingSection = () => {
  const ratings = [
    { stars: 5, percentage: 63 },
    { stars: 4, percentage: 30 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  const review = [
    {
      user:"ST",
      title:"Subra Raju",
      description:"This is the BEST of all my web development courses. Thanks so much Krish, I enjoyed (and grasped) all your tutorials. I have recommended at least 3 of my mentors.",
      date:"3 week",
    },
    {
      user:"JY",
      title:"Jiya Mahato",
      description:"This is the BEST of all my web development courses. Thanks so much Krish, I enjoyed (and grasped) all your tutorials. I have recommended at least 3 of my mentors.",
      date:"2 week",
    },
    {
      user:"RK",
      title:"Rohan Kumar",
      description:"This is the BEST of all my web development courses. Thanks so much Krish, I enjoyed (and grasped) all your tutorials. I have recommended at least 3 of my mentors.",
      date:"21 days",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Student Feedback Section */}
      <h2 className="text-2xl font-bold mb-6">Student feedback</h2>
      
      <div className="flex gap-8">
        {/* Course Rating */}
        <div>
          <h3 className="text-4xl font-bold">4.6</h3>
          <p className="text-lg font-semibold text-yellow-500">★★★★★</p>
          <p className="text-sm text-gray-600">Course Rating</p>
        </div>

        {/* Rating Breakdown */}
        <div className="flex-1">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="w-10 text-sm font-medium">{rating.stars} ★</span>
              <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden mx-3">
                <div
                  className="bg-yellow-500 h-2"
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{rating.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>

        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search reviews"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option>All ratings</option>
            <option>5 stars</option>
            <option>4 stars</option>
            <option>3 stars</option>
            <option>2 stars</option>
            <option>1 star</option>
          </select>
        </div>


        {/* Individual Review */}
      {review.map((data)=>{
       return <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 font-semibold">
            {data.user}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{data.title}</h4>
              <span className="text-sm text-gray-500">{data.date}</span>
            </div>
            <p className="text-yellow-500 text-sm">★★★★★</p>
            <p className="text-gray-800 text-sm mt-2">
              {data.description}
            </p>
            <div className="flex items-center mt-4 gap-6">
              <button className="flex items-center text-sm text-blue-500">
                👍 Yes
              </button>
              <button className="flex items-center text-sm text-blue-500">
                👎 No
              </button>
              <button className="text-sm text-gray-500 hover:underline">
                Report
              </button>
            </div>
          </div>
        </div>
        </div>
    })}
              

      </div>
  </div>
  );
};

export default RatingSection;
