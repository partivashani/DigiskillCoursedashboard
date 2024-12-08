// import React from "react";
// import CourseCard from "./components/CourseCard.jsx";  // Ensure correct case and path

// const SkillSection = () => {
//   const categories = [
//     { name: "ChatGPT", learners: "3M+" },
//     { name: "Data Science", learners: "7M+" },
//     { name: "Python", learners: "46.6M+" },
//     { name: "Machine Learning", learners: "8M+" },
//     { name: "Deep Learning", learners: "2M+" },
//     { name: "Artificial Intelligence (AI)", learners: "3M+" },
//     { name: "Statistics", learners: "1M+" },
//     { name: "Natural Language Processing", learners: "789,780" },
//   ];

//   const courses = [
//     {
//       image: "https://via.placeholder.com/150",
//       title: "NLP - Natural Language Processing with Python",
//       author: "Jose Portilla, Pierian Training",
//       rating: 4.5,
//       reviews: "18,192",
//       price: "9.99",
//       originalPrice: "74.99",
//       badge: "Bestseller",
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       title: "Modern Natural Language Processing in Python",
//       author: "Martin Jocqueviel, SuperDataScience",
//       rating: 4.5,
//       reviews: "1,715",
//       price: "9.99",
//       originalPrice: "64.99",
//     },
//     // Add other courses similarly
//   ];

//   return (
//     <div className="p-6 bg-gray-50">
//       {/* Category Scroller */}
//       <div className="flex space-x-4 overflow-x-auto pb-4">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full ${
//               category.name === "Natural Language Processing"
//                 ? "bg-black text-white"
//                 : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//             }`}
//           >
//             {category.name}
//             <span className="ml-2 text-gray-400">{category.learners} learners</span>
//           </button>
//         ))}
//       </div>

//       {/* Courses */}
//       <div className="flex space-x-4 overflow-x-auto">
//         {courses.map((course, index) => (
//           <CourseCard key={index} {...course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillSection;
