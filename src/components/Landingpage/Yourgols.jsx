import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start">
    <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center text-2xl text-purple-600 mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <button className="text-purple-600 font-medium flex items-center hover:underline">
      Know More <span className="ml-2">→</span>
    </button>
  </div>
);

const Yourgols = () => {
  const features = [
    {
      icon: "📊",
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top organizations.",
    },
    {
      icon: "🏦",
      title: "Banking & Finance",
      description:
        "Up-skill yourself with relevant courses to become job-ready in the banking sector.",
    },
    {
      icon: "🤖",
      title: "Gen AI",
      description:
        "Master the art of Generative AI with courses that explore cutting-edge technology.",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Upskill in-demand software & technology skills to attain desired jobs.",
    },
    {
      icon: "📚",
      title: "Programming Courses",
      description:
        "Build strong coding foundations for a high-paying technology career.",
    },
    {
      icon: "⚙️",
      title: "Business Technology",
      description:
        "Explore the vast area of new categories under Business Technology.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our Categories
          </h2>
          <p className="text-gray-500 mt-5 p-1">Discover Your Passion</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Yourgols;
