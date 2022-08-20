import React, { useState } from 'react'
import "../../Style.css";

const Navbar = ({ logUser }) => {
  const [isMenuClicked, setIsmenuClicked] = useState(true);

  const handleMenu = () => {
    setIsmenuClicked(!isMenuClicked)
  }

  const userLogged = () => {
    if (logUser && logUser._id) {
      return (
        <img src={logUser.avater} alt='' />
      )
    } else {
      return (
        <i class="fa-solid fa-user"></i>
      )
    }
  }
  return (
    <div className='header'>
      <a href='/' className='logo'>
        Quizzer
      </a>
      <div className='menu-btn'>
        <i onClick={handleMenu} class="fa-solid fa-bars"></i>
      </div>
      <nav className={isMenuClicked ? "navbar-pc" : "navbar-mobile"}>
        <ul className='nav-ul'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/quiz'>Quiz</a>
          </li>
          <li>
            <a href='/leaderboard'>Leaderboard</a>
          </li>
          <li>
            <a href='/login'>Sign Up</a>
          </li>
          <li>
            <a><i class="fa-solid fa-user"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar