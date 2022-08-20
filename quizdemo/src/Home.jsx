import React from 'react'
import Cards from './Components/Home/Cards'
import Contact from './Components/Home/Contact'
import Footer from './Components/Home/Footer'
import HomeSection from './Components/Home/HomeSection'
import HomeSection2 from './Components/Home/HomeSection2'
import Navbar from './Components/Home/Navbar'

const Home = ({logUser}) => {
  return (
    <div>
    <Navbar logUser={logUser} />
    <HomeSection />
    <Cards />
    <HomeSection2 />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home
