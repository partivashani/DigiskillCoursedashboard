import React from "react";
import { CiSearch } from "react-icons/ci";

const Heading = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto bg-gradient-to-b from-white to-gray-100 flex items-center justify-between  p-5">
        <div className=" p-6">
          <div className="text-black py-10 flex flex-col items-center p-5">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-2 text-center">
              Empower Your Journey to Excellence
            </h2>
            <p className="text-sm mb-6">
              Learn, Practice, and Achieve with Tools Built for Success.
            </p>

            {/* Progress Bar with Search Icon */}
            <div className="relative w-96 md:w-96 lg:w-96 h-9 bg-blue-400 rounded-lg overflow-hidden">
              <input
                className="h-full w-[80%] bg-gray-300 rounded-s-md text-black outline-none px-10" // Adjust padding for icon
                placeholder="Search here..." // Placeholder text
              />
              <CiSearch className="absolute top-2 left-3 text-gray-500 w-6 h-6" /> {/* Search Icon */}
            </div>
          </div>
        </div>

{/*  */}
        <div className="flex flex-wrap gap-8 justify-center relative max-w-2xl  p-5">
          {/* Top Right Image */}
          <div className="relative col-span-1 flex flex-col items-center">
            <img
              src="/thirdimage.jpeg"
              alt="Person with laptop"
              className="rounded-lg shadow-md mt-12"
            />
            <div className="absolute left-0">
              <div className="bg-blue-100 rounded-full p-3 shadow-lg">
                <img
                  src="/pythonbg.png"
                  alt="Python Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="absolute bottom-0">
              <div className="bg-yellow-100 rounded-full p-3 shadow-lg">
                <img
                  src="/css.png"
                  alt="css Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>

          {/* Left Image */}
          <div className="relative col-span-1">
            <img
              src="/firstimage.jpeg"
              alt="Programmer coding"
              className="rounded-lg shadow-md w-[280px] h-[280px]"
            />
            <div className="absolute -top-5 right-0">
              <div className="bg-green-100 rounded-full p-3 shadow-lg">
                <img
                  src="/javabg.png"
                  alt="java Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-0">
              <div className="bg-orange-100 rounded-full p-3 shadow-lg">
                <img
                  src="/Sql.png"
                  alt="sql Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="relative col-span-1">
            <img
              src="/secondimage.jpeg"
              alt="Programmer at desk"
              className="rounded-lg shadow-md w-[400px] h-[230px]"
            />
            <div className="absolute top-0 -right-8">
              <div className="bg-purple-100 rounded-full p-3 shadow-lg">
                <img
                  src="/reactjs.png"
                  alt="react Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="absolute bottom-0 -left-10">
              <div className="bg-blue-200 rounded-full p-3 shadow-lg">
                <img
                  src="pythonbg.png"
                  alt="react Logo"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
