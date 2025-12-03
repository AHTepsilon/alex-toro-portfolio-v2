import { useState } from 'react';
import './header.scss';
import './header-media-queries.scss';
import { NavLink } from "react-router";
import burgerMenuScript from '../scripts/burgerMenuScript';

function Header() {

  return (
    <header className='header'>
		<div className='header-div-logo'>
			<NavLink to="/"><img className='header-div-logo-img' src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FLogo-small.webp?alt=media&token=767ffa3c-9937-4722-bc94-42b06612f261'></img></NavLink>
		</div>
			
		<div className='header-div-buttons'>
			<div className='header-div-buttons-links'>
				<NavLink className='header-div-buttons-links-navlink header-div-links-resume' to="/resume">Résumé</NavLink>
				<NavLink className='header-div-buttons-links-navlink header-div-links-portfolio' to="/portfolio" end>Portfolio</NavLink>
				<NavLink className='header-div-buttons-links-navlink header-div-links-contact' to="/contact">Contact</NavLink>
			</div>
			<div className='header-div-buttons-socials'>
				<NavLink className='header-div-buttons-socials-navlink' to="https://www.instagram.com/alextoro_designs/" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Finstagram-logo-pxl.svg?alt=media&token=539696bb-35a0-4601-a469-2b227615de56'/></NavLink>
				<NavLink className='header-div-buttons-socials-navlink' to="https://www.linkedin.com/in/alejandro-hernandez-toro-494823165/" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Flinkedin-logo-pxl.svg?alt=media&token=e2173b10-7ff2-4bee-a7e7-eb65a2f9e7be'/></NavLink>
				<NavLink className='header-div-buttons-socials-navlink' to="https://www.behance.net/alejandhernnd20" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fbehance-logo-pxl.svg?alt=media&token=d104e9fb-78e4-4a38-aa97-c3975c85464d'/></NavLink>
				<NavLink className='header-div-buttons-socials-burger' onClick={burgerMenuScript} to=""><img className='header-div-buttons-socials-burger-img' src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fburger-menu.svg?alt=media&token=935dad73-3802-4528-901d-a55c03822ea9"></img></NavLink>
				<div id='burger-menu' className='header-div-buttons-socials-burgerInner'>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="/resume">Résumé</NavLink>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="/portfolio" end>Portfolio</NavLink>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="/contact">Contact</NavLink>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="https://www.instagram.com/alextoro_designs/" target="_blank">Instagram</NavLink>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="https://www.linkedin.com/in/alejandro-hernandez-toro-494823165/" target="_blank">LinkedIn</NavLink>
					<NavLink className='header-div-buttons-socials-burgerInner-navlink' to="https://www.behance.net/alejandhernnd20" target="_blank">Behance</NavLink>
				</div>
			</div>
		</div>
    </header>
  )
}

export default Header;