import React from 'react';

export const ServicePage = ({ data }) => {
	return (
		<>
			<style>{`
        .our_expertise .b-radius {
          border-radius: 10px;
          color: #fff;
        }
        .our_expertise .para-color {
          color: #fff;
        }
        .our_expertise .col-width {
          margin-bottom: 25px;
          color:#fff;
        }
        .our_expertise .hover-text:hover {
          transform: scale(1.1);
          cursor: pointer;
          transition: transform 0.5s;
        }
        .our_expertise .width-desc {
          width: 100%;
          margin: auto;
          max-width: 400px; 
        }
        .our_expertise .service-card {
          background-color: #554ef1;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
        }
        .our_expertise .service-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

			<section
				className="our_expertise uiblock pad-y-9"
				style={{ background: '#f6f9fc', paddingTop: '140px' }}
			>
				<div className="container">
					<div className="text-center">
						<div className="font-size-small font-ultrabold text-uppercase mar-b-6">
							OUR DIGITAL TRANSFORMATION SERVICES
						</div>
						<div className="font-size-jumbo font-ultrabold brand-black mar-b-4">
							<h3 className="width-desc">
								We provide all types of DevOps & Cloud services
							</h3>
						</div>
					</div>
					<br />
					<div className="row justify-content-between">
						{data.map((item, index) => (
							<div
								className="col-12 col-md-6 mar-t-7"
								key={index}
							>
								<div className="service-card">
									<div className="pad-y-5 no-padding-top">
										<img
											src={item.image}
											alt={item.title}
											loading="lazy"
										/>
									</div>
									<h5 className="font-size-larger font-bold">{item.title}</h5>
									<ul className="font-size-smaller para-color">
										{item.services.map((service, index) => (
											<li key={index}>{service}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
