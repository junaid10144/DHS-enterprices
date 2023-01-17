import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
						<h1 className="section-title">Our Core Services</h1>
					</div>
					</div>
				</div>
				<div className="row  justify-content-center">
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Property Management</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-mortgage" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Mortgage Service</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-operator" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Consulting Service</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house-1" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Home Buying</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house-3" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Home Selling</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-official-documents" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Escrow Services</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ServiceV5