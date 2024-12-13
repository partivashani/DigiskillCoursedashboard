import React from "react";
import { Link, useParams } from 'react-router-dom';
import { coursecard } from "../../utility/coursedata";
import Coursedetail from "../Coursedetail";

import Card from "./Card";


const Section = () => {
 
  // const param = useParams()
  // console.log(param.courseid)
  
  //     const data = coursecard.find((d)=>{
  //        return d.title === param.courseid
  //     }) ;
  

  return (
    <section>

{/* First Card section */}

<div className="p-5 w-[85%] mx-auto">
      {/* Category Scroller */}

      {/* Courses */}
      <div className="flex gap-3 space-x-4 overflow-x-auto ">
        {coursecard.map((course, index) => (
          <Link to={`/coursedetail/${course.title}`} key={course.title}>
            <Card key={index} {...course} />
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Section;

