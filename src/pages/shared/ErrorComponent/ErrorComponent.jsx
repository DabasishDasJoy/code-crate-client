import React from "react";

const ErrorComponent = ({ message }) => {
  console.log(
    "🚀 ~ file: ErrorComponent.jsx ~ line 4 ~ ErrorComponent ~ message",
    message
  );

  return (
    <span className="flex gap-2 text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {message}
    </span>
  );
};

export default ErrorComponent;
