import React, { useState } from 'react';

export const Features = (props) => {
	const [hoveredCard, setHoveredCard] = useState(null);
	return (
		<div
			id="features"
			className="text-center"
		>
			<div className="container">
				<div className="col-md-10 col-md-offset-1 section-title">
					<h2>Features</h2>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => {
								let list;
								if (Array.isArray(d.text.items)) {
									list = (
										<>
											{d.text.items.map((item, index) => (
												<li key={index}>{item}</li>
											))}
										</>
									);
								} else {
									list = <p>{d.text.items}</p>;
								}
								return (
									<div
										key={`${d.name}-${i}`}
										className="col-xs-6 col-md-3 col-sm-12 service-card d-flex align-items-stretch"
										style={{ marginBottom: '10px' }}
										onMouseEnter={() => setHoveredCard(`${d.name}-${i}`)}
										onMouseLeave={() => setHoveredCard(null)}
									>
										<div
											className="card"
											style={{
												boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
												background: 'rgba(255, 255, 255, 0.9)',
												width: '100%',
												height: '35%',
												transition: 'transform 0.3s ease',
												transform:
													hoveredCard === `${d.name}-${i}`
														? 'translateY(-5px)'
														: 'none',
											}}
										>
											<div
												className="card-body d-flex flex-column justify-content-between"
												style={{ height: '100%' }}
											>
												<i className={d.icon}></i>
												<div className="service-desc">
													<h3>{d.name}</h3>
													{list}
												</div>
											</div>
										</div>
									</div>
								);
						  })
						: 'loading'}
				</div>
			</div>
		</div>
	);
};
