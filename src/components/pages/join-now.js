import React, { useState } from 'react';
import { NavigationPage } from './navigation-page';

const JoinNowPage = ({ data }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<style>
				{`
                .onboard-gow {
                    /*background: #F6F6FE;*/
                    position: relative;
                    z-index: 0;
                    padding: 120px 0;
                }
                .onboard-gow:after {
                    content: "";
                    position: absolute;
                    background: url(https://cdn.hyperverge.co/wp-content/uploads/2024/01/Group-483788.png);
                    width: 890.997px;
                    height: 918.394px;
                    top: 0;
                    right: -22%;
                    opacity: 0.8;
                    z-index: -1;
                }
                .ind-accordion {
                    border-radius: 16px;
                    background: #F8F8FA;
                    margin-bottom: 40px;
                }

                .ind-accordion  {
                    padding: 23px 20px;
                }
                .ind-accordion .accord-title p {
                    margin:0;
                    align-items: center;
                    position: relative;
                }
                .ind-accordion .accord-title p img {
                    width: 60px;
                    height: 60px; 
                    margin-right: 17px;
                }
                .ind-accordion .accord-title p span {
                color: #262642; 
                font-size: 26px; 
                font-weight: 600;
                line-height: 100%; /* 26px */
                letter-spacing: 0.26px;
                }
                div.course-accordion { 
                    cursor: pointer;  
                    line-height: 1.5em; 
                } 
                div.course-panel { 
                    background-color: transparent; 
                    overflow: hidden; 
                    margin-left: 77px; 
                    padding: 7px 18px 10px 0 !important;
                display: none;
                }
                div.course-panel p {
                color: #3C3C50; 
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 30px */
                letter-spacing: 0.2px;
                margin:0;
                }
                .latest-accordion {
                    max-width: 730px;
                    margin: 56px auto 0;
                } 

                /*div not active*/
                .accordion-head {
                position: relative;
                }
                .accordion-head p:after {
                    content: "";
                    font-weight: bold;
                    float: right;
                    margin-left: 5px;
                    position: absolute;
                    top: 50%;
                    right: 0px;
                    transform: translate(0, -50%);
                    background-image: url(https://cdn.hyperverge.co/wp-content/uploads/2024/02/angle-down.png);
                    height: 10px;
                    width: 18px;
                    background-repeat: no-repeat !important;
                    background-size: 100% !important;
                }

                .accordion-head.accord-title.active p:after {
                    background: url(https://cdn.hyperverge.co/wp-content/uploads/2024/02/angle-up-pink.png);
                }
                .accordion-head.accord-title.active .accord-title span {
                color: #FF0A51;
                }
                .course-accordion.active>div {
                    padding-bottom: 0;
                }
                .accordion-head.accord-title.active p span {
                    color: #FF0A51 !important;
                }

                .latest-accordion .close {
                    float: none !important;
                }
                .latest-accordion .ind-accordion {
                    opacity: 1 !important;
                }
                .ind-accordion.open .accordion-head {
                    padding-bottom: 0 !important;
                }
                body .onboard-growInDiv .section-title {
                    margin-bottom: 0 !important;
                }
                `}
			</style>

			<NavigationPage />

			<section className="onboard-gow">
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
									<div
										className={`ind-accordion ${
											openIndex === index ? 'open' : 'close'
										}`}
										key={index}
									>
										<div
											className="course-accordion"
											onClick={() => toggleAccordion(index)}
										>
											<div className="accordion-head accord-title">
												<p className="is-flex">
													<img
														decoding="async"
														src={item.icon}
														alt="icon"
													/>
													<span>{item.title}</span>
												</p>
											</div>
										</div>

										<div
											className="course-panel"
											style={{
												display: openIndex === index ? 'block' : 'none',
											}}
										>
											<p>{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default JoinNowPage;
