import React from "react";

const MainFooter = () => {
  const categories = [
    {
      title: "CATEGORIES",
      links: ["Home", "About", "Blog", "Contact"],
    },
    {
      title: "CATEGORIES",
      links: ["First Link", "Second Link", "Third Link", "Fourth Link"],
    },
    {
      title: "CATEGORIES",
      links: ["First Link", "Second Link", "Third Link", "Fourth Link"],
    },
    {
      title: "CATEGORIES",
      links: ["First Link", "Second Link", "Third Link", "Fourth Link"],
    },
    {
      title: "CATEGORIES",
      links: ["First Link", "Second Link", "Third Link", "Fourth Link"],
    },
  ];

  return (
    <footer className="bg-blue-100 p-5 ">
      <div className="max-w-6xl mx-auto px-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-900">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-sm uppercase mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, i) => (
                  <li key={i} className="text-black hover:text-gray-900">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
