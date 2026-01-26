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
				<h2 className="main-container-title">Tu Respaldo Seguro S.A.S.</h2>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-7.jpg?alt=media&token=4d64c663-0446-494d-badc-9165c1d06708" description="Short-form video made to be used as an ad on Meta Ads. Made with Adobe Premiere and Adobe After Effects" link="https://www.instagram.com/p/DHI8_a8iDIS/" section="Short-form video / ad"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-8.jpg?alt=media&token=021990bb-165b-4d1e-ae5e-74209dc821c3" description="Video made as a way to announce the new brand identity of the company (Which I designed). Made with Adobe Premiere and Adobe After Effects" link="https://www.instagram.com/reel/DC4KsKnIFJz/" section="Short-form video"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-6.jpg?alt=media&token=d296045d-5636-40b6-a421-a19b5afa8c54" description="Carousel made as a way to give an explanation to our clients on how to use the new Bre-B platform. Made with Figma and Adobe Photoshop. (Note that this post was adapted to the new Instagram thumbnail format)." link="https://www.instagram.com/p/DMVXfSkigSq/" section="Social media post"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-5.jpg?alt=media&token=33f33438-cfca-4e0f-b3ce-817b8405bc9e" description="Special post to celebrate Colombian Independence Day. Made with Figma and Adobe Photoshop." link="https://www.instagram.com/p/DMVXfSkigSq/" section="Social media post"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-4.jpg?alt=media&token=cc50170e-087d-4e51-85dc-39c3e5008688" description="Carousel that followed on the Frisby trend, which was a popular marketing trend in Colombia at the time. The post was designed using Figma and Adobe Photoshop. (Notably, the brand we where referencing commented on this post positively on Facebook)." link="https://www.instagram.com/p/DJrs5s0vCD9/" section="Social media post"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-3.jpg?alt=media&token=a838a66c-b148-4745-acbf-f3d16c686d3f" description="Carousel that followed on the '_ kit' trend, which was a popular marketing tactic at the time. The package was made using Adobe Photoshop and stock images. The post was designed using Figma and Adobe Photoshop" link="https://www.instagram.com/p/DIWcw_oPNcO/?img_index=1" section="Social media carousel"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-2.jpg?alt=media&token=0243236f-960c-4535-87ac-282a58d12e69" description="Carousel designed to alert of potential scams and risks clients might be partaking regarding financial services. It was designed using Figma and Adobe Photoshop." link="https://www.instagram.com/p/DGWN6pvti8f/?img_index=1" section="Social media carousel"></PortfolioItem>
				<PortfolioItem thumbnail="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Portfolio-Pics%2FTRS%2FPortfolio-TRS-1.jpg?alt=media&token=beea1d37-5350-41ab-9477-93958985d2c0" description="Carousel designed to give clients tips for saving money. It was designed using Figma and Adobe Photoshop." link="https://www.instagram.com/p/DFbINKnJFdA/?img_index=1" section="Social media carousel"></PortfolioItem>
			</section>
		<Footer></Footer>
	</>
  )
}

export default TRS;