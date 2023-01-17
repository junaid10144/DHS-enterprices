import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pb-115 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center">
					<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
						<img src={publicUrl+"assets/img/service/11.jpg"} alt="Image" />
					</div>
					</div>
					<div className="col-lg-7 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
						<h1 className="section-title">The Leading Real Estate
							Rental Marketplace<span>.</span></h1>
						<p>Over 39,000 people work for us in more than 70 countries all over the
							This breadth of global coverage, combined with specialist services</p>
						</div>
						<div className="about-us-info-wrap-inner about-us-info-devide---">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
						<div className="btn-wrapper animated">
						<Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>	
        }
}

export default AboutV5