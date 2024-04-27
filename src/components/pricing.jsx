import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, subtitle, price, content }) => {
	return (
		<div className="PricingCard">
			<header>
				<h1 className="card-title">{title}</h1>
				<h6 className="card-subtitle">{subtitle}</h6>
			</header>
			{/* features here */}
			<div className="card-features">
				{content.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</div>

			{price.map((plan, index) => (
				<button
					className="card-btn"
					key={index}
				>
					{plan}
				</button>
			))}
		</div>
	);
};

const PricingPage = ({ data }) => {
	const [selectMonthly, setSelectMonthly] = useState(false);
	return (
		<div
			id="pricing"
			className="PricingApp"
		>
			<div className="app-container">
				{/* Header */}
				<header>
					<h1 className="header-topic">Plan and Package</h1>
					<div className="header-row">
						<h4
							style={{
								color: !selectMonthly ? 'blue' : 'Red',
								fontWeight: selectMonthly ? 'bold' : 'normal',
							}}
						>
							Static Web Development Plans
						</h4>
						<label className="price-switch">
							<input
								className="price-checkbox"
								onChange={() => {
									setSelectMonthly((prev) => !prev);
								}}
								type="checkbox"
							/>
							<div className="switch-slider"></div>
						</label>
						<h4
							style={{
								color: selectMonthly ? 'blue' : 'Red',
								fontWeight: !selectMonthly ? 'bold' : 'normal',
							}}
						>
							Monitoring as a Service Plans
						</h4>
					</div>
					<br />
					<h4 className="header-topic">
						{!selectMonthly
							? 'Choose the best package for your necessity'
							: 'Choose the best package from developing the website to its maintenance and hosting.'}
					</h4>
				</header>
				{/* Cards here */}
				<div className="pricing-cards">
					<PricingCard
						title="Silver"
						subtitle="Enrich our growing community."
						price={
							!selectMonthly
								? ['INR 1,60,000 / month']
								: ['INR 1,00,000 (One time cost)']
						}
						content={
							!selectMonthly
								? [
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<FaCheck style={{ marginRight: '0.5rem' }} />
											24×7 Monitoring
										</div>,

										'Managed By ResourceDekho',
										'Rapid Escalation',
										'Monitoring & Health Check',
								  ]
								: ['Static Full Functional Website']
						}
					/>
					<PricingCard
						title="Gold"
						subtitle="Support special exhibitions."
						price={
							!selectMonthly
								? ['INR 2,80,000 / month']
								: ['INR 1,00,000 (One time cost)', 'INR 40,000 / year']
						}
						content={
							!selectMonthly
								? [
										'24×7 Monitoring',
										'Managed By ResourceDekho',
										'Rapid Escalation',
										'Monitoring & Health Check',
										'Dedicated Monitoring Resource',
										'Notification to client',
								  ]
								: [
										'Static Full Functional Website',
										'Support and Maintenance',
										'Web Hosting Service',
										'Add On Page requests throughout the year',
								  ]
						}
					/>
					<PricingCard
						title="Platinum"
						subtitle="Take support to the next level."
						price={
							!selectMonthly
								? ['INR 3,75,000/ month']
								: ['INR 2,25,000 (One time cost)', 'INR 60,000 / year']
						}
						content={
							!selectMonthly
								? [
										'24×7 Monitoring',
										'Managed By ResourceDekho',
										'Rapid Escalation',
										'Monitoring & Health Check',
										'Dedicated Monitoring Resource',
										'Notification to client',
										'Basic Troubleshooting',
										'Database Performance Monitoring',
								  ]
								: [
										'Static Full Functional Website',
										'Support and Maintenance',
										'Web Hosting Service',
										'Add On Page requests throughout the year',
										'Image and Content Creation',
										'Static Full Functional Website without CMS',
										'Training and Assistance',
										'24×7 Monitoring',
								  ]
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default PricingPage;
