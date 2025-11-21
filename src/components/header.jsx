import { useState } from 'react'
import './header.scss'

function Header() {

  return (
    <header className='header'>
		<div className='header-div-logo'>
			<img className='header-div-logo-img' src='https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FLogo-small.webp?alt=media&token=767ffa3c-9937-4722-bc94-42b06612f261'></img>
		</div>
		<div className='header-div-links'>
			<span>Résumé</span>
			<span>Portfolio</span>
			<span>Contact</span>
		</div>
		<div className='header-div-socials'>
			
		</div>
    </header>
  )
}

export default Header;