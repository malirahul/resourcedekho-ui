import React from 'react';
import './pages-style/service-page.css';

export const ServicePage = () => {
	return (
		<div className="digital-transformation-services">
			<h4>OUR DIGITAL TRANSFORMATION SERVICES</h4>
			<div className="services-info">
				<h2 className="services-info-title">
					We provide all types of DevOps & Cloud services
				</h2>
				<div className="services-info-details">
					<p className="services-info-description">
						Here at ResourceDekho, our DevOps consulting services help
						organizations break down silos and establish efficient processes
						between departments, aligning with their business goals.
					</p>
					<p className="services-info-description">
						As your DevOps service provider, we ensure the smooth operation of
						your systems, allowing you to focus on your core business needs.
					</p>
				</div>
			</div>

			<div className="service-container">
				<div className="service-card cloud-services">
					<div>
						<h2>Cloud Services</h2>
						<ul>
							<div className="inner-service-container">
								<div className="inner-service-card">
									<li>Cloud migration services</li>
								</div>
								<div className="inner-service-card">
									<li>Cloud architecture design</li>
								</div>
								<div className="inner-service-card">
									<li>Managed cloud services</li>
								</div>
								<div className="inner-service-card">
									<li>Cloud consulting services</li>
								</div>
								<div className="inner-service-card">
									<li>Serverless architecture design</li>
								</div>
							</div>
						</ul>
					</div>
				</div>
				<div className="service-card devops-services">
					<div>
						<h2>DevOps Services</h2>
						<ul>
							<div className="inner-service-container">
								<div className="inner-service-card">
									<li>DevOps as a service</li>
								</div>
								<div className="inner-service-card">
									<li>DevOps outsourcing</li>
								</div>
								<div className="inner-service-card">
									<li>Continuous integration and deployment</li>
								</div>
								<div className="inner-service-card">
									<li>Container orchestration services</li>
								</div>
								<div className="inner-service-card">
									<li>Infrastructure as code</li>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
