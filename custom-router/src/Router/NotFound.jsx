import React from "react";
import Link from "./Link";
import { routesList } from "./routeList";

export const NotFound = () => {
  return (
    <div>
      <p>404 - Not Found</p>
      <Link to={routesList.home.path}>Back to home</Link>
    </div>
  );
};
