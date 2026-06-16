import React from 'react'
import Navbar from '../components/Landingcomponents/Navbar'
import Hero from '../components/Landingcomponents/Hero'
import Features from '../components/Landingcomponents/features'

function Landing() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Features/>
    </div>
  )
}

export default Landing