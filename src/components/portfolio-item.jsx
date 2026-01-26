import { useState } from 'react';
import './portfolio-item.scss';
import './footer-media-queries.scss'
import { NavLink } from "react-router";

function PortfolioItem({thumbnail, description, link}) {

  return (
	<NavLink className="portfolio-item-div" to={link} target="_blank">
		<div className="portfolio-item-div-inner">
			<img className="portfolio-item-div-inner-img" src={thumbnail}></img>
			<p className="portfolio-item-div-inner-text">{description}</p>
		</div>
	</NavLink>
  )
}

export default PortfolioItem;