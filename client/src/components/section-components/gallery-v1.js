import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area">
				<div className="container-fluid">
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/21.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/21.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Heart of NYC</h6>
							<h1>Manhattan</h1>
						</div>
						<div className="btn-wrapper go-top">
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/22.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The luxury crib</h6>
							<h1>Upper East Side</h1>
						</div>
						<div className="btn-wrapper go-top">
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/23.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/23.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The Best City</h6>
							<h1>Jersey City</h1>
						</div>
						<div className="btn-wrapper go-top">
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/24.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/24.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Friendly neighborhood</h6>
							<h1>Queens</h1>
						</div>
						<div className="btn-wrapper go-top">
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/22.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The perfect city</h6>
							<h1>Greenville</h1>
						</div>
						<div className="btn-wrapper go-top">
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Gallery