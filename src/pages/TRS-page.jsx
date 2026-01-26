import { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import PortfolioItem from '../components/portfolio-item.jsx';
import './TRS-page.scss';
import { NavLink } from "react-router";

function TRS() {

  return (
	<>
		<Header></Header>
			<section className = "main-container">
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-1.jpg?alt=media&token=beea1d37-5350-41ab-9477-93958985d2c0" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></PortfolioItem>
			</section>
		<Footer></Footer>
	</>
  )
}

export default TRS;