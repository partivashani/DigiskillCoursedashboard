import React from "react";

const SharePage = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Checkout at DigiSkill",
          text: "Check out this amazing course!",
          url: window.location.href,
        })
        .then(() => alert("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Your browser does not support the Web Share API.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Share This Page</h2>
        <button
          onClick={handleShare}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Share Now
        </button>
      </div>
    </div>
  );
};

export default SharePage;
