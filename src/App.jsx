import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav1 from './Components/Nav1'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Services from './Components/Services'
import ContactUs from './Components/ContactUs'
import Nav2 from './Components/Nav2'
const App = () => {
  return (
    <BrowserRouter>
      <Nav1 />
      <Nav2 />    
      <Routes>

        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
