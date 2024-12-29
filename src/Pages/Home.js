import React from 'react'
import Evento from '../Assets/evento.jpg'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero"
    heroImg = {Evento}
    title = "Welcome to Compute Clinic Dashboard"
    text = "Click here to start"
    url = "/Case"
    btnClass ="homeBtn"
    btnText ="Start"

    />

    
    <Footer/>
    </>
  )
}

export default Home
