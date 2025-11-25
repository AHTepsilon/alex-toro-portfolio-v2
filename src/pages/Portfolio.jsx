import { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './portfolio.scss';
import { NavLink } from "react-router";

function Portfolio() {

  return (
	<>
		<Header></Header>
		<section className="portfolio-section">
			<div className="portfolio-section-div">
				<h2 className="portfolio-section-div-title">Portfolio</h2>
				<div className="portfolio-section-div-wrapper">
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.instagram.com/turespaldo.co/"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FThumb-TRS-new.png?alt=media&token=85b6cdb9-89b0-444c-93a1-58c7616f6981"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.instagram.com/carvajaltys/"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/Thumb-Carvajal%20(1).png?alt=media&token=0deb00e6-a6be-4d83-9599-2d80c151e756"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.instagram.com/my2brokenarms/"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2FM2BA%20thumb%20(1).png?alt=media&token=9676c0a3-9727-425a-8369-969f8fc613ec"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.behance.net/gallery/132752123/Streamliner-UI-Design"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/thumb-streamliner.png?alt=media&token=f94e0e63-3caf-40cd-820b-76195acf5d32"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.behance.net/gallery/131255465/FreshFind"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/thumb-freshfind.png?alt=media&token=78dcfcc1-22a0-4be7-9c3a-2ef6a08ca7fa"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.behance.net/gallery/130240861/UIUX-PROschool"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/thumb-proschool.png?alt=media&token=825bcdab-166a-4cb2-addb-f2ca119b8116"></img></NavLink></div>
					<div className="portfolio-section-div-wrapper-item"></div>
					<div className="portfolio-section-div-wrapper-item"><NavLink className="portfolio-section-div-wrapper-item-link" to="https://www.behance.net/gallery/105697115/Istanbul-City-Brand"><img className="portfolio-section-div-wrapper-item-link-img" src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/thumb-istanbul.png?alt=media&token=ef641a0e-7810-4403-9b60-ce01fa45fa33"></img></NavLink></div>
				</div>
			</div>
		</section>
		<section className="videos-section">
			<div className="videos-section-div">
				<h2 className="videos-section-div-title">Videos</h2>
				<div className="videos-section-div-wrapper">
					<div className="videos-section-div-wrapper-item">
						<iframe className="videos-section-div-wrapper-item-ytvid" width="460" height="315" src="https://www.youtube.com/embed/US2-pEl088g?si=zaLNTyTtvTkMw7T7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						<p className='videos-section-div-wrapper-item-p'>College project - A music video using kinetic typography - motion graphics made with <b>After Effects</b> - hand drawn visuals made with <b>FireAlpaca.</b></p>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</>
  )
}

export default Portfolio;