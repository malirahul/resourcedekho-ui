import React, { useState } from 'react';

export const Faq = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
			<div
				id="faq"
				className="text-center"
			>
				<section className="faq-container">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="card bg-light">
									<div className="card-body">
										<h2
											className="section-title"
											style={{ textAlign: 'center' }}
										>
											Frequently Asked Questions
										</h2>
										<div className="row">
											<div className="col-md-4">
												<div className="left-item">
													<img
														className="faq-image"
														src="https://cdn.hyperverge.co/wp-content/uploads/2024/02/Icon-set-7.png"
														alt="Frequently asked Questions"
													/>
													<p className="desc">
														Still have questions? Please chat with our friendly
														team
													</p>
													<a
														href="#contact"
														className="btn btn-primary"
													>
														Any Question ?
													</a>
												</div>
											</div>
											<div className="col-md-8">
												{data.map((item, index) => (
													<div
														className="faq-item"
														key={index}
													>
														<div className="faq-card">
															<div
																className="faq-card-header"
																onClick={() => toggleAccordion(index)}
															>
																<h3
																	className="mb-0"
																	style={{
																		fontSize: '20px',
																		fontWeight: 600,
																		lineHeight: '28px',
																		letterSpacing: '0.01em',
																		color: '#646487',
																		textAlign: 'left',
																		paddingLeft: '12px',
																	}}
																>
																	{item.question}
																</h3>

																<span
																	className={`accordion-icon ${
																		activeIndex === index ? 'active' : ''
																	}`}
																>
																	{activeIndex === index ? '-' : '+'}
																</span>
															</div>
															<div
																className={`faq-card-body panel ${
																	activeIndex === index ? 'show' : ''
																}`}
															>
																<div className="faq-answer">
																	<p
																		style={{
																			fontSize: '18px',
																			fontWeight: 500,
																			lineHeight: '27px',
																			letterSpacing: '0.01em',
																			textAlign: 'left',
																			paddingLeft: '30px',
																			color: '#3C3C50',
																		}}
																	>
																		{item.answer}
																	</p>
																</div>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
