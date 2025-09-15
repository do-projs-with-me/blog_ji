
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import "./index.css";
import MyPosts from './components/MyPost'
import Hero from './components/Hero'
import { AuthProvider } from './AuthContext'


function App() {


  return (

    <Router>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/mypost' element={<MyPosts/>}/>
        <Route path='/postdetails:id' element={<MyPosts/>}/>
      </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App
