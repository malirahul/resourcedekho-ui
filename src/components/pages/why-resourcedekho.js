import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WhyResourcedekhoPage = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const intervalDuration = 1000;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === data.length - 1 ? 0 : prevIndex + 1
		);
	};

	useEffect(
		() => {
			const intervalId = setInterval(nextSlide, intervalDuration);
			return () => clearInterval(intervalId);
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<Container>
			<Header>
				<h2>Why ResourceDekho?</h2>
			</Header>
			<SubHeader>
				<Carousel>
					<h3>We are more </h3>
					{data.map((item, index) => (
						<CarouselCard
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							highlighted={hoveredIndex === index || currentIndex === index}
						>
							<CardContent>
								<h4>{item.title}</h4>
							</CardContent>
						</CarouselCard>
					))}
				</Carousel>
			</SubHeader>
			<Content>
				{data.map((item, index) => (
					<FeatureContent key={index}>
						<IconAndTitle>
							<Icon className={item.icon}></Icon>
							<FeatureTitle>{item.title}</FeatureTitle>
						</IconAndTitle>
						<FeatureDescription>{item.desc}</FeatureDescription>
					</FeatureContent>
				))}
			</Content>
		</Container>
	);
};

export default WhyResourcedekhoPage;

const Container = styled.div`
	width: 100%;
	background-color: #f8f8fa;
	padding: 5rem 0;
	text-align: center;
`;

const Header = styled.div`
	margin-bottom: 3rem;
`;

const SubHeader = styled.div`
	margin-bottom: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Carousel = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const CarouselCard = styled.div`
	flex: 1;
	margin: 0 1rem;
	background-color: ${({ highlighted }) => (highlighted ? '#4caf50' : '#fff')};
	color: ${({ highlighted }) => (highlighted ? '#fff' : '#333')};
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	align-items: center;
	text-align: center;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #4caf50;
		color: #fff;
	}
`;

const CardContent = styled.div`
	padding: 3rem;
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 5rem 1rem;
	// flex-direction: column;

	@media (min-width: 768px) {
		padding: 5rem;
	}
`;

const FeatureContent = styled.div`
	width: 45%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		transition: all ease-in-out 0.3s;
		transform: translateY(-10px);
		box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const IconAndTitle = styled.div`
	padding: 1rem;
`;

const Icon = styled.i`
	font-size: 5rem;
	color: #4caf50;
	margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
	color: #262642;
	font-size: 26px;
	font-weight: 600;
	line-height: 100%;
	letter-spacing: 0.26px;
	margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
	color: #3c3c50;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: 0.2px;
	margin: 0;
	padding: 1rem;
`;
