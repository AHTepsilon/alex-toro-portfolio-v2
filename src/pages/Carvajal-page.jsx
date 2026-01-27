import { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import PortfolioItem from '../components/portfolio-item.jsx';
import './TRS-page.scss';
import { NavLink } from "react-router";

function Carvajal() {

  return (
	<>
		<Header></Header>
			<section className = "main-container">
				<h2 className="main-container-title">Carvajal Tecnología y Servicios</h2>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FCarvajal%2FPortfolio-Carvajal-4.jpg?alt=media&token=6670738f-ec12-49cc-96aa-66e6109f2d32" description="Video made with the objective of showcasing how the company's financial platform has grown." tools="Made with Adobe After Effects." link="https://www.instagram.com/p/C41GFhtA6Z2/" section="Short-form video"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FCarvajal%2FPortfolio-Carvajal-3.jpg?alt=media&token=5b0f9b32-8e88-4854-80a5-b7c999e37243" description="Video made as a way to show potential clients the activites they can do within the company's financial platform." tools="Made with Adobe Premiere." link="https://www.instagram.com/p/C4OKFOEApXH/" section="Short-form video"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FCarvajal%2FPortfolio-Carvajal-2.jpg?alt=media&token=da29ffc1-afd3-4fe4-a7ab-767033dd143f" description="Carousel designed to announce new dates for implementation of Resolution 165, which is relevant for clients' businesses." tools="Made with Figma and Adobe Photoshop." link="https://www.instagram.com/p/C3k7az0q9b1/?img_index=1" section="Social media carousel"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FCarvajal%2FPortfolio-Carvajal-1.jpg?alt=media&token=c7aae8bd-491b-4bc7-ac88-4d29b8369de2" description="Post designed as a Webinar announcement." tools="Made with Figma and Adobe Photoshop." link="https://www.instagram.com/p/C2zz9VuqoCP/" section="Social media post"></PortfolioItem>
			</section>
		<Footer></Footer>
	</>
  )
}

export default Carvajal;