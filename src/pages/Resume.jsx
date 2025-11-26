import { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import './resume.scss';

function Resume() {

  return (
	<>
		<Header></Header>
		<section className="resume-section">
			<div className="resume-section-div">
				<h2 className="resume-section-div-title">Work Experience</h2>
				<div className="resume-section-div-item">
					<h3 className="resume-section-div-item-title">Tu Respaldo Seguro S.A.S.</h3>
					<h4 className="resume-section-div-item-subtitle">Creative Marketing Designer / October 2024 - October 2025</h4>
					<p className="resume-section-div-item-p">● Increased the company's LinkedIn page views by 49%, significantly boosting visibility and engagement with the brand.<br/>
					● Redesigned and optimized the company's visual identity, including logos, email templates, and key graphic elements, improving consistency and visual impact across all channels.<br/>
					● Edited and produced over 45 high-impact promotional videos, highlighting key institutional events and supporting the launch of new tools, enhancing both internal and external communication.<br/>
					● Actively collaborated on the launch of the HOLA tool, creating over 100 different graphic pieces (videos, social media content, and email templates), contributing to the success of the launch campaign.<br/>
					● Created and optimized several high-impact advertisements, resulting in a 70% increase in lead generation for the sales team.</p>
				</div>
				<div className="resume-section-div-item">
					<h3 className="resume-section-div-item-title">Carvajal Tecnología y Servicios</h3>
					<h4 className="resume-section-div-item-subtitle">Marketing Design Intern / January 2024 - July 2024</h4>
					<p className="resume-section-div-item-p">● Edited over 30 promotional videos that highlighted institutional events, increasing viewer engagement by refining content quality to align with audience preferences; directly contributed to improved outreach efforts within the community.<br/>
					● Increased social media interactions by 20% through effective design strategies and innovative content creation.<br/>
					● Streamlined design processes by implementing new software tools, reducing project turnaround time by 25% and enhancing overall team efficiency.<br/>
					● Developed and executed a series of promotional materials for a major product launch, contributing to a 40% rise in sales during the campaign period.<br/>
					● Edited five video series focused on institutional sustainability achievements, resulting in a significant increase in viewer retention rates by optimizing content pacing and visual appeal based on analytics-driven decisions.</p>
				</div>
				<div className="resume-section-div-item">
					<h3 className="resume-section-div-item-title">Universidad Icesi</h3>
					<h4 className="resume-section-div-item-subtitle">Assistant Graphic Designer / September 2022 - August 2023</h4>
					<p className="resume-section-div-item-p">● Created and optimized over 30 email templates and graphical pieces for internal communications, improving message clarity and consistency across the organization.<br/>
					● Developed a standardized design template for internal newsletters, which reduced production time by 30% and streamlined the approval process.<br/>
					● Reworked materials for internal branding, including posters and flyers, which led to an increase of 20% of participation from employees on company events.</p>
				</div>
			</div>
		</section>
		<section className="education-section">
			<div className="education-section-div">
				
			</div>
		</section>
		<Footer></Footer>
	</>
  )
}

export default Resume;