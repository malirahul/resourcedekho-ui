import React from 'react';
import { NavigationPage } from './navigation-page';
import { Testimonials } from '../testimonials';
import testimonialData from '../../data/data.json';

const JoinNowPage = ({ data }) => {
	const testimonial = testimonialData;
	return (
		<>
			<NavigationPage />

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="onboard-growInDiv">
							<div className="title-section text-center">
								<h2 className="section-title font-size-jumbo font-ultrabold">
									{data.header}
								</h2>
							</div>
						</div>

						<div className="latest-accordion">
							{data.content.map((item, index) => (
								<div key={index}>
									<div className="ind-accordion close">
										<div className="course-accordion">
											<div className="accordion-head accord-title">
												<p className="is-flex">
													<img
														decoding="async"
														src="https://cdn.hyperverge.co/wp-content/uploads/2024/02/convert-Users.webp"
														alt="icon"
													/>
													<span>{item.title}</span>
												</p>
											</div>
										</div>
										<div
											className="course-panel"
											style={{ display: 'none' }}
										>
											<p>{item.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Testimonials testimonial={testimonial} />
		</>
	);
};

export default JoinNowPage;
