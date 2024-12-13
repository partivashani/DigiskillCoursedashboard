import React from "react";

const PlanCard = ({ title, subtitle, price, features, buttonText, isHighlighted }) => (
  <div
    className={`p-6 border rounded-lg ${
      isHighlighted ? "border-blue-500" : "border-gray-400"
    } bg-white shadow-md flex flex-col`}
  >
    <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
    {price && <p className="text-xl font-bold text-blue-800 mb-2">{price}</p>}
    {!price && <p className="text-xl font-bold text-blue-800 mb-2">Contact sales for pricing</p>}
    <p className="text-sm text-gray-500 mb-4">
      {price ? "Billed monthly or annually. Cancel anytime." : ""}
    </p>
    <button
      className={`text-white font-medium py-2 px-4 rounded-md ${
        isHighlighted
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-gray-800 hover:bg-gray-900"
      }`}
    >
      {buttonText} →
    </button>
    <ul className="mt-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 mr-2">✔</span>
          <p className="text-sm text-gray-700">{feature}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Plans = () => {
  const plans = [
    {
      title: "Personal Plan",
      subtitle: "For you",
      price: "Starting at $10.00 per month",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      buttonText: "Try it free",
    },
    {
      title: "Team Plan",
      subtitle: "For your team (2 to 20 people)",
      price: "$15.00 a month per user",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      buttonText: "Try it free",
    },
    {
      title: "Enterprise Plan",
      subtitle: "For your whole organization (more than 20 people)",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
        "Hands-on tech training with add-on",
        "Strategic implementation services with add-on",
      ],
      buttonText: "Request a demo",
      isHighlighted: true,
    },
  ];

  return (
    <section className="h-screen bg-gray-100 my-10 p-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mt-8">
          Accelerate growth — for you or your organization
        </h2>
        <p className="text-gray-600 mt-2">
          Reach goals faster with one of our plans or programs. Try one free today or contact sales
          to learn more.
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid gap-6 md:grid-cols-3 w-full max-w-6xl">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              isHighlighted={plan.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
