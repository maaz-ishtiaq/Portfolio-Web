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
    <div className=' scroll-mt-20 bg-linear-to-r from-[#101010] via-[#171515] to-[#242424]'
    >
     <Navbar/>
     <Hero/>
     <Skills/>
     <Education/>
     <Projects/>
     <Button/>
     <Contact/>
     <Footer/>
     </div>
    </>
   


  )
}

export default Home