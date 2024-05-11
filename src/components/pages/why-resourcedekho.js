import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WhyResourcedekhoPage = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const intervalDuration = 5000;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === data.length - 1 ? 0 : prevIndex + 1
		);
	};

	useEffect(() => {
		const intervalId = setInterval(nextSlide, intervalDuration);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Container>
			<Header>
				<h2>Why ResourceDekho?</h2>
			</Header>
			<SubHeader>
				<h4>We are more </h4>
				<Carousel>
					<CarouselCard>
						<CardContent>
							<h4>{data[currentIndex].title}</h4>
						</CardContent>
					</CarouselCard>
				</Carousel>
			</SubHeader>
			<Content>
				{data.map((item, index) => (
					<FeatureContent key={index}>
						<Icon className={item.icon}></Icon>
						<FeatureTitle>{item.title}</FeatureTitle>
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
	background-color: #f7f7f7;
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
`;

const CarouselCard = styled.div`
	flex: 1;
	margin: 0 1rem;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	align-items: center;
	text-align: center;
`;

const CardContent = styled.div`
	padding: 1.5rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FeatureContent = styled.div`
	width: 50%;
	max-width: 600px;
	height: 180px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin: 1rem;
	text-align: center;
`;

const Icon = styled.i`
	font-size: 5rem;
	color: #4caf50;
	margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #333;
`;

const FeatureDescription = styled.p`
	font-size: 1.6rem;
	color: #666;
`;
