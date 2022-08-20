import React from 'react'
import "../../Style.css";

const Cards = () => {
  return (
    <>
    <div className='cat-heading'>
    <h3>Featured Exams</h3>
    </div>
    <section className='category'>
    <a className='box'>
        <img src="images/eng.svg" />
        <h3>JEE</h3>
    </a>
    <a className='box'>
        <img src="images/doctor.svg"/>
        <h3>NEET</h3>
    </a>
    <a className='box'>
        <img src="images/gate.svg"/>
        <h3>GATE</h3>
    </a>
    <a href="https://www.careerindia.com/upsc/" className='box'>
        <img src="images/upsc.svg" />
        <h3>UPSC</h3>
    </a>
    <a className='box'>
        <img src="images/nift.svg"/>
        <h3>NIFT</h3>
    </a>
    <a className='box'>
        <img src="images/mpsc.svg"/>
        <h3>MPSC</h3>
    </a>
    </section>
    </>
  )
}

export default Cards