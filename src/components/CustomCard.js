import React from "react";

const CustomCard = ({ children }) => {
  return (
    <div>
      <div className="card mt-2 shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default CustomCard;
