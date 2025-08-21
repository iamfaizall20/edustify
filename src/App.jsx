import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle='Our Program' title='What we offer' />
      <Programs />
      <About />
      <Title subtitle='Testimonials' title='What Students Says' />
      <Testimonials />
    </div>
  )
}

export default App
