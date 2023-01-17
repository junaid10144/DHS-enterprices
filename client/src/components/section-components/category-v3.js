import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__banner-area pt-120 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Property</h6>
						<h1 className="section-title">Property By Categories</h1>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/2.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/shop"> Apartments </Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/3.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/shop">  Condos</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/7.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/shop">  Houses</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/8.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/shop">  Retail</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/9.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/shop">  Villas</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			
        }
}

export default CategoryV3