import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Neighbour extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="neighbour-area section-bg-1 pt-118 pb-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Explore Neighbour</h6>
			          <h1 className="section-title">What’s In Neighbour <br />
			            Explore Below</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__neighbour-tab-wrap">
			          <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			            <div className="nav">
			              <a className="active show" data-bs-toggle="tab" href="#liton_tab_4_1"><img src={publicUrl+"assets/img/neighbour/1.jpg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_2" ><img src={publicUrl+"assets/img/neighbour/2.jpg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_3" ><img src={publicUrl+"assets/img/neighbour/3.jpg"} alt="#" /></a>
			            </div>
			          </div>
			          <div className="tab-content">
			            <div className="tab-pane fade active show" id="liton_tab_4_1">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/1.jpg"} alt="#" />
			                    </div>
			                  </div>
			                  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/3.jpg"} alt="#" /></Link>
			                        <div className="search-by-place-badge">
			                          <ul>
			                            <li>9 Properties</li>
			                          </ul>
			                        </div>
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link to="/product-details">Shopping Center</Link></h4>
			                        <label><span className="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link to="/product-details">View Property <i className="flaticon-right-arrow" /></Link>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_2">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/2.jpg"} alt="#" />
			                    </div>
			                  </div>
			                  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
			                        <div className="search-by-place-badge">
			                          <ul>
			                            <li>9 Properties</li>
			                          </ul>
			                        </div>
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link to="/product-details">Medical Hospital</Link></h4>
			                        <label><span className="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link to="/product-details">View Property <i className="flaticon-right-arrow" /></Link>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_3">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-8">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/3.jpg"} alt="#" />
			                    </div>
			                  </div>
			                  <div className="col-lg-4">
			                    <div className="ltn__search-by-place-item neighbour-apartments-item">
			                      <div className="search-by-place-img">
			                        <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/4.jpg"} alt="#" /></Link>
			                        <div className="search-by-place-badge">
			                          <ul>
			                            <li>9 Properties</li>
			                          </ul>
			                        </div>
			                      </div>
			                      <div className="search-by-place-info go-top">
			                        <h4><Link to="/product-details">Children Playland</Link></h4>
			                        <label><span className="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
			                        <div className="search-by-place-brief">
			                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
			                            elit, sed do eiusmod tempor incididunt ut labore Enim
			                            ullamco laboris.</p>
			                        </div>
			                        <div className="search-by-place-btn ">
			                          <Link to="/product-details">View Property <i className="flaticon-right-arrow" /></Link>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
			          <div className="row">
			            <div className="col-lg-6">
			              <div id="accordion_2">
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
			                    <i className="flaticon-mortarboard" /> University / College
			                  </h6>
			                  <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
			                    <i className="flaticon-hospital" /> Medical Hospital
			                  </h6>
			                  <div id="faq-item-2-2" className="collapse show---" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <div className="ltn__video-img alignleft">
			                        <img src={publicUrl+"assets/img/bg/17.jpg"} alt="video popup bg image" />
			                        <a className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
			                          <i className="fa fa-play" />
			                        </a>
			                      </div>
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>                          
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
			                    <i className="flaticon-metro" /> Railway Station
			                  </h6>
			                  <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>
			                {/*  */}
			              </div>                                
			            </div>
			            <div className="col-lg-6">
			              <div id="accordion_3">
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-4" aria-expanded="false">
			                    <i className="flaticon-building" /> Shopping Mall
			                  </h6>
			                  <div id="faq-item-3-4" className="collapse" data-bs-parent="#accordion_3">
			                    <div className="card-body">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-5" aria-expanded="false">
			                    <i className="flaticon-airplane" /> Airport/Biman
			                  </h6>
			                  <div id="faq-item-3-5" className="collapse" data-bs-parent="#accordion_3">
			                    <div className="card-body">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-6" aria-expanded="false">
			                    <i className="flaticon-slider" /> Children Playland
			                  </h6>
			                  <div id="faq-item-3-6" className="collapse" data-bs-parent="#accordion_3">
			                    <div className="card-body">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
			                    </div>
			                  </div>
			                </div>
			                {/*  */}
			              </div>                                
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Neighbour