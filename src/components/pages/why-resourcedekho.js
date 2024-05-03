import React from 'react';
import styled from 'styled-components';

const WhyResourcedekhoPage = ({ data }) => {
	return (
		<>
			<Container>
				<div>
					<h2>Why ResourceDekho?</h2>
				</div>
				<div>
					<span>
						<h4>We are more </h4>
						{/* <span>
							{data.map((item, index) => (
								<div key={index}>
									<h4>{item.title}</h4>
								</div>
							))}
						</span>{' '} */}
					</span>
				</div>
				{data.map((item, index) => (
					<Content key={index}>
						<span className="green">
							<i className={item.icon}></i>
						</span>
						<h1>{item.title}</h1>
						<p>{item.desc}</p>
					</Content>
				))}
			</Container>
		</>
	);
};

export default WhyResourcedekhoPage;

const Container = styled.div`
	width: 100%;
	background: linear-gradient(
		159deg,
		rgb(220, 220, 220) 0%,
		rgb(200, 200, 200) 100%
	);
	padding: 10rem;
	text-align: center;
`;

const Content = styled.div`
	span {
		font-size: 5rem;
	}

	h1 {
		font-size: 5rem;
		padding-bottom: 1rem;
	}

	p {
		font-size: 2rem;
	}
`;
