import { useState } from 'react'
import './App.scss'
import Header from './components/header.jsx'

function App() {

  return (
    <>
	<Header></Header>
	<section className="landing-section">
		<div className="landing-section-div">
			<img className="landing-section-div-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fsection-logo.svg?alt=media&token=f5ba2a4b-bee4-4491-82bb-9d956b3c5a6b"/>
		</div>
	</section>
    </>
  );
}

export default App;
