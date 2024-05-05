import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../images/about-us/about.jpg';

export const About = (props) => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/about_us');
		window.scrollTo(0, 0);
	};

	return (
		<div id="about">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-6">
						<img
							src={aboutImg}
							className="img-responsive"
							alt=""
						/>
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="about-text">
							<h2>About Us</h2>
							<p>{props.data ? props.data.paragraph : 'loading...'}</p>
							<p>{props.data ? props.data.paragraph1 : 'loading...'}</p>
							<h3>Why Choose Us?</h3>
							<div className="list-style">
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: 'loading'}
									</ul>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: 'loading'}
									</ul>
								</div>
							</div>
						</div>
						<div style={{ textAlign: 'right' }}>
							<button
								onClick={handleButtonClick}
								style={{
									padding: '10px 20px',
									backgroundColor: '#007bff',
									color: 'white',
									border: 'none',
									borderRadius: '5px',
								}}
							>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
