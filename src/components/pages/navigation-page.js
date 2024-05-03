import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavigationPage = () => {
	const location = useLocation();
	const isActivePage = (page) => {
		return location.pathname === page ? 'active' : '';
	};

	return (
		<nav
			id="menu"
			className="navbar navbar-default navbar-fixed-top"
		>
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link
						to="/"
						className="navbar-brand page-scroll"
						style={{ color: 'blue' }}
					>
						ResourceDekho
					</Link>
				</div>

				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav navbar-right">
						<li className={isActivePage('/')}>
							<Link
								to="/"
								className="page-scroll"
							>
								Home
							</Link>
						</li>
						<li className={isActivePage('/about_us')}>
							<Link
								to="/about_us"
								className="page-scroll"
								style={{
									fontWeight: 'bold',
									color: isActivePage('/about_us') ? 'black' : 'inherit',
								}}
							>
								About
							</Link>
						</li>
						<li className={isActivePage('/services')}>
							<a
								href="/services"
								className="page-scroll"
								style={{
									fontWeight: 'bold',
									color: isActivePage('/services') ? 'black' : 'inherit',
								}}
							>
								Services
							</a>
						</li>
						<li className={isActivePage('/why_resourcedekho')}>
							<Link
								to="/why_resourcedekho"
								className="page-scroll"
								style={{
									fontWeight: 'bold',
									color: isActivePage('/why_resourcedekho')
										? 'black'
										: 'inherit',
								}}
							>
								Why ResourceDekho?
							</Link>
						</li>
						<li className={isActivePage('/join_us')}>
							<Link
								to="/join_us"
								className="page-scroll"
								style={{
									fontWeight: 'bold',
									color: isActivePage('/join_us') ? 'black' : 'inherit',
								}}
							>
								Join Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
