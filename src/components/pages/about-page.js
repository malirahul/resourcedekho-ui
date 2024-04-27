import React from 'react';
import styles from './pages-style/about-us.module.css';
import { NavigationPage } from './navigation-page';

const AboutUsPage = () => {
	return (
		<>
			<NavigationPage />
			<div className={styles['about-us-container']}>
				{' '}
				{/* Use CSS module class */}
				<div className={styles['about-header']}>
					<h1>About ResourceDekho</h1>
				</div>
				<div className={styles['about-header-inner']}>
					<h4>
						A place for managed IT resources and services for DevOps
						infrastructure 🙂
					</h4>
				</div>
				<div className={styles['row']}>
					<div className={styles['empty-space']}></div>
					<div className={styles['card'] + ' ' + styles['card-content']}>
						<div className={styles['card-content-inner']}>
							<p>
								We welcome clients from around the globe who are prepared to
								outsource their IT needs.
							</p>
							<p>
								At ResourceDekho, we provide managed IT resources and services
								for DevOps Infrastructure & Cloud, Monitoring & Logging
								solutions & setup, Digital transformation, Software development.
							</p>
							<p>
								We prioritize our clients' needs to ensure 100% satisfaction.
								Understanding the depth and scope of our clients' businesses and
								enterprise-wide IT environments enables us to deliver efficient,
								long-lasting IT solutions and select effective technologies.
							</p>
						</div>
					</div>
					<div className={styles['card'] + ' ' + styles['card-image']}>
						<div className={styles['card-image-inner']}>
							<img
								src="https://resourcedekho.com/wp-content/uploads/2022/09/Untitled-design-2-1.png"
								alt="ResourceDekho Logo"
							/>
						</div>
					</div>
					<div className={styles['empty-space']}></div>
				</div>
				<div className={styles['row']}>
					<div className={styles['empty-space']}></div>
					<div className={styles['card'] + ' ' + styles['card-image']}>
						<div className={styles['card-image-inner']}>
							<img
								src="https://resourcedekho.com/wp-content/uploads/2022/09/Add-a-subheading.jpg"
								alt="Specializations"
							/>
						</div>
					</div>
					<div className={styles['card'] + ' ' + styles['card-content']}>
						<div className={styles['card-content-inner']}>
							<p className={styles['specializations-heading']}>
								<strong>ResourceDekho Specializes in:</strong>
							</p>
							<ul className={styles['specializations-list']}>
								<li>DevOps and Automation</li>
								<li>Installation Configuration and Setup</li>
								<li>DevOps Consultancy</li>
								<li>Software Application Design and Development</li>
								<li>Search Engine Optimization</li>
								<li>Responsive Web Design and Web Hosting</li>
							</ul>
						</div>
					</div>
					<div className={styles['empty-space']}></div>
				</div>
			</div>
		</>
	);
};

export default AboutUsPage;
