import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import '../Header/Navbar.css'

function Navbar() {
    const location = useLocation();
   
  return (
    <Nav className='navbar'>
        <div className='navbar_links'>
            <Link to='/' className='navbar_item'>
                <Menu isCurrentPage={location.pathname === "/"} className="navbar_link">Accueil</Menu>
            </Link>
            <Link to='/Predication' className='navbar_item'>
                <Menu isCurrentPage={location.pathname === "/"} className="navbar_link">Prédications</Menu>
            </Link>
        </div>
    </Nav>
  )
}
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 2rem;
width: 100%;
position: relative;
& a{
    text-decoration: none;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
}
`;

const Menu = styled.p`
text-decoration: none;
color: #e76f51;
font-size: 15px;
display: inline;
`;




export default Navbar;