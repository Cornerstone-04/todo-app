import React from "react";

const Trash = ({ onClick }) => {
  return (
    <svg
      className="w-5 h-5 cursor-pointer"
      onClick={onClick}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

const Edit = ({ onClick }) => {
  return (
    <svg
      className="w-5 h-5 cursor-pointer"
      onClick={onClick}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
    </svg>
  );
};

const Arrow = ({ onClick }) => {
  return (
    <svg
      className="w-6 h-6"
      onClick={onClick}
      fill="white"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export { Edit, Trash, Arrow };
