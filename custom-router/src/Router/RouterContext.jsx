import React, { useState, useEffect } from "react";
import qs from "querystringify";
import { createBrowserHistory } from "history";
import { useContext } from "react";
import { NotFound } from "./NotFound";
export const history = createBrowserHistory();

const locationToRoute = ({ location }) => {
  return {
    path: location.pathname,
    hash: location.hash,
    query: qs.parse(location.search),
  };
};

export const RouterContext = React.createContext({
  route: locationToRoute(history),
});

export const RouterProvider = ({ routesList, children }) => {
  const [routes] = useState(
    Object.keys(routesList).map((key) => routesList[key].path)
  );

  const [route, setRoute] = useState(locationToRoute(history));

  const routerContextValue = { route };

  const handleRouteChange = (location) => {
    const route = locationToRoute(location);
    setRoute(route);
  };
  const is404 = routes.indexOf(route.path) === -1;

  useEffect(() => {
    let unlisten = history.listen(handleRouteChange);
    return () => {
      unlisten();
    };
  }, []);


  return (
    <RouterContext.Provider value={routerContextValue}>
      {is404 ? <NotFound /> : children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
    const context = useContext(RouterContext);
    return context;
}


