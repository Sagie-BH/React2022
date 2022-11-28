import { useContext } from "react";
import { RouterContext } from "./RouterContext";

const Route = ({ path, children }) => {
  // Extract route from RouterContext
  const { route } = useContext(RouterContext);

  // Return null if the supplied path doesn't match the current route path
  if (route.path !== path) {
    return null;
  }
  return <>{children}</>;
};

export default Route;
