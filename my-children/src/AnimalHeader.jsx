import React from "react";

export const AnimalHeader = ({ children }) => {
  return (
    <div>
      {children.map((c) => (
        <h2>{c}</h2>
      ))}
      {/* <h3>{children}</h3> */}
    </div>
  );
};
