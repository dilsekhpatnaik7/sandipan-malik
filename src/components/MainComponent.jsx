import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Education from './Education'
import About from './About'
import Research from './Research'
import Conference from './Conference'
import Mentorship from './Mentorship'
import Gallery from './Gallery'

import { Routes, Route } from 'react-router-dom'

const MainComponent = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/conference' element={<Conference/>}/>
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </>
  )
}

export default MainComponent
