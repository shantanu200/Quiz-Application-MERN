import React from 'react'
import "./Middle.css"

const MiddlePage = ({logUser}) => {
  const PF = "http://localhost:8080/images/";
  return (
    <div className='d_Container'>
    <nav className='nav'>
      <div className='logo-name'>
        <div className='logo-image'>
          <image src={PF+logUser.avatar} alt="" />
        </div>
        <span className='logo_name'>Quizzer</span>
      </div>
      <div className='menu-items'>
        <ul className='nav-links'>
         <li>
          <a>
            <i className='uil uil-estate'></i>
            <span className='link-name'>Dashboard</span>
          </a>
         </li>
         <li>
          <a>
            <i className='uil uil-estate'></i>
            <span className='link-name'>Dashboard</span>
          </a>
         </li>
         <li>
          <a>
            <i className='uil uil-estate'></i>
            <span className='link-name'>Dashboard</span>
          </a>
         </li>
         <li>
          <a>
            <i className='uil uil-estate'></i>
            <span className='link-name'>Dashboard</span>
          </a>
         </li>
        </ul>
        <ul className='logout-mode'>
          <li><a>
          <i className='uil uil-signout'></i>  
          <span className='link-name'>LogOut</span>
          </a></li>
        </ul>
      </div>
    </nav>
    <section className='dashboard'>
      <div className='top'>
      <i className='uil uil-bars sidebar-toggle'></i>

      <div className='search-box'>
      <i className='uil uil-search'></i>
      <input placeholder='Search Here' />
      </div>

      <img src={PF+logUser.avatar} />
      </div>
    </section>
    </div>
  )
}

export default MiddlePage;