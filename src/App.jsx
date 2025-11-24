import { useState } from 'react';
import './App.scss';
import Header from './components/header.jsx';
import { NavLink } from "react-router";

function App() {

  return (
    <>
	<Header></Header>
	<section className="landing-section">
		<div className="landing-section-div">
			<img className="landing-section-div-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fsection-logo.svg?alt=media&token=f5ba2a4b-bee4-4491-82bb-9d956b3c5a6b"/>
			<span className="landing-section-div-txt">Graphic design - UI/UX design - Front-end development</span>
			<img className="landing-section-div-arrow" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FArrow.webp?alt=media&token=23d62afc-ec9a-40b5-8787-816a44f0f2db"/>
		</div>
	</section>
	<section className="about-section">
		<div className="about-section-div">
			<h2 className="about-section-div-title">About</h2>
			<p className="about-section-div-p">My name is Alejandro, but you can call me Alex. I’m an interactive media designer with strong dedication regarding fields of graphic design, audiovisual design, UX / UI design and front-end coding. I have good abilities to recognize and develop optimal experiences for users and make use of technologies to accomplish this goal. All of this allows me to create proposals which bring a high technological impact and a reliable and effective user experience. <br></br><br></br> 
			In regards to my design abilities, I am capable of creating effective and aesthetically pleasing graphical and audiovisual pieces. All while following whichever graphical standards and visual identity normatives in a careful way. </p>
			<NavLink to="/portfolio" className="about-section-div-link">See examples of my work</NavLink>
		</div>
	</section>
	<section className="footer-section">
		<img className="footer-section-divider" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FVector%209.webp?alt=media&token=f2ff5399-2d20-4780-ba42-3d140d7998cc"/>
		<p className="footer-section-copyright">© Copyright 2025 Alex Toro Designs</p>
		<img className="footer-section-logo" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FLogo%20Footer.svg?alt=media&token=03a33083-3269-4b27-8ea4-f957270526f6"/>
		<div className='footer-section-socials'>
			<NavLink className='footer-section-socials-navlink' to="https://www.instagram.com/alextoro_designs/" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Finstagram-logo-pxl.svg?alt=media&token=539696bb-35a0-4601-a469-2b227615de56'/></NavLink>
			<NavLink className='footer-section-socials-navlink' to="https://www.linkedin.com/in/alejandro-hernandez-toro-494823165/" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Flinkedin-logo-pxl.svg?alt=media&token=e2173b10-7ff2-4bee-a7e7-eb65a2f9e7be'/></NavLink>
			<NavLink className='footer-section-socials-navlink' to="https://www.behance.net/alejandhernnd20" target="_blank"><img src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fbehance-logo-pxl.svg?alt=media&token=d104e9fb-78e4-4a38-aa97-c3975c85464d'/></NavLink>
		</div>
	</section>
    </>
  );
}

export default App;
