import React, { useState } from 'react';

export const Faq = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
			<style>
				{`
                    /* FAQ Container */
                    .faq-container {
                        padding: 50px 0;
                        background-color: #dfeeee;
                    }

                    /* Left Item Styles */
                    .left-item {
                        text-align: center;
                    }

                    .faq-image {
                        width: 145px;
                        height: 145px;
                        margin-bottom: 15px;
                    }

                    /* FAQ Item Styles */
                    .faq-item {
                        margin-bottom: 20px;
                    }

                    /* Accordion Icon Styles */
                    .accordion-icon {
                        cursor: pointer;
                        font-size: 20px;
                        transition: transform 0.3s ease;
                    }

                    .accordion-icon.active {
                        transform: rotate(-90deg);
                    }

                    /* Panel Styles */
                    .panel {
                        display: none;
                        overflow: hidden;
                        transition: max-height 0.3s ease-out;
                    }

                    .panel.show {
                        display: block;
                    }

                    /* Card Styles */
                    .faq-card {
                        border-radius: 20px;
                        border: 2px solid #e0e0e0;
                        background-color: #f9f9f9;
                        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
                        position: relative;
                    }

                    .faq-card-header {
                        border-radius: 20px;
                        background-color: #ffffff;
                        border-bottom: 1px solid #e0e0e0;
                        padding: 15px 40px 15px 20px; /* Adjusted padding */
                        cursor: pointer;
                        position: relative;
                    }

                    .faq-card-header::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        transform: translateY(-50%);
                        font-size: 20px;
                    }

                    .faq-card-body {
                        padding: 0;
                    }

                    .faq-answer {
                        padding: 20px;
                    }
                `}
			</style>
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
														Chat with our team
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
																<h3 className="mb-0">{item.question}</h3>
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
																	<p>{item.answer}</p>
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
