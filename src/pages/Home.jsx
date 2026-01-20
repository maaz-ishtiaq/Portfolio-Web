import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Button from '../components/Button'

function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Education/>
     <Projects/>
     <Button/>
     <Contact/>
     <Footer/>
    </>
   


  )
}

export default Home