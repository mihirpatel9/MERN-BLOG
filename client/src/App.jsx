import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/Project' element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
