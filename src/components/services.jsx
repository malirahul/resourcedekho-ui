import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Services = (props) => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/services');
		window.scrollTo(0, 0);
	};

	return (
		<div
			id="services"
			className="services"
		>
			<style>{`
                .services .section-header {
                    text-align: center;
                    padding-bottom: 40px;
                }
                .services .gy-5 {
                    --bs-gutter-y: 3rem;
                }
                img {
                    overflow-clip-margin: content-box;
                    overflow: clip;
                }
                .services .img {
                    border-radius: 8px;
                    overflow: hidden;
                }
                .services .img-fluid {
                    max-width: 100%;
                    height: auto;
                }
                .services .details {
                    padding: 30px 30px;
                    margin: -100px 30px 10 10px;
                    transition: all ease-in-out 0.3s;
                    position: relative;
                    background: rgba(255, 255, 255, 0.9);  
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: 0px 0 25px rgba(0, 0, 0, 0.1);
                }
				.services h3, .services li{
                    color: #000 !important;
                }
                .services .details .icon {
                    margin: 0;
                    width: 72px;
                    height: 72px;
                    background: #0C2D48;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    color: var(--color-white);
                    font-size: 28px;
                    transition: ease-in-out 0.3s;
                    position: absolute;
                    top: -36px;
                    left: calc(50% - 36px);
                    border: 6px solid var(--color-black);
                }
                .position-relative {
                    position: relative !important;
					margin-left: 30px !important;
					margin-right: 30px !important;
                }
                .services .stretched-link::after {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 1;
                    content: "";
                }
            `}</style>
			<div
				className="container aos-init aos-animate"
				data-aos="fade-up"
			>
				<div className="section-header">
					<h2>Our Services</h2>
					<h3>
						We provide business solutions and resource outsourcing for IT
						services as mentioned below:
					</h3>
				</div>

				<div className="row gy-5">
					{props.data.map((service) => (
						<div
							key={service.id}
							className="col-xl-4 col-md-4 aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay={service.delay}
						>
							<div className="service-item">
								<div className="img zoom-hover">
									<img
										src={service.image}
										className="img-fluid"
										alt="service img"
									/>
								</div>
								<div className="details position-relative">
									<div className="icon">
										<img
											decoding="async"
											src={`${service.icon}`}
											alt="icon"
											style={{
												width: '40px',
												height: '40px',
												filter: 'invert(1)',
											}}
										/>
									</div>
									{/* eslint-disable-next-line */}
									<a
										href="#"
										className="stretched-link"
									>
										<h3>{service.title}</h3>
									</a>
									{service.services.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					textAlign: 'center',
					paddingTop: '30px',
				}}
			>
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
	);
};
