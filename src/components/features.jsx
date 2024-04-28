import React, { useState } from 'react';

export const Features = (props) => {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div
			id="features"
			className="text-center"
		>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h2>Features</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className="col-md-3 col-sm-6"
								>
									<div
										className="service-card"
										style={{
											marginBottom: '20px',
											transition: 'transform 0.3s ease',
											transform:
												hoveredCard === `${d.name}-${i}`
													? 'scale(1.05)'
													: 'none',
										}}
										onMouseEnter={() => setHoveredCard(`${d.name}-${i}`)}
										onMouseLeave={() => setHoveredCard(null)}
									>
										<div className="card">
											<div className="card-body">
												<i className={d.icon}></i>
												<div className="service-desc">
													<h3>{d.name}</h3>
													{Array.isArray(d.text.items)
														? d.text.items.map((item, index) => (
																<li key={index}>{item}</li>
														  ))
														: null}
												</div>
											</div>
										</div>
									</div>
								</div>
						  ))
						: 'loading'}
				</div>
			</div>
		</div>
	);
};
