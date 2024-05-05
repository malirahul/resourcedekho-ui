import React from 'react';
import company from '../../images/about-us/our-leadership-banner.png';
import devOps from '../../images/about-us/devops.jpg';

const AboutUsPage = () => {
	return (
		<>
			<section
				className="RPjrgFxpqrqo timeline_13 uiblock testblock pad-y-9"
				style={{ paddingTop: '110px' }}
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="title-section text-center">
								<h2 className="section-title font-size-jumbo font-ultrabold">
									<span className="gradient">About ResourceDekho</span>
								</h2>
								<h4 className="tg content font-size-larger mar-b-7">
									🙂 A place for managed IT resources and services for DevOps
									infrastructure
								</h4>
								<br />
							</div>
						</div>
					</div>
					<div className="gap-6"></div>
					<div className="items-wrapper is-relative">
						<div className="item-row in">
							<div className="row justify-content-between">
								<div className="col-12 col-md-6 mar-b-7 no-margin-bottom-md img-col">
									<div className="text-center">
										<img
											decoding="async"
											src={company}
											className="img-responsive"
											alt="img-col"
											width="100%"
											height="auto"
											loading="lazy"
										/>
									</div>
								</div>
								<div
									className="col-12 col-md-6 content-col"
									style={{ textAlign: 'justify' }}
								>
									<h3 className="font-bold font-size-huge font-bold mar-b-3 item-title">
										Accept clients throughout the globe
									</h3>
									<hr />
									<p
										className="tg3 item-desc mar-b-4 font-regular"
										style={{ fontSize: '18px' }}
									>
										We accept clients throughout the globe who are ready to
										Outsource IT needs.
									</p>

									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										We at ResourceDekho provide managed IT resources and
										services for DevOps Infrastructure & Cloud, Monitoring &
										Logging solution & setup, Digital transformation, Software &
										development.
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										We focus on the needs of our clients to provide 100%
										satisfaction. We understand the whole depth and scope of our
										client’s businesses and enterprise-wide IT environments
										allows us to come up with efficient, long-lasting IT
										solutions and choose effective technologies.
									</p>
								</div>
							</div>
						</div>
						<div className="item-row in">
							<div className="row flex-md-row-reverse justify-content-between">
								<div className="col-12 col-md-6 mar-b-7 no-margin-bottom-md img-col">
									<div className="text-center">
										<img
											decoding="async"
											src={devOps}
											className="img-responsive"
											alt="img-col"
											width="100%"
											height="auto"
											loading="lazy"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6 content-col">
									<h3
										className="font-bold font-size-huge font-bold mar-b-3 item-title"
										style={{ fontSize: '18px' }}
									>
										ResourceDekho Specialised in
									</h3>
									<hr />
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>DevOps and Automation</li>
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>Installation Configuration and Setup</li>
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>DevOps Consultant</li>
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>Software Application Design and Development</li>
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>Search Engine Optimization</li>
									</p>
									<p
										className="tg3 item-desc mar-b-4 font-size-large font-regular"
										style={{ fontSize: '18px' }}
									>
										<li>Responsive Web Design and Web Hosting</li>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsPage;
