import React from 'react';

export const RenderingBar = () => {
	return (
		<div>
			<style>
				{`
				.rendering-bar-container {
					display: flex;
					justify-content: center;
				}
				
				.rendering-bar {
					border-radius: 8px;
					padding: 30px 150px;
					background-color: blue;
					max-width: 1100px;
					width: 100%;
				}
				
				.content-wrapper {
					display: flex;
					align-items: center;
				}
				
				.content-left {
					flex: 1;
				}
				
				.content-text {
					color: #ffffff;
					font-style: normal;
					font-weight: 1000;
					margin: 0;
                    font-size:26
				}
				
				.content-right {
					flex: 1;
					display: flex;
					justify-content: flex-end;
				}
				
				.button-wrapper {
					padding-left: 20px;
				}
				
				.custom-button {
					border-radius: 3px;
					background: linear-gradient(135deg, rgb(246, 250, 255) 0%, rgb(254, 254, 255) 100%);
					padding: 15px 40px;
					color: #000000;
					text-decoration: none;
				}
				
				.custom-button:hover {
					background: linear-gradient(135deg, rgb(226, 230, 235) 0%, rgb(234, 234, 235) 100%);
				}
				`}
			</style>
			<div className="rendering-bar-container">
				<div className="rendering-bar">
					<div className="content-wrapper">
						<div className="content-left">
							<p className="content-text">Why Join Us ResourceDekho ?</p>
						</div>
						<div className="content-right">
							<div className="button-wrapper">
								<a
									className="custom-button"
									href="/join_us"
								>
									<strong>Click here</strong>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
