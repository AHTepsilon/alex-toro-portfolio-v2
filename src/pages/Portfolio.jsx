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
					<div className="videos-section-div-wrapper-item">
						<iframe className="videos-section-div-wrapper-item-ytvid" width="460" height="315" src="https://www.youtube.com/embed/YSDRiGyotKA?si=pLNhTPt8ggLHcoDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						<p className='videos-section-div-wrapper-item-p'>College project - Video self-portrait using stop motion animation</p>
					</div>
					<div className="videos-section-div-wrapper-item">
						<iframe className="videos-section-div-wrapper-item-ytvid" width="460" height="315" src="https://www.youtube.com/embed/iWfh25NdgD8" title="TRAILER #2 - BLADE RUNNER (MONTAJE AUDIOVISUAL)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						<p className='videos-section-div-wrapper-item-p'>College project - Short trailer for Blade Runner 2049 using <b>Adobe Premiere</b></p>
					</div>
				</div>
			</div>
		</section>
		<section className="print-section">
			<div className="print-section-div">
				<h2 className="print-section-div-title">Print Material</h2>
				<div className="print-section-div-item">
					<h3 className="print-section-div-item-title">Tu Respaldo Seguro S.A.S.</h3>
					<div className="print-section-div-item-wrapper">
						<h4 className="print-section-div-item-wrapper-title">Notebooks</h4>
						<div className="print-section-div-item-wrapper-group">
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2FNOTEBOOK4.webp?alt=media&token=f72ab43b-fdfb-4ef3-9607-b19b1fbf9872" className="print-section-div-item-wrapper-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2FNOTEBOOK1.webp?alt=media&token=eb85bc5b-d762-4eac-a788-32b49bec44af" className="print-section-div-item-wrapper-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2FNOTEBOOK2.webp?alt=media&token=64bc8b4e-2ea9-4115-80f3-8da265ae2be6" className="print-section-div-item-wrapper-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2FNOTEBOOK3.webp?alt=media&token=bc63bef9-1e08-4392-8cad-34b350a1436b" className="print-section-div-item-wrapper-group-img"></img>
						</div>
					</div>
					<div className="print-section-div-item-wrapper2">
						<h4 className="print-section-div-item-wrapper2-title">Office Decoration</h4>
						<div className="print-section-div-item-wrapper2-group">
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2Fdecoration1.webp?alt=media&token=b50bd9cc-fb78-446e-8cc7-c00859bb1750" className="print-section-div-item-wrapper2-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2Fdecoration2.webp?alt=media&token=1ac3480d-d3d1-4764-8c65-25a246b6ce5d" className="print-section-div-item-wrapper2-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2Fsignage.webp?alt=media&token=c9f191e8-fc5f-47c6-9b82-e9fa84fa22c1" className="print-section-div-item-wrapper2-group-img"></img>
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2Fsignage2.webp?alt=media&token=bab7c571-852f-47e5-a805-7bd5c694f0b8" className="print-section-div-item-wrapper2-group-img"></img>
						</div>
					</div>
					<div className="print-section-div-item-wrapper3">
						<h4 className="print-section-div-item-wrapper3-title">Pop Material</h4>
						<div className="print-section-div-item-wrapper3-group">
							<img src="https://firebasestorage.googleapis.com/v0/b/alextorodesigns.appspot.com/o/new-website%2Fprint-portfolio%2Ftrs%2Fmugs.webp?alt=media&token=492cb9ad-0cee-4a27-9493-a85f6efdd458" className="print-section-div-item-wrapper3-group-img"></img>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</>
  )
}

export default Portfolio;