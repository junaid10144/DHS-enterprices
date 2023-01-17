import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
			          <h1 className="section-title">Clients Feedback</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Ali Akbar</h5>
			                <label>Investor</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Bilal Siddique</h5>
			                <label>Investor</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Shahzad Ahmed</h5>
			                <label>Investor</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Ahmed Shahzad</h5>
			                <label>Investor</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial