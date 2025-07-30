
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import "./index.css";
import MyPosts from './components/MyPost'


function App() {


  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/mypost' element={<MyPosts/>}/>
      </Routes>
    </Router>

  )
}

export default App
