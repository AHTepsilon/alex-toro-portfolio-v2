import { useState } from 'react';
import './footer.scss';
import './footer-media-queries.scss'
import { NavLink } from "react-router";

function PortfolioItem({thumbnail, description}) {

  return (
    <div className="portfolio-item-div">
		<img className="portfolio-item-div-img" src={thumbnail}></img>
		<div className="portfolio-item-div-inner">
			<p className="portfolio-item-div-inner-text">{description}</p>
		</div>
	</div>
  )
}

export default PortfolioItem;