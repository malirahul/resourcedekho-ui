import React from 'react';

export const Testimonials = (props) => {
	return (
		<div id="testimonials">
			<div className="container">
				<div className="section-title text-center">
					<h2>WHY WE ARE THE BEST</h2>
					<div className="text-center">
						<h4>
							“ Hire for Passion and Intensity; there is training for everything
							“
						</h4>
					</div>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className="col-md-4"
								>
									<div className="testimonial">
										<div className="testimonial-image">
											<img
												src={d.img}
												alt="img"
											/>
										</div>
										<div className="testimonial-content">
											<p>"{d.text}"</p>
											<div className="testimonial-meta"> - {d.name} </div>
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
