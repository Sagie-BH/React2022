import React from 'react'
import Link from './Router/Link';
import Route from './Router/Route';
import { RouterProvider } from './Router/RouterContext'
import { routesList } from './Router/routeList';


const App = () => {
  return (
    <RouterProvider routesList={routesList}>
      <Route path={routesList.home.path}>
        <Link to={routesList.about.path}>Go To About</Link>
      </Route>
      <Route path={routesList.about.path}>
        <Link to={routesList.home.path}>Go To Home</Link>
      </Route>
    </RouterProvider>
  )
}

export default App