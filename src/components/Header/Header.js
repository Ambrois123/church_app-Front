import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../images/logo.png'
import '../Header/ToggleSwitch.css'

function Header({toggleTheme}) {
  return (
<nav className="navbar navbar-expand-lg navbar-inherit bg-inherit nav_navbar">
  <div className="container-fluid">
    <Nav>
        <Picture src={Logo} alt="logo" />
    </Nav>
    <button className="navbar-toggler rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/PagePredication">Prédications</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
      </ul>
        <label className='switch'>
            <input 
                onChange={toggleTheme}
                type="checkbox"
            />
                <span className='slider round'></span>
        </label>
    </div>
  </div>
</nav>
  )
}

// const Wrapper =styled.div`
// height: 110px;
// display: flex;
// justify-content: space-between;
// padding: 0px 24px;
// align-items: center;
// box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
// `;

const Nav = styled.nav`
margin-top: 10px;
`;


// const NavLink = styled.a`
// color: inherit;
// `;

const Picture =styled.img`
width: 160px;
`;

export default Header