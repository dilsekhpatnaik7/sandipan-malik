import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Education from './Education'
import About from './About'
import Research from './Research'
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
      </Routes>
    </>
  )
}

export default MainComponent
