import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg={publicUrl+"assets/img/bg/23.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Client,s Testimonial</h6>
			          <h1 className="section-title white-color">See What,s Our Client <br />
			            Says About Us</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-6-active slick-arrow-3">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
			          <div className="ltn__testimoni-info">
			            <div className="ltn__testimoni-author-ratting">
			              <div className="ltn__testimoni-info-inner">
			                <div className="ltn__testimoni-img">
			                  <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
			                </div>
			                <div className="ltn__testimoni-name-designation">
			                  <h5>Jacob William</h5>
			                  <label>Selling Agents</label>
			                </div>
			              </div>
			              <div className="ltn__testimoni-rating">
			                <div className="product-ratting">
			                  <ul>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			            <p> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
			          <div className="ltn__testimoni-info">
			            <div className="ltn__testimoni-author-ratting">
			              <div className="ltn__testimoni-info-inner">
			                <div className="ltn__testimoni-img">
			                  <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			                </div>
			                <div className="ltn__testimoni-name-designation">
			                  <h5>Kelian Anderson</h5>
			                  <label>Selling Agents</label>
			                </div>
			              </div>
			              <div className="ltn__testimoni-rating">
			                <div className="product-ratting">
			                  <ul>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			            <p> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
			          <div className="ltn__testimoni-info">
			            <div className="ltn__testimoni-author-ratting">
			              <div className="ltn__testimoni-info-inner">
			                <div className="ltn__testimoni-img">
			                  <img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" />
			                </div>
			                <div className="ltn__testimoni-name-designation">
			                  <h5>Adam Joseph</h5>
			                  <label>Selling Agents</label>
			                </div>
			              </div>
			              <div className="ltn__testimoni-rating">
			                <div className="product-ratting">
			                  <ul>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			            <p> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
			          <div className="ltn__testimoni-info">
			            <div className="ltn__testimoni-author-ratting">
			              <div className="ltn__testimoni-info-inner">
			                <div className="ltn__testimoni-img">
			                  <img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="#" />
			                </div>
			                <div className="ltn__testimoni-name-designation">
			                  <h5>James Carter</h5>
			                  <label>Selling Agents</label>
			                </div>
			              </div>
			              <div className="ltn__testimoni-rating">
			                <div className="product-ratting">
			                  <ul>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                    <li><a href="#"><i className="fas fa-star" /></a></li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			            <p> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default TestimonialV2