import React from 'react';

const Footer = (props) => {
	return (
		<div>
			<div id="footer">
				<div className="container">
					<div className="col-md-12">
						<div
							className="row"
							style={{ textAlign: 'center' }}
						>
							<div className="content">
								<div className="col-md-4">
									<h3>Contact Us</h3>
									<p>
										ResourceDekho IT Services <br />
										<a href="mailto:info@resourcedekho.com">
											info@resourcedekho.com
										</a>
										<br />
										+91 9667753892 <br />
										Jaipur, Rajasthan, India – 302020
									</p>
								</div>
								<div className="col-md-4">
									<h3>Services</h3>
									<ul>
										<li>Cloud migration services</li>
										<li>DevOps as a service</li>
										<li>Log Management and Monitoring</li>
										<li>DevOps outsourcing</li>
										<li>Infrastructure as Code</li>
										<li>Web development</li>
									</ul>
								</div>
								<div className="col-md-4">
									<h3>Consulting</h3>
									<ul>
										<li>CI/CD consulting</li>
										<li>Cloud consulting</li>
										<li>DevOps consulting</li>
										<li>Microservices consulting</li>
										<li>Infrastructure as code consulting</li>
									</ul>
								</div>
								<div className="col-md-12">
									<div className="footer-links">
										<span>
											{' '}
											{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}·
											<a href="#"> Privacy Policy</a>
										</span>

										<span>
											{' '}
											{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}·{' '}
											<a href="#">Terms of Service</a>
										</span>

										<span>
											{' '}
											{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}·{' '}
											<a href="#">Contact Us</a>
										</span>
									</div>
								</div>
							</div>

							<div className="col-md-12">
								<div className="social">
									<ul>
										<li>
											<a href={props.data ? props.data.facebook : '/'}>
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href={props.data ? props.data.twitter : '/'}>
												<i className="fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href={props.data ? props.data.youtube : '/'}>
												<i className="fa fa-youtube"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="footer-tag">
				<div className="container text-center">
					<p style={{ color: 'black' }}>
						&copy; 2024 IT resources and services for DevOps infrastructure.
						Design by{' '}
						<a
							href="https://resourcedekho.com/"
							rel="nofollow"
							style={{ color: 'blue' }}
						>
							ResourceDekho
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
