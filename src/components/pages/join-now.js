import React from 'react';
import styled from 'styled-components';
import { NavigationPage } from './navigation-page';
import { Testimonials } from '../testimonials';
import testimonialData from '../../data/data.json';

const JoinNowPage = ({ data }) => {
	const testimonial = testimonialData;
	return (
		<>
			<NavigationPage />
			<div id="join-now-page">
				<div className="container">
					<div className="section-title text-center">
						<h2>{data.header}</h2>
					</div>
					<Content>
						{data.content.map((item, index) => (
							<Card key={index}>
								<CardContent>
									<ContentBar>{item.title}</ContentBar>
									<Description>{item.description}</Description>
								</CardContent>
							</Card>
						))}
					</Content>
				</div>
			</div>

			<Testimonials testimonial={testimonial.Testimonials} />
		</>
	);
};

export default JoinNowPage;

const Container = styled.div`
	width: 100%;
	background: linear-gradient(159deg, #e6e6fa 0%, #ffffff 100%);
	padding: 2rem;
	margin-top: 8rem;
	text-align: center;
`;

const HeaderBar = styled.div`
	background-color: #ff8955;
	color: #fff;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 2rem;
	font-size: 3rem;
	border-radius: 10px;
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	margin-top: 2rem;
`;

const Card = styled.div`
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	width: calc(25% - 1rem); /* 4 cards in a row */
	max-width: 300px;
	overflow: hidden;
	position: relative;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: translateY(-10px);
	}
`;

const CardContent = styled.div`
	padding: 2rem;
`;

const ContentBar = styled.div`
	background-color: #ff758c;
	color: #fff;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 1.4rem;
	font-size: 1.6rem;
	border-radius: 10px;
`;

const Description = styled.span`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	margin-top: 1rem;
	padding: 1rem;
	font-size: 1.4rem;
	color: #333;
	display: inline-block;
`;
