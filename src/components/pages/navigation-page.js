import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationPage = () => {
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
						<li>
							<Link
								to="/about_us"
								className="page-scroll"
							>
								About
							</Link>
						</li>
						<li>
							<a
								href="#services"
								className="page-scroll"
							>
								Services
							</a>
						</li>
						<li>
							<Link
								to="/why_resourcedekho"
								className="page-scroll"
							>
								Why ResourceDekho?
							</Link>
						</li>
						<li>
							<Link
								to="/join_us"
								className="page-scroll"
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
