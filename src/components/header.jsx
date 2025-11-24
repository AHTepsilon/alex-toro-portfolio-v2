import { useState } from 'react';
import './header.scss';
import { NavLink } from "react-router";

function Header() {

  return (
    <header className='header'>
		<div className='header-div-logo'>
			<NavLink to="/"><img className='header-div-logo-img' src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FLogo-small.webp?alt=media&token=767ffa3c-9937-4722-bc94-42b06612f261'></img></NavLink>
		</div>
		<div className='header-div-links'>
			<NavLink className='header-div-links-resume' to="/resume">Résumé</NavLink>
			<NavLink className='header-div-links-portfolio' to="/portfolio" end>Portfolio</NavLink>
			<NavLink className='header-div-links-contact' to="/contact">Contact</NavLink>
		</div>
		<div className='header-div-socials'>
			
		</div>
    </header>
  )
}

export default Header;