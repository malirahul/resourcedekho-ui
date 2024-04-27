import React from 'react';

export const Services = (props) => {
	// const [hoveredCard, setHoveredCard] = useState(null);

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
                    background: #f6ab3c;
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
										alt=""
									/>
								</div>
								<div className="details position-relative">
									<div className="icon">
										<i className={`bi ${service.icon}`}></i>
									</div>
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
		</div>

		// <div
		// 	id="services"
		// 	className="text-center"
		// >
		// 	<div className="container">
		// 		<div className="section-title">
		// 			<h2>Our Services</h2>
		// 			<p>
		// 				We provide business solutions and resource outsourcing for IT
		// 				services for the below-mentioned:
		// 			</p>
		// 		</div>
		// 		<div className="row">
		// 			{props.data
		// 				? props.data.map((d, i) => {
		// 						let list;
		// 						if (Array.isArray(d.text.items)) {
		// 							list = (
		// 								<>
		// 									{d.text.items.map((item, index) => (
		// 										<li key={index}>{item}</li>
		// 									))}
		// 								</>
		// 							);
		// 						} else {
		// 							list = <p>{d.text.items}</p>;
		// 						}
		// 						return (
		// 							<div
		// 								key={`${d.name}-${i}`}
		// 								className="col-lg-4 col-md-6 col-sm-12 service-card d-flex align-items-stretch"
		// 								style={{ marginBottom: '20px' }}
		// 								onMouseEnter={() => setHoveredCard(`${d.name}-${i}`)}
		// 								onMouseLeave={() => setHoveredCard(null)}
		// 							>
		// 								<div
		// 									className="card"
		// 									style={{
		// 										boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		// 										width: '100%',
		// 										height: '35%',
		// 										transition: 'transform 0.3s ease',
		// 										transform:
		// 											hoveredCard === `${d.name}-${i}`
		// 												? 'translateY(-5px)'
		// 												: 'none',
		// 									}}
		// 								>
		// 									<div
		// 										className="card-body d-flex flex-column justify-content-between"
		// 										style={{ height: '100%' }}
		// 									>
		// 										<i className={d.icon}></i>
		// 										<div className="service-desc">
		// 											<h3>{d.name}</h3>
		// 											{list}
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						);
		// 				  })
		// 				: 'loading'}
		// 		</div>
		// 	</div>
		// </div>
	);
};
