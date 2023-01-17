import React, { Component } from 'react';
import { Link,useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

import { useState, useEffect } from 'react';
import axios from 'axios';


const Login = () => {
	let history = useHistory();
	let publicUrl = process.env.PUBLIC_URL + '/'
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (localStorage.getItem("authToken")) {

			history.push("/");
		}
	}, [history]);

	const loginHandler = async (e) => {
		e.preventDefault();

		const config = {
			header: {
				//"Content-Type": "application/json"
				"Content-Type":"application/x-www-form-urlencoded",
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			}
		}

		try {
			const { data } = await axios.post(
				"http://localhost:5000/api/auth/login",
				{ email, password },
				config
			);
			localStorage.setItem("authToken", data.token);
			console.log("token save succesfully"); //remove later
			history.push("/");
			
		} catch (error) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError("");
			}, 5000)
		}
	}


	return (
		<div>
			<div className="ltn__login-area pb-65">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area text-center">
								<h1 className="section-title">Sign In <br />To  Your Account</h1>
								<p>Sign in to get regular updates from our Comapny DHS enterprices.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="account-login-inner">
								<form onSubmit={loginHandler} className="ltn__form-box contact-form-box">
									{error && <span className='section-title'>{error}</span>}
									<input type="email" required name="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} tabIndex={1} />
									<input type="password" required name="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} tabIndex={2} />
									<div className="btn-wrapper mt-0">
										<button className="theme-btn-1 btn btn-block" type="submit" tabIndex={3}>SIGN IN</button>
									</div>
									<div className="go-to-btn mt-20">
										<a href="#" title="Forgot Password?" tabIndex={4} data-bs-toggle="modal" data-bs-target="#ltn_forget_password_modal"><small>FORGOTTEN YOUR PASSWORD?</small></a>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="account-create text-center pt-50">
								<h4>DON'T HAVE AN ACCOUNT?</h4>
								<p>Add items to your wishlistget personalised recommendations <br />
									check out more quickly track your orders register</p>
								<div className="btn-wrapper go-top">
									<Link to="/register" tabIndex={5} className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="ltn__modal-area ltn__add-to-cart-modal-area----">
				<div className="modal fade" id="ltn_forget_password_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="ltn__quick-view-modal-inner">
									<div className="modal-product-item">
										<div className="row">
											<div className="col-12">
												<div className="modal-product-info text-center">
													<h4>FORGET PASSWORD?</h4>
													<p className="added-cart"> Enter you register email.</p>
													<form action="#" className="ltn__form-box">
														<input type="text" name="email" placeholder="Type your register email*" />
														<div className="btn-wrapper mt-0">
															<button className="theme-btn-1 btn btn-full-width-2" type="submit">Submit</button>
														</div>
													</form>
												</div>
												{/* additional-info */}
												<div className="additional-info d-none">
													<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
													<div className="payment-method">
														<img src={publicUrl + "assets/img/icons/payment.png"} alt="#" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// class Login extends Component {


//     render() {


//         }
// }

export default Login