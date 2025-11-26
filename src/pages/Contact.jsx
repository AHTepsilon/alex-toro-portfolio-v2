import { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './contact.scss';
import { NavLink } from "react-router";

function Contact() {

  return (
	<>
		<Header></Header>
			<section className="contact-section">
				<h2 className="contact-section-title">Contact information</h2>
				<h4 className="contact-section-subtitle">You can send an email to <b><NavLink target="_default" className="contact-section-subtitle-link" to="mailto:alehertoro725@gmail.com?">alehertoro725@gmail.com</NavLink></b> for any inquiries</h4>
			</section>
		<Footer></Footer>
	</>
  )
}

export default Contact;