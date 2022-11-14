import React from "react";

export const AnimalImage = ({ imgLink }) => {
  return (
    <div>
      <img style={{ width: "200px" }} src={imgLink} alt="" />
    </div>
  );
};
