import React from 'react'
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
        <Router>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/Login'>Login</Link>
            <br/>
            <Link to='/About'>About</Link>
            <hr/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/About' element={<About/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App