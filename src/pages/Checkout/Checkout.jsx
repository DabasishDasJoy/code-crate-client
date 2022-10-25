import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesProvider/CoursesProvider";

const Checkout = () => {
  const { selectedCourse } = useContext(CoursesContext);
  return (
    <div>
      <h1>Checkout: {selectedCourse.title}</h1>
    </div>
  );
};

export default Checkout;
