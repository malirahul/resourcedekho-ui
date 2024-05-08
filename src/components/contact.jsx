import { useState } from 'react';
import emailjs from 'emailjs-com';
import React from 'react';

const initialState = {
	name: '',
	email: '',
	message: '',
};
export const Contact = (props) => {
	const [
		{ firstname, lastname, email, companyname, selectedOption, message },
		setState,
	] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};
	const clearState = () => setState({ ...initialState });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			firstname,
			lastname,
			email,
			companyname,
			selectedOption,
			message
		);

		/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				e.target,
				'YOUR_PUBLIC_KEY'
			)
			.then(
				(result) => {
					console.log(result.text);
					clearState();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div>
			<div id="contact">
				<div className="container">
					<div className="col-md-8">
						<div className="row">
							<div className="section-title">
								<h2>Have some Questions?</h2>
								<p>
									Fill in the below details regarding any queries related to our
									services, packages and IT consultancy. We will connect you
									soon.
								</p>
							</div>
							<form
								name="sentMessage"
								validate="true"
								onSubmit={handleSubmit}
							>
								<div className="row">
									<div className="col-md-3">
										<div className="form-group">
											<input
												type="text"
												id="firstname"
												name="firstname"
												className="form-control"
												placeholder="First Name"
												required
												onChange={handleChange}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-3">
										<div className="form-group">
											<input
												type="text"
												id="lastname"
												name="lastname"
												className="form-control"
												placeholder="Last Name"
												required
												onChange={handleChange}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="email"
												id="email"
												name="email"
												className="form-control"
												placeholder="Email"
												required
												onChange={handleChange}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="companyname"
												name="companyname"
												className="form-control"
												placeholder="Company Name"
												required
												onChange={handleChange}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<select
												id="querytype"
												name="querytype"
												className="form-control"
												value={selectedOption}
												onChange={handleChange}
												required
											>
												<option value="">Select</option>
												<option value="Services">Services</option>
												<option value="Packages">Packages</option>
												<option value="Consult">Consult</option>
												<option value="Others">Others</option>
											</select>
											<p className="help-block text-danger"></p>
										</div>
									</div>
								</div>
								<div className="form-group">
									<textarea
										name="message"
										id="message"
										className="form-control"
										rows="4"
										placeholder="Message"
										required
										onChange={handleChange}
									></textarea>
									<p className="help-block text-danger"></p>
								</div>
								<div id="success"></div>
								<button
									type="submit"
									className="btn btn-custom btn-lg"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-3 col-md-offset-1 contact-info">
						<div className="contact-item">
							<h3>Contact Info</h3>
							<p>
								<span>
									<i className="fa fa-map-marker"></i> Address
								</span>
								{props.data ? props.data.address : 'loading'}
							</p>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-phone"></i> Phone
								</span>{' '}
								{props.data ? props.data.phone : 'loading'}
							</p>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-envelope-o"></i> Email
								</span>{' '}
								{props.data ? props.data.email : 'loading'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
