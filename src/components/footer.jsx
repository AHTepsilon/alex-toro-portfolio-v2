import { useState } from 'react';
import './footer.scss';
import './footer-media-queries.scss'
import { NavLink } from "react-router";

function Footer() {

  return (
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
  )
}

export default Footer;