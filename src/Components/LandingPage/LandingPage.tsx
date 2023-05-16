import React from 'react'
import Footer from '../Footer/Footer';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import './LandingPage.scss'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <section className="section1">
        <Info />
      </section>
      <Footer/>
    </div>
  )
}

export default LandingPage;
