import React from 'react'
import "../../Style.css";

const HomeSection = () => {
  return (
    <section className='home'>
      <div className='image'>
      <img src='images/main.svg' alt=''/>
      </div>

      <div className='content'>
      <h3>Welcome to Quizzer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea? Suscipit ea maiores vel tenetur numquam temporibus voluptatibus, quia, vero culpa veritatis corrupti, laborum aspernatur commodi dolorem! Molestiae, repudiandae unde.</p>
      <a href="/" className='btn'>Start Quiz</a>
      </div>
      
    </section>
  )
}

export default HomeSection