import { useState } from 'react';
import './portfolio-item.scss';
import './portfolio-item-media-queries.scss';
import './footer-media-queries.scss'
import { NavLink } from "react-router";

function PortfolioItem({thumbnail, description, link, section, tools}) {

  return (
	<NavLink className="portfolio-item-div fade-in" to={link} target="_blank" id="portfolio-item">
		<div className="portfolio-item-div-inner">
			<img className="portfolio-item-div-inner-img" src={thumbnail}></img>
			<div className="portfolio-item-div-inner-textarea">
				<p className="portfolio-item-div-inner-textarea-text">{description}</p>
				<p className="portfolio-item-div-inner-textarea-typeof">{section}</p>
				<p className="portfolio-item-div-inner-textarea-tools">{tools}</p>
			</div>
		</div>
	</NavLink>
  )
}

export default PortfolioItem;