import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const ref = createRef();
  const course = useLoaderData();

  return (
    <div>
      <div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
      </div>
      <button>Download</button>
      <h1 ref={ref}>Course title: {course.title}</h1>
      <Link to={"/checkout"}>
        <button>Get premium access</button>
      </Link>
    </div>
  );
};

export default CourseDetails;