import './App.css';
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import PostList from './Pages/Posts';
import Post from './Pages/Post';
import NotFound from './Pages/NotFound';


const PrivateRoutes = () => {
  let auth = { 'token': false }
  return (
    <>
      {auth.token ? <Navigate to='/' /> : <Outlet />}
    </>
  )
}


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <br />
        <Link to="../">Back</Link>
      </div>


      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<PrivateRoutes />}>
            <Route index element={<PostList />} />
            <Route path=":id:name" element={<Post />} />
            <Route path="new" element={<Post />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
