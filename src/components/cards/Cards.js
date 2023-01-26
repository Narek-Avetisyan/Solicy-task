import "./index.css";
import React from "react";

export const Card = ({ number, onDelete }) => {
  return (
    <div className="card">
      <span onClick={() => onDelete(number)}>&times;</span>
      <p>{number}</p>
    </div>
  );
};
