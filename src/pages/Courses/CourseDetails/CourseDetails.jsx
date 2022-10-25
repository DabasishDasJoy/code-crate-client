import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  return (
    <div>
      <button>Download</button>
      <h1>Course title: {course.title}</h1>
      <button>Get premium access</button>
    </div>
  );
};

export default CourseDetails;
