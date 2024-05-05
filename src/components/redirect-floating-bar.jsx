import React from 'react';

export const RenderingBar = () => {
	return (
		<div>
			<style>
				{`
                .rendering-bar-container {
                    display: flex;
                    justify-content: center;
					padding:10px;
                }

                .rendering-bar {
                    border-radius: 8px;
                    padding: 20px 10%;
                    background-color: darkBlue;
                    max-width: 1100px;
                    width: 100%;
                }

                .content-wrapper {
                    display: flex;
                    align-items: center;
                }

                .content-left {
                    flex: 2;
                }

                .content-text {
                    color: #ffffff;
                    font-style: normal;
                    font-weight: 1000;
                    margin: 0;
                    font-size: 26px; 
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

				@media only screen and (max-width: 768px) {
                    .rendering-bar {
                        padding: 20px 5%;
                    }

                    .content-text {
                        font-size: 20px;
                    }

                    .content-wrapper {
                        flex-direction: column;
                        text-align: center;
                    }

                    .content-right {
                        justify-content: center;
                        margin-top: 10px; 
                    }
                }
                `}
			</style>
			<div className="rendering-bar-container">
				<div className="rendering-bar">
					<div className="content-wrapper">
						<div className="content-left">
							<p className="content-text">Why Join ResourceDekho ?</p>
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
