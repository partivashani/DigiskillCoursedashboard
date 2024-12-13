import React from "react";
import { Link } from "react-router-dom";
import  {courses}  from "../../utility/coursedata";
import Card from "./Card";


const Coursecard = () => {
 

  return (
   <section className="">
 <div className="p-5  w-[85%] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Learners are viewing</h2>
      <div className="flex flex-wrap justify-start gap-6">
        {courses.map((course, index) => (
          <Card key={index} {...course} />
        ))}
      </div>
    </div>

   </section>
  );
};

export default Coursecard;
