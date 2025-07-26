
import {  Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import "./index.css";


function App() {


  return (
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='CreatePost' element={<CreatePost/>}/>
        </Routes>
      </Router>

  )
}

export default App
