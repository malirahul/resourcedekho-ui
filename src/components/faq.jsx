// import React from 'react';

// export const Faq = () => {
// 	return (
// 		<>
// 			<style>
// 				{`
//           .faq_26 {
//             position: relative;
//             z-index: 9999;
//             background: #fff;
//           }
//           .faq_26 .title {
//             padding: 20px 0;
//             cursor: pointer;
//           }
//           .faq_26 .title-section .subtitle {
//             margin-bottom: 18px;
//           }
//           .faq_26 .title-section .section-title {
//             margin-bottom: 0;
//             color: #0f0f0f;
//           }
//           .faq_26 .title-section .content {
//             color: rgba(1, 1, 28, 0.77);
//           }
//           @media (min-width: 768px) {
//             .faq_26 .title-section .content {
//               max-width: 70%;
//             }
//           }
//           .faq_26 .left-item {
//             background: #f5f5fe;
//             border-radius: 10px;
//           }
//           .faq_26 .content {
//             color: #80808d;
//             padding-bottom: 20px;
//           }
//           .faq_26 .content p:last-child {
//             margin-bottom: 0;
//             margin-right: 10px;
//           }
//           .faq_26 .icon {
//             color: #98a2b3;
//             z-index: 1;
//             border: 1px solid currentColor;
//             border-radius: 50%;
//             line-height: 1;
//             height: 19px;
//             margin-top: 5px;
//           }
//           @media (min-width: 1370px) {
//             .faq_26 .icon {
//               height: 19px;
//             }
//           }
//           @media (min-width: 1599px) {
//             .faq_26 .icon {
//               height: 23px;
//             }
//           }
//           .faq_26 .icon::before {
//             content: '\\e900';
//             color: #98a2b3;
//             float: right;
//             font-size: 17px;
//             transition: all 0.3s;
//             -webkit-transition: all 0.3s;
//             font-family: 'awesome-icons';
//           }
//           @media (min-width: 1599px) {
//             .faq_26 .icon::before {
//               font-size: 20px;
//             }
//           }
//           .faq_26 .item {
//             background: #fff;
//             border-top: 1px solid #80808d40;
//             padding: 12px 0;
//           }
//           .faq_26 .item.active .icon::before {
//             content: '\\e94b';
//           }
//           .faq_26 .item:first-child {
//             border-top: 1px solid transparent !important;
//           }
//           .faq_26 .question {
//             color: #05054e;
//           }
//           .faq_26 .left-item {
//             padding: 40px 30px;
//           }
//           .faq_26 .desc {
//             color: #3c3c50;
//           }
//         `}
// 			</style>
// 			<section className="faq_26 uiblock KvyebwWFOZos pad-y-9">
// 				<div className="container">
// 					<div className="row mar-b-8">
// 						<div className="col-12">
// 							<div className="title-section text-center text-md-left text-lg-left">
// 								<h2 className="section-title font-size-huge font-bold">
// 									Frequently asked Questions
// 								</h2>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="row align-items-center">
// 						<div className="col-12 col-md-4 pad-y-4 bg_color">
// 							<div className="title-section text-center text-md-left text-lg-left">
// 								<h2 className="section-title font-size-huge font-bold">
// 									Frequently <br />
// 									asked Questions{' '}
// 								</h2>
// 							</div>

// 							<div className="text-center left-item">
// 								<div className="img_wrap">
// 									<img
// 										decoding="async"
// 										className="img-responsive acc-image"
// 										src="https://cdn.hyperverge.co/wp-content/uploads/2024/02/Icon-set-7.png"
// 										loading="lazy"
// 										alt="Frequently asked Questions"
// 										width="145"
// 										height="145"
// 									/>
// 								</div>
// 								<p className="mar-t-7 mar-b-7 font-size-small desc">
// 									Still have questions? Please chat with our friendly team
// 								</p>
// 								<a
// 									className="btn btn-primary"
// 									href="/sign-up/"
// 									aria-label="new page"
// 								>
// 									Chat with our team
// 								</a>
// 							</div>
// 						</div>
// 						<div className="col-1"></div>
// 						<div className="col-12 col-md-7 mar-b-6 no-margin-bottom-md">
// 							<div className="item br-6 no-margin-top">
// 								<div
// 									className="title is-flex justify-content-between"
// 									id="tab_1"
// 								>
// 									<p className="h5 font-size-large question font-semibold no-margin-bottom">
// 										What is the role of digital identity verification in
// 										customer onboarding?
// 									</p>
// 									<span className="icon mar-x-5 no-margin-right"></span>
// 								</div>

// 								<div
// 									className="panel"
// 									style={{ display: 'none' }}
// 								>
// 									<div className="no-margin-bottom">
// 										<div className="content font-size-small">
// 											<p>
// 												Identity verification is essential to establish trust
// 												and security in online transactions, preventing fraud
// 												and ensuring compliance with regulatory requirements.
// 												Verified data sets play a pivotal role in maintaining
// 												the integrity of financial processes. Digital identity
// 												verification is crucial for establishing trust and
// 												security in online transactions and user onboarding.
// 											</p>
// 										</div>
// 										<a
// 											href=""
// 											className="font-size-base brand-primary"
// 											aria-label="btn_lbl"
// 										></a>
// 									</div>
// 								</div>
// 							</div>
// 							{/* Other items... */}
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };
