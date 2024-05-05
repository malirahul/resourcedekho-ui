import React from 'react';
import './pages-style/service-page.css';

export const ServicePage = ({ data }) => {
	return (
		<div className="digital-transformation-services">
			<div style={{ fontStyle: 'italic' }}>
				<h4
					style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'blue' }}
				>
					{data.digitalTransformationServices.title}
				</h4>
			</div>

			<div className="services-info">
				<h2 className="services-info-title">
					{data.digitalTransformationServices.description}
				</h2>
				<h7 className="services-info-sub-description">
					{data.digitalTransformationServices.subDescription1}
				</h7>
				<br />
				<br />
				<h7 className="services-info-sub-description">
					{data.digitalTransformationServices.subDescription2}
				</h7>
				<div className="services-info-details">
					{data.digitalTransformationServices.services.map((service) => (
						<div key={service.title}>
							<p className="services-info-description">{service.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="service-container">
				{data.digitalTransformationServices.services.map((service) => (
					<div
						key={service.title}
						className="service-card services-content"
					>
						<div>
							<h2>{service.title}</h2>
							<ul>
								<div className="inner-service-container">
									{service.items.map((item) => (
										<div
											key={item.title}
											className="inner-service-card"
										>
											<div className="icon-container">
												<img
													decoding="async"
													src={item.icon}
													alt="Service Icon"
												/>
											</div>
											<div className="service-content">{item.title}</div>
										</div>
									))}
								</div>
							</ul>
						</div>
					</div>
				))}
			</div>
			<br />
			<div style={{ borderBottom: '1px solid ', margin: '20px 40px' }} />
			<br />
			<div style={{ fontStyle: 'italic' }}>
				<h4
					style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'blue' }}
				>
					{data.otherServices.title}
				</h4>
			</div>
			<div className="services-info">
				<h2 className="services-info-title">
					{data.otherServices.description}
				</h2>
				<h7 className="services-info-sub-description">
					{data.otherServices.subDescription}
				</h7>
				<div className="services-info-details">
					{data.otherServices.services.map((service) => (
						<div key={service.title}>
							<p className="services-info-description">{service.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="service-container">
				{data.otherServices.services.map((service) => (
					<div
						key={service.title}
						className="service-card services-content"
					>
						<div>
							<h2>{service.title}</h2>
							<ul>
								<div className="inner-service-container">
									{service.items.map((item) => (
										<div
											key={item.title}
											className="inner-service-card"
										>
											<div className="icon-container">
												<img
													decoding="async"
													src={item.icon}
													alt="Service Icon"
												/>
											</div>
											<div className="service-content">{item.title}</div>
										</div>
									))}
								</div>
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
