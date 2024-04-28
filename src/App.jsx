import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
import { Testimonials } from './components/testimonials';
import { Team } from './components/Team';
import { Contact } from './components/contact';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import Footer from './components/footer';
import PricingPage from './components/pricing';
import AboutUsPage from './components/pages/about-page';
import WhyResourcdekho from './components/pages/why-resourcedekho';
import JoinNowPage from './components/pages/join-now';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

const App = () => {
	const landingPageData = JsonData;

	return (
		<Router>
			<div>
				<Routes>
					<Route
						path="/"
						element={<HomePage data={landingPageData} />}
					/>
					<Route
						path="/about_us"
						element={<AboutUsPage data={landingPageData} />}
					/>
					<Route
						path="/why_resourcedekho"
						element={
							<WhyResourcdekho data={landingPageData.WhyResourcedekho} />
						}
					/>
					<Route
						path="/join_us"
						element={<JoinNowPage data={landingPageData.JoinNow} />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

const HomePage = ({ data }) => {
	return (
		<div>
			<Navigation />
			<Header data={data.Header} />
			<Features data={data.Features} />
			<About data={data.About} />
			<Services data={data.Services} />
			<PricingPage data={data} />
			{/* <Gallery data={data.Gallery} /> */}
			<Testimonials data={data.Testimonials} />
			<Team data={data.Team} />
			<Contact data={data.Contact} />
		</div>
	);
};

export default App;
